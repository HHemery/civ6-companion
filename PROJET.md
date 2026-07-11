# Civ VI Companion — Document de passation & synchronisation

> Rédigé le 2026-07-10 par Claude (Fable 5) pour : **Paul** (dev, partie « data du jeu » du futur site
> commun), et toute **nouvelle session Claude Code** de Hugo. Contact projet : Hugo (HHemery).

---

## 1. C'est quoi

Un **mémo compétitif Civ 6 multijoueur (mod BBG 7.4.6, online speed)** : guides généraux
early/mid/late game, tier list, bilan de vidéos de tips, et des fiches de civilisations par joueur
(chaque membre du groupe d'amis a « son espace »). Plus un **pipeline d'analyse de parties**
(mod Lua qui logge les stats en jeu + parseur + rapports comparatifs vs joueurs pro).

- **Site en ligne** : https://hhemery.github.io/civ6-companion/
- **Repo public** : https://github.com/HHemery/civ6-companion (GitHub Pages, branche `main`, racine)
- **Dossier de travail local** : `C:\Users\hugoh\Desktop\appli_civ\` (le repo git est le sous-dossier
  `civ6-companion/` UNIQUEMENT — le reste — transcriptions, mods, parties — reste privé, hors repo)

## 2. Architecture du site (pour Paul)

**Zéro framework, zéro build, zéro dépendance** : 3 fichiers + images, conçu pour marcher aussi en
double-clic (`file://`) — donc **pas de fetch(), pas de modules ES, pas de CDN**. Tout est embarqué.

```
civ6-companion/
├── index.html      # squelette : sidebar (recherche + sélecteur "Je suis" + nav) et zone contenu
├── style.css       # thème sombre inspiré dpm.lol (fond #0b0d13, accents #4f7cff/#8b5cf6, or #e8b64c)
├── script.js       # TOUT : données + rendu (~2200 lignes)
└── img/*.webp      # portraits leaders (256px, servis WebP par le CDN du wiki Fandom)
```

### Modèle de données (dans script.js, tout en haut)

- **`CIV_DATA[]`** — une fiche par civ : `{ id, leader, civilization, contexte: "FFA"|"Teamer",
  owner: <id PERSONNES>, img, couleur (accent hex), bonus, pantheon, victoire, early_game, mid_game,
  late_game, guerre_diplomatie?, snowball, pieges, notes }`. Chaque champ de contenu = string
  (paragraphe) ou tableau (liste à puces). `**gras**` supporté (mini-markdown maison, échappé XSS).
- **`GUIDE_DATA[]`** — pages de guide : `{ id, titre, sousTitre, icon, sections: [{ titre, src?,
  blocs }] }`. Blocs typés : `{h4}`, `{p}`, `{ul: []}`, `{table: {head, rows}}`,
  `{tiers: [{label, color, items: [{nom, note, mine?}]}]}` (lignes de tier list). Page spéciale :
  `custom: "tracker"` → rendu custom (suivi de parties en localStorage, clé `civ6_games_v1`).
- **`PERSONNES[]`** — `{ id, nom, emoji }` (actuellement hugo 👑 et nuage ☁️). Le **sélecteur
  « Je suis »** (localStorage `civ6_moi`) filtre nav + accueil par personne.
- **Le rendu est 100 % générique** : ajouter une civ/une page = ajouter un objet, rien d'autre.

### Conventions & pièges connus (IMPORTANT)

1. `index.html` référence `script.js?v=YYYY-MM-DD-N` → **incrémenter à chaque modif de script.js**
   (les navigateurs cachent agressivement, on s'est fait avoir).
2. Portraits : API du wiki Fandom — `https://civilization.fandom.com/api.php?action=query&titles=`
   `File:<Leader>%20(Civ6).png&prop=imageinfo&iiprop=url&format=json` → le CDN sert du **WebP malgré
   l'extension .png** → sauvegarder en `.webp`.
3. Déploiement : `git add -A && git commit && git push` depuis `civ6-companion/` → Pages rebuild
   automatique (~1 min). gh CLI installé et authentifié (compte HHemery, keyring).
4. Scripts PowerShell : **UTF-8 AVEC BOM obligatoire** (PS 5.1 lit l'UTF-8 sans BOM comme de l'ANSI
   → erreurs de parse sur les caractères non-ASCII).
5. `tools/build-artifact.js` : construit une version mono-fichier (CSS/JS inlinés, images en data
   URI) — servait à l'hébergement Claude Artifacts, abandonné au profit de GitHub Pages.

### Pistes d'intégration avec la partie de Paul (suggestions, à discuter)

- Structure cible « site commun » : garder le tout **statique** (Pages gratuit) — ex. monorepo avec
  `/` = accueil commun, `/guides/` = cette app, `/data/` = l'encyclopédie de Paul.
- Sa data (civs, monuments, bâtiments…) en JSON statique peut : (a) alimenter des **infobulles/liens**
  depuis les fiches (chaque `**terme**` des fiches pourrait pointer vers sa page data), (b) générer
  automatiquement la section « Bonus » des fiches, (c) enrichir la tier list de stats objectives.
- Attention à la contrainte `file://` seulement si on veut garder le double-clic ; si le site commun
  est web-only, `fetch()` de ses JSON redevient possible (à trancher ensemble).

## 3. Le contenu : d'où il vient, comment on le fabrique

**Méthode** : Hugo fournit des **transcriptions YouTube** (joueurs pro : Herson [EN, CPL], Lege
[FR, « meilleur joueur de Khmer »], etc.) → Claude les lit intégralement → fiches/guides fidèles aux
sources, recalés sur la méta BBG 7.4 (changelogs officiels civ6bbg.github.io) et étiquetés
(source, date, solo vs multi — les conseils solo faux en multi sont signalés).

- **Guides généraux** (source principale : 2 vidéos Herson « toutes mes décisions T1-50 / T50-80 ») :
  réglages/mods du multi, early (Féodalité ≤T46, 8-10 villes), mid (1 tech/tour, Free Inquiry,
  great people), late, « la boucle des gros rendements » + records de Hugo.
- **Fiches** : Hugo = Tokugawa, Curtin, Jayavarman (v2), Poundmaker, Harald Varègue, **Babylone
  (Hammurabi, double source Lege+Herson)** en FFA ; Moctezuma, Gengis en Teamer. Nuage = Pachacuti.
- **Tier list BBG 7.4.6** (FFA S+→D et Teamer, Leader Pass inclus) : construite en croisant
  TierMaker communautaire, Herson BBG 6.0, changelogs 7.x, méta CPL — méthodo affichée sur la page.
  ⚠ À rafraîchir à chaque patch BBG.
- **Benchmarks pro extraits de screenshots** (Claude lit les images) : `parties/herson-japon-mp/`
  (courbe complète T1→T79, Féodalité T42, Indus T66) et `parties/lege-khmer-mp/` (foi +220/t à T60,
  Indus T61, prod empire 333→593). Ils calibrent le rapport automatique (voir §4).

## 4. Le pipeline d'analyse de parties (hors repo public)

- **`mods/ClaudeStatsLogger`** (v0.5, **validé en jeu**) : mod UI-only (zéro impact gameplay, pas de
  désync, `AffectsSavedGames=0`) qui écrit dans Lua.log à chaque tour : stats de TOUS les joueurs
  (science/culture/or/foi/villes/pop/techs/force militaire/era score/**food/prod empire**), détail
  des villes du joueur local (pop, districts, **production en cours**), villes ennemies **révélées
  uniquement** (fair-play), et la timeline (tech/civic/production terminées + **pose de districts
  avec coordonnées**). Installé dans les Mods du jeu.
- **`mods/ClaudeStatsReview`** (v0.5) : variante SANS filtre de brouillard pour relire les autosaves
  de parties terminées (elle logge toutes les villes de tous les joueurs). Un seul des deux actifs.
- **`tools/parse-stats.ps1`** : Lua.log → `parties/<nom>/players.csv, villes.csv, timeline.csv` +
  **rapport.md** (jalons vs repères pro : Féodalité ≤46, checkpoints T30/50/60/75, détection
  1 tech/tour, build order effectif). Garde-fou : refuse d'écraser une archive avec un log vide.
- **Chemins machine de Hugo** : saves+mods `C:\Users\hugoh\Documents\My Games\Sid Meier's
  Civilization VI\` ; logs+config `C:\Users\hugoh\AppData\Local\Firaxis Games\Sid Meier's
  Civilization VI\` (le dossier OneDrive équivalent est une vieille copie morte de 2021 à ignorer).
- ⚠ **Lua.log est réécrit à chaque LANCEMENT du jeu** (pas au crash) → parser AVANT de relancer.
- Usage multi : pas de mod en lobby (choix social) → autosaves 1/tour, puis recharge en solo
  post-game (chaque chargement = snapshot) ou CivVIReplay (outil externe, POV par joueur).

## 5. Backlog connu

1. Fiches à ajouter : les civs des autres amis (process : ils envoient leur transcription à Hugo).
2. Contenu teamer spécifique Moctezuma ; fiche Gengis calée BBG 5.9 à revérifier en 7.4.
3. Tier list à rafraîchir au prochain patch BBG ; records de Hugo à mettre à jour dans « Gros
   rendements » (il progresse vite).
4. Pipeline « niveau 2 » (pas commencé) : yt-dlp + ffmpeg (frames HUD) + OCR tesseract + sous-titres
   auto → extraire automatiquement les courbes des vidéos pro. Hugo intéressé, à monter à la demande.
5. Automatisation « les amis envoient un transcript → fiche auto » : nécessite une clé API payante
   (l'abonnement Claude n'est pas une API) → refusé pour l'instant, process manuel via Hugo.
6. Option : Civ6EGRM (rendu de la map tour par tour depuis les autosaves).
7. `transcription 3.txt` (467 lignes, non exploitée — probablement une 2e game Babylone de Lege) :
   à lire si on veut enrichir la fiche Babylone.

## 6. Historique en une ligne

Site créé le 2026-07-08 depuis les transcriptions de Hugo → design dpm.lol + portraits →
tier list + bilan tips + tier C/D → mod logger v0.1→v0.5 (validé en live sur 2 parties) →
benchmarks pro Herson/Lege extraits de screenshots → coaching temps réel (Tokugawa T51 : 65 % de la
courbe de Herson → T60 : 91 %) → publication GitHub Pages → espaces par personne (Hugo, Nuage) →
fiche Babylone. Mémoire persistante Claude à jour dans
`~\.claude\projects\C--Users-hugoh-Desktop-appli-civ\memory\`.
