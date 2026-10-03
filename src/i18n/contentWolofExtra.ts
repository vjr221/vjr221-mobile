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
    excerptWo: 'Lekk bu riz ak yàpp, bu bokk ci mbuum yu Senegaal.',
    contentWo: `### Jëmmal\n\nCeebu yàpp mooy lekk buñu def ak riz ak yàpp, te mu bokk ci mbuum yu am solo ci Senegaal. Yàpp bi mën na doon nag, bëy walla yeneen yàpp yu ñu jëfandikoo ci lekk bi.\n\n### Def ak lekk\n\nRiz bi ñu dajale ak yàpp, diwtiir ak wutus yi ngir am xeeñ ak neex. Ceebu yàpp mën nañu ko lekk ci kër yi ak ci ay bérab yu ñuy jaay lekk, te jëfandikoo yi mën nañu wuute.\n\n### Aada ak patrimoine\n\nCeebu yàpp bokk na ci diversitéu lekk yu Senegaal. Melokaanam di wone solo bu riz, yàpp ak savoir-faireu cuisine am ci dundug bés-bés ak ci waxtu yu ñuy dajale.`,
  },
  'mafe': {
    titleWo: 'Mafé',
    excerptWo: 'Sauce bu arachide ak yàpp walla jën.',
    contentWo: `### Jëmmal\n\nMafé mooy sauce bu arachide (tigadege), dañu koy toxal ak yàpp, jën walla vegetables. Lekk nañu ko ak ceeb.\n\n### Xibaar\n\nMafé dafa am solo ci këri yu Senegaal ak Afrique de l’Ouest. Netetou ak xorom yi dañu koy yokk neex.`,
  },
  'domoda': {
    titleWo: 'Domoda',
    excerptWo: 'Lekk bu sauceu tomate ak tigadege, ak yàpp walla légumes.',
    contentWo: `### Jëmmal\n\nDomoda mooy lekk bu ñu def ak sauceu tomate ak tigadege, te mën nañu ko boole ak yàpp walla légumes. Mu bokk ci lekk yu ñu xam ci cuisineu Senegaal.\n\n### Def ak xeeñ\n\nSauce bi di jëfandikoo tomate, tigadege ak yeneen ingrédients ngir joxe xeeñ ak neex. Yàpp bi mën na wuute, te lekk bi di ñu koy boole ak riz.\n\n### Aada ak transmission\n\nDomoda di wone ni arachide, tomate ak yeneen produits yu local mën a daje ci benn lekk. Savoir-faireu domoda di jaar ci kër yi ak ci transmissionu recettes ci génération yi.`,
  },
  'soupou-kandia': {
    titleWo: 'Suppu kandja',
    excerptWo: 'Sauce bu gombo, bu ñu mën a def ak jën walla yàpp ak ceeb.',
    contentWo: `### Jëmmal\n\nSuppu kandja mooy lekk bu sauceu gombo. Ñu mën nañu ko def ak jën walla yàpp, te ñu koy lekk ak ceeb. Mu bokk ci mbuum yu sauce yi am solo ci cuisineu Senegaal.\n\n### Gombo ak préparation\n\nGombo bi di joxe texture bu leer ci sauce bi. Jën walla yàpp bi di yokk xeeñ ak protéines, te ceeb bi di boole lekk bi. Préparation bi mën na wuute ci kër yi ak ci terroir yi.\n\n### Patrimoine culinaire\n\nSuppu kandja di wone solo bu légumes, jën, yàpp ak céréales am ci diversitéu lekk. Recette bi di jaar ci xam-xam ak savoir-faireu cuisine, te transmission bi di aar patrimoine culinaire bi.`,
  },
  'thiakry': {
    titleWo: 'Thiakry',
    excerptWo: 'Dessert bu couscousu mil ak meew, bu ñu xam ci lekk yu Senegaal.',
    contentWo: `### Jëmmal\n\nThiakry mooy dessert bu ñu def ak couscousu mil ak meew, te sukkar mën nañu ko yokk ngir neex. Mu bokk ci lekk yu ñu xam ci Senegaal, rawatina ci waxtu yu ñuy dajale.\n\n### Mil ak meew\n\nMil bi di joxe base bu dessert bi, meew bi di may ko texture ak neex. Ñu mën nañu yokk yeneen ingrédients ci recette bi, waaye base bi di des couscousu mil ak meew.\n\n### Aada ak waxtu yu ñuy dajale\n\nThiakry di bokk ci lekk yu ñuy waññi ci kër yi ak ci ay occasions yu ñuy dajale. Recette bi di wone solo bu mil am ci alimentation ak patrimoine culinaire bu Senegaal.`,
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
    excerptWo: 'Naan bu ñu def ak buy, mburu baobab bu bokk ci patrimoine culinaire.',
    contentWo: `### Jëmmal\n\nJus bu buy, walla bouye, mooy naan bu ñu def ak pulpeu fruitu baobab. Mu bokk ci naan yu ñu xam ci Senegaal, te ñu mën nañu ko naan sedd ci waxtu yu tàng.\n\n### Préparation\n\nPulpe bi di ñu dajale ak ndox, ba noppi ñu mën nañu ko filtre ngir am naan bu lëj. Sukkar mën nañu ko yokk ci melokaanu recette bi.\n\n### Aada ak patrimoine\n\nJus bu buy di bokk ci diversitéu naan yu local. Baobab am na it solo ci paysages ak patrimoine naturel bu Senegaal, te jëfandikoo fruit bi ci cuisine di wone xam-xamu terroir yi.`,
  },
  'jus-de-gingembre': {
    titleWo: 'Jus bu gingembre',
    excerptWo: 'Naan bu ñu def ak gingembre, bu mën a boole ak citron walla bissap.',
    contentWo: `### Jëmmal

Jus bu gingembre mooy naan bu ñu def ak gingembre, te ñu mën nañu ko boole ak citron walla bissap. Mu bokk ci naan yu ñuy gis ci kër yi, marchés ak restaurants.

### Préparation

Gingembre bi di ñu dajale ak ndox, ba noppi ñu filtre ko. Sukkar mën nañu ko yokk ngir neex, te citron mën na joxe ko xeeñ ak acidité.

### Aada ak diversité

Jus bu gingembre di bokk ci diversitéu naan yu local. Recette bi di wone ni ingrédients yu am solo ci cuisineu Senegaal mën a boole ngir sos naan bu ñu mën a naan ci waxtu yu wuute.`,
  },
  'thiere-bassi-salte': {
    titleWo: 'Thiéré bassi salté',
    excerptWo: 'Lekk bu couscousu mil ak bassi salté, bu bokk ci patrimoine céréalier.',
    contentWo: `### Jëmmal

Thiéré bassi salté mooy lekk buñu def ak couscousu mil ak bassi salté. Mu bokk ci patrimoine céréalier bu Senegaal, te di wone solo bu mil ak savoir-faireu cuisine am ci alimentation.

### Mil ak préparation

Thiéré bi di jëfandikoo mil, céréale bu am solo ci mbay ak lekk ci réew mi. Bassi salté bi di yokk melokaan ak neex ci recette bi, te préparation bi mën na wuute ci kër yi ak terroir yi.

### Transmission

Lekk yi ñuy def ak mil di jaar ci transmissionu xam-xam ci njaboot yi. Thiéré bassi salté di bokk ci diversitéu patrimoine culinaire bu Senegaal.`,
  },
  'poisson-braise-lakk-dieune': {
    titleWo: 'Lakk jën',
    excerptWo: 'Jën bu ñu lakk ci taal, lekk bu lëkkale pêche ak cuisine.',
    contentWo: `### Jëmmal

Lakk jën mooy jën bu ñu lakk ci taal, te mu bokk ci lekk yu lëkkale pêche ak cuisine. Ñu mën nañu ko gis ci plages, marchés ak bérab yu ñuy defar lekk ci wetu géej.

### Pêche ak préparation

Jën bi di nekk ci xolum recette bi, te cuisson ci taal di joxe xeeñ bu ñu xam. Préparation bi mën na wuute ci xeetu jën ak façonu ñu koy defar.

### Patrimoine littoral

Lakk jën di wone solo bu pêche am ci dundug dëkk yu wetu géej. Mu bokk ci savoir-faireu cuisine ak patrimoine culinaire bu lëkkale nit ñi ak ressourcesu géej.`,
  },
  'ndambe-ragout-de-niebe-petit-dejeuner-populaire-senegalais': {
    titleWo: 'Ndambé',
    excerptWo: 'Ragout bu niébé, bu ñuy lekk ak mburu, rawatina ci njël.',
    contentWo: `### Jëmmal

Ndambé mooy ragout bu ñu def ak niébé. Ñu xam nañu ko ci lekk yu ñuy lekk ci njël, te ñu mën nañu ko boole ak mburu. Mu bokk ci lekk yu ñuy gis ci marchés ak kër yi, rawatina ci Dakar.

### Niébé ak mburu

Niébé bi di joxe base bu ragout bi, te sauce bi di yokk xeeñ ak neex. Mburu bi di boole lekk bi, te ndambé mën na nekk lekk bu yomb ci waxtu njël.

### Vie quotidienne ak patrimoine

Ndambé di wone solo bu niébé am ci alimentation ak cuisineu Senegaal. Lekk bi di bokk ci vie quotidienne ak savoir-faireu préparationu lekk yu ñuy séddoo.`,
  },
  'thiou': {
    titleWo: 'Thiou',
    excerptWo: 'Sauce bu tomate bu ñu mën a def ak jën walla yàpp, te ñuy lekk ak ceeb.',
    contentWo: `### Jëmmal

Thiou mooy sauce bu tomate bu ñu mën a def ak jën walla yàpp, te ñuy lekk ak ceeb. Mu bokk ci lekk yu sauce yi di boole riz, protéines ak légumes ci benn plat.

### Tomate ak préparation

Tomate bi di joxe baseu sauce bi. Jën walla yàpp bi di yokk xeeñ ak doole ci lekk bi, te ingrédients yi mën nañu wuute ci recette ak terroir.

### Aada ak transmission

Thiou di bokk ci patrimoine culinaire bu Senegaal, te recettes yu ni mel di jaar ci njaboot yi. Xam-xam bu préparation di jàppale denc diversitéu lekk yi.`,
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
