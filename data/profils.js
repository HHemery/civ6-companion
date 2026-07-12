"use strict";
// Profils des joueurs + leurs civs main.
// Éditable via le Backoffice de l'app (onglet Méta), puis committé grâce au
// bouton « Exporter » qui réécrit ce fichier. Chaque profil :
//   { id, nom, emoji, couleur, mains: [ids de window.BBG_LEADERS] }
// mains -> ids de data/bbg-leaders.js (ex. "japon-tokugawa").
window.PROFILS = [
  {
    id: "hugo",
    nom: "Hugo",
    emoji: "👑",
    couleur: "#e8b64c",
    mains: [
      "japon-tokugawa",
      "australie-john-curtin",
      "peuple-khmer-jayavarman-vii",
      "cris-poundmaker",
      "norvege-harald-hardrade-varegue",
      "babylone-hammurabi",
      "azteques-moctezuma",
      "mongolie-gengis-khan"
    ]
  },
  {
    id: "nuage",
    nom: "Nuage",
    emoji: "☁️",
    couleur: "#38bdf8",
    mains: [
      "incas-pachacutec"
    ]
  }
];
