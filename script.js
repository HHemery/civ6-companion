"use strict";

/* ==========================================================================
   DONNÉES CIVS
   --------------------------------------------------------------------------
   Pour ajouter une civ : ajouter un objet dans CIV_DATA, rien d'autre à
   toucher. Chaque champ de contenu peut être :
     - une string  -> affichée en paragraphe
     - un tableau  -> affiché en liste à puces
   Champs : id, leader, civilization, contexte ("FFA" | "Teamer"),
   img (chemin vers le portrait, optionnel), couleur (accent hex, optionnel),
   bonus, pantheon, victoire, early_game, mid_game, late_game, snowball,
   pieges, notes, et optionnellement guerre_diplomatie.
   **texte** = mis en gras à l'affichage.
   ========================================================================== */

const CIV_DATA = [
  {
    id: "tokugawa",
    leader: "Tokugawa",
    civilization: "Japon",
    contexte: "FFA",
    owner: "hugo",
    img: "img/tokugawa.webp",
    couleur: "#ef4444",
    bonus: [
      "Les **districts japonais se donnent mutuellement un bonus d'adjacence standard**, quel que soit leur type → clusteriser les districts dans la capitale pour maximiser les adjacences.",
      "Les **routes commerciales internes** rapportent des rendements bonus selon le **nombre de districts dans la ville de destination** : plus la capitale a de districts, plus chaque route interne qui y arrive rapporte de culture/science/or/foi.",
      "Unité unique : le **Samouraï** (utile en garnison pour les aménités et le score)."
    ],
    pantheon: "**Religious Settlements** (+20% production vers les colons), pris tôt : le spawn japonais est souvent isolé avec énormément de place pour s'étendre → wide rapide.",
    victoire: "Non explicitement énoncée dans la source, mais tout pointe vers un **snowball économique/scientifique** (10 techs d'avance mentionnées) plutôt que militaire — cohérent avec une victoire **Science** ou score.",
    early_game: [
      "Priorité aux **huttes tribales** (spawn isolé = énormément de huttes → pop, builders, foi).",
      "Mettre la carte **double XP recon** AVANT de révéler des tuiles/prendre des huttes.",
      "Installer la première ville **en côtier** pour Harbor + luxe ; rechercher Celestial Navigation.",
      "S'étendre **large sans hésiter** grâce à Religious Settlements.",
      "Religion fondée tard et peu investie : 1–2 holy sites, une seule croyance suffit."
    ],
    mid_game: [
      "**Grouper les districts** dans la capitale et les villes clés pour exploiter l'adjacence japonaise.",
      "Placer un **Diplomatic Quarter** : il augmente plus que les autres districts les rendements des routes internes.",
      "Multiplier les **routes internes vers la capitale** (jusqu'à 9 routes = +9 de chaque rendement).",
      "Viser les **paliers de population 7 et 10** : chaque palier débloque un slot de district.",
      "**Magnus** (chops, charges de builder) ; convoiter les **Pyramides** pour la charge de builder gratuite."
    ],
    late_game: [
      "**Vertical Integration** + usines/banques ; campus multiples + **Oxford University** pour garder l'avance technologique.",
      "Espionnage : Foreign Ministry, plusieurs espions, contre-espionnage (voler or/tech, protéger tes infras).",
      "**Défendre activement les districts stratégiques** (barrages !) contre le pillage."
    ],
    snowball: "Empire wide + clustering de districts (adjacence mutuelle) + routes internes multipliées par le nombre de districts de la destination = **accumulation exponentielle de science/culture/or/foi dans la capitale**, amplifiée par l'isolement (expansion libre, pas de guerre précoce) et les huttes.",
    pieges: [
      "Négliger les aménités en s'étendant large (bonheur chroniquement bas malgré zoos/aquariums).",
      "Perdre des merveilles clés (Pyramides, Cité Interdite) par manque de priorisation production.",
      "Laisser un district critique (**barrage**) sans garnison → pillage massif, ~12 tours de réparation.",
      "Fonder la religion trop tard sans plan clair."
    ],
    notes: ""
  },

  {
    id: "curtin",
    leader: "John Curtin",
    civilization: "Australie",
    contexte: "FFA",
    owner: "hugo",
    img: "img/curtin.webp",
    couleur: "#4ade80",
    bonus: [
      "**+3 d'adjacence** sur holy sites, campus, theater squares et commercial hubs construits sur une tuile **breathtaking** ; +2 aménités sur les city centers breathtaking.",
      "Amélioration unique : l'**Outback Station** (débloquée à Guilds) : +1 appeal sur les tuiles adjacentes → permet de forcer tout le territoire à devenir breathtaking.",
      "**+3 housing** sur toutes les villes côtières.",
      "Les **pâturages** génèrent un culture bomb et, après Political Philosophy, +1 production.",
      "Unité unique : le **Digger**, bonus de combat massifs sur côte étrangère."
    ],
    pantheon: "**Earth Goddess** (foi sur toutes les tuiles charming et breathtaking) — synergie directe : l'Australie transforme tout son territoire en breathtaking via les Outback Stations.",
    victoire: "Pas de victoire pure imposée : la stratégie construit un **moteur économique** (science/culture/foi/or via adjacences boostées) qui snowball vers une **guerre navale/amphibie de fin de partie** (Diggers + flotte) pour clore la FFA.",
    early_game: [
      "Ouvrir sur **2–3 holy sites** (pas commercial hub/harbor en premier).",
      "Rechercher **Celestial Navigation** tôt ; settle en priorité les spots **côtiers** (+3 housing).",
      "Prendre **Earth Goddess** ; privilégier foi/production.",
      "Viser le golden age avec la dédicace **Monumentality** : acheter colons et builders à la foi en masse.",
      "**Ne pas** placer holy site/gov plaza à côté de plusieurs pâturages : garder ces tuiles pour pâturages + Outback Stations."
    ],
    mid_game: [
      "**Rush Guilds** pour débloquer l'Outback Station, puis spammer les stations autour des pâturages pour l'appeal.",
      "Suzerainetés clés : **Johannesburg** (production par ressource) et **Chinguetti** (foi).",
      "Gouverneurs : **Amani** (loyauté), **Magnus**, **Liang** (ressources).",
      "Dédicace **Pen, Brush and Voice** pour la culture.",
      "⚠ Fer révélé, désert, toundra empêchent breathtaking ou la pose d'Outback Station."
    ],
    late_game: [
      "Transition vers **Industrialization** puis **Venetian Arsenal**.",
      "Production massive de navires (ironclads → battleships) et de **Diggers** pour l'invasion amphibie.",
      "Les Diggers cumulent des bonus de combat énormes sur côte étrangère."
    ],
    snowball: "Appeal → breathtaking → **adjacences +3/+4 partout** → plus de foi/science/culture/or/aménités (jusqu'à +16% en ecstatic) → plus de golden ages/dédicaces → l'économie alimente la machine militaire (Diggers) qui termine la partie.",
    pieges: [
      "Placer des districts entre des pâturages (tuiles à réserver aux Outback Stations).",
      "Oublier de switcher cartes de politique / dédicaces au bon moment.",
      "Ne pas surveiller les ressources stratégiques révélées qui cassent le breathtaking.",
      "Négliger les envoys → perdre les city-states clés.",
      "Hard-tech des techs inutiles (Apprenticeship : peu de mines classiques chez Curtin).",
      "La zone industrielle baisse l'appeal local : compromis à gérer."
    ],
    notes: ""
  },

  {
    id: "jayavarman",
    leader: "Jayavarman VII",
    civilization: "Khmer",
    contexte: "FFA",
    owner: "hugo",
    img: "img/jayavarman.webp",
    couleur: "#fb923c",
    bonus: [
      "**Lieux saints sur rivière surpuissants** : grosse adjacence de foi + nourriture/logement (capacité de Jayavarman), et chaque lieu saint terminé déclenche une **bombe culturelle** qui vole les tuiles autour.",
      "**Grands Barays** (capacité civ) : les aqueducs rapportent de la foi et boostent les fermes adjacentes → capitales à très grosse population.",
      "Bâtiment unique : le **Prasat** (remplace le temple) — donne du **tourisme à la découverte de Flight** (pivot culture possible en fin de partie)."
    ],
    pantheon: [
      "**Panthéon : Déesse de la rivière** — quasi automatique : aménités + logement via les lieux saints sur rivière. Te dispense de courir après les luxes en début de partie.",
      "**Rappel mécanique** : à la fondation (grand prophète) tu choisis **2 croyances** ; les 2 dernières s'ajoutent plus tard en **évangélisant avec un apôtre** (une à la fois). Quatre catégories : **fidèles** (bonus dans tes villes), **fondateur** (bonus par ville convertie ailleurs), **culte** (un bâtiment de lieu saint), **amélioration** (spread/défense).",
      "**Croyance n°1 — fidèles, LE vrai choix, selon le land** : **Éthique de travail** par défaut (l'adjacence foi devient de la PROD : tes lieux saints rivière +4/+6 deviennent des usines gratuites) ; **Musique chorale** si le land a déjà food+prod et que tu veux scaler la culture (le pick de Lege) ; **Nourrir le monde** seulement sur un land pauvre en nourriture.",
      "**Croyance n°2 — à la fondation aussi** : un **bâtiment de culte** est le pick simple et rentable — **Gurdwara** (+food, pick de la vidéo v1) ou Pagode/Stupa (logement/aménités → grosses pops). Une croyance de fondateur (type Pèlerinage) ne paie que si tu comptes convertir le monde — le Khmer éco ne spread pas.",
      "**Croyances n°3 et 4 — via apôtre, OPTIONNELLES** : n'évangélise que si (a) un voisin convertit tes villes → croyance défensive, ou (b) tu pivotes tourisme en fin de partie. Sinon ta foi vaut plus ailleurs : builders/colons (Monumentality), patronage de grands personnages, rock bands.",
      "⚠ Les valeurs exactes des croyances sont retouchées par BBG : survole-les en jeu au moment du choix, l'infobulle fait foi."
    ],
    victoire: "Flexible : le moteur foi/production ouvre **science comme culture**. L'idée du pick : générer un surplus de production que les autres n'ont pas pour **rafler les marqueurs de la game** — Colisée, Grande Bibliothèque, Oracle, merveilles d'ère — tout en enchaînant les quartiers discount.",
    early_game: [
      "Condition du pick : un **spawn rivière** (idéalement plaines inondables). « Pas sur tous les lands » — sans rivières, prends autre chose.",
      "Settle en **laissant la place du lieu saint** au bord de la rivière (et un spot de place de gouvernement à côté si possible).",
      "**Lieu saint très tôt et terminé vite** (chop dedans si besoin) : foi, logement, et la **bombe culturelle** vole les tuiles aux voisins.",
      "Croyances selon le land : **Éthique de travail** par défaut (l'adjacence foi devient de la production) ; **Musique chorale** si le land a déjà food+prod (scaler la culture) ; **Nourrir le monde** si land pauvre en nourriture.",
      "La production dégagée sert à **enchaîner les quartiers discount** : campus discount posés en chaîne dès ~T27-30.",
      "**Salle ancestrale** puis double colons ; stacks de production (bibliothèque finie en 1 tour → l'overflow part dans le colon).",
      "⚠ Religion : si Babylone/Nubie partent points de prophète, adapte tes croyances — et **achète un missionnaire tôt** pour tenir tes villes converties."
    ],
    mid_game: [
      "**Magnus + chops** pour finir les merveilles clés : **Colisée, Grande Bibliothèque, Oracle** (l'Oracle sort en 1 tour avec un bon stack de prod).",
      "Dédicace **Pen, Brush and Voice** ; viser +4/+5 d'aménités partout (16 % de tout).",
      "Théâtres et plateformes commerciales **discount** derrière les campus ; carte −20 % sur l'achat de cases pour les tuiles clés.",
      "**Plan de tuiles** : fermes sur le PLAT autour des aqueducs (la food est gratuite chez le Khmer) ; **mines sur TOUTES les collines sans attendre Génie civil** (Apprenticeship puis Industrialisation les buffent) — celles adjacentes à un futur spot d'IZ valent double ; scieries sur les bois plats.",
      "Objectif tech : **3 à 5 techs d'avance vers T60** (23 techs dans la partie du stream) ; universités → Imprimerie.",
      "Grands savants : **Newton** prioritaire, Galilée en second (attention au bug d'overflow BBG)."
    ],
    late_game: [
      "Le moteur de foi finance builders, achats et unités ; **Théocratie** si tu convertis/achètes beaucoup à la foi.",
      "**Flight double le tourisme des Prasat** : si la game penche culture, pivot rock bands ; sinon science classique (labs, spaceports).",
      "En défense, la production disponible permet de sortir trébuchets/chevaliers en tempo dès qu'une menace se profile."
    ],
    snowball: "Lieu saint sur rivière = foi + bombes culturelles + (Éthique de travail) **production** → quartiers discount en chaîne + merveilles raflées à la concurrence → avance tech/culture qui s'auto-alimente. Le Khmer convertit la foi en **tempo de production**, la ressource la plus disputée du multi.",
    pieges: [
      "Forcer le pick sur un land sans rivières : tout le kit tombe à l'eau.",
      "Se faire sniper la religion (Babylone/Nubie sur points de prophète) sans plan B de croyances.",
      "Laisser les voisins convertir tes villes : un missionnaire de garde coûte moins cher qu'une reconversion.",
      "Sur-investir en lieux saints après le 4e-5e : les quartiers de rendement (campus/commercial) passent devant.",
      "Oublier que le Colisée peut être contesté : sécurise-le au chop, pas à l'espoir."
    ],
    notes: "**Fiche v2** — refaite à partir d'un stream FFA compétitif français sous BBG 7.x. Remplace la v1 (vidéo solo « victoire culture T216 vs IA », one-city Astrology first) : stratégie non viable en lobby humain."
  },

  {
    id: "moctezuma",
    leader: "Moctezuma",
    civilization: "Aztèques",
    contexte: "Teamer",
    owner: "hugo",
    img: "img/moctezuma.webp",
    couleur: "#2dd4bf",
    bonus: [
      "Unité unique **Eagle Warrior** : peut capturer un builder ennemi — seulement quand c'est lui qui attaque.",
      "Capacité majeure : **une charge de builder complète instantanément 30% d'un district** (rush commercial hubs/campus, et surtout les **Spaceports** en fin de partie).",
      "**+1 force de combat par ressource de luxe améliorée** sur ton territoire (y compris les copies obtenues via Grands Marchands ; ne compte pas les ressources hors territoire)."
    ],
    pantheon: "**Religious Settlements** (tuiles bonus à la fondation), pour une stratégie wide combinée aux bonus d'aménités aztèques. Astuce : piller un camp barbare tôt pour accélérer le panthéon.",
    victoire: "**Victoire scientifique/spatiale** : avance techno constante, campus, labos, puis rush des Spaceports grâce à la capacité builder. La culture est volontairement laissée de côté dans l'exemple.",
    early_game: [
      "**Coloniser au tour 1** (pas T2) pour profiter du franchissement de rivière gratuit.",
      "Scouting agressif ; Pottery/Currency plutôt qu'Animal Husbandry.",
      "Expansion **très large** dès que possible."
    ],
    mid_game: [
      "Districts prioritaires : **Campus, Commercial Hub, Entertainment Complex**.",
      "**Ancestral Hall** pour timer un builder gratuit ; **Merchant Republic** = gros power spike.",
      "Routes commerciales vers les villes à faible nourriture (flood plains).",
      "Garder les charges de builder jusqu'à **Feudalism** (charges supplémentaires).",
      "**10+ villes vers le tour 49–50.**"
    ],
    late_game: [
      "**Vertical Integration** transforme une ville en super-ville ; factories partout.",
      "**Spaceports quasi instantanés** grâce à la capacité aztèque (1 tour au lieu de 5).",
      "Poussée finale sur les projets spatiaux."
    ],
    guerre_diplomatie: [
      "Guerres ciblées contre les voisins faibles pour **capturer des builders** (⚠ déclarer la guerre expulse d'abord les unités ennemies de ton territoire).",
      "Alliances/amitiés avec les voisins : capacité de routes commerciales, défense fluviale.",
      "Fin de partie : accords informels à plusieurs pour bloquer un adversaire commun — dynamique typiquement FFA."
    ],
    snowball: "Expansion large + Religious Settlements → aménités qui rendent le wide viable → luxes accumulées (**bonus de combat**) → charges de builder qui rushent districts et **Spaceports**, accélérant massivement la fin de partie scientifique.",
    pieges: [
      "Oublier de changer production/tech avant la fin d'un tour (overflow perdu).",
      "Négliger le score d'ère ; laisser filer la culture trop longtemps.",
      "Ne pas anticiper l'expulsion des unités ennemies à la déclaration de guerre (rate la capture de builders)."
    ],
    notes: "⚠ Tu veux jouer Moctezuma en **teamer**, mais le transcript source est une partie **FFA** : le plan macro (wide, science, spaceports rush) reste valable, la partie diplomatie est à adapter. En teamer : ton +1 force/luxe et les Eagle Warriors font de toi un excellent agresseur early aux côtés d'un partenaire war (ex. Gengis) — à compléter avec du contenu teamer dédié."
  },

  {
    id: "genghis_khan",
    leader: "Gengis Khan",
    civilization: "Mongolie",
    contexte: "Teamer",
    owner: "hugo",
    img: "img/genghis_khan.webp",
    couleur: "#60a5fa",
    bonus: [
      "Passif clé : la **puissance de combat liée à la visibilité diplomatique est doublée**.",
      "Bonus civ : **+3 de force** pour les unités mongoles, plus un bonus supplémentaire hors de Mongolie.",
      "Unité unique : le **Kheshig**, unité à distance montée, 4 PM de base (+1 promotion, +1 avec général = 6 PM/tour), peut **capturer la cavalerie ennemie**."
    ],
    pantheon: "**Culte impérial** si pas de génération de foi sur le land ; sinon **Dieu du ciel ouvert** (recommandé si les alliés ne boostent pas la culture). Alternatives : Dieu des artisans, Dieu de la force.",
    victoire: "**Domination / militaire** via des timings létaux : rush de guerre au mid-game coordonné avec l'équipe.",
    early_game: [
      "**Double scout + guerrier** en exploration.",
      "**Élevage en première tech**, puis expansion (2 colons prévus tôt).",
      "Build order : monument avant les campus ; **3 campus** (dont un discount près de la place du gouvernement) + **2 campements discount** ; puis Étrier, Construction, Féodalité, Imprimerie.",
      "Civics : Féodalité puis Monarchie ; gouvernement **République classique** (Oligarchie si adversaires très défensifs).",
      "Aller vers **Histoire écrite** pour la carte doublant les campus."
    ],
    mid_game: [
      "Premier gouverneur dans la **2e ville** — la capitale garde **Victor** (+1 niveau aux unités créées).",
      "**Agence de renseignement** → espion niv. 1 (grâce à Victor), puis **Armée de métier** → espion niv. 2 = +2 niveaux de visibilité diplomatique = +6 combat, **doublé par le passif = +12**.",
      "**Magnus** dans la capitale (chops, +40% rendement), puis déplacé en 3e ville.",
      "**Ordu obligatoires avant toute unité** : +1 PM cavalerie, réduction d'entretien, points de grand général.",
      "**Trône** avant la production de masse : réduction d'entretien + 25% production d'unités.",
      "Techs : Étrier → Construction → Féodalité → Droit divin → Science militaire."
    ],
    late_game: [
      "Vers le **tour 45**, première vague de **Kheshigs** (déjà niveau 1 grâce à Victor). Minimum 6, idéalement **8–10**.",
      "Passage aux **chevaliers** une fois Droit divin obtenu.",
      "**Espion niveau 2 en écoute chez la cible AVANT la déclaration de guerre** pour maximiser la visibilité diplomatique au moment du push."
    ],
    snowball: "L'Imprimerie permet d'atteindre **+18 de visibilité diplomatique** (base +9, doublée par le passif). Exemple observé : Kheshig niveau 2 qui tape à **78 de force** (base + visibilité + promotions + bonus civ ≈ +30 cumulés). Plus l'espion reste en poste et plus tu avances en tech, plus chaque vague est dévastatrice.",
    pieges: [
      "Produire des unités **avant** d'avoir les Ordu.",
      "Négliger le Trône.",
      "Finir Dramaturgie/Poésie trop tôt.",
      "Oublier de récupérer sa carte politique dès que possible.",
      "Build order exigeant, déconseillé aux débutants."
    ],
    notes: "Fiche calée sur **BBG 5.9** — les valeurs peuvent bouger avec les patchs BBG (tu joues en 7.4.6 : vérifie les chiffres de visibilité diplomatique en partie)."
  },

  {
    id: "poundmaker",
    leader: "Poundmaker",
    civilization: "Cri (Cree)",
    contexte: "FFA",
    owner: "hugo",
    img: "img/poundmaker.webp",
    couleur: "#22d3ee",
    bonus: [
      "**Bonus de nourriture sur toutes les routes commerciales internes**, proportionnel au nombre de **camps/pâturages à la destination** — le cœur de la civ.",
      "Unité unique : **Okihtcitaw** (scout amélioré, promotion gratuite) → **+4 era score** à la première copie : golden age antique quasi garanti.",
      "Amélioration unique : **Mekewap** (remplace la mine, +2 prod +2 housing, débloquée à Service Civil).",
      "**Partage de vision avec les alliés** — et donc tous les city-states scientifiques révélés."
    ],
    pantheon: "Pas de préférence forte, dépend du spawn. Idéalement **Déesse de la Chasse** (bonus sur camps) ; sinon **Religious Settlements** en option générique.",
    victoire: "**Science**. Le record CPL de la victoire scientifique la plus rapide en multijoueur a été établi avec cette civ (~500 science/tour vers T80, sans même les research labs). Le surplus food/prod permet des rushs très rapides. Civ réputée **idéale pour débuter** : build order standard, très consistante.",
    early_game: [
      "**Élevage en premier** pour repérer où envoyer les routes internes.",
      "Contrairement aux autres civs (routes vers la capitale), **settle la 2e ville là où il y a le plus de camps/pâturages potentiels** (jusqu'à 7 dans l'exemple) et y envoyer toutes les routes.",
      "Builder immédiatement dans cette ville pour améliorer camps et pâturages.",
      "Promotion Okihtcitaw : **mouvement sur collines** (world age « new » = beaucoup de collines, meilleure vision).",
      "Les Okihtcitaw + le Mekewap = +8 era score facile dans l'ère antique."
    ],
    mid_game: [
      "**Ouverture Magnus + commercial hub dans chaque ville** ; dédicace **Pen, Brush and Voice** pour accélérer Féodalisme.",
      "**Magnus ET la Government Plaza dans la 2e ville** (la destination des routes) : le gov plaza donne +1 food +1 prod aux routes internes vers sa ville.",
      "Merveilles : **Pyramides** (si désert plat dispo — rare avec BBM donc peu contestée) et **Colisée** (aménités cruciales vu le surplus de food).",
      "**Féodalisme vers T46** : vague de builders partout.",
      "Chopper les bois sur collines → mines ; **scieries sur les bois en terrain plat** (sinon les villes plates n'ont plus de prod à long terme).",
      "Mekewap dans les villes vallonnées ; mines souvent préférées ailleurs (+1 prod à Industrialisation, et limiter le housing des villes plates aide à contrôler la croissance/aménités)."
    ],
    late_game: [
      "Grosse production scientifique : campus partout, **Campus Research Grants** en boucle → scientifiques Renaissance (Galileo + Newton pris T62 dans l'exemple).",
      "**Première alliance dès que possible** : vision partagée → tous les blue city-states révélés (3 envoys chacun = science massive sur libraries/universités) — et ça te rend attractif comme allié.",
      "**Chichen Itza** pour les tuiles de jungle plates ; ingénieurs (Brunelleschi) pour une merveille gratuite (Cité Interdite ou Oxford).",
      "Setup de zones industrielles clusterisées autour d'aqueducs/barrage (deux +8 dans l'exemple), planifié dès l'ère antique."
    ],
    snowball: "Plus de camps/pâturages à destination → **plus de food par route interne** (11 food/route dans l'exemple) → croissance démesurée → plus de tuiles travaillées (les collines de plaine deviennent monstrueuses avec mines) → toute l'économie accélère (science, culture, merveilles).",
    pieges: [
      "Envoyer les routes vers la capitale **par défaut** au lieu de la ville à camps/pâturages.",
      "Sous-estimer les paliers d'aménités (+3/+5 = +8%/+16% de TOUT) : le surplus de food rend le bonheur plus dur à tenir — d'où le Colisée.",
      "Chopper toutes les forêts en terrain plat (perte de prod long terme) au lieu d'y mettre des scieries."
    ],
    notes: "Le land parfait pour les Cris : des **plaines vallonnées** (« yellow land ») — une mine de plaine (1/4 avec Apprenticeship) se marie mieux avec les 11 food/route que la grassland."
  },

  {
    id: "harald",
    leader: "Harald Varègue",
    civilization: "Norvège",
    contexte: "FFA",
    owner: "hugo",
    img: "img/harald.webp",
    couleur: "#a78bfa",
    bonus: [
      "Persona **Varègue** = le leader le plus buffé de BBG côté religion : **convertir une ville rapporte science et culture proportionnelles à sa population** → tu restes au niveau tech du lobby TOUT EN convertissant.",
      "Les **temples donnent des points d'influence** → contrôle massif des cité-états (envoys).",
      "Bonus norvégiens sur les **lieux saints** + temple unique (église en bois debout) ; synergie clé : **les harbors gagnent une grosse adjacence près des lieux saints**.",
      "Classiques Norvège : pillage côtier, unités navales early (longships), Berserker."
    ],
    pantheon: "Pas imposé par la source ; l'ouverture suit la **méta religieuse BBG** standard (voir fiche Australie/Khmer pour les panthéons foi). Croyances de fondation : **Feed the World** (nourriture/logement sur sanctuaires et temples) + **Pilgrimage** (foi).",
    victoire: "**Victoire religieuse** — normalement morte en multi (les unités militaires suppriment les unités religieuses en guerre), mais viable avec ce leader précis en BBG. Exemple source : victoire par concession unanime au **tour 90 d'un lobby 12 joueurs de haut niveau**. Prévois un plan B science si la géopolitique s'y oppose.",
    early_game: [
      "**Jouer les 2 premières ères 100 % normalement** : settle, croissance, builders à Féodalité — zéro investissement dans la conversion avant ~T53.",
      "**Lieu saint dans chaque ville early**, positionné **à côté du futur harbor** : l'adjacence harbor > l'adjacence lieu saint (les chantiers navals donnent de la prod = adjacence, Free Inquiry donne de la science = adjacence).",
      "Gouverneur : **Moksha dans la capitale** (BBG) ; dédicace **Monumentality** au 1er golden age (colons/builders à la foi).",
      "Fonder la religion avec **Feed the World + Pilgrimage** — des croyances « inoffensives » qui n'alertent personne."
    ],
    mid_game: [
      "**T53, 2e golden age : bascule Monumentality → Free Inquiry.** La foi est libérée → elle part dans la victoire religieuse.",
      "2 apôtres immédiatement pour évangéliser : **Holy Order** (unités religieuses −25 %) + **Mosquées** (unités religieuses plus fortes/charge en plus).",
      "**Stack de réductions d'apôtres (additif, BBG)** : **Temple de Meenakshi** −25 % (merveille BBG) + Sainte-Sophie −25 % missionnaires + Holy Order −25 % + promotion **Patron Saint de Moksha** −20 % + **Théocratie** −15 % = **−85 % sur les apôtres, −65 % sur les missionnaires**.",
      "Résultat T62 : **apôtres à ~40 foi**, 6 mouvements, 6 charges, 2 promotions — achetés dans la ville de Moksha.",
      "Pendant ce temps, les villes construisent l'infra mid-game **normale** (prod/science) : tu ne sacrifies presque rien.",
      "Suzeraineté **Fès** si dispo : science bonus par citoyen converti (nerfée de moitié en BBG, mais réelle)."
    ],
    late_game: [
      "Convertir d'abord **alliés et voisins sans religion** (ils n'ont rien à perdre, ils laissent faire).",
      "**Identifier les 3 « problem players »** : celui qui a des inquisiteurs (type Espagne), celui qui a sa propre religion au loin, et celui qui vise la 1re place. Un plan par tête : le proche → tanks/artillerie plus tard ; le naval → destroyers/missile cruisers ; l'intouchable → le coincer stratégiquement.",
      "Le trick du warmonger : il suffit que **50 % de SES villes** suivent ta religion → **convertis ses voisins à l'avance**, il « se convertit » lui-même en les conquérant.",
      "Les autres n'osent pas te déclarer : tes cité-états sous contrôle **gèlent leurs envoys** en cas de guerre (les temples-influence paient ici), et tes voisins craignent la riposte militaire.",
      "Option agressive (style Al sign) : escorter les apôtres de **cavalerie légère** et menacer quiconque condamne."
    ],
    snowball: "Chaque conversion = **burst de science + culture ∝ population convertie** (+ Fès) → tu convertis le monde SANS décrocher technologiquement → personne n'a de fenêtre pour te punir, et tes apôtres à 40 foi se remplacent plus vite qu'on ne les condamne.",
    pieges: [
      "Partir religion-first dès l'antique : tu prends un retard fatal — la conversion commence à T53+, pas avant.",
      "Tenter cette stratégie avec un autre leader : la victoire religieuse reste **morte** en multi sans les buffs Varègue.",
      "Oublier le stack de réductions (merveilles + Moksha + Théocratie) : à prix plein, la conversion te ruine.",
      "Sous-estimer un joueur avec inquisiteurs ou une religion établie : c'est LUI ton vrai adversaire, pas le lobby.",
      "Négliger l'armée : en guerre, n'importe quelle unité militaire supprime tes apôtres d'un clic."
    ],
    notes: "Fiche tirée du guide Herson « religious victory in multiplayer » (BBG, lobby 12 joueurs CPL, victoire T90). Stratégie popularisée par le joueur **Al sign**, multi-vainqueur en lobbies compétitifs."
  },

  {
    id: "hammurabi",
    leader: "Hammurabi",
    civilization: "Babylone",
    contexte: "FFA",
    owner: "hugo",
    img: "img/hammurabi.webp",
    couleur: "#818cf8",
    bonus: [
      "**Enuma Anu Enlil (capacité civ — REWORK BBG, source : data de Paul)** : **achever une bibliothèque octroie un Eurêka.** Fini le « eurekas complètent les techs » du jeu de base : ta science avance NORMALEMENT, et chaque bibliothèque terminée ajoute un boost gratuit par-dessus. **Les bibliothèques sont ton moteur.** Bias de spawn : rivières (T3).",
      "**Ninu ilu sirum (capacité leader)** : chaque quartier spécialisé (sauf place de gouvernance) achevé pour la **première fois** dans l'empire y construit **gratuitement le bâtiment le moins cher** — sanctuaire avec le 1er lieu saint, phare avec le 1er port… et surtout **le Bosquet gratuit avec la 1re Réserve** (le bâtiment le plus cher du lot : tempo énorme, le cœur du build de Herson).",
      "**Palgum** (bâtiment unique, remplace le moulin, débloqué à **Irrigation**) : +2 prod ; **+1 nourriture sur les cases aménagées d'eau douce (SAUF les fermes)** ; **+1 production pour les fermes** → oriente le settle (rivières) et chaque amélioration.",
      "**Sâbum kibittum** (unité unique antique, dispo T1) : vision 3, **+17 contre la cavalerie lourde ET légère** — l'assurance anti-rush chevaux de l'early. (En scouting pur, Lege préfère le scout : moins cher, promos de mouvement.)"
    ],
    pantheon: [
      "**Religious Settlements** (le pick de Lege) : les tuiles gratuites aident à **poser les districts discount** au bon endroit.",
      "Herson visait **Earth Goddess** (prise) → repli **Fertility Rites** ; il note après coup que **Lady of Reeds** collait mieux (rivières + Palgum).",
      "⚠ Grâce au **sanctuaire gratuit** du 1er lieu saint, tu as ton panthéon **sans God King** : slot éco direct sur **Urban Planning**.",
      "Religion optionnelle : Herson l'a fondée avec **Zen Meditation** parce qu'il avait **La Valette** en suzeraineté (achats de bâtiments à la foi) — sinon la foi part en builders/Monumentality."
    ],
    victoire: "**Science** — par un chemin unique : les **bibliothèques crachent des eurekas gratuits**, les premiers districts offrent leurs bâtiments, les discounts font le reste. Herson à T46 : « impossibly large », villes à 12-14 pop, +5/+6 aménités. Perma-ban dans beaucoup de lobbies : profite tant qu'on te le laisse.",
    early_game: [
      "**Settle pour le Palgum** : rivière/eau douce avec un max de tuiles améliorables adjacentes (Lege décale sa capitale pour ça). Les jardins suspendus sont un bon BO sur land riche en rivières (Lege).",
      "**Ouverture 2 lieux saints** (Herson) : le 1er donne le **sanctuaire gratuit** → panthéon rapide sans God King → **Urban Planning direct**.",
      "**Techs : ÉVITE de débloquer trop tôt** (campus surtout) — chaque tech monte le prix des districts et tes eurekas vont pleuvoir. **Irrigation en priorité** pour le Palgum.",
      "Puis la **chaîne de discounts** : pose UN exemplaire de chaque type de district, discount, en encaissant le bâtiment gratuit à chaque première — l'ordre exact dépend du land, la logique est « un de chaque, jamais deux avant d'avoir tout ouvert ».",
      "**Une Réserve discount** sur un bon spot d'appeal : le **Bosquet gratuit** est le plus gros gain de tempo du kit (Herson : « disgusting »).",
      "Expansion **wide agressive** : « je dois settle une tonne de villes ou je gâche mes stats » (Herson). Religious Settlements + colons en continu."
    ],
    mid_game: [
      "**Bibliothèque dans chaque campus, ASAP** : chaque bibliothèque achevée = un Eurêka gratuit (des centaines de science). C'est TA version du « 1 tech par tour » — les campus discount servent d'abord à ça.",
      "**Féodalité : achète tes builders** (or + foi via Monumentality) plutôt que de les produire — tes villes sont occupées à poser les districts discount.",
      "Chops et améliorations **près de l'eau douce d'abord** (chaque amélioration fresh water = +1 food via Palgum — Herson chope même une forêt pour la remplacer par une mine « for the Palgum yields »).",
      "**Colisée** sécurisé au chop (~T45 chez Herson) ; viser +5/+6 aménités partout — les grosses pops le demandent.",
      "Golden age : **Monumentality** d'abord (colons/builders foi), Free Inquiry ensuite si dispo.",
      "**Oracle + Pingala** si la ville s'y prête ; La Valette en suzeraineté = murailles/bâtiments de centre-ville à la foi.",
      "Ensuite le plan science standard du site (universités, grants, Oxford) — en sachant que tes eurekas te mettent naturellement des techs d'avance."
    ],
    late_game: [
      "Le plan science générique s'applique (labs, spaceports) — Babylone y arrive plus tôt que tout le monde grâce aux bibliothèques.",
      "Continue de chasser les **eurekas classiques** en plus de ceux des bibliothèques (unités, quêtes, bâtiments) : ils s'empilent, et l'overflow de science se gère comme dans le guide mid game.",
      "Attention à la fenêtre militaire : ton avance de techs = unités d'une ère d'avance, mais ta production doit suivre — les pré-builds à upgrader sont encore plus rentables chez toi."
    ],
    snowball: "Bibliothèques = **eurekas gratuits qui s'ajoutent à une science normale** + premières constructions = bâtiments gratuits + discounts = districts au prix plancher → **Babylone paie tout moins cher que le lobby** (recherche, infra, bâtiments) → l'avance se compose : perma-ban mérité.",
    pieges: [
      "Poser un 2e exemplaire d'un district avant d'avoir « ouvert » tous les types : tu brûles un bâtiment gratuit et un discount.",
      "**Laisser l'avance de techs dépasser ta production** : débloquer ≠ construire. Chaque palier débloqué (usines, unités…) doit être CONVERTI (bâtiments, upgrades, pré-builds) — sinon ton eureka ne vaut rien et tu « bloques » (vécu de Hugo).",
      "Compléter des techs par gourmandise pendant l'early : chaque tech renchérit les districts → **pose tes districts AVANT les rafales d'eurekas** (bibliothèques comprises : retarde-les de 2-3 tours si une pose est imminente).",
      "Oublier que le build est **exigeant en micro** (Herson lui-même : « je galère à décider vite ») : en ligne avec timer, prépare tes poses à l'avance.",
      "Settle loin de l'eau douce = Palgum mort. Rivières d'abord, toujours.",
      "Rester étroit : Babylone sans wide gâche son kit — les stats viennent du nombre de villes discountées."
    ],
    notes: "**Double source** : Lege (stream FR, plan « un district de chaque par ville » + priorités Palgum) et Herson (partie CPL chapitrée, build « 2 lieux saints → discounts → Réserve/Bosquet gratuit », T46 énorme). Les deux convergent sur l'essentiel — les fondamentaux early/mid du site s'appliquent par-dessus."
  },

  {
    id: "pachacuti",
    leader: "Pachacuti",
    civilization: "Inca",
    contexte: "FFA",
    owner: "nuage",
    img: "img/pachacuti.webp",
    couleur: "#fbbf24",
    bonus: [
      "**Mit'a (capacité civ)** : tes citoyens peuvent **travailler les cases de montagne** (+2 prod, +1 food par culture en terrasses adjacente) — les chaînes de montagnes deviennent des tuiles d'usine que personne d'autre ne peut exploiter.",
      "**Pachacuti (leader)** : les routes commerciales **intérieures** gagnent **+1 nourriture par montagne dans la ville d'origine**.",
      "**Culture en terrasses** (amélioration unique, sur collines) : +1 food, logement, **+1 food par montagne adjacente**, **+2 prod si adjacente à un aqueduc** (+1 si eau douce sans aqueduc). Dispo très tôt, scale avec les arbres tech/civique.",
      "**Qhapaq Ñan** (amélioration du leader) : un **tunnel-portail à travers les chaînes de montagnes** (2 PM pour traverser), impossible à piller ou à supprimer.",
      "**Warak'aq** (unité unique médiévale, remplace l'escarmoucheur) : **deux attaques par tour** (retouché en BBG 7.x)."
    ],
    pantheon: "Pas de préférence forte (aucun passif de foi — la vidéo écarte d'ailleurs l'ouverture lieu saint). Génériques sûrs : **Religious Settlements** ou **City Patron Goddess** ; Fertility Rites/Déesse de la chasse selon le land.",
    victoire: "**Science.** Grosses populations (terrasses + montagnes travaillées) → beaucoup de science/culture par citoyen, campus +2/+3 gratuits contre les montagnes, et une **défense naturelle** qui décourage tout rush : l'Inca sim tranquille derrière ses pics. S-tier FFA en BBG 7.4 (cf. tier list).",
    early_game: [
      "**Settle CONTRE les montagnes** — tout le kit en dépend. Le spawn inca est biaisé montagnes avec BBM.",
      "Scouts d'abord (la vidéo part full scouts ×4 — en multi BBG, **2 suffisent**), puis colons.",
      "**Repère dès T1 la case d'aqueduc** (adjacente city center + montagne/lac) : logement max + le +2 prod des futures terrasses adjacentes.",
      "**Campus collé aux montagnes** (+2/+3 faciles) — premier district à poser discount.",
      "**Routes internes vers la capitale-montagnes** dès Commerce à l'étranger : chaque montagne de la ville d'origine = +1 food par route. **Magnus** dessus, comme un opener commercial classique.",
      "**Pingala tôt** : chaque citoyen ≈ science + culture, et l'Inca fait les plus grosses pops du jeu."
    ],
    mid_game: [
      "Féodalité → vague de builders : **terrasses sur les collines adjacentes aux montagnes/aqueducs** (elles nourrissent AUSSI les montagnes travaillées : +1 food chacune) ; **mines sur les collines isolées** — la terrasse sans montagne ni aqueduc adjacent n'est qu'une ferme chère.",
      "**Zone industrielle entre deux aqueducs** comme toujours — l'Inca a des aqueducs partout, profite.",
      "Les villes montent à 15-20+ pop sans effort : surveille **logement** (aqueducs, terrasses) et **aménités** (Colisée, luxes — la leçon Cree s'applique au double ici).",
      "**Qhapaq Ñan** sur tes chaînes de montagnes : rotation défensive instantanée d'un flanc à l'autre.",
      "Campus/commercial partout, puis le plan science standard du guide (universités, Free Inquiry, grants)."
    ],
    late_game: [
      "Science classique : labs, Oxford, spaceports — la grosse pop et la prod des montagnes font le reste.",
      "En défense, l'Inca est le pire adversaire à rush du jeu : murs + pics + tunnels internes. Quelques Warak'aq/unités à distance suffisent longtemps.",
      "La source (vidéo tuto vs IA) finit sur la course spatiale — le plan tient tel quel en multi, en plus rapide."
    ],
    snowball: "Montagnes travaillées (+2 prod) + terrasses (+food qui nourrit les montagnes) + routes internes (+1 food/montagne) = **des pops géantes ET de la prod là où les autres civs n'ont rien** → science/culture par citoyen (Pingala) → et personne n'ose t'attaquer derrière tes pics. L'Inca convertit la géographie en snowball.",
    pieges: [
      "Settle loin des montagnes : le kit entier disparaît — mieux vaut un spot montagneux moyen qu'une belle plaine.",
      "Poser des terrasses sans montagne ni aqueduc adjacent (ferme chère) — ou miner une colline qui aurait nourri deux montagnes travaillées.",
      "⚠ Les **tunnels sont utilisables par l'ennemi** en guerre : un Qhapaq Ñan mal placé est une autoroute d'invasion vers ta capitale (la vidéo le pointe).",
      "Sur-investir en scouts (×4 dans la vidéo) : réflexe solo, 2 suffisent en BBG sans barbares.",
      "Laisser la pop exploser sans aménités : -10 % sur tout, le piège classique des civs à food."
    ],
    notes: "**Fiche pour Nuage** ☁️ — source : vidéo tuto FR de la sortie Gathering Storm (~2019-2020, vs IA Empereur, pré-BBG). Les fondamentaux (terrasses, montagnes, campus, routes internes) sont intemporels ; les valeurs exactes et le build compétitif sont recalés sur la méta BBG 7.4 de ce site (guides early/mid game valables tels quels)."
  }
];

