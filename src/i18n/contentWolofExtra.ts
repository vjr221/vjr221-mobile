import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA: Record<string, WolofContent> = {
  'ile-de-fadiouth': {
    titleWo: 'Dunu Fadiouth',
    excerptWo: 'Dunu coquillages ci Siin, bu lëkkale aada Sereer, patrimoine ak tourisme.',
    contentWo: `### Jëmmal

Dunu Fadiouth nekk na ci wetug Joal-Fadiouth, ci diiwaanu Fatick. Dunu bi ak coquillages yi di bokk ci melokaanu bérab bi, te aada Sereer ak patrimoine culturel di yokk soloam.

### Aada ak patrimoine

Fadiouth di wone digganteu nit ak géej. Coquillages yi, kër yi, bérab yu ñuy denc mémoire ak cimetière bi di bokk ci patrimoineu dunu bi. Dëkk bi di am it histoire ak pratiques culturelles yu ñuy jàppale ci transmissionu identitéu Sereer.

### Tourisme ak conservation

Dunu Fadiouth mën na nekk bérab bu jàng ci nature, culture ak histoire. Tourisme bu topp respectu environnement ak communauté di mën a jàppale économie locale, te conservationu patrimoine di am solo ngir dunu bi des ci yoon.`,
  },
  'cap-skirring': {
    titleWo: 'Cap Skirring',
    excerptWo: 'Bérab bu tourisme ci Casamance, ak plages, nature, culture ak vie locale.',
    contentWo: `### Jëmmal

Cap Skirring nekk na ci diiwaanu Ziguinchor, ci wetug géej bu Casamance. Bérab bi xam nañu ko ci plages, paysage naturel ak activité yu tourisme. Mu bokk ci destinations yi ñuy seet ci Casamance.

### Géej ak nature

Plages yi di bokk ci identitéu Cap Skirring. Géej, palmiers ak paysageu littoral di may bérab bi melokaan bu wuute. Nature bi mën a jàppale activité yu tourisme, promenade ak découverteu territoire.

### Culture ak vie locale

Tourisme bi di daje ak dundug communautés yi ci Casamance. Aada, lekk, musique ak savoir-faire yu local di mën a yokk expérienceu visiteurs. Respectu populations ak environnement di am solo ci développementu tourisme bu yàgg.

### Économie locale

Hôtels, restaurants, artisans ak yeneen services di bokk ci activitéu bérab bi. Valorisationu ressources locales ak participationu acteurs yi di mën a jàppale économieu Cap Skirring.`,
  },
  'pointe-des-almadies-dakar': {
    titleWo: 'Pointe des Almadies',
    excerptWo: 'Sowwu gu nekk ci Cap-Vert, ak géej, paysage littoral ak activité yu Dakar.',
    contentWo: `### Jëmmal

Pointe des Almadies mooy sowwu bu nekk ci péninsule du Cap-Vert, ci wetug Dakar. Bérab bi lëkkale géej, paysage littoral ak activité yu ville. Mu bokk ci bérab yi am solo ci géographie ak tourismeu Dakar.

### Géej ak paysage

Vista bu géej ak proximitéu océan di jox bérab bi melokaan bu wuute. Littoral bi di am solo ci promenade, loisirs ak yeneen activité yu jëme ci géej, ci digganteu environnement ak vie urbaine.

### Vie urbaine

Almadies di boole quartiers, restaurants, services ak activité yu loisirs. Bérab bi di nekk it ci digganteu dundug dëkk ak tourisme, te proximitéu géej di yokk njariñu territoire bi.

### Environnement ak développement

Aar littoral, gestionu déchets ak respectu environnement di am solo ngir bérab bi des bu neex. Développementu activité yu tourisme ak économie locale mën a doxandoo ak conservationu géej.`,
  },
  'plage-de-ngor': {
    titleWo: 'Plage bu N’Gor',
    excerptWo: 'Plage ak dunu N’Gor ci Dakar, bérab bu lëkkale géej, surf ak aada Lébou.',
    contentWo: `### Jëmmal

Plage bu N’Gor nekk na ci Dakar, ci wetug dunu N’Gor. Bérab bi lëkkale géej, activité yu loisirs ak vie locale. Aada Lébou di bokk ci identitéu territoire.

### Géej ak loisirs

Surf, baignade ak yeneen activité yu géej di bokk ci dundug plage bi. Dunu N’Gor di yokk melokaanu bérab bi, te proximitéu océan di may visiteurs ak wa dëkk yi espaceu détente ak découverte.

### Aada ak tourisme

N’Gor am na histoire ak culture bu lëkkale ak populationu Lébou. Tourisme bu jàppale respectu aada, environnement ak communauté di mën a yokk njariñu plage bi te aar patrimoineu littoral.

### Vie locale

Plage bi di it bérab bu ñuy daje, waxtaan ak séddale ay activité. Restaurants, services ak petites activités di bokk ci économie locale bu quartier bi.`,
  },
  'thieboudiene-ceebu-jen': {
    titleWo: 'Ceebu jën (Thiéboudiène)',
    excerptWo: 'Ceebu jën mooy mbuum bu nasyonaal bu Senegaal, ak riz, jën ak légumes.',
    contentWo: `### Jëmmal

Ceebu jën, walla thiéboudiène, mooy mbuum bu am solo ci gastronomie bu Senegaal. Dañu koy def ak riz, jën, légumes ak sauce bu ñu defar ak ingrédients yu local. Mbuum bi bokk na ci dundug kër ak waxtu yu ñuy bokk lekk.

### Ceebu jën bu xonq ak bu weex

Am na melokaan yu wuute ci ceebu jën. Ceebu jën bu xonq di jëfandikoo tomate ci sauce bi, te bu weex di am sauce bu leer. Jën mën a wuute ci li waxtu ak li ñu am, te thiof bokk na ci jën yi ñuy jëfandikoo.

### Aada ak transmission

Ceebu jën du doon rekk recette; mu bokk ci patrimoineu culinaire. Xam-xamu defar, séddale mbuum ak lekkandoo di lëkkale génération yi. Gastronomie bi di wone solo bu jën, riz, légumes ak savoir-faireu cuisine ci identitéu Senegaal.`,
  },
  'ceebu-yapp': {
    titleWo: 'Ceebu yapp',
    excerptWo: 'Mbuum bu riz ak yapp, légumes ak épices, bu bokk ci lekk yu Senegaal.',
    contentWo: `### Jëmmal

Ceebu yapp mooy mbuum bu ñuy def ak riz ak yapp, ak légumes ak ay épices. Mu bokk ci lekk yu ñuy def ci kër yu Senegaal, te recette bi mën a wuute ci kër ak ci disponibilitéu ingrédients.

### Préparation

Dañu koy defar ak yapp bu ñu togg ba mu sedd, walla ñu xawaare ko ci sauce bi. Riz bi di togg ci sauce bi ngir mu jël goûtu ingrédients yi. Légumes ak épices di yokk xew-xewu mbuum bi.

### Lekkandoo ak aada

Ceebu yapp di bokk ci repas yu ñuy séddale ak waa kër. Benn plat mën na boole riz, yapp ak légumes, te lekkandoo di yokk solo bu mbuum bi ci dundug bis bu nekk.

### Savoir-faire

Yoonu defar ceebu yapp di jaar ci xam-xamu cuisine bu ñuy jàngale ci diggante génération yi. Choixu yapp, waxtu togg ak melo sauce di mën a wuute, te loolu di may recette bi ay melokaan yu bari.`,
  },
  'mafe': {
    titleWo: 'Mafé',
    excerptWo: 'Mbuum bu sauce arachide, bu bokk ci lekk yu am solo ci Senegaal.',
    contentWo: `### Jëmmal

Mafé mooy mbuum bu ñuy def ak sauce arachide, ak yapp walla poisson, légumes ak ay épices. Mu bokk ci lekk yu ñuy def ci kër yu Senegaal, te recette bi mën a am ay melokaan yu wuute ci région ak ci kër.

### Préparation

Arachide bi di jëfandikoo ngir defar sauce bi, te ñu mën a boole ko ak tomate, légumes ak ingrédients yu ñu am. Yapp walla poisson di togg ci sauce bi ba mu jël goûtu mbuum.

### Aada ak lekkandoo

Mafé di bokk ci repas yu ñuy séddale ak waa kër. Xam-xamu defar sauce bi ak séddale mbuum di jaar ci diggante génération yi. Mu di it wone solo bu arachide ci gastronomie bu Senegaal.`,
  },
  'domoda': {
    titleWo: 'Domoda',
    excerptWo: 'Mbuum bu sauce tomate ak farine, ak yapp walla poisson ak légumes.',
    contentWo: `### Jëmmal

Domoda mooy mbuum bu ñuy def ak sauce bu tomate, farine ak yapp walla poisson, ak légumes. Mu bokk ci gastronomie bu Senegaal, te recette bi mën a wuute ci yoonu defar ak ingrédients yi ñu am.

### Préparation

Dañu koy defar ak sauce bu ñu togg ba mu am texture bu dëgër, topp ci yapp walla poisson ak légumes. Riz di mën a bokk ci séddale mbuum bi. Épices di jàppale goûtu sauce bi.

### Aada ak gastronomie

Domoda di bokk ci lekk yu ñuy séddale ci kër. Recette bi di wone savoir-faireu cuisine bu ñuy jàngale ci diggante génération yi, te mu bokk ci diversitéu gastronomie bu Senegaal.`,
  },
  'soupou-kandia': {
    titleWo: 'Soupou kandia',
    excerptWo: 'Sauce gombo bu ñuy def ak huile de palme, poisson walla yapp ak riz.',
    contentWo: `### Jëmmal

Soupou kandia mooy mbuum bu sauce gombo, bu ñuy def ak poisson walla yapp, légumes ak huile de palme. Mu bokk ci lekk yu Senegaal, te mu am place bu mag ci gastronomie bu réew mi.

### Préparation

Gombo bi di jox sauce bi texture bu ñu ko xamle. Ñu mën a boole ko ak poisson, yapp, tomate ak yeneen ingrédients. Riz di bokk ci lekkandoo ak sauce bi.

### Aada ak territoire

Soupou kandia di wone solo bu légumes, huile ak produits yu local ci cuisine. Yoonu defar bi di jaar ci savoir-faireu kër, te recette bi mën a wuute ci territoire ak préférenceu waa kër.`,
  },
  'thiakry': {
    titleWo: 'Thiakry',
    excerptWo: 'Dessert bu ñuy def ak couscous de mil, lait caillé ak sukkar.',
    contentWo: `### Jëmmal

Thiakry mooy dessert bu ñuy def ak couscous de mil ak lait caillé. Dañu koy boole ak sukkar, te ñu mën a yokk vanille, muscade walla yeneen parfum. Mu bokk ci lekk yu ñuy def ci kër yu Senegaal.

### Préparation

Mil bi ñuy defar ci couscous di togg, ba noppi ñu ko boole ak lait caillé. Sukkar ak parfum yi di yokk goût. Thiakry mën na nekk bu sedd, te préparation bi di aju ci yoonu kër gi.

### Aada ak gastronomie

Thiakry di bokk ci repas, cérémonies ak waxtu yu ñuy dal. Mu wone solo bu mil ci alimentation ak gastronomie bu Senegaal, te recette bi di jaar ci diggante génération yi.`,
  },
  'cafe-touba': {
    titleWo: 'Kafe Touba',
    excerptWo: 'Kafe bu am djar, bu bokk ci aada ak dundug kër ci Senegaal.',
    contentWo: `### Jëmmal

Kafe Touba mooy kafe bu ñu boole ak djar, te mu am bérab bu mag ci dundug Senegaal. Dañu koy xawaare ak waxtu yu ñuy dal, waxtu yu ñuy waxtaan ak jamono yu ñuy bokk.

### Aada ak préparation

Dañu koy togg ci ndox, kafe ak djar, ba mu am xew-xew bu mel ni ñu ko xamle. Nit ñi mën a defar ko ci kër walla ci bérab yu ñuy jaay kafe. Kafe Touba di wone it xam-xamu defar ak séddale naan.

### Place ci société

Kafe bi bokk na ci aada bu am solo ci Senegaal, te ñu koy gis ci kër, marchés ak bérab yu ñuy daje. Mu di boole nit ñi ci waxtaan, dal ak dundug bis bu nekk.`,
  },
  'bissap': {
    titleWo: 'Bissap',
    excerptWo: 'Naan bu ñu defar ak hibiscus, bu ñuy naan sedd walla tàng.',
    contentWo: `### Jëmmal

Bissap mooy naan bu ñu defar ak hibiscus. Dañu koy togg, teg sukkar ci, ba noppi mu sedd walla ñu naan ko tàng. Bissap bu xonq mooy melokaan bu ñu gën a xam, waaye ñu mën a defar ko ak yeneen melokaan.

### Naan ak préparation

Dañu mën a boole bissap ak gingembre, mint walla yeneen ingrédients ngir yokk xew-xewam. Ci kër ak ci cérémonies, ñu koy defar ci quantité bu doy nit ñi te ñu koy séddale ci verre.

### Gastronomie ak économie

Bissap bokk na ci naan yu am solo ci gastronomie bu Senegaal. Hibiscus di it mbay mi ñuy jëfandikoo, te transformationu ko ci naan mën a jàppale producteurs ak petites activités commerciales.`,
  }
  'jus-de-bouye': {
    titleWo: 'Jus bu bouye',
    excerptWo: 'Naan bu ñuy def ak fruitu bouye, bu am goût bu wuute ak xel.',
    contentWo: `### Jëmmal

Jus bu bouye mooy naan bu ñuy def ak fruitu baobab. Fruit bi ñuy dajale, setal, te ñu koy boole ak ndox ak sukkar ngir defar naan bi. Mu bokk ci naan yu ñuy xam ci Senegaal.

### Préparation

Pulpeu bouye bi mën na am texture bu ñu ko xamle ak goût bu wuute. Dañu koy boole ak ndox, ba noppi ñu ko setal bu baax. Sukkar di aju ci li nit ñi bëgg ci goûtu naan bi.

### Patrimoine ak valorisation

Bouye bokk na ci ressources naturelles yu Senegaal. Jëfandikoo fruit bi ci naan di jàppale valorisationu produit local, te mën na bokk ci activitéu transformation ak commerce.`,
  },
  'jus-de-gingembre': {
    titleWo: 'Jus bu gingembre',
    excerptWo: 'Naan bu ñuy def ak gingembre, ndox ak sukkar, bu ñuy naan sedd.',
    contentWo: `### Jëmmal

Jus bu gingembre mooy naan bu ñuy def ak gingembre, ndox ak sukkar. Gingembre bi ñuy setal, tàllal walla nghiền, ba noppi ñu ko boole ak ndox. Naan bi mën na am goût bu dëgër te ñu koy naan sedd.

### Préparation

Dañu mën a yokk citron, mint walla yeneen ingrédients ngir soppi goût. Quantitéu gingembre ak sukkar di aju ci recetteu kër gi. Naan bi di bokk ci repas, cérémonies ak waxtu yu ñuy dal.

### Gastronomie ak économie

Jus bu gingembre bokk na ci naan yu ñuy def ci kër ak ci petite activité yu transformation. Jëfandikoo ingrédients yu local di jàppale savoir-faireu gastronomie ak valorisationu produit yi.`,
  },
  'thiere-bassi-salte': {
    titleWo: 'Thiéré bassi salté',
    excerptWo: 'Lekk bu couscousu mil ak bassi salté, bu bokk ci patrimoine céréalier ak aada lekk.',
    contentWo: `### Jëmmal

Thiéré bassi salté mooy lekk bu ñu def ak couscousu mil ak bassi salté. Mu bokk ci patrimoine céréalier bu Senegaal, te di wone solo bu mil am ci mbay ak alimentation. Recette bi mën a wuute ci kër yi, waaye base bi di dëppoo ci jëfandikoo mil ak bassi salté.

### Mil ak préparation

Mil mooy céréale bu am solo ci lekk yu Senegaal. Ñuy defar ko ci couscous, ba noppi ñu ko togg ak ndox. Bassi salté bi di yokk goût ak melokaan ci lekk bi. Waxtu togg ak quantitéu ndox di mën a soppi textureu thiéré bi.

### Aada ak terroir

Thiéré di lëkkale mbay, cuisine ak dundug kër. Xam-xamu defar mil di jaar ci njaboot yi, te recettes yu mel ni bii di wone ni produits yu local mën a nekk ci xolum gastronomie. Ci ay terroir, ñuy soppi ingrédients yi ci li ñu am.

### Transmission ak patrimoine

Lekk bu mil di bokk ci transmissionu savoir-faireu cuisine. Mag ñi di jàngale ndaw ñi yoonu setal, defar ak togg mil. Denc recettes yu mel ni thiéré bassi salté di jàppale aar patrimoine culinaire ak diversitéu lekk yu Senegaal.`,
  },
  'poisson-braise-lakk-dieune': {
    titleWo: 'Lakk jën',
    excerptWo: 'Jën bu ñu lakk ci taal, lekk bu lëkkale pêche, géej ak savoir-faireu cuisine.',
    contentWo: `### Jëmmal

Lakk jën mooy jën bu ñu lakk ci taal. Mu bokk ci lekk yu lëkkale pêche ak cuisine, rawatina ci dëkk yu wetu géej. Xeeñu taal bi ak goûtu jën bi di may lekk bi melokaan bu ñu xam ci cuisineu littoral.

### Pêche ak choixu jën

Jën bi di nekk ci xolum recette bi. Xeetu jën bi mën a wuute ci li pêcheur yi jële ci géej ak li marché bi di am. Jëfandikoo jën bu frais di am solo ngir qualitéu lekk bi, te toppatoo ressourcesu géej di bokk ci responsabilitéu acteurs yi.

### Préparation ak cuisson

Ñuy setal jën bi, toggal ko ak xorom walla yeneen ingrédients, ba noppi ñu koy lakk ci taal. Cuisson bu baax di soxla toppatoo safara ngir jën bi bañ a lakk ba mu metti. Yoonu defar di mën a wuute ci kër ak terroir.

### Patrimoine littoral

Lakk jën di wone digganteu nit ñi, pêche ak géej. Mu bokk ci savoir-faireu cuisine bu ñuy séddale ci njaboot ak communauté. Denc yoonu defar ak aar ressourcesu géej di jàppale patrimoineu gastronomie bu littoral.`,
  },
  'ndambe-ragout-de-niebe-petit-dejeuner-populaire-senegalais': {
    titleWo: 'Ndambé',
    excerptWo: 'Ragout bu niébé, bu ñuy lekk ak mburu, rawatina ci njël, ci kër ak ci marchés.',
    contentWo: `### Jëmmal

Ndambé mooy ragout bu ñu def ak niébé. Mu bokk ci lekk yu ñuy lekk ci njël ci Senegaal, te ñu koy boole ak mburu. Ci Dakar ak yeneen dëkk, ndambé mën na nekk lekk bu yomb te doy, bu ñuy jaay ci petites gargotes, marchés ak bérab yu ñuy lekk.

### Niébé ak préparation

Niébé bi ñuy setal, suuxal walla togg ba mu sedd. Ñu koy boole ak sauce bu am tomate, oignon, piment walla yeneen ingrédients ci li recetteu kër gi di jëfandikoo. Sauce bi di jàppale neex ak xeeñu ragout bi.

### Ndambé ak mburu

Mburu bi di bokk ci séddale ndambé. Nit ñi mën nañu ko lekk ci waxtu njël walla ci yeneen waxtu. Lekk bi di may énergie ak saté, te yombug préparation bi di jàppale ndaw yi ak travailleurs yi ci dundug bis bu nekk.

### Vie quotidienne ak économie

Ndambé di wone digganteu gastronomie ak dundug dëkk. Jaaykat yi di jëfandikoo niébé, mburu ak ingrédients yu local, te activité bi mën a jox ay revenu. Recette bi di it bokk ci savoir-faireu cuisine populaire bu ñuy séddale ci générations yi.`,
  },
  'thiou': {
    titleWo: 'Thiou',
    excerptWo: 'Sauce bu tomate bu ñu mën a def ak jën walla yàpp, te ñuy lekk ak ceeb ak légumes.',
    contentWo: `### Jëmmal

Thiou mooy sauce bu tomate bu ñu mën a def ak jën walla yàpp, te ñuy lekk ak ceeb. Mu bokk ci lekk yu sauce yi di boole riz, protéines ak légumes ci benn plat. Recette bi mën a am ay melokaan yu wuute ci kër yi ak terroir yi.

### Tomate ak préparation

Tomate bi di joxe baseu sauce bi. Ñuy togg ko ak oignon ak yeneen ingrédients, ba mu am xeeñ ak texture bu ñu bëgg. Jën walla yàpp bi di yokk doole ci lekk bi, te légumes di may ay goûts ak couleurs yu wuute.

### Ceeb ak séddale

Thiou mën na nekk ak riz bu ñu togg ci ndox walla ci sauce, ci li yoon wi kër gi di jëfandikoo. Séddaleu mbuum bi di boole sauce, riz ak jën walla yàpp. Ci repasu njaboot, ñuy mën a séddale ci benn plat ngir lekkandoo.

### Aada ak transmission

Thiou di bokk ci patrimoine culinaire bu Senegaal. Xam-xamu defar sauce, waxtu togg ak séddale mbuum di jaar ci njaboot yi. Recettes yu mel ni bii di jàppale denc diversitéu lekk ak savoir-faireu cuisine.`,
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
    excerptWo: 'Bérab bu mémoire historique bu Sédhiou ak Casamance.',
    contentWo: `### Jëmmal

Fort Pinet-Laprade bokk na ci patrimoine historique bu Sédhiou. Fiche bi di fésal solo bu bérab yi am ci mémoireu territoire ak ci compréhensionu taariixu Casamance.

### Taariix ak territoire

Fort yi di bokk ci architecture ak organisationu territoire ci jamono yu weesu. Seen présence mën a joxe xibaar ci digganteu dëkk, circulation ak enjeux yu melni protection. Sédhiou, ci digganteu Fleuve Casamance ak yeneen bérab yu Casamance, am na patrimoine historique bu wuute.

### Mémoire ak conservation

Denc bérab bu mel ni Fort Pinet-Laprade di jàppale transmissionu mémoire. Xam-xam, archives, récit ak patrimoine bâti di mën a boole ngir génération yi xam taariixu seen territoire.`,
  },
  'centre-dinterpretation-de-toubacouta-patrimoine-du-delta-du-saloum': {
    titleWo: 'Centre bu Toubacouta',
    excerptWo: 'Bérab bu di jàppale xam ak denc patrimoineu Delta Saalum.',
    contentWo: `### Jëmmal

Centre d’interprétation bu Toubacouta di jàppale xam patrimoineu Delta Saalum. Bérab bu mel ni mooy may ndaw ak mag ñu gën a xam environnement, culture ak histoireu territoire.

### Delta Saalum

Delta Saalum am na combinaison bu wuute bu géej, dex, mangrove ak dëkk yi. Nature ak dundug nit ñoo bokk ci identitéu bérab bi. Xam-xamu territoire di jàppale nàmm ak aar ressources.

### Transmission

Centre d’interprétation yi di may espace ngir jàng, waxtaan ak wone patrimoine. Transmissionu xibaar ci nature, aada ak histoire di yokk xam-xam ak responsabilité ci conservationu Delta.`,
  },
  'centre-dinterpretation-de-bandafassi-patrimoine-du-pays-bassari': {
    titleWo: 'Centre bu Bandafassi',
    excerptWo: 'Bérab bu di jàppale xam patrimoineu Pays Bassari.',
    contentWo: `### Jëmmal

Centre d’interprétation bu Bandafassi di bokk ci valorisationu patrimoineu Pays Bassari. Fiche bi di fésal solo bu transmissionu xibaar ci culture, territoire ak environnement.

### Pays Bassari

Pays Bassari am na patrimoine culturel ak naturel bu riche. Aada, savoir-faire, paysage ak pratiquesu communauté yi di bokk ci identitéu territoire. Jàng xibaar ci éléments yooyu di may nit ñu gën a xam seen solo.

### Patrimoine ak transmission

Centre bi di mën a jàppale transmissionu patrimoine ci waxtaan, exposition ak activitésu jàng. Aar patrimoine du doon rekk denc bérab; mu ëmb it xam-xam, récit ak participationu communauté yi.`,
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
    excerptWo: 'Paysages sahéliens, faune ak ressources yu bokk ci identitéu Ferlo.',
    contentWo: `### Jëmmal

Ferlo mooy territoire bu paysages sahéliens yu wuute, fu nit ak nature di dundandoo. Fiche bi di fésal solo bu faune, ressources ak savoir-faire yi ñuy jëfandikoo ci environnementu bu sedd ak sec.

### Paysage ak ressources

Ferlo am na espace yu yaatu, végétation bu topp saison yi ak ressources yu dépend ci ndox. Nit ñi dañuy soppi seen pratiques ci li saison di may. Pastoralism ak dundug rurale bokk nañu ci dynamiqueu territoire.

### Aar nature

Xam ni écosystème bi di dox di am solo ngir aar biodiversité ak ressources. Gestion bu baax, transmissionu savoir-faire ak jëfandikoo bu wér di mën a jàppale wéyantu dundug communauté yi ak aar environnement.`,
  },
  'la-gomme-arabique-au-senegal-ressource-du-sahel-et-valorisation': {
    titleWo: 'Gomme arabique',
    excerptWo: 'Ressource bu Sahel bu bokk ci économie rurale ak valorisationu produits naturels.',
    contentWo: `### Jëmmal

Gomme arabique mooy produit bu naturel bu bokk ci ressourcesu Sahel. Ci Senegaal, production ak commerce bi di lëkkale environnement, activité rurale ak opportunitésu valorisation.

### Production

Gomme arabique di génère ci arbres yu mën a dund ci conditionsu Sahel. Collecte bi di soxla xam-xamu arbres, saison ak pratiques yu topp environnement. Activité bi mën a bokk ci revenu ak économieu communauté yi.

### Valorisation ak environnement

Valorisationu gomme arabique mën a yokk valeur bu produit bi boo ko boolee ak transformation, qualité ak commerce bu organisé. Aar arbres ak gestionu ressources di am solo ngir production bi mën a wéy ci jamono yu yàgg.`,
  }
  'baila': {
    titleWo: 'Baila',
    excerptWo: 'Aada ak melokaanu patrimoine bu bokk ci diversitéu culture bu Senegaal.',
    contentWo: `### Jëmmal

Baila bokk na ci ay melokaanu patrimoine culturel yi ñuy wone ci Senegaal. Xam-xam, aada ak pratiques yu ñuy jëfandikoo di jàppale transmissionu mémoire ci diggante génération yi.

### Aada ak transmission

Aada yi mën a nekk ci musique, danse, cérémonies, waxtaan walla yeneen formes yu expression. Li ëpp solo mooy ñuy wéy ci yoonu transmission ngir xam-xam bi bañ a réer ak changementu jamono.

### Patrimoine

Valorisationu patrimoine bi di may nit ñi xam seen histoire ak diversitéu culture. Documentation, jàngale ak participationu communauté di mën a jàppale aar ak yokk njariñu aada yi.`,
  },
  'mbakhalou-saloum': {
    titleWo: 'Mbakhalou Saloum',
    excerptWo: 'Mbuum bu lëkkale riz, poisson walla yapp ak aada lekk yu Saloum.',
    contentWo: `### Jëmmal

Mbakhalou Saloum bokk na ci lekk yu Saloum ak patrimoineu gastronomie bu Senegaal. Mbuum bi mën a jëfandikoo riz ak poisson walla yapp, ak légumes ak ingrédients yu ñu am ci territoire.

### Préparation ak goût

Préparation bi di aju ci ingrédients yi ak yoon wi kër gi di jëfandikoo. Épices ak légumes di jàppale goûtu mbuum bi, te xam-xamu defar di jaar ci diggante génération yi.

### Aada ak territoire

Mbakhalou Saloum di wone digganteu lekk ak territoire. Lekk yu mel ni mbuum bii di bokk ci identitéu Saloum, te séddale recette yi di jàppale conservationu patrimoineu culinaire.`,
  },
};
