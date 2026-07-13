# Ajouter ta civ à Civ Sheet 🏆

Tu veux ton espace sur le site, avec **ta civ**, ton portrait et tes chiffres surlignés ?
Ça prend ~10 min et **ton propre Claude fait tout le boulot**. Toi tu fournis juste
une transcription de vidéo (ou tes notes) et tu cliques deux boutons.

Le principe : **une civ = un seul fichier** (`data/civs/<ton-id>.js`). Tu n'ajoutes
qu'un fichier neuf → tu ne peux rien casser du site, et Hugo n'a qu'à cliquer *Merge*.

---

## Ce qu'il te faut
1. Un **compte GitHub** (gratuit).
2. **Claude Code** installé (l'assistant en ligne de commande), ou à défaut Claude sur le web.
3. Une **transcription YouTube** d'un bon joueur sur ta civ (ou tes propres notes).
   Astuce : sur une vidéo YouTube, « … » → « Afficher la transcription », copie tout.

---

## La méthode facile (avec Claude Code)

1. **Fork** le repo sur GitHub : va sur `https://github.com/HHemery/civ6-companion`
   et clique **Fork** (ça crée ta copie).
2. **Clone ta copie** sur ton PC et ouvre-la avec **Claude Code**.
3. **Colle le prompt ci-dessous** à ton Claude, en remplaçant la partie
   `<<< COLLE TA TRANSCRIPTION ICI >>>` par ta transcription.
4. Quand Claude a fini, il aura ouvert une **Pull Request**. Préviens Hugo, il merge.
   Ta civ apparaît en ligne ~1 min après. 🎉

### 👉 Prompt à coller à ton Claude

```
Tu travailles sur le repo "Civ Sheet" (une app web statique, zéro build, file://).
Objectif : ajouter MA fiche de civilisation, dans UN SEUL nouveau fichier.

Étapes :
1. Lis d'abord PROJET.md (architecture + conventions) et data/civs/_exemple.js (le modèle).
2. À partir de la transcription plus bas, crée data/civs/<mon-id>.js en COPIANT le
   format de _exemple.js. Remplis tous les champs (bonus, pantheon, victoire,
   early/mid/late_game, snowball, pieges) fidèlement à la transcription, recalé sur
   la méta BBG. Écris en français, style concis et actionnable, **gras** sur les
   termes clés (ils deviennent des liens vers l'encyclopédie).
   - mon-id = mon pseudo + la civ, en minuscules sans accent (ex. "leo-mongolie").
   - contexte = "FFA" ou "Teamer" (demande-moi si tu hésites).
   - owner = mon pseudo (ex. "leo"). Déclare mon profil via window.EXTRA_PROFILS
     dans le même fichier (garde le bloc en bas de _exemple.js) si je n'existe pas
     encore dans data/profils.js.
3. Récupère le portrait du leader via l'API du wiki Fandom (méthode décrite dans
   PROJET.md §2, point 2 : le CDN renvoie du WebP) et sauvegarde-le en
   img/<mon-id>.webp. Mets ce chemin dans le champ img.
4. Ajoute UNE ligne <script src="data/civs/<mon-id>.js?v=1"></script> dans index.html,
   juste AVANT la ligne <script src="script.js...">. (Le ?v=1 permet au script de
   cache-busting de la re-tamponner.)
5. Lance `node tools/bump-cache.mjs` (invalide le cache navigateur).
6. Vérifie que `node --check data/civs/<mon-id>.js` et `node --check script.js` passent.
7. Commit, push sur mon fork, et ouvre une Pull Request vers HHemery/civ6-companion:main
   intitulée "Ajoute ma civ : <Leader> — <Civilisation>".

Ne touche à AUCUN autre fichier existant (à part la ligne <script> d'index.html).

Ma civ : <Leader> — <Civilisation>, contexte <FFA/Teamer>, pseudo <mon pseudo>.
Transcription :
<<< COLLE TA TRANSCRIPTION ICI >>>
```

---

## Sans Claude Code (à la main)

1. Fork + clone comme ci-dessus.
2. Copie `data/civs/_exemple.js` en `data/civs/<ton-id>.js` et remplis-le (le fichier
   est commenté, suis les indications).
3. Mets ton portrait en `img/<ton-id>.webp`.
4. Dans `index.html`, ajoute `<script src="data/civs/<ton-id>.js?v=1"></script>` juste
   avant `<script src="script.js...">`.
5. `git add . && git commit -m "Ajoute ma civ" && git push`, puis ouvre une Pull Request.

---

## Pour Hugo (review express)
Une PR de contribution ne doit toucher que : **1 nouveau fichier** `data/civs/*.js`,
**1 image** `img/*.webp`, et **1 ligne** ajoutée dans `index.html` (+ le re-tampon
cache). Si c'est le cas → merge sans stress, ça ne peut pas casser le reste.
Ouvre la fiche une fois en ligne pour vérifier le rendu.