/* ==========================================================================
   GUIDE GÉNÉRAL + MÉTA
   Chaque page = { id, titre, sousTitre, icon, sections: [ { titre, src?, blocs } ] }
   blocs : { h4 } | { p } | { ul: [] } | { table: { head, rows } }
         | { tiers: [ { label, color, items: [ { nom, note, mine? } ] } ] }
   ========================================================================== */

const GUIDE_DATA = [
  {
    id: "guide-fondamentaux",
    titre: "Réglages & concepts clés",
    sousTitre: "Les bases à graver avant de parler de build order",
    icon: "⚙️",
    sections: [
      {
        titre: "Les mods standards du multi",
        blocs: [
          { ul: [
            "**BBG (Better Balanced Game)** : rebalance toutes les civs. La référence — tout ce guide est calé dessus.",
            "**BBM (Better Balanced Maps)** : spawns équilibrés, biais de spawn respectés (les civs côtières spawnent côtières), aucune civ à moins de 12 tuiles de toi.",
            "**Multiplayer Helper** : pause auto si un joueur déco, corrige des exploits. Partout en multi.",
            "**Sailor Cat's Configurable Goodie Huts** : 1,5× de huttes (golden age antique plus consistant) et techs gratuites désactivées.",
            "**Top Panel Extension Pro** : food/prod empire en haut d'écran + luxes manquantes (pour trader vite).",
            "UI : Better Report Screen, Extended Policy Cards, Notification Clear."
          ]}
        ]
      },
      {
        titre: "Les réglages standards FFA",
        blocs: [
          { ul: [
            "**Online speed**, carte **Pangaea Ultima**, taille **large** (10 joueurs), niveau de mer bas, world age **new** (plus de collines = plus de prod), ridges **classic** (chaînes de montagnes trouées).",
            "**BCY capitals only / maximum** : le city center de ta capitale a toujours une base 3/1 ou 2/2 (supprime la RNG du spawn).",
            "**Pas de barbares**, désastres à 0, ressources et stratégiques **abondantes** : moins de RNG, parties plus rapides.",
            "Capture de colon : **renvoyé chez lui** (pas de vol de settler).",
            "Huttes 1,5× et techs des huttes désactivées."
          ]}
        ]
      },
      {
        titre: "Concept n°1 : le coût des districts",
        blocs: [
          { p: "Le coût d'un district dépend du **% de l'arbre tech + civics complété au moment où tu le POSES** (la pose verrouille le prix)." },
          { ul: [
            "Rush **Currency avec seulement 3 techs** débloquées → commercial hubs au prix plancher.",
            "Poser le district AVANT de finir une tech/civic de plus, puis revenir à ce que tu produisais.",
            "Early : ne complète pas de civics inutiles — brûle la culture sur un civic (ex. Drama) **sans le finir**.",
            "Après Féodalité, c'est fini : les chops scalent au même rythme que les coûts → tu recherches tout, à fond."
          ]}
        ]
      },
      {
        titre: "Concept n°2 : les tuiles",
        blocs: [
          { ul: [
            "**2/2 (2 food 2 prod) = le pain quotidien** de l'early game. Un spot de ville se juge au nombre de 2/2 en premier ring.",
            "Règle : chaque tuile travaillée doit avoir **au moins 2 de food**. 3/1 correct, 1/3 mauvais isolé, **2/1 jamais** (déverrouille la tuile plutôt que de la travailler).",
            "Settle sur **colline de plaine** = base 2/2 garantie ; settle sur luxe = luxe gratuite.",
            "Travailler une tuile 4-food seulement si ça fait passer la croissance à 1 tour ; sinon préférer la prod.",
            "Croissance en 1 tour = toujours la prendre : la nouvelle pop rembourse la prod perdue dès le tour suivant."
          ]}
        ]
      },
      {
        titre: "Concept n°3 : les aménités (le secret des gros rendements)",
        blocs: [
          { p: "En BBG 7.x : **+3 aménités = +8% à TOUS les rendements** de la ville ; **+5 (ecstatic) = +16%**. Ces paliers valent plus que n'importe quel bâtiment. (Et depuis 7.4, toutes les villes hors capitale démarrent avec +1 aménité : le wide est encore plus fluide.)" },
          { ul: [
            "Améliorer **toutes les luxes** dès l'early (1 copie = aménités dans 4 villes ; les doublons servent à trader lux-contre-lux avec les autres joueurs).",
            "**Colisée** = la meilleure merveille du jeu : +2 aménités +1 culture à chaque ville à ≤6 tuiles. Peut faire passer tout ton empire de +3 à +5 (8% → 16%).",
            "Puis dans l'ordre : suzerainetés, carte Liberalism, **zoo** (1 seul, central), water park (1 seul), **stadium** (= +5 permanent à vie).",
            "C'est la raison de ne pas settle 15 villes : trop de villes diluent les luxes et tout ton empire perd ses multiplicateurs. **8–10 villes** est le sweet spot."
          ]}
        ]
      },
      {
        titre: "Concept n°4 : ne jamais stocker l'or",
        blocs: [
          { p: "L'or qui dort = du tempo perdu. Dépense-le dès que possible : **traders** (les meilleurs achats), builders, monuments, tuiles, granaries." },
          { ul: [
            "Astuce tuile : acheter une tuile en 1er ring d'une autre ville (35 or au lieu de 55) puis **swap** la tuile vers la ville qui en a besoin.",
            "Trade routes internes : chaque nouvelle ville reçoit un trader ASAP — c'est ce qui fait grandir les villes sans food."
          ]}
        ]
      },
      {
        titre: "Concept n°5 : lire l'adversaire",
        blocs: [
          { ul: [
            "**Force d'un city center = force de la meilleure unité produite − 10, +2 par district.** Ville à 26 = il a des horsemen. Ville à 54+ = curassiers → produis des unités MAINTENANT.",
            "**Points de grand général visibles** = signe d'agression. Et l'inverse : si toi tu n'en génères pas, on sait que tu n'as pas de campement → cible. Pose un encampment vers T55+.",
            "Lens colon (touche **4**) : voir les zones rouges à distance = repérer les city-states/villes cachées. Tout le monde le fait.",
            "Conversion religieuse chez toi = presque toujours pour poser **Crusade** : réagis."
          ]}
        ]
      }
    ]
  },

  {
    id: "guide-early",
    titre: "Early game (T1–50)",
    sousTitre: "Objectif : Féodalité T42–46, 8-10 villes, +5 aménités partout",
    icon: "🌅",
    sections: [
      {
        titre: "Tour 1 : settle vite",
        blocs: [
          { ul: [
            "En online speed, **chaque tour de settle perdu coûte cher** : settle T1, T2 seulement si le spot est clairement meilleur.",
            "Avec BBM, settle en place est presque toujours bien. Colline de plaine = base 2/2.",
            "Repère tes futurs spots au scouting : rivière (fresh water), 2/2 en premier ring, pas trop loin (chaque tour de marche compte).",
            "Pose des **map pins** pour tes 3-4 prochaines villes."
          ]}
        ]
      },
      {
        titre: "Build order : scout → scout → settler → settler",
        blocs: [
          { p: "Le même début dans quasi toutes les games. Les 2 scouts servent d'abord à l'**era score** (huttes, merveilles naturelles, premières rencontres) : sans eux tu rates le golden age classique." },
          { ul: [
            "Scouter dans des directions opposées ; viser la **toundra/les bords de carte** : BBM y pousse les city-states.",
            "Mettre la carte **double XP recon AVANT** de prendre la première hutte.",
            "Ensuite : le « 4-city opener » (settler settler settler) est standard ; adapte selon la place disponible.",
            "En parallèle : slot éco **God King** jusqu'à 12 foi de banked (panthéon safe) → puis **Urban Planning** pour le reste de la partie."
          ]}
        ]
      },
      {
        titre: "Techs & civics",
        blocs: [
          { h4: "Trois openers génériques" },
          { p: "**Commercial hub** (le plus standard — Persia, Cree…), **Harbor** (civs côtières), **Holy site** (civs à foi — Australie, Khmer, Norvège). Le squelette ci-dessous est celui du commercial opener, transférable presque partout." },
          { h4: "Techs" },
          { ul: [
            "**Rush Currency avec 3 techs seulement** (Pottery → Writing → Currency). Exception : Animal Husbandry/Mining tôt si builder de hutte ou ressources à améliorer.",
            "Ensuite : pathing vers **Apprenticeship** (+1 prod sur les mines), à faire atterrir en même temps que Féodalité, puis **Engineering** (aqueducs pas chers posés tôt).",
            "Hard-tech Feudalism-side : ne PAS hard-tech Apprenticeship (le boost = 3 mines, trivial pendant la vague de builders)."
          ]},
          { h4: "Civics" },
          { ul: [
            "**Foreign Trade → Early Empire** (l'inspiration « 6 pop » passe toute seule) → **State Workforce** (boost par le 1er district) → **Political Philosophy**.",
            "Early Empire et State Workforce donnent chacun un titre de gouverneur : super important.",
            "Après Political Philosophy : cap sur **Feudalism** (via Drama & Poetry non finie plus tôt, Recorded History…)."
          ]}
        ]
      },
      {
        titre: "Panthéon",
        blocs: [
          { ul: [
            "Deux options génériquement sûres : **City Patron Goddess** (+40% prod districts dans les villes sans district) et **Religious Settlements** (+20% prod colons + tuiles gratuites).",
            "Goddess of the Hunt seulement avec 4+ camps (nerfée en BBG) — et elle te bloque le double-chop des cerfs sous forêt.",
            "Les civs à panthéon dédié (Earth Goddess pour Curtin, River Goddess pour Jayavarman…) passent devant."
          ]}
        ]
      },
      {
        titre: "Gov Plaza très tôt + Audience Chamber",
        blocs: [
          { p: "Erreur classique de débutant : retarder la Government Plaza. C'est un district **moins cher** que les autres, qui donne **un titre de gouverneur à la pose ET un au bâtiment**, et +1 adjacence à tous les districts voisins." },
          { ul: [
            "Bâtiment : **Audience Chamber** → +3 food +3 housing dans chaque ville avec gouverneur → **répartis tes titres** dans les villes qui manquent de food (au lieu de tout mettre sur un seul gouverneur).",
            "**Magnus** (+40% sur les chops) dans la ville à forêts : tous les chops passent par lui. Sa promo de gauche : +food/prod sur les routes internes entrantes.",
            "Ensuite Moksha/Pingala : les gouverneurs early servent la food, la prod, la culture.",
            "Le premier grand marchand (+1 capacité de route) se prend en courant **2 projets commerciaux** (2 × 23 prod ≈ un market à 60) — le seul marchand qui vaut des projets early."
          ]}
        ]
      },
      {
        titre: "Gouvernement : Autocracy → Classical Republic",
        blocs: [
          { ul: [
            "**Autocracy d'abord** (BBG) : +1 food +1 prod par ville avec monument + district, +1 à tous les rendements sur palace/gov plaza.",
            "Dès que l'Audience Chamber est finie, tu débloques la carte **Autocratic Legacy** (le même effet en carte) → passe **Classical Republic** (aménités + housing) en gardant l'effet.",
            "Cartes early types : double XP recon (scouting), Urban Planning, carte colons quand tu produis des colons, **Serfdom** dès Féodalité, Charismatic Leader / « 1er envoy compte double » selon les quêtes de city-states."
          ]}
        ]
      },
      {
        titre: "Golden age classique : la dédicace",
        blocs: [
          { ul: [
            "**Pen, Brush and Voice** (+2 culture +1 or par district) pour les commercial/harbor openers : c'est ce qui t'amène à Féodalité vite.",
            "**Monumentality** pour les holy site openers : colons et builders à la foi.",
            "Free Inquiry = mauvais early (la science ne sert à rien avant les builders). Drums of War : uniquement en teamer pour un war timing."
          ]}
        ]
      },
      {
        titre: "Féodalité T42–46 : le tournant de la partie",
        blocs: [
          { p: "**Serfdom** : builders à 5 charges. Atteindre 100 charges sans Serfdom coûte plus de 2× plus cher (chaque builder renchérit le suivant). C'est LA carte qui définit la partie." },
          { ul: [
            "**Pré-construis** tes builders les derniers tours avant Féodalité, ne les finis qu'avec la carte slottée.",
            "Puis : **2-3 builders par ville**, améliorer quasiment toutes les tuiles travaillées.",
            "**Chopper bois/jungle sur collines → mines** (Apprenticeship tombe au même moment : +1 prod/mine). Les cerfs sous forêt se choppent 2 fois.",
            "**Bois en terrain plat → scieries** (pas de chop : les villes plates n'auraient plus de prod à long terme).",
            "Villes plates : **watermill + triangle de fermes** (BBG : watermill = +1 prod sur les fermes).",
            "Tous les chops passent dans la ville de Magnus quand c'est possible ; chops sur les merveilles en cours pour les accélérer.",
            "Une fois la vague finie : retire Serfdom, la carte a fait son travail."
          ]}
        ]
      },
      {
        titre: "Urbanisme : planifier les zones industrielles dès T10",
        blocs: [
          { ul: [
            "**Aqueduc** : adjacent au city center + rivière/montagne. **Zone industrielle entre 2 aqueducs** (+2 chacun en BBG) = IZ à +5/+8.",
            "Choisis tes spots de villes pour permettre ces setups → villes **serrées** (les districts se boostent entre eux, les AoE couvrent tout).",
            "Pose les aqueducs tôt (districts pas chers) même si l'IZ vient plus tard.",
            "Le Colisée a sa « tuile en or » : celle qui touche le max de city centers à ≤6 tuiles — réserve-la.",
            "Ne settle pas une ville qui a besoin d'améliorations pour être bonne tant que tu n'as pas Féodalité."
          ]}
        ]
      },
      {
        titre: "Checklist de sortie d'early game (~T50)",
        blocs: [
          { ul: [
            "8–10 villes, toutes avec commercial hub + trader interne vers la capitale.",
            "Féodalité passée, vague de builders finie, mines partout, luxes toutes améliorées.",
            "+5 aménités (ecstatic) dans un max de villes, Colisée pris.",
            "Gov plaza + Audience Chamber, gouverneurs répartis, Magnus opérationnel.",
            "Aqueducs posés, spots d'IZ réservés, campus discountés posés là où c'est bon.",
            "Prochain objectif : la science (voir Mid game)."
          ]}
        ]
      }
    ]
  },

  {
    id: "guide-mid",
    titre: "Mid game (T50–80)",
    sousTitre: "Objectif : 1 tech par tour, jusqu'aux research labs",
    icon: "⚔️",
    sections: [
      {
        titre: "L'objectif unique : 1 tech par tour",
        blocs: [
          { p: "Toute la mid game se résume à : monter la science jusqu'à compléter **une tech par tour**, et la culture pour suivre les civics clés. La science est soft-cappée à 1 tech/tour — d'où deux leviers :" },
          { ul: [
            "**L'overflow de science** : alterne techs chères et techs pas chères, garde l'overflow en banque. Chaque **eureka** (+50% avec Free Inquiry qui ajoute +10%) sur une tech chère = centaines de science gratuites.",
            "**Oxford University** : 2 techs gratuites à la construction — la seule vraie façon de dépasser le cap. Quasi obligatoire pour une victoire science.",
            "Chasse TOUS les eurekas possibles : 3 archers, 2 workshops, 2 forts (ingénieur militaire), 2 amphithéâtres, armory, mine sur niter, corps d'armée, 2 biplans…",
            "⚠ Bug BBG **Galileo** : l'activer purge tout ton overflow science. Ne l'active que quand l'overflow est dépensé."
          ]}
        ]
      },
      {
        titre: "Second golden age : Free Inquiry",
        blocs: [
          { ul: [
            "En MP le golden age médiéval tombe vers **T53–54**. Dedication : **Free Inquiry** (science = adjacence des commercial hubs/harbors) sauf si 3+ city-states scientifiques (alors Pen Brush reste envisageable).",
            "Combo : carte **Town Charters / doubling** d'adjacence commercial = la science de Free Inquiry double aussi (+30 à +48 science/tour immédiats).",
            "Raina (promo doubling commercial) triple la valeur dans sa ville. Free Inquiry expire vers T73 : profites-en à fond."
          ]}
        ]
      },
      {
        titre: "City-states & envoys",
        blocs: [
          { ul: [
            "**Bleus (science) = priorité absolue : 3 envoys dans chacun.** 4 CS bleus vs 0, c'est des libraries à 6 science au lieu de 2 et des universités à 12 au lieu de 4.",
            "Violets (culture) ensuite ; les jaunes/oranges comptent moins.",
            "Carte « le 1er envoy envoyé compte double » à slotter avant d'envoyer.",
            "**Kilwa Kisiwani** : suzerain de 2 CS d'une couleur = +15% de ce rendement dans tout l'empire. Broken si tu peux tenir tes CS.",
            "**Mexico City** : tous tes effets régionaux passent de 6 à 9 tuiles (factories, zoo, Colisée…) — énorme avec des villes serrées.",
            "**Ayutthaya** : culture = 15% du coût de prod de chaque bâtiment fini. Un des CS les plus forts du jeu — attends-toi à ce qu'on te le conteste."
          ]}
        ]
      },
      {
        titre: "Grands personnages : la machine à GPP",
        blocs: [
          { ul: [
            "**Campus Research Grants en boucle** dès ~T55 : pas pour la science du projet, pour les points de grand scientifique. En online speed, les projets rapportent **2× plus de GPP par production investie** (coûts de production halvés, coûts de GP halvés) : les projets sont LE moteur à grands personnages du multi.",
            "Cible : les **scientifiques Renaissance** — **Isaac Newton** (+2 science sur toutes les universités + une gratuite), **Ibn Khaldun** (+40% du bonus d'aménités : tes +16% deviennent +22,4% !), Galileo (cf. bug overflow).",
            "**Oracle** + Pingala **Grants** : +2 GPP par district, doublés = ta ville à Oracle devient une usine à grands personnages.",
            "**Great Library** : un eureka aléatoire chaque fois que QUELQU'UN recrute un grand scientifique — souvent 10+ eurekas sur la partie, dont les impossibles (square rigging…).",
            "Ingénieurs : projets de zone industrielle → **wonder engineers** en série (plus efficace en online speed que produire les merveilles à la main), **Da Vinci** (+3 culture par workshop en BBG), Brunelleschi.",
            "Si personne d'autre ne génère de points d'un type : ne passe jamais le grand personnage offert (le suivant ne serait pas proposé).",
            "Timing : un GP d'ère supérieure offert « en avance » coûte 2× plus cher — parfois attendre 1 tour le fait moitié prix."
          ]}
        ]
      },
      {
        titre: "Civics & cartes clés",
        blocs: [
          { ul: [
            "**Civil Engineering** : les cartes **+100% adjacence campus / zone industrielle**. Rush prioritaire.",
            "**The Enlightenment → Liberalism** (+1 aménité si 2 districts) : à slotter si tes villes sont à 1 aménité du palier.",
            "**Ideology** : fusionne les cartes campus+IZ en une seule = slot gratuit. ⚠ Une carte rendue obsolète ne s'applique PAS le tour où elle devient obsolète : anticipe le swap.",
            "**Retarder Mass Media** tant que la carte Retainers (aménité par garnison) te tient ecstatic — construis le zoo d'abord, puis prends Mass Media.",
            "Astuce culture : finis un civic pas cher avec beaucoup d'overflow banké (les civics « envoys » du haut d'arbre) pour one-turn le suivant.",
            "En vrai multi : **alliance de recherche** dès Civil Service + routes vers l'allié (cartes Wisselbanken) au lieu du tout-interne ; carte **Foreign Exchange** sur Raina si les routes de ton allié passent chez toi."
          ]}
        ]
      },
      {
        titre: "Industrialisation : le power spike",
        blocs: [
          { p: "LA tech de mid game à rush quand tu es safe : **+1 prod sur toutes les mines** + les **factories** (+6 prod à toutes les villes à ≤6 tuiles, ne stacke pas entre elles → 2-3 factories centrales suffisent)." },
          { ul: [
            "**Coal power plant** : prod = l'adjacence de l'IZ (doublée par la carte !) pour la ville, et ça stacke avec la factory. Une IZ +7 avec carte = +14 prod.",
            "Surveille le **charbon** : chaque bâtiment sous tension en consomme ; improve du coal avant les research labs, transitionne vers l'oil ensuite.",
            "Boost d'Industrialisation = 2 workshops : construis-les à l'avance."
          ]}
        ]
      },
      {
        titre: "Sécurité, espionnage, information",
        blocs: [
          { ul: [
            "**Encampment vers T55-60** : pour les eurekas (armory, forts via ingénieur militaire) ET pour générer des points de général visibles — pas de points = tu es une cible.",
            "**Intelligence Agency** au gov plaza : espion supplémentaire + taux de réussite. Objectif : un espion à 2 promotions → mission **Listening Post** = +2 visibilité diplomatique = **+6 force sur toutes tes unités** (doublé chez Gengis !).",
            "Dès que l'espion a 2 promos : plus AUCUNE mission risquée, il ne fait plus que la diplo viz.",
            "**Consulate** puis Chancery : influence, contre-espionnage, science par espion tué.",
            "**Terracotta Army** (BBG) : promotion gratuite pour l'espion + tes archéologues ignorent les frontières — et tu la dénies aux autres.",
            "Alhambra : slot de carte militaire ; Forbidden City : slot wildcard ; Jebel Barkal (BBG) : +1 aménité par ressource stratégique à ≤4 tuiles ; Angkor Wat : +1 pop +1 housing partout."
          ]}
        ]
      },
      {
        titre: "Le grand choix post-Industrialisation",
        blocs: [
          { p: "Après Industrialization, deux routes. C'est le choix le plus important de la mid game :" },
          { ul: [
            "**Combustion (tanks)** : le timing d'attaque le plus violent du jeu — rien de pré-moderne ne tient un tank. Donne aussi **Steel** (urban defenses = murailles massives partout) → c'est AUSSI la route safe. Un kill propre = pillages massifs qui peuvent te faire dépasser en science le joueur parti research labs.",
            "**Chemistry (research labs)** : la route greed pure. Seulement si tu es vraiment safe : pas de Steel, et les AT crews (2 MVT) se font contourner par les tanks (4 MVT). Sans artillerie tu ne perceras jamais des steel walls en face.",
            "Règle débutant : **combustion d'abord, toujours** — tes villes deviennent quasi imprenables, tu joues détendu.",
            "**Refining avant Steel** (sauf si attaqué : Steel immédiat) : chaque tour d'accumulation d'oil compte."
          ]}
        ]
      },
      {
        titre: "Gouvernement T3 & transition militaire",
        blocs: [
          { ul: [
            "**Communism** si tu tournes aux routes internes ; **Democracy** si tu trades vers alliés/city-states. Power spike énorme dans les deux cas.",
            "**Military Academies partout** (BBG : **+2 oil/tour chacune** + corps/armées produits directement à prix réduit) : c'est l'oil qui limite tes tanks/artillerie late game.",
            "**Fighters = la meilleure défense du jeu** : déployés, les unités terrestres ne passent pas dessous ; en écran sur tes frontières = vision + anti-sneak.",
            "**Railroads** : coût de mouvement 0,25 (une unité 2 MVT fait 8 tuiles). La guerre late game se gagne sur le réseau ferré. Connecte encampments et front ; era score à la 1re connexion entre villes.",
            "**Archéologues** : 6 culture/tour par artefact en BBG, ×2 si thématisé (3 artefacts même ère, civs différentes). Achète-les à l'or.",
            "1 encampment OU 1 aerodrome par ville (pas les deux : l'un des deux serait gâché). À ce stade, quand tu n'as plus rien à construire : **des unités** — des pré-builds de cuirassiers à upgrade en tanks."
          ]}
        ]
      },
      {
        titre: "Réalité multi vs sim solo",
        blocs: [
          { p: "Les chiffres des vidéos solo (tous les great people, toutes les merveilles, tous les CS sans contestation) ne sont **pas atteignables en lobby humain** : les Renaissance scientists seront contestés, Ayutthaya bloqué au World Congress, le Colisée parfois volé. Ne te compare pas à la sim — compare-toi aux timings (Féodalité, 1 tech/tour, research labs)." }
        ]
      }
    ]
  },

  {
    id: "guide-late",
    titre: "Late game (T80+)",
    sousTitre: "L'infra est finie : unités, win condition, et rien d'autre",
    icon: "🚀",
    sections: [
      {
        titre: "Le late game commence quand l'infra s'arrête",
        blocs: [
          { p: "Vers T80 (research labs + gouvernement T3), tu n'as plus de bâtiment de rendement à faire. **Research lab dans chaque ville** (+ Nuclear Program : +3 science par lab en BBG), puis la production ne sert plus qu'à deux choses : l'armée et les projets de victoire." },
          { ul: [
            "Sewers/granaries pour décapper le housing des villes qui poussent encore.",
            "Broadcast centers/stock exchanges : seulement si tu as l'énergie et un intérêt réel.",
            "Tier 4 (BBG récent) : **Corporate Libertarianism** = 50% prod unités +5 force — version améliorée du fascisme, à viser si guerre."
          ]}
        ]
      },
      {
        titre: "Victoire scientifique",
        blocs: [
          { ul: [
            "Ordre standard : **Combustion (sécurité) → Rocketry (satellite terrestre) → Satellites (alunissage) → Nanotechnology (colonie martienne) → Smart Materials/lasers**.",
            "Gov plaza T3 : **Royal Society** si greed total (un builder 5 charges = +10% d'un projet spatial) ; sinon **War Department** (soigne 20 PV par kill — énorme avec toutes les unités de support ennemies à farmer).",
            "**Mur de fighters** déployés sur les frontières : vision totale, zéro sneak attack possible.",
            "Pendant que ça recherche : produis de l'armée en continu. Un lead sans armée est un lead volé."
          ]}
        ]
      },
      {
        titre: "La guerre late game",
        blocs: [
          { ul: [
            "**Le pillage rapporte des rendements de fou** : si un voisin est faible et que tu es fort, le tuer/le piller est souvent le meilleur « bâtiment » de ta fin de partie.",
            "**Artillerie obligatoire** contre les steel walls (les tanks seuls n'en viennent pas à bout) ; observation balloons en support.",
            "Réseau ferré → tes armées se téléportent d'un front à l'autre.",
            "Contre un joueur culture (type Teddy + Mustangs + Their Finest Hour) : les avions ennemis sont intuables en air-air → passer par **Manhattan Project / nukes**.",
            "Nukes = la réponse finale à la plupart des blocages late game."
          ]}
        ]
      },
      {
        titre: "Victoire culturelle (si c'est ton plan)",
        blocs: [
          { ul: [
            "Haut d'arbre tech : film studios (Radio) puis **Computers** (+50% tourisme en BBG 7.4, buffé depuis 7.4 !).",
            "**Cultural Hegemony → croyance Halu** : choisir les promotions des rock bands (**Space Rock / Album Cover Art**) → <10% de mort par concert au tier 3, jusqu'à 10 000+ tourisme/concert avec les CD sales.",
            "**Natural History Museum** au gov plaza (4 slots de great works) + **Moksha curator** : stacker les œuvres dans UNE ville double leur tourisme.",
            "Acheter les great works des autres civs = ta culture monte, la leur descend.",
            "**Buffs 7.4** : merveilles = 5 tourisme de base (au lieu de 2), seuil de touristes abaissé à 150/joueur — la victoire culture est nettement plus rapide qu'avant.",
            "Rappel : c'est la victoire la plus chaotique — la culture ADVERSE augmente le tourisme dont tu as besoin. Surveille le plus gros cultureux du lobby."
          ]}
        ]
      }
    ]
  },

  {
    id: "guide-rendements",
    titre: "Gros rendements & tes records",
    sousTitre: "Pourquoi les pros ont des chiffres de fou à T50 — et où tu en es",
    icon: "📈",
    sections: [
      {
        titre: "La boucle des gros rendements",
        blocs: [
          { p: "Il n'y a **pas de secret unique** : c'est un empilement de multiplicateurs, chacun banal, dont le produit est énorme. Dans l'ordre où ils s'installent :" },
          { ul: [
            "**T1–15 : le tempo.** Settle T1, scout scout settler settler, districts posés au prix plancher (3 techs). Chaque tour d'avance se compose pendant 100 tours.",
            "**T15–40 : le wide + les internes.** 8-10 villes serrées, un trader interne par ville → les villes poussent sans bonne food.",
            "**T42–46 : Féodalité.** 15+ charges de builder d'un coup, chops Magnus +40%, mines + Apprenticeship → la prod empire double en 10 tours.",
            "**T45–55 : les aménités.** Toutes les luxes améliorées + Colisée + trades = +5 partout = **+16% sur TOUS les rendements**. C'est le multiplicateur que les débutants ratent.",
            "**T53+ : Free Inquiry** + cartes +100% adjacence : tes commercial hubs crachent de la science, tes campus doublent.",
            "**T55–70 : les great people.** Campus Research Grants → Newton, Ibn Khaldun (+40% du bonus aménités) ; Oracle+Pingala ; Kilwa +15%.",
            "**T60+ : 1 tech/tour** + Oxford pour dépasser le cap. À partir de là le score visible explose — mais tout s'est joué T1–55."
          ]},
          { p: "Corollaire : si tes rendements T75 te semblent bas, la cause est presque toujours **avant T55** (Féodalité tardive, luxes non améliorées, paliers d'aménités ratés, pas assez de villes), pas dans ton late game." }
        ]
      },
      {
        titre: "Repères de timing (online speed, BBG, FFA)",
        blocs: [
          { table: {
            head: ["Tour", "Jalon attendu"],
            rows: [
              ["T1", "Capitale posée (T2 max)"],
              ["~T17", "Panthéon (12 foi via God King ou huttes)"],
              ["T25–35", "3-4 villes, commercial hubs posés, gov plaza + Audience Chamber"],
              ["T42–46", "**Féodalité** → vague de builders (2-3 par ville)"],
              ["~T50", "8-10 villes, mines partout, +5 aménités, Colisée"],
              ["T53–54", "Golden age médiéval → **Free Inquiry**"],
              ["T55–60", "Campus + libraries partout, Campus Research Grants, encampment"],
              ["T60–65", "**1 tech par tour** atteint ; universités"],
              ["~T67", "Consulate (ne pas trop retarder)"],
              ["T70–75", "Industrialisation exploitée : factories, coal plants, Oxford"],
              ["~T80", "Research labs partout, gouvernement T3 → late game"]
            ]
          }},
          { p: "Référence extrême : le record CPL science avec les Cris tournait à **~500 science/tour vers T80, sans research labs**. En lobby humain normal, être à 1 tech/tour à T65 te met déjà dans le haut du panier." }
        ]
      },
      {
        titre: "Tes records actuels (T75, vs bots Prince)",
        blocs: [
          { table: {
            head: ["Partie", "Science", "Culture", "Or", "Foi", "Pop"],
            rows: [
              ["Tokugawa (Japon)", "+300,9", "+350,1", "+191,2", "+11", "119 (10 villes)"],
              ["John Curtin (Australie)", "+290,7", "+284,1", "+94,2", "+353,7", "~114"]
            ]
          }},
          { ul: [
            "**Points forts** : la culture Tokugawa (routes internes × districts, ça marche) et la foi Curtin (+353/tour : Earth Goddess + breathtaking exploités).",
            "**Question à te poser** : à quel tour as-tu eu Féodalité ? Combien de villes à T50 ? Combien de villes ecstatic (+5) à T55 ? Ce sont ces trois chiffres qui déterminent ton T75.",
            "**Prochains paliers** : viser ~350-400 science à T75, puis le vrai objectif — 1 tech/tour à T65 avec l'or de Free Inquiry converti en science.",
            "Note : les bots Prince ne contestent ni merveilles ni great people ni city-states — tes chiffres solo seront toujours ~20-30% au-dessus de ce que tu feras en lobby humain. C'est normal."
          ]}
        ]
      },
      {
        titre: "Checklist mentale par phase",
        blocs: [
          { ul: [
            "**Chaque tour early** : est-ce que toutes mes villes travaillent des tuiles ≥2 food ? Mon or est-il en train de dormir ?",
            "**Avant chaque pose de district** : le prix est-il verrouillé au plus bas ? Boost-il l'adjacence d'un futur district ?",
            "**T40** : mes builders sont-ils pré-construits pour Serfdom ? Apprenticeship arrive-t-elle ?",
            "**T50** : toutes mes luxes améliorées ? Colisée sécurisé ? +5 partout ?",
            "**T55** : Free Inquiry + carte doubling ? 3 envoys dans chaque CS bleu ? Grants en boucle ?",
            "**T65** : 1 tech/tour ? Oxford planifiée ? Espion niveau 2 en diplo viz ? Des unités et un encampment visibles ?",
            "**T75** : le choix combustion/chemistry est-il fait en connaissance des city centers ennemis ?"
          ]}
        ]
      }
    ]
  },

  {
    id: "tier-list",
    titre: "Tier list BBG 7.4.6",
    sousTitre: "FFA & Teamer — estimation croisée, tes civs surlignées en or",
    icon: "🏆",
    sections: [
      {
        titre: "Méthodologie (à lire avant de râler)",
        blocs: [
          { p: "Il n'existe **aucune tier list officielle publiée pour BBG 7.4.6**. Celle-ci croise quatre sources : la tier list communautaire BBG (TierMaker, 27 listes agrégées), le classement multi de Herson (BBG 6.0), les **changelogs officiels 7.x** (civ6bbg.github.io) et la méta CPL. Fiabilité : bonne sur les extrêmes (S+/S et bas de tableau), discutable au milieu — comme toutes les tier lists." },
          { ul: [
            "Changements 7.4 qui pèsent sur le classement : **victoire culturelle buffée** (merveilles 5 tourisme de base, seuil touristes 150, Computers +50%) → les civs culture montent ; **nerfs navals** (Embolon, Line of Battle) → les civs navales baissent ; **+1 aménité de base hors capitale** → le wide est plus facile pour tout le monde.",
            "Contexte : FFA 10 joueurs Pangaea online speed. En teamer, le classement change du tout au tout (le rôle war/sim prime).",
            "Les leaders du **Leader Pass** (Yongle, Sejong, Ludwig, Theodora, Tubman…) sont intégrés — BBG 7.x les rééquilibre aussi.",
            "Tes civs sont **surlignées en or**."
          ]}
        ]
      },
      {
        titre: "FFA",
        blocs: [
          { tiers: [
            { label: "S+", color: "#f0b232", items: [
              { nom: "Babylone — Hammurabi", note: "Consensus n°1 : bibliothèques = eurekas gratuits (rework BBG) + bâtiment offert au 1er district de chaque type — il paie tout moins cher que le lobby. Perma-ban fréquent.", mine: true }
            ]},
            { label: "S", color: "#e8556d", items: [
              { nom: "Corée — Seondeok", note: "Seowon = science plate massive, build simple, consistance maximale." },
              { nom: "Russie — Pierre", note: "Lavra + Work Ethic : le moteur foi/prod le plus fiable, GPP démesurés." },
              { nom: "Maya — Lady Six Sky", note: "Villes serrées autour de la capitale, campus tôt — taillée pour l'online speed." },
              { nom: "Inca — Pachacuti", note: "Terrasses = pop+prod énormes, spawn montagne = défense gratuite (Warak'aq retouché en 7.x)." },
              { nom: "Chine — Yongle (Leader Pass)", note: "Or/foi/science par ville à forte pop : une éco qui scale sans condition de land." }
            ]},
            { label: "A", color: "#a78bfa", items: [
              { nom: "Japon — Tokugawa", note: "Ton main : clustering + routes internes, très fort si on te laisse sim.", mine: true },
              { nom: "Australie — John Curtin", note: "Ton main : adjacences breathtaking, éco monstrueuse, finish naval.", mine: true },
              { nom: "Khmer — Jayavarman VII", note: "En apprentissage : holy sites rivière + Work Ethic + discounts (cf. fiche v2).", mine: true },
              { nom: "Cri — Poundmaker", note: "En apprentissage : routes internes ++, record science CPL, idéal débutant.", mine: true },
              { nom: "Perse — Cyrus", note: "L'opener commercial de référence, internes boostées, surprise war possible." },
              { nom: "Éthiopie — Menelik", note: "Foi sur collines, très dur à punir, scale culture/science." },
              { nom: "Mali — Mansa Musa", note: "Or/foi infinis, achète sa partie — nerfé mais toujours solide." },
              { nom: "Ottomans — Soliman", note: "Polyvalent, gros mid-game, menace militaire crédible." },
              { nom: "Amérique — Teddy (Bull Moose)", note: "Grand gagnant des buffs culture 7.4 : appeal + tourisme rapide." },
              { nom: "Gaule — Ambiorix", note: "Mines culture + oppidum : toujours bon après les nerfs successifs." },
              { nom: "Corée — Sejong (Leader Pass)", note: "Variante de la machine à science coréenne, très consistante." },
              { nom: "Allemagne — Ludwig II (Leader Pass)", note: "Culture par merveilles en cours : profite direct des buffs culture 7.4." },
              { nom: "Byzance — Theodora (Leader Pass)", note: "Foi → science sur les holy sites : la meilleure Byzance en FFA." }
            ]},
            { label: "B", color: "#4f9cf7", items: [
              { nom: "Norvège — Harald Varègue", note: "Niche mais réel : victoire religieuse viable (cf. fiche) — dépend du lobby.", mine: true },
              { nom: "Angleterre — Eleanor", note: "Loyauté oppressante en spawn serré, sinon moyenne." },
              { nom: "Pays-Bas — Wilhelmine", note: "Rivières + polders : land-dépendante, nerfs navals 7.4 ne l'aident pas." },
              { nom: "Allemagne — Barberousse", note: "Hansa + district bonus : solide, mais lente à décoller en online speed." },
              { nom: "Écosse — Robert Bruce", note: "Science par villes heureuses, Highlander retouché 7.4 — correcte sans plus." },
              { nom: "Byzance — Basile II", note: "Très fort… si la religion passe ; en FFA c'est un pari." },
              { nom: "USA — Harriet Tubman (Leader Pass)", note: "Espionnage surpuissant + prod cachée : sous-cotée mais réelle." },
              { nom: "Mali — Sundiata Keita (Leader Pass)", note: "Or→culture : correct, en dessous de Mansa." },
              { nom: "Chine — Wu Zetian (Leader Pass)", note: "Espions à la foi (fix bug 7.4) : gimmick sympa, impact moyen." },
              { nom: "Kongo — Nzinga Mbande (Leader Pass)", note: "Bonus même continent : dépend du spawn." }
            ]},
            { label: "C", color: "#34d399", items: [
              { nom: "Scythie / Macédoine / Sumérie / Zoulou", note: "Kits 100 % guerre : en FFA online speed, une agression early non létale te sort de la partie AVEC ta victime. S+ à S en teamer, C en FFA." },
              { nom: "Rome — Trajan", note: "Solide partout, exceptionnel nulle part : le tempo online speed le laisse derrière les civs à levier." },
              { nom: "Vietnam — Bà Triệu", note: "Quasi intuable chez elle… mais un kit 100 % défensif ne gagne pas une FFA." },
              { nom: "Canada — Laurier", note: "Safe (pas de guerres surprises contre lui) mais sans dents ni levier éco fort." },
              { nom: "Kongo — Mvemba a Nzinga", note: "Reliques/grands travaux sans religion : de l'éco, pas de plan de victoire clair." },
              { nom: "Égypte — Cléopâtre", note: "Merveilles + rivières corrects, rien qui scale vraiment." },
              { nom: "Amérique — Teddy (Rough Rider)", note: "La mauvaise version de Teddy — le Bull Moose est en A." },
              { nom: "Espagne — Philippe II", note: "Kit religion/inter-continents presque vide sur Pangaea." },
              { nom: "Phénicie — Didon", note: "Côtière pure : les nerfs navals 7.4 + low sea l'enterrent." },
              { nom: "Norvège — Harald (persona de base)", note: "Raids côtiers sans le kit religieux du Varègue : niche Pangaea." },
              { nom: "Maori — Kupe", note: "Départ océan à contre-courant des réglages Pangaea Ultima / low sea." },
              { nom: "Portugal — João III", note: "Routes maritimes vers les autres : low sea + nerfs = très land-dépendant." },
              { nom: "Mapuche — Lautaro", note: "Anti-golden-age amusant, beaucoup trop situationnel." }
            ]},
            { label: "D", color: "#6b7280", items: [
              { nom: "Géorgie — Tamar", note: "Le meme du pire pick reste vrai : murailles + foi ne menacent personne et ne scalent pas." },
              { nom: "Inde — Gandhi", note: "Passif religieux sans tempo : personne ne le craint, rien ne snowball." },
              { nom: "France — Catherine de Médicis", note: "L'espionnage paie à une ère où la FFA est déjà pliée." },
              { nom: "Angleterre — Victoria", note: "Kit colonial multi-continents vide sur Pangaea (l'Eleanor loyauté est en B)." },
              { nom: "France — Catherine la Magnifique", note: "Merveilles/luxes sans protection : cible favorite des lobbies." }
            ]}
          ]},
          { p: "Grille de lecture : **S+/S** = pick que tu dois justifier de NE PAS ban ; **A** = très fort avec un plan clair ; **B** = viable, demande le bon spawn ou le bon lobby ; **C** = tu pars avec un handicap ; **D** = pick de troll (ou de très grand joueur). Les tiers C/D listent les leaders qu'on voit passer — le reste du roster non cité gravite en C." }
        ]
      },
      {
        titre: "Teamer (2v2 → 4v4)",
        blocs: [
          { p: "En teamer, on classe par **rôle** : les warmongers portent les timings, les sims (Babylone/Corée/Maya restent S en rôle sim) fournissent la science et les upgrades. Une équipe équilibrée mixe les deux." },
          { tiers: [
            { label: "S+", color: "#f0b232", items: [
              { nom: "Scythie — Tomyris", note: "La reine du teamer : cavalerie à moitié prix, heal on kill, timings T35-45 létaux." },
              { nom: "Gran Colombie — Bolívar", note: "+1 mouvement permanent = tempo d'attaque et de rotation inrattrapable." },
              { nom: "Mongolie — Gengis Khan", note: "Ton pick teamer : Kheshigs + diplo viz doublée = vagues dévastatrices (cf. fiche).", mine: true }
            ]},
            { label: "S", color: "#e8556d", items: [
              { nom: "Aztèques — Moctezuma", note: "Ton pick teamer : Eagle Warriors early + +1 force/luxe + rush districts (cf. fiche).", mine: true },
              { nom: "Macédoine — Alexandre", note: "Zéro war weariness, eurekas par conquête : le partenaire de push idéal." },
              { nom: "Hongrie — Matthias Corvin", note: "Lève les armées des cité-états à prix cassé avec +2 mouvements : spike instantané." },
              { nom: "Sumérie — Gilgamesh", note: "War carts T10 + bonus en guerre commune : le meilleur early duo." },
              { nom: "Zoulou — Shaka", note: "Corps/armées en avance sur tout le monde : mid-game push écrasant." },
              { nom: "Byzance — Basile II", note: "En teamer la religion se protège à deux : cavalerie qui rase tout." }
            ]},
            { label: "A", color: "#a78bfa", items: [
              { nom: "Inde — Chandragupta", note: "Le meilleur late-war du jeu : guerre territoriale +mvt +force." },
              { nom: "Perse — Cyrus", note: "Surprise war +2 mouvements, éco solide : flexible war/sim." },
              { nom: "Rome — Trajan", note: "Tempo d'expansion, legions correctes, backbone fiable." },
              { nom: "Japon — Tokugawa/Hojo", note: "Sim compact difficile à raid, campements moitié prix (Hojo).", mine: true },
              { nom: "Babylone / Corée / Maya", note: "S en rôle sim pur : la science qui upgrade les units du warmonger." }
            ]},
            { label: "B", color: "#4f9cf7", items: [
              { nom: "Ottomans — Soliman", note: "Timing bombards/janissaires correct, bon second couteau war." },
              { nom: "Inca — Pachacuti", note: "Sim intouchable derrière ses montagnes — mais n'aide pas offensivement." },
              { nom: "Vietnam — Bà Triệu", note: "Bloque un front à elle seule : l'assurance-vie de l'équipe." },
              { nom: "Allemagne — Barberousse", note: "Sim large à districts, décolle tard mais décolle fort." },
              { nom: "Rome — Trajan", note: "Backbone fiable, tempo d'expansion, ni pic ni faiblesse." },
              { nom: "Hongrie sans CS proches / Byzance sans religion", note: "Les picks S conditionnels retombent ici quand leur condition rate." }
            ]},
            { label: "C", color: "#34d399", items: [
              { nom: "Les civs sans rôle", note: "Ni burst de guerre, ni éco de sim : Canada, Géorgie, Gandhi, Kongo, Espagne… En teamer, un joueur sans rôle = une équipe à un joueur de moins." }
            ]}
          ]}
        ]
      },
      {
        titre: "Sources",
        blocs: [
          { ul: [
            "Tier list communautaire BBG — TierMaker (27 listes agrégées).",
            "« ALL CIVS Ranked for MULTIPLAYER Civ 6 » — Herson (BBG 6.0, sept. 2024).",
            "Changelogs officiels BBG 7.4 / 7.5 — civ6bbg.github.io.",
            "Méta CPL (cpl.gg) & parties commentées des transcripts.",
            "⚠ À re-vérifier à chaque patch BBG : les tiers bougent (ex. nerfs navals 7.4, buffs culture 7.4)."
          ]}
        ]
      }
    ]
  },

  {
    id: "guide-tips",
    titre: "Bilan des vidéos de tips",
    sousTitre: "Tout ce que racontent les 7 vidéos, trié — et confronté à la méta multi",
    icon: "💡",
    sections: [
      {
        titre: "⚠ Lire d'abord : solo ≠ multi",
        blocs: [
          { p: "Tes vidéos mélangent du contenu **multi compétitif** (Herson) et du contenu **solo/débutant** (PotatoMcWhiskey, JumboPixel, TheCivLifeR…). Certains conseils solo sont FAUX en multi BBG. Les contradictions sont signalées dans chaque section, et résumées ici :" },
          { table: {
            head: ["Sujet", "Conseil solo (vs IA)", "Méta multi BBG"],
            rows: [
              ["Ouverture", "Slinger/warrior d'abord, scouts « inutiles »", "**Double scout obligatoire** (era score, huttes) — pas de barbares en MP"],
              ["Granary/watermill", "« Ne jamais construire »", "Granary utile mid-game (housing cap) ; watermill BBG = +1 prod fermes"],
              ["Guerre early", "Meilleure expansion (l'IA offre des villes développées)", "Rarement rentable en FFA : les humains se défendent et le lobby te punit"],
              ["Délégations", "Toujours envoyer à l'IA", "Sans objet entre humains (mais la diplomatie chat compte)"],
              ["Religion/merveilles", "« High risk, à éviter »", "Dépend de la civ : holy site openers = méta entière (Russie, Khmer, Australie)"],
              ["Re-roll spawn", "Conseillé si mauvais start", "Impossible — d'où BBM/BCY qui égalisent les spawns"]
            ]
          }}
        ]
      },
      {
        titre: "Les 5 erreurs solo → multi",
        src: "Herson",
        blocs: [
          { h4: "1. Le rythme militaire (le plus important)" },
          { ul: [
            "Ni sous-préparer, ni SUR-préparer : produis juste assez pour dissuader. Cinq indicateurs à checker chaque tour :",
            "**Ressources stratégiques** des autres joueurs : accumuler du fer early = signal d'agression (il faut aller chercher Bronze Working exprès).",
            "**Routes commerciales entrantes** : une route internationale vers toi en early (rendements pourris) = il construit une ROUTE vers toi = prélude d'attaque. Déclare la guerre pour couper la route si possible.",
            "**Points de grand général** : visibles chez tous → encampment quelque part = guerre probable. (Les points de grand amiral = harbor, inoffensif.)",
            "**Ruban de force militaire** en haut d'écran (activer « always show » dans les options).",
            "**Force des city centers** = meilleure unité produite −10 (+2/district). Un 10 = que des warriors ; un 20 = horseman/swordsman. À chaque nouvelle ère, **produis au moins 1 unité de l'ère** pour gonfler tes villes et cesser d'être une cible."
          ]},
          { h4: "2. Les améliorations de tuiles" },
          { ul: [
            "Le coût des builders scale avec le NOMBRE déjà produit → **moins tu en fais avant Serfdom, moins chers seront ceux de la vague**.",
            "Toute l'early game est déformée par ça : la culture > science early PARCE QU'il faut Féodalité vite. Puis : chopper tout, improve tout — les builders se remboursent immédiatement en chops."
          ]},
          { h4: "3. Settle trop loin" },
          { ul: [
            "En online speed, les colons marchent à vitesse « standard » : **le temps de marche est un critère de spot au même titre que les yields**.",
            "Mieux vaut une ville « assez bonne » à 2 tours qu'une ville parfaite à 5. Les exceptions existent, mais rares."
          ]},
          { h4: "4. Les hotkeys (les tours sont simultanés !)" },
          { ul: [
            "Désactiver **l'auto unit cycling** (la caméra ne saute plus).",
            "**4** = lens colon (à spammer en scoutant) ; **B** = settle instantané (contre le vol de spot) ; **F** = fortifier (le bonus est instantané, fortifie en début de tour puis joue) ; **R** = attaque à distance ciblée — jamais de clic droit : si la cible bouge, ton archer avance dans le vide."
          ]},
          { h4: "5. Les projets de ville (le secret de l'online speed)" },
          { ul: [
            "Firaxis a mal ajusté l'online speed : coûts de production halvés ET coûts de grands personnages halvés → **les projets rapportent 2× plus de GPP par prod investie** qu'en standard.",
            "Conséquence : en multi, tu spammes Campus Research Grants / IZ projects pour les great people — Newton revient ~2,6× moins cher qu'en standard. C'est un pilier de la méta, pas une option."
          ]}
        ]
      },
      {
        titre: "Améliorations de tuiles & fermes",
        src: "Riddick Acidic",
        blocs: [
          { h4: "Lire le terrain" },
          { ul: [
            "Biomes : grassland 2 food, plains 1/1, toundra 1 food, désert/neige 0. **Collines +1 prod, bois +1 prod, jungle +1 food** — un bois sur colline = 4 yields, le top de l'early.",
            "Côte/lac = 1 food 1 or : faible… sauf **Auckland** suzerain (+1 prod, +2 à l'industriel) → si Auckland est sur la map, settle côtier devient bon.",
            "Lighthouse +1 food sur tuiles d'eau, shipyard +1 prod (tuiles NON améliorées), seaport +2 or."
          ]},
          { h4: "Les 8 améliorations standard" },
          { ul: [
            "**Mines** : partout sur collines + ressources ; buffées par ~4 techs (Apprenticeship, Industrialization…) — l'amélioration n°1 du jeu.",
            "**Chopping** : bois/ressource SUR COLLINE → chop puis mine par-dessus. ⚠ Vérifie que c'est bien une colline AVANT de chopper (chop sur plat = ville sans prod à vie).",
            "**Scieries** : 2 prod (GS), seule amélioration sans ressource hors ferme/mine ; Conservation permet de PLANTER des forêts en fin de partie (prod de secours pour villes plates).",
            "Pâturages (prod), camps (or), plantations (or, luxes = aménités), carrières (prod), fishing boats (food).",
            "Animal Husbandry en 1re tech révèle les **chevaux** : info stratégique gratuite."
          ]},
          { h4: "L'art des fermes" },
          { ul: [
            "**Féodalité : +1 food par paire de fermes adjacentes** → triangles de fermes (3 fermes qui se touchent = +6 food au total travaillé). Replaceable Parts : +1 par ferme adjacente (les nombres impairs deviennent bons).",
            "Formes : **triangles** (optimal), **lignes** qui serpentent (souple), « farm nunchucks » = 2 triangles reliés par une ligne. Tes fermes comptent même les fermes ADVERSES adjacentes.",
            "**Watermill** (ville sur rivière) : +1 food sur les ressources à fermes (blé, riz…) — combo triangle de fermes + watermill = villes plates viables.",
            "Flood plains : fertilisées par les crues (+food/prod), le **barrage** protège mais −50% de fertilisation → garde un builder « réparateur » (réparer ne coûte pas de charge).",
            "Sécheresses (GS) : frappent les zones plains/grassland sans eau ni végétation — laisse un bois/marais stratégique ou fais tes blobs de fermes près de l'eau."
          ]}
        ]
      },
      {
        titre: "Les 10 premiers tours",
        src: "JumboPixel",
        blocs: [
          { ul: [
            "**Bouge le warrior AVANT de settle** : l'info d'abord, la capitale ensuite. Settle T1-T3 (T4 grand max).",
            "Cherche les tuiles à **4 yields totaux** (2/2, bois sur colline) en premier ring ; fresh water systématiquement.",
            "Vision large : ta capitale + les 3-4 spots suivants se décident dans les 10 premiers tours (map pins).",
            "Techs : lis ton land — AH/Mining/Irrigation selon les ressources à améliorer, jamais de tech « dans le vide » (pas de Sailing sans côte à exploiter).",
            "Civics : Code of Laws → **Foreign Trade → Early Empire** (le boost « 2e continent » tombe tout seul en scoutant).",
            "⚠ Sa reco « slinger > scout » est du réflexe SOLO (barbares) : en multi BBG sans barbares, c'est double scout, point.",
            "Multi-queue de production pour enchaîner sans temps mort ; citizens : bascule food/prod à la main selon le besoin."
          ]}
        ]
      },
      {
        titre: "5 erreurs early game",
        src: "TheCivLifeR",
        blocs: [
          { ul: [
            "**Assez d'unités vs barbares** (solo) : 5-6 unités, tuer le scout barbare AVANT qu'il rentre au camp, vision = pas de spawn (fog busting). En multi BBG : sans objet (pas de barbares) — mais le principe « vision = sécurité » reste.",
            "**Pas de bâtiments « inutiles » early** : granary/watermill early = de la prod perdue vs settler/builder/military. ⚠ Nuance multi : granaries utiles mid-game quand les villes housing-cap, et le watermill BBG buffe les fermes — c'est le TIMING qui est en cause, pas le bâtiment.",
            "**Switch tes recherches à ~50%** si l'eureka/inspiration va tomber : finir une tech qu'un boost aurait payée = science brûlée. Alterne les recherches pour encaisser les boosts au meilleur moment.",
            "**Délégations turn 1** à chaque rencontre (solo/IA) : modificateur relationnel durable, ouvre amitiés et alliances de recherche.",
            "**Villes PROCHES** : adjacences de districts, AoE (factories, zoos, Colisée), défense mutuelle, moins de loyauté à gérer. « Si tu as la place pour 10 villes à T100, tu as gagné » — vrai en solo, et l'esprit reste vrai en multi (8-10 villes serrées)."
          ]}
        ]
      },
      {
        titre: "Guide débutant complet (deity)",
        src: "TheCivLifeR",
        blocs: [
          { h4: "Settle" },
          { ul: [
            "**Settle sur une luxe** si possible (yield + luxe gratuite), sinon **colline de plaine** (base 2/2 — le minimum city center est 2/1, il n'y a pas de maximum).",
            "Fresh water (vert foncé au lens colon) : +3 housing. Puis anticipe le PLAN de la ville : où iront campus/harbor/aqueduc/IZ avant même de settle."
          ]},
          { h4: "Un plan de victoire dès le départ" },
          { ul: [
            "**Science** : writing → campus → currency → industrialisation → chemistry → rocketry ; 10 villes T100 = quasi-garantie.",
            "**Culture** : theater squares, humanism (musées), foi pour les naturalistes, et **rock bands (Cold War)** = le vrai accélérateur final.",
            "**Domination** : rush antique = bronze working (épéistes) + béliers + ARCHERS (jamais de lanciers) ; médiéval = tours de siège + arbalétriers + man-at-arms ; renaissance = bombards (niter) obligatoires contre les murs.",
            "**Religieuse/diplomatique** : brain-dead vs IA — en multi, oublie (sauf Harald Varègue, cf. fiche).",
            "Garde tes unités EN VIE : les promotions valent plus que des unités neuves."
          ]},
          { h4: "Gouverneurs, sociétés secrètes, gouvernements" },
          { ul: [
            "Trio de base : **Magnus** (Provision : les colons ne coûtent plus de pop — énorme en spam de colons), **Pingala** (science+culture, la valeur la plus sûre), **Amani** (2 envoys dans un CS clé).",
            "Sociétés secrètes : **Owls of Minerva** = choix par défaut (envoys, slots éco, espions) ; **Voidsingers** si grosse génération de foi (le monument = foi, conversion foi→tout) ; **Vampires** pour la domination ; Hermetic Order = à éviter (ley lines trop aléatoires).",
            "Gouvernement T1 : **Classical Republic** par défaut ; Oligarchy si guerre early ; Autocracy si merveilles (mais cf. l'astuce BBG Autocracy→Legacy du guide early).",
            "Panthéon par défaut : **Religious Settlements** « do not pass go » ; sinon adapté au land (Lady of Reeds, God of the Forge en war…)."
          ]},
          { h4: "La vérité du solo" },
          { ul: [
            "Vs IA, **la guerre early est la meilleure expansion** : ses villes arrivent avec builders/districts déjà faits (l'IA triche en bonus de départ). Encercler une ville = siège = elle ne régénère plus.",
            "⚠ En FFA humain c'est l'inverse : une guerre early non létale te fait perdre la partie à toi ET à ta cible — les 8 autres joueurs sim tranquillement."
          ]}
        ]
      },
      {
        titre: "Bases utiles à vie",
        src: "PotatoMcWhiskey",
        blocs: [
          { ul: [
            "**Pense en « profit » de tuile** : chaque citoyen mange 2 food. Une tuile 3 food = +1 de profit ; une 2/2 = +2 ; une 4 food = +2. Une tuile 2 food nourrit juste son citoyen (profit 0). C'est LE bon cadre mental pour choisir les tuiles.",
            "Food > prod pendant les 2 premières ères ; la prod prend le dessus à partir du médiéval.",
            "**L'or early sert à acheter des tuiles à haut profit** (3/1, 2/2) — pas à dormir.",
            "**Era score par quêtes** : les eurekas/inspirations sont des quêtes lisibles à l'avance dans l'arbre — planifie-les (tuer 3 barbares = Bronze Working, etc.).",
            "**Fog busting** : les camps barbares spawnent à ≤7 tuiles d'une ville, uniquement dans le brouillard → garde de la vision (solo).",
            "**Flanking/support** : +2 par unité adjacente à l'attaque (max +12), pareil en défense — positionne AVANT de taper.",
            "**Loyauté** = pression de pop × distance (−10%/tuile) : settle « justifié » près de ton empire, les villes lointaines flippent.",
            "3 slingers avant Archery (upgrade moins cher que produire des archers), puis 2 crossbows = eurekas Machinery/Metal Casting en chaîne.",
            "Le combat : le plus gros chiffre gagne. Terrain défensif : colline +3, rivière +5, bois +3 (cumulables)."
          ]}
        ]
      },
      {
        titre: "10 tips pour bien débuter",
        src: "chaîne débutant",
        blocs: [
          { ul: [
            "Civ = un jeu de **collecte de ressources** (type Catan) : tout est accumulation/dépense de food, prod, science, culture, foi, or, influence. Pense flux, pas objets.",
            "Active **yield icons + HUD ribbon** (options → interface) : jauger sa force relative en un coup d'œil.",
            "**Joue « lean »** : le minimum d'unités pour survivre, le maximum en infrastructure — chaque marteau dans l'armée inutile est un marteau volé à ton empire.",
            "**Wide > tall** : plus de villes = plus de districts = plus de tout. 3-5 tuiles d'écart est OK.",
            "**Escorte tes civils** (formation escort) : un colon perdu = la pire perte du jeu.",
            "Barbares : tuer le scout avant qu'il rapporte, raser les camps tôt (solo).",
            "Reste **équilibré** science/culture quel que soit ton win con : en retard de science = militaire en retard = mort.",
            "Et… amuse-toi : teste des civs, perds des games, c'est le cycle normal de progression."
          ]}
        ]
      }
    ]
  },

  {
    id: "guide-review",
    titre: "Analyser ses parties",
    sousTitre: "Pas de replay natif dans Civ 6 — mais la data existe, voilà comment la récupérer",
    icon: "🔍",
    sections: [
      {
        titre: "Le vrai « replay » : tes autosaves",
        blocs: [
          { p: "Civ 6 n'a **pas de système de replay natif** (Civ V en avait un). La méthode des joueurs multi : transformer les autosaves en replay." },
          { ul: [
            "Options → Jeu : **sauvegarde auto à chaque tour** et **nombre d'autosaves conservées au maximum**. Les parties multi ont leur propre dossier d'autosaves.",
            "Dossier : **Documents\\My Games\\Sid Meier's Civilization VI\\Saves** (sous-dossiers Single/Multi).",
            "Après la partie, recharge les tours clés — **T17 (panthéon), T30 (expansion), T42-46 (Féodalité), T50, T60, T75** — et pose-toi les questions de la checklist (page Gros rendements).",
            "Exercice n°1 de progression : recharger une autosave et **rejouer le tour autrement** (autre pose de district, autre tech, autre achat) pour comparer."
          ]}
        ]
      },
      {
        titre: "CivVIReplay : la data de tout, tour par tour",
        blocs: [
          { p: "L'outil qui répond exactement à ta demande : il **parse les fichiers .Civ6Save** et rejoue la partie comme un replay, sans lancer le jeu." },
          { ul: [
            "Charge **un dossier entier d'autosaves** (Menu → Open Directory sur ton dossier Saves) → timeline complète de la partie, tour par tour.",
            "Affiche : carte + unités, villes et districts (transparents pendant la construction), **techs/civics avec tours restants**, religion/panthéons/croyances, **gouvernements et cartes de politique**, grands personnages, **force militaire**, routes/rails, pillages, stats (huttes ramassées, hard techs…).",
            "**Change de point de vue** : tu revis la partie avec les yeux — et le brouillard — de chaque adversaire. Parfait pour comprendre ce que ton voisin préparait pendant que tu simulais.",
            "Lenses continent / appeal / religion incluses.",
            "Gratuit, en beta (v1.3) sur SourceForge (« Civ VI Replay »). Compatibilité mods non documentée : **teste-le sur une de tes saves BBG** avant d'en dépendre.",
            "Le combo gagnant : **autosave chaque tour + CivVIReplay après la game** = tu vois ce que tu as fait, quand, et ce que les autres faisaient au même moment."
          ]}
        ]
      },
      {
        titre: "Autres outils",
        blocs: [
          { ul: [
            "**Civ6EGRM** (GitHub, SamuelH91) : carte de replay de fin de partie générée depuis les autosaves, avec un script qui les copie automatiquement.",
            "**civ6_pipeline** (GitHub, viash-io) : fabrique une **vidéo timelapse** post-game à partir des saves.",
            "**civ6-save-parser** (npm / GitHub pydt) : extraction programmatique de la data des saves — si tu veux des stats custom un jour, on peut le scripter ensemble.",
            "**OBS ou NVIDIA ShadowPlay** : enregistre tes sessions. Revoir en ×2 les moments où tu as hésité vaut de l'or — c'est ce que font les joueurs CPL avec leurs VOD.",
            "**Better Report Screen** (déjà dans ta modlist) : screenshot de l'onglet Yields à **T25 / T50 / T75 à chaque partie** = ta courbe de progression d'une game à l'autre.",
            "FireTuner (outils de développement officiels Firaxis, dans Steam → Outils) : inspection en temps réel de tout l'état du jeu. Overkill, mais ça existe."
          ]}
        ]
      },
      {
        titre: "La méthode pour progresser (avec ou sans outil)",
        blocs: [
          { ul: [
            "**Un focus par partie.** « Aujourd'hui je ne travaille QUE le timing Féodalité. » Un seul objectif, les acquis s'empilent de partie en partie.",
            "**Note 5 chiffres à chaque partie** → page **📊 Suivi de parties** : tour de Féodalité, villes à T50, villes ecstatic à T55, science à T60, tour du premier 1-tech/tour.",
            "Compare le même tour chez Herson (guides early/mid game) : où est l'écart ? C'est presque toujours avant T55.",
            "Apporte-moi tes screenshots (comme tes records) ou tes constats de replay : on analyse ensemble, décision par décision."
          ]}
        ]
      },
      {
        titre: "📤 Protocole : faire analyser une partie par Claude",
        blocs: [
          { p: "Claude ne peut pas regarder un replay en direct, mais lit très bien les **images et les fichiers**. Le pack idéal à déposer dans le dossier du projet (un sous-dossier par partie, ex. `parties/2026-07-12_tokugawa/`) :" },
          { ul: [
            "**Screenshots aux tours fixes** (en jouant, ou après coup dans CivVIReplay — ses captures marchent aussi) : T17 (panthéon + minimap), T30 (empire + spots pinnés), **T42-46 (moment Féodalité)**, T50 (onglet Yields de Better Report Screen + vue de l'empire), T60 (yields + arbre de techs), T75 (yields + écran démographie), fin (classement).",
            "Les **5 chiffres du tracker** (ou dis-les, Claude remplit).",
            "**2-3 questions précises** : « j'aurais dû settle où ? », « pourquoi ma science stagne à T60 ? » — plus la question est précise, plus l'analyse rend.",
            "Bonus : la **.Civ6Save de fin de partie** (et 2-3 autosaves clés) dans le dossier — parsables en partie par script.",
            "En retour : analyse tour par tour, écarts vs benchmarks, et LE focus de la partie suivante."
          ]},
          { p: "**Niveau 2 — LIVRÉ : le mod Claude Stats Logger.** Installé dans tes Mods (dossier `mods/ClaudeStatsLogger` du projet + copie dans le jeu). Même principe que Better Report Screen : UI-only, zéro impact gameplay. À chaque tour il écrit dans Lua.log les **rendements de TOUS les joueurs**, le détail de **tes villes** (pop, districts, production en cours = ton build order réel) et la **timeline** (chaque tech/civic/production terminée, avec le tour)." },
          { ul: [
            "En jeu : Contenu additionnel → Mods → activer **Claude Stats Logger**.",
            "Juste après la partie (avant de relancer le jeu !) : `powershell -ExecutionPolicy Bypass -File tools\\parse-stats.ps1 -Nom \"2026-07-12_tokugawa\"` → crée `parties\\...\\players.csv`, `villes.csv`, `timeline.csv`.",
            "Donne le dossier à Claude → analyse des courbes, comparaison entre parties, reconstitution du build order.",
            "⚠ v0.1 jamais testée en jeu : premier essai sur une partie solo de 10 tours, et on débugge ensemble s'il le faut (le mod logge ses erreurs)."
          ]}
        ]
      }
    ]
  },

  {
    id: "tracker",
    titre: "Suivi de parties",
    sousTitre: "Tes 5 chiffres à chaque partie — sauvegardé dans ce navigateur",
    icon: "📊",
    custom: "tracker",
    sections: []
  }
];

