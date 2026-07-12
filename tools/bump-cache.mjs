#!/usr/bin/env node
/* Réécrit TOUS les `?v=...` de index.html avec un tampon unique, pour ne plus
 * jamais oublier d'invalider le cache navigateur après une modif.
 *
 *   node tools/bump-cache.mjs            -> tampon = date du jour (YYYY-MM-DD-N)
 *   node tools/bump-cache.mjs 2026-07-13-9   -> tampon explicite
 *
 * Compromis assumé : un tampon partagé force le re-téléchargement de tous les
 * fichiers versionnés à chaque déploiement (ils sont servis gzip + mis en cache
 * ensuite), en échange de la garantie qu'aucun asset ne reste périmé. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const indexPath = fileURLToPath(new URL("../index.html", import.meta.url));
let html = readFileSync(indexPath, "utf8");

const today = new Date().toISOString().slice(0, 10);
const stamp = process.argv[2] || `${today}-1`;

const before = html;
let n = 0;
html = html.replace(/\?v=[0-9A-Za-z._-]+/g, () => { n++; return `?v=${stamp}`; });

if (html === before) {
  console.log("Aucun ?v= trouvé dans index.html — rien à faire.");
} else {
  writeFileSync(indexPath, html);
  console.log(`Cache-bust : ${n} référence(s) -> ?v=${stamp}`);
}
