"use strict";
// Plans de partie par leader (contenu STRATÉGIQUE écrit à la main).
// Porté de PaulCuquemelle/civ (src/data/strategy.ts) en JS vanilla.
// mains-clés = ids de window.BBG_LEADERS.
window.BBG_VICTORY_META = {
  Science: { icon: '🔬', color: 'var(--t-civ)' },
  Culture: { icon: '🎭', color: 'var(--t-district)' },
  Domination: { icon: '⚔️', color: 'var(--t-unit)' },
  Religion: { icon: '✝️', color: 'var(--t-building)' },
  Diplomatie: { icon: '🤝', color: 'var(--t-leader)' },
}

window.BBG_STRATEGIES = {
  'babylone-hammurabi': {
    summary:
      'Rush scientifique brutal : chaque eurêka complète instantanément la techno associée.',
    victoryTypes: ['Science'],
    strengths: [
      "Les eurêkas donnent la techno complète (pas seulement un bonus) → arbre technologique en avance énorme.",
      'Peut sauter des ères entières en déclenchant les bons eurêkas.',
    ],
    priorities: [
      'Campus tôt, puis merveilles de science (Grande Bibliothèque, Oxford plus tard).',
      "Déclenche activement les eurêkas (tuer une unité, construire un quartier, découvrir une merveille naturelle…).",
      'Zone industrielle pour la production, car la science pénalise souvent ta production BBG.',
    ],
    policies: ['Rationalisme', 'Cartes de science (+% campus)', 'Natinbi pour la prod'],
    tips: [
      "Garde un œil sur la liste des eurêkas : viser ceux à déclenchement facile fait bondir l'arbre.",
      'Compense la faible production : villes bien placées, récoltes (chops), zones industrielles.',
    ],
    draft: true,
  },
  'azteques-moctezuma': {
    summary:
      'Domination early appuyée sur les Guerriers-aigles et des constructeurs qui aménagent vite.',
    victoryTypes: ['Domination'],
    strengths: [
      'Guerrier-aigle : capture des ouvriers/convertit des unités tuées, pression militaire précoce.',
      'Bonus de production/aménités via les ressources de luxe.',
    ],
    priorities: [
      'Campement militaire tôt, puis armée de Guerriers-aigles avant que l’adversaire ait des murs.',
      'Cible les voisins faibles à l’ère antique/classique (fenêtre de puissance).',
      'Utilise les constructeurs pour accélérer merveilles/quartiers.',
    ],
    policies: ['Cartes militaires (Agôgê, Conscription)', 'Cartes de production de constructeurs'],
    tips: [
      'La fenêtre de force est TÔT : convertis l’avance militaire en villes avant l’artillerie ennemie.',
      'Ne néglige pas les aménités : l’expansion agressive fait vite chuter le bonheur.',
    ],
    draft: true,
  },
  'bresil-pierre-ii-du-bresil': {
    summary:
      'Machine à Grands Personnages : Carnaval + forêts tropicales pour spammer les experts.',
    victoryTypes: ['Culture', 'Science'],
    strengths: [
      'Récupère une partie des points de Grand Personnage dépensés (recrute plus souvent).',
      'Adjacences boostées par la jungle → quartiers puissants sans raser les forêts.',
    ],
    priorities: [
      'Théâtres et Campus adossés aux forêts tropicales.',
      'Recrute agressivement les Grands Écrivains/Artistes/Musiciens pour la culture et le tourisme.',
      'Merveilles générant des points de Grand Personnage.',
    ],
    policies: ['Cartes +points de Grand Personnage', 'Cartes de tourisme (fin de partie)'],
    tips: [
      'Priorise les emplacements riches en jungle : c’est là que le Brésil surperforme.',
      "Vise culture, mais l'accès facile aux Grands Scientifiques ouvre aussi la science.",
    ],
    draft: true,
  },
  'byzance-basile-ii': {
    summary:
      'Croisade militaro-religieuse : ta religion booste directement la puissance de combat.',
    victoryTypes: ['Domination', 'Religion'],
    strengths: [
      'Les unités gagnent en puissance de combat contre les civ d’une autre religion.',
      'Cataphractes (cavalerie lourde unique) très fortes.',
    ],
    priorities: [
      'Fonde une religion tôt (Autel + Grand Prophète), puis convertis avant d’attaquer.',
      'Cataphractes pour percer, en visant les villes de religion différente.',
      'Sainte-Sophie / merveilles religieuses.',
    ],
    policies: ['Cartes militaires', 'Théocratie (achat d’unités à la foi)'],
    tips: [
      'Convertis les villes ennemies AVANT l’assaut : le bonus de combat en dépend.',
      'La foi sert double : religion ET achat d’unités → garde un fort revenu de foi.',
    ],
    draft: true,
  },
  'arabie-saladin-vizir': {
    summary:
      'Religion + science : le culte du Vizir soigne/renforce et alimente une foi énorme.',
    victoryTypes: ['Religion', 'Science'],
    strengths: [
      'Foi bonus garantie sur les Lieux saints, science depuis la foi selon le culte.',
      "Madrasa (université unique) : science + foi d’adjacence.",
    ],
    priorities: [
      'Lieu saint tôt pour verrouiller une religion, puis Madrasa pour la science.',
      'Étends ta religion largement (apôtres, missionnaires).',
      'Merveilles religieuses (Mosquée / bâtiments de propagation).',
    ],
    policies: ['Cartes de foi/religion', 'Rationalisme (phase science)'],
    tips: [
      'Ta foi finance tout : garde-la haute pour apôtres, achats et bonus de culte.',
      'Peut pivoter vers une victoire scientifique grâce à la Madrasa.',
    ],
    draft: true,
  },
  'cris-poundmaker': {
    summary:
      'Expansion pacifique et commerce : routes commerciales et territoire qui s’étend seul.',
    victoryTypes: ['Diplomatie', 'Culture'],
    strengths: [
      'Route commerciale supplémentaire dès le départ ; les cases inexploitées entrent dans ton territoire.',
      'Mekewap (amélioration unique) sur ressources/marais → rendements précieux.',
    ],
    priorities: [
      'Comptoir commercial (Hub) tôt pour maximiser les routes commerciales.',
      'Étale-toi vite : le territoire gratuit récompense l’expansion.',
      'Alliances et cités-États pour la faveur diplomatique.',
    ],
    policies: ['Cartes de routes commerciales', 'Cartes diplomatiques / d’alliance'],
    tips: [
      'Reste ami avec tes voisins : ton économie de commerce déteste la guerre.',
      'Accumule la faveur diplomatique via alliances et cités-États pour les points de victoire.',
    ],
    draft: true,
  },
  'chine-qin-unificateur': {
    summary:
      'Bâtisseur de merveilles : les constructeurs accélèrent les Merveilles de l’Antiquité/Classique.',
    victoryTypes: ['Science', 'Culture'],
    strengths: [
      'Les constructeurs peuvent dépenser des charges pour accélérer les merveilles antiques/classiques.',
      'Grande Muraille et bonus défensifs.',
    ],
    priorities: [
      'Priorise les constructeurs, puis enchaîne les merveilles à fort impact avec leurs charges.',
      'Sécurise une capitale à forte production (collines, forêts à récolter).',
      'Vise les merveilles qui cadrent avec ton objectif (science ou culture).',
    ],
    policies: ['Cartes de production de constructeurs', 'Cartes +production de merveilles'],
    tips: [
      'Ne gaspille pas les charges de constructeur sur des merveilles mineures.',
      'Fenêtre de merveilles = début de partie : place-toi près de ressources récoltables.',
    ],
    draft: true,
  },
  'russie-pierre-ier-le-grand': {
    summary:
      'Foi + science en toundra : la Lavra génère des Grands Prophètes et étend un immense territoire.',
    victoryTypes: ['Religion', 'Science', 'Culture'],
    strengths: [
      'La toundra devient productive → colonise là où personne ne va.',
      'Lavra (Lieu saint unique) : points de Grand Prophète & expansion des frontières.',
      'Routes commerciales vers des civs plus avancées → science & culture « gratuites ».',
    ],
    priorities: [
      'Lieu saint (Lavra) tôt et une religion.',
      'Routes commerciales vers les voisins en avance (rattrape science/culture).',
      'Grande étendue de villes en toundra.',
    ],
    policies: ['Cartes de foi', 'Cartes de routes commerciales'],
    tips: [
      'La toundra est ton amie : les autres la fuient, toi tu la valorises.',
      'Convertis largement : la Lavra fait de toi une puissance religieuse.',
    ],
    draft: true,
  },
  'grece-pericles': {
    summary:
      'Culture par les cités-États : chaque suzeraineté booste directement ta culture.',
    victoryTypes: ['Culture'],
    strengths: [
      '+% culture par cité-État dont tu es suzerain.',
      'Acropole (Théâtre unique) à forte adjacence sur les collines.',
      'Emplacement de doctrine Joker supplémentaire (flexibilité).',
    ],
    priorities: [
      'Acropoles sur les collines.',
      'Envoyés réguliers pour rester suzerain d’un maximum de cités-États.',
      'Merveilles & tourisme en fin de partie.',
    ],
    policies: ['Cartes diplomatiques / d’envoyés', 'Cartes de culture'],
    tips: [
      'Rester suzerain = ta culture : ne néglige jamais les envoyés.',
      'Le gouverneur Amani (émissaire ×2) accélère tes suzerainetés.',
    ],
    draft: true,
  },
  'grece-gorgo': {
    summary:
      'Culture par la guerre : tuer des unités te donne de la culture. Guerre et culture fusionnent.',
    victoryTypes: ['Culture', 'Domination'],
    strengths: [
      'Culture gagnée à chaque unité tuée.',
      'Acropole (Théâtre unique) sur collines.',
      'Pas de lassitude de guerre comme les autres.',
    ],
    priorities: [
      'Acropoles collines.',
      'Une armée pour « farmer » la culture des combats.',
      'Bascule vers le tourisme une fois l’avance culturelle prise.',
    ],
    tips: [
      'Chaque bataille nourrit ta victoire culturelle : reste offensive.',
    ],
    draft: true,
  },
  'allemagne-frederic-barberousse': {
    summary:
      'La production reine : Hansa surpuissante + emplacement militaire et bonus vs cités-États.',
    victoryTypes: ['Domination', 'Science', 'Culture'],
    strengths: [
      'Emplacement de doctrine militaire supplémentaire.',
      'Hansa (Zone industrielle unique) : adjacences énormes → production massive.',
      '+7 force vs cités-États ; un quartier de plus que la limite de population.',
    ],
    priorities: [
      'Hansa près des Hubs commerciaux et ressources.',
      'Exploiter/soumettre les cités-États militairement.',
      'La production te laisse tout construire (merveilles, armée, quartiers).',
    ],
    policies: ['Cartes militaires', 'Cartes de production'],
    tips: [
      'La Hansa est le cœur de ton empire : optimise son placement.',
      'Polyvalent : ta prod ouvre toutes les victoires.',
    ],
    draft: true,
  },
  'rome-trajan': {
    summary:
      'Expansion sans effort : chaque ville naît avec un bâtiment gratuit et une route vers la capitale.',
    victoryTypes: ['Science', 'Culture', 'Domination'],
    strengths: [
      'Toute nouvelle ville démarre avec un bâtiment gratuit du Centre-ville (Monument).',
      'Routes automatiques vers la capitale.',
      'Bain (Aqueduc unique) : aménités & logement.',
    ],
    priorities: [
      'S’étendre largement — chaque ville démarre forte.',
      'Bains pour soutenir la croissance.',
      'Oriente-toi selon la partie (Rome est polyvalente).',
    ],
    tips: [
      'Spamme les villes : le bâtiment gratuit accélère chaque nouvelle ville.',
    ],
    draft: true,
  },
  'sumer-gilgamesh': {
    summary:
      'Domination antique + co-guerres : char de guerre précoce et alliances agressives sans pénalité.',
    victoryTypes: ['Domination'],
    strengths: [
      'Char de guerre : unité unique antique forte, sans ressource requise.',
      'Pas de pénalité pour co-guerroyer avec un allié ; butin de guerre bonus.',
      'Ziggourat (science & culture près des fleuves).',
    ],
    priorities: [
      'Chars de guerre TÔT, avant les murs adverses.',
      'S’allier pour co-attaquer une cible commune.',
      'Ziggourats le long des fleuves.',
    ],
    policies: ['Cartes militaires'],
    tips: [
      'Ta fenêtre est très précoce : frappe avec les chars avant que l’ennemi ne se défende.',
    ],
    draft: true,
  },
  'scythie-tomyris': {
    summary:
      'Nuée de cavalerie qui se régénère : chaque cav légère / archer Saka est créé en double.',
    victoryTypes: ['Domination'],
    strengths: [
      'Cavalerie légère & archers Saka produits par 2.',
      '+5 force contre les unités blessées ; soin à chaque mise à mort.',
    ],
    priorities: [
      'Masse d’archers Saka (unité unique).',
      'Cibler les unités déjà blessées (bonus + soin).',
      'Campements & pâturages.',
    ],
    policies: ['Cartes militaires (cavalerie)'],
    tips: [
      'Ta cavalerie se soigne en tuant : harcèle sans relâche pendant la fenêtre médiévale.',
    ],
    draft: true,
  },
  'norvege-harald-hardrade-konge': {
    summary:
      'Raids côtiers : pille villes et quartiers depuis la mer pour financer ta guerre.',
    victoryTypes: ['Domination'],
    strengths: [
      'Drakkar (unité navale de raid) ; les unités navales de mêlée pillent les côtes.',
      '+production d’unités navales de mêlée ; débarquement facilité.',
    ],
    priorities: [
      'Flotte de Drakkars.',
      'Piller les villes/quartiers côtiers (or & foi).',
      'Lieux saints (bonus de foi).',
    ],
    tips: [
      'Vise des cartes riches en côtes : le pillage naval paie toute ta campagne.',
    ],
    draft: true,
  },
  'mongolie-gengis-khan': {
    summary:
      'Cavalerie + renseignement : ta visibilité diplomatique sur l’ennemi te donne de la force.',
    victoryTypes: ['Domination'],
    strengths: [
      '+force de combat selon ta visibilité diplomatique sur la cible.',
      'Cavalerie capturée/améliorée gratuitement ; Ordu (Campement) booste la cavalerie.',
    ],
    priorities: [
      'Cavalerie lourde et légère.',
      'Ambassades / espions / délégations pour la visibilité (= +force).',
      'Ordus pour renforcer ta cavalerie.',
    ],
    policies: ['Cartes militaires', 'Cartes d’espionnage'],
    tips: [
      'Plus tu « vois » l’ennemi, plus tu frappes fort : investis dans le renseignement avant la guerre.',
    ],
    draft: true,
  },
  'coree-seondeok': {
    summary:
      'Science verrouillée : Seowon à science élevée + gouverneurs qui boostent tes rendements.',
    victoryTypes: ['Science'],
    strengths: [
      'Seowon (Campus unique) à science de base forte — mais pénalisé par les quartiers adjacents.',
      '+science & culture pour les villes ayant un gouverneur établi.',
    ],
    priorities: [
      'Seowon ISOLÉ (aucun quartier adjacent) entouré de mines/fermes.',
      'Placer et promouvoir des gouverneurs dans un maximum de villes.',
      'Priorité science.',
    ],
    policies: ['Rationalisme', 'Cartes de science'],
    tips: [
      'N’entoure PAS le Seowon d’autres quartiers (malus d’adjacence).',
      'Multiplie les gouverneurs : chacun booste directement la science.',
    ],
    draft: true,
  },
  'mali-mansa-moussa': {
    summary:
      'Or & foi du désert : commerce énorme et achats à gogo, mais production faible.',
    victoryTypes: ['Religion', 'Culture', 'Diplomatie'],
    strengths: [
      '+or & +foi sur les routes commerciales.',
      'Suguba (Hub unique) : achats à l’or/foi moins chers.',
      'Rendements du désert (Lieux saints, merveilles désertiques).',
    ],
    priorities: [
      'Suguba pour ACHETER bâtiments/unités à l’or et à la foi.',
      'Multiplier les routes commerciales.',
      'S’installer dans le désert (Lieux saints, Petra).',
    ],
    policies: ['Cartes de routes commerciales', 'Cartes de foi'],
    tips: [
      'Ta production est faible : compense en achetant tout à l’or/foi via la Suguba.',
    ],
    draft: true,
  },
  'japon-hojo-tokimune': {
    summary:
      'Quartiers collés : adjacence majeure entre districts, empire dense et polyvalent.',
    victoryTypes: ['Science', 'Culture', 'Domination'],
    strengths: [
      'Les districts se donnent une adjacence MAJEURE entre eux → empile-les.',
      '+combat côtier ; samouraïs qui ne perdent pas de force en étant blessés.',
    ],
    priorities: [
      'Regrouper les quartiers pour maximiser l’adjacence.',
      'Villes côtières.',
      'Polyvalence (science/culture/domination selon la partie).',
    ],
    tips: [
      'Colle tes quartiers : le Japon transforme la densité en rendements. Excellent all-round.',
    ],
    draft: true,
  },
  'perse-cyrus': {
    summary:
      'Routes commerciales INTÉRIEURES + agression précoce : ton économie tourne pendant que tu attaques.',
    victoryTypes: ['Domination', 'Culture'],
    strengths: [
      'Satrapies : tes routes commerciales intérieures rapportent de l’or (montant qui scale) + capacité de route +1 dès la Philosophie politique.',
      'Chute de Babylone : +3 force en attaque pour TOUTES tes unités + culture sur les routes intérieures + loyauté.',
      'Pairidaēza (aménagement) : or, culture, logement, et adjacence aux quartiers commerciaux.',
      'Immortel : épéiste unique avec attaque à distance → fenêtre de guerre classique.',
    ],
    priorities: [
      'Maximise les routes commerciales INTÉRIEURES (Hubs, marchands).',
      'Philosophie politique tôt (+1 capacité de route).',
      'Pairidaēza autour de tes quartiers commerciaux.',
      'Immortels pour une guerre (souvent surprise) à l’ère classique.',
    ],
    policies: ['Cartes de routes commerciales', 'Cartes militaires (guerre surprise)'],
    tips: [
      'Tes routes intérieures financent tout : garde-les nombreuses et protégées.',
      'La guerre surprise + le +3 force en attaque est ta signature : frappe un voisin sans stopper ton économie.',
    ],
    draft: true,
  },
  'perse-nader-shah': {
    summary:
      'Même moteur de routes intérieures, orienté SCIENCE + domination (gros bonus d’attaque).',
    victoryTypes: ['Domination', 'Science'],
    strengths: [
      'Satrapies : or des routes intérieures (+ capacité de route +1).',
      'Épée de Perse : +1 science sur tes routes intérieures (scale) ET +5 force en attaque.',
      'Pairidaēza (or/culture/logement) + adjacence commerciale.',
      'Immortel (attaque à distance) pour la fenêtre classique.',
    ],
    priorities: [
      'Routes commerciales intérieures à foison → or + science.',
      'Pairidaēza près des quartiers commerciaux.',
      'Armée pour exploiter le +5 force en attaque.',
      'Philosophie politique tôt (+1 route).',
    ],
    policies: ['Cartes de routes commerciales', 'Cartes militaires', 'Rationalisme'],
    tips: [
      'Tes routes intérieures donnent or ET science : c’est ton double moteur.',
      'Grignote les voisins avec le bonus d’attaque tout en développant ton économie/science.',
    ],
    draft: true,
  },
  'pays-bas-wilhelmine': {
    summary:
      'Rivières & commerce international : quartiers boostés par les fleuves, culture via les routes (même celles des autres).',
    victoryTypes: ['Culture', 'Science', 'Diplomatie'],
    strengths: [
      'Grote Rivieren : +2 adjacence pour Zone industrielle / Campus / Théâtre le long d’une rivière.',
      'Radio Oranje : +2 culture sur tes routes internationales, et les routes ÉTRANGÈRES vers toi donnent aussi de la culture.',
      'Polder (nourriture/production/logement) ; De Zeven Provinciën (frégate unique).',
    ],
    priorities: [
      'Villes sur rivières ; colle Campus/Théâtre/Zone industrielle aux fleuves.',
      'Routes commerciales internationales (culture).',
      'Polders sur côtes/lacs pour la nourriture.',
    ],
    policies: ['Cartes de routes commerciales', 'Cartes de culture'],
    tips: [
      'Les fleuves sont ta force : place tes quartiers le long de l’eau.',
      'Tu gagnes de la culture même via les routes des AUTRES vers toi : sois un carrefour commercial.',
    ],
    draft: true,
  },
  'portugal-jean-iii': {
    summary:
      'Le meilleur commerce maritime du jeu : routes internationales ultra-rentables + toujours plus de marchands.',
    victoryTypes: ['Science', 'Culture', 'Diplomatie'],
    strengths: [
      'Casa da Índia : tes routes internationales sont massivement boostées (or/science/culture) — mais doivent longer les côtes / cases adjacentes à l’eau.',
      'Porta do Cerco : +1 vision, LIBRE PASSAGE avec les cités-États, et +1 capacité de route à CHAQUE ère (dès l’antiquité).',
      'École navale (université unique) ; Feitoria (or/prod) ; Nau (2 charges de feitoria, entretien réduit).',
    ],
    priorities: [
      'Empile les routes commerciales INTERNATIONALES maritimes.',
      'Feitorias sur les côtes proches d’autres civs.',
      'Écoles navales dans tes villes côtières.',
    ],
    policies: ['Cartes de routes commerciales internationales'],
    tips: [
      'Tu as toujours plus de marchands que les autres (+1 route par ère) : exploite-le à fond.',
      'Tes routes doivent rester côtières : installe-toi et commerce le long des mers.',
    ],
    draft: true,
  },
  'phenicie-didon': {
    summary:
      'Colonies côtières 100 % loyales + capitale déplaçable : expansion maritime agressive sans révolte.',
    victoryTypes: ['Science', 'Culture', 'Domination'],
    strengths: [
      'Les villes côtières sur le continent de ta capitale sont loyales à 100 % → étends-toi sans crainte.',
      'Eurêka d’Écriture au départ ; Fondatrice de Carthage : +1 capacité de route par bâtiment de la Place de la gouvernance, et tu peux DÉPLACER ta capitale.',
      'Cothon (port unique : +25 % unités navales & colons) ; Birème (galère unique).',
    ],
    priorities: [
      'Colonise vite les côtes (loyauté garantie).',
      'Place de la gouvernance tôt (routes + production).',
      'Cothons pour produire colons et flotte ; routes commerciales.',
    ],
    policies: ['Cartes de production de colons', 'Cartes de routes commerciales'],
    tips: [
      'Expansion côtière sans souci de loyauté : c’est ta grande force.',
      'Déplace ta capitale au cœur de ton empire pour maximiser les colonies loyales.',
    ],
    draft: true,
  },
  'hongrie-matthias-corvin': {
    summary:
      'Roi des cités-États : lève leurs troupes à bas coût et écrase avec une armée d’emprunt.',
    victoryTypes: ['Domination', 'Diplomatie'],
    strengths: [
      'Perle du Danube : +50 % production pour les quartiers/bâtiments posés de l’AUTRE côté d’un fleuve par rapport au Centre-ville.',
      'Roi-corbeau : unités levées des cités-États +1 PM, améliorations -75 % or, et lever des troupes donne un émissaire.',
      'Station thermale (zoo unique) ; Armée noire & Hussard (cavalerie légère uniques).',
    ],
    priorities: [
      'Reste ami/suzerain des cités-États pour lever leurs unités.',
      'Centre-ville au bord d’un fleuve, quartiers sur l’autre rive (+50 % prod).',
      'Guerroie avec une armée levée bon marché.',
    ],
    policies: ['Cartes militaires', 'Cartes d’envoyés'],
    tips: [
      'Lever les troupes d’une cité-État te donne une armée ET un émissaire : double gain.',
      'Positionne tes quartiers de l’autre côté du fleuve pour le +50 % production.',
    ],
    draft: true,
  },
  'egypte-cleopatre-ptolemaique': {
    summary:
      'Bâtisseuse de rivières : +15 % prod pour les quartiers/merveilles près des fleuves, immunisée aux inondations.',
    victoryTypes: ['Science', 'Culture'],
    strengths: [
      'Iteru : +15 % production pour quartiers/merveilles adjacents à une rivière ; aucun dégât d’inondation.',
      'Arrivée d’Hâpy : +15 % prod Campements/Campus sur rivière + +2 science d’adjacence rivière.',
      'Sphinx (culture/foi) ; Archer sur char Maryannu (unité montée à distance).',
    ],
    priorities: [
      'Villes sur rivières ; spamme quartiers & merveilles près de l’eau.',
      'Campus le long des fleuves pour la science.',
      'Sphinx pour culture/foi.',
    ],
    tips: [
      'Colle-toi aux fleuves : merveilles et quartiers sortent 15 % plus vite, sans risque d’inondation.',
      'Excellente bâtisseuse de merveilles grâce au bonus de production riverain.',
    ],
    draft: true,
  },
  'indonesie-dyah-gitarja': {
    summary:
      'Puissance côtière : quartiers boostés par la mer et foi des quartiers côtiers → forte religion navale.',
    victoryTypes: ['Religion', 'Culture', 'Science'],
    strengths: [
      'Grand Nusantara : +0,5 adjacence (Zone ind./Campus/Théâtre/Lieu saint) par case de côte/lac adjacente ; +1 aménité aux Complexes de loisirs côtiers.',
      'Déesse exaltée : tes quartiers côtiers fournissent de la foi (dès Navigation à voile).',
      'Kampung (prod/logement) ; Jonque (frégate unique en formation).',
    ],
    priorities: [
      'Villes côtières avec quartiers au bord de l’eau (adjacence + foi).',
      'Lieux saints côtiers pour fonder une religion.',
      'Kampungs près des bateaux de pêche.',
    ],
    policies: ['Cartes de foi', 'Cartes navales'],
    tips: [
      'Place tes quartiers le long des côtes : ils gagnent adjacence ET foi.',
      'Excellente pour une religion sur carte maritime.',
    ],
    draft: true,
  },
  'mali-soundiata-keita': {
    summary:
      'Or & foi du désert, orienté culture : Grands Écrivains bon marché et achats via la Suguba.',
    victoryTypes: ['Culture', 'Religion', 'Diplomatie'],
    strengths: [
      'Chants des djélis : le désert donne foi/nourriture/or (mines), et tu peux y faire des fermes.',
      'Sogolon : -30 % or pour recruter des Personnages illustres ; +1 pt d’Écrivain (Suguba + Théâtre) ; marchés = 2 emplacements d’œuvres littéraires.',
      'Suguba (Hub unique : or d’adjacence, achats -20 %) ; Cavalerie Mandékalou (protège les marchands, or aux mises à mort).',
    ],
    priorities: [
      'Installe-toi dans le désert ; Sugubas pour l’or/foi et des achats moins chers.',
      'Recrute des Grands Écrivains (bon marché) pour une poussée culturelle.',
      'Routes commerciales et Lieux saints.',
    ],
    policies: ['Cartes de foi', 'Cartes de routes commerciales', 'Cartes de Grand Personnage'],
    tips: [
      'Comme Mansa Moussa, ta production est faible : ACHÈTE tout via la Suguba (or/foi).',
      'Tes Grands Écrivains pas chers + emplacements de marché = une culture qui grimpe vite.',
    ],
    draft: true,
  },
  'maya-dame-six-cieux': {
    summary:
      'Empire compact et scientifique : regroupe tes villes autour de la capitale, Observatoires nourris de fermes.',
    victoryTypes: ['Science', 'Culture'],
    strengths: [
      '+5 % rendements pour les villes à ≤ 6 cases de la capitale — mais -10 % au-delà → joue COMPACT.',
      'Observatoire (Campus unique) : science depuis les fermes, plantations et failles géothermiques.',
      '+3 force près de la capitale (défense solide) ; Hul-Che (archer unique, +5 vs blessés).',
    ],
    priorities: [
      'Regroupe toutes tes villes dans le rayon de 6 cases de la capitale.',
      'Beaucoup de fermes/plantations autour des Observatoires.',
      'Ne t’étale pas loin (malus de -10 %).',
    ],
    tips: [
      'Pas de logement de l’eau douce (Mayab) : compense par fermes et aménagements.',
      'Compact = puissant : chaque ville lointaine te pénalise.',
    ],
    draft: true,
  },
  'incas-pachacutec': {
    summary:
      'Maître des montagnes : cases de montagne productives + cultures en terrasses pour une croissance folle.',
    victoryTypes: ['Science', 'Culture', 'Domination'],
    strengths: [
      'Montagnes : +2/+3 production (normalement inexploitables).',
      'Cultures en terrasses : nourriture + logement sur collines près des montagnes → villes énormes.',
      'Routes commerciales boostées par les montagnes de la ville d’origine ; achat de cases -50 %.',
    ],
    priorities: [
      'Fonde au milieu des montagnes.',
      'Spamme les cultures en terrasses (nourriture/logement, +prod près des aqueducs).',
      'Routes commerciales depuis tes villes montagneuses.',
    ],
    tips: [
      'Plus il y a de montagnes, plus tu es fort : cherche les départs montagneux.',
      'Les terrasses transforment un terrain « pauvre » en méga-villes.',
    ],
    draft: true,
  },
  'gaule-ambiorix': {
    summary:
      'Production minière + poussée militaire précoce. Attention : logique de quartiers INVERSE.',
    victoryTypes: ['Domination', 'Science', 'Culture'],
    strengths: [
      'Quartiers boostés par carrières/mines, mais PAS par les autres quartiers et interdits près du Centre-ville → étale-les.',
      'Oppidum (Zone industrielle unique) : +2 prod par ressource stratégique adjacente.',
      'Roi des Éburons : +1 force par unité militaire adjacente + culture en produisant des unités ; Gésates (+10 vs unités plus fortes).',
    ],
    priorities: [
      'Fonde en terrain riche en collines / mines / ressources stratégiques.',
      'Espace tes quartiers (jamais collés au Centre-ville).',
      'Produis des unités militaires tôt (culture + Gésates).',
    ],
    tips: [
      'Ta logique de districts est inversée : disperse-les près des mines/carrières.',
      'La production militaire donne de la culture : arme-toi ET développe-toi.',
    ],
    draft: true,
  },
  'nubie-amanitore': {
    summary:
      'Bâtisseuse de quartiers + archers surpuissants : les pyramides nubiennes accélèrent tout.',
    victoryTypes: ['Science', 'Culture', 'Domination'],
    strengths: [
      '+20 % production de quartiers (→ +40 % si la ville a une pyramide nubienne) : tu poses tout plus vite.',
      'Pyramide nubienne : nourriture/foi + rendements bonus aux quartiers adjacents.',
      '+30 % prod & +50 % XP pour les unités à distance → rush d’archers Pítati.',
    ],
    priorities: [
      'Pyramide nubienne près de tes quartiers (+40 % prod).',
      'Spamme les quartiers de ton objectif.',
      'Archers Pítati pour la guerre / la défense.',
    ],
    tips: [
      'Tu construis les quartiers plus vite que quiconque : prends l’avance.',
      'Le rush d’archers Pítati (portée + force) est très fort en milieu de partie.',
    ],
    draft: true,
  },
  'australie-john-curtin': {
    summary:
      'Quartiers sur cases à fort Appel + explosion de production quand on te déclare la guerre.',
    victoryTypes: ['Culture', 'Science', 'Domination'],
    strengths: [
      'Hub/Campus/Théâtre/Lieu saint boostés sur les cases à Appel charmant (+3 si époustouflant).',
      'Citadelle de civilisation : +50 % production 10 tours après une guerre subie ou une ville libérée.',
      'Élevages de l’Outback (nourriture) ; Digger (fort en côtier).',
    ],
    priorities: [
      'Place tes quartiers sur des cases à fort Appel (merveilles naturelles, parcs).',
      'Profite du +50 % prod quand on te déclare la guerre (contre-boom).',
      'Développe tes villes côtières.',
    ],
    tips: [
      'Soigne l’Appel de ton territoire : c’est le cœur de tes rendements.',
      'Se faire déclarer la guerre te DOPE : encaisse puis contre-attaque.',
    ],
    draft: true,
  },
  'ethiopie-menelik-ii': {
    summary:
      'La foi devient science ET culture : installe-toi sur les collines, économie de foi qui alimente tout.',
    victoryTypes: ['Science', 'Culture', 'Religion'],
    strengths: [
      'Villes sur collines/ressources : 10 % de ta foi générée aussi en science ET en culture.',
      'Routes internationales + ressources = foi ; peut acheter archéologues/musées à la foi.',
      'Église rupestre (foi/Appel/tourisme sur collines/montagnes) ; Cavalerie oromo (+4 sur collines).',
    ],
    priorities: [
      'Fonde sur des collines/ressources (conversion foi → science + culture).',
      'Bâtis une grosse économie de foi (Lieux saints, routes internationales).',
      'Églises rupestres pour foi et tourisme.',
    ],
    tips: [
      'Ta foi paie ta science ET ta culture : maximise-la et installe-toi en hauteur.',
      'Très flexible : science, culture ou religion selon la partie.',
    ],
    draft: true,
  },
  'kongo-mvemba-a-nzinga': {
    summary:
      'Sans religion, mais rendements énormes des Grandes Œuvres/reliques ; villes géantes en forêt.',
    victoryTypes: ['Culture', 'Domination', 'Science'],
    strengths: [
      'Reliques/artefacts/sculptures = nourriture + prod + or + foi massifs ; palais à 5 emplacements d’œuvres.',
      'Mbanza (quartier unique) : nourriture/or et +5 logement sur forêt/jungle.',
      'Reçoit des apôtres gratuits (Théâtre/Mbanza) → convertit sans fonder de religion ; Ngao Mbeba (voit à travers les bois, +10 def vs distance).',
    ],
    priorities: [
      'Récupère un max de Grandes Œuvres/reliques/artefacts (Théâtres, archéologie).',
      'Mbanzas sur les cases boisées (logement massif).',
      'Profite des religions des autres (tu ne peux pas en fonder).',
    ],
    tips: [
      'Pas de religion : mise tout sur les Grandes Œuvres et les reliques.',
      'Les forêts sont précieuses : les Mbanzas y font des villes géantes.',
    ],
    draft: true,
  },
  'vietnam-ba-trieu': {
    summary:
      'Culture & défense en terrain boisé : quartiers sur forêts/marais, embuscades imparables chez toi.',
    victoryTypes: ['Culture', 'Domination'],
    strengths: [
      'Quartiers spécialisés seulement sur forêts/marais/jungle/plaines inondables — mais avec des rendements bonus (garde tes forêts !).',
      'Thành (Campement unique) : +2 culture par quartier adjacent + tourisme.',
      'Expulsion des agresseurs : +2 PM & +2 force dans tes forêts/marais → défense redoutable ; Voi Chiến (bouge après tir).',
    ],
    priorities: [
      'Fonde en terrain boisé/humide (obligatoire pour les quartiers).',
      'NE récolte PAS tes forêts : elles portent tes quartiers.',
      'Thành pour la culture ; défends dans tes forêts.',
    ],
    tips: [
      'Tes quartiers dépendent des forêts : préserve-les absolument.',
      'Chez toi, en forêt, tu es quasi imbattable : attire l’ennemi dans les bois.',
    ],
    draft: true,
  },
  'peuple-khmer-jayavarman-vii': {
    summary:
      'Foi + nourriture au bord des fleuves : villes énormes, Lieux saints riverains, culture par la population.',
    victoryTypes: ['Religion', 'Culture', 'Science'],
    strengths: [
      'Aqueduc = +1 aménité & +2 nourriture aux fermes adjacentes → grosses populations.',
      'Lieux saints au bord d’un fleuve : +nourriture/logement + bombe culturelle à l’achèvement.',
      'Prasat (temple unique) : +6 foi + culture/tourisme selon la population ; Domrey (siège qui bouge et tire).',
    ],
    priorities: [
      'Villes sur fleuve avec Aqueduc + Lieu saint riverain.',
      'Fermes autour des aqueducs/Lieux saints (nourriture/foi).',
      'Vise de grosses populations (le Prasat scale avec les citoyens).',
    ],
    tips: [
      'Tes villes deviennent immenses : foi et culture montent avec la population.',
      'Chaque Lieu saint achevé = bombe culturelle (frontières).',
    ],
    draft: true,
  },
  'georgie-tamar': {
    summary:
      'Foi + cités-États + âges d’or : émissaires doublés, murs surpuissants, guerres de protectorat.',
    victoryTypes: ['Religion', 'Diplomatie', 'Culture'],
    strengths: [
      'Si ta religion domine ton empire : émissaires DOUBLÉS dans les cités-États de ta religion + foi par émissaire.',
      '+50 % prod remparts ; Tsikhe (remparts uniques : +25 def, foi/culture, bonus en âge d’or).',
      'En âge d’or/héroïque tu gagnes AUSSI le bonus de score d’ère normal.',
    ],
    priorities: [
      'Verrouille ta religion chez toi tôt (débloque les émissaires doublés).',
      'Envoyés vers les cités-États de ta religion → suzerainetés rapides.',
      'Vise les âges d’or et défends avec les Tsikhe.',
    ],
    tips: [
      'Religion + cités-États se renforcent : c’est le cœur de ta victoire diplo/religieuse.',
      'Guerres de protectorat (cité-État alliée attaquée) = 0 pénalité : joue les gardiens.',
    ],
    draft: true,
  },
  'macedoine-alexandre': {
    summary:
      'Conquête boule de neige : chaque ville prise donne science, prod et zéro lassitude de guerre.',
    victoryTypes: ['Domination'],
    strengths: [
      'Aucune usure de guerre → guerre permanente sans malus.',
      'Prendre une ville : +20 % prod, eurêkas (Campus/Campement) et inspirations (Théâtre/Lieu saint) → tu progresses en conquérant.',
      'Soin complet en capturant une ville à merveille ; Hétairoi + Hypaspistes + Basilikoi Paides (XP/science).',
    ],
    priorities: [
      'Guerre continue de l’ère classique à la fin (Hétairoi près d’un Grand Général).',
      'Enchaîne les captures pour la science/prod.',
      'Vise les villes à merveilles (soin gratuit).',
    ],
    tips: [
      'Tu n’as jamais à faire la paix (zéro usure) : reste en guerre en permanence.',
      'Chaque conquête te fait progresser : la guerre EST ton économie.',
    ],
    draft: true,
  },
  'ottomans-soliman-kanuni': {
    summary:
      'Rouleau compresseur de siège : villes prises intactes et loyales, artillerie surpuissante.',
    victoryTypes: ['Domination'],
    strengths: [
      'Unités de siège +50 % prod & +3 force → tu perces tout.',
      'Capturer une ville ne réduit pas sa population ; +aménité & +4 loyauté pour les villes non ottomanes → conquêtes stables.',
      'Grand vizir (gouverneur militaire unique) ; Janissaires (mousquetaire fort) ; Grand bazar (or/aménités).',
    ],
    priorities: [
      'Masse d’unités de siège (bélier → trébuchet → artillerie).',
      'Enchaîne les conquêtes : les villes restent grosses et loyales.',
      'Gouverneur Ibrahim pour renforcer ton armée.',
    ],
    tips: [
      'Tes conquêtes ne se révoltent pas et gardent leur population : idéal pour bouler la carte.',
      'Le siège est ta signature : priorise-le fortement.',
    ],
    draft: true,
  },
  'egypte-cleopatre-egyptienne': {
    summary:
      'Commerce international + bâtisseuse de rivières : +6 or par route et quartiers rapides près des fleuves.',
    victoryTypes: ['Culture', 'Diplomatie', 'Science'],
    strengths: [
      '+6 or sur tes routes commerciales internationales ; les routes étrangères vers toi te rapportent aussi.',
      '+15 % prod quartiers/merveilles près des rivières (Hubs/Théâtres +15 % supplémentaires) ; aucun dégât d’inondation.',
      'Sphinx (culture/foi) ; Archer sur char Maryannu.',
    ],
    priorities: [
      'Villes sur rivières ; multiplie les routes commerciales internationales.',
      'Hubs commerciaux et Théâtres au bord de l’eau (+15 %).',
      'Sphinx pour culture/foi.',
    ],
    tips: [
      'Bon compromis commerce + merveilles : ton or finance tout.',
      'Deviens un carrefour commercial : même les routes des autres vers toi paient.',
    ],
    draft: true,
  },
  'byzance-theodora': {
    summary:
      'Domination religieuse : convertis les villes saintes pour un bonus de combat, cavalerie gratuite via l’Hippodrome.',
    victoryTypes: ['Domination', 'Religion'],
    strengths: [
      '+2 force & +3 force religieuse par ville sainte convertie à ta religion (y compris la tienne).',
      'Tuer une unité propage ta religion aux villes proches → la guerre convertit.',
      'Hippodrome (Complexe de loisirs unique) : cavalerie lourde la plus avancée GRATUITE à l’achèvement de ses bâtiments ; Lieux saints boostés.',
    ],
    priorities: [
      'Fonde une religion et convertis les villes saintes (chaque conversion = +force partout).',
      'Hippodromes pour une armée de cavalerie lourde gratuite.',
      'Combine guerre et propagation (les kills convertissent).',
    ],
    tips: [
      'Plus tu convertis de villes saintes, plus ton armée frappe fort : religion ET guerre.',
      'L’Hippodrome te donne des cavaliers gratuits : c’est ton armée de base.',
    ],
    draft: true,
  },
  'amerique-abraham-lincoln': {
    summary:
      'Zones industrielles surpuissantes : production massive + unités gratuites. Évite les plantations.',
    victoryTypes: ['Domination', 'Science', 'Culture'],
    strengths: [
      '+100 % production des Zones industrielles & Aqueducs.',
      'Chaque Zone industrielle (ou son bâtiment) achevée = +2 aménité, +3 loyauté et une unité de mêlée GRATUITE.',
      'Emplacements diplomatiques convertis en Jokers (+faveur) ; studio de cinéma (tourisme).',
    ],
    priorities: [
      'Zones industrielles partout (production + unités gratuites).',
      'Éviter les plantations (-2 loyauté chacune !).',
      'Convertir la production en armée / merveilles / projets.',
    ],
    tips: [
      'Ta production industrielle est énorme : spamme les Zones industrielles.',
      'N’aménage pas de plantations : elles ruinent ta loyauté.',
    ],
    draft: true,
  },
  'amerique-theodore-roosevelt-elan': {
    summary:
      'Appel & parcs nationaux : les cases époustouflantes rapportent, et tu es solide sur ton continent.',
    victoryTypes: ['Culture', 'Science'],
    strengths: [
      'Cases à Appel époustouflant → science/culture/rendements bonus.',
      '+force de combat sur ton continent d’origine.',
      'Parcs nationaux ; studio de cinéma (tourisme) ; emplacements Jokers (+faveur).',
    ],
    priorities: [
      'Préserver l’Appel (merveilles naturelles, montagnes, parcs).',
      'Poser quartiers et Parcs nationaux sur les cases époustouflantes.',
      'Défendre ton continent.',
    ],
    tips: [
      'Joue l’Appel et les Parcs nationaux : moteur culture/science + tourisme.',
    ],
    draft: true,
  },
  'amerique-theodore-roosevelt-rough-rider': {
    summary:
      'Domination sur ton continent : bonus de force par ère franchie, Rough Riders sur les collines.',
    victoryTypes: ['Domination', 'Culture'],
    strengths: [
      '+1 force par ère franchie (jusqu’à +5 à l’ère industrielle).',
      'Rough Rider (+5 sur collines, culture aux mises à mort) ; fort sur ton continent.',
      'Emplacements Jokers (+faveur) ; studio de cinéma.',
    ],
    priorities: [
      'Guerroyer sur ton propre continent (bonus maximaux).',
      'Rough Riders dans les collines.',
      'Convertir les combats en culture.',
    ],
    tips: [
      'Reste sur ton continent : tes bonus de combat y sont les plus forts.',
    ],
    draft: true,
  },
  'arabie-saladin-sultan': {
    summary:
      'Guerre sainte : tes unités près d’un apôtre frappent fort ; la foi achète science et campements.',
    victoryTypes: ['Religion', 'Domination', 'Science'],
    strengths: [
      'Religion quasi garantie (dernier Grand Prophète recruté automatiquement).',
      'Grande victoire : +5 force aux unités à ≤ 2 cases d’un Apôtre ; achat des bâtiments Campus/Campement à la foi (-10 %).',
      'Médersa (foi = adjacence du Campus) ; Mamelouk (se soigne chaque tour).',
    ],
    priorities: [
      'Fonder une religion (facile) puis accompagner ton armée d’apôtres (+5 force).',
      'Acheter Campus/Campements à la foi.',
      'Mamelouks pour une guerre médiévale mobile.',
    ],
    tips: [
      'Garde des apôtres près de ton armée : le +5 force change les combats.',
      'Ta foi finance science ET guerre.',
    ],
    draft: true,
  },
  'canada-wilfrid-laurier': {
    summary:
      'Grand Nord pacifique : toundra productive, parcs nationaux et faveur diplomatique, à l’abri des guerres surprises.',
    victoryTypes: ['Diplomatie', 'Culture', 'Science'],
    strengths: [
      'Toundra rendue vivable (fermes, nourriture) → colonise le Nord que les autres fuient.',
      'Impossible de subir (ou déclarer) une guerre surprise : sécurité totale.',
      '+faveur diplomatique via tourisme/urgences ; Police montée & Patinoires (parcs, tourisme).',
    ],
    priorities: [
      'Coloniser la toundra/neige.',
      'Parcs nationaux (la Police montée les construit).',
      'Accumuler la faveur pour le Congrès mondial.',
    ],
    tips: [
      'Tu ne peux pas subir de guerre surprise : joue tranquillement ton tempo.',
      'La toundra que les autres évitent devient ton empire.',
    ],
    draft: true,
  },
  'chine-kubilai-khan-chine': {
    summary:
      'Boosts + commerce : eurêkas renforcés, emplacement économique bonus, routes internationales science/culture.',
    victoryTypes: ['Science', 'Culture'],
    strengths: [
      '+5 % à tous les eurêkas/inspirations (Cycle dynastique).',
      'Emplacement de doctrine ÉCONOMIQUE supplémentaire à tous les gouvernements.',
      'Routes internationales = +science +culture ; Grande Muraille (or/culture).',
    ],
    priorities: [
      'Déclenche un maximum d’eurêkas (le +5 % s’ajoute).',
      'Routes commerciales internationales.',
      'Exploiter l’emplacement économique bonus.',
    ],
    tips: [
      'Chaque boost vaut un peu plus : joue à fond les eurêkas.',
      'L’emplacement économique gratuit est un avantage permanent.',
    ],
    draft: true,
  },
  'chine-qin-mandat-du-ciel': {
    summary:
      'Bâtisseur de merveilles via les constructeurs (variante Mandat du Ciel) + boosts.',
    victoryTypes: ['Science', 'Culture'],
    strengths: [
      '+1 charge de constructeur ; dépenser une charge complète 15 % d’une merveille antique/classique.',
      '+5 % eurêkas/inspirations ; Grande Muraille.',
    ],
    priorities: [
      'Constructeurs pour rusher les merveilles.',
      'Cibler les merveilles fortes de ton objectif.',
      'Grande Muraille défensive.',
    ],
    tips: [
      'Comme l’autre Qin : accumule des constructeurs et rush les merveilles clés.',
    ],
    draft: true,
  },
  'chine-wu-zetian': {
    summary:
      'Reine de l’espionnage : tes missions volent science, culture ET foi en plus de leur effet.',
    victoryTypes: ['Science', 'Culture', 'Domination'],
    strengths: [
      'Espions offensifs +1 niveau ; une mission réussie te donne 100 % de la science/culture/foi produite.',
      '+5 % eurêkas/inspirations ; Grande Muraille.',
    ],
    priorities: [
      'Bâtir un solide corps d’espions tôt.',
      'Missions offensives (vol de science/culture/foi + boosts).',
      'Grande Muraille pour la défense.',
    ],
    tips: [
      'L’espionnage est ton économie parallèle : investis dans les espions.',
      '« Gagne des sources » d’abord pour fiabiliser tes missions.',
    ],
    draft: true,
  },
  'chine-ming-yongle': {
    summary:
      'Économie de projets & grandes villes : convertis ta production en or, foi ou nourriture.',
    victoryTypes: ['Science', 'Culture', 'Diplomatie'],
    strengths: [
      '3 projets uniques : 70 % de la prod → nourriture/foi, ou 150 % → or.',
      'Rendements par citoyen (or/science/culture) → vise de grosses villes.',
      '+5 % eurêkas/inspirations ; Grande Muraille.',
    ],
    priorities: [
      'Faire grossir tes villes (rendements par citoyen).',
      'Utiliser les projets Lijia selon les besoins (or/foi/nourriture).',
      'Déclencher les boosts.',
    ],
    tips: [
      'Grandes villes + projets flexibles s’adaptent à toute situation.',
      'Convertis la production excédentaire au bon moment.',
    ],
    draft: true,
  },
  'taino-anacaona': {
    summary:
      'Villes heureuses et culturelles : les engagements d’âge octroient des emplacements de doctrine.',
    victoryTypes: ['Culture', 'Diplomatie', 'Science'],
    strengths: [
      'Doctrines à points de Grand Personnage = +nourriture/aménités.',
      'Golden Flower : chaque consécration d’âge octroie un emplacement de doctrine différent.',
      'Batey (Complexe de loisirs unique : prod/or) ; Conuco (culture/logement).',
    ],
    priorities: [
      'Choisir des consécrations pour empiler les emplacements de doctrine.',
      'Batey près des Hubs/Centres-villes.',
      'Garder des villes heureuses (aménités).',
    ],
    tips: [
      'Tes engagements d’âge te donnent des cartes en plus : exploite cette flexibilité.',
      'Empire heureux et culturel : joue le tall pacifique.',
    ],
    draft: true,
  },
  'egypte-ramses-ii': {
    summary:
      'Bâtisseur de merveilles au bord des fleuves : Zones industrielles & Lieux saints boostés, culture par les merveilles.',
    victoryTypes: ['Culture', 'Religion', 'Science'],
    strengths: [
      '+15 % prod quartiers/merveilles près des rivières (Zones ind. & Lieux saints +15 % supplémentaires).',
      'Aucun dégât d’inondation ; merveilles achevées → culture/tourisme.',
      'Sphinx (culture/foi) ; Archer sur char Maryannu.',
    ],
    priorities: [
      'Villes sur rivières ; rush de merveilles (bonus de prod cumulés).',
      'Zones industrielles & Lieux saints riverains.',
      'Sphinx pour culture/foi.',
    ],
    tips: [
      'Colle-toi aux fleuves : merveilles et quartiers sortent bien plus vite.',
      'Excellente bâtisseuse de merveilles pour une victoire culturelle.',
    ],
    draft: true,
  },
  'angleterre-alienor-d-aquitaine-angleterre': {
    summary:
      'Culture qui retourne les villes ennemies : tes Grandes Œuvres font défectionner les voisins.',
    victoryTypes: ['Culture'],
    strengths: [
      'Cour d’amour : tes Grandes Œuvres exercent une pression qui fait DÉFECTIONNER les villes ennemies proches.',
      '+100 % production des bâtiments de Théâtre.',
      'Angleterre : mines fer/charbon +2/tour ; Chantier naval Royal Navy.',
    ],
    priorities: [
      'Concentrer les Grandes Œuvres près des frontières ennemies (défection).',
      'Théâtres partout.',
      'Villes proches de rivaux culturellement faibles.',
    ],
    tips: [
      'Ta culture est une ARME : place tes œuvres pour retourner les villes voisines sans guerre.',
    ],
    draft: true,
  },
  'angleterre-elisabeth-ire': {
    summary:
      'Commerce naval & cités-États : routes lucratives, Angleterre productive au charbon/fer.',
    victoryTypes: ['Diplomatie', 'Science', 'Domination'],
    strengths: [
      '+1 capacité de route à plusieurs technos ; routes vers cités-États très rentables.',
      'Angleterre : mines fer/charbon +2/tour, stocks stratégiques via les ports.',
      'Chien de mer (corsaire capturant les navires) ; Chantier Royal Navy.',
    ],
    priorities: [
      'Routes commerciales (surtout vers cités-États).',
      'Exploiter charbon/fer pour la production et la marine.',
      'Domination navale au besoin.',
    ],
    tips: [
      'Combine commerce et marine : tes routes vers les cités-États rapportent gros.',
    ],
    draft: true,
  },
  'angleterre-victoria-ere-imperiale': {
    summary:
      'Colonisation navale : flotte gratuite via les chantiers, armée forte sur les AUTRES continents.',
    victoryTypes: ['Domination'],
    strengths: [
      'Chantier Royal Navy achevé = unité navale la plus avancée GRATUITE.',
      'Tunique rouge & unités +5 force sur les autres continents ; Ports Royal Navy loyaux à l’étranger.',
      'Angleterre productive (charbon/fer).',
    ],
    priorities: [
      'Chantiers Royal Navy sur continents étrangers (flotte gratuite + loyauté).',
      'Débarquer et conquérir loin de chez toi.',
      'Exploiter charbon/fer.',
    ],
    tips: [
      'Ta puissance est OUTRE-MER : colonise et attaque les autres continents avec une flotte gratuite.',
    ],
    draft: true,
  },
  'angleterre-victoria-ere-de-la-vapeur': {
    summary:
      'Puissance industrielle : Zones industrielles surdimensionnées à grande portée régionale.',
    victoryTypes: ['Science', 'Domination', 'Culture'],
    strengths: [
      '+20 % prod des bâtiments de Zone industrielle ; +5 % prod par usine/centrale.',
      'Zones industrielles à portée régionale étendue.',
      'Angleterre : mines fer/charbon +2/tour ; Chantier Royal Navy.',
    ],
    priorities: [
      'Zones industrielles centralisées (portée étendue).',
      'Usines/centrales pour empiler la production.',
      'Convertir la prod en armée/projets.',
    ],
    tips: [
      'La production industrielle est ton moteur : construis et alimente tes Zones industrielles.',
    ],
    draft: true,
  },
  'france-catherine-de-medicis-reine-noire': {
    summary:
      'Espionnage & merveilles : visibilité diplomatique supérieure, espions promus, tourisme des merveilles.',
    victoryTypes: ['Culture', 'Domination', 'Science'],
    strengths: [
      '+1 niveau de visibilité diplomatique sur toutes les civs (renseignement + bonus associés).',
      'Espions gratuitement promus ; +1 espion aux Châteaux.',
      '+20 % prod de merveilles (tourisme) ; Castel (or/culture).',
    ],
    priorities: [
      'Réseau d’espions actif tôt.',
      'Construire des merveilles (tourisme + culture).',
      'Exploiter la visibilité diplomatique.',
    ],
    tips: [
      'Tu vois tout le monde mieux que les autres : renseignement et espionnage sont ta force.',
    ],
    draft: true,
  },
  'france-catherine-de-medicis-splendeur': {
    summary:
      'Culture des ressources & espionnage : tes cases de ressources aménagées rayonnent de culture.',
    victoryTypes: ['Culture'],
    strengths: [
      'Ressources aménagées = culture (+ aménités près des Théâtres).',
      'France : espions promus, +1 espion aux Châteaux, +20 % prod merveilles.',
      'Castel (or/culture/logement).',
    ],
    priorities: [
      'Aménager toutes tes ressources (culture).',
      'Théâtres pour amplifier.',
      'Merveilles + espionnage en soutien.',
    ],
    tips: [
      'Chaque ressource aménagée nourrit ta culture : cherche un terrain riche en ressources.',
    ],
    draft: true,
  },
  'france-alienor-d-aquitaine-france': {
    summary:
      'Défection culturelle (version France) : Grandes Œuvres qui retournent les villes + espionnage.',
    victoryTypes: ['Culture'],
    strengths: [
      'Cour d’amour : Grandes Œuvres = pression qui fait défectionner les villes ennemies proches.',
      '+100 % production des bâtiments de Théâtre.',
      'France : espions promus + visibilité diplomatique ; Castel (culture/or).',
    ],
    priorities: [
      'Grandes Œuvres près des frontières ennemies.',
      'Théâtres partout.',
      'Espionnage en soutien.',
    ],
    tips: [
      'Retourne les villes voisines par la culture — sans guerre — grâce à tes œuvres concentrées.',
    ],
    draft: true,
  },
  'gaule-vercingetorix': {
    summary:
      'Variante Gaule tournée cités-États : production minière + émissaires générés par les ateliers.',
    victoryTypes: ['Domination', 'Culture', 'Diplomatie'],
    strengths: [
      'Hallstatt : quartiers boostés par carrières/mines (jamais collés au Centre-ville) ; Oppidum.',
      '+1 culture sur les mines ; +influence (émissaires) par atelier → cités-États.',
      'Gésates (+10 vs unités plus fortes).',
    ],
    priorities: [
      'Fonde en terrain de collines/mines ; étale tes quartiers.',
      'Ateliers pour générer des émissaires (cités-États).',
      'Production militaire.',
    ],
    tips: [
      'Comme Ambiorix, mais tes ateliers t’apportent des émissaires : mise sur les cités-États.',
    ],
    draft: true,
  },
  'allemagne-louis-ii': {
    summary:
      'Merveilles & quartiers denses : chaque quartier voisin d’une merveille = culture/tourisme.',
    victoryTypes: ['Culture', 'Science', 'Domination'],
    strengths: [
      '+1 emplacement de quartier spécialisé (Villes libres) → villes très denses.',
      'Merveilles : +1 culture par quartier adjacent (tourisme aux Châteaux).',
      'Hanse (Zone industrielle unique) à adjacence énorme ; U-Boot.',
    ],
    priorities: [
      'Villes denses en quartiers (profite du +1 emplacement).',
      'Merveilles entourées de quartiers (culture/tourisme).',
      'Hanses pour la production.',
    ],
    tips: [
      'Entoure tes merveilles de quartiers : elles crachent culture et tourisme.',
    ],
    draft: true,
  },
  'grande-colombie-simon-bolivar': {
    summary:
      'Cavalerie éclair : +1 mouvement militaire, promotions qui ne finissent pas le tour, Comandantes gratuits.',
    victoryTypes: ['Domination'],
    strengths: [
      '+1 PM à toutes tes unités militaires ; promouvoir cav/aérien/espion ne finit pas le tour (attaque → promeus → ré-attaque).',
      'Un Comandante General gratuit à chaque nouvelle ère.',
      'Llaneros (+2 par Llanero adjacent, soin).',
    ],
    priorities: [
      'Nuée de Llaneros (se renforcent groupés).',
      'Exploiter la mobilité (+1 PM, promotions en action).',
      'Comandantes pour buffer l’armée.',
    ],
    tips: [
      'Mobilité unique : frappe, promeus et refrappe dans le même tour.',
      'Groupe tes Llaneros : ils s’amplifient mutuellement.',
    ],
    draft: true,
  },
  'inde-chandragupta': {
    summary:
      'Empire militaire tolérant : profite des croyances de TOUTES les religions présentes + rush territorial.',
    victoryTypes: ['Domination', 'Science', 'Religion'],
    strengths: [
      'Dharma : tes villes reçoivent les bonus de croyance de chaque religion ayant un fidèle → cumul énorme.',
      'Arthashâstra : guerre d’expansion territoriale précoce + unités boostées (mouvement/vision/force).',
      'Puits à degrés (nourriture/foi/logement) ; Vāru (affaiblit les ennemis adjacents).',
    ],
    priorities: [
      'Laisse plusieurs religions s’implanter chez toi (cumul de croyances).',
      'Rush territorial sur un voisin frontalier (bonus de guerre d’expansion).',
      'Puits à degrés pour la croissance.',
    ],
    tips: [
      'Ne purge pas les religions étrangères : chacune t’apporte ses bonus de croyance.',
      'Fort pour une guerre agressive précoce contre un voisin.',
    ],
    draft: true,
  },
  'inde-gandhi': {
    summary:
      'Foi pacifique : une croyance de plus et une foi énorme tant que tu restes en paix.',
    victoryTypes: ['Religion', 'Culture', 'Science'],
    strengths: [
      'Dharma : cumul des bonus de croyance de toutes les religions présentes.',
      'Satyagraha : +1 croyance à la fondation ; +5 foi par civ (en paix) ayant fondé une religion.',
      'Puits à degrés (nourriture/foi/logement).',
    ],
    priorities: [
      'Fonder une religion tôt (croyance bonus).',
      'Rester en PAIX (ta foi dépend des voisins non-belligérants).',
      'Puits à degrés pour la croissance et la foi.',
    ],
    tips: [
      'Ta foi explose si tu restes ami avec les autres croyants : joue pacifique.',
      'La croyance supplémentaire rend ta religion très forte.',
    ],
    draft: true,
  },
  'japon-tokugawa': {
    summary:
      'Isolationniste dense : quartiers collés (adjacence standard) + routes intérieures science/culture.',
    victoryTypes: ['Science', 'Culture'],
    strengths: [
      'Meiji : les quartiers reçoivent une adjacence STANDARD des autres quartiers → empile-les.',
      'Bakuhan : routes commerciales intérieures = science + culture selon les quartiers de la ville.',
      'Usine d’électronique (culture + production régionale).',
    ],
    priorities: [
      'Regroupe tes quartiers (adjacence standard entre eux).',
      'Routes commerciales INTÉRIEURES (science/culture).',
      'Villes denses et autarciques.',
    ],
    tips: [
      'Comme Hōjō, colle tes quartiers ; Tokugawa mise sur le commerce domestique.',
      'Reste replié : ton économie interne est ta force.',
    ],
    draft: true,
  },
  'kongo-njinga-mbandi': {
    summary:
      'Kongo commercial & culturel : villes à Mbanza dopées en or/culture, Grandes Œuvres surpuissantes.',
    victoryTypes: ['Culture', 'Diplomatie', 'Domination'],
    strengths: [
      '+15 % or & culture dans les villes avec un Mbanza (+2 adjacence Hubs/Théâtres près d’un Mbanza).',
      'Reliques/artefacts/sculptures = rendements massifs (Nkisi).',
      'Mbanza (+5 logement sur forêt) ; pas de religion → apôtres gratuits.',
    ],
    priorities: [
      'Un Mbanza dans chaque ville (or/culture + adjacence).',
      'Récupérer un max de Grandes Œuvres/reliques.',
      'Hubs & Théâtres près des Mbanzas.',
    ],
    tips: [
      'Comme Mvemba mais orienté or/culture : le Mbanza est le cœur de chaque ville.',
    ],
    draft: true,
  },
  'coree-sejong': {
    summary:
      'Science ET culture : le Seowon enrichit les cases voisines, et chaque nouvelle ère te donne un bond de culture.',
    victoryTypes: ['Science', 'Culture'],
    strengths: [
      'Seowon (Campus unique) qui donne +1 science aux mines et +1 nourriture aux fermes adjacentes.',
      'Hangeul : découvrir la 1re techno d’une ère = culture égale à 2× la science du tour.',
      '+2 science par Théâtre adjacent au Seowon ; Hwacha.',
    ],
    priorities: [
      'Seowon entouré de mines/fermes (et de Théâtres).',
      'Isole le Seowon (adjacence de base, comme la Corée classique).',
      'Course technologique (chaque nouvelle ère = culture).',
    ],
    tips: [
      'Sois PREMIER à entrer dans chaque ère : gros paquet de culture à la clé.',
    ],
    draft: true,
  },
  'macedoine-olympias': {
    summary:
      'Conquête + science religieuse : mêmes bonus de capture qu’Alexandre, mais Lieux saints + campements dopent la science.',
    victoryTypes: ['Domination', 'Science'],
    strengths: [
      'Prendre une ville : +20 % prod, eurêkas (Campus/Campement) et inspirations (Théâtre/Lieu saint).',
      'Intrigues Cabires : +0,5 science par citoyen dans les villes à Lieu saint + Campement (basilikoi), et un émissaire à l’achèvement.',
      'Hypaspistes (+10 vs quartiers) ; Basilikoi Paides (XP).',
    ],
    priorities: [
      'Guerre continue (comme Alexandre) pour la science/prod des captures.',
      'Villes avec Lieu saint + Campement (science par citoyen + émissaire).',
      'Basilikoi Paides pour l’expérience.',
    ],
    tips: [
      'Variante « scientifique » d’Alexandre : tes villes militaro-religieuses crachent de la science.',
    ],
    draft: true,
  },
  'maoris-kupe': {
    summary:
      'Départ en mer & nature sacrée : villes côtières, culture/foi des forêts et récifs, défense solide.',
    victoryTypes: ['Culture', 'Science', 'Domination'],
    strengths: [
      'Commence en pleine mer (colons embarqués) → choisis ton emplacement ; +3 logement capitale.',
      'Marae : culture + foi sur forêts/jungles/marais/récifs/merveilles → ne rase pas la nature.',
      'Pā (défense +4, retranchement instantané) ; Toa (affaiblit les ennemis).',
    ],
    priorities: [
      'Installe-toi sur de bonnes côtes ; garde les forêts/récifs (Marae).',
      'Bateaux de pêche (bombes culturelles).',
      'Pā pour une défense imprenable.',
    ],
    tips: [
      'Ne détruis pas la nature : forêts, jungles et récifs = ta culture et ta foi.',
    ],
    draft: true,
  },
  'mapuches-lautaro': {
    summary:
      'Fléau des meneurs : +force contre les civs en âge d’or, conquiert et retourne leurs villes par la loyauté.',
    victoryTypes: ['Domination'],
    strengths: [
      '+3 force contre les villes libres et les civs en âge d’or/héroïque (punit ceux qui brillent).',
      'Tuer une unité en territoire ennemi fait CHUTER sa loyauté → villes qui défectionnent.',
      'Toqui : villes avec gouverneur boostées (+15 % si conquises !) ; Cavalier malón.',
    ],
    priorities: [
      'Attaquer les civs en âge d’or (bonus +3).',
      'Tuer près des villes ennemies pour effondrer leur loyauté.',
      'Mettre un gouverneur dans tes villes conquises (+15 %).',
    ],
    tips: [
      'Tu es l’anti-méta : plus l’ennemi brille, plus tu le bats.',
      'Tes conquêtes sont MEILLEURES que tes villes fondées : joue agressif.',
    ],
    draft: true,
  },
  'maya-te-k-inich-ii': {
    summary:
      'Maya offensive : Observatoires scientifiques + armée qui frappe LOIN de la capitale (+4 force).',
    victoryTypes: ['Science', 'Domination'],
    strengths: [
      'Observatoire (Campus unique) nourri par fermes/plantations → grosse science.',
      'Colère de Vénus : +4 force pour les unités à 7+ cases de la capitale (mais -2 près d’elle) → arme expéditionnaire.',
      'Hul-Che (+5 vs unités blessées).',
    ],
    priorities: [
      'Économie de science compacte (fermes autour des Observatoires).',
      'Projeter ton armée LOIN de la capitale (+4 force).',
      'Hul-Che pour la guerre à distance.',
    ],
    tips: [
      'À l’inverse de Dame Six Ciels : ton armée est forte AU LOIN, pas près de la capitale.',
    ],
    draft: true,
  },
  'autriche-maria-theresa': {
    summary:
      'Cités-États annexées & gouverneurs surpuissants : absorbe des cités-États, production dopée par les gouverneurs.',
    victoryTypes: ['Diplomatie', 'Science', 'Culture'],
    strengths: [
      'Diplomate illustre (bâtiments Place de la gouvernance) : peut ABSORBER une cité-État vassale.',
      'Gouverneurs établis : +influence, +15 % prod des quartiers ET des unités.',
      'Café (science/culture par quartier spécialisé).',
    ],
    priorities: [
      'Devenir suzerain de cités-États, puis les absorber.',
      'Placer un gouverneur dans chaque grande ville (+15 % prod).',
      'Place de la gouvernance pour les Diplomates.',
    ],
    tips: [
      'Tu peux carrément ANNEXER des cités-États vassales : accumule des émissaires.',
      'Tes gouverneurs boostent toute ta production : établis-les partout.',
    ],
    draft: true,
  },
  'goths-theodoric-le-grand': {
    summary:
      'Croissance par la conquête : chaque nouvelle ville fait grossir tout l’empire, culture par les citoyens.',
    victoryTypes: ['Domination', 'Culture', 'Science'],
    strengths: [
      'Migration : fonder/conquérir une ville donne +1 citoyen à TOUTES tes villes proches (avec logement libre).',
      'Hlaiw (culture/foi par citoyen).',
      'Gadrauht (anti-cav, culture aux mises à mort) & Militōnd (+5 vs quartiers).',
    ],
    priorities: [
      'Fonder/conquérir souvent (chaque ville fait grossir les autres).',
      'Garder du logement libre pour capter la croissance.',
      'Armée anti-cav/mêlée pour la conquête.',
    ],
    tips: [
      'Chaque nouvelle ville dope la population de tout l’empire : étends-toi (ou conquiers) sans arrêt.',
    ],
    draft: true,
  },
  'mongolie-kubilai-khan-mongolie': {
    summary:
      'Commerce + cavalerie + renseignement : comptoirs instantanés, routes science/culture, bonus de visibilité doublé.',
    victoryTypes: ['Science', 'Culture', 'Domination'],
    strengths: [
      'Örtöö : une route commerciale crée un comptoir immédiat (visibilité) ; bonus de combat lié à la visibilité DOUBLÉ.',
      'Gerege : emplacement économique bonus + routes internationales science/culture.',
      'Ordo (cavalerie +1 PM, XP) ; Keshik (cavalier à distance).',
    ],
    priorities: [
      'Établir beaucoup de routes commerciales (comptoirs + visibilité).',
      'Exploiter la visibilité pour le bonus de combat (cavalerie).',
      'Emplacement éco bonus + Ordos.',
    ],
    tips: [
      'Tes routes te donnent vision ET force : commerce et guerre se renforcent.',
    ],
    draft: true,
  },
  'norvege-harald-hardrade-varegue': {
    summary:
      'Foi & mer : Lieux saints côtiers surpuissants, flotte de raid, économie de foi maritime.',
    victoryTypes: ['Religion', 'Domination', 'Culture'],
    strengths: [
      'Knarr : +50 % prod Lieux saints, +foi par case côtière, +or aux ports par Lieu saint adjacent.',
      'Garde varangienne : +prod bâtiments de Lieu saint, +influence par stavkirke, +force navale.',
      'Stavkirke (foi/prod sur ressources) ; Berserker (raid) ; unités navales pillent les côtes.',
    ],
    priorities: [
      'Lieux saints côtiers (foi + production) et une religion.',
      'Flotte de raid pour piller les côtes (or/foi).',
      'Stavkirkes pour foi et cités-États.',
    ],
    tips: [
      'Version « foi » de la Norvège : combine religion et raids côtiers.',
    ],
    draft: true,
  },
  'ottomans-soliman-muhtesem': {
    summary:
      'Siège + âges d’or : conquêtes stables et, en âge d’or, science et culture bonus.',
    victoryTypes: ['Domination', 'Science', 'Culture'],
    strengths: [
      'Grand bombardier turc : siège +50 % prod & +3 force ; villes prises gardent leur population et restent loyales.',
      'Le Magnifique : +10 % science & culture en âge d’or/héroïque ; +2 (→+4) force en âge sombre/normal.',
      'Grand bazar (or/aménités).',
    ],
    priorities: [
      'Siège pour conquérir des villes intactes.',
      'Viser les âges d’or (science/culture bonus).',
      'Grand bazar pour l’économie.',
    ],
    tips: [
      'Variante de Soliman qui récompense les âges d’or : équilibre conquête et développement.',
    ],
    draft: true,
  },
  'phenicie-ahiram': {
    summary:
      'Colonies côtières + commerce du luxe : routes internationales boostées par tes ressources de luxe.',
    victoryTypes: ['Science', 'Culture', 'Diplomatie'],
    strengths: [
      'Villes côtières (même continent que la capitale) loyales à 100 % → expansion maritime libre ; eurêka d’Écriture au départ.',
      'Princes Marchands : +prod & +or sur les routes internationales par ressource de luxe de la ville d’origine.',
      'Cothon (+25 % navires/colons) ; Tombeau royal (science par Amiral recruté).',
    ],
    priorities: [
      'Coloniser les côtes (loyauté garantie) et exploiter les luxes.',
      'Routes internationales depuis tes villes riches en luxe.',
      'Cothons pour la flotte/colons.',
    ],
    tips: [
      'Accumule les ressources de luxe : elles dopent tes routes internationales.',
    ],
    draft: true,
  },
  'pologne-hedwige-iere': {
    summary:
      'Voleuse de terres & de foi : Campements/Forts piquent des cases, religion + reliques dopées.',
    victoryTypes: ['Religion', 'Culture', 'Diplomatie'],
    strengths: [
      'Liberté dorée : un emplacement militaire → Joker ; Campements et Forts déclenchent une bombe culturelle (vol de cases).',
      'Union lituanienne : relique en fondant ta religion ; +or/culture/foi des reliques.',
      'Lieux saints à adjacence standard des quartiers ; Halle aux draps (commerce) ; Hussard ailé.',
    ],
    priorities: [
      'Placer Campements/Forts pour VOLER les cases (frontières).',
      'Fonder une religion (relique + reliques boostées).',
      'Lieux saints collés aux quartiers (adjacence standard).',
    ],
    tips: [
      'Tes Campements/Forts repoussent tes frontières : pique les bonnes cases aux voisins.',
    ],
    draft: true,
  },
  'pologne-stanislas-ii': {
    summary:
      'Campements nourriciers & cavalerie : tes campements enrichissent les cases voisines, cavalerie de flanc.',
    victoryTypes: ['Domination', 'Science', 'Culture'],
    strengths: [
      'Liberté dorée : emplacement Joker + Campements/Forts = bombes culturelles (vol de cases).',
      'Commission de l’Éducation : les cases près d’un Campement et ses bâtiments gagnent des rendements bonus.',
      'Uhlan (contournement doublé) & Hussard ailé (repousse) ; Halle aux draps (commerce).',
    ],
    priorities: [
      'Campements bien placés (rendements aux cases + vol de terrain).',
      'Cavalerie légère (Uhlans) pour l’encerclement.',
      'Routes commerciales.',
    ],
    tips: [
      'Tes Campements ne servent pas qu’à l’armée : ils enrichissent les cases autour.',
    ],
    draft: true,
  },
  'rome-jules-cesar': {
    summary:
      'Rome militaire : expansion facile + armée surentraînée qui farme les barbares.',
    victoryTypes: ['Domination', 'Science', 'Culture'],
    strengths: [
      'Toute ville fondée/conquise = comptoir + route vers la capitale ; +1 or par route.',
      'Veni vidi vici : +50 % (→100 %) XP pour mêlée/distance/siège/cav lourde + bonus contre les barbares (or/eurêka).',
      'Thermes (Aqueduc unique : +2 logement, culture) ; Légion (fort) ; Onagre.',
    ],
    priorities: [
      'S’étendre largement (routes + comptoirs gratuits).',
      'Farmer les camps barbares (XP, or, eurêkas).',
      'Armée de Légions/Onagres bien promue.',
    ],
    tips: [
      'Expansion polyvalente de Rome + armée qui monte vite en XP : nettoie les barbares pour l’or et les eurêkas.',
    ],
    draft: true,
  },
  'ecosse-robert-bruce': {
    summary:
      'Le bonheur au pouvoir : villes heureuses = science, production et Grands Personnages bonus.',
    victoryTypes: ['Science', 'Culture'],
    strengths: [
      'Villes heureuses : +5 % prod & science, +1 pt Ingénieur (Zone ind.) & Savant (Campus) — DOUBLÉ si extatiques.',
      'Bannockburn : +50 % XP unités de reconnaissance.',
      'Terrain de golf (or/culture/aménités) ; Highlander (éclaireur de combat fort).',
    ],
    priorities: [
      'Maximiser les aménités (villes heureuses/extatiques).',
      'Campus & Zones industrielles (points de Grand Personnage bonus).',
      'Terrains de golf pour les aménités.',
    ],
    tips: [
      'Garde tes villes EXTATIQUES : tes bonus de science/prod doublent — le bonheur EST ta stratégie.',
    ],
    draft: true,
  },
  'espagne-philippe-ii': {
    summary:
      'Croisade coloniale : +force contre les autres religions, conquistadors accompagnés d’unités religieuses.',
    victoryTypes: ['Domination', 'Religion'],
    strengths: [
      'El Escurial : +3 force contre les civs d’une AUTRE religion ; inquisiteurs renforcés, missionnaires -25 % foi.',
      'Conquistador (+5 si une unité religieuse est proche) → conquête convertisseuse.',
      'Mission (science/foi loin de la capitale) ; routes intercontinentales boostées.',
    ],
    priorities: [
      'Fonder une religion et convertir avant d’attaquer (+3 force).',
      'Conquistadors escortés d’apôtres/missionnaires.',
      'Missions loin de la capitale (autre continent) pour la science/foi.',
    ],
    tips: [
      'Convertis puis conquiers : ton bonus de combat cible les autres religions.',
      'Forte en colonisation d’outre-mer : implante Missions et religion à distance.',
    ],
    draft: true,
  },
  'swahili-al-hasan-ibn-sulaiman': {
    summary:
      'Puissance côtière commerçante : villes côtières productives, routes internationales et ports près des merveilles.',
    victoryTypes: ['Diplomatie', 'Science', 'Culture'],
    strengths: [
      'Villes côtières/lacustres : +25 % production de quartiers.',
      '+1 capacité de route par Port adjacent à une merveille mondiale.',
      'Tombe à colonne (or/science sur les routes internationales sortantes, loyauté) ; Jahazi (aménage des bateaux de pêche).',
    ],
    priorities: [
      'Fonder sur les côtes (quartiers +25 %).',
      'Ports près des merveilles (capacité de route).',
      'Routes commerciales internationales.',
    ],
    tips: [
      'Colle tes ports aux merveilles pour multiplier tes marchands : un vrai carrefour maritime.',
    ],
    draft: true,
  },
  'suede-christine-de-suede': {
    summary:
      'Culture & science : bâtiments de savoir boostés, Grandes Œuvres auto-thématisées.',
    victoryTypes: ['Culture', 'Science', 'Diplomatie'],
    strengths: [
      '+50 % prod ateliers/usines/bibliothèques/universités/Place de la gouvernance → science & production.',
      'Minerva : les bâtiments à 3+ emplacements d’œuvres (et merveilles à 2+) sont auto-THÉMATISÉS une fois remplis (double culture facile).',
      'Bibliothèque de la reine (6 emplacements d’œuvres) ; Musée en plein air (culture/tourisme par type de terrain).',
    ],
    priorities: [
      'Accumuler les Grandes Œuvres (thématisation automatique).',
      'Bâtiments de science boostés (bibliothèques/universités).',
      'Musées en plein air sur des terrains variés.',
    ],
    tips: [
      'Tu obtiens les bonus de thématisation SANS effort : remplis simplement les emplacements.',
    ],
    draft: true,
  },
  'teotihuacanas-spearthrower-owl': {
    summary:
      'Cités-États & commerce : tes routes gagnent des rendements selon tes cités-États suzeraines.',
    victoryTypes: ['Diplomatie', 'Science', 'Culture'],
    strengths: [
      'Tes routes commerciales gagnent des rendements par TYPE de cité-État dont tu es suzerain (religieuse → nourriture, industrielle → prod…).',
      'Enclave de pochtecatl (Quartier diplo unique : titre de gouverneur, hors limite de quartiers).',
      '+1 capacité de route (Enclave/chancellerie) ; Guerrier chouette (sans fer).',
    ],
    priorities: [
      'Devenir suzerain d’un max de cités-États VARIÉES (routes riches).',
      'Enclaves de pochtecatl pour les titres de gouverneur et les routes.',
      'Multiplier les routes commerciales.',
    ],
    tips: [
      'Plus tes cités-États suzeraines sont variées, plus tes routes rapportent : diversifie.',
    ],
    draft: true,
  },
  'thule-kiviuq': {
    summary:
      'Peuple du Grand Nord : la toundra et la neige deviennent riches via les cabanes de chasse.',
    victoryTypes: ['Culture', 'Science', 'Domination'],
    strengths: [
      'Cabanes de chasse : rendements bonus aux cases adjacentes ; nourriture/culture/foi sur toundra et neige.',
      'Kiviuq : unités de reconnaissance +5 force et +1 PM sur toundra/neige (défense du Nord).',
      'Chasseur à traîneau (éclaireur qui bâtit des cabanes).',
    ],
    priorities: [
      'Coloniser toundra/neige et couvrir de cabanes de chasse.',
      'Éclaireurs/reconnaissance comme force de combat dans le Nord.',
      'Exploiter les rendements de foi/culture des cases froides.',
    ],
    tips: [
      'Le Grand Nord que tout le monde évite est ton terrain de jeu.',
    ],
    draft: true,
  },
  'tibet-trisong-detsen': {
    summary:
      'Foi défensive : Lieux saints-forteresses (Dzong) et unités promues via campement + culte.',
    victoryTypes: ['Religion', 'Domination', 'Science'],
    strengths: [
      'Dzong (Lieu saint unique) : +5 force défensive aux unités dans le quartier → bastion religieux.',
      'Bataille de Chang’an : les unités formées dans une ville à Campement + bâtiment de culte commencent PROMUES.',
      'Rta Pa (monté à distance, bouge après attaque).',
    ],
    priorities: [
      'Dzongs comme Lieux saints défensifs (foi + forteresse).',
      'Villes à Campement + culte pour des unités promues gratuitement.',
      'Fonder une religion.',
    ],
    tips: [
      'Tes Dzongs sont à la fois religieux et défensifs : imprenables.',
    ],
    draft: true,
  },
  'zoulous-chaka': {
    summary:
      'Roi des corps & armées : forme-les plus tôt et plus forts, et tes conquêtes créent des unités.',
    victoryTypes: ['Domination'],
    strengths: [
      'Forme des Corps (Mercenaires) et Armées (Nationalisme) plus tôt ; +2 force pour eux à la Mobilisation.',
      'Isibongo : conquérir une ville avec une unité normale la transforme en Régiment → armée qui grossit en conquérant.',
      'Ikanda (Campement unique) ; Impi (contournement doublé, XP).',
    ],
    priorities: [
      'Fusionne tes unités en Corps/Armées dès que possible (avant les autres).',
      'Enchaîne les conquêtes (elles créent des régiments).',
      'Impis pour l’encerclement.',
    ],
    tips: [
      'Tes super-unités arrivent avant celles des autres : écrase pendant cette fenêtre.',
      'La conquête s’auto-alimente : chaque ville prise renforce ton armée.',
    ],
    draft: true,
  },
}