/* ==========================================================================
   PERSONNES — chaque civ a un champ `owner` qui pointe vers un id d'ici.
   Ajouter un ami : une ligne ci-dessous + `owner: "sonid"` sur ses civs.
   ========================================================================== */

const PERSONNES = [
  { id: "hugo", nom: "Hugo", emoji: "👑" },
  { id: "nuage", nom: "Nuage", emoji: "☁️" }
];

/* ==========================================================================
   PROFILS — modèle unifié des joueurs (enrichit PERSONNES avec couleur +
   « civs main »). Source : data/profils.js (window.PROFILS). Édition live via
   le Backoffice, stockée en brouillon localStorage, puis exportée pour commit.
   Chaque profil : { id, nom, emoji, couleur, mains:[ids window.BBG_LEADERS] }.
   ========================================================================== */

const PROFILS_KEY = "civ6_profils_draft";

function profilNormalize(p) {
  return {
    id: p.id, nom: p.nom || "Sans nom", emoji: p.emoji || "🙂",
    couleur: p.couleur || "#4f7cff",
    mains: Array.isArray(p.mains) ? p.mains.slice() : []
  };
}
function profilsSeed() {
  const base = (Array.isArray(window.PROFILS) && window.PROFILS.length)
    ? window.PROFILS
    : PERSONNES.map(p => ({ id: p.id, nom: p.nom, emoji: p.emoji }));
  return base.map(profilNormalize);
}
function profilsLoadDraft() {
  try {
    const d = JSON.parse(localStorage.getItem(PROFILS_KEY));
    return Array.isArray(d) ? d.map(profilNormalize) : null;
  } catch (e) { return null; }
}
function profilsSaveDraft() {
  try { localStorage.setItem(PROFILS_KEY, JSON.stringify(PROFILS_STATE)); }
  catch (e) { /* file:// ok */ }
}
let PROFILS_STATE = profilsLoadDraft() || profilsSeed();
function people() { return PROFILS_STATE; }
function defaultOwner() { return (PROFILS_STATE[0] && PROFILS_STATE[0].id) || "hugo"; }

