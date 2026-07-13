# Civ Sheet — repère pour Claude

App web **statique** (HTML/CSS/JS vanilla), **zéro build, zéro dépendance**, qui doit
marcher aussi bien en ligne (GitHub Pages) qu'ouverte en double-clic (`file://`).

## Règles d'or (ne pas casser)
- **Pas de `fetch`, pas d'`import`/modules ES, pas de CDN.** Tout est embarqué et chargé
  par `<script>`. Les données de l'encyclopédie sont dans `data/*.js` (assignations
  `window.*`).
- Après **toute** modif de `script.js`, `style.css`, `data/` ou `index.html` :
  `node tools/bump-cache.mjs` (invalide le cache navigateur). Pour un 2e run le même jour,
  passe un tampon explicite : `node tools/bump-cache.mjs 2026-01-01-2`.
- **Déploiement** = `git commit` + `git push` sur `main` → GitHub Pages rebuild (~1 min).
- Vérifie ton travail : `node --check <fichier>.js` doit passer.

## Où est quoi
- `index.html` — squelette + liste des `<script>` chargés.
- `script.js` — données (`CIV_DATA`, `GUIDE_DATA`, `PERSONNES`) **et** rendu (~2400 lignes).
- `data/bbg-*.js` — encyclopédie BBG, **générée** par `tools/build-bbg-data.mjs` (ne pas
  éditer à la main ; régénérer avec `node tools/build-bbg-data.mjs <version>`).
- `data/civs/*.js` — **fiches de civ des amis** (une par fichier, voir ci-dessous).
- `data/profils.js` — profils des joueurs (éditables via le Backoffice de l'app).
- `PROJET.md` — architecture détaillée, schéma des fiches, conventions, méthode portraits.

## Ajouter une civilisation (contribution d'un ami)
**NE PAS éditer `CIV_DATA` dans `script.js`.** Une civ d'ami = **un fichier isolé**
`data/civs/<id>.js` qui fait `(window.CIV_FICHES = window.CIV_FICHES || []).push({...})`
(et peut déclarer le profil de l'auteur via `window.EXTRA_PROFILS`). `script.js` les
fusionne au chargement. Procédure complète et prompt prêt-à-coller :
**[AJOUTER-SA-CIV.md](AJOUTER-SA-CIV.md)** ; modèle commenté : `data/civs/_exemple.js`.
