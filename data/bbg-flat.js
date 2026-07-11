"use strict";
// Données issues de https://civ6bbg.github.io (BBG 7.5, fr_FR).
// GÉNÉRÉ par tools/build-bbg-data.mjs — ne pas éditer à la main.
window.BBG_CATEGORIES = [
  {
    "key": "units",
    "label": "Unités",
    "icon": "⚔️",
    "items": [
      {
        "id": "religieuses-missionnaire",
        "name": "Missionnaire",
        "description": "Peut convertir des citoyens à sa religion. Ne peut pas lancer de combat théologique avec les unités de religion différente, mais peut se défendre.",
        "section": "Religieuses",
        "image": "https://civ6bbg.github.io/images/units/Missionary.webp",
        "stats": [
          {
            "label": "Coût",
            "value": "75"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Puissance religieuse",
            "value": "100"
          },
          {
            "label": "Charges de propagation",
            "value": "3"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "religieuses-apotre",
        "name": "Apôtre",
        "description": "Peut convertir les citoyens à sa religion et lancer un combat théologique avec les unités de religion différente. Une fois par partie, peut Lancer une inquisition pour permettre l'achat d'inquisiteurs. Une fois par partie, peut prêcher une croyance pour ajouter une croyance supplémentaire à sa religion. L'apôtre disparaît dans l'opération.",
        "section": "Religieuses",
        "image": "https://civ6bbg.github.io/images/units/Apostle.webp",
        "stats": [
          {
            "label": "Coût",
            "value": "200"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Puissance religieuse",
            "value": "110"
          },
          {
            "label": "Charges de propagation",
            "value": "3"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "religieuses-inquisiteur",
        "name": "Inquisiteur",
        "description": "Peut réduire la présence d'autres religions sur son territoire de 75 %, et lancer un combat théologique contre les unités d'autres religions.",
        "section": "Religieuses",
        "image": "https://civ6bbg.github.io/images/units/Inquisitor.webp",
        "stats": [
          {
            "label": "Coût",
            "value": "75"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Puissance religieuse",
            "value": "75"
          },
          {
            "label": "Charges de propagation",
            "value": "3"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "religieuses-guru",
        "name": "Guru",
        "description": "Peut utiliser une charge pour soigner toutes les unités religieuses alliées adjacentes et lui-même. Ne peut pas lancer de combat théologique avec les unités de religion différente, mais peut se défendre.",
        "section": "Religieuses",
        "image": "https://civ6bbg.github.io/images/units/Guru.webp",
        "stats": [
          {
            "label": "Coût",
            "value": "120"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Puissance religieuse",
            "value": "90"
          },
          {
            "label": "Charges de soins",
            "value": "3"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "combat-rapproche-sabum-kibittum",
        "name": "Sâbum kibittum",
        "description": "Unité de combat rapproché de l'ère antique exclusive à Babylone.\n\nChamps de vision de 3 cases. Puissance de combat +17 contre les unités de cavalerie lourde et légère.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Sabum_Kibittum.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "17"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "17"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ],
        "tags": [
          "Rendu obsolète par Tactique militaire"
        ]
      },
      {
        "id": "combat-rapproche-guerrier",
        "name": "Guerrier",
        "description": "Unité de combat rapproché de l'ère antique.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Warrior.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "20"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "20"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Tactique militaire"
        ]
      },
      {
        "id": "combat-rapproche-gesates",
        "name": "Gésates",
        "description": "Unité de combat rapproché de l'ère antique exclusive à la Gaule, remplaçant le Guerrier.\n\nPuissance de combat +10 contre les unités militaires plus puissantes.\nPuissance de combat +5 contre les quartiers défendables.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Gaesatae.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "30"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "20"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Tactique militaire"
        ]
      },
      {
        "id": "combat-rapproche-guerrier-aigle",
        "name": "Guerrier aigle",
        "description": "Unité de combat rapproché de l'ère antique exclusive aux Aztèques, remplaçant le Guerrier.\n\nPuissance de base +8.\n\nTuer une unité a une chance de faire apparaître un Bâtisseur.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Eagle_Warrior.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "32"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "28"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Tactique militaire"
        ]
      },
      {
        "id": "combat-rapproche-spadassin",
        "name": "Spadassin",
        "description": "Unité de combat rapproché de l'ère classique.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Swordsman.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "45"
          },
          {
            "label": "7",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "36"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Poudre à canon"
        ]
      },
      {
        "id": "combat-rapproche-immortel",
        "name": "Immortel",
        "description": "Unité de combat rapproché de l'ère classique exclusive à la Perse, remplaçant le Spadassin.\n\nPossède une attaque à distance (2 de Portée).",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Immortal.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "50"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "36"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "23"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Poudre à canon"
        ]
      },
      {
        "id": "combat-rapproche-guerrier-chouette",
        "name": "Guerrier chouette",
        "description": "",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Ehuatl_Wearer.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "45"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "36"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          },
          {
            "label": "Unité de combat rapproché de l'ère classique exclusive au Teotihuacan, remplaçant le Spadassin. Vision +1. Ne nécessite pas de Fer.",
            "value": ""
          }
        ],
        "tags": [
          "Rendu obsolète par Poudre à canon"
        ]
      },
      {
        "id": "combat-rapproche-legion",
        "name": "Légion",
        "description": "Unité de combat rapproché de l'ère classique exclusive à Rome, remplaçant le Spadassin.\n\nPuissance de base +2.\n\nPossède 1 charge pour construire un fort.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Legion.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "55"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "38"
          },
          {
            "label": "Charges de bâtisseur",
            "value": "1"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Poudre à canon"
        ]
      },
      {
        "id": "combat-rapproche-ngao-mbeba",
        "name": "Ngao Mbeba",
        "description": "Unité de combat rapproché de l'ère classique exclusive au Kongo, remplaçant le Spadassin.\n\nPuissance de base +2.\nPuissance de combat en défense +10 contre les attaques à distance.\nPeut voir à travers les bois et les forêts tropicales.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Ngao_Mbeba.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "55"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "38"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Poudre à canon"
        ]
      },
      {
        "id": "combat-rapproche-hypaspiste",
        "name": "Hypaspiste",
        "description": "Unité de combat rapproché de l'ère classique exclusive à la Macédoine, remplaçant le Spadassin.\n\nPuissance de base +2.\nPuissance de combat +10 contre les quartiers défendables.\nBonus de soutien reçu +50%.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Hypaspist.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "50"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "38"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Poudre à canon"
        ]
      },
      {
        "id": "combat-rapproche-toa",
        "name": "Toa",
        "description": "Unité de combat rapproché de l'ère classique exclusive au Maori, remplaçant le Spadassin.\n\nPuissance de base +2.\nPuissance de combat -5 pour les unités militaires ennemies adjacentes.\n\nPeut construire un Pā (1 charge).\n\nNe nécessite pas de Fer.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Toa.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "60"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "38"
          },
          {
            "label": "Charges de bâtisseur",
            "value": "1"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Poudre à canon"
        ]
      },
      {
        "id": "combat-rapproche-militond",
        "name": "Militōnd",
        "description": "Unité de combat rapproché de l'ère classique exclusive à Théodoric le Grand, remplaçant le Spadassin.\n\nPuissance de combat +5 contre les quartiers et les unités dans un quartier. Gagne une promotion gratuite.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Milit%C5%8Dnd.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "45"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "38"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Pièces de rechange"
        ]
      },
      {
        "id": "combat-rapproche-berserker",
        "name": "Berserker",
        "description": "Unité de combat rapproché de l'ère médiévale exclusive à la Norvège, remplaçant l'Homme d'armes.\n\nPuissance de base -6.\nPM +2 lorsqu'elle commence son tour en territoire ennemi ou embarquée.\nPuissance de combat en attaque +10.\n\nPeut être achetée contre de la Foi.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Berserker.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "80"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "40"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Science militaire"
        ]
      },
      {
        "id": "combat-rapproche-homme-d-armes",
        "name": "Homme d'armes",
        "description": "Unité de combat rapproché de l'ère médiévale.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Man-At-Arms.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "80"
          },
          {
            "label": "7",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "46"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Science militaire"
        ]
      },
      {
        "id": "combat-rapproche-samourai",
        "name": "Samouraï",
        "description": "Unité de combat rapproché de l'ère médiévale exclusive au Japon, remplaçant l'Homme d'armes.\n\nPuissance de base +2.\nNe subit pas de pénalité de combat lorsqu'elle est blessée.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Samurai.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "80"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "48"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Science militaire"
        ]
      },
      {
        "id": "combat-rapproche-khevsour",
        "name": "Khevsour",
        "description": "Unité de combat rapproché de l'ère médiévale exclusive à la Géorgie, remplaçant l'Homme d'armes.\n\nPuissance de base +2.\nPuissance de combat +7 lorsque le combat se déroule sur une case de collines.\nPas de pénalité de mouvement sur les collines.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Khevsur.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "80"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "48"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Science militaire"
        ]
      },
      {
        "id": "combat-rapproche-mousquetaire",
        "name": "Mousquetaire",
        "description": "Unité de combat rapproché de la Renaissance.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Musketman.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "110"
          },
          {
            "label": "7",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "55"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Pièces de rechange"
        ]
      },
      {
        "id": "combat-rapproche-conquistador",
        "name": "Conquistador",
        "description": "Unité de combat rapproché de la Renaissance exclusive à l'Espagne, remplaçant le Mousquetaire.\n\nPuissance de base +3.\nPuissance de combat +5 si une unité religieuse se trouve dans un rayon d'une case.\nCapturer une ville dans un rayon d'une case la convertit à votre religion.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Conquistador.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "125"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "58"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Pièces de rechange"
        ]
      },
      {
        "id": "combat-rapproche-janissaire",
        "name": "Janissaire",
        "description": "Unité de combat rapproché de la Renaissance exclusive à Soliman Kanuni, remplaçant le Mousquetaire.\n\nPuissance de base +5.\nCommence avec une promotion gratuite.\n\nPour former un Janissaire, une ville doit avoir au moins 2 Citoyens. Si la ville est fondée par Soliman, elle perd 1 Citoyen.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Janissary.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "60"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "60"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Pièces de rechange"
        ]
      },
      {
        "id": "combat-rapproche-infanterie-de-ligne",
        "name": "Infanterie de ligne",
        "description": "Unité de combat rapproché de l'ère industrielle.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Line_Infantry.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "165"
          },
          {
            "label": "7",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "65"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Satellites"
        ]
      },
      {
        "id": "combat-rapproche-tunique-rouge",
        "name": "Tunique rouge",
        "description": "Unité de combat rapproché de l'ère industrielle exclusive à Victoria (ère impériale), remplaçant l'Infanterie de ligne.\n\nPuissance de base +5. Puissance de combat +5 sur un continent autre que celui de votre Capitale.\nPas de pénalité de PM et de Puissance de combat lors d'un débarquement.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Redcoat.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "180"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "70"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "combat-rapproche-garde-imperial",
        "name": "Garde impérial",
        "description": "Unité de combat rapproché de l'ère industrielle exclusive à la France, remplaçant l'Infanterie de ligne.\n\nPuissance de base +5.\nPuissance de combat +5 sur le continent de sa Capitale.\n\nTuer une unité octroie 10 points de Général illustre.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Garde_Imp%C3%A9riale.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "180"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "70"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "combat-rapproche-infanterie",
        "name": "Infanterie",
        "description": "Unité de combat rapproché de l'ère moderne.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Infantry.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "215"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "6 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "80"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "combat-rapproche-digger",
        "name": "Digger",
        "description": "Unité de combat rapproché de l'ère moderne exclusive à l'Australie, remplaçant l'Infanterie.\n\nPuissance de base +3. Puissance de combat +10 sur les cases côtières. Puissance de combat +5 en territoire neutre ou étranger.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Digger.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "215"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "6 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "83"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "combat-rapproche-infanterie-mecanisee",
        "name": "Infanterie mécanisée",
        "description": "Unité de combat rapproché de l'ère de l'information. Ignore les zones de contrôle.",
        "section": "Combat rapproché",
        "image": "https://civ6bbg.github.io/images/units/Mechanized_Infantry.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "325"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "8 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "90"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "anti-cavalerie-lancier",
        "name": "Lancier",
        "description": "Unité d'anti-cavalerie de l'ère antique.",
        "section": "Anti-cavalerie",
        "image": "https://civ6bbg.github.io/images/units/Spearman.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "32"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "25"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Fonte des métaux"
        ]
      },
      {
        "id": "anti-cavalerie-hoplite",
        "name": "Hoplite",
        "description": "Unité d'anti-cavalerie de l'ère antique exclusive à la Grèce, remplaçant le Lancier.\n\nPuissance de base +3.\nPuissance de combat +7 si adjacente à un autre Hoplite.",
        "section": "Anti-cavalerie",
        "image": "https://civ6bbg.github.io/images/units/Hoplite.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "32"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "28"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Fonte des métaux"
        ]
      },
      {
        "id": "anti-cavalerie-piquier",
        "name": "Piquier",
        "description": "Unité d'anti-cavalerie de l'ère médiévale.",
        "section": "Anti-cavalerie",
        "image": "https://civ6bbg.github.io/images/units/Pikeman.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "100"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "45"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Matériaux composites"
        ]
      },
      {
        "id": "anti-cavalerie-impi",
        "name": "Impi",
        "description": "Unité d'anti-cavalerie de l'ère médiévale exclusive aux Zoulous, remplaçant le Piquier.\n\nBonus de contournement doublé.\nExpérience +25%.\n\nCoût d'entretien réduit.",
        "section": "Anti-cavalerie",
        "image": "https://civ6bbg.github.io/images/units/Impi.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "62"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "45"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Matériaux composites"
        ]
      },
      {
        "id": "anti-cavalerie-gadrauht",
        "name": "Gadrauht",
        "description": "Unité d'anti-cavalerie de l'ère médiévale exclusive aux Goths, remplaçant le Piquier.\n\nPuissance de combat de base +2.\n\nTuer une unité rapporte 50% de sa Puissance de combat de base en Culture (vitesse en ligne). Pour former un Gadrauht, une ville doit avoir au moins 2 Citoyens. Former un Gadrauht fait perdre 1 Citoyen si la ville ne possède pas de Temple.\nGagne une promotion gratuite.",
        "section": "Anti-cavalerie",
        "image": "https://civ6bbg.github.io/images/units/Gadrauht.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "62"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "47"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Matériaux composites"
        ]
      },
      {
        "id": "anti-cavalerie-pique-et-tir",
        "name": "Pique et tir",
        "description": "Unité d'anti-cavalerie de la Renaissance.",
        "section": "Anti-cavalerie",
        "image": "https://civ6bbg.github.io/images/units/Pike_and_Shot.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "145"
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "55"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Corps interarmées"
        ]
      },
      {
        "id": "anti-cavalerie-caroleen",
        "name": "Caroléen",
        "description": "Unité d'anti-cavalerie de la Renaissance exclusive à la Suède, remplaçant le Pique et tir.\n\nPM +1.\nPuissance de combat +3 pour chaque PM inutilisé.",
        "section": "Anti-cavalerie",
        "image": "https://civ6bbg.github.io/images/units/Carolean.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "125"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "55"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Corps interarmées"
        ]
      },
      {
        "id": "anti-cavalerie-unite-antichar",
        "name": "Unité antichar",
        "description": "Unité d'anti-cavalerie de l'ère moderne.",
        "section": "Anti-cavalerie",
        "image": "https://civ6bbg.github.io/images/units/AT_Crew.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "200"
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "80"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "anti-cavalerie-unite-antichar-moderne",
        "name": "Unité antichar moderne",
        "description": "Unité d'anti-cavalerie de l'ère de l'information.",
        "section": "Anti-cavalerie",
        "image": "https://civ6bbg.github.io/images/units/Modern_AT.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "290"
          },
          {
            "label": "Coût d'entretien",
            "value": "8/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "90"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "combat-a-distance-frondeur",
        "name": "Frondeur",
        "description": "Unité d'attaque à distance de l'ère antique.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Slinger.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "17"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "5"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Puissance à distance",
            "value": "15"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Mécanique"
        ]
      },
      {
        "id": "combat-a-distance-archer",
        "name": "Archer",
        "description": "Unité d'attaque à distance de l'ère antique.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Archer.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "30"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "15"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "25"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique"
        ]
      },
      {
        "id": "combat-a-distance-hul-che",
        "name": "Hul-Che",
        "description": "Unité de combat à distance de l'ère antique exclusive aux Mayas, remplaçant l'Archer.\n\nPuissance de base à combat à distance +3.\nPuissance de combat +5 contre les unités blessées.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Hul'che.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "30"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "15"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "28"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique"
        ]
      },
      {
        "id": "combat-a-distance-archer-pitati",
        "name": "Archer Pítati",
        "description": "Unité de combat à distance de l'ère antique exclusive à la Nubie, remplaçant l'Archer.\n\nPuissance de base de combat rapproché +2 et à distance +5.\nPM +1.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/P%C3%ADtati_Archer.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "35"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "17"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "30"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique"
        ]
      },
      {
        "id": "combat-a-distance-archer-monte-saka",
        "name": "Archer monté Saka",
        "description": "Unité montée d'attaque à distance de l'ère classique exclusive à la Scythie.\n\nPortée d'attaque : 2.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Saka_Horse_Archer.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "35"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "20"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "25"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique"
        ]
      },
      {
        "id": "combat-a-distance-archer-sur-char-maryannu",
        "name": "Archer sur char Maryannu",
        "description": "Unité montée d'attaque à distance de l'ère antique exclusive à l'Égypte.\n\nDispose de 4 PM quand elle commence son tour sur une case sans caractéristique de terrain.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Maryannu_Chariot_Archer.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "45"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "25"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "35"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique"
        ]
      },
      {
        "id": "combat-a-distance-arbaletrier",
        "name": "Arbalétrier",
        "description": "Unité d'attaque à distance de l'ère médiévale.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Crossbowman.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "90"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "30"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "40"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique avancée"
        ]
      },
      {
        "id": "combat-a-distance-tigre-accroupi",
        "name": "Tigre accroupi",
        "description": "Unité de combat à distance de l'ère médiévale exclusive à la Chine, remplaçant l'Arbalétrier.\n\nPuissance d'attaque à distance +7 en cas d'attaque sur une unité adjacente.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Crouching_Tiger.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "85"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "30"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "40"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique avancée"
        ]
      },
      {
        "id": "combat-a-distance-keshik",
        "name": "Keshik",
        "description": "Unité montée de combat à distance exclusive à la Mongolie.\n\nFait profiter de sa vitesse de déplacement aux unités civiles et de soutien escortées.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Keshig.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "90"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "35"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "40"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique avancée"
        ]
      },
      {
        "id": "combat-a-distance-voi-chien",
        "name": "Voi Chiến",
        "description": "Unité de combat à distance de l'ère médiévale exclusive au Vietnam, remplaçant l'Arbalétrier.\n\nPuissance de base de combat rapproché +5.\nVision +1.\nLe Voi Chiến peut bouger après avoir attaqué.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Voi_Chi%E1%BA%BFn.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "100"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "35"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "40"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique avancée"
        ]
      },
      {
        "id": "combat-a-distance-hwacha",
        "name": "Hwacha",
        "description": "Unité de combat à distance de la Renaissance exclusive à la Corée, remplaçant le Canon de campagne.\n\nPuissance de base de combat rapproché -5.\n\nCoût d'entretien réduit.\n\nNe peut pas se déplacer et attaquer dans le même tour.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Hwacha.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "125"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "45"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "60"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique avancée"
        ]
      },
      {
        "id": "combat-a-distance-canon-de-campagne",
        "name": "Canon de campagne",
        "description": "Unité d'attaque à distance de l'ère industrielle.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Field_Cannon.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "165"
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "50"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "60"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Télécommunications"
        ]
      },
      {
        "id": "combat-a-distance-rta-pa",
        "name": "Rta Pa",
        "description": "Unité montée d'attaque à distance de la Renaissance exclusive au Tibet.\n\nPortée : 1\nPeut se déplacer après avoir attaqué.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Rta_Pa.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "125"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "50"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Puissance à distance",
            "value": "53"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique avancée"
        ]
      },
      {
        "id": "combat-a-distance-mitrailleuse",
        "name": "Mitrailleuse",
        "description": "Unité d'attaque à distance de l'ère moderne.",
        "section": "Combat à distance",
        "image": "https://civ6bbg.github.io/images/units/Machine_Gun.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "270"
          },
          {
            "label": "Coût d'entretien",
            "value": "6/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "70"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "85"
          },
          {
            "label": "Tirs antiaériens",
            "value": "80"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "siege-catapulte",
        "name": "Catapulte",
        "description": "Unité de siège de l'ère classique. Déplacement et attaque dans le même tour impossible sans la promotion Équipage expert.",
        "section": "Siège",
        "image": "https://civ6bbg.github.io/images/units/Catapult.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "60"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "25"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance de bombardement",
            "value": "35"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Acier"
        ]
      },
      {
        "id": "siege-onagre",
        "name": "Onagre",
        "description": "Unité de siège de l'ère classique exclusive à Jules César, remplaçant la Catapulte.\n\nCommence avec une promotion.",
        "section": "Siège",
        "image": "https://civ6bbg.github.io/images/units/Onager.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "60"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "25"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance de bombardement",
            "value": "35"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Acier"
        ]
      },
      {
        "id": "siege-trebuchet",
        "name": "Trébuchet",
        "description": "Unité de siège de l'ère médiévale. Déplacement et attaque dans le même tour impossible sans la promotion Équipage expert.",
        "section": "Siège",
        "image": "https://civ6bbg.github.io/images/units/Trebuchet.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "100"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "35"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance de bombardement",
            "value": "45"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Acier"
        ]
      },
      {
        "id": "siege-domrey",
        "name": "Domrey",
        "description": "Unité de siège de l'ère médiévale exclusive aux Khmers, remplaçant le Trébuchet.\n\nPuissance de base de combat rapproché et à distance +5.\nLe Domrey peut se déplacer et tirer dans le même tour.\nExerce une zone de contrôle.",
        "section": "Siège",
        "image": "https://civ6bbg.github.io/images/units/Domrey.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "100"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "40"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance de bombardement",
            "value": "50"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Acier"
        ]
      },
      {
        "id": "siege-bombarde",
        "name": "Bombarde",
        "description": "Unité de siège de la Renaissance. Déplacement et attaque dans le même tour impossible sans la promotion Équipage expert.",
        "section": "Siège",
        "image": "https://civ6bbg.github.io/images/units/Bombard.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "140"
          },
          {
            "label": "10",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "45"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance de bombardement",
            "value": "55"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Systèmes de guidage"
        ]
      },
      {
        "id": "siege-artillerie",
        "name": "Artillerie",
        "description": "Unité de siège de l'ère moderne. Déplacement et attaque dans le même tour impossible sans la promotion Équipage expert. Puissance de combat +5 contre les Centres-villes.",
        "section": "Siège",
        "image": "https://civ6bbg.github.io/images/units/Artillery.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "215"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "6 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "60"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance de bombardement",
            "value": "80"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "siege-lance-roquettes",
        "name": "Lance-roquettes",
        "description": "Unité de siège de l'ère de l'information. Déplacement et attaque dans le même tour impossible sans la promotion Équipage expert. Puissance de combat +5 contre les Centres-villes.",
        "section": "Siège",
        "image": "https://civ6bbg.github.io/images/units/Rocket_Artillery.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "340"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "8 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "70"
          },
          {
            "label": "Portée",
            "value": "3"
          },
          {
            "label": "Puissance de bombardement",
            "value": "100"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "cavalerie-legere-cavalier",
        "name": "Cavalier",
        "description": "Unité de cavalerie légère de l'ère classique.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Horseman.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "40"
          },
          {
            "label": "10",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "36"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Matériaux synthétiques"
        ]
      },
      {
        "id": "cavalerie-legere-coursier",
        "name": "Coursier",
        "description": "Unité de cavalerie légère de l'ère médiévale.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Courser.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "90"
          },
          {
            "label": "10",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "46"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Matériaux synthétiques"
        ]
      },
      {
        "id": "cavalerie-legere-cavalier-malon",
        "name": "Cavalier malón",
        "description": "Unité de cavalerie légère de l'ère médiévale exclusive aux Mapuches, remplaçant le Coursier.\n\nPuissance de base +2.\nPM +1 si elle commence son tour sur une case sans caractéristique de terrain.\nCommence avec une promotion gratuite.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Mal%C3%B3n_Raider.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "115"
          },
          {
            "label": "10",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "48"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Matériaux synthétiques"
        ]
      },
      {
        "id": "cavalerie-legere-cavalerie-oromo",
        "name": "Cavalerie oromo",
        "description": "Unité de cavalerie légère de l'ère médiévale exclusive à l'Éthiopie, remplaçant le Coursier.\n\nPuissance de base +2 et Champ de vision +1. Puissance de combat +4 lorsque le combat se déroule sur une case de collines.\nPM +1 quand elle commence son tour sur une case de collines.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Oromo_Cavalry.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "100"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "48"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ],
        "tags": [
          "Rendu obsolète par Matériaux synthétiques"
        ]
      },
      {
        "id": "cavalerie-legere-armee-noire",
        "name": "Armée noire",
        "description": "Unité de cavalerie légère de l'ère médiévale exclusive à la Hongrie, remplaçant le Coursier.\n\nPuissance de base +3.\nPuissance de combat +2 pour chaque unité levée adjacente.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Black_Army.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "102"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "49"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Matériaux synthétiques"
        ]
      },
      {
        "id": "cavalerie-legere-cavalerie",
        "name": "Cavalerie",
        "description": "Unité de cavalerie légère de l'ère industrielle.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Cavalry.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "155"
          },
          {
            "label": "10",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "62"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "cavalerie-legere-cosaque",
        "name": "Cosaque",
        "description": "Unité de cavalerie légère de l'ère industrielle exclusive à la Russie, remplaçant la Cavalerie.\n\nPuissance de combat +5 sur les cases de son territoire ou adjacentes.\nPeut se déplacer après avoir attaqué.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Cossack.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "170"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "62"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "cavalerie-legere-llanero",
        "name": "Llanero",
        "description": "Unité de cavalerie légère de l'ère industrielle exclusive à la Colombie, remplaçant la Cavalerie.\n\nPuissance de combat +2 pour chaque Llanero adjacent.\nSe soigne entièrement si elle est proche d'un Comandante General qui active sa compétence de retraite.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Llanero.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "165"
          },
          {
            "label": "10",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "62"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "cavalerie-legere-uhlan",
        "name": "Uhlan",
        "description": "Unité de cavalerie légère de la Renaissance exclusive à Stanislas II, remplaçant la Cavalerie.\n\nBonus de contournement doublé.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Uhlan.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "165"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "62"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "cavalerie-legere-hussard",
        "name": "Hussard",
        "description": "Unité de cavalerie légère de l'ère industrielle exclusive à la Hongrie, remplaçant le Cavalerie.\n\nPuissance de combat +2 pour chaque Cité-état vassale.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Husz%C3%A1r.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "167"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "63"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "cavalerie-legere-police-montee",
        "name": "Police montée",
        "description": "Unité de cavalerie légère de l'ère moderne exclusive au Canada.\n\nPuissance de combat +5 dans un rayon de 4 cases autour d'un parc national (passe à +10 s'il vous appartient).\nPeut créer un parc national.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Mountie.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "180"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "70"
          },
          {
            "label": "Ligne de mire",
            "value": "4"
          }
        ]
      },
      {
        "id": "cavalerie-legere-helicoptere",
        "name": "Hélicoptère",
        "description": "Unité de cavalerie légère de l'ère atomique.",
        "section": "Cavalerie légère",
        "image": "https://civ6bbg.github.io/images/units/Helicopter.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "300"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "7 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "86"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "cavalerie-lourde-char-de-guerre",
        "name": "Char de guerre",
        "description": "Unité de cavalerie lourde de l'ère antique exclusive au Sumer.\n\nPas de malus de combat contre les unités d'anti-cavalerie.\nPuissance de combat +4 face aux barbares.\nPM +1 si elle commence son tour en terrain dégagé. Ne subit pas de pénalité de mouvement en formation avec des unités civiles.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/War-Cart.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "20"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "20"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Étriers"
        ]
      },
      {
        "id": "cavalerie-lourde-char-lourd",
        "name": "Char lourd",
        "description": "Unité de cavalerie lourde de l'ère antique. PM +1 si elle commence son tour sur une case sans caractéristique de terrain.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Heavy_Chariot.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "32"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "28"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique"
        ]
      },
      {
        "id": "cavalerie-lourde-hetairoi",
        "name": "Hétairoi",
        "description": "Unité de cavalerie lourde de l'ère classique exclusive à Alexandre.\n\nPuissance de combat +5 si adjacente à un Général illustre.\nCommence avec une promotion gratuite.\nTuer une unité octroie 5 points de Général illustre.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Hetairoi.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "55"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "36"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique"
        ]
      },
      {
        "id": "cavalerie-lourde-varu",
        "name": "Vāru",
        "description": "Unité de cavalerie lourde de l'ère classique exclusive à l'Inde.\n\nChamp de vision +1.\n\nPuissance de combat -5 pour les unités militaires ennemies adjacentes.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Varu.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "60"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "40"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ],
        "tags": [
          "Rendu obsolète par Balistique"
        ]
      },
      {
        "id": "cavalerie-lourde-chevalier",
        "name": "Chevalier",
        "description": "Unité de cavalerie lourde de l'ère médiévale.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Knight.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "100"
          },
          {
            "label": "10",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "50"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Combustion"
        ]
      },
      {
        "id": "cavalerie-lourde-mamelouk",
        "name": "Mamelouk",
        "description": "Unité de cavalerie lourde de l'ère médiévale exclusive à l'Arabie, remplaçant le Chevalier.\n\nSe soigne toujours en fin de tour, même après un déplacement ou un combat.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Mamluk.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "110"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "50"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Combustion"
        ]
      },
      {
        "id": "cavalerie-lourde-tagma",
        "name": "Tagma",
        "description": "Unité de cavalerie lourde de l'ère médiévale exclusive à Basile II, remplaçant le Chevalier.\n\nPuissance de combat ou religieuse +2 pour les unités dans un rayon d'une case.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Tagma.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "110"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "50"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Combustion"
        ]
      },
      {
        "id": "cavalerie-lourde-cavalerie-mandekalou",
        "name": "Cavalerie Mandékalou",
        "description": "Unité de cavalerie lourde de l'ère médiévale exclusive au Mali, remplaçant le Chevalier.\n\nPuissance de base +3.\n\nLes Négociants terrestres à 4 cases ou moins sont immunisés au pillage.\n\nTuer une unité rapporte 50% de sa Puissance de combat de base en Or (vitesse en ligne).",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Mandekalu_Cavalry.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "110"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "53"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Combustion"
        ]
      },
      {
        "id": "cavalerie-lourde-hussard-aile",
        "name": "Hussard ailé",
        "description": "Unité de cavalerie lourde de la Renaissance exclusive à la Pologne, remplaçant le Cuirassier.\n\nPuissance de base -2.\n\nRepousse les unités ennemies en défense dans les combats où elle a l'avantage. Les défenseurs ne pouvant pas battre en retraite subissent des dégâts supplémentaires.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Winged_Hussar.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "165"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "62"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Combustion"
        ]
      },
      {
        "id": "cavalerie-lourde-cuirassier",
        "name": "Cuirassier",
        "description": "Unité de cavalerie lourde de l'ère industrielle.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Cuirassier.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "165"
          },
          {
            "label": "10",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "64"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Combustion"
        ]
      },
      {
        "id": "cavalerie-lourde-rough-rider",
        "name": "Rough Rider",
        "description": "Unité de cavalerie lourde de l'ère industrielle exclusive à Theodore Roosevelt (Rough Rider), remplaçant le Cuirassier.\n\nPM +1 et coût d'entretien réduit.\nPuissance de combat +5 lorsque le combat se déroule sur une case de collines.\n\nTuer une unité rapporte 25% de sa Puissance de combat de base en Culture (vitesse en ligne).",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Rough_Rider.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "192"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "64"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Combustion"
        ]
      },
      {
        "id": "cavalerie-lourde-blinde",
        "name": "Blindé",
        "description": "Unité de cavalerie lourde de l'ère moderne. PM +1 si elle commence son tour sur une case sans caractéristique de terrain.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Tank.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "240"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "6 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "85"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "cavalerie-lourde-tigre-i",
        "name": "Tigre I",
        "description": "Unité de cavalerie lourde de l'ère moderne exclusive à Frédéric Barberousse, remplaçant le blindé.\n\nPuissance de base +3.\nPuissance de base +3 si non adjacent à un autre Tiger I.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Tiger_I.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "240"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "8 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "88"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "cavalerie-lourde-blinde-moderne",
        "name": "Blindé moderne",
        "description": "Unité de cavalerie lourde de l'ère de l'information. Puissance de combat défensive +5 quand elle se trouve dans son territoire. Puissance de combat +5 contre les unités se trouvant en dehors de son territoire. PM +1 si elle commence son tour sur une case sans caractéristique de terrain.",
        "section": "Cavalerie lourde",
        "image": "https://civ6bbg.github.io/images/units/Modern_Armor.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "340"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "8 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "95"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "reconnaissance-eclaireur",
        "name": "Éclaireur",
        "description": "Unité de reconnaissance de l'ère antique.",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Scout.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "15"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "10"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "reconnaissance-chasseur-a-traineau",
        "name": "Chasseur à traîneau",
        "description": "Unité de reconnaissance de l'ère antique exclusive au Thulé, remplaçant l'Éclaireur.\n\nPossède 1 Charge pour aménager une cabane de chasse.",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Dogsled_Hunter.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "15"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "10"
          },
          {
            "label": "Charges de bâtisseur",
            "value": "1"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "reconnaissance-okichitaw",
        "name": "Okichitaw",
        "description": "Unité de reconnaissance de l'ère antique exclusive aux Cris, remplaçant l'Éclaireur.\n\nPuissance de base +5. Puissance de combat +5 contre les unités militaires plus puissantes.\nDispose d'une promotion gratuite.",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Okihtcitaw.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "20"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "15"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "reconnaissance-macana",
        "name": "Macana",
        "description": "Unité unique de reconnaissance de l'ère antique exclusive aux Taïnos, remplaçant le Guerrier.\n\nPM +1 et Vision +1.\nPuissance de base -5. Puissance de combat +5 contre les unités militaires plus puissantes.\n\nGarde ses promotions de reconnaissance à l'amélioration.\n\nTuer une unité rapporte 50% de sa Puissance de combat de base en Foi (vitesse en ligne).",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Macana.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "20"
          },
          {
            "label": "Coût d'entretien",
            "value": "0/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "15"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ],
        "tags": [
          "Rendu obsolète par Poudre à canon"
        ]
      },
      {
        "id": "reconnaissance-escarmoucheur",
        "name": "Escarmoucheur",
        "description": "Unité de reconnaissance de l'ère médiévale.",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Skirmisher.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "75"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "30"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Puissance à distance",
            "value": "35"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "reconnaissance-huaraca",
        "name": "Huaraca",
        "description": "Unité de reconnaissance de l'ère médiévale exclusive aux Incas, remplaçant l'Escarmoucheur.\n\nPuissance de base à distance +5. Peut attaquer deux fois dans le même tour.",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Warak%E2%80%99aq.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "82"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "30"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Puissance à distance",
            "value": "40"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "reconnaissance-ranger",
        "name": "Ranger",
        "description": "Unité de reconnaissance de l'ère industrielle.",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Ranger.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "190"
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "60"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Puissance à distance",
            "value": "65"
          },
          {
            "label": "Ligne de mire",
            "value": "4"
          }
        ]
      },
      {
        "id": "reconnaissance-garde-frontiere",
        "name": "Garde-frontière",
        "description": "Unité de reconnaissance de l'ère industrielle exclusive à l'Autriche, remplaçant le Ranger.\n\nPuissance de combat à distance de base +5. Puissance de combat +5 dans un rayon de 3 cases autour d'un territoire allié. Exerce une zone de contrôle.",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Grenzer.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "190"
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "60"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Puissance à distance",
            "value": "70"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "reconnaissance-highlander",
        "name": "Highlander",
        "description": "Unité de reconnaissance de l'ère industrielle exclusive à l'Écosse, remplaçant le Ranger.\n\nPuissance de base de combat rapproché +10 et à distance +5.\nPuissance de combat +5 sur les cases de collines et de bois.",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Highlander.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "190"
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "65"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Puissance à distance",
            "value": "70"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "reconnaissance-forces-speciales",
        "name": "Forces spéciales",
        "description": "Unité de reconnaissance de l'ère atomique. Le parachutage permet de se déplacer dans un rayon de 7 cases autour d'un territoire allié (12 si l'unité part d'un aérodrome ou d'une piste d'atterrissage). Peut attaquer directement les unités de soutien sans avoir à devoir éliminer les unités de combat en premier.",
        "section": "Reconnaissance",
        "image": "https://civ6bbg.github.io/images/units/Spec_Ops.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "260"
          },
          {
            "label": "Coût d'entretien",
            "value": "7/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "70"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "75"
          },
          {
            "label": "Ligne de mire",
            "value": "4"
          }
        ]
      },
      {
        "id": "soutien-belier",
        "name": "Bélier",
        "description": "Unité de soutien de l'ère antique. Si adjacente à une ville, les unités de combat rapproché et anti-cavalerie peuvent endommager ses remparts. N'affecte pas les villes dotées de remparts médiévaux ou de la Renaissance. Inefficace contre les défenses urbaines.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Battering_Ram.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "32"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Science militaire"
        ]
      },
      {
        "id": "soutien-tour-de-siege",
        "name": "Tour de siège",
        "description": "Unité de soutien de l'ère médiévale. Si adjacente à une ville, les unités de combat rapproché et anti-cavalerie peuvent ignorer ses remparts. N'affecte pas les villes dotées de remparts de la Renaissance. Inefficace contre les défenses urbaines.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Siege_Tower.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "50"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Science militaire"
        ]
      },
      {
        "id": "soutien-ingenieur-militaire",
        "name": "Ingénieur militaire",
        "description": "Unité de soutien de l'ère médiévale. Peut, une fois les prérequis technologiques et dogmatiques atteints, construire des routes, des chemins de fer, des forts, des pistes d'atterrissage, des silos à missiles et des tunnels de montagne. Peut utiliser une pour construire 20% d'un Canal, d'un Barrage ou d'un Aqueduc, et 50% d'une barrière anti-inondations. La formation nécessite une armurerie.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Military_Engineer.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "85"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Charges de bâtisseur",
            "value": "3"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "soutien-medecin",
        "name": "Médecin",
        "description": "Unité de soutien de l'ère industrielle. Augmente le soin des unités adjacentes par 20. PM +1 pour les unités de combat rapproché, anti-cavalerie et combat à distance qui commencent leur tour adjacentes au médecin.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Medic.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "150"
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "soutien-ballon-d-observation",
        "name": "Ballon d'observation",
        "description": "Unité de soutien de l'ère moderne. Portée +1 pour les unités de siège dans un rayon d'une case.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Observation_Balloon.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "120"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "soutien-canon-antiaerien",
        "name": "Canon antiaérien",
        "description": "Unité antiaérienne de l'ère moderne couvre des attaques aériennes dans un rayon de 1 case.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Anti-Air_Gun.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "227"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Tirs antiaériens",
            "value": "90"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "soutien-lance-missiles-sam",
        "name": "Lance-missiles SAM",
        "description": "Unité antiaérienne de l'ère de l'information couvre des attaques aériennes et nucléaires dans un rayon de 1 case.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Mobile_SAM.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "295"
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Tirs antiaériens",
            "value": "125"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "soutien-drone",
        "name": "Drone",
        "description": "Unité de soutien de l'ère atomique. Portée +1 et puissance de bombardement +5 pour les unités de siège dans un rayon d'une case.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Drone.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "210"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Ligne de mire",
            "value": "5"
          }
        ]
      },
      {
        "id": "soutien-convoi-de-ravitaillement",
        "name": "Convoi de ravitaillement",
        "description": "Unité de soutien de l'ère moderne. Augmente le soin des unités adjacentes par 20. PM +1 pour les unités qui commencent leur tour adjacentes au convoi de ravitaillement.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Supply_Convoy.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "225"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "soutien-jahazi",
        "name": "Jahazi",
        "description": "Unité navale de soutien de l'ère antique exclusive au Swahili.\n\nPeut aménager un bateau de pêche, qui fournira +2 Or (2 Charges).\n\nLes unités embarquées dans un rayon de 2 cases gagnent 1 PM et ignorent les pénalités de mouvement. Peut être capturée.",
        "section": "Soutien",
        "image": "https://civ6bbg.github.io/images/units/Jahazi.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "30"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Charges de bâtisseur",
            "value": "2"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "combat-rapproche-en-mer-galere",
        "name": "Galère",
        "description": "Unité navale de combat rapproché de l'ère antique.",
        "section": "Combat rapproché en mer",
        "image": "https://civ6bbg.github.io/images/units/Galley.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "32"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "30"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Moteur à vapeur"
        ]
      },
      {
        "id": "combat-rapproche-en-mer-langskip",
        "name": "Langskip",
        "description": "Unité navale de combat rapproché exclusive à Harald Konge, remplaçant la Galère.\n\nPM +1 si elle commence son tour sur une case de côte.",
        "section": "Combat rapproché en mer",
        "image": "https://civ6bbg.github.io/images/units/Viking_Longship.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "32"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "30"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Électricité"
        ]
      },
      {
        "id": "combat-rapproche-en-mer-bireme",
        "name": "Birème",
        "description": "Unité navale de combat rapproché de l'ère antique exclusive à la Phénicie, remplaçant la Galère.\n\nPuissance de base +5 et PM +1.\nLes Négociants ne peuvent pas être pillés s'ils se trouvent dans un rayon de 4 cases d'eau autour d'une Birème.",
        "section": "Combat rapproché en mer",
        "image": "https://civ6bbg.github.io/images/units/Bireme.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "32"
          },
          {
            "label": "Coût d'entretien",
            "value": "1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "35"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Moteur à vapeur"
        ]
      },
      {
        "id": "combat-rapproche-en-mer-caravelle",
        "name": "Caravelle",
        "description": "Unité navale de combat rapproché de la Renaissance.",
        "section": "Combat rapproché en mer",
        "image": "https://civ6bbg.github.io/images/units/Caravel.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "120"
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "55"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ],
        "tags": [
          "Rendu obsolète par Corps interarmées"
        ]
      },
      {
        "id": "combat-rapproche-en-mer-nau",
        "name": "Nau",
        "description": "Unité navale de combat rapproché de la Renaissance exclusive au Portugal, remplaçant la Caravelle.\n\nCommence avec une promotion gratuite.\nCoût d'entretien réduit.\n\nPossède 2 charges pour construire des feitorias.",
        "section": "Combat rapproché en mer",
        "image": "https://civ6bbg.github.io/images/units/Nau.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "120"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "55"
          },
          {
            "label": "Charges de bâtisseur",
            "value": "2"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ],
        "tags": [
          "Rendu obsolète par Corps interarmées"
        ]
      },
      {
        "id": "combat-rapproche-en-mer-cuirasse-a-vapeur",
        "name": "Cuirassé à vapeur",
        "description": "Unité navale de combat rapproché de l'ère industrielle.",
        "section": "Combat rapproché en mer",
        "image": "https://civ6bbg.github.io/images/units/Ironclad.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "190"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "70"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "combat-rapproche-en-mer-destroyer",
        "name": "Destroyer",
        "description": "Unité navale de combat rapproché de l'ère atomique. Révèle les unités d'assaut en mer dans son champ de vision.",
        "section": "Combat rapproché en mer",
        "image": "https://civ6bbg.github.io/images/units/Destroyer.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "270"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "7 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "6"
          },
          {
            "label": "Combat rapproché",
            "value": "90"
          },
          {
            "label": "Tirs antiaériens",
            "value": "90"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "combat-a-distance-en-mer-quadrireme",
        "name": "Quadrirème",
        "description": "Unité navale de combat à distance de l'ère antique.",
        "section": "Combat à distance en mer",
        "image": "https://civ6bbg.github.io/images/units/Quadrireme.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "60"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "20"
          },
          {
            "label": "Portée",
            "value": "1"
          },
          {
            "label": "Puissance à distance",
            "value": "25"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Acier"
        ]
      },
      {
        "id": "combat-a-distance-en-mer-dromon",
        "name": "Dromon",
        "description": "Unité navale de combat à distance de l'ère classique exclusive à Byzance, remplaçant la Quadrirème.\n\nPuissance de base +5. Portée +1.",
        "section": "Combat à distance en mer",
        "image": "https://civ6bbg.github.io/images/units/Dromon.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "60"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "20"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "25"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Acier"
        ]
      },
      {
        "id": "combat-a-distance-en-mer-fregate",
        "name": "Frégate",
        "description": "Unité navale de combat à distance de la Renaissance.",
        "section": "Combat à distance en mer",
        "image": "https://civ6bbg.github.io/images/units/Frigate.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "140"
          },
          {
            "label": "10",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "45"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "55"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Lasers"
        ]
      },
      {
        "id": "combat-a-distance-en-mer-jonque",
        "name": "Jonque",
        "description": "Unité navale de combat à distance de l'ère de la Renaissance exclusive à l'Indonésie, remplaçant la Frégate.\n\nPM +1.\nPuissance de combat +5 si elle est en formation avec une autre unité, qui profite de la vitesse de déplacement de la Jonque.",
        "section": "Combat à distance en mer",
        "image": "https://civ6bbg.github.io/images/units/Jong.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "172"
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "45"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "55"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Lasers"
        ]
      },
      {
        "id": "combat-a-distance-en-mer-de-zeven-provincien",
        "name": "De Zeven Provinciën",
        "description": "Unité navale de combat à distance de la Renaissance exclusive aux Pays-Bas, remplaçant la Frégate.\n\nPuissance de base de combat rapproché et à distance +5. Puissance de combat +7 contre les quartiers défendables.",
        "section": "Combat à distance en mer",
        "image": "https://civ6bbg.github.io/images/units/De_Zeven_Provinci%C3%ABn.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "140"
          },
          {
            "label": "5",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "5/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "50"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "60"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Lasers"
        ]
      },
      {
        "id": "combat-a-distance-en-mer-minas-geraes",
        "name": "Minas Geraes",
        "description": "Unité navale de combat à distance de l'ère industrielle exclusive au Brésil, remplaçant le Cuirassé.\n\nPuissance de base de combat rapproché et à distance -5. Puissance de combat rapproché et à distance +10 à Raffinage.",
        "section": "Combat à distance en mer",
        "image": "https://civ6bbg.github.io/images/units/Minas_Geraes.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "215"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "6 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "60"
          },
          {
            "label": "Portée",
            "value": "3"
          },
          {
            "label": "Puissance à distance",
            "value": "70"
          },
          {
            "label": "Tirs antiaériens",
            "value": "95"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "combat-a-distance-en-mer-cuirasse",
        "name": "Cuirassé",
        "description": "Unité navale de combat à distance de l'ère moderne. Couvre des attaques aériennes et nucléaires dans un rayon de 1 case.",
        "section": "Combat à distance en mer",
        "image": "https://civ6bbg.github.io/images/units/Battleship.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "215"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "6 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "65"
          },
          {
            "label": "Portée",
            "value": "3"
          },
          {
            "label": "Puissance à distance",
            "value": "75"
          },
          {
            "label": "Tirs antiaériens",
            "value": "90"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "combat-a-distance-en-mer-croiseur-lance-missiles",
        "name": "Croiseur lance-missiles",
        "description": "Unité navale de combat à distance de l'ère de l'information. Couvre des attaques aériennes et nucléaires dans un rayon de 1 case.",
        "section": "Combat à distance en mer",
        "image": "https://civ6bbg.github.io/images/units/Missile_Cruiser.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "340"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "8 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "75"
          },
          {
            "label": "Portée",
            "value": "4"
          },
          {
            "label": "Puissance à distance",
            "value": "90"
          },
          {
            "label": "Tirs antiaériens",
            "value": "110"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "assaut-en-mer-corsaire",
        "name": "Corsaire",
        "description": "Unité navale d'assaut en mer de la Renaissance. Ne peut être vu que par d'autres unités navales d'assaut en mer à moins de lui être adjacent. Révèle les unités d'assaut en mer dans son champ de vision.",
        "section": "Assaut en mer",
        "image": "https://civ6bbg.github.io/images/units/Privateer.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "140"
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "40"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "50"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Lasers"
        ]
      },
      {
        "id": "assaut-en-mer-chien-de-mer",
        "name": "Chien de mer",
        "description": "Unité navale d'assaut en mer de la Renaissance exclusive à l'Angleterre, remplaçant le Corsaire.\n\nPuissance de base +3.\nTuer une unité navale offre une chance de la capturer.\nNe peut être vue que par d'autres unités navales d'assaut en mer à moins de lui être adjacent. Révèle les unités d'assaut en mer dans son champ de vision.",
        "section": "Assaut en mer",
        "image": "https://civ6bbg.github.io/images/units/Sea_Dog.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "140"
          },
          {
            "label": "Coût d'entretien",
            "value": "4/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "40"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "53"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Télécommunications"
        ]
      },
      {
        "id": "assaut-en-mer-corsaire-barbaresque",
        "name": "Corsaire barbaresque",
        "description": "Unité navale d'assaut en mer de l'ère médiévale exclusive aux Ottomans, remplaçant le Corsaire.\n\nLes assauts côtiers ne coûtent pas de PM.\n\nPeut naviguer sur les cases d'océan sans avoir recherché la [COLOR_FLOAT_SCIENCE]Cartographie[ENDCOLOR].\nNe peut être vu que par d'autres unités navales d'assaut en mer à moins de lui être adjacent. Révèle les unités d'assaut en mer dans le champ de vision.",
        "section": "Assaut en mer",
        "image": "https://civ6bbg.github.io/images/units/Barbary_Corsair.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "120"
          },
          {
            "label": "Coût d'entretien",
            "value": "3/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "40"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "50"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ],
        "tags": [
          "Rendu obsolète par Lasers"
        ]
      },
      {
        "id": "assaut-en-mer-sous-marin",
        "name": "Sous-marin",
        "description": "Unité navale d'assaut en mer de l'ère moderne. Ne peut être vu que par d'autres unités navales d'assaut en mer à moins de lui être adjacent. Révèle les unités d'assaut en mer dans son champ de vision.",
        "section": "Assaut en mer",
        "image": "https://civ6bbg.github.io/images/units/Submarine.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "240"
          },
          {
            "label": "Coût d'entretien",
            "value": "6/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "65"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "75"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "assaut-en-mer-u-boot",
        "name": "U-Boot",
        "description": "Unité navale d'assaut en mer de l'ère moderne exclusive à l'Allemagne, remplaçant le Sous-marin.\n\nPuissance de combat +10 et Champ de vision +1 sur les cases d'océan.\nNe peut être vue que par d'autres unités navales d'assaut en mer à moins de lui être adjacent. Révèle les unités d'assaut en mer dans son champ de vision.",
        "section": "Assaut en mer",
        "image": "https://civ6bbg.github.io/images/units/U-Boat.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "215"
          },
          {
            "label": "Coût d'entretien",
            "value": "6/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "65"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "75"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      },
      {
        "id": "assaut-en-mer-sous-marin-nucleaire",
        "name": "Sous-marin nucléaire",
        "description": "Unité navale d'assaut en mer de l'ère de l'information. Peut lancer des bombes A et H. Ne peut être vu que par d'autres unités navales d'assaut en mer à moins de lui être adjacent. Révèle les unités d'assaut en mer dans le champ de vision.",
        "section": "Assaut en mer",
        "image": "https://civ6bbg.github.io/images/units/Nuclear_Submarine.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "340"
          },
          {
            "label": "Coût d'entretien",
            "value": "8/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "4"
          },
          {
            "label": "Combat rapproché",
            "value": "80"
          },
          {
            "label": "Portée",
            "value": "2"
          },
          {
            "label": "Puissance à distance",
            "value": "85"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "transport-en-mer-porte-avions",
        "name": "Porte-avions",
        "description": "Unité navale de l'ère atomique capable de transporter des unités aériennes. Puissance de combat défensive +25 contre les avions si adjacente à une unité qui possède de la Puissance anti-aérienne.",
        "section": "Transport en mer",
        "image": "https://civ6bbg.github.io/images/units/Aircraft_Carrier.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "270"
          },
          {
            "label": "Coût d'entretien",
            "value": "7/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "80"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "nihang-nihang",
        "name": "Nihang",
        "description": "Unité exclusive à la Cité-état de Lahore avec un arbre de compétences spécifique. Peut être achetée avec de la Foi. Puissance de combat +12 si vous possédez une caserne. De même si vous possédez une armurerie ou une école militaire. Reçoit les bonus des Généraux illustres de toutes les ères.",
        "section": "Nihang",
        "image": "https://civ6bbg.github.io/images/units/Nihang.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "50"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "2"
          },
          {
            "label": "Combat rapproché",
            "value": "28"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "moine-guerrier-moine-guerrier",
        "name": "Moine-guerrier",
        "description": "Cette unité de combat rapproché terrestre rapide profite d'un arbre de promotions spécifique.\n\nPuissance de combat +1 pour chaque dogme Industriel ou antérieur découvert.\nReçoit tous les bonus de combat d'une unité de classe combat rapproché, à l'exception du bonus face aux unités anti-cavalerie. Reçoit les bonus des Généraux illustres de toutes les ères. Le coût d'achat augmente avec votre avancée dans les arbres technologique et dogmatique",
        "section": "Moine-guerrier",
        "image": "https://civ6bbg.github.io/images/units/Warrior_Monk.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "30"
          },
          {
            "label": "Coût d'entretien",
            "value": "2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "3"
          },
          {
            "label": "Combat rapproché",
            "value": "28"
          },
          {
            "label": "Ligne de mire",
            "value": "2"
          }
        ]
      },
      {
        "id": "chasseur-aerien-biplan",
        "name": "Biplan",
        "description": "Unité de combat aérien de l'ère moderne.",
        "section": "Chasseur aérien",
        "image": "https://civ6bbg.github.io/images/units/Biplane.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "215"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "6 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "6"
          },
          {
            "label": "Combat rapproché",
            "value": "75"
          },
          {
            "label": "Portée",
            "value": "4"
          },
          {
            "label": "Puissance à distance",
            "value": "70"
          },
          {
            "label": "Ligne de mire",
            "value": "4"
          }
        ]
      },
      {
        "id": "chasseur-aerien-chasseur",
        "name": "Chasseur",
        "description": "Unité de combat aérien de l'ère atomique.",
        "section": "Chasseur aérien",
        "image": "https://civ6bbg.github.io/images/units/Fighter.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "260"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "7 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "8"
          },
          {
            "label": "Combat rapproché",
            "value": "95"
          },
          {
            "label": "Portée",
            "value": "5"
          },
          {
            "label": "Puissance à distance",
            "value": "95"
          },
          {
            "label": "Ligne de mire",
            "value": "4"
          }
        ]
      },
      {
        "id": "chasseur-aerien-p-51-mustang",
        "name": "P-51 Mustang",
        "description": "Unité de chasseur aérien de l'ère atomique exclusive à l'Amérique, remplaçant le Chasseur.\n\nPortée d'attaque +2. Puissance de combat +5 contre les chasseurs. Expérience de combat +50 %.",
        "section": "Chasseur aérien",
        "image": "https://civ6bbg.github.io/images/units/P-51_Mustang.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "260"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "7 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "10"
          },
          {
            "label": "Combat rapproché",
            "value": "95"
          },
          {
            "label": "Portée",
            "value": "5"
          },
          {
            "label": "Puissance à distance",
            "value": "95"
          },
          {
            "label": "Ligne de mire",
            "value": "4"
          }
        ]
      },
      {
        "id": "chasseur-aerien-chasseur-a-reaction",
        "name": "Chasseur à réaction",
        "description": "Unité de l'ère de l'information.",
        "section": "Chasseur aérien",
        "image": "https://civ6bbg.github.io/images/units/Jet_Fighter.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "325"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "8 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "10"
          },
          {
            "label": "Combat rapproché",
            "value": "105"
          },
          {
            "label": "Portée",
            "value": "6"
          },
          {
            "label": "Puissance à distance",
            "value": "105"
          },
          {
            "label": "Ligne de mire",
            "value": "5"
          }
        ]
      },
      {
        "id": "bombardier-aerien-bombardier",
        "name": "Bombardier",
        "description": "Unité de bombardement aérien de l'ère atomique.",
        "section": "Bombardier aérien",
        "image": "https://civ6bbg.github.io/images/units/Bomber.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "280"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "7 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "10"
          },
          {
            "label": "Combat rapproché",
            "value": "80"
          },
          {
            "label": "Portée",
            "value": "10"
          },
          {
            "label": "Puissance de bombardement",
            "value": "105"
          },
          {
            "label": "Ligne de mire",
            "value": "4"
          }
        ]
      },
      {
        "id": "bombardier-aerien-bombardier-a-reaction",
        "name": "Bombardier à réaction",
        "description": "Unité de bombardement aérien de l'ère de l'information.",
        "section": "Bombardier aérien",
        "image": "https://civ6bbg.github.io/images/units/Jet_Bomber.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "350"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "8 , 1/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "15"
          },
          {
            "label": "Combat rapproché",
            "value": "85"
          },
          {
            "label": "Portée",
            "value": "15"
          },
          {
            "label": "Puissance de bombardement",
            "value": "115"
          },
          {
            "label": "Ligne de mire",
            "value": "5"
          }
        ]
      },
      {
        "id": "robot-geant-de-la-mort-robot-geant-de-la-mort",
        "name": "Robot géant de la mort",
        "description": "Super-unité de l'ère de l'information. Peut se déplacer et combattre dans l'eau. Résiste aux armes de destruction massive. Ses capacités de combat peuvent être améliorées en étudiant de nouvelles technologies.",
        "section": "Robot géant de la mort",
        "image": "https://civ6bbg.github.io/images/units/Giant_Death_Robot.webp",
        "stats": [
          {
            "label": "Coût en production",
            "value": "750"
          },
          {
            "label": "1",
            "value": ""
          },
          {
            "label": "Coût d'entretien",
            "value": "15 , 2/tour"
          },
          {
            "label": "Point(s) de mouvement",
            "value": "5"
          },
          {
            "label": "Combat rapproché",
            "value": "140"
          },
          {
            "label": "Portée",
            "value": "3"
          },
          {
            "label": "Puissance à distance",
            "value": "120"
          },
          {
            "label": "Tirs antiaériens",
            "value": "120"
          },
          {
            "label": "Ligne de mire",
            "value": "3"
          }
        ]
      }
    ]
  },
  {
    "key": "great_people",
    "label": "Grands personnages",
    "icon": "🌟",
    "items": [
      {
        "id": "general-illustre-boadicee",
        "name": "Boadicée",
        "description": "Crée un ingénieur militaire dans votre Capitale.",
        "section": "Général illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-hannibal-barca",
        "name": "Hannibal Barca",
        "description": "Octroie un niveau de promotion à une unité militaire terrestre.",
        "section": "Général illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-sun-tzu",
        "name": "Sun Tzu",
        "description": "L'Art de la guerre",
        "section": "Général illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "general-illustre-trung-trac",
        "name": "Trưng Trắc",
        "description": "Réduit l'usure de guerre de votre empire de 25 % de façon permanente.",
        "section": "Général illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-thelfl-d",
        "name": "Æthelflæd",
        "description": "Crée un Trébuchet dans votre Capitale.",
        "section": "Général illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-el-cid",
        "name": "El Cid",
        "description": "Transforme une unité militaire terrestre en régiment.",
        "section": "Général illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-tamerlan",
        "name": "Tamerlan",
        "description": "Octroie un niveau de promotion à une unité terrestre et augmente son EXP de 25 %.",
        "section": "Général illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-amina",
        "name": "Amina",
        "description": "Vous recevez 2  émissaires.",
        "section": "Général illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-gustave-ii-adolphe",
        "name": "Gustave II Adolphe",
        "description": "Création instantanée d'une bombarde avec un niveau de promotion.",
        "section": "Général illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-jeanne-d-arc",
        "name": "Jeanne d'Arc",
        "description": "Transforme une unité militaire terrestre en armée.",
        "section": "Général illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-dandara",
        "name": "Dandara",
        "description": "Crée dans la ville la plus proche un exemplaire de l'unité de soutien la plus avancée que vous pouvez former.",
        "section": "Général illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-jose-de-san-martin",
        "name": "José de San Martín",
        "description": "Crée un Blindé avec une promotion gratuite. Pétrole +2 par tour.",
        "section": "Général illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-napoleon-bonaparte",
        "name": "Napoléon Bonaparte",
        "description": "Création instantanée d'un Ballon.",
        "section": "Général illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-lakshmi-bai",
        "name": "Lakshmî Bâî",
        "description": "Crée un Supercopter avec une promotion gratuite.",
        "section": "Général illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-john-monash",
        "name": "John Monash",
        "description": "Octroie un niveau de promotion et un bonus d'expérience de combat de 75 % pour une unité militaire terrestre.",
        "section": "Général illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-marina-raskova",
        "name": "Marina Raskova",
        "description": "Emplacements pour unités aériennes +1 pour le quartier présent sur cette case.",
        "section": "Général illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-samory-toure",
        "name": "Samory Touré",
        "description": "Forme immédiatement une unité des forces spéciales dotée d'un niveau de promotion.",
        "section": "Général illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-tupac-amaru",
        "name": "Tupac Amaru",
        "description": "Crée une Infanterie dans chaque quartier non défendable et non défendu de la ville cible.",
        "section": "Général illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-douglas-macarthur",
        "name": "Douglas MacArthur",
        "description": "Crée un Blindé avec un niveau de promotion. Uranium +2 par tour.",
        "section": "Général illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-dwight-eisenhower",
        "name": "Dwight Eisenhower",
        "description": "Production +15% pour la formation d'unités militaires.",
        "section": "Général illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-gueorgui-joukov",
        "name": "Gueorgui Joukov",
        "description": "Bonus de contournement +50 % pour toutes les unités terrestres.",
        "section": "Général illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-sudirman",
        "name": "Sudirman",
        "description": "Crée un Chasseur avec une promotion gratuite. Aluminium +2 par tour.",
        "section": "Général illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-ahmad-shah-massoud",
        "name": "Ahmad Shah Massoud",
        "description": "Création instantanée d'une unité antichar moderne avec un niveau de promotion.",
        "section": "Général illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "general-illustre-vijaya-wimalaratne",
        "name": "Vijaya Wimalaratne",
        "description": "Octroie un niveau de promotion et un bonus d'expérience de combat de 100 % pour une unité militaire terrestre.",
        "section": "Général illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-artemisia",
        "name": "Artemisia",
        "description": "Octroie un niveau de promotion à une unité militaire navale.",
        "section": "Amiral illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-gaius-duilius",
        "name": "Gaius Duilius",
        "description": "Transforme une unité militaire navale en flotte.",
        "section": "Amiral illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-hannon-le-navigateur",
        "name": "Hannon le Navigateur",
        "description": "Crée une unité navale de combat rapproché avec +2  PM.",
        "section": "Amiral illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-themistocle",
        "name": "Thémistocle",
        "description": "Crée instantanément une quadrirème. Production +20 % pour les unités navales d'attaque à distance.",
        "section": "Amiral illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-himerios",
        "name": "Himérios",
        "description": "Octroie un niveau de promotion et un bonus d'expérience de combat de 25 % à une unité militaire navale.",
        "section": "Amiral illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-leif-erikson",
        "name": "Leif Erikson",
        "description": "Champ de vision +1 pour toutes les unités navales, qui peuvent se déplacer sur des cases d'océan sans technologie préalable.",
        "section": "Amiral illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-rajendra-chola",
        "name": "Rajendra Chola",
        "description": "Votre capitale reçoit 1 copie gratuite de la ressource de luxe sur cette case. Or +300 (en vitesse normale).",
        "section": "Amiral illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-zheng-he",
        "name": "Zheng He",
        "description": "Octroie un négociant gratuit dans cette ville et une route commerciale. Les routes commerciales étrangères connectées à cette ville rapportent 2 Or aux deux villes.",
        "section": "Amiral illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-fernand-de-magellan",
        "name": "Fernand de Magellan",
        "description": "Puissance de combat +3 pour toutes les unités navales.",
        "section": "Amiral illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-francis-drake",
        "name": "Francis Drake",
        "description": "Crée un Corsaire avec un niveau de promotion. Butin issu du pillage des routes commerciales maritimes +50%. Production +25% pour les unités militaires navales de combat à distance et d'assaut en mer.",
        "section": "Amiral illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-alvaro-de-bazan",
        "name": "Álvaro de Bazán",
        "description": "Transforme une unité militaire navale en armada.",
        "section": "Amiral illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-yi-sun-sin",
        "name": "Yi Sun-sin",
        "description": "Création instantanée d'un cuirassé à vapeur avec un niveau de promotion. Charbon +1 par tour.",
        "section": "Amiral illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-ching-shih",
        "name": "Ching Shih",
        "description": "Or +500 (en vitesse normale). Butin issu du pillage des routes commerciales maritimes +60 % pour les unités militaires.",
        "section": "Amiral illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-horatio-nelson",
        "name": "Horatio Nelson",
        "description": "Construit instantanément un phare et un chantier naval dans ce quartier. Bonus de contournement +50 % pour toutes les unités navales.",
        "section": "Amiral illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-laskarina-bouboulina",
        "name": "Laskarina Bouboulina",
        "description": "Octroie un niveau de promotion et un bonus d'expérience de combat de 50 % pour une unité militaire navale.",
        "section": "Amiral illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-franz-von-hipper",
        "name": "Franz von Hipper",
        "description": "Création instantanée d'un cuirassé avec un niveau de promotion. Charbon +1 par tour.",
        "section": "Amiral illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-joaquim-marques-lisboa",
        "name": "Joaquim Marques Lisboa",
        "description": "L'usure de la guerre progresse 25 % moins vite.",
        "section": "Amiral illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-matthew-perry",
        "name": "Matthew Perry",
        "description": "Octroie suffisamment d' émissaires pour devenir le suzerain de cette cité-état, et retire les émissaires de tous les autres joueurs.",
        "section": "Amiral illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-togo-heihachiro",
        "name": "Tōgō Heihachirō",
        "description": "Loyauté +6 par tour pour cette ville.",
        "section": "Amiral illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-chester-nimitz",
        "name": "Chester Nimitz",
        "description": "Crée instantanément un sous-marin doté d'un niveau de promotion. Pétrole +1 par tour. Production +20 % pour la formation d'unités navales de combat rapproché.",
        "section": "Amiral illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-grace-hopper",
        "name": "Grace Hopper",
        "description": "Octroie 2 technologies gratuites choisies au hasard.",
        "section": "Amiral illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-serguei-gorchkov",
        "name": "Sergueï Gorchkov",
        "description": "Octroie un niveau de promotion et un bonus d'expérience de combat de 100 % pour une unité militaire navale.",
        "section": "Amiral illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "amiral-illustre-clancy-fernando",
        "name": "Clancy Fernando",
        "description": "Octroie un niveau de promotion et un bonus d'expérience de combat de 200 % pour une unité militaire navale.",
        "section": "Amiral illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-bi-sheng",
        "name": "Bi Sheng",
        "description": "Permet à cette ville de construire un quartier de plus que le maximum autorisé par sa population.\nDéclenche un Eurêka ! pour l'imprimerie.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-imhotep",
        "name": "Imhotep",
        "description": "Production +175 pour la construction de merveilles, et valeur doublée si la merveille est de l'Antiquité ou de l'ère classique.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-isidore-de-milet",
        "name": "Isidore de Milet",
        "description": "Production +215 pour la construction de merveilles.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère médiévale",
          "2 charges"
        ]
      },
      {
        "id": "ingenieur-illustre-jacques-de-st-georges",
        "name": "Jacques de St-Georges",
        "description": "Construction instantanée de remparts antiques et médiévaux dans cette ville.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère médiévale",
          "3 charges"
        ]
      },
      {
        "id": "ingenieur-illustre-filippo-brunelleschi",
        "name": "Filippo Brunelleschi",
        "description": "Production +315 pour la construction de merveilles.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère de la Renaissance",
          "2 charges"
        ]
      },
      {
        "id": "ingenieur-illustre-leonard-de-vinci",
        "name": "Léonard de Vinci",
        "description": "Déclenche un Eurêka ! pour 1 technologie aléatoire de l'ère moderne.\nCulture +3 pour les ateliers.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-sinan",
        "name": "Sinan",
        "description": "Activité +1 pour cette ville.\nHabitations +1 pour cette ville.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère de la Renaissance",
          "2 charges"
        ]
      },
      {
        "id": "ingenieur-illustre-ada-lovelace",
        "name": "Ada Lovelace",
        "description": "Déclenche un Eurêka ! pour l'informatique.\nPermet à cette ville de construire un quartier de plus que le maximum autorisé par sa population.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-gustave-eiffel",
        "name": "Gustave Eiffel",
        "description": "Production +480 pour la construction de merveilles.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère industrielle",
          "2 charges"
        ]
      },
      {
        "id": "ingenieur-illustre-james-watt",
        "name": "James Watt",
        "description": "Construction instantanée d'une usine et d'un atelier dans ce quartier. Production +2 pour les usines.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-alvar-aalto",
        "name": "Alvar Aalto",
        "description": "Attrait +1 pour toutes les cases possédées par cette ville. La ville génère 2 d'Or pour chaque case époustouflante dans la ville.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-nikola-tesla",
        "name": "Nikola Tesla",
        "description": "Production +2 pour les bâtiments régionaux de ce quartier.\nPortée des bâtiments régionaux de ce quartier +3 cases.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-robert-goddard",
        "name": "Robert Goddard",
        "description": "Déclenche un Eurêka ! pour les fusées.\nProduction +20 % pour les projets liés à la course à l'espace.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-shah-jahan",
        "name": "Shâh Jahân",
        "description": "Gain de production pour la construction de merveilles, limité à 50 % de votre trésor actuel. Réduit ensuite votre or de deux fois la quantité de production achetée.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-jane-drew",
        "name": "Jane Drew",
        "description": "Activités +3 pour cette ville.\nHabitations +4 pour cette ville.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-john-augustus-roebling",
        "name": "John Augustus Roebling",
        "description": "Activité +1 pour cette ville.\nHabitations +2 pour cette ville.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère atomique",
          "2 charges"
        ]
      },
      {
        "id": "ingenieur-illustre-serguei-korolev",
        "name": "Sergueï Korolev",
        "description": "Production +1500 pour les projets liés à la course à l'espace.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-charles-correa",
        "name": "Charles Correa",
        "description": "Attrait +2 pour toutes les cases possédées par cette ville.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-joseph-paxton",
        "name": "Joseph Paxton",
        "description": "Activité +1 pour les bâtiments régionaux de ce quartier.\nPortée des bâtiments régionaux de ce quartier +3 cases.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-kenzo-tange",
        "name": "Kenzō Tange",
        "description": "Génère une quantité de tourisme égale à son bonus de proximité dans chaque quartier de cette ville (divisée en deux pour l' or).",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "ingenieur-illustre-wernher-von-braun",
        "name": "Wernher von Braun",
        "description": "Production +100 % pour les projets liés à la course à l'espace.",
        "section": "Ingénieur illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-col-os",
        "name": "Colæos",
        "description": "Foi +100.\nOctroie 1 exemplaire gratuit de la ressource de luxe présente sur cette case à votre capitale.",
        "section": "Marchand illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-ibn-fadlan",
        "name": "Ibn Fadlân",
        "description": "Routes commerciales +1. Foi +2 pour vos routes commerciales reliées à des cités-états.",
        "section": "Marchand illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-crassus",
        "name": "Crassus",
        "description": "Or +60.\nLa ville la plus proche annexe cette case à son territoire.",
        "section": "Marchand illustre",
        "tags": [
          "Ère classique",
          "3 charges"
        ]
      },
      {
        "id": "marchand-illustre-irene-l-athenienne",
        "name": "Irène l'Athénienne",
        "description": "Octroie un titre de gouverneur ou permet de recruter un nouveau gouverneur.",
        "section": "Marchand illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-piero-de-bardi",
        "name": "Piero de' Bardi",
        "description": "Or +200.\nVous recevez 1  émissaire.",
        "section": "Marchand illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-todar-mal",
        "name": "Todar Mal",
        "description": "Or +1 pour vos routes commerciales intérieures pour chaque quartier spécialisé dans la ville d'arrivée.\nVous recevez 1  émissaire.",
        "section": "Marchand illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-zhang-qian",
        "name": "Zhang Qian",
        "description": "Route commerciale +1. Les routes commerciales étrangères connectées à cette ville rapportent 2  Or aux deux villes.",
        "section": "Marchand illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-jean-de-medicis",
        "name": "Jean de Médicis",
        "description": "Construction instantanée d'une banque et d'un marché dans ce quartier. La banque contient deux emplacements pour chefs-d'œuvre.",
        "section": "Marchand illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-jacob-fugger",
        "name": "Jacob Fugger",
        "description": "Or +200.\nVous recevez 2  émissaires.",
        "section": "Marchand illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-marco-polo",
        "name": "Marco Polo",
        "description": "Octroie un négociant gratuit dans cette ville et une route commerciale. Les routes commerciales étrangères connectées à cette ville rapportent 2  Or aux deux villes.",
        "section": "Marchand illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-zhou-daguan",
        "name": "Zhou Daguan",
        "description": "Octroie trois émissaires à cette cité-état.",
        "section": "Marchand illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-adam-smith",
        "name": "Adam Smith",
        "description": "Or +500.\nOctroie un titre de gouverneur ou permet de recruter un nouveau gouverneur.",
        "section": "Marchand illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-john-jacob-astor",
        "name": "John Jacob Astor",
        "description": "Or +500.\nVous recevez 2  émissaires.\nOctroie 2 unités de jouets, une ressource de luxe manufacturée unique qui confère 4 points d' activités.",
        "section": "Marchand illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-john-rockefeller",
        "name": "John Rockefeller",
        "description": "Pétrole +3 par tour. Vos routes commerciales gagnent 2 unités d' or pour chaque ressource stratégique dans la ville de destination.",
        "section": "Marchand illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-mary-katherine-goddard",
        "name": "Mary Katherine Goddard",
        "description": "Visibilité diplomatique +1 niveau avec toutes les autres civilisations.",
        "section": "Marchand illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-sarah-breedlove",
        "name": "Sarah Breedlove",
        "description": "Capacité des routes commerciales +1.\nProduction de tourisme +25 % envers les civilisations avec lesquelles vous partagez une route commerciale.",
        "section": "Marchand illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-thomas-stamford-raffles",
        "name": "Thomas Stamford Raffles",
        "description": "Absorbe n'importe quelle Cité-état dans votre Empire. Loyauté +10 par tour dans la ville.",
        "section": "Marchand illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-helena-rubinstein",
        "name": "Helena Rubinstein",
        "description": "Octroie 2 unités de cosmétiques, une ressource de luxe manufacturée unique qui confère 4 points d' activités.",
        "section": "Marchand illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-levi-strauss",
        "name": "Levi Strauss",
        "description": "Octroie 2 unités de  jeans, une ressource de luxe manufacturée qui confère 4 points d' activités.\nCapacité des routes commerciales +1.\nProduction de tourisme +25 % envers les civilisations avec lesquelles vous partagez une route commerciale.",
        "section": "Marchand illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-jamsetji-tata",
        "name": "Jamsetji Tata",
        "description": "Tourisme +50 pour les campus.",
        "section": "Marchand illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "marchand-illustre-masaru-ibuka",
        "name": "Masaru Ibuka",
        "description": "Tourisme +50 pour les zones industrielles.",
        "section": "Marchand illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "prophete-illustre-confucius",
        "name": "Confucius",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "prophete-illustre-jean-le-baptiste",
        "name": "Jean le Baptiste",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "prophete-illustre-lao-tseu",
        "name": "Lao Tseu",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "prophete-illustre-siddhartha-gautama",
        "name": "Siddhartha Gautama",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "prophete-illustre-pierre",
        "name": "Pierre",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "prophete-illustre-zoroastre",
        "name": "Zoroastre",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "prophete-illustre-adi-shankara",
        "name": "Adi Shankara",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère médiévale"
        ]
      },
      {
        "id": "prophete-illustre-bodhidharma",
        "name": "Bodhidharma",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère médiévale"
        ]
      },
      {
        "id": "prophete-illustre-irenee-de-lyon",
        "name": "Irénée de Lyon",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère médiévale"
        ]
      },
      {
        "id": "prophete-illustre-o-no-yasumaro",
        "name": "Ō no Yasumaro",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère médiévale"
        ]
      },
      {
        "id": "prophete-illustre-songtsen-gampo",
        "name": "Songtsen Gampo",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère médiévale"
        ]
      },
      {
        "id": "prophete-illustre-francois-d-assise",
        "name": "François d'Assise",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "prophete-illustre-haji-huud",
        "name": "Haji Huud",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "prophete-illustre-madhvacarya",
        "name": "Madhvācārya",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "prophete-illustre-martin-luther",
        "name": "Martin Luther",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "prophete-illustre-thomas-d-aquin",
        "name": "Thomas d'Aquin",
        "description": "",
        "section": "Prophète illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "savant-illustre-aryabhata",
        "name": "Aryabhata",
        "description": "Déclenche un Eurêka ! pour 3 technologies aléatoires de l'ère classique ou du Moyen-âge.",
        "section": "Savant illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-euclide",
        "name": "Euclide",
        "description": "Déclenche un Eurêka ! pour les mathématiques et une technologie aléatoire du Moyen-âge.",
        "section": "Savant illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-hypatie",
        "name": "Hypatie",
        "description": "Science +1 pour les bibliothèques.\nConstruction instantanée d'une bibliothèque dans ce quartier.",
        "section": "Savant illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-zhang-heng",
        "name": "Zhang Heng",
        "description": "Déclenche un Eurêka ! pour la navigation astronomique, les mathématiques et l'ingénierie. Si ces Eurêka ! sont déjà déclenchés, découvre instantanément la technologie.",
        "section": "Savant illustre",
        "tags": [
          "Ère classique",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-abu-al-qasim-al-zahrawi",
        "name": "Abu al-Qasim al-Zahrawi",
        "description": "Déclenche un Eurêka ! pour 1 technologie aléatoire du Moyen-âge ou de la Renaissance.\nLes unités terrestres blessées récupèrent 5 PV à chaque tour.",
        "section": "Savant illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-hildegarde-de-bingen",
        "name": "Hildegarde de Bingen",
        "description": "Foi +100.\nLe bonus de proximité de foi de ce lieu saint génère aussi de la science.",
        "section": "Savant illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-omar-khayyam",
        "name": "Omar Khayyām",
        "description": "Déclenche un Eurêka ! pour 2 technologies aléatoires et une inspiration pour un dogme aléatoire du Moyen-âge ou de la Renaissance.",
        "section": "Savant illustre",
        "tags": [
          "Ère médiévale",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-emilie-du-chatelet",
        "name": "Émilie du Châtelet",
        "description": "Déclenche un Eurêka ! pour 3 technologies aléatoires de la Renaissance ou de l'ère industrielle.",
        "section": "Savant illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-galilee",
        "name": "Galilée",
        "description": "Science +250 (en vitesse normale) pour chaque case de montagne adjacente.",
        "section": "Savant illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-ibn-khaldoun",
        "name": "Ibn Khaldoun",
        "description": "Habitations +2 et activités +1 pour le campus choisi. Augmente de 40% les avantages du bonheur non liés à la nourriture dans votre empire.",
        "section": "Savant illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-isaac-newton",
        "name": "Isaac Newton",
        "description": "Construction instantanée d'une université et d'une bibliothèque dans ce quartier. Science +2 pour les universités.",
        "section": "Savant illustre",
        "tags": [
          "Ère de la Renaissance",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-charles-darwin",
        "name": "Charles Darwin",
        "description": "Science +500 (en vitesse normale) pour chaque case de merveille naturelle dans un rayon d'une case.",
        "section": "Savant illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-dmitri-mendeleiev",
        "name": "Dmitri Mendeleïev",
        "description": "Déclenche un Eurêka pour la Chimie et une technologie aléatoire de l'ère industrielle. Production +50% pour les laboratoires de recherche.",
        "section": "Savant illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-james-young",
        "name": "James Young",
        "description": "Déclenche un Eurêka ! pour 2 technologies aléatoires de l'ère industrielle ou moderne.\nPermet de découvrir du pétrole sans avoir découvert la technologie requise.",
        "section": "Savant illustre",
        "tags": [
          "Ère industrielle",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-alan-turing",
        "name": "Alan Turing",
        "description": "Déclenche un Eurêka pour l'Informatique et une technologie aléatoire de l'ère moderne. Si vous avez déjà optimisé l'Informatique, vous finissez la technologie.",
        "section": "Savant illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-albert-einstein",
        "name": "Albert Einstein",
        "description": "Déclenche un Eurêka ! pour 1 technologie aléatoire de l'ère moderne ou atomique.\nScience +4 pour les laboratoires de recherches.",
        "section": "Savant illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-alfred-nobel",
        "name": "Alfred Nobel",
        "description": "Déclenche un Eurêka ! pour 1 technologie aléatoire de l'ère moderne ou atomique.\nOctroie 1 point Diplomatique. Applique 100 points de Personnage illustre gratuits pour le recrutement de tous les Personnages illustres actuels et à venir.",
        "section": "Savant illustre",
        "tags": [
          "Ère moderne",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-erwin-schrodinger",
        "name": "Erwin Schrödinger",
        "description": "Déclenche un Eurêka ! pour 3 technologies aléatoires de l'ère atomique ou de l'information.",
        "section": "Savant illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-janaki-ammal",
        "name": "Janaki Ammal",
        "description": "Vous recevez 400  Science pour chaque case de forêt tropicale dans un rayon d'une case.",
        "section": "Savant illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-margaret-mead",
        "name": "Margaret Mead",
        "description": "Science et Culture +1000 (vitesse en ligne). Ne peut s'activer que dans un Campus d'une autre civilisation ou Cité-état.",
        "section": "Savant illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-mary-leakey",
        "name": "Mary Leakey",
        "description": "Vous recevez 350  Science pour chaque artefact présent dans la ville.\nLes artefacts de vos villes génèrent 300 % du tourisme habituel.",
        "section": "Savant illustre",
        "tags": [
          "Ère atomique",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-abdus-salam",
        "name": "Abdus Salam",
        "description": "Déclenche un Eurêka ! pour toutes les technologies de l'ère de l'information.",
        "section": "Savant illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-carl-sagan",
        "name": "Carl Sagan",
        "description": "Production +3000 pour les projets liés à la course à l'espace.",
        "section": "Savant illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "savant-illustre-stephanie-kwolek",
        "name": "Stephanie Kwolek",
        "description": "Production +100 % pour les projets liés à la course à l'espace.",
        "section": "Savant illustre",
        "tags": [
          "Ère de l'information",
          "1 charge"
        ]
      },
      {
        "id": "ecrivain-illustre-bhasa",
        "name": "Bhāsa",
        "description": "Madhyama Vyāyoga\nPratima-nataka",
        "section": "Écrivain illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "ecrivain-illustre-homere",
        "name": "Homère",
        "description": "L'Iliade\nL'Odyssée",
        "section": "Écrivain illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "ecrivain-illustre-ovide",
        "name": "Ovide",
        "description": "Les Métamorphoses\nHéroïdes",
        "section": "Écrivain illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "ecrivain-illustre-qu-yuan",
        "name": "Qu Yuan",
        "description": "Chu Ci (Chants de Chu)\nLamentation pour Ying",
        "section": "Écrivain illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "ecrivain-illustre-valmiki",
        "name": "Vâlmîki",
        "description": "Râmâyana\nYoga Vasishtha",
        "section": "Écrivain illustre",
        "tags": [
          "Ère classique"
        ]
      },
      {
        "id": "ecrivain-illustre-geoffrey-chaucer",
        "name": "Geoffrey Chaucer",
        "description": "Les Contes de Canterbury\nTroïlus et Criseyde",
        "section": "Écrivain illustre",
        "tags": [
          "Ère médiévale"
        ]
      },
      {
        "id": "ecrivain-illustre-li-bai",
        "name": "Li Bai",
        "description": "Libation solitaire au clair de lune\nUne journée d'été dans la montagne",
        "section": "Écrivain illustre",
        "tags": [
          "Ère médiévale"
        ]
      },
      {
        "id": "ecrivain-illustre-murasaki-shikibu",
        "name": "Murasaki Shikibu",
        "description": "Journal de Murasaki Shikibu\nLe Dit du Genji",
        "section": "Écrivain illustre",
        "tags": [
          "Ère médiévale"
        ]
      },
      {
        "id": "ecrivain-illustre-rumi",
        "name": "Rûmî",
        "description": "Diwan-e Shams-e Tabrizi\nMasnavi",
        "section": "Écrivain illustre",
        "tags": [
          "Ère médiévale"
        ]
      },
      {
        "id": "ecrivain-illustre-margaret-cavendish",
        "name": "Margaret Cavendish",
        "description": "The Blazing World\nObservations upon Experimental Philosophy",
        "section": "Écrivain illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "ecrivain-illustre-marie-catherine-d-aulnoy",
        "name": "Marie-Catherine d'Aulnoy",
        "description": "La Belle aux cheveux d'or\nLe Dauphin",
        "section": "Écrivain illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "ecrivain-illustre-miguel-de-cervantes",
        "name": "Miguel de Cervantes",
        "description": "Don Quichotte\nLes Nouvelles exemplaires",
        "section": "Écrivain illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "ecrivain-illustre-nicolas-machiavel",
        "name": "Nicolas Machiavel",
        "description": "Discours sur la première décade de Tite-Live\nLe Prince",
        "section": "Écrivain illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "ecrivain-illustre-william-shakespeare",
        "name": "William Shakespeare",
        "description": "Roméo et Juliette\nHamlet",
        "section": "Écrivain illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "ecrivain-illustre-alexandre-pouchkine",
        "name": "Alexandre Pouchkine",
        "description": "Eugène Onéguine\nBoris Godounov",
        "section": "Écrivain illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "ecrivain-illustre-edgar-allan-poe",
        "name": "Edgar Allan Poe",
        "description": "Le Cœur révélateur\nLe Corbeau",
        "section": "Écrivain illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "ecrivain-illustre-jane-austen",
        "name": "Jane Austen",
        "description": "Orgueil et Préjugés\nRaison et Sentiments",
        "section": "Écrivain illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "ecrivain-illustre-johann-wolfgang-von-goethe",
        "name": "Johann Wolfgang von Goethe",
        "description": "Faust\nLes Souffrances du jeune Werther",
        "section": "Écrivain illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "ecrivain-illustre-mary-shelley",
        "name": "Mary Shelley",
        "description": "Frankenstein ou le Prométhée moderne\nLe Dernier homme",
        "section": "Écrivain illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "ecrivain-illustre-beatrix-potter",
        "name": "Beatrix Potter",
        "description": "Pierre Lapin\nLe Tailleur de Gloucester",
        "section": "Écrivain illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "ecrivain-illustre-emily-dickinson",
        "name": "Emily Dickinson",
        "description": "A Bird Came Down\nSuccess is counted sweetest",
        "section": "Écrivain illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "ecrivain-illustre-f-scott-fitzgerald",
        "name": "F. Scott Fitzgerald",
        "description": "L'Envers du paradis\nLes Heureux et les Damnés",
        "section": "Écrivain illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "ecrivain-illustre-james-joyce",
        "name": "James Joyce",
        "description": "Ulysse\nLes Gens de Dublin",
        "section": "Écrivain illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "ecrivain-illustre-leon-tolstoi",
        "name": "Léon Tolstoï",
        "description": "Guerre et Paix\nAnna Karénine",
        "section": "Écrivain illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "ecrivain-illustre-mark-twain",
        "name": "Mark Twain",
        "description": "Les Aventures de Huckleberry Finn\nLes Aventures de Tom Sawyer",
        "section": "Écrivain illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "ecrivain-illustre-h-g-wells",
        "name": "H.G. Wells",
        "description": "La Guerre des mondes\nLa Machine à explorer le temps",
        "section": "Écrivain illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "ecrivain-illustre-rabindranath-tagore",
        "name": "Rabindranath Tagore",
        "description": "La Maison et le monde\nLe Jardinier d'amour",
        "section": "Écrivain illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "ecrivain-illustre-gabriela-mistral",
        "name": "Gabriela Mistral",
        "description": "Lecturas para mujeres\nSonetos de la Muerte",
        "section": "Écrivain illustre",
        "tags": [
          "Ère de l'information"
        ]
      },
      {
        "id": "ecrivain-illustre-karel-capek",
        "name": "Karel Čapek",
        "description": "R.U.R. (Rossum’s Universal Robot)\nLa Guerre des salamandres",
        "section": "Écrivain illustre",
        "tags": [
          "Ère de l'information"
        ]
      },
      {
        "id": "artiste-illustre-andrei-roublev",
        "name": "Andreï Roublev",
        "description": "Annonciation\nChrist en Gloire\nAscension",
        "section": "Artiste illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "artiste-illustre-donatello",
        "name": "Donatello",
        "description": "Saint Marc\nMonument équestre à Gattamelata\nJudith et Holopherne",
        "section": "Artiste illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "artiste-illustre-hieronymus-bosch",
        "name": "Hieronymus Bosch",
        "description": "Le Jardin des délices\nLe Jugement dernier\nLe Chariot de foin",
        "section": "Artiste illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "artiste-illustre-kamaleddin-behzad",
        "name": "Kamaleddin Behzad",
        "description": "Bataille entre Tamerlan et le roi égyptien\nYusuf et Zuleykha\nTamerlan accordant une audience le jour de son accession au trône",
        "section": "Artiste illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "artiste-illustre-michel-ange",
        "name": "Michel-Ange",
        "description": "Plafond de la chapelle Sixtine\nDavid\nLa Pietà",
        "section": "Artiste illustre",
        "tags": [
          "Ère de la Renaissance"
        ]
      },
      {
        "id": "artiste-illustre-el-greco",
        "name": "El Greco",
        "description": "Prière des trois rois mages\nL'Assomption\nVue de Tolède",
        "section": "Artiste illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "artiste-illustre-hasegawa-tohaku",
        "name": "Hasegawa Tōhaku",
        "description": "Bois de pins\nÉrable\nOiseaux et fleurs",
        "section": "Artiste illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "artiste-illustre-qiu-ying",
        "name": "Qiu Ying",
        "description": "Matin de printemps au Palais Han\nErmite-pêcheur dans la vallée des Lotus\nFalaise rouge",
        "section": "Artiste illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "artiste-illustre-rembrandt",
        "name": "Rembrandt",
        "description": "Andries de Graeff\nAgatha Bas\nLe Sacrifice d'Isaac",
        "section": "Artiste illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "artiste-illustre-titien",
        "name": "Titien",
        "description": "L'Assomption de la Vierge\nSalomé\nPortrait équestre de Charles Quint à Mühlberg",
        "section": "Artiste illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "artiste-illustre-angelica-kauffmann",
        "name": "Angelica Kauffmann",
        "description": "Anna Maria Jenkins et Thomas Jenkins\nPortrait de Winckelmann\nSarah Harrop en tant que Muse",
        "section": "Artiste illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "artiste-illustre-jang-seung-eop",
        "name": "Jang Seung-eop",
        "description": "Samin munnyeondo\nCoq\nSsangma inmuldo",
        "section": "Artiste illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "artiste-illustre-katsushika-hokusai",
        "name": "Katsushika Hokusai",
        "description": "La Grande Vague de Kanagawa\nLe lac Suwa dans la province de Shinano\nLe Mont Fuji, un matin par temps clair",
        "section": "Artiste illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "artiste-illustre-sofonisba-anguissola",
        "name": "Sofonisba Anguissola",
        "description": "La partie d'échecs\nLe roi Philippe II d'Espagne\nPortrait de moine",
        "section": "Artiste illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "artiste-illustre-claude-monet",
        "name": "Claude Monet",
        "description": "Les Nymphéas\nImpression, soleil levant\nLes Meules",
        "section": "Artiste illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "artiste-illustre-edmonia-lewis",
        "name": "Edmonia Lewis",
        "description": "La Mort de Cléopâtre\nLe Mariage d'Hiawatha et Minnehaha\nHagar",
        "section": "Artiste illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "artiste-illustre-marie-anne-collot",
        "name": "Marie-Anne Collot",
        "description": "Buste de Pierre-Étienne Falconet\nBuste de Catherine II\nBuste de Marie Cathcart",
        "section": "Artiste illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "artiste-illustre-vincent-van-gogh",
        "name": "Vincent van Gogh",
        "description": "La Nuit étoilée\nTerrasse du café le soir\nLe Café de nuit",
        "section": "Artiste illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "artiste-illustre-amrita-sher-gil",
        "name": "Amrita Sher-Gil",
        "description": "Groupe de trois femmes\nToilette de mariée\nAutoportrait",
        "section": "Artiste illustre",
        "tags": [
          "Ère de l'information"
        ]
      },
      {
        "id": "artiste-illustre-boris-orlovski",
        "name": "Boris Orlovski",
        "description": "Mikhaïl Koutouzov\nColonne d'Alexandre\nBuste du tsar Alexandre Ier",
        "section": "Artiste illustre",
        "tags": [
          "Ère de l'information"
        ]
      },
      {
        "id": "artiste-illustre-gustav-klimt",
        "name": "Gustav Klimt",
        "description": "Le Baiser\nAllée dans le parc du Château Kammer\nJardin d'une ferme avec des tournesols",
        "section": "Artiste illustre",
        "tags": [
          "Ère de l'information"
        ]
      },
      {
        "id": "artiste-illustre-mary-cassatt",
        "name": "Mary Cassatt",
        "description": "Au Théâtre\nLa Toilette de l'enfant\nLa Tasse de thé",
        "section": "Artiste illustre",
        "tags": [
          "Ère de l'information"
        ]
      },
      {
        "id": "artiste-illustre-vassily-kandinsky",
        "name": "Vassily Kandinsky",
        "description": "Composition VIII\nLe Cavalier bleu\nCarré rouge",
        "section": "Artiste illustre",
        "tags": [
          "Ère de l'information"
        ]
      },
      {
        "id": "musicien-illustre-antonio-vivaldi",
        "name": "Antonio Vivaldi",
        "description": "Les Quatre Saisons : l'hiver\nConcerto La Notte",
        "section": "Musicien illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "musicien-illustre-dimitrie-cantemir",
        "name": "Dimitrie Cantemir",
        "description": "Peşrev Adjem Yegiahi\nPrince de Moldavie\nUzzusule Beresvan",
        "section": "Musicien illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "musicien-illustre-jean-sebastien-bach",
        "name": "Jean-Sébastien Bach",
        "description": "Fugue en sol mineur\nSuite pour violoncelle seul n°1 en sol majeur",
        "section": "Musicien illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "musicien-illustre-ludwig-van-beethoven",
        "name": "Ludwig van Beethoven",
        "description": "Ode à la joie (Symphonie n°9)\nSymphonie n°3 (Symphonie Héroïque) - 1er mvt.",
        "section": "Musicien illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "musicien-illustre-wolfgang-amadeus-mozart",
        "name": "Wolfgang Amadeus Mozart",
        "description": "Petite Musique de nuit\nSymphonie n°40 - 1er mvt.",
        "section": "Musicien illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "musicien-illustre-yatsuhashi-kengyo",
        "name": "Yatsuhashi Kengyō",
        "description": "Rokudan No Shirabe\nHachidan No Shirabe",
        "section": "Musicien illustre",
        "tags": [
          "Ère industrielle"
        ]
      },
      {
        "id": "musicien-illustre-antonio-carlos-gomes",
        "name": "Antônio Carlos Gomes",
        "description": "Fosca - 1er mvt. (Abertura)\nAlvorada",
        "section": "Musicien illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "musicien-illustre-franz-liszt",
        "name": "Franz Liszt",
        "description": "Étude Transcendantale n°9\nMéphisto valse n°1 \"La danse à l'auberge du village\"",
        "section": "Musicien illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "musicien-illustre-frederic-chopin",
        "name": "Frédéric Chopin",
        "description": "Nocturne en mi bémol majeur\nGrande Valse Brillante - Op. 18",
        "section": "Musicien illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "musicien-illustre-liu-tianhua",
        "name": "Liu Tianhua",
        "description": "Liáng Xiao\nKong Shan Niao Yu",
        "section": "Musicien illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "musicien-illustre-piotr-ilitch-tchaikovski",
        "name": "Piotr Ilitch Tchaïkovski",
        "description": "Roméo et Juliette, Ouverture fantaisie\nDanse des petits cygnes",
        "section": "Musicien illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "musicien-illustre-scott-joplin",
        "name": "Scott Joplin",
        "description": "The Entertainer\nMaple Leaf Rag\nThe Easy Winners",
        "section": "Musicien illustre",
        "tags": [
          "Ère moderne"
        ]
      },
      {
        "id": "musicien-illustre-antonin-dvorak",
        "name": "Antonín Dvořák",
        "description": "Symphonie N°9 Du Nouveau Monde - 4e mvt.\nSérénade pour cordes - Op. 22, 2e mvt.",
        "section": "Musicien illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "musicien-illustre-clara-schumann",
        "name": "Clara Schumann",
        "description": "Prélude et fugue - Op 16, n°3\nToccatina en la mineur",
        "section": "Musicien illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "musicien-illustre-juventino-rosas",
        "name": "Juventino Rosas",
        "description": "Sobre las olas\nVals Carmen",
        "section": "Musicien illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "musicien-illustre-lili-uokalani",
        "name": "Lili'uokalani",
        "description": "Prière de la Reine\nSanoe",
        "section": "Musicien illustre",
        "tags": [
          "Ère atomique"
        ]
      },
      {
        "id": "musicien-illustre-gauhar-jaan",
        "name": "Gauhar Jaan",
        "description": "Raga Khamaj Jogiya\nRaga Bhairavi",
        "section": "Musicien illustre",
        "tags": [
          "Ère de l'information"
        ]
      },
      {
        "id": "musicien-illustre-mykola-leontovych",
        "name": "Mykola Leontovych",
        "description": "Sonnent les cloches\nPrélude pour le chœur",
        "section": "Musicien illustre",
        "tags": [
          "Ère de l'information"
        ]
      },
      {
        "id": "comandante-general-jose-antonio-paez",
        "name": "José Antonio Páez",
        "description": "Puissance de combat +4 pour les unités de cavalerie dans un rayon de 2 cases.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      },
      {
        "id": "comandante-general-antonio-jose-de-sucre",
        "name": "Antonio José de Sucre",
        "description": "Création instantanée de l'unité militaire terrestre la plus puissante que vous pouvez former avec 1 niveau de promotion. L'unité ne consomme aucune ressource.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      },
      {
        "id": "comandante-general-gregor-macgregor",
        "name": "Gregor MacGregor",
        "description": "Octroie 1 niveau de promotion à une unité militaire terrestre et une quantité d'or égale à 50 % du prix d'achat de l'unité.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      },
      {
        "id": "comandante-general-santiago-marino",
        "name": "Santiago Mariño",
        "description": "Puissance de combat +4 pour les unités de combat rapproché et anti-cavalerie dans un rayon de 2 cases.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      },
      {
        "id": "comandante-general-mariano-montilla",
        "name": "Mariano Montilla",
        "description": "Puissance de combat +4 pour les unités terrestres dans un rayon de deux cases quand elles attaquent un quartier.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      },
      {
        "id": "comandante-general-antonio-narino",
        "name": "Antonio Nariño",
        "description": "Routes commerciales +1. Octroie un négociant dans la ville la plus proche.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      },
      {
        "id": "comandante-general-francisco-de-paula-santander",
        "name": "Francisco de Paula Santander",
        "description": "Octroie 1 titre de gouverneur.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      },
      {
        "id": "comandante-general-manuel-piar",
        "name": "Manuel Piar",
        "description": "Puissance de combat + 7 pour une unité terrestre.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      },
      {
        "id": "comandante-general-jose-felix-ribas",
        "name": "José Félix Ribas",
        "description": "Les unités ennemies se trouvant dans un rayon de deux cases perdent 30 PV.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      },
      {
        "id": "comandante-general-rafael-urdaneta",
        "name": "Rafael Urdaneta",
        "description": "Toutes les unités militaires terrestres dans un rayon de 2 cases récupèrent tous leurs PM et leurs capacités d'attaque.",
        "section": "Comandante General",
        "tags": [
          "1 charge"
        ]
      }
    ],
    "sectionImages": {
      "Général illustre": "https://civ6bbg.github.io/images/Great%20General.webp",
      "Amiral illustre": "https://civ6bbg.github.io/images/Great%20Admiral.webp",
      "Ingénieur illustre": "https://civ6bbg.github.io/images/Great%20Engineer.webp",
      "Marchand illustre": "https://civ6bbg.github.io/images/Great%20Merchant.webp",
      "Prophète illustre": "https://civ6bbg.github.io/images/Great%20Prophet.webp",
      "Savant illustre": "https://civ6bbg.github.io/images/Great%20Scientist.webp",
      "Écrivain illustre": "https://civ6bbg.github.io/images/Great%20Writer.webp",
      "Artiste illustre": "https://civ6bbg.github.io/images/Great%20Artist.webp",
      "Musicien illustre": "https://civ6bbg.github.io/images/Great%20Musician.webp",
      "Comandante General": "https://civ6bbg.github.io/images/Comandante%20General.webp"
    }
  },
  {
    "key": "governor",
    "label": "Gouverneurs",
    "icon": "🎖️",
    "items": [
      {
        "id": "victor-redoute",
        "name": "Redoute",
        "description": "Puissance de combat +5 pour la garnison de la ville.",
        "section": "Victor"
      },
      {
        "id": "victor-chef-de-garnison",
        "name": "Chef de garnison",
        "description": "Puissance de combat +3 pour les unités qui combattent dans le territoire de la ville. Loyauté +4 pour vos villes dans un rayon de 9 cases.",
        "section": "Victor"
      },
      {
        "id": "victor-logistiques-defensives",
        "name": "Logistiques défensives",
        "description": "Production +25% pour la formation d'unité.",
        "section": "Victor"
      },
      {
        "id": "victor-meurtrieres",
        "name": "Meurtrières",
        "description": "La ville gagne une attaque supplémentaire par tour. La ville ne peut pas être assiégée",
        "section": "Victor"
      },
      {
        "id": "victor-course-aux-armements",
        "name": "Course aux armements",
        "description": "Les unités militaires formées dans la ville commencent avec une promotion (si ce n'est pas déjà le cas) et ne coûte aucune ressource à leur formation. Production +50% pour les projets d'armement nucléaire.",
        "section": "Victor"
      },
      {
        "id": "victor-defense-aerienne",
        "name": "Défense aérienne",
        "description": "Puissance de combat +25 pour les unités anti-aériennes qui se trouvent dans le territoire de la ville.",
        "section": "Victor"
      },
      {
        "id": "amani-messagere",
        "name": "Messagère",
        "description": "Peut être envoyée dans une Cité-état, où elle fournit 2 émissaires. Vos routes commerciales envoyées à cette Cité-état octroient 2 Nourriture et 2 Production à la ville d'origine.",
        "section": "Amani"
      },
      {
        "id": "amani-condottiere",
        "name": "Condottiere",
        "description": "La ville ne peut pas être assiégée et gagne +5 Puissance de combat en défense.",
        "section": "Amani"
      },
      {
        "id": "amani-aisance",
        "name": "Aisance",
        "description": "Vous générez deux unités par tour de chaque type de ressource stratégique révélée.",
        "section": "Amani"
      },
      {
        "id": "amani-informateurs-locaux",
        "name": "Informateurs locaux",
        "description": "Loyauté +4 par tour dans toutes vos villes dans un rayon de 9 cases. Les espions ennemis opèrent avec 3 niveaux de malus dans cette ville.",
        "section": "Amani"
      },
      {
        "id": "amani-investisseur-etranger",
        "name": "Investisseur étranger",
        "description": "Faveurs diplomatiques +1 et Points d'influence +1 par tier de bâtiment dans la Place de la gouvernance.",
        "section": "Amani"
      },
      {
        "id": "amani-marionnettiste",
        "name": "Marionnettiste",
        "description": "Si en poste dans une Cité-état, double le nombre d'émissaires que vous y possédez.",
        "section": "Amani"
      },
      {
        "id": "moksha-eveque",
        "name": "Évêque",
        "description": "Culture +15% dans la ville. La pression religieuse de cette ville est 100% plus forte. Foi +2 pour chaque quartier spécialisé dans la ville.",
        "section": "Moksha"
      },
      {
        "id": "moksha-connaisseur",
        "name": "Connaisseur",
        "description": "Culture +1 par Citoyens dans la ville. La ville ignore la pression des religions qui n'ont pas été fondées par le joueur",
        "section": "Moksha"
      },
      {
        "id": "moksha-citadelle-de-dieu",
        "name": "Citadelle de dieu",
        "description": "Points de Prophète illustre +2 si la ville possède un Lieu saint. Foi +2 par ville possèdant un Lieu saint dans un rayon de 6 cases.",
        "section": "Moksha"
      },
      {
        "id": "moksha-architecte-divin",
        "name": "Architecte divin",
        "description": "Nourriture +1 et Culture +2 pour vos routes commerciales se terminant dans cette ville. Permet à la ville d'acheter des quartiers avec de la Foi, 10% moins cher.",
        "section": "Moksha"
      },
      {
        "id": "moksha-saint-patron",
        "name": "Saint patron",
        "description": "La ville reçoit une quantité de Science et de Culture égale à 20% de sa Foi produite.",
        "section": "Moksha"
      },
      {
        "id": "moksha-conservateur",
        "name": "Conservateur",
        "description": "Double le Tourisme généré par les chefs-d'œuvre littéraires, artistiques et musicaux de la ville.",
        "section": "Moksha"
      },
      {
        "id": "magnus-debut-de-construction",
        "name": "Début de construction",
        "description": "Rendements +40% pour les cases récoltées et le retrait de caractéristiques de terrain dans la ville.",
        "section": "Magnus"
      },
      {
        "id": "magnus-ravitaillement",
        "name": "Ravitaillement",
        "description": "Croissance de la ville +20%.\nNourriture +1 et Production +1 pour vos routes commerciales se terminant dans cette ville.",
        "section": "Magnus"
      },
      {
        "id": "magnus-industriel",
        "name": "Industriel",
        "description": "Production +25% pour la construction des bâtiments de la Zone industrielle. Les Colons formés dans la ville ne font pas perdre de population.",
        "section": "Magnus"
      },
      {
        "id": "magnus-surplus-logistique",
        "name": "Surplus logistique",
        "description": "Production +20% pour les quartiers, les bâtiments et les unités.",
        "section": "Magnus"
      },
      {
        "id": "magnus-marche-noir",
        "name": "Marché noir",
        "description": "La ville gagne de la Production pour chaque bâtiment dans la Zone industrielle : +2 pour l'atelier, +4 pour l'usine et +7 pour la centrale. Électricité +4.",
        "section": "Magnus"
      },
      {
        "id": "magnus-integration-verticale",
        "name": "Intégration verticale",
        "description": "Cette ville reçoit la Production de toutes les Zones industrielles qui peuvent lui en fournir.",
        "section": "Magnus"
      },
      {
        "id": "liang-maitre-de-guilde",
        "name": "Maître de guilde",
        "description": "Les Bâtisseurs formés dans la ville gagnent une charge supplémentaire.",
        "section": "Liang"
      },
      {
        "id": "liang-materiaux-renforces",
        "name": "Matériaux renforcés",
        "description": "Production +1 pour les plaines inondables et les sols volcaniques dans cette ville. Les aménagements, bâtiments et quartiers de cette ville ne peuvent pas être endommagés par les effets environnementaux.",
        "section": "Liang"
      },
      {
        "id": "liang-agriculture",
        "name": "Agriculture",
        "description": "Nourriture +1 sur toutes les ressources révélées dans la ville.",
        "section": "Liang"
      },
      {
        "id": "liang-parcs-et-activites",
        "name": "Parcs et activités",
        "description": "Peut construire un parc urbain sur un terrain plat de cette ville aux Loisirs. Science +3, Culture +2, Habitations +2 et Activités +1. Attrait +2 pour les cases adjacentes. Un par ville.",
        "section": "Liang"
      },
      {
        "id": "liang-urbaniste",
        "name": "Urbaniste",
        "description": "Production +1 sur toutes les ressources révélées dans la ville.",
        "section": "Liang"
      },
      {
        "id": "liang-boom-demographique",
        "name": "Boom démographique",
        "description": "Habitations +1 et Activités +1 pour chaque quartier et merveille dans la ville.",
        "section": "Liang"
      },
      {
        "id": "pingala-libraire",
        "name": "Libraire",
        "description": "Science +15% dans la ville.",
        "section": "Pingala"
      },
      {
        "id": "pingala-subventions",
        "name": "Subventions",
        "description": "Génération de points de Personnages illustres +100% dans cette ville.",
        "section": "Pingala"
      },
      {
        "id": "pingala-chercheur",
        "name": "Chercheur",
        "description": "Science +1 par Citoyens dans la ville.",
        "section": "Pingala"
      },
      {
        "id": "pingala-eureka",
        "name": "Eurêka !",
        "description": "La ville gagne de la Science pour chaque bâtiment dans le Campus : +3 pour la bibliothèque, +5 pour l'université et +7 pour le laboratoire de recherche.",
        "section": "Pingala"
      },
      {
        "id": "pingala-savoir-partage",
        "name": "Savoir partagé",
        "description": "Les routes commerciales intérieures menant vers cette ville gagne +1 Nourriture et +3 Science.",
        "section": "Pingala"
      },
      {
        "id": "pingala-initiative-spatiale",
        "name": "Initiative spatiale",
        "description": "Production +30% pour tous les projets de programme spatial de la ville.",
        "section": "Pingala"
      },
      {
        "id": "reyna-saisie-du-terrain",
        "name": "Saisie du terrain",
        "description": "Acquisition de nouvelles cases plus rapide dans la ville. Or par tour +4 pour chaque route commerciale étrangère arrivant à ou passant par la ville.",
        "section": "Reyna"
      },
      {
        "id": "reyna-capitaine-du-port",
        "name": "Capitaine du port",
        "description": "Double le bonus de proximité de la Plateforme commerciale et/ou du Port. Capacité de routes commerciales +1 si la ville possède un marché et un phare.",
        "section": "Reyna"
      },
      {
        "id": "reyna-sylviculture",
        "name": "Sylviculture",
        "description": "Or +2 pour les cases à l'attrait époustouflant. Or +2 pour les cases non aménagées de plaines inondables, de marais, de forêt tropicale, de bois et de récif. Attrait +1 pour les cases adjacentes à ces cases.",
        "section": "Reyna"
      },
      {
        "id": "reyna-perceptrice",
        "name": "Perceptrice",
        "description": "Or +2 par tour pour chaque Citoyen dans la ville. Capacité de routes commerciales +1.",
        "section": "Reyna"
      },
      {
        "id": "reyna-sous-traitante",
        "name": "Sous-traitante",
        "description": "Permet à la ville d'acheter des quartiers avec de l'Or. Coût en Or à l'achat des unités de support -50%. Coût en Or et en Foi à l'achat des bâtiments -50%.",
        "section": "Reyna"
      },
      {
        "id": "reyna-commerce-international",
        "name": "Commerce international",
        "description": "Science +1 et Culture +1 pour chaque route commerciale étrangère passant par la ville (passe à +2/+2 aux [COLOR_FLOAT_SCIENCE]Sciences Économiques[ENDCOLOR]).",
        "section": "Reyna"
      },
      {
        "id": "ibrahim-pacha",
        "name": "Pacha",
        "description": "Production +25% pour les unités militaires dans la ville. Si établi dans la Capitale d'un allié, augmente le gain de points d'alliance.",
        "section": "Ibrahim"
      },
      {
        "id": "ibrahim-fauconnier-royal",
        "name": "Fauconnier royal",
        "description": "Science +1 par Citoyen dans la ville.",
        "section": "Ibrahim"
      },
      {
        "id": "ibrahim-serasker",
        "name": "Sérasker",
        "description": "Puissance de combat +10 en attaquant des quartiers défendables pour vos unités dans un rayon de 10 cases autour de la ville.",
        "section": "Ibrahim"
      },
      {
        "id": "ibrahim-khass-oda-bashi",
        "name": "Khass-Oda-Bashi",
        "description": "Culture +1 par Citoyen dans la ville.",
        "section": "Ibrahim"
      },
      {
        "id": "ibrahim-capou-agha",
        "name": "Capou-agha",
        "description": "PM +1 pour vos unités dans un rayon de 10 cases autour de la ville. Puissance de combat +3 pour les unités combattant dans le territoire de la ville.",
        "section": "Ibrahim"
      },
      {
        "id": "ibrahim-grand-vizir",
        "name": "Grand vizir",
        "description": "Habitations +5 et Activités +5.",
        "section": "Ibrahim"
      },
      {
        "id": "fire-is-born-arrivee-de-l-emissaire",
        "name": "Arrivée de l'Émissaire",
        "description": "Puissance de combat +5 dans le territoire de la ville. Peut être envoyé dans une Cité-état, où il fournit 2 émissaires.",
        "section": "Fire Is Born"
      },
      {
        "id": "fire-is-born-poste-avance",
        "name": "Poste avancé",
        "description": "Production +25% pour les Plateformes commerciales et les Ports pour les villes dans un rayon de 15 cases. Les émissaires envoyés dans une Cité-état avec laquelle vous échangez une route commerciale comptent pour deux.",
        "section": "Fire Is Born"
      },
      {
        "id": "fire-is-born-expedition-vers-peten",
        "name": "Expédition vers Petén",
        "description": "Puissance de combat en défense +5 pour la ville.",
        "section": "Fire Is Born"
      },
      {
        "id": "fire-is-born-chute-de-patte-de-jaguar",
        "name": "Chute de Patte de Jaguar",
        "description": "Production +25% pour les bâtiments de Plateforme commerciale, de Port et de Centre Ville pour les villes dans un rayon de 15 cases.",
        "section": "Fire Is Born"
      },
      {
        "id": "fire-is-born-assaut-sur-uaxactun",
        "name": "Assaut sur Uaxactun",
        "description": "Puissance de combat +5 pour les unités levées dans un rayon de 10 cases.",
        "section": "Fire Is Born"
      },
      {
        "id": "fire-is-born-gardien-des-rois",
        "name": "Gardien des rois",
        "description": "Faveurs diplomatiques +2 par Cité-état vassale. Affecte tous les joueurs",
        "section": "Fire Is Born"
      }
    ],
    "sectionImages": {
      "Victor": "https://civ6bbg.github.io/images/governors/Victor.webp",
      "Amani": "https://civ6bbg.github.io/images/governors/Amani.webp",
      "Moksha": "https://civ6bbg.github.io/images/governors/Moksha.webp",
      "Magnus": "https://civ6bbg.github.io/images/governors/Magnus.webp",
      "Liang": "https://civ6bbg.github.io/images/governors/Liang.webp",
      "Pingala": "https://civ6bbg.github.io/images/governors/Pingala.webp",
      "Reyna": "https://civ6bbg.github.io/images/governors/Reyna.webp",
      "Ibrahim": "https://civ6bbg.github.io/images/governors/Ibrahim.webp",
      "Fire Is Born": "https://civ6bbg.github.io/images/governors/Fire%20is%20Born.webp"
    }
  },
  {
    "key": "city_states",
    "label": "Cités-États",
    "icon": "🏛️",
    "items": [
      {
        "id": "culturelle-antananarivo",
        "name": "Antananarivo",
        "description": "Culture +2% par Personnage illustre recruté, jusqu'à +30%.",
        "section": "Culturelle",
        "image": "https://civ6bbg.github.io/images/city_states/Antananarivo.webp"
      },
      {
        "id": "culturelle-ayutthaya",
        "name": "Ayutthaya",
        "description": "Gain de Culture égal à 15% du coût en Production à chaque bâtiment terminé.",
        "section": "Culturelle",
        "image": "https://civ6bbg.github.io/images/city_states/Ayutthaya.webp"
      },
      {
        "id": "culturelle-caguana",
        "name": "Caguana",
        "description": "Débloque la compétence de Bâtisseur permettant de construire un batey.\n\nCulture +1. Production +1 pour chaque ressource stratégique adjacente, Or +1 pour chaque ressource de luxe adjacente et Culture +1 pour chaque ressource bonus et Complexe de loisirs adjacents (passe à +2 à l'Exploration). Génère du Tourisme par le biais de la Culture une fois l'[COLOR_FLOAT_SCIENCE]Aviation[ENDCOLOR] découverte. Ne peut pas être construit à côté d'un autre batey.",
        "section": "Culturelle",
        "image": "https://civ6bbg.github.io/images/city_states/Caguana.webp"
      },
      {
        "id": "culturelle-kumasi",
        "name": "Kumasi",
        "description": "Les routes commerciales à destination d'une Cité-état gagnent +2 Culture, ainsi que +1 Or et +1 Culture par quartier spécialisé dans la ville de départ.",
        "section": "Culturelle",
        "image": "https://civ6bbg.github.io/images/city_states/Kumasi.webp"
      },
      {
        "id": "culturelle-mohenjo-daro",
        "name": "Mohenjo-daro",
        "description": "Habitations maximum pour toutes vos villes, comme si elles étaient toutes adjacentes à de l'eau douce.",
        "section": "Culturelle",
        "image": "https://civ6bbg.github.io/images/city_states/Mohenjo-Daro.webp"
      },
      {
        "id": "culturelle-nan-madol",
        "name": "Nan Madol",
        "description": "Culture +1 pour vos quartiers construits sur ou adjacents à une case de côte ou de lac (passe à +2 à l'Exploration).",
        "section": "Culturelle",
        "image": "https://civ6bbg.github.io/images/city_states/Nan%20Madol.webp"
      },
      {
        "id": "culturelle-rapa-nui",
        "name": "Rapa Nui",
        "description": "Débloque la compétence de Bâtisseur permettant de construire un moaï.\n\nCulture +1. Culture +1 tous les 2 moaïs adjacents (pour chaque moaï adjacent à Foires Médiévales). Culture +2 si construit sur une case de sol volcanique ou sur une case adjacente. Culture +1 si adjacent à une case de côte ou de lac. Génère du Tourisme par le biais de la Culture une fois l'[COLOR_FLOAT_SCIENCE]Aviation[ENDCOLOR] découverte.",
        "section": "Culturelle",
        "image": "https://civ6bbg.github.io/images/city_states/Rapa%20Nui.webp"
      },
      {
        "id": "culturelle-vilnius",
        "name": "Vilnius",
        "description": "Toutes les Places du théâtre reçoivent +50%/+100%/+150% de bonus de proximité si vous possédez une alliance de niveau 1/2/3. Non cumulable avec plusieurs alliances.",
        "section": "Culturelle",
        "image": "https://civ6bbg.github.io/images/city_states/Vilnius.webp"
      },
      {
        "id": "industrielle-auckland",
        "name": "Auckland",
        "description": "Production +1 pour les cases de côte aménagées (passe à +2 une fois l'ère industrielle atteinte).",
        "section": "Industrielle",
        "image": "https://civ6bbg.github.io/images/city_states/Auckland.webp"
      },
      {
        "id": "industrielle-bruxelles",
        "name": "Bruxelles",
        "description": "Production +15% pour la construction de merveilles dans vos villes.",
        "section": "Industrielle",
        "image": "https://civ6bbg.github.io/images/city_states/Brussels.webp"
      },
      {
        "id": "industrielle-buenos-aires",
        "name": "Buenos Aires",
        "description": "Vos ressources bonus fonctionnent comme des ressources de luxe, vous octroyant une Activité par type.",
        "section": "Industrielle",
        "image": "https://civ6bbg.github.io/images/city_states/Buenos%20Aires.webp"
      },
      {
        "id": "industrielle-cardiff",
        "name": "Cardiff",
        "description": "Production +1, Or +1 et Électricité +2 pour les bâtiments du Port.",
        "section": "Industrielle",
        "image": "https://civ6bbg.github.io/images/city_states/Cardiff.webp"
      },
      {
        "id": "industrielle-hong-kong",
        "name": "Hong Kong",
        "description": "Production +20% pour tous vos projets de ville.",
        "section": "Industrielle",
        "image": "https://civ6bbg.github.io/images/city_states/Hong%20Kong.webp"
      },
      {
        "id": "industrielle-johannesbourg",
        "name": "Johannesbourg",
        "description": "Production +1 dans vos villes pour chaque type de ressource aménagé (bonus/luxe/stratégique) (+1 à [COLOR_FLOAT_SCIENCE]Ballistiques[ENDCOLOR] et +1 à [COLOR_FLOAT_SCIENCE]Industrialisation[ENDCOLOR]).",
        "section": "Industrielle",
        "image": "https://civ6bbg.github.io/images/city_states/Johannesburg.webp"
      },
      {
        "id": "industrielle-mexico",
        "name": "Mexico",
        "description": "La zone d'effets régionaux des Zones industrielles, des Complexes de loisirs et des Parcs aquatiques augmente de 3 cases. Activités +1 pour les villes possédant un Aqueduc.",
        "section": "Industrielle",
        "image": "https://civ6bbg.github.io/images/city_states/Mexico%20City.webp"
      },
      {
        "id": "industrielle-singapour",
        "name": "Singapour",
        "description": "Production +2 pour les routes commerciales internationales.",
        "section": "Industrielle",
        "image": "https://civ6bbg.github.io/images/city_states/Singapore.webp"
      },
      {
        "id": "militariste-akkad",
        "name": "Akkad",
        "description": "Les unités de combat rapproché et d'anti-cavalerie infligent des dégâts complets aux remparts de la ville.",
        "section": "Militariste",
        "image": "https://civ6bbg.github.io/images/city_states/Akkad.webp"
      },
      {
        "id": "militariste-grenade",
        "name": "Grenade",
        "description": "Débloque la compétence de Bâtisseur permettant de construire un alcázar.\n\nProduction +1 et Culture +2. Culture +1 par Campement adjacent. Octroie une quantité de Science égale à 50% de l'Attrait de la case. Puissance de combat en défense +4 et retranchement instantané. Génère du Tourisme par le biais de la Culture une fois l'[COLOR_FLOAT_SCIENCE]Aviation[ENDCOLOR] découverte. Deux alcázars ne peuvent pas être adjacents.",
        "section": "Militariste",
        "image": "https://civ6bbg.github.io/images/city_states/Granada.webp"
      },
      {
        "id": "militariste-kaboul",
        "name": "Kaboul",
        "description": "Expérience de combat +100% pour les unités militaires lorsqu'elles engagent le combat.",
        "section": "Militariste",
        "image": "https://civ6bbg.github.io/images/city_states/Kabul.webp"
      },
      {
        "id": "militariste-la-valette",
        "name": "La Valette",
        "description": "Les bâtiments du Centre-ville et du Campement peuvent être achetés avec de la Foi. Le coût d'achat de tous les remparts est réduit.",
        "section": "Militariste",
        "image": "https://civ6bbg.github.io/images/city_states/Valletta.webp"
      },
      {
        "id": "militariste-lahore",
        "name": "Lahore",
        "description": "Permet d'acheter une unité exclusive à Lahore, le Nihang. Possède un arbre de compétences spécifique. Peut être achetée avec de la Foi. Puissance de combat +12 si vous possédez une caserne. De même si vous possédez une armurerie ou une école militaire. Reçoit les bonus des Généraux illustres de toutes les ères.",
        "section": "Militariste",
        "image": "https://civ6bbg.github.io/images/city_states/Lahore.webp"
      },
      {
        "id": "militariste-ngazargamu",
        "name": "Ngazargamu",
        "description": "Le prix en Or et en Foi des unités militaires ou de soutien terrestres baisse de 10% par bâtiment du Campement construit dans cette ville.",
        "section": "Militariste",
        "image": "https://civ6bbg.github.io/images/city_states/Ngazargamu.webp"
      },
      {
        "id": "militariste-preslav",
        "name": "Preslav",
        "description": "Loyauté +40 dans toutes vos villes, vous assurant une loyauté sans faille dans tout votre Empire.",
        "section": "Militariste",
        "image": "https://civ6bbg.github.io/images/city_states/Preslav.webp"
      },
      {
        "id": "militariste-wolin",
        "name": "Wolin",
        "description": "Chaque victoire militaire rapporte une quantité de points de Général illustre (combat terrestre) ou de points d'Amiral illustre (combat naval), égale à 25% de la Puissance de combat de l'unité vaincue (vitesse normale).",
        "section": "Militariste",
        "image": "https://civ6bbg.github.io/images/city_states/Wolin.webp"
      },
      {
        "id": "religieuse-armagh",
        "name": "Armagh",
        "description": "Débloque la compétence de Bâtisseur permettant de construire un monastère.\n\nNourriture +1, Foi +3 et Habitations +1. Foi +1 par quartier adjacent à l'Église Réformée. Habitations +1 à Colonialisme. Régénération +15 pour les unités qui n'ont pas attaqué ce tour. Génère du Tourisme par le biais de la Foi après la découverte de l'[COLOR_FLOAT_SCIENCE]Aviation[ENDCOLOR]. Ne peut pas être construit à côté d'un autre monastère.",
        "section": "Religieuse",
        "image": "https://civ6bbg.github.io/images/city_states/Armagh.webp"
      },
      {
        "id": "religieuse-chinguetti",
        "name": "Chinguetti",
        "description": "Foi +4 pour les routes commerciales.",
        "section": "Religieuse",
        "image": "https://civ6bbg.github.io/images/city_states/Chinguetti.webp"
      },
      {
        "id": "religieuse-erevan",
        "name": "Erevan",
        "description": "Vos Apôtres peuvent choisir n'importe quelle promotion, plutôt que de recevoir une promotion aléatoire.",
        "section": "Religieuse",
        "image": "https://civ6bbg.github.io/images/city_states/Yerevan.webp"
      },
      {
        "id": "religieuse-jerusalem",
        "name": "Jérusalem",
        "description": "Vos villes possédant un lieu saint exercent de la pression comme si elles étaient des villes saintes : pression religieuse x4 pour toutes les villes dans un rayon de dix cases.",
        "section": "Religieuse",
        "image": "https://civ6bbg.github.io/images/city_states/Jerusalem.webp"
      },
      {
        "id": "religieuse-kandy",
        "name": "Kandy",
        "description": "Vous recevez une relique chaque fois que vous découvrez une merveille naturelle. Foi +50% pour vos reliques.",
        "section": "Religieuse",
        "image": "https://civ6bbg.github.io/images/city_states/Kandy.webp"
      },
      {
        "id": "religieuse-la-venta",
        "name": "La Venta",
        "description": "Débloque la compétence de Bâtisseur permettant de construire une tête colossale.\n\nNourriture +1, Foi +2 et Habitations +1. Foi +1 toutes les 2 cases de forêt tropicale adjacentes (par case de forêt tropicale à l'Humanisme). Foi +1 toutes les 2 cases de bois adjacentes (par case de bois à l'Humanisme). Génère du Tourisme par le biais de la Foi une fois l'[COLOR_FLOAT_SCIENCE]Aviation[ENDCOLOR] découverte. Construction impossible sur la neige ou une colline enneigée.",
        "section": "Religieuse",
        "image": "https://civ6bbg.github.io/images/city_states/La%20Venta.webp"
      },
      {
        "id": "religieuse-nazca",
        "name": "Nazca",
        "description": "Débloque la compétence de Bâtisseur permettant de construire une ligne de Nazca.\n\nFoi +1 pour les cases adjacentes. Foi +1 pour les cases adjacentes disposant d'une ressource. Nourriture +1 pour les cases de désert et de colline désertique adjacentes à la Fonction Publique. Production +1 pour les cases plates adjacentes à la [COLOR_FLOAT_SCIENCE]Production en Série[ENDCOLOR]. Attrait +1 pour les cases adjacentes. Ne peut être construit que sur une case de désert plat. Cette case ne peut pas être exploitée.",
        "section": "Religieuse",
        "image": "https://civ6bbg.github.io/images/city_states/Nazca.webp"
      },
      {
        "id": "religieuse-vatican",
        "name": "Vatican",
        "description": "Lorsque vous activez un Personnage illustre, il génère 400 points de pression religieuse pour la religion que vous avez fondée (ou dominante) dans les villes dans un rayon de 6 cases.",
        "section": "Religieuse",
        "image": "https://civ6bbg.github.io/images/city_states/Vatican%20City.webp"
      },
      {
        "id": "scientifique-anshan",
        "name": "Anshan",
        "description": "Science +2 pour chaque chef-d'œuvre littéraire. Science +1 pour chaque relique et artefact.",
        "section": "Scientifique",
        "image": "https://civ6bbg.github.io/images/city_states/Anshan.webp"
      },
      {
        "id": "scientifique-bologne",
        "name": "Bologne",
        "description": "Vos quartiers avec un bâtiment génèrent un point de Personnage illustre de même type qu'eux ( Écrivain illustre, Artiste illustre et Musicien illustre pour la Place du théâtre).",
        "section": "Scientifique",
        "image": "https://civ6bbg.github.io/images/city_states/Bologna.webp"
      },
      {
        "id": "scientifique-fes",
        "name": "Fès",
        "description": "Lorsque l'une de vos unités religieuses convertit une ville pour la première fois, vous gagnez 10 points de Science par Citoyen de cette ville.",
        "section": "Scientifique",
        "image": "https://civ6bbg.github.io/images/city_states/Fez.webp"
      },
      {
        "id": "scientifique-geneve",
        "name": "Genève",
        "description": "Les Eurêka ! fournissent 5% supplémentaires vers l'obtention des technologies.",
        "section": "Scientifique",
        "image": "https://civ6bbg.github.io/images/city_states/Geneva.webp"
      },
      {
        "id": "scientifique-hattusa",
        "name": "Hattusa",
        "description": "Vous octroie 2 ressources stratégiques découvertes de chaque type par tour.",
        "section": "Scientifique",
        "image": "https://civ6bbg.github.io/images/city_states/Hattusa.webp"
      },
      {
        "id": "scientifique-mitla",
        "name": "Mitla",
        "description": "Croissance +15% dans les villes avec un Campus.",
        "section": "Scientifique",
        "image": "https://civ6bbg.github.io/images/city_states/Mitla.webp"
      },
      {
        "id": "scientifique-nalanda",
        "name": "Nālandā",
        "description": "Débloque la compétence de Bâtisseur permettant de construire un mahavihara.\n\nScience +2 et Habitations +1. Science +1 pour chaque Campus adjacent (passe à +2 à la [COLOR_FLOAT_SCIENCE]Théorie Scientifique[ENDCOLOR]). Foi +1 pour chaque Lieu saint adjacent. À la construction de son premier mahavihara, le joueur reçoit une technologie aléatoire. Doit être construit sur un terrain plat. Deux mahaviharas ne peuvent pas être adjacents.",
        "section": "Scientifique",
        "image": "https://civ6bbg.github.io/images/city_states/Nalanda.webp"
      },
      {
        "id": "scientifique-taruga",
        "name": "Taruga",
        "description": "Science +5% dans toutes les villes pour chaque ressource stratégique aménagée différente qu'elles possèdent.",
        "section": "Scientifique",
        "image": "https://civ6bbg.github.io/images/city_states/Taruga.webp"
      },
      {
        "id": "commerciale-bandar-brunei",
        "name": "Bandar Brunei",
        "description": "Or +1 pour toutes les routes commerciales traversant ou arrivant à vos comptoirs commerciaux étrangers. Or +2 pour les routes commerciales.",
        "section": "Commerciale",
        "image": "https://civ6bbg.github.io/images/city_states/Bandar%20Brunei.webp"
      },
      {
        "id": "commerciale-cahokia",
        "name": "Cahokia",
        "description": "Débloque la compétence de Bâtisseur permettant de construire un mont de Cahokia.\n\nOr +3 et Activités +1 ( l'Activité est limitée à 1 par ville, puis 2 à l'Histoire Naturelle). Nourriture +1 toutes les 2 cases de quartiers adjacentes à la Féodalité (pour chaque quartier adjacent à [COLOR_FLOAT_SCIENCE]Pièces de Rechange[ENDCOLOR]). Habitations +1 (passe à +2 au Patrimoine Culturel découvert). Deux monts de Cahokia ne peuvent pas être adjacents.",
        "section": "Commerciale",
        "image": "https://civ6bbg.github.io/images/city_states/Cahokia.webp"
      },
      {
        "id": "commerciale-hunza",
        "name": "Hunza",
        "description": "Or +1 toutes les 5 cases traversées par vos routes commerciales.",
        "section": "Commerciale",
        "image": "https://civ6bbg.github.io/images/city_states/Hunza.webp"
      },
      {
        "id": "commerciale-mascate",
        "name": "Mascate",
        "description": "Activités +1 pour chaque Plateforme commerciale.",
        "section": "Commerciale",
        "image": "https://civ6bbg.github.io/images/city_states/Muscat.webp"
      },
      {
        "id": "commerciale-mogadiscio",
        "name": "Mogadiscio",
        "description": "Tous vos Négociants sont immunisés contre le pillage. Or +2 pour les routes commerciales internationales.",
        "section": "Commerciale",
        "image": "https://civ6bbg.github.io/images/city_states/Mogadishu.webp"
      },
      {
        "id": "commerciale-samarcande",
        "name": "Samarcande",
        "description": "Débloque la compétence de Bâtisseur permettant de construire un dôme commercial.\n\nOr +2. Or +1 pour chaque ressource de luxe adjacente. Or +2 et Foi +1 pour vos routes commerciales internationales pour chaque dôme commercial dans la ville d'origine. Deux dômes commerciaux ne peuvent pas être adjacents.",
        "section": "Commerciale",
        "image": "https://civ6bbg.github.io/images/city_states/Samarkand.webp"
      },
      {
        "id": "commerciale-venise",
        "name": "Venise",
        "description": "Or +2 pour chaque ressource de luxe dans la ville d'arrivée pour vos routes commerciales internationales.",
        "section": "Commerciale",
        "image": "https://civ6bbg.github.io/images/city_states/Venice.webp"
      },
      {
        "id": "commerciale-zanzibar",
        "name": "Zanzibar",
        "description": "Vous recevez de la Cannelle (et des Clous de girofle à [COLOR_FLOAT_SCIENCE]Banques[ENDCOLOR]), deux ressources de luxe exclusives à Zanzibar qui offrent 6 Activités chacune.",
        "section": "Commerciale",
        "image": "https://civ6bbg.github.io/images/city_states/Zanzibar.webp"
      }
    ]
  },
  {
    "key": "world_wonder",
    "label": "Merveilles",
    "icon": "🗿",
    "items": [
      {
        "id": "ere-antique-etemenanki",
        "name": "Etemenanki",
        "description": "+2 Science\nMerveille de l'ère antique.\n\nProduction +1 et Science +1 pour les cases de marais dans votre Empire.\nProduction +1 pour les cases de plaines inondables de la ville.\nScience +1 pour les fermes de plaines inondables de la ville.\n\nDoit être construite sur une case de plaines inondables ou de marais.\nCoût en production = 110\nDébloqué par Écriture Technologie",
        "section": "Ère antique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Etemenanki.webp"
      },
      {
        "id": "ere-antique-grand-bain",
        "name": "Grand bain",
        "description": "+3 Habitations\n+1 Activités\nMerveille de l'ère antique.\n\nLes cases de plaines inondables de cette rivière sont immunisées aux crues. Foi +1 pour ces cases à chaque crue, mais rendements bonus en Nourriture et en Production dûs aux crues réduits de moitié.\n\nDoit être construite sur une case de plaines inondables.\nCoût en production = 90\nDébloqué par Poterie Technologie",
        "section": "Ère antique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Great%20Bath.webp"
      },
      {
        "id": "ere-antique-jardins-suspendus",
        "name": "Jardins suspendus",
        "description": "+1 Habitations\nMerveille de l'ère antique.\n\nCroissance +15% dans toutes vos villes.\nHabitations +2 dans la ville de construction.\nHabitations +1 dans toutes les autres villes dans un rayon de 6 cases.\n\nDoit être construite sur une case adjacente à une rivière.\nCoût en production = 110\nDébloqué par Irrigation Technologie",
        "section": "Ère antique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Hanging%20Gardens.webp"
      },
      {
        "id": "ere-antique-oracle",
        "name": "Oracle",
        "description": "+1 Culture\n+1 Foi\nMerveille de l'ère antique.\n\nLes quartiers de la ville fournissent 2 points de Personnages illustres supplémentaires (points d'Écrivain illustre pour la Place du théâtre).\nLe mécénat de Personnages illustres coûte 25% de Foi en moins.\n\nDoit être construite sur une colline.\nCoût en production = 145\nDébloqué par Mysticisme Dogme",
        "section": "Ère antique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Oracle.webp"
      },
      {
        "id": "ere-antique-pyramides",
        "name": "Pyramides",
        "description": "+2 Culture\nMerveille de l'ère antique.\n\nOctroie une charge à tous les Bâtisseurs existants ou futurs.\n\nDoit être construite sur une case de Désert plate (inondable ou non).\nCoût en production = 110\nDébloqué par Maçonnerie Technologie",
        "section": "Ère antique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Pyramids.webp"
      },
      {
        "id": "ere-antique-stonehenge",
        "name": "Stonehenge",
        "description": "+2 Foi\nMerveille de l'ère antique.\n\nOctroie un Prophète illustre.\nLes Prophètes illustres peuvent fonder une religion à Stonehenge.\n\nDoit être construite sur une case plate adjacente à une ressource de Pierre.\nCoût en production = 90\nDébloqué par Astrologie Technologie",
        "section": "Ère antique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Stonehenge.webp"
      },
      {
        "id": "ere-antique-temple-d-artemis",
        "name": "Temple d'Artémis",
        "description": "+3 Nourriture\n+2 Habitations\nMerveille de l'ère antique.\n\nActivités +1 pour chaque camp, pâturage et plantation dans un rayon de 4 cases autour de cette merveille.\n\nDoit être construite sur une case adjacente à un camp.\nCoût en production = 110\nDébloqué par Tir à l'arc Technologie",
        "section": "Ère antique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Temple%20of%20Artemis.webp"
      },
      {
        "id": "ere-classique-apadana",
        "name": "Apadana",
        "description": "2 emplacements de chef-d'œuvre (tous types)\nMerveille de l'ère classique.\n\nÉmissaires +1 lorsque vous construisez une merveille dans cette ville, dont l'Apadana.\n\nDoit être construite adjacente à votre Capitale.\nCoût en production = 200\nDébloqué par Philosophie politique Dogme",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Apadana.webp"
      },
      {
        "id": "ere-classique-colisee",
        "name": "Colisée",
        "description": "+1 Culture\n+2 Activités\nMerveille de l'ère classique.\n\nCulture +1, Activités +2 et loyauté +2 par tour pour chaque Centre-ville dans un rayon de six cases.\n\nDoit être construite sur une case plate adjacente à un Complexe de loisirs doté d'une arena.\nCoût en production = 200\nDébloqué par Loisirs Dogme",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Colosseum.webp"
      },
      {
        "id": "ere-classique-colosse",
        "name": "Colosse",
        "description": "+3 Or\n1 point d' Amiral illustre par tour.\nMerveille de l'ère classique.\n\nCapacité de routes commerciales +1.\nOctroie 1 Négociant.\n\nLes routes commerciales étrangères menant à cette ville octroient +2 Or aux deux villes.\n\nDoit être construite sur une case de côte adjacente à la terre et à un Port.\nCoût en production = 200\nDébloqué par Construction navale Technologie",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Colossus.webp"
      },
      {
        "id": "ere-classique-grande-bibliotheque",
        "name": "Grande bibliothèque",
        "description": "+2 Science\n1 point de Savant illustre par tour.\n2 emplacements pour chef-d'œuvre littéraire.\n1 point de Écrivain illustre par tour.\nMerveille de l'ère classique.\n\nOctroie tous les Eurêka des ères antique et classique à sa complétion.\nOctroie un Eurêka aléatoire chaque fois qu'un joueur recrute un Savant illustre.\n\nDoit être construite sur une case plate adjacente à un Campus doté d'une bibliothèque.\nCoût en production = 250\nDébloqué par Dramaturgie et poésie Dogme",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Great%20Library.webp"
      },
      {
        "id": "ere-classique-grand-phare",
        "name": "Grand phare",
        "description": "+3 Or\n1 point d' Amiral illustre par tour.\nMerveille de l'ère classique.\n\nPM +1 pour toutes les unités navales.\n\nDoit être construite sur une case de côte adjacente à la terre et à un Port doté d'un phare.\nCoût en production = 145\nDébloqué par Navigation astronomique Technologie",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Great%20Lighthouse.webp"
      },
      {
        "id": "ere-classique-mausolee-d-halicarnasse",
        "name": "Mausolée d'Halicarnasse",
        "description": "Merveille de l'ère classique.\n\nScience +1, Culture +1 et Foi +1 pour toutes les cases de côte de la ville.\n\nLes Ingénieurs illustres gagnent 1 charge supplémentaire.\n\nDoit être construite adjacente à un Port.\nCoût en production = 250\nDébloqué par Stratégie défensive Dogme",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Mausoleum%20at%20Halicarnassus%20.webp"
      },
      {
        "id": "ere-classique-gebel-barkal",
        "name": "Gebel Barkal",
        "description": "Merveille de l'ère classique.\n\nFer +6 par tour.\nActivités +1 pour les cases de ressources stratégiques aménagées dans un rayon de 4 cases.\n\nDoit être construite sur une case de colline adjacente à une case de Fer et à une case de mine.\nCoût en production = 145\nDébloqué par Travail du fer Technologie",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Jebel%20Barkal.webp"
      },
      {
        "id": "ere-classique-machu-picchu",
        "name": "Machu Picchu",
        "description": "+4 Or\nMerveille de l'ère classique.\n\nLes cases de montagne octroient un bonus de proximité standard aux Zones industrielles, Plateformes commerciales et Places du théâtre.\n\nDoit être construite sur une case de montagne sans volcan.\nCoût en production = 200\nDébloqué par Ingénierie Technologie",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Machu%20Picchu.webp"
      },
      {
        "id": "ere-classique-temple-de-la-mahabodhi",
        "name": "Temple de la Mahabodhi",
        "description": "+4 Foi\nMerveille de l'ère classique.\n\nOctroie 2 Apôtres.\n\nOctroie 2 points de victoire diplomatique.\n\nDoit être construite sur une case de bois adjacente à un Lieu saint doté d'un temple. Vous devez avoir fondé une religion.\nCoût en production = 200\nDébloqué par Théologie Dogme",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Mahabodhi%20Temple.webp"
      },
      {
        "id": "ere-classique-petra",
        "name": "Pétra",
        "description": "Merveille de l'ère classique.\n\nNourriture +2, Production +1 et Or +2 pour toutes les cases de Désert de la ville (sauf plaines inondables).\n\nDoit être construite sur une case de Désert plate.\nCoût en production = 200\nDébloqué par Mathématiques Technologie",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Petra.webp"
      },
      {
        "id": "ere-classique-statue-de-zeus",
        "name": "Statue de Zeus",
        "description": "+3 Or\nMerveille de l'ère classique.\n\nOctroie 3 Archers, 3 Lanciers et 1 Bélier.\nProduction +35% pour les unités d'anti-cavalerie pour votre Empire.\n\nDoit être construite sur une case plate adjacente à un Campement doté d'une caserne.\nCoût en production = 200\nDébloqué par Formation militaire Dogme",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Statue%20of%20Zeus.webp"
      },
      {
        "id": "ere-classique-armee-de-terre-cuite",
        "name": "Armée de terre cuite",
        "description": "1 point de Général illustre par tour.\nMerveille de l'ère classique.\nToutes vos unités (excepté navales) actuelles gagnent une promotion.\n\nVos archéologues peuvent entrer dans les territoires étrangers sans libre passage.\n\nDoit être construite sur une case plate à côté d'un Campement doté d'une caserne ou d'une écurie.\nCoût en production = 200\nDébloqué par Construction Technologie",
        "section": "Ère classique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Terracotta%20Army.webp"
      },
      {
        "id": "ere-medievale-alhambra",
        "name": "Alhambra",
        "description": "+2 Activités\n2 points de Général illustre par tour.\nMerveille de l'ère médiévale.\n\nEmplacement de doctrine Militaire +1.\n\nPuissance de combat en défense +4, Vision +1 et retranchement instantané.\n\nDoit être construite sur une colline adjacente à un Campement.\nCoût en production = 355\nDébloqué par Châteaux Technologie",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/Alhambra.webp"
      },
      {
        "id": "ere-medievale-angkor-vat",
        "name": "Angkor Vat",
        "description": "+2 Foi\nMerveille de l'ère médiévale.\n\nCitoyens +1 dans toutes vos villes à sa complétion.\nHabitations +1 dans toutes les villes.\n\nDoit être construite sur une case adjacente à un Aqueduc.\nCoût en production = 355\nDébloqué par Foires médiévales Dogme",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/Angkor%20Wat.webp"
      },
      {
        "id": "ere-medievale-chichen-itza",
        "name": "Chichén Itzá",
        "description": "Merveille de l'ère médiévale.\n\nProduction +1 et Culture +1 pour toutes les cases de forêt tropicale dans votre Empire.\n\nDoit être construite sur une case de forêt tropicale.\nCoût en production = 355\nDébloqué par Guildes Dogme",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/Chichen%20Itza.webp"
      },
      {
        "id": "ere-medievale-sainte-sophie",
        "name": "Sainte Sophie",
        "description": "+4 Foi\nMerveille de l'ère médiévale.\n\nScience +2 pour les autels.\n\nDoit être construite sur une case plate adjacente à un Lieu saint. Vous devez avoir fondé une religion.\nCoût en production = 355\nDébloqué par Contrefort Technologie",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/Hagia%20Sophia.webp"
      },
      {
        "id": "ere-medievale-templo-mayor",
        "name": "Templo Mayor",
        "description": "Merveille de l'ère médiévale.\n\nActivités +1 pour chaque case de lac adjacente au Templo Mayor.\nNourriture +1, Production +1 et Culture +2 pour chaque case de lac dans votre Empire.\n\nDoit être construite sur une case de lac adjacente à la terre.\nCoût en production = 250\nDébloqué par Tactique militaire Technologie",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/Huey%20Teocalli.webp"
      },
      {
        "id": "ere-medievale-kilwa-kisiwani",
        "name": "Kilwa Kisiwani",
        "description": "Merveille de l'ère médiévale.\n\nOctroie 3  émissaires.\nSi vous êtes suzerain d'une Cité-état, cette ville reçoit un bonus de 15% du même type que celui de la Cité-état. Si vous êtes suzerain d'une deuxième Cité-état de ce type, un bonus supplémentaire de 15% est octroyé à toutes vos villes.\n\nDoit être construite sur une case plate adjacente à la côte.\nCoût en production = 400\nDébloqué par Mécanique Technologie",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/Kilwa%20Kisiwani.webp"
      },
      {
        "id": "ere-medievale-kotoku-in",
        "name": "Kōtoku-in",
        "description": "Merveille de l'ère médiévale.\n\nFoi +20% dans cette ville.\nOctroie 4 Moines-guerriers et permet d'en former dans cette ville peu importe la religion qu'elle suit, que vous en ayez fondé une ou non.\n\nDoit être construite sur une case adjacente à un Lieu saint doté d'un temple. Le joueur peut uniquement recevoir des moines-guerriers s'il a créé une religion ou si une religion est dominante pour ce joueur ou dans sa ville.\nCoût en production = 355\nDébloqué par Droit divin Dogme",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/Kotoku-in.webp"
      },
      {
        "id": "ere-medievale-temple-de-minakshi",
        "name": "Temple de Mînâkshî",
        "description": "+3 Foi\nMerveille de l'ère médiévale.\n\nOctroie 2 Apôtres.\nFoi +1 pour les cases de forêts et de forêts tropicales de votre Empire.\n\nDoit être construite sur une case adjacente à un Lieu saint. Vous devez avoir fondé une religion.\nCoût en production = 355\nDébloqué par Fonction publique Dogme",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/Meenakshi%20Temple.webp"
      },
      {
        "id": "ere-medievale-mt-saint-michel",
        "name": "Mt-Saint-Michel",
        "description": "+2 Foi\n2 emplacements pour relique.\nMerveille de l'ère médiévale.\n\nNourriture +1 et Culture +1 pour toutes les cases de plaines inondables dans votre Empire.\n\nTous vos nouveaux Apôtres obtiennent la compétence de martyr, en plus de leur compétence normale.\n\nPuissance de combat en défense +6 et retranchement instantané.\n\nDoit être construite sur une case de plaines inondables ou un marais.\nCoût en production = 355\nDébloqué par Droit divin Dogme",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/Mont%20St.%20Michel.webp"
      },
      {
        "id": "ere-medievale-universite-de-sankore",
        "name": "Université de Sankoré",
        "description": "+1 Foi\n+3 Science\n2 points de Savant illustre par tour.\nMerveille de l'ère médiévale.\n\nCapacité de routes commerciales +1.\nOr +2 et Science +1 pour toutes vos routes commerciales.\nVos routes commerciales intérieures menant à la ville gagnent +2 Science.\nLes routes commerciales étrangères menant à cette ville vous fournissent +2 Science.\n\nDoit être construite sur une case de Désert adjacente à un Campus doté d'une université.\nCoût en production = 355\nDébloqué par Éducation Technologie",
        "section": "Ère médiévale",
        "image": "https://civ6bbg.github.io/images/world_wonders/University%20of%20Sankore.webp"
      },
      {
        "id": "ere-de-la-renaissance-casa-de-contratacion",
        "name": "Casa de Contratación",
        "description": "3 points de Marchand illustre par tour.\nMerveille de la Renaissance.\n\nOctroie 3 titres de gouverneur.\nProduction, Or et Foi +15% pour les villes sur un continent différent de votre Capitale et disposant d'un gouverneur.\n\nDoit être construite sur une case adjacente à la Place de la gouvernance.\nCoût en production = 460\nDébloqué par Cartographie Technologie",
        "section": "Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/world_wonders/Casa%20de%20Contrataci%C3%B3n.webp"
      },
      {
        "id": "ere-de-la-renaissance-cite-interdite",
        "name": "Cité interdite",
        "description": "+5 Culture\nMerveille de la Renaissance.\n\nEmplacement de doctrine Joker +1.\n\nDoit être construite sur une case plate adjacente au Centre-ville.\nCoût en production = 530\nDébloqué par Imprimerie Technologie",
        "section": "Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/world_wonders/Forbidden%20City.webp"
      },
      {
        "id": "ere-de-la-renaissance-grand-zimbabwe",
        "name": "Grand Zimbabwe",
        "description": "+5 Or\n2 points de Marchand illustre par tour.\nMerveille de la Renaissance.\n\nCapacité de routes commerciales +2.\nOctroie 2 Négociants.\n\nOr +2 pour vos routes commerciales depuis cette ville pour chaque ressource bonus se trouvant dans un rayon de trois cases autour de la ville et dans son territoire.\n\nDoit être construite sur une case adjacente à une Plateforme commerciale dotée d'un marché et adjacente à une ressource de Bétail.\nCoût en production = 460\nDébloqué par Banque Technologie",
        "section": "Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/world_wonders/Great%20Zimbabwe.webp"
      },
      {
        "id": "ere-de-la-renaissance-tour-de-porcelaine",
        "name": "Tour de Porcelaine",
        "description": "+3 Science\n+3 Habitations\n2 points de Savant illustre par tour.\nMerveille de la Renaissance.\n\nVous recevez 3 copies de Porcelaine, une ressource de luxe exclusive qui offre 6 Activités.\n\nDoit être construit sur une case plate de plaine, de prairie ou de toundra adjacente au Centre-ville.\nCoût en production = 460\nDébloqué par Poudre à canon Technologie",
        "section": "Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/world_wonders/Porcelain%20Tower.webp"
      },
      {
        "id": "ere-de-la-renaissance-palais-du-potala",
        "name": "Palais du Potala",
        "description": "+2 Culture\n+3 Foi\nMerveille de la Renaissance.\n\nEmplacement de doctrine Diplomatique +1.\n\nOctroie 1 point de victoire diplomatique.\n\nDoit être construite sur une case de colline adjacente à une montagne.\nCoût en production = 530\nDébloqué par Astronomie Technologie",
        "section": "Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/world_wonders/Potala%20Palace.webp"
      },
      {
        "id": "ere-de-la-renaissance-cathedrale-saint-basile",
        "name": "Cathédrale Saint-Basile",
        "description": "3 emplacements pour relique.\nMerveille de la Renaissance.\n\nOctroie une relique.\nTourisme religieux issu de cette ville +100%.\nNourriture +1, Production +1 et Culture +1 sur toutes les cases de toundra de cette ville.\n\nDoit être construite sur une case adjacente à un Centre-ville.\nCoût en production = 460\nDébloqué par Église réformée Dogme",
        "section": "Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/world_wonders/St.%20Basil's%20Cathedral.webp"
      },
      {
        "id": "ere-de-la-renaissance-taj-mahal",
        "name": "Taj Mahal",
        "description": "Merveille de la Renaissance.\n\nScore d'ère +1 pour chaque moment historique obtenu une fois cette merveille construite, si ce moment rapporte habituellement au moins 2 points.\nOr +10% dans toutes vos villes quand vous êtes en âge d'or ou en âge héroïque.\n\nDoit être construite sur une case adjacente à une rivière.\nCoût en production = 460\nDébloqué par Humanisme Dogme",
        "section": "Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/world_wonders/Taj%20Mahal.webp"
      },
      {
        "id": "ere-de-la-renaissance-torre-de-belem",
        "name": "Torre de Belém",
        "description": "+5 Or\n1 point d' Amiral illustre par tour.\nMerveille de la Renaissance.\n\nVos unités navales actuelles gagnent une promotion.\n\nDoit être construite sur une case de côte adjacente à un Port.\nCoût en production = 400\nDébloqué par Mercantilisme Dogme",
        "section": "Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/world_wonders/Torre%20de%20Bel%C3%A9m.webp"
      },
      {
        "id": "ere-de-la-renaissance-arsenal-de-venise",
        "name": "Arsenal de Venise",
        "description": "2 points d' Ingénieur illustre par tour.\nMerveille de la Renaissance.\n\nProduction +75% pour les unités navales dans toutes vos villes.\n\nDoit être construite sur une case de côte adjacente à une Zone industrielle.\nCoût en production = 460\nDébloqué par Production en série Technologie",
        "section": "Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/world_wonders/Venetian%20Arsenal.webp"
      },
      {
        "id": "ere-industrielle-theatre-bolchoi",
        "name": "Théâtre Bolchoï",
        "description": "2 points de Musicien illustre par tour.\n1 emplacement pour chef-d'œuvre musical.\n1 emplacement pour chef-d'œuvre littéraire.\n2 points de Écrivain illustre par tour.\nMerveille de l'ère industrielle.\n\nOctroie 2 dogmes gratuits choisis au hasard à sa complétion.\n\nDoit être construite sur une case plate adjacente à une Place du théâtre.\nCoût en production = 680\nDébloqué par Opéra et ballet Dogme",
        "section": "Ère industrielle",
        "image": "https://civ6bbg.github.io/images/world_wonders/Bolshoi%20Theatre.webp"
      },
      {
        "id": "ere-industrielle-ermitage",
        "name": "Ermitage",
        "description": "3 points d' Artiste illustre par tour.\n4 emplacements pour chef-d'œuvre artistique.\nMerveille de l'ère industrielle.\n\nBonus de thématique quand tous les emplacements de cette merveille sont remplis.\n\nDoit être construite sur une case adjacente à une rivière.\nCoût en production = 680\nDébloqué par Histoire naturelle Dogme",
        "section": "Ère industrielle",
        "image": "https://civ6bbg.github.io/images/world_wonders/Hermitage.webp"
      },
      {
        "id": "ere-industrielle-orszaghaz",
        "name": "Országház",
        "description": "+4 Culture\nMerveille de l'ère industrielle.\n\nPoints d'influence +25% par tour. Octroie 2 Émissaires.\nFaveurs diplomatiques +3 par tour pour chaque Cité-état vassale.\n\nDoit être construite sur une case adjacente à une rivière.\nCoût en production = 460\nDébloqué par Assainissement Technologie",
        "section": "Ère industrielle",
        "image": "https://civ6bbg.github.io/images/world_wonders/Orsz%C3%A1gh%C3%A1z.webp"
      },
      {
        "id": "ere-industrielle-universite-d-oxford",
        "name": "Université d'Oxford",
        "description": "3 points de Savant illustre par tour.\n2 emplacements pour chef-d'œuvre littéraire.\nMerveille de l'ère industrielle.\n\nScience +20% dans cette ville.\nOctroie 2 technologies gratuites choisies au hasard à sa complétion.\n\nDoit être construite sur une case plate adjacente à un Campus doté d'une université.\nCoût en production = 725\nDébloqué par Urbanisation Dogme",
        "section": "Ère industrielle",
        "image": "https://civ6bbg.github.io/images/world_wonders/Oxford%20University.webp"
      },
      {
        "id": "ere-industrielle-canal-du-panama",
        "name": "Canal du Panama",
        "description": "+10 Or\nMerveille de l'ère industrielle.\n\nUn ou deux canaux adjacents sont automatiquement construits. La case de la merveille peut désormais être franchie par des unités navales. Les routes commerciales qui la traversent peuvent multiplier l'Or reçu des quartiers de la ville de destination.\n\nDoit être construite sur 2 ou 3 cases plates, entre 2 cases d'eau ou de Centre-ville pouvant être reliées par un canal.\nCoût en production = 460\nDébloqué par Moteur à vapeur Technologie",
        "section": "Ère industrielle",
        "image": "https://civ6bbg.github.io/images/world_wonders/Panama%20Canal.webp"
      },
      {
        "id": "ere-industrielle-ruhr",
        "name": "Ruhr",
        "description": "Merveille de l'ère industrielle.\n\nProduction +20% dans cette ville.\nProduction +1 pour les mines et carrières de cette ville.\n\nDoit être construite sur une case adjacente à une rivière et à une Zone industrielle dotée d'une usine.\nCoût en production = 620\nDébloqué par Industrialisation Technologie",
        "section": "Ère industrielle",
        "image": "https://civ6bbg.github.io/images/world_wonders/Ruhr%20Valley.webp"
      },
      {
        "id": "ere-industrielle-statue-de-la-liberte",
        "name": "Statue de la liberté",
        "description": "Merveille de l'ère industrielle.\n\nOctroie 3 points de victoire diplomatique.\n\nToutes vos villes dans un rayon de 6 cases sont toujours parfaitement loyales.\n\nDoit être construite sur une case de côte adjacente à la terre et à un Port.\nCoût en production = 620\nDébloqué par Génie civil Dogme",
        "section": "Ère industrielle",
        "image": "https://civ6bbg.github.io/images/world_wonders/Statue%20of%20Liberty.webp"
      },
      {
        "id": "ere-moderne-big-ben",
        "name": "Big Ben",
        "description": "+6 Or\n3 points de Marchand illustre par tour.\nMerveille de l'ère industrielle.\n\nEmplacement de doctrine Économique +1.\nVotre trésorerie augmente de 50% à sa complétion.\n\nDoit être construite sur une case adjacente à une rivière et à une Plateforme commerciale dotée d'une banque.\nCoût en production = 810\nDébloqué par Capitalisme Dogme",
        "section": "Ère moderne",
        "image": "https://civ6bbg.github.io/images/world_wonders/Big%20Ben.webp"
      },
      {
        "id": "ere-moderne-broadway",
        "name": "Broadway",
        "description": "3 points de Musicien illustre par tour.\n2 emplacements pour chef-d'œuvre musical.\n1 emplacement pour chef-d'œuvre littéraire.\n3 points de Écrivain illustre par tour.\nMerveille de l'ère moderne.\n\nCulture +20% dans cette ville.\nOctroie une Inspiration d'un dogme de l'ère atomique choisi au hasard.\n\nDoit être construite sur une case plate adjacente à une Place du théâtre.\nCoût en production = 725\nDébloqué par Mass-médias Dogme",
        "section": "Ère moderne",
        "image": "https://civ6bbg.github.io/images/world_wonders/Broadway.webp"
      },
      {
        "id": "ere-moderne-christ-redempteur",
        "name": "Christ Rédempteur",
        "description": "+4 Culture\nMerveille de l'ère moderne.\n\nOctroie 1 relique.\nLe Tourisme généré par les reliques et les villes saintes n'est pas handicapé par les civilisations ayant adopté le dogme des Lumières.\n\nTourisme +100% pour les stations balnéaires de votre Empire.\n\nDoit être construite sur une colline.\nCoût en production = 620\nDébloqué par Mass-médias Dogme",
        "section": "Ère moderne",
        "image": "https://civ6bbg.github.io/images/world_wonders/Cristo%20Redentor.webp"
      },
      {
        "id": "ere-moderne-tour-eiffel",
        "name": "Tour Eiffel",
        "description": "Merveille de l'ère moderne.\n\nAttrait +2 pour toutes les cases de votre Empire.\n\nDoit être construite sur une case plate adjacente au centre-ville.\nCoût en production = 810\nDébloqué par Acier Technologie",
        "section": "Ère moderne",
        "image": "https://civ6bbg.github.io/images/world_wonders/Eiffel%20Tower.webp"
      },
      {
        "id": "ere-moderne-pont-du-golden-gate",
        "name": "Pont du Golden Gate",
        "description": "+3 Activités\nMerveille de l'ère moderne.\n\nLes unités terrestres peuvent traverser sans embarquer. Fonctionne comme une route moderne et en crée sur les cases terrestres de chaque côté. Activités +3 pour la ville. Attrait +4 pour les cases de la ville. Tourisme +100 % pour tous les aménagements et parc nationaux de la ville. Les routes commerciales qui la traversent peuvent multiplier l' l'Or reçu des quartiers de la ville de destination.\n\nDoit être construite sur une case de côte, entre 2 cases de terre opposées et au moins 2 cases d'eau.\nCoût en production = 810\nDébloqué par Combustion Technologie",
        "section": "Ère moderne",
        "image": "https://civ6bbg.github.io/images/world_wonders/Golden%20Gate%20Bridge.webp"
      },
      {
        "id": "ere-atomique-base-antarctique-amundsen-scott",
        "name": "Base antarctique Amundsen-Scott",
        "description": "5 points de Savant illustre par tour.\nMerveille de l'ère atomique.\n\nProduction +10% et Science +20% dans toutes vos villes. Ces rendements sont doublés dans les villes possédant au moins 5 cases exploitables de Toundra.\n\nDoit être construite sur une case de Neige ou de Toundra adjacente à un Campus doté d'un laboratoire de recherche.\nCoût en production = 810\nDébloqué par Déploiement rapide Dogme",
        "section": "Ère atomique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Amundsen-Scott%20Research%20Station.webp"
      },
      {
        "id": "ere-atomique-biosphere",
        "name": "Biosphère",
        "description": "Merveille de l'ère atomique.\n\nÉlectricité +200% pour les parcs éoliens, les centrales solaires, les centrales géothermiques et les barrages hydroélectriques. Ce bâtiment et ces aménagements génèrent autant de tourisme que d'électricité.\n\nAttrait +1 pour les cases adjacentes à une forêt tropicale ou un marais dans votre Empire.\n\nDoit être construite adjacente à une rivière et à un Quartier résidentiel.\nCoût en production = 810\nDébloqué par Matériaux synthétiques Technologie",
        "section": "Ère atomique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Biosph%C3%A8re.webp"
      },
      {
        "id": "ere-atomique-stade-maracana",
        "name": "Stade Maracanã",
        "description": "+6 Culture\n+2 Activités\nMerveille de l'ère atomique.\n\nCulture +6 et Activités +2 pour toutes vos villes\n\nDoit être construite sur une case plate adjacente à un Complexe de loisirs doté d'un stade.\nCoût en production = 870\nDébloqué par Sport professionnel Dogme",
        "section": "Ère atomique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Est%C3%A1dio%20do%20Maracan%C3%A3.webp"
      },
      {
        "id": "ere-atomique-opera-de-sydney",
        "name": "Opéra de Sydney",
        "description": "+8 Culture\n5 points de Musicien illustre par tour.\n3 emplacements pour chef-d'œuvre musical.\nMerveille de l'ère atomique.\n\nOctroie 2 Groupes de rock.\n\nDoit être construite sur une case de côte adjacente à la terre et à un Port.\nCoût en production = 810\nDébloqué par Patrimoine culturel Dogme",
        "section": "Ère atomique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Sydney%20Opera%20House.webp"
      },
      {
        "id": "ere-atomique-radiotelescope-d-arecibo",
        "name": "Radiotélescope d'Arecibo",
        "description": "+4 Science\n2 points de Savant illustre par tour.\nMerveille de l'ère atomique.\n\nLes Campus reçoivent un bonus de proximité majeur, plutôt que standard, de la part des cases de montagnes.\nOctroie un Eurêka pour chaque projet de course à l'espace complété.\nOctroie 1 technologie gratuite choisies au hasard à sa complétion.\n\nDoit être construit sur une case de forêt tropicale.\nCoût en production = 810\nDébloqué par Course à l'espace Dogme",
        "section": "Ère atomique",
        "image": "https://civ6bbg.github.io/images/world_wonders/Arecibo%20Observatory.webp"
      }
    ]
  },
  {
    "key": "natural_wonder",
    "label": "Merv. naturelles",
    "icon": "🌋",
    "items": [
      {
        "id": "grande-barriere-de-corail",
        "name": "Grande barrière de corail",
        "description": "Merveille naturelle de 2 cases prenant la forme d'un récif. Nourriture +3, Production +1 et Science +2.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Great%20Barrier%20Reef.webp"
      },
      {
        "id": "barringer-crater",
        "name": "Barringer Crater",
        "description": "Merveille naturelle d'une case. Nourriture +2, Or +3 et Science +3. Production +10% pour les projets de course à l'espace.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Barringer%20Crater.webp"
      },
      {
        "id": "triangle-des-bermudes",
        "name": "Triangle des Bermudes",
        "description": "Merveille naturelle de 3 cases. Les unités qui y pénètrent sont téléportées dans un océan lointain, mais les unités navales y gagnent la capacité \"Courants mystérieux\" ( PM +1).",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Bermuda%20Triangle.webp"
      },
      {
        "id": "baie-bioluminescente",
        "name": "Baie bioluminescente",
        "description": "Merveille naturelle d'une case. Nourriture +1, Or +1 et Science +3. Or +1 sur les bateaux de pêche si vous possédez cette case.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Bioluminescent%20Bay.webp"
      },
      {
        "id": "cerro-de-potosi",
        "name": "Cerro de Potosi",
        "description": "Merveille naturelle infranchissable d'une case, considérée comme une montagne. Production +1 et Or +3 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Cerro%20de%20Potosi.webp"
      },
      {
        "id": "chocolate-hills",
        "name": "Chocolate Hills",
        "description": "Merveille naturelle de 4 cases prenant la forme de collines. Nourriture +3, Production +3 et Science +1.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Chocolate%20Hills.webp"
      },
      {
        "id": "falaises-de-douvres",
        "name": "Falaises de Douvres",
        "description": "Merveille naturelle de 2 cases prenant la forme d'une falaise. Nourriture +2, Or +3 et Culture +3.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Cliffs%20of%20Dover.webp"
      },
      {
        "id": "crater-lake",
        "name": "Crater Lake",
        "description": "Merveille naturelle d'une case prenant la forme d'un lac. Nourriture +2, Science +2, Foi +5 et source d'eau douce.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Crater%20Lake.webp"
      },
      {
        "id": "dallol",
        "name": "Dallol",
        "description": "Merveille naturelle d'une case. Nourriture +2, Production +2, Or +1 et Science +2.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Dallol.webp"
      },
      {
        "id": "mer-morte",
        "name": "Mer Morte",
        "description": "Merveille naturelle de 2 cases prenant la forme d'un lac. Nourriture +2, Culture +2 et Foi +2. Les unités qui se soignent sur une case adjacente à la mer Morte récupèrent tous leurs PV.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Dead%20Sea.webp"
      },
      {
        "id": "delicate-arch",
        "name": "Delicate Arch",
        "description": "Merveille naturelle infranchissable d'une case. Or +3 et Foi +2 pour toutes les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Delicate%20Arch.webp"
      },
      {
        "id": "mato-tipila",
        "name": "Mato Tipila",
        "description": "Merveille naturelle infranchissable d'une case. Production +1 et Foi +2 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Mato%20Tipila.webp"
      },
      {
        "id": "mont-everest",
        "name": "Mont Everest",
        "description": "Merveille naturelle de 3 cases prenant la forme d'une montagne. Foi +3 pour les cases adjacentes. Les unités religieuses se trouvant sur une case adjacente au Mont Everest se déplacent gratuitement sur les collines pour le restant de la partie.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Mount%20Everest.webp"
      },
      {
        "id": "il-de-l-afrique",
        "name": "Œil de l'Afrique",
        "description": "Merveille naturelle de 3 cases. Nourriture +2, Production +2 et Science +2.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Eye%20of%20the%20Sahara.webp"
      },
      {
        "id": "eyjafjallajokull",
        "name": "Eyjafjallajökull",
        "description": "Merveille de 2 cases prenant la forme d'un volcan. Nourriture +1 et Culture +1 pour les cases adjacentes. Octroie de bons rendements quand il entre en éruption. Toujours actif, mais éruptions peu fréquentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Eyjafjallaj%C3%B6kull.webp"
      },
      {
        "id": "fontaine-de-jouvence",
        "name": "Fontaine de Jouvence",
        "description": "Merveille naturelle d'une case prenant la forme d'un oasis. Science +4 et Foi +4. Les unités militaires terrestres qui pénètrent sur la case gagnent la capacité \"Eau de la vie\" (guérison +10 PV sur n'importe quel territoire).",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Fountain%20of%20Youth.webp"
      },
      {
        "id": "iles-galapagos",
        "name": "Îles Galápagos",
        "description": "Merveille naturelle infranchissable de 2 cases pouvant apparaître sur les côtes. Nourriture +1 et Science +2 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Gal%C3%A1pagos%20Islands.webp"
      },
      {
        "id": "chaussee-des-geants",
        "name": "Chaussée des Géants",
        "description": "Les unités militaires terrestres qui pénètrent sur une case adjacente reçoivent la compétence \"Lance de Fionn\" ( Puissance de combat en attaque +3). Culture +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Giant's%20Causeway.webp"
      },
      {
        "id": "rocher-de-gibraltar",
        "name": "Rocher de Gibraltar",
        "description": "Merveille naturelle infranchissable d'une case. Nourriture +1 et Or +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Rock%20of%20Gibraltar.webp"
      },
      {
        "id": "gobustan",
        "name": "Gobustan",
        "description": "Merveille naturelle de 3 cases. Production +4 et Culture +4.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Gobustan%20.webp"
      },
      {
        "id": "grand-mesa",
        "name": "Grand Mesa",
        "description": "Merveille naturelle infranchissable d'une case. Nourriture +1 et Culture +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Grand%20Mesa.webp"
      },
      {
        "id": "baie-de-ha-long",
        "name": "Baie de Hạ Long",
        "description": "Merveille naturelle de deux cases se trouvant sur les côtes. Nourriture +3, production +1, et culture +1. Puissance de combat +15 en défense sur cette case.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/H%E1%BA%A1%20Long%20Bay.webp"
      },
      {
        "id": "ik-kil",
        "name": "Ik Kil",
        "description": "Merveille naturelle infranchissable d'une case. Production +50 % lors de la construction de merveilles et de quartiers sur les cases adjacentes. Fournit de l'eau douce.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Ik-Kil.webp"
      },
      {
        "id": "mont-kailash",
        "name": "Mont Kailash",
        "description": "Merveille naturelle infranchissable d'une case, considérée comme une montagne. Culture +1 et Foi +1.\nCulture +1 pour chaque ville étrangère qui suit votre religion si vous possédez cette case.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Mount%20Kailash.webp"
      },
      {
        "id": "kilimandjaro",
        "name": "Kilimandjaro",
        "description": "Merveille naturelle infranchissable d'une case, prenant la forme d'un volcan. Nourriture +2 pour les cases adjacentes. En cas d'éruption, octroie un rendement faible, avec une forte probabilité d'endommager les bâtiments et les quartiers. Éruptions peu fréquentes, mais toujours en activité.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Mount%20Kilimanjaro.webp"
      },
      {
        "id": "krakatoa",
        "name": "Krakatoa",
        "description": "Merveille naturelle infranchissable d'une case, considérée comme un volcan. Science +2 pour les cases adjacentes. Fournit des rendements supplémentaires en cas d'éruption au coût de Citoyens et dommages importants aux bâtiments et aménagements. Toujours actif.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Krakatoa.webp"
      },
      {
        "id": "lac-retba",
        "name": "Lac Retba",
        "description": "Merveille naturelle de 2 cases prenant la forme d'un lac. Nourriture +2, Production +1, Or +2 et Culture +2.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Lake%20Retba.webp"
      },
      {
        "id": "lac-victoria",
        "name": "Lac Victoria",
        "description": "Merveille naturelle de 4 cases, considérées comme un lac et fournit de l'eau douce. Nourriture +2, Production +1, Or +1 et Culture +1.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Lake%20Victoria.webp"
      },
      {
        "id": "lencois-maranhenses",
        "name": "Lençois Maranhenses",
        "description": "Merveille naturelle de 2 cases. Fournit de l'eau douce. Nourriture +2, Or +2 et Culture +2.\nCulture +1 pour les cases inondables de plaine et de désert si vous possédez au moins une case.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Len%C3%A7%C3%B3is%20Maranhenses.webp"
      },
      {
        "id": "lysefjord",
        "name": "Lysefjord",
        "description": "Les unités militaires navales qui pénètrent sur une case adjacente gagnent +2 PM. Production +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Lysefjord.webp"
      },
      {
        "id": "mont-cervin",
        "name": "Mont Cervin",
        "description": "Merveille infranchissable d'une case. Culture +1 pour les cases adjacentes. Les unités militaires terrestres qui se rendent au pied du Cervin ne subissent plus de malus de déplacement dans les collines.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Matterhorn.webp"
      },
      {
        "id": "mosi-oa-tunya",
        "name": "Mosi-oa-Tunya",
        "description": "Merveille naturelle infranchissable d'une case. Fournit de l'eau douce. Nourriture +2. Attrait +4 pour les cases adjacentes, au lieu des +2 habituels.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Mosi-oa-Tunya.webp"
      },
      {
        "id": "motlatse-canyon",
        "name": "Motlatse Canyon",
        "description": "Merveille naturelle infranchissable de 4 cases. Culture +1 et Foi +1.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Motlatse%20Canyon.webp"
      },
      {
        "id": "desert-de-namib",
        "name": "Désert de Namib",
        "description": "Merveille naturelle de 3 cases. Production +2, Or +2 et Culture +2. Les unités de reconnaissance qui pénètrent le Désert de Namib gagnent +1 PM pour le reste de la partie.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Namib%20Sand%20Sea.webp"
      },
      {
        "id": "old-faithful",
        "name": "Old Faithful",
        "description": "Merveille naturelle d'une case. Nourriture +2, Or +1, Science +3 et Foi +1. Bonus de proximité majeur pour les Campus.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Old%20Faithful.webp"
      },
      {
        "id": "lacs-d-ounianga",
        "name": "Lacs d'Ounianga",
        "description": "Merveille naturelle de 2 cases. Fournit de l'eau douce. Nourriture +2, Or +2 et Culture +2.\nNourriture +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Lakes%20of%20Ounianga.webp"
      },
      {
        "id": "paititi",
        "name": "Païtiti",
        "description": "Merveille naturelle infranchissable de 3 cases. Or +1 et Culture +1 sur les cases adjacentes. Or +4 pour les routes commerciales internationales si la ville d'origine possède au moins une case.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Pa%C3%AFtiti.webp"
      },
      {
        "id": "pamukkale",
        "name": "Pamukkale",
        "description": "Merveille naturelle infranchissable de 2 cases. Activités +1 dans les villes qui en possèdent au moins une case. Octroie une Activités supplémentaire si un Complexe de loisirs en est adjacent. Bonus de proximité important pour les Plateformes commerciales, les Campus et les Places du théâtre. Bonus de proximité standard supplémentaire pour les Lieux saints. Fournit de l'eau douce.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Pamukkale.webp"
      },
      {
        "id": "pantanal",
        "name": "Pantanal",
        "description": "Merveille naturelle de 4 cases, considérées comme un marais. Nourriture +2, Production +1, Science +2 et Culture +2.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Pantanal.webp"
      },
      {
        "id": "piopiotahi",
        "name": "Piopiotahi",
        "description": "Merveille naturelle infranchissable de trois cases. Or +1 et Culture +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Piopiotahi.webp"
      },
      {
        "id": "mont-roraima",
        "name": "Mont Roraima",
        "description": "Merveille infranchissable de 4 cases prenant la forme d'une montagne. Science +1 et Foi +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Mount%20Roraima.webp"
      },
      {
        "id": "salar-d-uyuni",
        "name": "Salar d'Uyuni",
        "description": "Merveille naturelle de 4 cases. Production +2, Or +4 et Science +2. Bonus de proximité majeur pour les Plateformes commerciales.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Salar%20de%20Uyuni.webp"
      },
      {
        "id": "mont-sinai",
        "name": "Mont Sinaï",
        "description": "Merveille naturelle infranchissable d'une case, considérée comme une montagne. Foi +2 pour les cases adjacentes. Les unités religieuses se trouvant sur une case adjacente au Mont Sinaï obtiennent +15 Puissance religieuse.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Mount%20Sinai.webp"
      },
      {
        "id": "pic-d-adam",
        "name": "Pic d'Adam",
        "description": "Merveille naturelle infranchissable d'une case, considérée comme une montagne. Nourriture +1 et Foi +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Sri%20Pada.webp"
      },
      {
        "id": "torres-del-paine",
        "name": "Torres del Paine",
        "description": "Merveille naturelle infranchissable de 2 cases prenant la forme d'une montagne. Rendements de base (hors ressources et caractéristiques de terrain) doublés pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Torres%20del%20Paine.webp"
      },
      {
        "id": "tsingy-de-bemaraha",
        "name": "Tsingy de Bemaraha",
        "description": "Merveille naturelle infranchissable d'une case. Nourriture +1, Science +1 et Culture +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Tsingy%20de%20Bemaraha.webp"
      },
      {
        "id": "bassin-de-l-oubsou-nour",
        "name": "Bassin de l'Oubsou-Nour",
        "description": "Merveille naturelle de 4 cases prenant la forme d'un marais. Nourriture +2, Production +2 et Foi +2.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Ubsunur%20Hollow.webp"
      },
      {
        "id": "uluru",
        "name": "Uluru",
        "description": "Merveille naturelle infranchissable d'une case. Culture +2 et foi +2 pour les cases adjacentes. Attrait +4 pour les cases adjacentes, au lieu des +2 habituels.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Uluru.webp"
      },
      {
        "id": "vesuve",
        "name": "Vésuve",
        "description": "Merveille naturelle infranchissable d'une case, prenant la forme d'un volcan. Production +1 pour les cases adjacentes. En cas d'éruption, octroie un rendement élevé aux cases adjacentes, mais entraîne des pertes conséquentes de population. Il est toujours en activité.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Mount%20Vesuvius.webp"
      },
      {
        "id": "dome-de-vredefort",
        "name": "Dôme de Vredefort",
        "description": "Merveille naturelle de 2 cases. Nourriture +2, Production +1, Science +2 et Culture +1.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Vredefort%20Dome.webp"
      },
      {
        "id": "desert-blanc",
        "name": "Désert blanc",
        "description": "Merveille naturelle de 4 cases. Or +6, Science +2 et Culture +2.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Sahara%20el%20Beyda.webp"
      },
      {
        "id": "wulingyuan",
        "name": "Wulingyuan",
        "description": "Merveille naturelle infranchissable de 2 cases. Culture +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Wulingyuan.webp"
      },
      {
        "id": "yosemite",
        "name": "Yosemite",
        "description": "Merveille naturelle de 2 cases prenant la forme d'une montagne. Nourriture +1, Or +1 et Science +1 pour les cases adjacentes.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Yosemite.webp"
      },
      {
        "id": "zhangye-danxia",
        "name": "Zhangye Danxia",
        "description": "Merveille naturelle de 3 cases prenant la forme d'une montagne. Points de Général illustre et de Marchand illustre +1 par ère de la partie franchie (dont l'ère antique), si vous possédez au moins l'une de ces cases.",
        "image": "https://civ6bbg.github.io/images/natural_wonders/Zhangye%20Danxia.webp"
      }
    ]
  },
  {
    "key": "policies",
    "label": "Doctrines",
    "icon": "📜",
    "items": [
      {
        "id": "doctrines-militaires-discipline",
        "name": "Discipline",
        "description": "Puissance de combat +10 contre les barbares.\nDébloqué par Code juridique Dogme\nRendu obsolète par Colonialisme Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-topographie",
        "name": "Topographie",
        "description": "Expérience +100% pour les unités de reconnaissance.\nDébloqué par Code juridique Dogme\nRendu obsolète par Colonialisme Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-agoge",
        "name": "Agōgē",
        "description": "Production +50% pour les unités de combat rapproché, combat à distance, anti-cavalerie et reconnaissance, des ères antique et classique.\nDébloqué par Artisanat Dogme\nRendu obsolète par Féodalité Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-industries-maritimes",
        "name": "Industries maritimes",
        "description": "Production +100 % pour les unités navales des ères antique et classique.\nDébloqué par Commerce avec l'étranger Dogme\nRendu obsolète par Guerre froide, Exploration Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-man-uvre",
        "name": "Manœuvre",
        "description": "Production +50% pour les unités de cavalerie légère et cavalerie lourde des ères antique et classique.\nDébloqué par Tradition militaire Dogme\nRendu obsolète par Droit divin, Idéologie Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-conscription",
        "name": "Conscription",
        "description": "Coût d'entretien -1 pour les unités militaires.\nDébloqué par Main-d'œuvre nationale Dogme\nRendu obsolète par Mobilisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-limitanei",
        "name": "Limitanei",
        "description": "Loyauté +2 par tour pour les cités possédant une unité en garnison.\nDébloqué par Premier Empire Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-assaut",
        "name": "Assaut",
        "description": "Rendements +50% pour les pillages et assauts côtiers.\nDébloqué par Formation militaire Dogme\nRendu obsolète par Terre brûlée Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-veterance",
        "name": "Vétérance",
        "description": "Production +30% pour les Campements, les Ports et leurs bâtiments.\nDébloqué par Formation militaire Dogme\nRendu obsolète par Mobilisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-ordres-equestres",
        "name": "Ordres équestres",
        "description": "Chevaux +2 et Fer +2 par tour, ainsi que +1 par tour pour toutes les ressources de Chevaux et de Fer aménagées.\nDébloqué par Formation militaire Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-artisanat-obsidional",
        "name": "Artisanat obsidional",
        "description": "Production +50% pour les unités de siège des ères antique, classique et médiévale.\nDébloqué par Formation militaire Dogme\nRendu obsolète par Foires médiévales Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-hopital-de-campagne",
        "name": "Hôpital de campagne",
        "description": "Régénération +10 pour les unités militaires en dehors d'un territoire allié.\nDébloqué par Formation militaire Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-bastions",
        "name": "Bastions",
        "description": "Puissance de combat en défense +6 pour les quartiers défendables avec des murs.\nDébloqué par Stratégie défensive Dogme\nRendu obsolète par Génie civil Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-limes",
        "name": "Limes",
        "description": "Production +50% pour les bâtiments de défense.\nDébloqué par Stratégie défensive Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-contrat-de-vassalite",
        "name": "Contrat de vassalité",
        "description": "Production +50% pour les unités de combat rapproché, combat à distance, anti-cavalerie et reconnaissance, des ères de la Renaissance et antérieures.\nDébloqué par Féodalité Dogme\nRendu obsolète par Nationalisme Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-hommes-liges",
        "name": "Hommes-liges",
        "description": "Activités +1 pour les villes dans lesquelles une unité est en garnison.\nDébloqué par Fonction publique Dogme\nRendu obsolète par Mass-médias Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-armee-de-metier",
        "name": "Armée de métier",
        "description": "50% de réduction en Or pour l'amélioration d'unité.\nDébloqué par Mercenaires Dogme\nRendu obsolète par Urbanisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-chevalerie",
        "name": "Chevalerie",
        "description": "Production +50% pour les unités de cavalerie légère et cavalerie lourde des ère industrielle et antérieures.\nDébloqué par Droit divin Dogme\nRendu obsolète par Idéologie Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-suite",
        "name": "Suite",
        "description": "50% de réduction en ressources pour la Production et l'amélioration d'unité.\nDébloqué par Mercenaires Dogme\nRendu obsolète par Urbanisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-artisans",
        "name": "Artisans",
        "description": "Bonus de proximité +50% pour les Zones industrielles. Production +2 pour les villes possédant une Zone industrielle.\nDébloqué par Guildes Dogme\nRendu obsolète par Génie civil Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-obus-explosifs",
        "name": "Obus explosifs",
        "description": "Production +50% pour les unités de siège des ères de la Renaissance et antérieures.\nDébloqué par Foires médiévales Dogme\nRendu obsolète par Terre brûlée Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-presse",
        "name": "Presse",
        "description": "Production +100% pour les unités navales des ères industrielle et antérieures.\nDébloqué par Exploration Dogme\nRendu obsolète par Guerre froide Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-guerres-de-religion",
        "name": "Guerres de religion",
        "description": "Puissance de combat +4 pour les unités militaires affrontant une civilisation d'une autre religion.\nDébloqué par Église réformée Dogme\nRendu obsolète par Idéologie Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-logistique",
        "name": "Logistique",
        "description": "PM +1 si l'unité commence son tour en territoire allié.\nDébloqué par Mercantilisme Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-manuel-d-exercices",
        "name": "Manuel d'exercices",
        "description": "Salpêtre +2 et Charbon +2 par tour, ainsi que +1 par tour pour toutes les ressources de Salpêtre et de Charbon aménagées.\nDébloqué par Mercantilisme Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-conquete-coloniale",
        "name": "Conquête coloniale",
        "description": "Les victoires militaires génèrent une quantité d'Or égale à 25% de la Puissance de combat de l'unité vaincue (vitesse en ligne).\nDébloqué par Colonialisme Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-grande-armee",
        "name": "Grande Armée",
        "description": "Production +50% pour les unités de combat rapproché, combat à distance, anti-cavalerie et reconnaissance, des ères moderne et antérieures.\nDébloqué par Nationalisme Dogme\nRendu obsolète par Mobilisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-identite-nationale",
        "name": "Identité nationale",
        "description": "Malus de Puissance de combat pour les unités blessées réduit de 50%.\nDébloqué par Nationalisme Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-maitre-artisan",
        "name": "Maître artisan",
        "description": "Bonus de proximité +100% pour les Zones industrielles.\nDébloqué par Génie civil Dogme\nRendu obsolète par Idéologie Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-guerre-totale",
        "name": "Guerre totale",
        "description": "Rendements +50 % pour les pillages, les assauts côtiers et le pillage de routes commerciales.\nDébloqué par Terre brûlée Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-recherche-militaire",
        "name": "Recherche militaire",
        "description": "Science +1 pour les armureries, les chantiers navals et les remparts médiévaux. Science +2 pour les écoles militaires, les complexes portuaires, les remparts de la Renaissance et les hangars.\nDébloqué par Urbanisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-modernisation-forcee",
        "name": "Modernisation forcée",
        "description": "50% de réduction en ressources et en Or pour la Production et l'amélioration d'unité.\nDébloqué par Urbanisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-guerre-de-tranchees",
        "name": "Guerre de tranchées",
        "description": "Production +50% pour toutes les unités de siège.\nDébloqué par Terre brûlée Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-gestion-des-ressources",
        "name": "Gestion des ressources",
        "description": "Pétrole +2 et Aluminium +2 par tour, ainsi que +1 par tour pour toutes les ressources de Pétrole et d'Aluminium aménagées.\nDébloqué par Conservation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-propagande",
        "name": "Propagande",
        "description": "L'usure de la guerre progresse 25% moins vite.\nDébloqué par Mass-médias Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-levee-en-masse",
        "name": "Levée en masse",
        "description": "Coût d'entretien -2 pour les unités militaires\nDébloqué par Mobilisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-politique-militaire",
        "name": "Politique militaire",
        "description": "Production +50% pour les unités de combat rapproché, combat à distance, anti-cavalerie et reconnaissance, de toutes les ères.\nDébloqué par Mobilisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-centre-de-commandement-militaire",
        "name": "Centre de commandement militaire",
        "description": "Production +30% pour les Campements, les Ports, les Aérodromes et leurs bâtiments.\nDébloqué par Mobilisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-guerre-eclair",
        "name": "Guerre éclair",
        "description": "Production +50% pour les unités de cavalerie légère et cavalerie lourde.\nDébloqué par Idéologie Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-troisieme-alternative",
        "name": "Troisième alternative",
        "description": "Or +4 et Culture +2 pour chaque laboratoire de recherche, école militaire et centrale.\nDébloqué par Totalitarisme Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-infrastructure-deployable",
        "name": "Infrastructure déployable",
        "description": "Production +50% pour les unités de soutien des ères moderne, atomique et de l'information.\nDébloqué par Idéologie Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-kolkhoze",
        "name": "Kolkhoze",
        "description": "Les Zones industrielles et les Campus fournissent +2 Nourriture et +2 Production.\nDébloqué par Lutte des classes Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-course-a-l-armement",
        "name": "Course à l'armement",
        "description": "Production +25% pour les bombes A et H.\nDébloqué par Programme nucléaire Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-eaux-internationales",
        "name": "Eaux internationales",
        "description": "Production +100% pour les unités navales de toutes les ères, sauf le porte-avions.\nDébloqué par Guerre froide Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-tir-de-replique",
        "name": "Tir de réplique",
        "description": "Coût d'entretien -50% pour les armes nucléaires.\nDébloqué par Guerre froide Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-integrated-space-cell",
        "name": "Integrated Space Cell",
        "description": "Production +15% pour les projets de la course à l'espace dans les villes possédant une école militaire ou un complexe portuaire.\nDébloqué par Course à l'espace Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-analyse-retrospective",
        "name": "Analyse rétrospective",
        "description": "Expérience de combat +25% pour toutes les unités.\nDébloqué par Déploiement rapide Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-militaires-strategic-air-force",
        "name": "Strategic Air Force",
        "description": "Production +50% pour les unités aériennes et les porte-avions.\nDébloqué par Mondialisation Dogme",
        "section": "Doctrines militaires",
        "image": "https://civ6bbg.github.io/images/policies/MILITARY_CARD.webp"
      },
      {
        "id": "doctrines-economiques-culte-imperial",
        "name": "Culte impérial",
        "description": "Or +1 et Foi +1 dans la Capitale.\nDébloqué par Code juridique Dogme\nRendu obsolète par Théologie Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-urbanisme",
        "name": "Urbanisme",
        "description": "Production +1 dans toutes les villes.\nDébloqué par Code juridique Dogme\nRendu obsolète par Lumières Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-ilkum",
        "name": "Ilkum",
        "description": "Production +30% pour les Bâtisseurs.\nDébloqué par Artisanat Dogme\nRendu obsolète par Féodalité Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-caravanserails",
        "name": "Caravansérails",
        "description": "Or +2 pour les routes commerciales.\nDébloqué par Commerce avec l'étranger Dogme\nRendu obsolète par Mercantilisme Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-corvee",
        "name": "Corvée",
        "description": "Production +15% pour les merveilles des ères antique et classique.\nDébloqué par Main-d'œuvre nationale Dogme\nRendu obsolète par Droit divin, Génie civil Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-geometres-experts",
        "name": "Géomètres Experts",
        "description": "Coût d'achat de cases réduit de 20%.\nDébloqué par Premier Empire Dogme\nRendu obsolète par Terre brûlée Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-colonisation",
        "name": "Colonisation",
        "description": "Production +50% pour les Colons.\nDébloqué par Premier Empire Dogme\nRendu obsolète par Terre brûlée Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-insul",
        "name": "Insulæ",
        "description": "Habitations +1 dans toutes les villes qui possèdent au moins 1 quartier spécialisé.\nDébloqué par Loisirs Dogme\nRendu obsolète par Foires médiévales Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-ecrits-saints",
        "name": "Écrits Saints",
        "description": "Bonus de proximité +100% pour les Lieux saints.\nDébloqué par Théologie Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-philosophie-naturelle",
        "name": "Philosophie naturelle",
        "description": "Bonus de proximité +50% pour les Campus. Science +1 pour les villes possédant un Campus.\nDébloqué par Histoire écrite Dogme\nRendu obsolète par Génie civil Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-infrastructure-navale",
        "name": "Infrastructure navale",
        "description": "Bonus de proximité +50% pour les Ports. Or +2 pour les villes possédant un Port.\nDébloqué par Tradition navale Dogme\nRendu obsolète par Génie civil Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-servage",
        "name": "Servage",
        "description": "Les Bâtisseurs nouvellement formés ont 2 charges supplémentaires.\nDébloqué par Féodalité Dogme\nRendu obsolète par Génie civil Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-prestige-civil",
        "name": "Prestige civil",
        "description": "Activités +1 et Habitations +2 pour les villes avec un gouverneur établi possédant au moins deux promotions.\nDébloqué par Fonction publique Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-confederation-commerciale",
        "name": "Confédération commerciale",
        "description": "Science +1 et Culture +1 pour les routes commerciales internationales.\nDébloqué par Mercenaires Dogme\nRendu obsolète par Capitalisme Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-architecture-gothique",
        "name": "Architecture gothique",
        "description": "Production +15% pour les merveilles des ères antique, classique, médiévale et de la Renaissance.\nDébloqué par Droit divin Dogme\nRendu obsolète par Génie civil Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-esthetique",
        "name": "Esthétique",
        "description": "Bonus de proximité +100% pour les Places du théâtre.\nDébloqué par Foires médiévales Dogme\nRendu obsolète par Sport professionnel Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-medina",
        "name": "Médina",
        "description": "Habitations +1 dans toutes les villes pour chaque quartier spécialisé.\nDébloqué par Foires médiévales Dogme\nRendu obsolète par Suffrage Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-charte-de-peuplement",
        "name": "Charte de peuplement",
        "description": "Bonus de proximité +50% pour les Plateformes commerciales. Or +2 pour les villes possédant une Plateforme commerciale.\nDébloqué par Guildes Dogme\nRendu obsolète par Génie civil Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-ordres-religieux",
        "name": "Ordres religieux",
        "description": "Puissance religieuse +5 pour toutes les unités religieuses en combat théologique.\nDébloqué par Église réformée Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-simultaneum",
        "name": "Simultaneum",
        "description": "Foi des bâtiments des Lieux saints : +50% si la ville compte au moins 13 Citoyens, +50% si le quartier a un bonus de proximité d'au moins +3.\nDébloqué par Église réformée Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-commerce-triangulaire",
        "name": "Commerce triangulaire",
        "description": "Or +4 et Foi +1 pour les routes commerciales.\nDébloqué par Mercantilisme Dogme\nRendu obsolète par Mondialisation Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-rationalisme",
        "name": "Rationalisme",
        "description": "Science des bâtiments des Campus : +50% si la ville compte au moins 13 Citoyens, +50% si le quartier a un bonus de proximité d'au moins +3.\nDébloqué par Lumières Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-libre-marche",
        "name": "Libre marché",
        "description": "Or des bâtiments des Plateformes commerciales : +50% si la ville compte au moins 13 Citoyens, +50% si le quartier a un bonus de proximité d'au moins +4.\nDébloqué par Lumières Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-liberalisme",
        "name": "Libéralisme",
        "description": "Activités +1 pour les villes possédant au moins 2  quartiers spécialisés.\nDébloqué par Lumières Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-grand-opera",
        "name": "Grand opéra",
        "description": "Culture des bâtiments des Places du théâtre : +50% si la ville compte au moins 13 Citoyens, +50% si le quartier a un bonus de proximité d'au moins +3.\nDébloqué par Opéra et ballet Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-travaux-publics",
        "name": "Travaux publics",
        "description": "Production +30% pour les Bâtisseurs. Les Bâtisseurs nouvellement formés ont 2 charges supplémentaires.\nDébloqué par Génie civil Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-gratte-ciel",
        "name": "Gratte-ciel",
        "description": "Production +15% pour toutes les merveilles.\nDébloqué par Génie civil Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-union-economique",
        "name": "Union économique",
        "description": "Bonus de proximité +100% pour les Plateformes commerciales et les Ports.\nDébloqué par Génie civil Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-recherche-empirique",
        "name": "Recherche empirique",
        "description": "Bonus de proximité +100% pour les Campus.\nDébloqué par Génie civil Dogme\nRendu obsolète par Idéologie Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-transports-en-commun",
        "name": "Transports en commun",
        "description": "Nourriture +3 et Production +1 pour les Quartiers résidentiels d'un Attrait charmant (+4 et +2 si le quartier est époustouflant). Or +1 pour tous les Quartiers résidentiels.\nDébloqué par Urbanisation Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-expropriation",
        "name": "Expropriation",
        "description": "Production +50% pour les Colons. Coût d'achat de cases réduit de 20%.\nDébloqué par Terre brûlée Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-economie-de-marche",
        "name": "Économie de marché",
        "description": "Or +1, Science +2 et Culture +2 par ressource de luxe ou stratégique aménagée à destination d'une route commerciale internationale.\nDébloqué par Capitalisme Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-plan-quinquennal",
        "name": "Plan quinquennal",
        "description": "Bonus de proximité +100% pour les Campus et les Zones industrielles.\nDébloqué par Idéologie Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-collectivisation",
        "name": "Collectivisation",
        "description": "Nourriture +4 et Production +4 pour vos routes commerciales intérieures. Or +4 pour toutes les routes commerciales.\nDébloqué par Idéologie Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-tourisme-patrimonial",
        "name": "Tourisme patrimonial",
        "description": "Tourisme +100% pour les chefs-d'œuvre artistiques et les artefacts.\nDébloqué par Patrimoine culturel Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-journaux-sportifs",
        "name": "Journaux sportifs",
        "description": "Bonus de proximité +100% pour les Places du théâtre, et Activités +1 pour toutes les villes.\nDébloqué par Sport professionnel Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-diffusions-satellites",
        "name": "Diffusions satellites",
        "description": "Tourisme +200% pour les chefs-d'œuvre musicaux.\nDébloqué par Course à l'espace Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-commerce-electronique",
        "name": "Commerce électronique",
        "description": "Production +2 et Or +5 pour les routes commerciales.\nDébloqué par Mondialisation Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-economiques-communautes-en-ligne",
        "name": "Communautés en ligne",
        "description": "Tourisme +50 % envers les civilisations auxquelles vous envoyez une route commerciale.\nDébloqué par Réseaux sociaux Dogme",
        "section": "Doctrines économiques",
        "image": "https://civ6bbg.github.io/images/policies/ECONOMIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-dirigeant-charismatique",
        "name": "Dirigeant charismatique",
        "description": "Points d'influence +2 par tour.\nDébloqué par Philosophie politique Dogme\nRendu obsolète par Idéologie Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-ligue-diplomatique",
        "name": "Ligue diplomatique",
        "description": "Le premier émissaire que vous envoyez dans une Cité-état compte pour deux.\nDébloqué par Philosophie politique Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-pretoire",
        "name": "Prétoire",
        "description": "Production +20% pour les villes annexées. Loyauté +4 par tour dans les villes annexées où est établi un gouverneur.\nDébloqué par Histoire écrite Dogme\nRendu obsolète par Réseaux sociaux Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-etat-souverain",
        "name": "État souverain",
        "description": "Libre passage avec toutes les Cités-états.\nDébloqué par Fonction publique Dogme\nRendu obsolète par Idéologie Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-confederation-marchande",
        "name": "Confédération marchande",
        "description": "Or +1 pour chaque émissaire dans une Cité-état.\nDébloqué par Foires médiévales Dogme\nRendu obsolète par Idéologie Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-bureaux-des-colonies",
        "name": "Bureaux des colonies",
        "description": "Croissance +15%, Production +10% et Loyauté +3 par tour pour les villes à 8 cases ou plus de votre Capitale.\nDébloqué par Exploration Dogme\nRendu obsolète par Colonialisme Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-machiavelisme",
        "name": "Machiavélisme",
        "description": "Production +50% pour les espions. Opérations d'espionnage 25% plus rapides.\nDébloqué par Service diplomatique Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-wisselbanken",
        "name": "Wisselbanken",
        "description": "Nourriture +2 et Production +2 pour les routes commerciales avec une ville alliée. Cette ville reçoit aussi ces rendements. Les points d'alliance avec tous les alliés augmentent de 0.25 point en plus par tour.\nDébloqué par Service diplomatique Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-taxes-coloniales",
        "name": "Taxes coloniales",
        "description": "Croissance +15%, Production +10%, Or +25% et loyauté +3 pour les villes à 8 cases ou plus de votre Capitale.\nDébloqué par Colonialisme Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-raj",
        "name": "Raj",
        "description": "Nourriture +1, Production +1, Or +2, Science +2, Culture +2 et Foi +2 pour les routes commerciales avec des Cités-états.\nDébloqué par Colonialisme Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-politique-de-la-canonniere",
        "name": "Politique de la canonnière",
        "description": "Points d'influence +4 par tour. Or +1 pour chaque émissaire dans une Cité-état.\nDébloqué par Idéologie Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-pacte-de-prosperite",
        "name": "Pacte de prospérité",
        "description": "Points d'alliance +5 avec tous les alliés.\nDébloqué par Suffrage Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-espionnage-nucleaire",
        "name": "Espionnage nucléaire",
        "description": "Les espions qui volent un Eurêka sans se faire repérer gagnent un autre Eurêka.\nDébloqué par Programme nucléaire Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-cryptographie",
        "name": "Cryptographie",
        "description": "Niveau de l'espion ennemi réduit de 2 sur vos terres. Celui de votre espion augmente de 1 pour les opérations offensives.\nDébloqué par Guerre froide Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-endiguement",
        "name": "Endiguement",
        "description": "Chaque émissaire envoyé dans une Cité-état compte pour deux si son suzerain a un gouvernement différent du vôtre.\nDébloqué par Guerre froide Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-censure-musicale",
        "name": "Censure musicale",
        "description": "Les groupes de rock des autres joueurs n'ont pas le droit de pénétrer sur votre territoire. Activités -1 dans toutes vos villes possédant au moins 10  Citoyens.\nDébloqué par Course à l'espace Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-agence-spatiale-internationale",
        "name": "Agence spatiale internationale",
        "description": "Science +5% pour chaque Cité-état vassale.\nDébloqué par Mondialisation Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-action-collective",
        "name": "Action collective",
        "description": "Culture +5% pour chaque Cité-état vassale.\nDébloqué par Réseaux sociaux Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-diplomatiques-bureau-des-communications",
        "name": "Bureau des communications",
        "description": "Loyauté +2 par tour par gouverneur et par promotion qu'il possède dans sa ville.\nDébloqué par Réseaux sociaux Dogme",
        "section": "Doctrines diplomatiques",
        "image": "https://civ6bbg.github.io/images/policies/DIPLOMATIC_CARD.webp"
      },
      {
        "id": "doctrines-jokers-heritage-autocratique",
        "name": "Héritage autocratique",
        "description": "Rendements +1 dans le palais, la Place de la gouvernance, le Quartier diplomatique et tous leurs bâtiments.\nNourriture +1 et Production +1 pour les villes possédant un monument et un quartier spécialisé.",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-heritage-oligarchique",
        "name": "Héritage oligarchique",
        "description": "Puissance de combat +4 pour les unités terrestres de combat rapproché et d'anti-cavalerie, ainsi que les unités navales de combat rapproché.",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-heritage-republicain",
        "name": "Héritage républicain",
        "description": "Habitations +1 et Activités +1 dans les villes dotées d'un quartier.",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-heritage-monarchique",
        "name": "Héritage monarchique",
        "description": "Habitations +1 pour chaque niveau de remparts.\nCulture +2 pour les remparts de la Renaissance.",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-heritage-theocratique",
        "name": "Héritage théocratique",
        "description": "Puissance +5 en combat théologique.\nFoi +0.5 par Citoyen dans les villes possédant un gouverneur.",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-heritage-mercantile",
        "name": "Héritage mercantile",
        "description": "Or +10% dans les villes possédant un gouverneur.\nPM +1 pour les unités navales et les unités embarquées.",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-heritage-fasciste",
        "name": "Héritage fasciste",
        "description": "Puissance de combat +5 pour les unités en dehors de leur territoire.\nUsure de la guerre -15%.",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-heritage-communiste",
        "name": "Héritage communiste",
        "description": "Production +1 par Citoyen dans une ville possédant un gouverneur.",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-heritage-democratique",
        "name": "Héritage démocratique",
        "description": "Nourriture +5, Production +2 et Or +4 pour les routes commerciales avec une ville alliée. Cette ville reçoit aussi ces rendements.\nLes points d'alliance avec tous les alliés augmentent de 0.25 point en plus par tour.",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-stratege",
        "name": "Stratège",
        "description": "Points de Général illustre +2 par tour.\nDébloqué par Tradition militaire Dogme\nRendu obsolète par Terre brûlée Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-inspiration",
        "name": "Inspiration",
        "description": "Points de Savant illustre +2 par tour.\nDébloqué par Mysticisme Dogme\nRendu obsolète par Programme nucléaire Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-revelation",
        "name": "Révélation",
        "description": "Points de Prophète illustre +2 par tour.\nDébloqué par Mysticisme Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-tradition-litteraire",
        "name": "Tradition littéraire",
        "description": "Points d'Écrivain illustre +2 par tour.\nDébloqué par Dramaturgie et poésie Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-navigation",
        "name": "Navigation",
        "description": "Points d'Amiral illustre +2 par tour.\nDébloqué par Tradition navale Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-marchands-itinerants",
        "name": "Marchands itinérants",
        "description": "Points de Marchand illustre +2 par tour.\nDébloqué par Guildes Dogme\nRendu obsolète par Capitalisme Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-invention",
        "name": "Invention",
        "description": "Points d' ingénieur illustre +4 par tour, et +2 supplémentaires pour chaque atelier.\nDébloqué par Humanisme Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-fresques",
        "name": "Fresques",
        "description": "Points d' artiste illustre +2 par tour, et +2 supplémentaires pour chaque musée d'art.\nDébloqué par Humanisme Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-symphonies",
        "name": "Symphonies",
        "description": "Points de musicien illustre +4 par tour, et +4 supplémentaires pour chaque centre de diffusion.\nDébloqué par Opéra et ballet Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-organisation-militaire",
        "name": "Organisation militaire",
        "description": "Points de général illustre +2 par tour pour chaque armurerie, et +4 supplémentaires pour chaque école militaire. PM +2 pour les généraux illustres.\nDébloqué par Terre brûlée Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-laissez-faire",
        "name": "Laissez-faire",
        "description": "Points de marchand illustre +2 par tour pour chaque banque, et +4 supplémentaires pour chaque bourse. Points d' amiral illustre +2 par tour pour chaque chantier naval, et +4 supplémentaires pour chaque complexe portuaire.\nDébloqué par Capitalisme Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-new-deal",
        "name": "New Deal",
        "description": "Activités +2 et Habitations +4 pour les villes possédant au moins 3 quartiers spécialisés.\nDébloqué par Suffrage Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-loi-martiale",
        "name": "Loi martiale",
        "description": "L'usure de la guerre progresse 50% moins vite. Loyauté +10 par tour pour les villes possédant une unité en garnison.\nDébloqué par Totalitarisme Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-avant-garde-scientifique",
        "name": "Avant-garde scientifique",
        "description": "Production +10% et Science +10% dans les villes avec un gouverneur.\nDébloqué par Lutte des classes Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-fondations-scientifiques",
        "name": "Fondations scientifiques",
        "description": "Points de Savant illustre +2 par tour pour chaque université et +4 par tour pour chaque laboratoire de recherches. Points d'Ingénieur illustre +2 par tour pour chaque usine et +4 par tour pour chaque centrale électrique.\nDébloqué par Programme nucléaire Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-contractants-en-aerospatiale",
        "name": "Contractants en aérospatiale",
        "description": "Aluminium +3 par tour et électricité +3 pour les villes dotées d'un spatioport.\nDébloqué par Impératif d'exode Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-tourisme-spatial",
        "name": "Tourisme spatial",
        "description": "Le tourisme des autres joueurs est réduit de 20 % pour votre civilisation.\nDébloqué par Impératif d'exode Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-hallyu",
        "name": "Hallyu",
        "description": "Votre groupe de rock peut choisir n'importe quelle promotion.\nDébloqué par Hégémonie culturelle Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-acteurs-non-etatiques",
        "name": "Acteurs non-étatiques",
        "description": "Vos espions peuvent choisir n'importe quelle promotion.\nDébloqué par Hégémonie culturelle Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-logistique-de-combat-integree",
        "name": "Logistique de combat intégrée",
        "description": "PM +1 si l'unité commence son tour en territoire ennemi. Production +50% pour les robots géants de la mort.\nDébloqué par Guerre de l'information Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-incitation-a-la-revolte",
        "name": "Incitation à la révolte",
        "description": "Lorsque vous réduisez les points de victoire diplomatique d'un joueur au Congrès mondial, vous récupérez 50% des faveurs diplomatiques utilisées. Faveurs diplomatiques +1 par tour.\nDébloqué par Guerre de l'information Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-capital-diplomatique",
        "name": "Capital diplomatique",
        "description": "Faveurs diplomatiques +4 par tour.\nDébloqué par Smart power Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-jokers-coalition-mondiale",
        "name": "Coalition mondiale",
        "description": "Puissance de combat +7 pour les unités en territoire allié.\nDébloqué par Smart power Dogme",
        "section": "Doctrines jokers",
        "image": "https://civ6bbg.github.io/images/policies/WILDCARD_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-monachisme",
        "name": "Monachisme",
        "description": "Science +75% dans les villes possédant un Lieu saint.\nMAIS : Culture -25% dans toutes les villes.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-baroud-d-honneur",
        "name": "Baroud d'honneur",
        "description": "Puissance de combat en attaque +5 pour toutes les unités de mêlée (combat rapproché (terrestre et navale), anti-cavalerie, cavalerie légère, cavalerie lourde).\nMAIS : pas de soins hors de votre territoire.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-inquisition",
        "name": "Inquisition",
        "description": "Les inquisitions ne coûtent qu'une charge d'Apôtre. Puissance religieuse +15 pour toutes les unités religieuses en terrain allié.\nMAIS : Science -25% dans toutes les villes.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-isolationnisme",
        "name": "Isolationnisme",
        "description": "Nourriture +2 et Production +2 pour les routes internes.\nMAIS : impossible de former/acheter des Colons ni de fonder des villes.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-lettres-de-marque",
        "name": "Lettres de marque",
        "description": "Production +100% et PM +2 pour les unités navales d'assaut en mer. Rendements +100% pour le pillage de routes commerciales.\nMAIS : rendements -50% pour les routes commerciales.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-barons-voleurs",
        "name": "Barons voleurs",
        "description": "Or +50% dans les villes dotées d'une bourse. Production +25% dans les villes dotées d'une usine.\nMAIS : Activités -2 dans toutes les villes.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-forces-d-elite",
        "name": "Forces d'élite",
        "description": "Expérience au combat +100% pour toutes les unités.\nMAIS : coût d'entretien +2 pour les unités militaires et les espions.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-collectivisme",
        "name": "Collectivisme",
        "description": "Nourriture +1 pour les fermes. Habitations +2 pour toutes les villes. Bonus de proximité +100% pour les Zones industrielles.\nMAIS : génération de points de Personnages illustres -50%.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-etat-hors-la-loi",
        "name": "État hors-la-loi",
        "description": "Production +50% pour les projets de programme nucléaire et les armes atomiques\nMAIS : Point d'influence -100%.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-flower-power",
        "name": "Flower power",
        "description": "Tourisme généré par les concerts +100% envers les civilisations qui ne sont pas en guerre.\nMAIS : vous perdez 100% de votre Production et le coût d'achat sera +100% pour les unités autres que les groupes de rock.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-cyberguerre",
        "name": "Cyberguerre",
        "description": "Puissance de combat +10 contre les unités des ères de l'information et future.\nMAIS : les griefs contre vous ne diminuent pas.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-main-d-uvre-automatisee",
        "name": "Main-d'œuvre automatisée",
        "description": "Production +20% pour les projets de vos villes.\nMAIS : Activités -1 et loyauté -5 par tour pour toutes les villes.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      },
      {
        "id": "doctrines-des-ages-sombres-campagne-de-desinformation",
        "name": "Campagne de désinformation",
        "description": "Faveurs diplomatiques +3 par tour pour chaque centre de diffusion.\nMAIS : Science -10% et Culture -10% dans toutes les villes.",
        "section": "Doctrines des âges sombres",
        "image": "https://civ6bbg.github.io/images/policies/DARKAGE_CARD.webp"
      }
    ]
  },
  {
    "key": "religion",
    "label": "Religion",
    "icon": "🛐",
    "items": [
      {
        "id": "pantheon-danse-de-l-aurore",
        "name": "Danse de l'aurore",
        "description": "Foi +1 pour les Lieux saints pour chaque case de toundra plate adjacente.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Dance%20of%20the%20Aurora.webp"
      },
      {
        "id": "pantheon-traditions-du-desert",
        "name": "Traditions du désert",
        "description": "Foi +1 pour les lieux saints adjacents à des cases de désert.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Desert%20Folklore.webp"
      },
      {
        "id": "pantheon-chemin-sacre",
        "name": "Chemin sacré",
        "description": "Foi +1 pour les Lieux saints pour chaque case de forêt, de forêt tropicale et de marais adjacente.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Sacred%20Path.webp"
      },
      {
        "id": "pantheon-deesse-des-rivieres",
        "name": "Déesse des rivières",
        "description": "Bonus de proximité majeur pour les Lieux saints adjacents à une rivière. Activités +1 dans les villes possédant un Lieu saint adjacent à une rivière.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/River%20Goddess.webp"
      },
      {
        "id": "pantheon-monument-aux-dieux",
        "name": "Monument aux dieux",
        "description": "Production +20% pour toutes les merveilles.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Monument%20to%20the%20Gods.webp"
      },
      {
        "id": "pantheon-etincelle-divine",
        "name": "Étincelle divine",
        "description": "Points d'Ingénieur illustre +1 pour les Zones industrielles avec un atelier, de Prophète illustre +1 pour les Lieux saints, de Scientifique illustre +1 pour les Campus et d'Écrivain illustre +1 pour les amphithéâtres.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Divine%20Spark.webp"
      },
      {
        "id": "pantheon-dame-des-roseaux-et-des-marais",
        "name": "Dame des roseaux et des marais",
        "description": "Production +1 pour les cases de plaines inondables travaillées ou sous un Centre-ville, et les cases de marais et d'oasis.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Lady%20of%20the%20Reeds%20and%20Marshes.webp"
      },
      {
        "id": "pantheon-dieu-de-la-mer",
        "name": "Dieu de la mer",
        "description": "Production +1 pour les bateaux de pêche.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/God%20of%20the%20Sea.webp"
      },
      {
        "id": "pantheon-dieu-du-ciel-ouvert",
        "name": "Dieu du ciel ouvert",
        "description": "Culture +1 pour les pâturages.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/God%20of%20the%20Open%20Sky.webp"
      },
      {
        "id": "pantheon-deesse-de-la-chasse",
        "name": "Déesse de la chasse",
        "description": "Nourriture +1 et Or +2 pour les camps.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Goddess%20of%20the%20Hunt.webp"
      },
      {
        "id": "pantheon-cercles-de-pierres",
        "name": "Cercles de pierres",
        "description": "Production +1 et Foi +1 pour les carrières.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Stone%20Circles.webp"
      },
      {
        "id": "pantheon-idoles-religieuses",
        "name": "Idoles religieuses",
        "description": "Or +3 et Foi +3 pour les mines construites sur des ressources de luxe et bonus.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Religious%20Idols.webp"
      },
      {
        "id": "pantheon-dieu-des-artisans",
        "name": "Dieu des artisans",
        "description": "Production +1 et Foi +1 pour les ressources stratégiques aménagées. Les ressources stratégiques aménagées fournissent une unité supplémentaire par tour.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/God%20of%20Craftsmen.webp"
      },
      {
        "id": "pantheon-deesse-des-festivals",
        "name": "Déesse des festivals",
        "description": "Culture +1 pour les plantations.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Goddess%20of%20Festivals.webp"
      },
      {
        "id": "pantheon-dieu-de-la-forge",
        "name": "Dieu de la forge",
        "description": "Production +30% pour les unités militaires antiques et de l'ère classique.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/God%20of%20the%20Forge.webp"
      },
      {
        "id": "pantheon-rites-initiatiques",
        "name": "Rites initiatiques",
        "description": "Produire une unité militaire octroie 25% de son coût en Production en Foi.\nUn Guerrier apparaît dans votre Capitale.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Initiation%20Rites.webp"
      },
      {
        "id": "pantheon-deesse-de-l-ecume",
        "name": "Déesse de l'écume",
        "description": "Culture +1 pour les bateaux de pêche.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Goddess%20of%20Tides.webp"
      },
      {
        "id": "pantheon-dieu-de-la-guerre-et-du-pillage",
        "name": "Dieu de la guerre et du pillage",
        "description": "+1 point de Général illustre pour les casernes, les écuries et les écoles militaire, d'Amiral illustre pour les phares et les complexes portuaires et de Marchand illustre pour les marchés et les bourses.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/God%20of%20War%20and%20Plunder.webp"
      },
      {
        "id": "pantheon-rites-de-fertilite",
        "name": "Rites de fertilité",
        "description": "Nourriture +1 pour les ressources de Bétail, de Riz, de Blé et de Maïs. Habitations +2 pour les villes sans Habitations supplémentaires dues à l'eau douce.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Fertility%20Rites.webp"
      },
      {
        "id": "pantheon-colonies-religieuses",
        "name": "Colonies religieuses",
        "description": "Production +20% pour les Colons.\nVos villes reçoivent 2 cases gratuites quand elles sont fondées et voient la vitesse d'expansion de leurs frontières augmenter de 50%.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Religious%20Settlements.webp"
      },
      {
        "id": "pantheon-deesse-de-la-ville",
        "name": "Déesse de la ville",
        "description": "Production +40% pour la construction de quartiers dans les villes ne possédant pas de quartier spécialisé.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/City%20Patron%20Goddess.webp"
      },
      {
        "id": "pantheon-deesse-de-la-terre",
        "name": "Déesse de la terre",
        "description": "Foi +1 pour les cases d'Attrait charmant ou supérieur (sauf les Centres-villes).",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Earth%20Goddess.webp"
      },
      {
        "id": "pantheon-deesse-du-feu",
        "name": "Déesse du Feu",
        "description": "Foi +3 pour les fissures géothermiques. Foi +2 pour les cases adjacentes à un volcan. Foi +1 pour les cases de sols volcaniques.",
        "section": "Panthéon",
        "image": "https://civ6bbg.github.io/images/religion/Fire%20Goddess.webp"
      },
      {
        "id": "fideles-inspiration-divine",
        "name": "Inspiration divine",
        "description": "Foi +6 pour toutes les merveilles mondiales.",
        "section": "Fidèles"
      },
      {
        "id": "fideles-nourrir-le-monde",
        "name": "Nourrir le monde",
        "description": "Les autels et les temples octroient respectivement +2 et +4 Nourriture, ainsi que +1 Habitations.",
        "section": "Fidèles"
      },
      {
        "id": "fideles-education-jesuite",
        "name": "Éducation jésuite",
        "description": "Permet d'acheter des bâtiments du Campus et de la Place du théâtre avec de la Foi. Réduit le coût d'achat des bâtiments du Campus et de la Place de théâtre de 15%.",
        "section": "Fidèles"
      },
      {
        "id": "fideles-reliquaires",
        "name": "Reliquaires",
        "description": "Triple la Foi et le Tourisme générés par les reliques.",
        "section": "Fidèles"
      },
      {
        "id": "fideles-communaute-religieuse",
        "name": "Communauté religieuse",
        "description": "Les autels et les temples octroient respectivement +5 et +10 Or.",
        "section": "Fidèles"
      },
      {
        "id": "fideles-valeur-travail",
        "name": "Valeur travail",
        "description": "Les autels et les temples octroient respectivement +2 et +4 Production.",
        "section": "Fidèles"
      },
      {
        "id": "fideles-meditation-zen",
        "name": "Méditation zen",
        "description": "Activités +1 dans les villes possédant un quartier spécialisé.",
        "section": "Fidèles"
      },
      {
        "id": "fideles-chorale",
        "name": "Chorale",
        "description": "Les autels et les temples octroient respectivement +2 et +4 Culture.",
        "section": "Fidèles"
      },
      {
        "id": "fideles-moines-guerriers",
        "name": "Moines-guerriers",
        "description": "Permet de dépenser de la Foi pour former un Moine-guerrier, une unité de combat terrestre à l'arbre de promotions spécifique. La ville doit posséder un Lieu saint doté d'un autel.\nLa construction d'un Lieu saint déclenche une bombe culturelle qui capture les cases adjacentes.",
        "section": "Fidèles"
      },
      {
        "id": "fondateur-laicat",
        "name": "Laïcat",
        "description": "Les Places du théâtre et les Lieux saints d'une ville convertie à cette religion fournissent respectivement +2 Culture ou +2 Foi.",
        "section": "Fondateur"
      },
      {
        "id": "fondateur-primaute-pontificale",
        "name": "Primauté pontificale",
        "description": "Lorsque vous envoyez un émissaire dans une Cité-état, celle-ci subit 200 points de pression religieuse.",
        "section": "Fondateur"
      },
      {
        "id": "fondateur-pelerinage",
        "name": "Pèlerinage",
        "description": "Foi +2 pour chaque ville convertie à cette religion (passe à +3 à Théologie).",
        "section": "Fondateur"
      },
      {
        "id": "fondateur-intendance",
        "name": "Intendance",
        "description": "Les Plateformes commerciales et les Campus d'une ville convertie à cette religion fournissent respectivement +2 Or ou +2 Science.",
        "section": "Fondateur"
      },
      {
        "id": "fondateur-dime",
        "name": "Dîme",
        "description": "Or +2 pour chaque ville convertie à cette religion (passe à +3 à Théologie).",
        "section": "Fondateur"
      },
      {
        "id": "fondateur-eglise-mondiale",
        "name": "Église mondiale",
        "description": "Culture +1 tous les 3 fidèles de cette religion dans d'autres civilisations.",
        "section": "Fondateur"
      },
      {
        "id": "fondateur-dialogue-interculturel",
        "name": "Dialogue interculturel",
        "description": "Science +1 tous les 3 fidèles de cette religion dans d'autres civilisations.",
        "section": "Fondateur"
      },
      {
        "id": "fondateur-unite-religieuse",
        "name": "Unité religieuse",
        "description": "Émissaires +1 dans les Cités-états qui adoptent cette religion, en plus d'un éventuel émissaire obtenu si la quête de Cité-état est la conversion à la religion.",
        "section": "Fondateur"
      },
      {
        "id": "fondateur-lieux-sacres",
        "name": "Lieux sacrés",
        "description": "Or +2, Science +2, Culture +2 et Foi +2 pour chaque ville convertie à cette religion et dotée d'une merveille mondiale.",
        "section": "Fondateur"
      },
      {
        "id": "propagateur-defenseur-de-la-foi",
        "name": "Défenseur de la Foi",
        "description": "Puissance de combat en défense +3 pour les unités militaires sur le territoire des villes alliées converties à cette religion.",
        "section": "Propagateur"
      },
      {
        "id": "propagateur-ordre-sacre",
        "name": "Ordre sacré",
        "description": "Le prix des Missionnaires et des Apôtres baisse de 25%.",
        "section": "Propagateur"
      },
      {
        "id": "propagateur-predicateurs-itinerants",
        "name": "Prédicateurs itinérants",
        "description": "La religion se propage aux villes 30% plus éloignées.",
        "section": "Propagateur"
      },
      {
        "id": "propagateur-croisade",
        "name": "Croisade",
        "description": "Puissance de combat +5 pour les unités militaires sur le territoire des villes étrangères converties à cette religion.",
        "section": "Propagateur"
      },
      {
        "id": "propagateur-zele-des-missionnaires",
        "name": "Zèle des missionnaires",
        "description": "Les unités religieuses ignorent les pénalités de mouvement du terrain.",
        "section": "Propagateur"
      },
      {
        "id": "propagateur-isolation-monastique",
        "name": "Isolation monastique",
        "description": "La pression de votre religion ne baisse jamais en cas de défaite théologique.",
        "section": "Propagateur"
      },
      {
        "id": "propagateur-texte-sacre",
        "name": "Texte sacré",
        "description": "Propagation de la religion due à la pression d'une ville adjacente +25%. Monte à 50% à l'[COLOR_FLOAT_SCIENCE]Imprimerie[ENDCOLOR].",
        "section": "Propagateur"
      },
      {
        "id": "propagateur-colonisation-religieuse",
        "name": "Colonisation religieuse",
        "description": "Si cette religion est majoritaire dans une civilisation, les villes qu'elle fonde l'adoptent automatiquement.",
        "section": "Propagateur"
      },
      {
        "id": "propagateur-eau-benite",
        "name": "Eau bénite",
        "description": "Guérison +20 pour toutes vos unités se trouvant dans le territoire d'une ville où votre religion est majoritaire.",
        "section": "Propagateur"
      },
      {
        "id": "culte-cathedrale",
        "name": "Cathédrale",
        "description": "Permet la construction de cathédrales ( Foi +3 et 1 emplacement pour chef-d'œuvre de tout type).",
        "section": "Culte"
      },
      {
        "id": "culte-gurdwara",
        "name": "Gurdwārā",
        "description": "Permet la construction de gurdwārās ( Foi +3, Nourriture +3 et Habitations +1).",
        "section": "Culte"
      },
      {
        "id": "culte-maison-de-rencontre",
        "name": "Maison de rencontre",
        "description": "Permet la construction de maisons de rencontre ( Foi +3 et Production +3).",
        "section": "Culte"
      },
      {
        "id": "culte-mosquee",
        "name": "Mosquée",
        "description": "Permet la construction de mosquées ( Foi +3). Octroie un Missionnaire à chaque fois qu'une mosquée est construite. Les Missionnaires et Apôtres ont 2 charges supplémentaires.",
        "section": "Culte"
      },
      {
        "id": "culte-pagode",
        "name": "Pagode",
        "description": "Permet la construction de pagodes ( Foi +3 et Points d'influence +1 par tour).",
        "section": "Culte"
      },
      {
        "id": "culte-synagogue",
        "name": "Synagogue",
        "description": "Permet la construction de synagogues ( Foi +9).",
        "section": "Culte"
      },
      {
        "id": "culte-wat",
        "name": "Wat",
        "description": "Permet la construction de wats ( Foi +3 et Science +3).",
        "section": "Culte"
      },
      {
        "id": "culte-stupa",
        "name": "Stupa",
        "description": "Permet la construction de stupas ( Foi +3 et Activités +1).",
        "section": "Culte"
      },
      {
        "id": "culte-dar-e-mehr",
        "name": "Dar-e Mehr",
        "description": "Permet la construction des Dar-e Mehr ( Foi +3 et Culture +3. Pillage impossible par les catastrophes naturelles).",
        "section": "Culte"
      }
    ],
    "sectionImages": {
      "Panthéon": "https://civ6bbg.github.io/images/religion/Pantheon.webp",
      "Fidèles": "https://civ6bbg.github.io/images/religion/Follower.webp",
      "Fondateur": "https://civ6bbg.github.io/images/religion/Founder.webp",
      "Propagateur": "https://civ6bbg.github.io/images/religion/Enhancer.webp",
      "Culte": "https://civ6bbg.github.io/images/religion/Worship.webp"
    }
  },
  {
    "key": "congress",
    "label": "Congrès",
    "icon": "🗳️",
    "items": [
      {
        "id": "controle-des-armes",
        "name": "Contrôle des armes",
        "description": "Les armes de destruction massive de tous les joueurs sont réglées sur le niveau de celles du joueur choisi.\nLe joueur choisi perd toutes ses armes de destruction massive.\nEarliest Era: Ère moderne",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_ARMS_CONTROL.webp"
      },
      {
        "id": "traite-de-controle-des-frontieres",
        "name": "Traité de contrôle des frontières",
        "description": "Le coût d'achat des cases du joueur choisi est réduit de 50%.\nLes frontières de ce joueur ne s'élargissent pas avec la culture.\nLatest Era: Ère industrielle",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_BORDER_CONTROL.webp"
      },
      {
        "id": "traite-de-deforestation",
        "name": "Traité de déforestation",
        "description": "Empêche de supprimer des caractéristiques du type choisi.\nSupprimer des caractéristiques du type choisi génère une quantité d'Or équivalente à la Production et à la Nourriture générées.\nEarliest Era: Ère de la Renaissance\nLatest Era: Ère future",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_DEFORESTATION_TREATY.webp"
      },
      {
        "id": "pacte-d-espionnage",
        "name": "Pacte d'espionnage",
        "description": "Les espions effectuant l'opération choisie profitent virtuellement de 2 niveaux de plus.\nL'opération choisie n'est pas disponible.\nEarliest Era: Ère de la Renaissance\nLatest Era: Ère atomique",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_ESPIONAGE_PACT.webp"
      },
      {
        "id": "traite-mondial-sur-l-energie",
        "name": "Traité mondial sur l'énergie",
        "description": "Impossible de construire le type de bâtiment choisi.\nCoût en Production -50% pour le type de bâtiment choisi.\nEarliest Era: Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_GLOBAL_ENERGY_TREATY.webp"
      },
      {
        "id": "organisation-culturelle",
        "name": "Organisation culturelle",
        "description": "Tourisme +100% pour les chefs-d'œuvre du type choisi.\nTourisme -50% pour les chefs-d'œuvre du type choisi.\nEarliest Era: Ère industrielle",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_HERITAGE_ORG.webp"
      },
      {
        "id": "doctrine-de-luxe",
        "name": "Doctrine de luxe",
        "description": "Tous les exemplaires de la ressource de luxe choisie octroient de l'Activité.\nLa ressource de luxe choisie n'octroie pas d'Activité.",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_LUXURY.webp"
      },
      {
        "id": "societes-de-mercenaires",
        "name": "Sociétés de mercenaires",
        "description": "Le coût en Production ou d'achat des unités militaires est augmenté de 50%.\nLe coût en Production ou d'achat des unités militaires est réduit de 25%.",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_MERCENARY_COMPANIES.webp"
      },
      {
        "id": "traite-de-migration",
        "name": "Traité de migration",
        "description": "Croissance +20% et loyauté par tour -5 dans les villes du joueur choisi.\nCroissance -20% et loyauté par tour +5 dans les villes du joueur choisi.\nLatest Era: Ère de la Renaissance",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_MIGRATION_TREATY.webp"
      },
      {
        "id": "conseil-militaire",
        "name": "Conseil militaire",
        "description": "Puissance de combat +3 pour les unités du type choisi.\nPuissance de combat -3 pour les unités du type choisi.\nLatest Era: Ère future",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_MILITARY_ADVISORY.webp"
      },
      {
        "id": "mecenat",
        "name": "Mécénat",
        "description": "Génération de points de Personnage illustre du type choisi +100%.\nAucune génération de points de Personnage illustre du type choisi.\nLatest Era: Ère future",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_PATRONAGE.webp"
      },
      {
        "id": "programme-de-travaux-publics",
        "name": "Programme de travaux publics",
        "description": "Production +100% pour le projet choisi.\nProduction -50% pour le projet choisi.\nEarliest Era: Ère industrielle\nLatest Era: Ère future",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_PUBLIC_WORKS.webp"
      },
      {
        "id": "souverainete",
        "name": "Souveraineté",
        "description": "Type de rendement de la Cité-état +100% pour les routes commerciales à destination du type de Cité-état choisi.\nLes Cités-états du type choisi n'octroient pas leur bonus de suzerain exclusif.\nLatest Era: Ère moderne",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_SOVEREIGNTY.webp"
      },
      {
        "id": "doctrine-sur-le-commerce",
        "name": "Doctrine sur le commerce",
        "description": "Or +4 pour les routes commerciales internationales vers le joueur choisi, qui reçoit également +2 Or. Emplacements de route commerciale +1 pour le joueur choisi.\nOr -4 pour les routes commerciales internationales depuis ou vers le joueur choisi.\nLatest Era: Ère future",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_TRADE_TREATY.webp"
      },
      {
        "id": "traite-d-urbanisation",
        "name": "Traité d'urbanisation",
        "description": "Production +100% pour les bâtiments du quartier choisi.\nProduction -50% pour les bâtiments du quartier choisi.\nLatest Era: Ère industrielle",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_URBAN_DEVELOPMENT.webp"
      },
      {
        "id": "ideologie-mondiale",
        "name": "Idéologie mondiale",
        "description": "Le gouvernement choisi reçoit un emplacement de doctrine Joker.\nLe gouvernement choisi perd un emplacement de doctrine Joker.\nEarliest Era: Ère médiévale",
        "image": "https://civ6bbg.github.io/images/resolutions/WC_RES_WORLD_IDEOLOGY.webp"
      }
    ]
  }
];