/* Lookup id -> leader BBG, pour afficher les civs main d'un profil. */
function bbgLeaderMap() {
  if (!bbgLeaderMap._m) {
    bbgLeaderMap._m = {};
    (window.BBG_LEADERS || []).forEach(l => { bbgLeaderMap._m[l.id] = l; });
  }
  return bbgLeaderMap._m;
}

/* ==========================================================================
   RENDU — générique : boucle sur les données, rien de codé en dur par civ.
   ========================================================================== */

const $nav = document.getElementById("nav");
const $content = document.getElementById("content");
const $search = document.getElementById("search");
const $scroll = document.querySelector(".content-wrap");

function scrollTop() { if ($scroll) $scroll.scrollTop = 0; }

/* Échappe le HTML puis applique **gras**. Si le terme en gras correspond
   exactement à une entité BBG (unité/merveille/doctrine/gouverneur…), il
   devient un lien cliquable vers la page data correspondante. */
function fmt(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, (m, inner) => bbgTermLink(inner) || `<strong>${inner}</strong>`);
}

/* ---- Liens « termes » : **terme** des fiches/guides -> page data BBG ---- */

let BBG_TERM_INDEX = null;
function bbgTermNorm(s) {
  return String(s)
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function bbgTermIndex() {
  if (BBG_TERM_INDEX) return BBG_TERM_INDEX;
  const idx = {};
  const add = (name, target) => {
    const k = bbgTermNorm(name);
    if (k && k.length > 2 && !idx[k]) idx[k] = target;
  };
  (window.BBG_CATEGORIES || []).forEach(cat => {
    (cat.items || []).forEach(it => add(it.name, { kind: "cat", catKey: cat.key, id: it.id }));
    if (cat.sectionImages) Object.keys(cat.sectionImages).forEach(sec => add(sec, { kind: "cat", catKey: cat.key, section: sec }));
  });
  (window.BBG_LEADERS || []).forEach(l => {
    (l.entries || []).forEach(e => { if (/unique/i.test(e.type)) add(e.name, { kind: "leader", id: l.id }); });
  });
  BBG_TERM_INDEX = idx;
  return idx;
}
function bbgTermLink(inner) {
  const t = bbgTermIndex()[bbgTermNorm(inner)];
  if (!t) return null;
  const attr = t.kind === "leader"
    ? `data-tleader="${escAttr(t.id)}"`
    : `data-tcat="${escAttr(t.catKey)}" ${t.section ? `data-tsec="${escAttr(t.section)}"` : `data-tid="${escAttr(t.id)}"`}`;
  return `<strong class="dlink" ${attr} title="Voir dans l'encyclopédie BBG">${inner}</strong>`;
}
function openBbgItem(catKey, opts) {
  const cat = (window.BBG_CATEGORIES || []).find(c => c.key === catKey);
  if (!cat) return;
  activeId = "bbg-" + catKey;
  renderBbgCategory(cat, opts || {});
  renderNav($search.value);
  try { history.replaceState(null, "", "#bbg-" + catKey); } catch (e) { /* file:// ok */ }
}

function renderField(value) {
  if (Array.isArray(value)) {
    return "<ul>" + value.map(v => `<li>${fmt(v)}</li>`).join("") + "</ul>";
  }
  return `<p>${fmt(value)}</p>`;
}

/* ---- Fiches civ ---- */

const CIV_SECTIONS = [
  { key: "bonus",             label: "Bonus (leader · civ · uniques)" },
  { key: "pantheon",          label: "Panthéon & croyances" },
  { key: "victoire",          label: "Victoire visée" },
  { key: "early_game",        label: "Early game" },
  { key: "mid_game",          label: "Mid game" },
  { key: "late_game",         label: "Late game" },
  { key: "guerre_diplomatie", label: "Guerre / Diplomatie" },
  { key: "snowball",          label: "❄ Snowball — le mécanisme central", cls: "snowball" },
  { key: "pieges",            label: "⚠ Pièges & erreurs à éviter", cls: "pieges" }
];

function renderCiv(civ) {
  const badgeCls = civ.contexte.toLowerCase().startsWith("teamer") ? "teamer" : "ffa";
  const accent = civ.couleur || "#e8b64c";
  let html = `
    <div class="fiche-header" style="--civ-accent:${accent}">
      ${civ.img ? `<img class="fiche-portrait" src="${civ.img}" alt="${fmt(civ.leader)}">` : ""}
      <div>
        <h2>${fmt(civ.leader)} — <span class="h2-civ">${fmt(civ.civilization)}</span></h2>
        <span class="badge ${badgeCls}">${fmt(civ.contexte)}</span>
      </div>
    </div>
    <p class="fiche-sub">Fiche stratégie · BBG · multijoueur</p>`;

  if (civ.notes) {
    html += `<div class="note-box"><strong>⚠ Note :</strong> ${fmt(civ.notes)}</div>`;
  }

  for (const sec of CIV_SECTIONS) {
    const val = civ[sec.key];
    if (!val || (Array.isArray(val) && val.length === 0)) continue;
    html += `<div class="section ${sec.cls || ""}"><h3>${sec.label}</h3>${renderField(val)}</div>`;
  }
  $content.innerHTML = html;
  scrollTop();
}

/* ---- Pages du guide / méta ---- */

function renderBloc(bloc) {
  if (bloc.h4 !== undefined) return `<h4>${fmt(bloc.h4)}</h4>`;
  if (bloc.p !== undefined) return `<p>${fmt(bloc.p)}</p>`;
  if (bloc.ul !== undefined) return "<ul>" + bloc.ul.map(v => `<li>${fmt(v)}</li>`).join("") + "</ul>";
  if (bloc.table !== undefined) {
    const t = bloc.table;
    return `<div class="table-wrap"><table>
      <thead><tr>${t.head.map(h => `<th>${fmt(h)}</th>`).join("")}</tr></thead>
      <tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  }
  if (bloc.tiers !== undefined) {
    return bloc.tiers.map(t => `
      <div class="tier-row">
        <div class="tier-badge" style="background:${t.color}">${fmt(t.label)}</div>
        <div class="tier-items">
          ${t.items.map(it => `
            <div class="tier-chip ${it.mine ? "mine" : ""}">
              <span class="tc-nom">${fmt(it.nom)}</span>
              <span class="tc-note">${fmt(it.note)}</span>
            </div>`).join("")}
        </div>
      </div>`).join("");
  }
  return "";
}

function renderGuide(page) {
  if (page.custom === "tracker") { renderTracker(page); return; }
  const isTier = page.id === "tier-list";
  let html = `
    <div class="fiche-header">
      <div>
        <h2>${page.icon ? page.icon + " " : ""}${fmt(page.titre)}</h2>
        <span class="badge ${isTier ? "tier" : "guide"}">${isTier ? "Méta" : "Guide"}</span>
      </div>
    </div>
    <p class="fiche-sub">${fmt(page.sousTitre)}</p>`;

  for (const sec of page.sections) {
    const srcTag = sec.src ? `<span class="src-tag">📹 ${fmt(sec.src)}</span>` : "";
    html += `<div class="section"><h3>${fmt(sec.titre)}${srcTag}</h3>${sec.blocs.map(renderBloc).join("")}</div>`;
  }
  $content.innerHTML = html;
  scrollTop();
}

/* ---- Suivi de parties (localStorage) ---- */

const TRACKER_KEY = "civ6_games_v1";

function trackerLoad() {
  try { return JSON.parse(localStorage.getItem(TRACKER_KEY)) || []; }
  catch (e) { return []; }
}
function trackerSave(games) {
  try { localStorage.setItem(TRACKER_KEY, JSON.stringify(games)); }
  catch (e) { alert("Impossible de sauvegarder (localStorage indisponible dans ce navigateur en file://)."); }
}

function renderTracker(page) {
  const games = trackerLoad();
  const civOptions = CIV_DATA.map(c => `<option value="${fmt(c.leader)} (${fmt(c.civilization)})">`).join("");

  const rows = games.map((g, i) => `
    <tr>
      <td>${fmt(g.date || "")}</td>
      <td>${fmt(g.civ || "")}</td>
      <td>${fmt(g.mode || "")}</td>
      <td>${fmt(g.feod || "–")}</td>
      <td>${fmt(g.villes50 || "–")}</td>
      <td>${fmt(g.ecst55 || "–")}</td>
      <td>${fmt(g.sci60 || "–")}</td>
      <td>${fmt(g.tech1 || "–")}</td>
      <td>${fmt(g.note || "")}</td>
      <td><button class="btn-del" data-i="${i}">✕</button></td>
    </tr>`).join("");

  $content.innerHTML = `
    <div class="fiche-header">
      <div>
        <h2>${page.icon} ${fmt(page.titre)}</h2>
        <span class="badge tier">Méta</span>
      </div>
    </div>
    <p class="fiche-sub">${fmt(page.sousTitre)}</p>

    <div class="note-box"><strong>ℹ</strong> Les parties sont stockées dans le <strong>localStorage de ce navigateur</strong>
    (elles survivent à la fermeture, mais pas à un changement de navigateur/PC). Remplis ce que tu as —
    les tirets sont acceptés. Les cibles viennent de la page « Gros rendements ».</div>

    <div class="section">
      <h3>➕ Nouvelle partie</h3>
      <div class="tracker-form">
        <div><label>Date</label><input type="date" id="tk-date" value="${new Date().toISOString().slice(0, 10)}"></div>
        <div><label>Civ / leader</label><input type="text" id="tk-civ" list="tk-civs" placeholder="Tokugawa (Japon)"><datalist id="tk-civs">${civOptions}</datalist></div>
        <div><label>Mode</label><select id="tk-mode"><option>FFA</option><option>Teamer</option><option>Solo (sim)</option></select></div>
        <div><label>Tour Féodalité</label><input type="number" id="tk-feod" placeholder="≤ 46"></div>
        <div><label>Villes à T50</label><input type="number" id="tk-villes50" placeholder="8-10"></div>
        <div><label>Villes ecstatic T55</label><input type="number" id="tk-ecst55" placeholder="max"></div>
        <div><label>Science à T60</label><input type="number" id="tk-sci60" placeholder="≥ 200"></div>
        <div><label>Tour 1 tech/tour</label><input type="number" id="tk-tech1" placeholder="≤ 65"></div>
        <div style="grid-column: 1 / -1"><label>Note (focus de la partie, résultat…)</label><input type="text" id="tk-note" placeholder="Focus : timing Féodalité. Résultat : T44 ✔"></div>
      </div>
      <button class="btn" id="tk-add">Enregistrer la partie</button>
    </div>

    <div class="section">
      <h3>📜 Historique (${games.length} partie${games.length > 1 ? "s" : ""})</h3>
      ${games.length === 0 ? `<p class="tracker-empty">Aucune partie enregistrée pour l'instant — la prochaine game, note tes 5 chiffres ici.</p>` : `
      <div class="table-wrap"><table>
        <thead><tr><th>Date</th><th>Civ</th><th>Mode</th><th>Féod.</th><th>Villes T50</th><th>Ecst. T55</th><th>Sci T60</th><th>1t/t</th><th>Note</th><th></th></tr></thead>
        <tbody>
          <tr class="tracker-target"><td>🎯 Cible</td><td>—</td><td>—</td><td>≤ 46</td><td>8-10</td><td>max</td><td>≥ 200</td><td>≤ 65</td><td>vs bots : vise −10 tours</td><td></td></tr>
          ${rows}
        </tbody>
      </table></div>`}
    </div>`;

  document.getElementById("tk-add").addEventListener("click", () => {
    const v = id => document.getElementById(id).value.trim();
    if (!v("tk-civ") && !v("tk-feod") && !v("tk-note")) { alert("Remplis au moins la civ ou un chiffre."); return; }
    const games2 = trackerLoad();
    games2.unshift({
      date: v("tk-date"), civ: v("tk-civ"), mode: v("tk-mode"),
      feod: v("tk-feod"), villes50: v("tk-villes50"), ecst55: v("tk-ecst55"),
      sci60: v("tk-sci60"), tech1: v("tk-tech1"), note: v("tk-note")
    });
    trackerSave(games2);
    renderTracker(page);
  });

  $content.querySelectorAll(".btn-del").forEach(btn => {
    btn.addEventListener("click", () => {
      const games2 = trackerLoad();
      games2.splice(Number(btn.dataset.i), 1);
      trackerSave(games2);
      renderTracker(page);
    });
  });

  scrollTop();
}

/* ---- Accueil ---- */

function renderHome() {
  const guideCards = GUIDE_DATA.map(g => `
    <div class="home-card" data-id="${g.id}">
      <div class="hc-emoji">${g.icon || "📖"}</div>
      <div>
        <div class="hc-title">${fmt(g.titre)}</div>
        <div class="hc-sub">${fmt(g.sousTitre)}</div>
      </div>
    </div>`).join("");

  const lmap = bbgLeaderMap();
  const persSections = personnesVisibles().map(p => {
    const civs = CIV_DATA.filter(c => (c.owner || defaultOwner()) === p.id);
    const mains = (p.mains || []).map(id => lmap[id]).filter(Boolean);
    if (civs.length === 0 && mains.length === 0) return "";
    const cards = civs.map(c => {
      const ctx = c.contexte.toLowerCase().startsWith("teamer") ? "Teamer" : "FFA";
      return `
      <div class="home-card" data-id="${c.id}" style="--hc-accent:${c.couleur || "#e8b64c"}">
        ${c.img ? `<img src="${c.img}" alt="${fmt(c.leader)}">` : `<div class="hc-emoji">👑</div>`}
        <div>
          <div class="hc-title">${fmt(c.leader)} — ${fmt(c.civilization)}</div>
          <div class="hc-sub">${ctx}</div>
        </div>
      </div>`;
    }).join("");
    const mainsRow = mains.length ? `
      <div class="home-mains-title">★ Civs main</div>
      <div class="home-mains">${mains.map(l => `
        <span class="home-main" data-leader="${l.id}" title="${fmt(l.title)}">
          ${l.image ? `<img src="${l.image}" alt="">` : `<span class="hm-emoji">👑</span>`}
          <span>${fmt(l.title)}</span>
        </span>`).join("")}</div>` : "";
    const fichesRow = civs.length ? `
      <div class="home-mains-title">Fiches stratégie</div>
      <div class="home-grid">${cards}</div>` : "";
    return `<div class="home-section-title" style="--hc-accent:${p.couleur || "#e8b64c"}">${p.emoji} ${fmt(p.nom)}</div>
      ${mainsRow}${fichesRow}`;
  }).join("");

  $content.innerHTML = `
    <div class="home">
      <h2>Civ VI Companion</h2>
      <p class="intro">Mémo compétitif à garder à côté du jeu : guide général (réglages, early/mid/late,
      la boucle des gros rendements), tier list BBG 7.4.6, bilan des vidéos de tips, et l'espace de chaque
      joueur avec ses civs. Tout est calé sur le multi BBG en online speed.</p>
      <div class="home-section-title">Guides & méta — pour tout le monde</div>
      <div class="home-grid">${guideCards}</div>
      ${persSections}
    </div>`;
  $content.querySelectorAll(".home-card").forEach(el => {
    el.addEventListener("click", (ev) => { if (ev.target.closest(".dlink")) return; select(el.dataset.id); });
  });
  $content.querySelectorAll(".home-main").forEach(el => {
    el.addEventListener("click", (ev) => { if (ev.target.closest(".dlink")) return; openBbgLeader(el.dataset.leader); });
  });
  scrollTop();
}

/* ---- Navigation ---- */

const GUIDE_IDS_META = ["tier-list", "guide-tips", "guide-review", "tracker"];

/* Sélecteur « je suis » — persistant par navigateur */
const ME_KEY = "civ6_moi";
function getMe() { try { return localStorage.getItem(ME_KEY) || "tous"; } catch (e) { return "tous"; } }
function setMe(v) { try { localStorage.setItem(ME_KEY, v); } catch (e) { /* file:// ok */ } }
function personnesVisibles() {
  const me = getMe();
  const all = people();
  if (me === "tous") return all;
  const found = all.filter(p => p.id === me);
  return found.length ? found : all;
}

function civToNavItem(c) {
  return { id: c.id, label: `${c.leader} — ${c.civilization}`, sub: c.contexte, img: c.img, couleur: c.couleur };
}

function navEntries() {
  const entries = [
    { group: "📖 Guide général", items: GUIDE_DATA.filter(g => !GUIDE_IDS_META.includes(g.id))
        .map(g => ({ id: g.id, label: g.titre, sub: g.sousTitre, icon: g.icon || "📖" })) },
    { group: "🏆 Méta", items: GUIDE_DATA.filter(g => GUIDE_IDS_META.includes(g.id))
        .map(g => ({ id: g.id, label: g.titre, sub: g.sousTitre, icon: g.icon || "🏆" })) }
  ];
  entries[1].items.push({ id: "backoffice", label: "Backoffice — profils", sub: "Gérer les profils & civs main", icon: "🛠️" });
  if (bbgHasData()) {
    const bbgItems = [];
    if (window.BBG_LEADERS) {
      bbgItems.push({ id: "bbg-leaders", label: "Leaders", sub: window.BBG_LEADERS.length + " leaders", icon: "👑" });
    }
    (window.BBG_CATEGORIES || []).forEach(c => {
      bbgItems.push({ id: "bbg-" + c.key, label: c.label, sub: c.items.length + " éléments", icon: c.icon });
    });
    entries.push({ group: `🎲 Encyclopédie BBG ${window.BBG_VERSION || ""}`, items: bbgItems });
  }
  if (window.BBG_REFERENCE) {
    entries.push({ group: "📚 Références BBG", items: [
      { id: "bbg-reference", label: "Références", sub: window.BBG_REFERENCE.length + " tableaux", icon: "📊" }
    ] });
  }
  for (const p of personnesVisibles()) {
    const civs = CIV_DATA.filter(c => (c.owner || defaultOwner()) === p.id);
    const ffa = civs.filter(c => !c.contexte.toLowerCase().startsWith("teamer"));
    const tm = civs.filter(c => c.contexte.toLowerCase().startsWith("teamer"));
    if (ffa.length) entries.push({ group: `${p.emoji} ${p.nom} — FFA`, items: ffa.map(civToNavItem) });
    if (tm.length) entries.push({ group: `${p.emoji} ${p.nom} — Teamer`, items: tm.map(civToNavItem) });
  }
  return entries;
}

let activeId = null;

function renderNav(filter) {
  const f = (filter || "").trim().toLowerCase();
  let html = "";
  let any = false;
  for (const grp of navEntries()) {
    const items = grp.items.filter(it =>
      !f || it.label.toLowerCase().includes(f) || (it.sub || "").toLowerCase().includes(f));
    if (items.length === 0) continue;
    any = true;
    html += `<div class="nav-group-title">${grp.group}</div>`;
    for (const it of items) {
      const visual = it.img
        ? `<img class="nav-avatar" src="${it.img}" alt="" style="--nav-accent:${it.couleur || "#3a4157"}">`
        : `<span class="nav-icon">${it.icon || "📖"}</span>`;
      html += `<button class="nav-item ${it.id === activeId ? "active" : ""}" data-id="${it.id}">
        ${visual}<span class="nav-label">${fmt(it.label)}</span>
      </button>`;
    }
  }
  if (!any) html = `<div class="nav-empty">Aucun résultat.</div>`;
  $nav.innerHTML = html;
  $nav.querySelectorAll(".nav-item").forEach(el => {
    el.addEventListener("click", () => select(el.dataset.id));
  });
}

