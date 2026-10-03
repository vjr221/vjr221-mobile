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
    excerptWo: 'Sauce bu tigadege ak yàpp, jën walla légumes, bu ñuy lekk ak ceeb.',
    contentWo: `### Jëmmal

Mafé mooy lekk bu sauceu tigadege am ci xol. Ñu mën nañu ko def ak yàpp, jën walla légumes, te ñuy lekk ko ak ceeb. Mu bokk ci lekk yu ñu xam ci Senegaal ak Afrique de l’Ouest.

### Tigadege ak préparation

Tigadege bi di joxe sauce bi texture ak xeeñ bu am solo. Yàpp walla yeneen ingrédients di yokk melokaanu lekk bi, te recette bi mën na wuute ci kër yi ak terroir yi.

### Aada ak transmission

Mafé di wone solo bu arachide am ci cuisine. Recette bi di jaar ci njaboot yi, te savoir-faireu préparation di jàppale denc patrimoine culinaire bu Senegaal.`,
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
    excerptWo: 'Mbuum bu jën bu Casamance, bu ñu lekk ak riz ak sauce.',
    contentWo: `### Jëmmal

Caldou mooy lekk bu jën bu bokk ci cuisineu Casamance. Ñu koy def ak jën ak riz, te sauce bi di boole ingrédients yi ci benn lekk bu am xeeñ.

### Jën ak préparation

Jën bi di nekk ci xolum caldou. Préparation bi di jëfandikoo ingrédients yu ñu xam ci cuisineu Casamance, te melokaanu sauce bi di jàppale jën bi ak riz bi.

### Casamance ak patrimoine

Caldou di wone richesseu patrimoine culinaire bu Casamance. Recette bi di bokk ci savoir-faireu terroir yi, te transmissionu lekk yi di jàppale denc aada ak xam-xam.`,
  },
  'le-thiof-au-senegal-poisson-emblematique-peche-et-gastronomie': {
    titleWo: 'Thiof',
    excerptWo: 'Jën bu am solo ci cuisine ak pêche bu Senegaal.',
    contentWo: `### Jëmmal

Thiof mooy jën bu ñu xam lool ci cuisineu Senegaal. Mu bokk ci patrimoineu pêche ak gastronomie, te am na bérab bu am solo ci ay lekk yu ñuy def ak jën.

### Pêche ak cuisine

Thiof di bokk ci ressourcesu géej yi ñuy jëfandikoo ci cuisine. Ñu mën nañu ko def ci ay recettes yu wuute, te ñu koy boole ak riz walla yeneen accompagnements.

### Solo ci patrimoine

Thiof di lëkkale dundug pêche, marchés ak savoir-faireu cuisine. Xam-xam ci jëfandikoo jën bi ak transmissionu recettes di bokk ci patrimoine culinaire bu Senegaal.`,
  },
  'riz-de-casamance': {
    titleWo: 'Ceebu Casamance',
    excerptWo: 'Riz bu local bu Casamance, lëkkale mbay, terroir ak aada.',
    contentWo: `### Jëmmal

Riz de Casamance mooy riz bu ñuy tabax ci terroir yi ci Casamance. Mu bokk ci agriculture ak alimentationu diiwaan bi, te di wone solo bu riz am ci dundug askan wi.

### Mbay ak environnement

Tool yu riz bokk nañu ci paysageu Casamance, ak zones yu ndox ak mangrove yu lëkkale mbay ak environnement. Mbayu riz di soxla toppatoo bu baax ci suuf ak ndox.

### Aada ak patrimoine

Riz di bokk ci patrimoine culinaire ak agriculturel bu Casamance. Xam-xam ci mbay, préparation ak lekk di jaar ci njaboot yi, te di jàppale denc terroir ak aada yi.`,
  },
  'lakhou-bissap': {
    titleWo: 'Lakhou bissap',
    excerptWo: 'Lekk bu mil ak bissap, bu bokk ci diversitéu cuisineu Senegaal.',
    contentWo: `### Jëmmal

Lakhou bissap mooy lekk bu ñu def ak mil ak bissap. Mu bokk ci lekk yu aada, te di boole céréale ak ingrédient bu am solo ci cuisineu Senegaal.

### Mil ak bissap

Mil bi di joxe baseu lekk bi, bissap bi di yokk melokaan ak xeeñ. Préparation bi mën na wuute ci kër yi ak terroir yi, te savoir-faireu cuisine di defar melokaanu lekk bi.

### Transmission ak patrimoine

Lakhou bissap di wone diversitéu recettes yu ñu sos ak produits yu local. Transmissionu recettes ci njaboot yi di jàppale denc patrimoine culinaire bu Senegaal.`,
  },
  'les-epices-dans-la-cuisine-senegalaise': {
    titleWo: 'Xorom yi ci cuisineu Senegaal',
    excerptWo: 'Netetou, jàngara, gingembre, piment ak yeneen ingrédients yu jëfandikoo ci lekk.',
    contentWo: `### Jëmmal

Xorom yi am nañu solo ci cuisineu Senegaal. Netetou, gingembre, piment ak yeneen ingrédients di jàppale joxe xeeñ, neex ak melokaan ci ay lekk yu wuute.

### Xorom ak recettes

Jëfandikoo xorom yi di wuute ci recette yi. Ñu mën nañu leen boole ak sauce, riz, jën, yàpp walla légumes ngir yokk xeeñ ak melokaanu lekk bi.

### Xam-xam ak transmission

Xam-xam ci jëfandikoo xorom yi di jaar ci njaboot yi ak ci savoir-faireu cuisine. Mu bokk ci patrimoine culinaire bu Senegaal, te di wone diversitéu terroir ak ingrédients yu local.`,
  },
  'culture-serere-traditions-patrimoine': {
    titleWo: 'Aada Sereer',
    excerptWo: 'Aada, xam-xam ak patrimoine bu Sereer ci Siin-Saalum.',
    contentWo: `### Jëmmal

Aada Sereer ëmb aada, xam-xam ak jëf yu jaar ci njaboot yi ci Siin-Saalum ak yeneen terroir. Mu bokk ci diversitéu patrimoine culturel bu Senegaal.

### Aada ak jëf

Ndut, saltigues, cérémonies ak yeneen pratiques di bokk ci dundug aada. Ñuy wone solo bu njaboot, dëkk ak transmissionu xam-xam am.

### Patrimoine ak transmission

Aada Sereer di jaar ci làkk, lekk, musique, cérémonie ak xam-xamu terroir. Transmissionu xam-xam ci générations yi di jàppale denc identité ak patrimoine.`,
  },
  'culture-mandingue-senegal-traditions': {
    titleWo: 'Aada Mandingue',
    excerptWo: 'Aada Mandingue, musique, xam-xam ak patrimoine ci Senegaal.',
    contentWo: `### Jëmmal

Aada Mandingue bokk na ci patrimoine culturel bu Senegaal, rawatina ci diiwaan yi amoon ak am solo ci histoireu Mande. Mu ëmb musique, récits, cérémonies ak savoir-faire.

### Kora ak musique

Kora ak yeneen instruments di bokk ci patrimoine musical. Musique di jàppale waxtaan, transmissionu récits ak denc xam-xam ci njaboot yi.

### Patrimoine ak transmission

Aada Mandingue di jaar ci làkk, récits, cérémonie ak jëf yu aada. Transmissionu xam-xam ci générations yi di jàppale denc diversitéu patrimoineu Senegaal.`,
  },
  'sebbe-koliyabe-tradition-culturelle-du-fouta': {
    titleWo: 'Sebbe Koliyabe',
    excerptWo: 'Pratique culturelle bu Fouta-Toro, bokk ci patrimoine Haalpulaar.',
    contentWo: `### Jëmmal

Sebbe Koliyabe mooy pratique culturelle bu Fouta-Toro bu bokk ci patrimoine Haalpulaar. Mu lëkkale aada, cérémonies ak transmissionu xam-xam.

### Aada ak communauté

Pratique bi di bokk ci waxtu yu ñuy dajale askan wi. Cérémonies ak jëf yi di wone solo bu communauté ak njaboot am ci dundug aada.

### Transmission

Xam-xam ci Sebbe Koliyabe di jaar ci générations yi. Transmissionu làkk, gestes ak récits di jàppale denc patrimoine culturel bu Fouta-Toro.`,
  },
  'intronisation-beuleup-tradition-royale-du-senegal': {
    titleWo: 'Intronisation Beuleup',
    excerptWo: 'Cérémonie ak tradition royale bu bokk ci patrimoine historique bu Senegaal.',
    contentWo: `### Jëmmal

Intronisation Beuleup mooy cérémonie bu lëkkale tradition royale, njiit ak patrimoine. Mu bokk ci pratiques historiques yi di wone organisationu société ak solo bu autorité traditionnelle am.

### Cérémonie ak symboles

Cérémonie bi di ëmb jëf yu aada ak symboles yu ñuy jëfandikoo ngir wone changementu njiit. Melokaanu cérémonie bi di jaar ci contexte ak traditionu terroir bi.

### Patrimoine

Intronisation bi di bokk ci mémoire culturelle ak historique. Denc récits ak pratiques yi di jàppale xam taariix ak patrimoineu communautés yi.`,
  },
  'super-diamono': {
    titleWo: 'Super Diamono',
    excerptWo: 'Groupe bu musik bu Senegaal, lëkkale mbalax, fusion ak aada yu local.',
    contentWo: `### Jëmmal

Super Diamono mooy groupe bu musik bu Senegaal bu bokk ci histoireu musik moderne. Fiche bi di ko jox ci contexteu création ak évolutionu musik, te di wone ni artistes mën a lëkkale influences yu wuute ci benn identité musicale.

### Musik ak fusion

Mbalax ak yeneen influences di bokk ci xel mi ñuy jëfandikoo ngir defar musik. Fusion bi di may groupe yi mën a jëfandikoo rythme, instruments ak melokaan yu wuute, te di yokk diversitéu scène musicale.

### Mémoire ak transmission

Taariixu groupe bu mel ni Super Diamono bokk na ci mémoireu musiqueu Senegaal. Denc répertoire, waxtaan ak génération yi di jàppale xam ni scène musicale di soppi, di yokk ak di wër ci aada yi.`,
  },
  'xalam-2': {
    titleWo: 'Xalam 2',
    excerptWo: 'Groupe bu fusion bu lëkkale jazz, rock ak aada yu local.',
    contentWo: `### Jëmmal

Xalam 2 mooy formation musicale bu bokk ci scèneu musique bu Senegaal. Fiche bi di ko jox ci contexteu fusion, ak ci ni musik mën a boole influences yu modern ak éléments yu bokk ci patrimoine musical.

### Jazz, rock ak aada

Jazz ak rock di bokk ci influences yi ñuy jëfandikoo ci fusion. Aada yu local yi di yokk identité ak melokaan, te lëkkale instruments, rythme ak xam-xamu musique ci benn projet.

### Création ak transmission

Xalam 2 di wone ni artistes mën a sos benn espace bu musik yi mën a daje. Transmissionu xam-xam, expérienceu scène ak dégg-dëgg ci influences yi di jàppale yokk diversitéu création musicale ci Senegaal.`,
  },
  'ucas-band-formation-musicale-historique-de-sedhiou': {
    titleWo: 'UCAS Band',
    excerptWo: 'Formation musicale historique bu Sédhiou, bokk ci mémoireu scèneu Casamance.',
    contentWo: `### Jëmmal

UCAS Band mooy formation musicale bu lëkkale Sédhiou ak histoireu scène musicale. Fiche bi di fésal solo bu formation yi am ci dundug culturel ci dëkk ak ci transmissionu savoir-faireu musique.

### Sédhiou ak musique

Sédhiou am na patrimoine culturel bu riche, te musique bokk na ci melokaan yi ñuy wone identitéu territoire. UCAS Band di bokk ci mémoire bi, ci digganteu création, performance ak vie culturelle.

### Mémoire ak transmission

Histoireu formation musicale di jàppale xam ni artistes ak musiciens mën a bokk ci denc patrimoineu dëkk. Waxtaan, répertoire ak transmissionu xam-xam di jàppale lëkkale générations yi ak scène musicale bu Sédhiou.`,
  },
  'fode-doussouba': {
    titleWo: 'Fodé Doussouba',
    excerptWo: 'Champion bu làmb, bokk ci patrimoineu lutte traditionnelle bu Senegaal.',
    contentWo: `### Jëmmal

Fodé Doussouba mooy champion bu làmb bu fiche bi di bokk ci patrimoineu sport ak aada bu Senegaal. Lutte traditionnelle am na bérab bu am solo ci animations, rassemblements ak dundug culturel ci réew mi.

### Làmb ak spectacle

Làmb du doon rekk combat. Mu ëmb it préparation, discipline, public, musique ak aada yi ñuy boole ak ay rassemblements. Njariñu champion yi di wone solo bu sport ak savoir-faireu performance am ci communauté yi.

### Mémoire ak transmission

Parcoursu champion di bokk ci mémoireu lutte. Transmissionu règles, gestes, discipline ak respectu adversaire di jàppale denc patrimoineu sport, te di may ndaw yi xam valeuru entraînement ak engagement.`,
  },
  'tata-de-kedougou-architecture-defensive-et-patrimoine-du-senegal-oriental': {
    titleWo: 'Tata bu Kédougou',
    excerptWo: 'Architecture défensive bu yàgg, bokk ci patrimoineu Sénégal oriental.',
    contentWo: `### Jëmmal

Tata bu Kédougou mooy exempleu architecture défensive bu yàgg ci Sénégal oriental. Fiche bi di fésal solo bu patrimoine bâti am ci mémoireu territoire ak ci compréhensionu formesu protection ak organisationu dëkk yi.

### Architecture ak territoire

Tata bi di lëkkale construction ak contexteu territoire. Muraay, espace ak organisationu bérab bi di wone ni architecture mën a toppatoo besoinu protection ak dundug communauté. Xam-xamu tabax di bokk ci patrimoine bi.

### Mémoire ak conservation

Denc tata yi di jàppale aar mémoireu Sénégal oriental. Patrimoine bâti bi mën a joxe xibaar ci taariixu territoire, savoir-faireu tabax ak manière yu ñuy defar bérab yi. Conservation ak transmission di am solo ngir générations yi xam seen patrimoine.`,
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
    excerptWo: 'Lekk bu aada bu bokk ci patrimoine culinaire.',
    contentWo: `### Jëmmal

Baïla mooy lekk bu aada bu bokk ci patrimoine culinaire. Mu lëkkale ingrédients yu local, savoir-faire ak waxtu yu ñuy dajale.

### Préparation ak terroir

Préparationu Baïla di jaar ci xam-xam bu ñu jële ci njaboot yi. Ingrédients yi ak melokaanu recette bi mën nañu wuute ci terroir yi.

### Transmission

Lekk yu aada ni Baïla di jàppale denc xam-xam ci cuisine. Transmissionu recettes ci njaboot yi di aar patrimoine culinaire ak diversitéu aada yi.`,
  },
  'mbakhalou-saloum': {
    titleWo: 'Mbakhalou Saalum',
    excerptWo: 'Spécialité bu Saalum, lëkkale riz, jën ak aada yu terroir.',
    contentWo: `### Jëmmal

Mbakhalou Saalum mooy spécialité bu bokk ci patrimoine culinaire bu Saalum. Mu lëkkale ingrédients yu local ak savoir-faireu cuisineu terroir.

### Saalum ak ressources

Lekk bi di wone solo bu ressourcesu terroir am ci alimentation. Jën, riz ak yeneen ingrédients mën nañu bokk ci préparation, ci melokaan yu wuute.

### Aada ak transmission

Mbakhalou Saalum di bokk ci diversitéu recettes yu Senegaal. Xam-xam bu préparation di jaar ci njaboot yi ak ci waxtu yu ñuy dajale, te di jàppale denc patrimoineu Saalum.`,
  },
};
