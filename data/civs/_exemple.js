"use strict";
/* =============================================================================
   MODÈLE de fiche de civilisation — COPIE ce fichier sous data/civs/<ton-id>.js
   (ex. data/civs/nuage-mongolie.js) et remplis-le. Puis ajoute la ligne
   <script src="data/civs/<ton-id>.js"> dans index.html (voir AJOUTER-SA-CIV.md).

   Règles importantes (pour rester compatible avec le site) :
   - Ne casse PAS ce format : c'est du JS « vanilla », chargé par <script> (pas de
     fetch, pas d'import) — le site doit marcher même ouvert en double-clic.
   - Chaque champ « contenu » est soit une string (un paragraphe), soit un tableau
     de strings (une liste à puces). Le **gras** est supporté (mini-markdown).
   - Si un terme en **gras** correspond à une entité BBG (unité, merveille,
     doctrine, gouverneur…), il devient automatiquement un lien vers l'encyclopédie.
   - id : minuscules, sans espace ni accent (ex. "nuage-mongolie"). Doit être unique.
   - contexte : "FFA" ou "Teamer".
   - couleur : la couleur d'accent de la civ, en hexa (ex. "#c0392b").
   - img : chemin d'un portrait local. Récupère-le via l'API du wiki Fandom
     (voir PROJET.md §2, pièges) et sauvegarde-le en img/<ton-id>.webp.
   ============================================================================= */

(window.CIV_FICHES = window.CIV_FICHES || []).push({
  id: "exemple-civ",
  leader: "Nom du leader",
  civilization: "Nom de la civilisation",
  contexte: "FFA",
  owner: "monpseudo",              // doit correspondre à l'id de ton profil (ci-dessous)
  img: "img/exemple-civ.webp",
  couleur: "#4f7cff",

  // Bonus (leader · civ · uniques) — ce qui s'affiche dans le panneau de droite.
  bonus: [
    "**Capacité de civ** : ce qu'elle fait, et comment tu l'exploites concrètement.",
    "**Capacité de leader** : idem.",
    "Unité/bâtiment/quartier unique : le **Nom de l'unique** et à quoi il sert."
  ],

  pantheon: "Le **panthéon** conseillé et pourquoi (ou une string vide si non pertinent).",
  victoire: "La condition de victoire visée et le plan général.",

  early_game: [
    "Ce que tu fais tours 1–50 (build order, priorités tech/civic, expansion…).",
    "Une puce par idée."
  ],
  mid_game: [
    "Tours 50–80 : comment tu montes en puissance."
  ],
  late_game: [
    "Tours 80+ : comment tu ferme la partie."
  ],

  // Optionnel : retire ce champ si tu n'as rien à dire dessus.
  guerre_diplomatie: "Positionnement militaire / diplo (facultatif).",

  snowball: "Le **mécanisme central** qui fait boule de neige — la clé de la civ.",

  pieges: [
    "L'erreur classique à éviter n°1.",
    "L'erreur classique à éviter n°2."
  ],

  // Optionnel : une note de contexte (source, date, solo vs multi…).
  notes: "Source : <lien/vidéo>. Recalé sur la méta BBG à jour."
});

/* Optionnel mais recommandé : déclare TON profil si tu n'existes pas déjà dans
   l'app. Ça crée ton espace sur l'accueil + dans le sélecteur « Je suis ».
   (Si ton profil existe déjà, supprime ce bloc.) */
(window.EXTRA_PROFILS = window.EXTRA_PROFILS || []).push({
  id: "monpseudo",
  nom: "Mon Pseudo",
  emoji: "🔥",
  couleur: "#4f7cff",
  mains: []                        // ids de leaders BBG (facultatif) — voir Backoffice
});
