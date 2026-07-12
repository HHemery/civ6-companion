// =============================================================================
// Génère les données de l'encyclopédie BBG depuis le site officiel.
//
//   node tools/build-bbg-data.mjs [version]
//
// Produit du JS VANILLA (globals window.*, chargeables en file:// via <script>,
// donc SANS import ES / fetch) — l'app d'Hugo reste zéro-build :
//   - data/bbg-leaders.js  (window.BBG_VERSION, window.BBG_LEADERS)
//   - data/bbg-flat.js     (window.BBG_CATEGORIES : unités, grands personnages,
//                           gouverneurs, cités-États, merveilles, doctrines…)
//
// Portage du scripts/build-data.mjs du repo PaulCuquemelle/civ (mêmes parsers ;
// seuls les en-têtes de sortie changent : globals JS au lieu de modules TS).
// À relancer quand BBG publie une nouvelle version (ex. 7.6).
// =============================================================================
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const VERSION = process.argv[2] || '7.5'
const LANG = 'fr_FR'
const HOST = 'https://civ6bbg.github.io'
const RAW = `https://raw.githubusercontent.com/civ6bbg/civ6bbg.github.io/main/${LANG}`

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = resolve(__dirname, '../data')

// Catégories « plates » à générer (1 élément = 1 nom + 1 description).
const FLAT = [
  { key: 'city_states', label: 'Cités-États', icon: '🏛️', page: 'city_states' },
  { key: 'world_wonder', label: 'Merveilles', icon: '🗿', page: 'world_wonder' },
  { key: 'natural_wonder', label: 'Merv. naturelles', icon: '🌋', page: 'natural_wonder' },
  { key: 'policies', label: 'Doctrines', icon: '📜', page: 'policies' },
  { key: 'religion', label: 'Religion', icon: '🛐', page: 'religion' },
  { key: 'congress', label: 'Congrès', icon: '🗳️', page: 'congress' },
]