function select(id) {
  activeId = id;
  const civ = CIV_DATA.find(c => c.id === id);
  const page = GUIDE_DATA.find(g => g.id === id);
  if (civ) renderCiv(civ);
  else if (page) renderGuide(page);
  else if (id === "backoffice") renderBackoffice();
  else if (id && id.indexOf("bbg-") === 0) renderBbg(id);
  else { activeId = null; renderHome(); }
  renderNav($search.value);
  try { history.replaceState(null, "", "#" + (activeId || "")); } catch (e) { /* file:// ok */ }
}

/* ---- Encyclopédie BBG (données générées : window.BBG_LEADERS / BBG_CATEGORIES) ----
   Données scrapées depuis civ6bbg.github.io par tools/build-bbg-data.mjs.
   Rendu en JS pur (portage des vues React de PaulCuquemelle/civ). */

function escBbg(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function escAttr(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    .replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const BBG_TYPE_META = {
  "Capacité de civilisation": { color: "#e8b64c", icon: "🏛️" },
  "Capacité de leader":       { color: "#8b5cf6", icon: "👑" },
  "Unité unique":             { color: "#ef4444", icon: "⚔️" },
  "Bâtiment unique":          { color: "#4f7cff", icon: "🏛" },
  "Quartier unique":          { color: "#4ade80", icon: "🏘️" },
  "Amélioration unique":      { color: "#fb923c", icon: "🛠️" },
  "Autre":                    { color: "#94a3b8", icon: "•" }
};

function bbgHasData() { return !!(window.BBG_LEADERS || window.BBG_CATEGORIES); }

function bbgHeader(title, sub) {
  return `
    <div class="fiche-header"><div>
      <h2>${escBbg(title)}</h2>
      <span class="badge bbg">Encyclopédie BBG</span>
    </div></div>
    <p class="fiche-sub">${escBbg(sub)}</p>
    <div class="bbg-toolbar">
      <input type="text" class="bbg-filter" placeholder="Filtrer dans cette page…" autocomplete="off">
    </div>`;
}

function bbgPlanList(title, items) {
  if (!items || !items.length) return "";
  return `<div class="bbg-plan-block">
    <h5 class="bbg-plan-bt">${escBbg(title)}</h5>
    <ul class="bbg-plan-list">${items.map(i => `<li>${escBbg(i)}</li>`).join("")}</ul>
  </div>`;
}

function bbgPlanHtml(l) {
  const strat = (window.BBG_STRATEGIES || {})[l.id];
  if (!strat) return "";
  const vmeta = window.BBG_VICTORY_META || {};
  const chips = (strat.victoryTypes || []).map(v => {
    const m = vmeta[v] || { icon: "🎯", color: "var(--gold)" };
    return `<span class="bbg-vchip" style="color:${m.color};border-color:${m.color}">${m.icon} ${escBbg(v)}</span>`;
  }).join("");
  return `<div class="bbg-plan">
    <div class="bbg-plan-head">
      <span class="bbg-plan-title">📋 Plan de partie</span>
      ${strat.draft ? `<span class="bbg-plan-draft">à vérifier</span>` : ""}
    </div>
    ${chips ? `<div class="bbg-vchips">${chips}</div>` : ""}
    <p class="bbg-plan-sum">${escBbg(strat.summary)}</p>
    ${bbgPlanList("Points forts", strat.strengths)}
    ${bbgPlanList("À prioriser", strat.priorities)}
    ${bbgPlanList("Doctrines clés", strat.policies)}
    ${bbgPlanList("Conseils", strat.tips)}
  </div>`;
}

function bbgLeaderCard(l) {
  const strat = (window.BBG_STRATEGIES || {})[l.id];
  const names = l.entries.map(e => e.name).join(" · ");
  const search = (l.title + " " + l.entries.map(e => e.name + " " + e.description).join(" ")
    + (strat ? " " + strat.summary : "")).toLowerCase();
  const entriesHtml = l.entries.map(e => {
    const m = BBG_TYPE_META[e.type] || BBG_TYPE_META["Autre"];
    return `<div class="bbg-entry">
      <div class="bbg-entry-head">
        ${e.icon ? `<img class="bbg-entry-icon" src="${escAttr(e.icon)}" alt="" loading="lazy" onerror="this.style.display='none'">` : ""}
        <span class="bbg-etype" style="color:${m.color};border-color:${m.color}">${m.icon} ${escBbg(e.type)}</span>
      </div>
      <h4 class="bbg-entry-name">${escBbg(e.name)}</h4>
      <p class="bbg-entry-desc">${escBbg(e.description)}</p>
    </div>`;
  }).join("");
  return `<details class="bbg-leader" data-lid="${escAttr(l.id)}" data-search="${escAttr(search)}">
    <summary class="bbg-leader-sum">
      ${l.image ? `<img class="bbg-leader-img" src="${escAttr(l.image)}" alt="" loading="lazy" onerror="this.style.display='none'">` : ""}
      <span class="bbg-leader-title">${escBbg(l.title)}</span>
      ${strat ? `<span class="bbg-plan-badge" title="Plan de partie">📋</span>` : ""}
      <span class="bbg-count">${l.entries.length}</span>
    </summary>
    <div class="bbg-entries">
      <p class="bbg-leader-names">${escBbg(names)}</p>
      ${bbgPlanHtml(l)}
      ${entriesHtml}
    </div>
  </details>`;
}

function bbgItemCard(it) {
  const search = (it.name + " " + (it.section || "") + " " + it.description + " " + (it.tags || []).join(" ")).toLowerCase();
  const stats = (it.stats && it.stats.length)
    ? `<div class="bbg-stats">${it.stats.map(s => `<div class="bbg-stat"><span class="bbg-stat-v">${escBbg(s.value)}</span><span class="bbg-stat-l">${escBbg(s.label)}</span></div>`).join("")}</div>`
    : "";
  const tags = (it.tags && it.tags.length)
    ? `<div class="bbg-tags">${it.tags.map(t => `<span class="bbg-tag">${escBbg(t)}</span>`).join("")}</div>`
    : "";
  return `<article class="bbg-card" data-id="${escAttr(it.id)}" data-search="${escAttr(search)}">
    <div class="bbg-card-head">
      ${it.image ? `<img class="bbg-card-icon" src="${escAttr(it.image)}" alt="" loading="lazy" onerror="this.style.display='none'">` : ""}
      <h4 class="bbg-card-name">${escBbg(it.name)}</h4>
    </div>
    ${stats}${tags}
    ${it.description ? `<p class="bbg-card-desc">${escBbg(it.description)}</p>` : ""}
  </article>`;
}

function bbgGroupBySection(items) {
  const groups = [];
  const idx = {};
  for (const it of items) {
    const sec = it.section || "";
    if (!(sec in idx)) { idx[sec] = groups.length; groups.push({ section: sec, items: [] }); }
    groups[idx[sec]].items.push(it);
  }
  return groups;
}

function wireBbgFilter() {
  const input = $content.querySelector(".bbg-filter");
  if (!input) return;
  const cards = Array.prototype.slice.call($content.querySelectorAll("[data-search]"));
  const groups = Array.prototype.slice.call($content.querySelectorAll(".bbg-group"));
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    for (const c of cards) {
      const hit = !q || c.getAttribute("data-search").indexOf(q) !== -1;
      c.style.display = hit ? "" : "none";
      if (hit && q && c.tagName === "DETAILS") c.open = true;
    }
    for (const g of groups) {
      let vis = false;
      const gc = g.querySelectorAll("[data-search]");
      for (let i = 0; i < gc.length; i++) if (gc[i].style.display !== "none") { vis = true; break; }
      g.style.display = vis ? "" : "none";
    }
  });
}

