import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA: Record<string, WolofContent> = {
  'ile-de-fadiouth': {
    titleWo: 'Dunu Fadiouth',
    excerptWo: 'Dunu coquillages ci Siin — aada Sereer ak patrimoine.',
    contentWo: `### Jëmmal\n\nÎle de Fadiouth nekk na ci wetug Joal. Dunu bi dafa tabax ci coquillages ; aada Sereer ak cimetière chrétien-musulman.`,
  },
  'cap-skirring': {
    titleWo: 'Cap Skirring',
    excerptWo: 'Plage yu rafet ci Casamance — tourisme ak géej.',
    contentWo: `### Jëmmal\n\nCap Skirring nekk na ci diiwaanu Ziguinchor. Plage, hotels ak nature — bérab bu tourisme bu Casamance.`,
  },
  'pointe-des-almadies-dakar': {
    titleWo: 'Pointe des Almadies',
    excerptWo: 'Sowwu bu gën a sowwu ci Cap-Vert.',
    contentWo: `### Jëmmal\n\nPointe des Almadies mooy extrémité occidentale bu Cap-Vert. Restaurants, surf ak vista yu géej.`,
  },
  'plage-de-ngor': {
    titleWo: 'Plage bu N\'Gor',
    excerptWo: 'Plage ak dunu N\'Gor ci Dakar.',
    contentWo: `### Jëmmal\n\nPlage de N\'Gor : dunu, surf, restaurants ak aada Lébou.`,
  },
  'thieboudiene-ceebu-jen': {
    titleWo: 'Ceebu jën (Thiéboudiène)',
    excerptWo: 'Riz ak jën — mbuum bu nasyonaal bu Senegaal.',
    contentWo: `### Jëmmal\n\nCeebu jën (thiéboudiène) mooy mbuum bu nasyonaal bu Senegaal. Riz, jën (thiof walla yeneen), diwtiir, tomate ak wutus yu local.\n\n### Xibaar\n\nAm na ceebu jën bu xonq (rouge) ak bu weex (blanc). Dañu koy lekk ci njël walla ngoon, ak waxtu yu mag. Thiof mooy jën bu gën a xam ci ceebu jën.`,
  },
  'ceebu-yapp': {
    titleWo: 'Ceebu yàpp',
    excerptWo: 'Riz ak yàpp.',
    contentWo: `### Jëmmal\n\nCeebu yàpp : riz ak yàpp (nag walla bëy), diwtiir ak wutus.`,
  },
  'mafe': {
    titleWo: 'Mafé',
    excerptWo: 'Sauce bu arachide ak yàpp walla jën.',
    contentWo: `### Jëmmal\n\nMafé mooy sauce bu arachide (tigadege), dañu koy toxal ak yàpp, jën walla vegetables. Lekk nañu ko ak ceeb.\n\n### Xibaar\n\nMafé dafa am solo ci këri yu Senegaal ak Afrique de l’Ouest. Netetou ak xorom yi dañu koy yokk neex.`,
  },
  'domoda': {
    titleWo: 'Domoda',
    excerptWo: 'Sauce bu tigadege ak vegetables.',
    contentWo: `### Jëmmal\n\nDomoda nirook mafé, vegetables ak style bu local.`,
  },
  'soupou-kandia': {
    titleWo: 'Suppu kandja',
    excerptWo: 'Sauce bu gombo.',
    contentWo: `### Jëmmal\n\nSuppu kandja : gombo, jën walla yàpp, lekk ak ceeb.`,
  },
  'thiakry': {
    titleWo: 'Thiakry',
    excerptWo: 'Dessert bu mil ak meew.',
    contentWo: `### Jëmmal\n\nThiakry : couscous de mil, meew, sukkar — dessert bu fêtes.`,
  },
  'cafe-touba': {
    titleWo: 'Kafe Touba',
    excerptWo: 'Kafe bu jar — aada Mouride.',
    contentWo: `### Jëmmal\n\nKafe Touba dafa am poivre jar (djar) ak kafe. Xam nañu ko ci aada Mouride ak ci dëkk yépp ci Senegaal.\n\n### Xibaar\n\nKafe Touba dañu koy naan tàng ; solo ci Touba ak diggante Mouride, waaye mu fees ci réew mi bépp.`,
  },
  'bissap': {
    titleWo: 'Bissap',
    excerptWo: 'Jus bu hibiscus — tàng walla sedd.',
    contentWo: `### Jëmmal\n\nBissap mooy jus bu feuilles de hibiscus. Dañu koy naan sedd walla tàng, ak sukkar. Bissap bu xonq ak bu ñuul am na.\n\n### Xibaar\n\nBissap bokk na ci naan yu gën a xam ci marchés ak kër yi. Dañu koy boole ak gingembre walla mint.`,
  },
  'jus-de-bouye': {
    titleWo: 'Jus bu buy',
    excerptWo: 'Jus bu baobab.',
    contentWo: `### Jëmmal\n\nJus bu buy (bouye) : doom yu baobab, santé ak aada.`,
  },
  'jus-de-gingembre': {
    titleWo: 'Jus bu gingembre',
    excerptWo: 'Naan bu tàng.',
    contentWo: `### Jëmmal\n\nJus bu gingembre : marchés, restaurants, citron walla bissap.`,
  },
  'thiere-bassi-salte': {
    titleWo: 'Thiéré bassi salté',
    excerptWo: 'Couscous de mil.',
    contentWo: `### Jëmmal\n\nThiéré ak bassi salté : patrimoine céréalier.`,
  },
  'poisson-braise-lakk-dieune': {
    titleWo: 'Lakk jën',
    excerptWo: 'Jën bu braisé.',
    contentWo: `### Jëmmal\n\nLakk jën : jën bu ñu lakk ci taal, plages ak marchés.`,
  },
  'ndambe-ragout-de-niebe-petit-dejeuner-populaire-senegalais': {
    titleWo: 'Ndambé',
    excerptWo: 'Ragoût bu niébé — njël.',
    contentWo: `### Jëmmal\n\nNdambé : niébé, mburu, njël bu marchés yu Dakar.`,
  },
  'thiou': {
    titleWo: 'Thiou',
    excerptWo: 'Sauce bu tomate.',
    contentWo: `### Jëmmal\n\nThiou : sauce bu tomate, jën walla yàpp, lekk ak ceeb.`,
  },
  'caldou': {
    titleWo: 'Caldou',
    excerptWo: 'Mbuum bu jën bu Casamance.',
    contentWo: `### Jëmmal\n\nCaldou : riz, jën ak sauce bu Casamance.`,
  },
  'le-thiof-au-senegal-poisson-emblematique-peche-et-gastronomie': {
    titleWo: 'Thiof',
    excerptWo: 'Jën bu emblématique.',
    contentWo: `### Jëmmal\n\nThiof : jën bu gën a xam ci ceebu jën ak napp.`,
  },
  'riz-de-casamance': {
    titleWo: 'Ceebu Casamance',
    excerptWo: 'Riz bu local bu Casamance.',
    contentWo: `### Jëmmal\n\nRiz de Casamance : tool yu riz, mangrove, aada.`,
  },
  'lakhou-bissap': {
    titleWo: 'Lakhou bissap',
    excerptWo: 'Mil ak bissap.',
    contentWo: `### Jëmmal\n\nLakhou bissap : mil ak bissap, mbuum bu aada.`,
  },
  'les-epices-dans-la-cuisine-senegalaise': {
    titleWo: 'Xorom yi ci këri',
    excerptWo: 'Netetou, jar, piment.',
    contentWo: `### Jëmmal\n\nXorom : netetou, djar, gingembre, piment.`,
  },
  'culture-serere-traditions-patrimoine': {
    titleWo: 'Aada Sereer',
    excerptWo: 'Traditions ci Siin-Saalum.',
    contentWo: `### Jëmmal\n\nAada Sereer : ndut, saltigues, patrimoine yu Fatick.`,
  },
  'culture-mandingue-senegal-traditions': {
    titleWo: 'Aada Mandingue',
    excerptWo: 'Traditions mandingue.',
    contentWo: `### Jëmmal\n\nAada Mandingue : kora, musik, taariixu Mande.`,
  },
  'sebbe-koliyabe-tradition-culturelle-du-fouta': {
    titleWo: 'Sebbe Koliyabe',
    excerptWo: 'Tradition bu Fouta.',
    contentWo: `### Jëmmal\n\nSebbe Koliyabe : aada bu Fouta-Toro, Haalpulaar.`,
  },
  'intronisation-beuleup-tradition-royale-du-senegal': {
    titleWo: 'Intronisation Beuleup',
    excerptWo: 'Tradition royale.',
    contentWo: `### Jëmmal\n\nBeuleup : tradition royale, njiit ak patrimoine.`,
  },
  'super-diamono': {
    titleWo: 'Super Diamono',
    excerptWo: 'Groupe bu musik moderne.',
    contentWo: `### Jëmmal\n\nSuper Diamono : mbalax, fusion, taariixu musik.`,
  },
  'xalam-2': {
    titleWo: 'Xalam 2',
    excerptWo: 'Groupe bu fusion.',
    contentWo: `### Jëmmal\n\nXalam 2 : jazz, rock ak aada yu local.`,
  },
  'ucas-band-formation-musicale-historique-de-sedhiou': {
    titleWo: 'UCAS Band',
    excerptWo: 'Musik bu Sédhiou.',
    contentWo: `### Jëmmal\n\nUCAS Band : formation musicale historique ci Sédhiou.`,
  },
  'fode-doussouba': {
    titleWo: 'Fodé Doussouba',
    excerptWo: 'Champion bu làmb.',
    contentWo: `### Jëmmal\n\nFodé Doussouba : champion bu lutte traditionnelle.`,
  },
  'tata-de-kedougou-architecture-defensive-et-patrimoine-du-senegal-oriental': {
    titleWo: 'Tata bu Kédougou',
    excerptWo: 'Architecture défensive.',
    contentWo: `### Jëmmal\n\nTata de Kédougou : architecture yu yàgg, penku.`,
  },
  'fort-pinet-laprade-memoire-historique-de-sedhiou': {
    titleWo: 'Fort Pinet-Laprade',
    excerptWo: 'Mémoire bu Sédhiou.',
    contentWo: `### Jëmmal\n\nFort Pinet-Laprade : taariix ak mémoire bu Casamance.`,
  },
  'centre-dinterpretation-de-toubacouta-patrimoine-du-delta-du-saloum': {
    titleWo: 'Centre bu Toubacouta',
    excerptWo: 'Patrimoine Delta Saalum.',
    contentWo: `### Jëmmal\n\nCentre d\'interprétation : Delta du Saloum, UNESCO.`,
  },
  'centre-dinterpretation-de-bandafassi-patrimoine-du-pays-bassari': {
    titleWo: 'Centre bu Bandafassi',
    excerptWo: 'Patrimoine Pays Bassari.',
    contentWo: `### Jëmmal\n\nCentre d\'interprétation : Pays Bassari, UNESCO.`,
  },
  'reserve-speciale-faune-guembeul': {
    titleWo: 'Réserve spéciale de faune de Guembeul',
    excerptWo: 'Barab bu aarug faune sahélienne ci wetu Saint-Louis, ak conservation ak réintroduction.',
    contentWo: `### Jëmmal

Réserve spéciale de faune de Guembeul nekk na ci régionu Saint-Louis, ci wetu dëkk bi, diggante communes Ndiébène Gandiol ak Gandon. Ñu sos ko 30 mai 1983, te réserve bi am na 720 hectares.

### Zones humides ak Sahel

Guembeul dafa ëmb cuvette bu ndoxam safara, reliques de mangrove ak végétation sahélienne. Zones humides yi di dalal picc yu bare, te suuf su wër bi am na arbres ak herbacées.

### Conservation ak réintroduction

Réserve bi di jàppale conservation ak réacclimatationu xeetu mbindeef yu metti. Oryx algazelle, gazelle Dama ak gazelle Dorcas bokk nañu ci xeetu mbindeef yi ñuy sàmm.

### Gazelle Dama

Gazelle Dama am na solo ci taariixu Guembeul. Ñu indi ko ci réserve bi ci 1984, te ci 2002 benn ci mbooloom yi dem ci Ferlo ngir jàppale programmeu réintroduction.

### Picc ak faune

Cuvette bi mooy habitat bu am solo ci picc yu ndox. Singe patas, chacal ak phacochère bokk nañu ci faune bi ñuy gis ci barab bi.

### Jàngat ak conservation

Guembeul man na nekk barab bu chercheurs di jàng ecology, zoologie, habitats ak conservationu xeetu mbindeef. Xam-xam boobu di jàppale yokkug doxalin yi ñuy def ngir aar nature.

### Éducation ak sensibilisation

Visites guidées ak jëf yu sensibilisation di dimbali xale yi ak gan yi xam solo bu biodiversité sahélienne am. Réserve bi di jàppale transmissionu xam-xam ci aarug nature.

### Tourisme naturel

Ku bëgg gis faune ak paysagesu Sahel man na xool réserve bi ak guide. War na topp ndigal yi, bañ a sonal mbindeef yi te sàmm habitats yi.

### Solo ci patrimoine

Guembeul wone na solo bu conservationu faune sahélienne am. Réserve bi bokk na ci patrimoine naturel bu Saint-Louis ak ci efforts yu ñuy def ngir denc biodiversité bi.`,
  },
  'nature-du-ferlo-paysages-saheliens-faune-et-ressources': {
    titleWo: 'Nature bu Ferlo',
    excerptWo: 'Paysages sahéliens.',
    contentWo: `### Jëmmal\n\nFerlo : sahel, faune, sàmm, ressources.`,
  },
  'la-gomme-arabique-au-senegal-ressource-du-sahel-et-valorisation': {
    titleWo: 'Gomme arabique',
    excerptWo: 'Ressource bu Sahel.',
    contentWo: `### Jëmmal\n\nGomme arabique : production, commerce ci norte.`,
  },
  'baila': {
    titleWo: 'Baïla',
    excerptWo: 'Mbuum bu aada.',
    contentWo: `### Jëmmal\n\nBaïla : mbuum bu aada, fêtes.`,
  },
  'mbakhalou-saloum': {
    titleWo: 'Mbakhalou Saalum',
    excerptWo: 'Spécialité bu Saalum.',
    contentWo: `### Jëmmal\n\nMbakhalou Saloum : riz, jën, aada yu Saalum.`,
  },
};