// ---------------------------- helpers de nettoyage ---------------------------
function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#0*39;|&#x0*27;/gi, "'").replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
}
function stripTagsInline(s) {
  return decodeEntities(s.replace(/<img[^>]*>/gi, '').replace(/<[^>]+>/g, ''))
    .replace(/­/g, '').replace(/\s+/g, ' ').trim()
}
function cleanDesc(html) {
  let s = html.replace(/<br\s*\/?>/gi, '\n').replace(/<img[^>]*>/gi, '')
    .replace(/<\/?span[^>]*>/gi, '').replace(/<[^>]+>/g, '')
  s = decodeEntities(s).replace(/­/g, '')
  s = s.replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n')
  return s.trim()
}
function firstImgUrl(html) {
  const m = html.match(/<img[^>]*\ssrc="([^"]+)"/i)
  if (!m) return undefined
  const path = m[1]
  if (path.startsWith('/images/civVI')) return undefined
  return HOST + path.split('/').map(encodeURIComponent).join('/').replace(/%2F/g, '/')
}
function slug(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

// ------------------------------ parseur LEADERS ------------------------------
function typeFromKey(key) {
  if (key.startsWith('LOC_TRAIT_CIVILIZATION')) return 'Capacité de civilisation'
  if (key.startsWith('LOC_TRAIT_LEADER')) return 'Capacité de leader'
  if (key.startsWith('LOC_UNIT')) return 'Unité unique'
  if (key.startsWith('LOC_BUILDING') || key.includes('_BUILDING')) return 'Bâtiment unique'
  if (key.startsWith('LOC_DISTRICT')) return 'Quartier unique'
  if (key.startsWith('LOC_IMPROVEMENT')) return 'Amélioration unique'
  if (key.includes('_ABILITY')) return 'Capacité de leader'
  if (key.startsWith('LOC_TRAIT_')) return 'Capacité de leader'
  return 'Autre'
}
function parseLeaders(html) {
  const blocks = html.split(/<h2 class="civ-name">/).slice(1)
  const ENTRY_RE =
    /<!--(LOC_[A-Z0-9_ ]+?_NAME)-->\s*<h3 class="civ-ability-name"[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)<p class="civ-ability-desc actual-text"[^>]*>([\s\S]*?)<\/p>/g
  const leaders = []
  for (const block of blocks) {
    const titleEnd = block.indexOf('</h2>')
    if (titleEnd === -1) continue
    const titleHtml = block.slice(0, titleEnd)
    const title = stripTagsInline(titleHtml)
    if (!title) continue
    const image = firstImgUrl(titleHtml)
    const body = block.slice(titleEnd)
    const entries = []
    let m
    ENTRY_RE.lastIndex = 0
    while ((m = ENTRY_RE.exec(body)) !== null) {
      const entry = { type: typeFromKey(m[1].trim()), name: stripTagsInline(m[2]), description: cleanDesc(m[4]) }
      const icon = firstImgUrl(m[2])
      if (icon) entry.icon = icon
      entries.push(entry)
    }
    leaders.push({ id: slug(title), title, ...(image ? { image } : {}), entries })
  }
  return leaders
}

// ------------------------- parseur pages « plates » --------------------------
function bodyToDesc(body) {
  const at = body.match(/<p class="civ-ability-desc actual-text"[^>]*>([\s\S]*?)<\/p>/)
  if (at) return cleanDesc(at[1])
  const parts = [...body.matchAll(/<(?:p|small) class="civ-ability-desc"[^>]*>([\s\S]*?)<\/(?:p|small)>/g)]
    .map((mm) => cleanDesc(mm[1])).filter(Boolean)
  return parts.join('\n')
}
function parseFlat(html) {
  const MARK = /<h([12]) class="civ-name">([\s\S]*?)<\/h\1>/g
  const marks = []
  let m
  while ((m = MARK.exec(html)) !== null) {
    marks.push({ nameHtml: m[2], start: m.index, end: m.index + m[0].length })
  }
  const isPageTitle = (name) => /civ vi|\bbbg\b/i.test(name)
  const items = []
  const sectionImages = {}
  let section = ''
  for (let i = 0; i < marks.length; i++) {
    const mk = marks[i]
    const bodyEnd = i + 1 < marks.length ? marks[i + 1].start : html.length
    const body = html.slice(mk.end, bodyEnd)
    const name = stripTagsInline(mk.nameHtml)
    const description = bodyToDesc(body)
    if (description === '') {
      // en-tête de section (sauf le titre de page)
      if (name && !isPageTitle(name)) {
        section = name
        const img = firstImgUrl(mk.nameHtml)
        if (img) sectionImages[name] = img
      }
      continue
    }
    if (!name) continue
    const item = { id: slug((section ? section + '-' : '') + name), name, description }
    if (section) item.section = section
    const image = firstImgUrl(mk.nameHtml)
    if (image) item.image = image
    items.push(item)
  }
  return { items, sectionImages }
}

// ------------------------------- parseur UNITÉS ------------------------------
// Page « units » : chaque unité (h2 avec image) porte ses stats en paragraphes
// auto-décrits ; les h2 sans image sont des classes (Combat rapproché, Siège…).
function parseStatLine(text) {
  const norm = (s) => s.replace(/\s+/g, ' ').trim()
  const cleanVal = (s) => norm(s).replace(/\s*par tour$/i, '/tour')
  // « Coût en production: 20 »
  let m = text.match(/^(.*?):\s*(.+)$/s)
  if (m) return { label: norm(m[1]), value: cleanVal(m[2]) }
  // « 20 Combat rapproché », « 2 Point(s) de mouvement »
  m = text.match(/^([\d.,+\-]+)\s+(.+)$/s)
  if (m) return { label: norm(m[2]), value: cleanVal(m[1]) }
  return { label: norm(text), value: '' }
}

function parseUnits(html) {
  const blocks = html.split(/<h2 class="civ-name">/).slice(1)
  const items = []
  let section = ''
  const RE = /(?:<!--([^>]*?)-->\s*)?<(p|small) class="civ-ability-desc"[^>]*>([\s\S]*?)<\/\2>/g
  for (const b of blocks) {
    const end = b.indexOf('</h2>')
    if (end === -1) continue
    const head = b.slice(0, end)
    const name = stripTagsInline(head)
    const image = firstImgUrl(head)
    if (!image) { if (name) section = name; continue } // en-tête de classe
    const body = b.slice(end)
    const stats = []
    const tags = []
    let description = ''
    let m
    RE.lastIndex = 0
    while ((m = RE.exec(body)) !== null) {
      const key = (m[1] || '').trim()
      const text = cleanDesc(m[3])
      if (!text) continue
      if (/_DESCRIPTION$/.test(key)) { description = text; continue }
      if (m[2] === 'small') { tags.push(text); continue }
      stats.push(parseStatLine(text))
    }
    const item = { id: slug((section ? section + '-' : '') + name), name, description }
    if (section) item.section = section
    if (image) item.image = image
    if (stats.length) item.stats = stats
    if (tags.length) item.tags = tags
    items.push(item)
  }
  return { items, sectionImages: {} }
}

// --------------------------- parseur GRANDS PERSONNAGES ----------------------
// Page « great_people » : h2 = classe, h3 = ère, puis chaque personnage est un
// <p class="civ-ability-name"> (nom) + charges + civ-ability-desc (effet).
function parseGreatPeople(html) {
  const RE = /<h2 class="civ-name">([\s\S]*?)<\/h2>|<h3 class="civ-name">([\s\S]*?)<\/h3>|<!--(LOC_GREAT_PERSON_INDIVIDUAL_[A-Z0-9_]+_NAME)-->/g
  const marks = []
  let m
  while ((m = RE.exec(html)) !== null) {
    if (m[1] !== undefined) marks.push({ t: 'class', name: stripTagsInline(m[1]), raw: m[1], start: m.index, end: RE.lastIndex })
    else if (m[2] !== undefined) marks.push({ t: 'era', name: stripTagsInline(m[2]), start: m.index, end: RE.lastIndex })
    else marks.push({ t: 'person', start: m.index, end: RE.lastIndex })
  }
  const items = []
  const sectionImages = {}
  let klass = ''
  let era = ''
  for (let i = 0; i < marks.length; i++) {
    const mk = marks[i]
    if (mk.t === 'class') {
      klass = mk.name
      era = ''
      const img = firstImgUrl(mk.raw)
      if (img) sectionImages[mk.name] = img
      continue
    }
    if (mk.t === 'era') { era = mk.name; continue }
    const end = i + 1 < marks.length ? marks[i + 1].start : html.length
    const block = html.slice(mk.end, end)
    const names = [...block.matchAll(/<p class="civ-ability-name"[^>]*>([\s\S]*?)<\/p>/g)]
    if (!names.length) continue
    const name = stripTagsInline(names[0][1])
    if (!name) continue
    let charges = ''
    for (const n of names) if (/ICON_CHARGES/i.test(n[1])) charges = stripTagsInline(n[1])
    const description = [...block.matchAll(/<p class="civ-ability-desc"[^>]*>([\s\S]*?)<\/p>/g)]
      .map((x) => cleanDesc(x[1])).filter(Boolean).join('\n')
    const item = { id: slug(klass + '-' + name), name, description }
    if (klass) item.section = klass
    const tags = []
    if (era) tags.push(era)
    if (charges) tags.push(`${charges} charge${charges === '1' ? '' : 's'}`)
    if (tags.length) item.tags = tags
    items.push(item)
  }
  return { items, sectionImages }
}

// ------------------------------ parseur GOUVERNEURS --------------------------
// Page « governor » : h2 = gouverneur, h3 = promotion (description <p> imbriquée).
function parseGovernors(html) {
  const blocks = html.split(/<h2 class="civ-name">/).slice(1)
  const items = []
  const sectionImages = {}
  for (const b of blocks) {
    const end = b.indexOf('</h2>')
    if (end === -1) continue
    const head = b.slice(0, end)
    const gov = stripTagsInline(head)
    if (!gov) continue
    const img = firstImgUrl(head)
    if (img) sectionImages[gov] = img
    const body = b.slice(end)
    // Couvre LOC_GOVERNOR_PROMOTION_* (gouverneurs standard) et LOC_GOV_PROMO_*
    // (gouverneurs spéciaux BBG, ex. « Fire Is Born »).
    const promRE = /<!--LOC_GOV(?:ERNOR)?_PROMO(?:TION)?_[A-Z0-9_]+_NAME-->\s*<h3 class="civ-ability-name"[^>]*>([\s\S]*?)<\/h3>/g
    let pm
    while ((pm = promRE.exec(body)) !== null) {
      const inner = pm[1]
      const name = stripTagsInline(inner.split('<')[0])
      const dm = inner.match(/<p class="civ-ability-desc"[^>]*>([\s\S]*?)<\/p>/)
      const description = dm ? cleanDesc(dm[1]) : ''
      if (!name) continue
      items.push({ id: slug(gov + '-' + name), name, description, section: gov })
    }
  }
  return { items, sectionImages }
}

// ---------------------------------- run --------------------------------------
async function fetchPage(page) {
  const url = `${RAW}/${page}_${VERSION}.html`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Échec ${res.status} : ${url}`)
  return res.text()
}

const leaders = parseLeaders(await fetchPage('leaders'))
if (leaders.length === 0) throw new Error('Aucun leader — la structure de la page a peut-être changé.')

const leadersHeader = `"use strict";
// Données issues de ${HOST} (BBG ${VERSION}, ${LANG}) — page leaders_${VERSION}.html.
// GÉNÉRÉ par tools/build-bbg-data.mjs — ne pas éditer à la main.
window.BBG_VERSION = '${VERSION}';
window.BBG_LEADERS = `
writeFileSync(resolve(dataDir, 'bbg-leaders.js'), leadersHeader + JSON.stringify(leaders, null, 2) + ';\n', 'utf8')
console.log(`bbg-leaders.js : ${leaders.length} leaders, ${leaders.reduce((n, l) => n + l.entries.length, 0)} entrées`)

// Construit une catégorie, en n'incluant sectionImages que si non vide.
function makeCat(key, label, icon, parsed) {
  const cat = { key, label, icon, items: parsed.items }
  if (parsed.sectionImages && Object.keys(parsed.sectionImages).length) {
    cat.sectionImages = parsed.sectionImages
  }
  return cat
}

// Catégories à parseur dédié (stats, niveaux de regroupement particuliers).
const units = parseUnits(await fetchPage('units'))
const great = parseGreatPeople(await fetchPage('great_people'))
const govs = parseGovernors(await fetchPage('governor'))
for (const [n, p] of [['unités', units], ['grands personnages', great], ['gouverneurs', govs]]) {
  if (p.items.length === 0) throw new Error(`Aucun élément (${n}) — la page a peut-être changé.`)
}

const categories = [
  makeCat('units', 'Unités', '⚔️', units),
  makeCat('great_people', 'Grands personnages', '🌟', great),
  makeCat('governor', 'Gouverneurs', '🎖️', govs),
]
console.log(`  Unités : ${units.items.length} · Grands personnages : ${great.items.length} · Gouverneurs : ${govs.items.length}`)

for (const cat of FLAT) {
  const parsed = parseFlat(await fetchPage(cat.page))
  if (parsed.items.length === 0) throw new Error(`Aucun élément pour ${cat.page}.`)
  categories.push(makeCat(cat.key, cat.label, cat.icon, parsed))
  console.log(`  ${cat.label} : ${parsed.items.length} éléments`)
}

const flatHeader = `"use strict";
// Données issues de ${HOST} (BBG ${VERSION}, ${LANG}).
// GÉNÉRÉ par tools/build-bbg-data.mjs — ne pas éditer à la main.
window.BBG_CATEGORIES = `
writeFileSync(resolve(dataDir, 'bbg-flat.js'), flatHeader + JSON.stringify(categories, null, 2) + ';\n', 'utf8')
console.log(`bbg-flat.js : ${categories.length} catégories, ${categories.reduce((n, c) => n + c.items.length, 0)} éléments`)