function renderBbgLeaders(focusId) {
  const list = window.BBG_LEADERS || [];
  const nEntries = list.reduce((n, l) => n + l.entries.length, 0);
  let html = bbgHeader("👑 Leaders", `${list.length} leaders · ${nEntries} capacités, unités & infrastructures · BBG ${window.BBG_VERSION || ""}`);
  html += `<div class="bbg-list">${list.map(bbgLeaderCard).join("")}</div>`;
  $content.innerHTML = html;
  wireBbgFilter();
  if (focusId) {
    const el = $content.querySelector(`[data-lid="${cssEsc(focusId)}"]`);
    if (el) {
      el.open = true;
      el.classList.add("bbg-focus");
      try { el.scrollIntoView({ block: "center" }); } catch (e) { /* ok */ }
      return;
    }
  }
  scrollTop();
}

/* Échappe une valeur pour un sélecteur d'attribut CSS. */
function cssEsc(s) { return String(s).replace(/["\\]/g, "\\$&"); }

/* Ouvre l'onglet Leaders BBG et déplie la fiche demandée (depuis les civs main). */
function openBbgLeader(leaderId) {
  if (!bbgHasData()) return;
  activeId = "bbg-leaders";
  renderBbgLeaders(leaderId);
  renderNav($search.value);
  try { history.replaceState(null, "", "#bbg-leaders"); } catch (e) { /* file:// ok */ }
}

function renderBbgCategory(cat, focus) {
  let html = bbgHeader(`${cat.icon} ${cat.label}`, `${cat.items.length} éléments · BBG ${window.BBG_VERSION || ""}`);
  for (const g of bbgGroupBySection(cat.items)) {
    const secImg = cat.sectionImages && g.section ? cat.sectionImages[g.section] : null;
    const secHead = g.section
      ? `<h3 class="bbg-section">${secImg ? `<img class="bbg-section-img" src="${escAttr(secImg)}" alt="" onerror="this.style.display='none'">` : ""}${escBbg(g.section)} <span class="bbg-section-n">${g.items.length}</span></h3>`
      : "";
    html += `<section class="bbg-group" data-sec="${escAttr(g.section || "")}">${secHead}<div class="bbg-cards">${g.items.map(bbgItemCard).join("")}</div></section>`;
  }
  $content.innerHTML = html;
  wireBbgFilter();
  if (focus && (focus.id || focus.section)) {
    const sel = focus.id ? `[data-id="${cssEsc(focus.id)}"]` : `.bbg-group[data-sec="${cssEsc(focus.section)}"]`;
    const el = $content.querySelector(sel);
    if (el) {
      el.classList.add("bbg-focus");
      try { el.scrollIntoView({ block: "center" }); } catch (e) { /* ok */ }
      return;
    }
  }
  scrollTop();
}

function renderBbg(id) {
  if (id === "bbg-leaders") { renderBbgLeaders(); return; }
  if (id === "bbg-reference") { renderBbgReference(); return; }
  const cat = (window.BBG_CATEGORIES || []).find(c => "bbg-" + c.key === id);
  if (cat) { renderBbgCategory(cat); return; }
  activeId = null; renderHome();
}

/* ---- Références BBG (contenu manuel porté de PaulCuquemelle/civ) ----
   Note : les guides d'Hugo (GUIDE_DATA) restent la source unique de guides ;
   les guides BBG de Paul ne sont pas intégrés (choix éditorial). */

/* Chips de catégorie (filtre) + câblage combiné texte + catégorie. */
function bbgCatChips(cats) {
  return `<div class="bbg-chips">
    <span class="bbg-chip-label">Catégorie</span>
    <button class="bbg-chip" data-cat="Tous" data-active="1">Tous</button>
    ${cats.map(c => `<button class="bbg-chip" data-cat="${escAttr(c)}">${escBbg(c)}</button>`).join("")}
  </div>`;
}
function wireBbgCatFilter() {
  const input = $content.querySelector(".bbg-filter");
  const chips = Array.prototype.slice.call($content.querySelectorAll(".bbg-chip"));
  const cards = Array.prototype.slice.call($content.querySelectorAll("[data-search]"));
  let activeCat = "Tous";
  function apply() {
    const q = input ? input.value.trim().toLowerCase() : "";
    for (const c of cards) {
      const okCat = activeCat === "Tous" || c.getAttribute("data-cat") === activeCat;
      const okQ = !q || c.getAttribute("data-search").indexOf(q) !== -1;
      const hit = okCat && okQ;
      c.style.display = hit ? "" : "none";
      if (hit && q && c.tagName === "DETAILS") c.open = true;
    }
  }
  if (input) input.addEventListener("input", apply);
  chips.forEach(ch => ch.addEventListener("click", () => {
    activeCat = ch.getAttribute("data-cat");
    chips.forEach(x => x.removeAttribute("data-active"));
    ch.setAttribute("data-active", "1");
    apply();
  }));
}

/* Liens « Données BBG → » d'un guide/tableau vers un onglet encyclopédie. */
function bbgSeeAlso(seeAlso) {
  if (!seeAlso || !seeAlso.length) return "";
  return `<div class="bbg-seealso">
    <span class="bbg-seealso-label">Données BBG :</span>
    ${seeAlso.map(s => `<button class="bbg-seealso-btn" data-tab="bbg-${escAttr(s.tab)}">${escBbg(s.label)} →</button>`).join("")}
  </div>`;
}
function wireBbgSeeAlso() {
  $content.querySelectorAll(".bbg-seealso-btn").forEach(el => {
    el.addEventListener("click", () => select(el.dataset.tab));
  });
}

function renderBbgReference() {
  const tables = window.BBG_REFERENCE || [];
  const cats = window.BBG_REF_CATEGORIES || [];
  const cards = tables.map(t => {
    const search = (t.title + " " + (t.note || "") + " " + t.columns.join(" ") + " " + t.rows.map(r => r.join(" ")).join(" ")).toLowerCase();
    return `<div class="bbg-ref" data-cat="${escAttr(t.category)}" data-search="${escAttr(search)}">
      <div class="bbg-ref-head">
        <span class="bbg-ref-icon">${escBbg(t.icon || "📊")}</span>
        <h3 class="bbg-ref-title">${escBbg(t.title)}${t.draft ? ` <span class="bbg-plan-draft">à vérifier</span>` : ""}</h3>
        <span class="bbg-guide-cat">${escBbg(t.category)}</span>
      </div>
      ${t.note ? `<p class="bbg-ref-note">${escBbg(t.note)}</p>` : ""}
      <div class="table-wrap"><table>
        <thead><tr>${t.columns.map(c => `<th>${escBbg(c)}</th>`).join("")}</tr></thead>
        <tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${escBbg(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>
      ${bbgSeeAlso(t.seeAlso)}
    </div>`;
  }).join("");
  $content.innerHTML = bbgHeader("📊 Références BBG", `${tables.length} tableaux exploitables en jeu · adjacences, combat, coûts, terrain, différences BBG…`)
    + bbgCatChips(cats)
    + `<div class="bbg-reflist">${cards}</div>`;
  wireBbgCatFilter();
  wireBbgSeeAlso();
  scrollTop();
}

/* ---- Backoffice : profils & civs main (édition -> export data/profils.js) ---- */

function boUid() {
  return "p" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36);
}

function renderBackoffice() {
  $content.innerHTML = `
    <div class="fiche-header"><div>
      <h2>🛠️ Backoffice — profils</h2>
      <span class="badge guide">Méta</span>
    </div></div>
    <p class="fiche-sub">Gère les profils des joueurs et leurs <strong>civs main</strong>. Les modifs sont
    gardées en brouillon dans <em>ce</em> navigateur ; clique <strong>Exporter</strong> pour générer
    <code>data/profils.js</code> à committer (c'est ce fichier qui est partagé par tout le monde).</p>
    <div class="bo-actions">
      <button class="bo-btn" id="bo-add">＋ Ajouter un profil</button>
      <button class="bo-btn primary" id="bo-export">💾 Exporter data/profils.js</button>
      <button class="bo-btn ghost" id="bo-reset">↺ Réinitialiser depuis le fichier</button>
    </div>
    <div id="bo-list"></div>
    <div class="bo-export-out" id="bo-export-out" hidden>
      <div class="bo-export-head">
        <strong>data/profils.js</strong>
        <a class="bo-btn" id="bo-download" download="profils.js">⬇ Télécharger</a>
      </div>
      <p class="bo-export-tip">Remplace le contenu de <code>data/profils.js</code> par ceci, puis
      <code>git commit</code>. Les autres verront les profils au prochain déploiement.</p>
      <textarea class="bo-export-text" id="bo-export-text" readonly spellcheck="false"></textarea>
    </div>`;
  boBindGlobal();
  boBindList();
  boRenderList();
  scrollTop();
}

function boBindGlobal() {
  const add = $content.querySelector("#bo-add");
  if (add) add.addEventListener("click", () => {
    PROFILS_STATE.push(profilNormalize({ id: boUid(), nom: "Nouveau joueur", emoji: "🙂", couleur: "#4f7cff", mains: [] }));
    profilsSaveDraft(); boRenderList(); renderMeSelect();
  });
  const reset = $content.querySelector("#bo-reset");
  if (reset) reset.addEventListener("click", () => {
    if (!confirm("Réinitialiser depuis data/profils.js ? Les modifs non exportées seront perdues.")) return;
    try { localStorage.removeItem(PROFILS_KEY); } catch (e) { /* ok */ }
    PROFILS_STATE = profilsSeed();
    profilsSaveDraft(); boRenderList(); renderMeSelect();
    const out = $content.querySelector("#bo-export-out"); if (out) out.hidden = true;
  });
  const exp = $content.querySelector("#bo-export");
  if (exp) exp.addEventListener("click", boExport);
}

function boExport() {
  const body = JSON.stringify(PROFILS_STATE, null, 2);
  const text = `"use strict";
// Profils des joueurs + leurs civs main.
// Généré par le Backoffice de l'app — modifiable à la main, mais l'app réécrit ce format.
// mains = ids de window.BBG_LEADERS (data/bbg-leaders.js).
window.PROFILS = ${body};
`;
  const out = $content.querySelector("#bo-export-out");
  const ta = $content.querySelector("#bo-export-text");
  const dl = $content.querySelector("#bo-download");
  ta.value = text;
  out.hidden = false;
  try {
    const blob = new Blob([text], { type: "text/javascript" });
    if (boExport._url) URL.revokeObjectURL(boExport._url);
    boExport._url = URL.createObjectURL(blob);
    dl.href = boExport._url;
    dl.style.display = "";
  } catch (e) { dl.style.display = "none"; }
  ta.focus(); ta.select();
  try { out.scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch (e) { /* ok */ }
}

function boRenderList() {
  const list = $content.querySelector("#bo-list");
  if (!list) return;
  if (PROFILS_STATE.length === 0) {
    list.innerHTML = `<p class="bo-empty">Aucun profil. Clique « ＋ Ajouter un profil ».</p>`;
    return;
  }
  const map = bbgLeaderMap();
  list.innerHTML = PROFILS_STATE.map(p => {
    const mains = (p.mains || []).map(id => ({ id, l: map[id] }));
    const chips = mains.map(m => `
      <span class="bo-chip">
        ${m.l && m.l.image ? `<img src="${escAttr(m.l.image)}" alt="" onerror="this.style.display='none'">` : ""}
        <span>${fmt(m.l ? m.l.title : m.id)}</span>
        <button class="bo-chip-x" data-mid="${escAttr(m.id)}" title="Retirer">×</button>
      </span>`).join("");
    const col = /^#[0-9a-f]{6}$/i.test(p.couleur) ? p.couleur : "#4f7cff";
    return `<div class="bo-profile" data-pid="${escAttr(p.id)}" style="--bo-accent:${col}">
      <div class="bo-prow">
        <input class="bo-emoji" data-f="emoji" value="${escAttr(p.emoji)}" maxlength="4" aria-label="Emoji">
        <input class="bo-nom" data-f="nom" value="${escAttr(p.nom)}" placeholder="Nom du joueur" aria-label="Nom">
        <input class="bo-col" data-f="couleur" type="color" value="${col}" aria-label="Couleur">
        <span class="bo-pid">#${escBbg(p.id)}</span>
        <button class="bo-del" title="Supprimer ce profil">🗑</button>
      </div>
      <div class="bo-mains">
        <div class="bo-mains-title">★ Civs main <span class="bo-mains-n">${mains.length}</span></div>
        <div class="bo-chips">${chips || `<span class="bo-none">aucune pour l'instant</span>`}</div>
        <div class="bo-addmain">
          <input class="bo-search" placeholder="Ajouter une civ main (chercher un leader BBG)…" autocomplete="off">
          <div class="bo-results" hidden></div>
        </div>
      </div>
    </div>`;
  }).join("");
}

function boProfileOf(el) {
  const prof = el.closest ? el.closest(".bo-profile") : null;
  if (!prof) return null;
  return PROFILS_STATE.find(x => x.id === prof.dataset.pid) || null;
}

function boShowResults(searchEl, p) {
  const prof = searchEl.closest(".bo-profile");
  const box = prof.querySelector(".bo-results");
  if (!box) return;
  const q = (searchEl.value || "").trim().toLowerCase();
  if (!q) { box.hidden = true; box.innerHTML = ""; return; }
  const have = new Set(p.mains || []);
  const res = (window.BBG_LEADERS || [])
    .filter(l => !have.has(l.id) && l.title.toLowerCase().includes(q))
    .slice(0, 40);
  box.innerHTML = res.length
    ? res.map(l => `<button class="bo-res" data-mid="${escAttr(l.id)}">
        ${l.image ? `<img src="${escAttr(l.image)}" alt="" onerror="this.style.display='none'">` : ""}
        <span>${fmt(l.title)}</span></button>`).join("")
    : `<div class="bo-res-empty">Aucune civ.</div>`;
  box.hidden = false;
}

function boBindList() {
  const list = $content.querySelector("#bo-list");
  if (!list) return;
  list.addEventListener("input", (ev) => {
    const t = ev.target;
    const p = boProfileOf(t);
    if (!p) return;
    if (t.classList.contains("bo-search")) { boShowResults(t, p); return; }
    const f = t.dataset.f;
    if (f) { p[f] = t.value; profilsSaveDraft(); renderMeSelect(); }
  });
  list.addEventListener("click", (ev) => {
    const t = ev.target;
    const p = boProfileOf(t);
    if (!p) return;
    if (t.classList.contains("bo-del")) {
      if (!confirm(`Supprimer le profil « ${p.nom} » ?`)) return;
      PROFILS_STATE = PROFILS_STATE.filter(x => x.id !== p.id);
      profilsSaveDraft(); boRenderList(); renderMeSelect();
      return;
    }
    if (t.classList.contains("bo-chip-x")) {
      p.mains = (p.mains || []).filter(id => id !== t.dataset.mid);
      profilsSaveDraft(); boRenderList(); renderMeSelect();
      return;
    }
    const res = t.closest ? t.closest(".bo-res") : null;
    if (res) {
      const mid = res.dataset.mid;
      if (!(p.mains || []).includes(mid)) p.mains.push(mid);
      profilsSaveDraft(); boRenderList(); renderMeSelect();
      return;
    }
  });
}

/* ---- Init ---- */

$search.addEventListener("input", () => renderNav($search.value));
document.querySelector(".sidebar-header h1").addEventListener("click", () => select(""));

/* Liens « termes » : délégation globale sur la zone de contenu. */
$content.addEventListener("click", (ev) => {
  const el = ev.target.closest ? ev.target.closest(".dlink") : null;
  if (!el) return;
  ev.stopPropagation();
  if (el.dataset.tleader) openBbgLeader(el.dataset.tleader);
  else if (el.dataset.tcat) openBbgItem(el.dataset.tcat, el.dataset.tsec ? { section: el.dataset.tsec } : { id: el.dataset.tid });
});

function renderMeSelect() {
  const $me = document.getElementById("me-select");
  if (!$me) return;
  $me.innerHTML = `<option value="tous">Tout le monde</option>`
    + people().map(p => `<option value="${p.id}">${p.emoji} ${fmt(p.nom)}</option>`).join("");
  $me.value = people().some(p => p.id === getMe()) ? getMe() : "tous";
}

const $me = document.getElementById("me-select");
if ($me) {
  renderMeSelect();
  $me.addEventListener("change", () => {
    setMe($me.value);
    renderNav($search.value);
    if (!activeId) renderHome();
  });
}

const initial = location.hash.replace("#", "");
if (initial && (CIV_DATA.some(c => c.id === initial) || GUIDE_DATA.some(g => g.id === initial) || initial === "backoffice" || (initial.indexOf("bbg-") === 0 && bbgHasData()))) {
  select(initial);
} else {
  renderNav("");
  renderHome();
}
