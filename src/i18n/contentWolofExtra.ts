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
  },
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
    excerptWo: 'Caldou mooy lekk bu jën ak légumes, bu lëkkale pêche, riz ak aada lekk yu littoral.',
    contentWo: `### Jëmmal

Caldou mooy lekk bu ñu def ak jën ak légumes, te ñuy ko boole ak riz. Mu bokk ci lekk yu lëkkale dundug pêche ak cuisine, rawatina ci terroirs yu wetu géej. Jën bi, légumes yi ak sauce bi di bokk ci melokaanu plat bi.

### Jën ak pêche

Jën mooy élément bu am solo ci caldou. Xeetu jën bi mën a wuute ci saison, bérab ak li pêcheur yi jële ci géej. Jëfandikoo jën bu frais di yokk qualitéu lekk, te toppatoo ressourcesu pêche di am solo ngir dundug communautés yu littoral.

### Préparation ak légumes

Ñuy setal jën bi, def ko ci sauce ak légumes, ba noppi ñu togg ko ndànk. Légumes yi mën a bokk ci recette bi ci li ñu am ci terroir. Sauce bi di jàppale jën bi ak légumes yi ñu neexal.

### Patrimoine ak transmission

Caldou di wone ni produitsu géej ak mbay mën a bokk ci benn repas. Xam-xamu defar lekk bi di jaar ci njaboot yi, te recette bi mën a wuute ci kër ak communauté. Denc savoir-faire bi di jàppale patrimoine culinaireu littoral.`,
  },
  'le-thiof-au-senegal-poisson-emblematique-peche-et-gastronomie': {
    titleWo: 'Thiof ci Senegaal',
    excerptWo: 'Thiof mooy jën bu ñu xam ci gastronomie ak pêcheu Senegaal, te mu am solo ci patrimoineu littoral.',
    contentWo: `### Jëmmal

Thiof mooy jën bu am solo ci gastronomieu Senegaal. Ñu koy jëfandikoo ci ay recettes yu bari, te mu lëkkale cuisine, pêche ak dundug communautés yu wetu géej. Goûtu jën bi ak qualitéu viande bi di tax mu am place bu am solo ci lekk yu ñuy séddale.

### Pêche ak ressources

Thiof di bokk ci ressourcesu géej yi. Pêcheur yi di ko jële ci mer, te disponibilité bi mën a soppi ci saison ak pressionu pêche. Toppatoo stocks ak jëfandikoo yoon yu wér di am solo ngir denc ressources yi ak dundug pêcheur yi.

### Préparation ci cuisine

Thiof mën na nekk ci ceeb, sauce walla yeneen recettes. Ñuy ko setal, togg ko ak ingrédients yu ñu xam ci cuisineu Senegaal, ba goût ak textureu jën bi des. Yoonu defar mën na wuute ci kër yi, restaurants ak terroir yi.

### Patrimoine gastronomique

Thiof di lëkkale mer ak mbedd mi, pêche ak repasu njaboot. Xam-xamu defar jën bi di jaar ci générations yi. Denc patrimoine bi di soxla yokk xam-xam ci ressourcesu géej ak valorisationu produitsu local.`,
  },
  'riz-de-casamance': {
    titleWo: 'Rizu Casamance',
    excerptWo: 'Riz bu ñuy mbay ci Casamance, bu lëkkale terroir, ndox, mbay ak patrimoine alimentaire.',
    contentWo: `### Jëmmal

Rizu Casamance mooy céréale bu am solo ci mbay ak alimentationu région bi. Mbay riz di bokk ci dundug ay village, te mu lëkkale nit ñi ak suuf, ndox ak saison. Riz bi di nekk ci ay repas ak ci économie locale.

### Mbay ak terroir

Mbaykat yi di jëfandikoo xam-xam yu ñu doon jàngale ci générations ngir defar suuf ak gérer ndox. Terroir yi mën a wuute ci Casamance, te yoonu mbay mën a sukkandiku ci conditionsu saison. Liggéey bi soxla doole, waxtu ak toppatoo.

### Riz ci alimentation

Riz di bokk ci lekk yu bari ci Senegaal. Ci Casamance, riz local mën a nekk ci repasu njaboot ak ci yeneen cérémonies. Jëfandikoo produit local di jàppale lien bi diggante mbay ak alimentation.

### Patrimoine ak valorisation

Denc rizu Casamance di denc it xam-xamu mbay. Valorisationu riz local mën a jàppale revenu mbook yi, te di yokk intérêt ci patrimoine agricole. Aar suuf, ndox ak diversitéu semences di bokk ci yoonu dundal mbay bi.`,
  },
  'lakhou-bissap': {
    titleWo: 'Lakhou bissap',
    excerptWo: 'Lakh bu ñu def ak millet ak bissap, lekk bu lëkkale céréale, boisson traditionnelle ak terroir.',
    contentWo: `### Jëmmal

Lakhou bissap mooy lekk bu ñu def ak mil ak bissap. Mu lëkkale céréale ak goût bu bissap di joxe. Lakh di bokk ci lekk yu ñuy def ci kër, te ñu mën a ko lekk ci ay waxtu yu wuute ci dundug njaboot.

### Mil ak bissap

Mil mooy baseu lakh bi, te mu am solo ci patrimoine céréalier bu Senegaal. Bissap bi di yokk xeeñ, goût ak melokaan. Ñuy jëfandikoo ndoxu bissap ci yoonu defar bi, ci li recetteu kër gi di soxla.

### Préparation ak partage

Ñuy togg mil bi ba mu am texture bu ñu bëgg, ba noppi ñu yokk bissap ak yeneen ingrédients. Yoonu préparation mën na wuute ci kër yi. Lakh di mën a nekk ci benn bol, te ñuy ko séddale ci njaboot ak gan yi.

### Patrimoine culinaire

Lakhou bissap di wone ni produitsu local mën a bokk ci lekk bu am identité. Mil ak bissap ñoo lëkkale mbay ak cuisine. Denc recette bi di jàppale transmissionu savoir-faire ak valorisationu produitsu Senegaal.`,
  },
  'les-epices-dans-la-cuisine-senegalaise': {
    titleWo: 'Xeer yi ci cuisineu Senegaal',
    excerptWo: 'Xeer yi di joxe xeeñ, goût ak melokaan ci lekk yu Senegaal, te ñuy jëfandikoo ay xeet yu wuute.',
    contentWo: `### Jëmmal

Xeer yi am solo ci cuisineu Senegaal ndax ñuy joxe xeeñ, goût ak melokaan. Ñuy ko jëfandikoo ci sauce, jën, yàpp, riz ak yeneen lekk. Yoonu jëfandikoo xeer yi di wuute ci recette, terroir ak goûtu kër.

### Xeer ak produits yu local

Xeer yi mën a jóge ci mbay, marché walla réseauxu commerce. Piment, poivre ak yeneen aromates di yokk caractéristiqueu lekk. Jëfandikoo produits yu local di bokk ci valorisationu savoir-faire ak économieu producteurs yi.

### Jëfandikoo ci préparation

Quantitéu xeer di am solo. Bu ñu ko yokkee lool, goût bi mën a ëpp; bu ñu ko yéexee, xeeñ bi mën a néew. Cuisinier yi di jàngale ay techniques ngir boole xeer ak ingrédients ci waxtu wu jub.

### Patrimoine ak transmission

Xeer yi di bokk ci mémoireu cuisine. Njaboot yi di séddale yoonu boole aromates, te ay recettes mën a am ay secrets yu ñuy denc. Xam-xamu jëfandikoo xeer yi di jàppale diversitéu gastronomie ak identitéu lekk yu Senegaal.`,
  },
  'culture-serere-traditions-patrimoine': {
    titleWo: 'Aada Sereer',
    excerptWo: 'Aada, xam-xam ak patrimoine bu Sereer ci Siin-Saalum, ci diggante njaboot, cérémonie ak dundug terroir.',
    contentWo: `### Jëmmal

Aada Sereer ëmb làkk, xam-xam, jëf yu aada ak yoonu dund yu jaar ci njaboot yi ci Siin-Saalum ak yeneen terroir. Mu bokk ci diversitéu patrimoine culturel bu Senegaal, te mu lëkkale nit ñi ak seen cosaan, seen suuf ak seen communauté.

### Njaboot ak aada

Njaboot am na solo ci transmissionu xam-xam. Mag ñi di jàngale ndaw ñi yoonu waxtaan, jëf yu aada, lekk, liggéey ak respectu communauté. Cérémonies ak rassemblements di may nit ñi espace ngir bokk, waxtaan ak denc mémoire.

### Musique, lekk ak expression

Musique, danse ak lekk di bokk ci melokaanu aada Sereer. Instruments ak chants mën a lëkkale fête, cérémonie ak waxtu yu am solo. Recettes ak produitsu terroir di wone it digganteu mbay, environnement ak cuisine.

### Patrimoine ak territoire

Sereer di am xam-xam bu dëgër ci suuf, mbay ak ressourcesu terroir. Denc xam-xam boobu di jàppale aar patrimoine matériel ak immatériel. Histoireu dëkk yi, bérab yu aada ak pratiquesu communauté di bokk ci mémoireu territoire.

### Transmission ak avenir

Aada du nekk rekk ci li weesu; mu mën a wéy ci génération yi. Jàngale ndaw ñi, documentation ak participationu communauté di mën a jàppale transmissionu patrimoine ak yokk xam-xam ci diversitéu culture bu Senegaal.`,
  },
  'culture-mandingue-senegal-traditions': {
    titleWo: 'Aada Mandingue',
    excerptWo: 'Aada Mandingue, musique, récits ak xam-xam bu bokk ci patrimoine culturel bu Senegaal.',
    contentWo: `### Jëmmal

Aada Mandingue bokk na ci patrimoine culturel bu Senegaal, rawatina ci diiwaan yi lëkkale ak histoireu Mande. Mu ëmb làkk, récits, musique, cérémonies, savoir-faire ak yoonu dund yu jaar ci générations.

### Griot ak récits

Récits ak parole am nañu solo ci transmissionu mémoire. Griots di mën a denc taariix, cosaan, genealogie ak xibaar yu ñuy jàngale ci communauté. Waxtaan di jàppale lëkkale li weesu ak li ñuy dund tey.

### Kora ak musique

Kora ak yeneen instruments di bokk ci patrimoine musical. Musique di bokk ci cérémonies, fêtes ak waxtu yu am solo, te rythme ak mélodie di may artistes yoonu wone xam-xam ak émotion.

### Aada ak communauté

Cérémonies, accueil, lekkandoo ak jëf yu aada di jàppale solidarite. Pratiques yi mën a wuute ci terroir, waaye ñu bokk ci xel mu mag bu transmission ak respectu cosaan.

### Patrimoine ak avenir

Aada Mandingue di wéy ci génération yi. Documentation, enseignementu musique ak récits, ak participationu ndaw ñi di mën a jàppale denc patrimoine bi te di ko yokk ci contexteu jamono ju bees.`,
  },
  'sebbe-koliyabe-tradition-culturelle-du-fouta': {
    titleWo: 'Sebbe Koliyabe',
    excerptWo: 'Pratique culturelle bu Fouta-Toro, bokk ci patrimoine Haalpulaar, ak cérémonie, communauté ak transmission.',
    contentWo: `### Jëmmal

Sebbe Koliyabe mooy pratique culturelle bu Fouta-Toro bu bokk ci patrimoine Haalpulaar. Mu lëkkale aada, cérémonies, gestes ak transmissionu xam-xam ci diggante génération yi.

### Fouta-Toro ak communauté

Fouta-Toro am na patrimoine culturel bu riche, te jëf yu aada di bokk ci dundug communauté. Waxtu yu ñuy dajale askan wi di may espace ngir séddale xam-xam, waxtaan ak wone respectu cosaan.

### Cérémonie ak symboles

Pratique bi mën a ëmb gestes, paroles, tenue walla yeneen symboles yu am solo ci contexteu cérémonie. Li ñuy def di aju ci cosaanu communauté ak li mag ñi di jàngale.

### Transmissionu xam-xam

Xam-xam ci Sebbe Koliyabe di jaar ci génération yi. Làkk, récits, gestes ak participationu ndaw ñi di jàppale denc pratique bi. Transmission bi di tax patrimoine bi des vivant ci communauté.

### Patrimoine bu Fouta

Denc pratiquesu culturelles yi di jàppale xam taariix ak identitéu Fouta-Toro. Documentation ak valorisationu xam-xam mën nañu jàppale aar patrimoine immatériel bi, te communauté yi di nekk ci xolum processus bi.`,
  },
  'intronisation-beuleup-tradition-royale-du-senegal': {
    titleWo: 'Intronisation Beuleup',
    excerptWo: 'Cérémonie bu lëkkale tradition royale, njiit, symboles ak mémoire historique ci patrimoineu Senegaal.',
    contentWo: `### Jëmmal

Intronisation Beuleup mooy cérémonie bu lëkkale tradition royale, njiit ak patrimoine. Mu bokk ci pratiques historiques yi di wone organisationu société ak solo bu autorité traditionnelle am ci territoire.

### Cérémonie ak symboles

Cérémonie bi di ëmb jëf yu aada ak symboles yu ñuy jëfandikoo ngir wone changementu njiit. Tenue, paroles, gestes ak participationu communauté mën a am solo ci melokaanu cérémonie bi.

### Njiit ak responsabilité

Intronisation di wone ne njiit du nekk rekk tur; mu am it responsabilité ci communauté. Respectu aada, aar intérêtsu askan wi ak denc équilibre ci digganteu njaboot ak territoire di bokk ci xel mu cérémonie.

### Mémoire ak histoire

Pratique bi di bokk ci mémoire culturelle ak historique. Récits ak témoignages di mën a jox xibaar ci yoonu njiit yi doon dox ak yoonu société yi di organisé seen dund.

### Transmission ak patrimoine

Denc xam-xam ci intronisation di jàppale générations yi xam seen histoire. Documentation ak transmissionu récits, symboles ak pratiques di mën a aar patrimoine immatériel bi te di yokk xam-xamu territoire.`,
  },
  'super-diamono': {
    titleWo: 'Super Diamono',
    excerptWo: 'Groupe bu musik bu Senegaal, bu bokk ci histoireu musique moderne ak évolutionu scèneu Dakar.',
    contentWo: `### Jëmmal

Super Diamono mooy groupe bu musik bu Senegaal bu bokk ci histoireu musique moderne. Groupe bi di fésal ni artistes ak musiciens mën a lëkkale influences yu wuute ak aada yu local ngir sos benn identité musicale bu am solo.

### Musique ak fusion

Mbalax ak yeneen influences di bokk ci xel mi ñuy jëfandikoo ngir defar musique. Fusion bi di may artistes yoonu boole rythme, instruments, harmonie ak melokaan yu wuute. Loolu di yokk diversitéu scène musicale bu Senegaal.

### Mémoireu scène

Histoireu Super Diamono bokk na ci mémoireu musiqueu Senegaal. Répertoire, prestations ak waxtaan ci groupe bi di jàppale xam ni scène musicale di soppi ci diggante jamono yi. Musique di nekk it benn yoonu denc xalaat ak expérienceu société.

### Transmission

Génération yi ñëw topp di mën a jàng ci expérienceu artistes yi weesu. Écouteu répertoire, documentation ak transmissionu xam-xamu musique di jàppale denc patrimoineu scène. Groupe bu mel ni Super Diamono di may it ndaw ñi inspiration ngir sos seen propre projet.

### Solo ci culture

Musique am na solo ci identitéu Senegaal. Denc histoireu formations yi, répertoire ak témoignages di yokk xam-xam ci patrimoineu musique, te di may nit ñi gën a xam ni scène musicale bokk ci taariixu société.`,
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
    excerptWo: 'Bérab bu mémoire historique bu Sédhiou ak Casamance, bokk ci patrimoine bâti ak taariixu territoire.',
    contentWo: `### Jëmmal

Fort Pinet-Laprade bokk na ci patrimoine historique bu Sédhiou. Bérab bi di fésal solo bu architecture ak mémoire ci compréhensionu taariixu Casamance.

### Taariix ak territoire

Fort yi di bokk ci architecture ak organisationu territoire ci jamono yu weesu. Seen présence mën a joxe xibaar ci digganteu dëkk, circulation ak enjeux yu melni protection. Sédhiou, ci digganteu Fleuve Casamance ak yeneen bérab yu Casamance, am na patrimoine historique bu wuute.

### Architecture ak mémoire

Muraay, espace ak yoonu tabax di mën a joxe xibaar ci manière yu ñu doon defar bérab yi. Patrimoine bâti bi di lëkkale histoireu territoire ak mémoireu communautés yi.

### Conservation ak transmission

Denc bérab bu mel ni Fort Pinet-Laprade di jàppale transmissionu mémoire. Archives, récit, témoignage ak patrimoine bâti di mën a boole ngir génération yi xam taariixu seen territoire.

### Valorisation

Documentation ak valorisationu patrimoine bi mën a jàppale tourisme culturel ak jàngat ci histoire. Aar bérab bi di soxla xam-xam, toppatoo ak participationu acteurs locaux ngir mémoire bi des ci yoon.`,
  },
  'centre-dinterpretation-de-toubacouta-patrimoine-du-delta-du-saloum': {
    titleWo: 'Centre bu Toubacouta',
    excerptWo: 'Bérab bu di jàppale xam, jàng ak denc patrimoineu Delta Saalum, ci diggante nature, culture ak histoire.',
    contentWo: `### Jëmmal

Centre d’interprétation bu Toubacouta di jàppale xam patrimoineu Delta Saalum. Bérab bu mel ni mooy may ndaw ak mag ñu gën a xam environnement, culture ak histoireu territoire, te di jàppale nit ñi xam solo bu conservation am.

### Delta Saalum

Delta Saalum am na combinaison bu wuute bu géej, dex, mangrove, tannes ak dëkk yi. Nature ak dundug nit ñoo bokk ci identitéu bérab bi. Pêche, mbay ak yeneen activité yu local di sukkandiku ci ressourcesu territoire.

### Jàng ak transmission

Centre d’interprétation yi di may espace ngir jàng, waxtaan ak wone patrimoine. Xibaar ci mangrove, faune, pêche, aada ak histoire di mën a jox visiteurs xam-xam bu gën a dëgër.

### Aar environnement

Xam-xamu territoire di jàppale nàmm ak aar ressources. Sensibilisation ci déchets, biodiversité ak jëfandikoo bu wér di mën a jàppale conservationu Delta Saalum.

### Tourisme ak communauté

Centre bi mën a bokk ci parcoursu tourisme culturel ak naturel. Participationu communautés yi, guide locaux ak acteursu territoire di mën a yokk njariñu visites te di denc patrimoine ci yoon wu dëgër.`,
  },
  'centre-dinterpretation-de-bandafassi-patrimoine-du-pays-bassari': {
    titleWo: 'Centre bu Bandafassi',
    excerptWo: 'Bérab bu di jàppale xam ak valoriser patrimoineu Pays Bassari, ak culture, paysage ak savoir-faire.',
    contentWo: `### Jëmmal

Centre d’interprétation bu Bandafassi di bokk ci valorisationu patrimoineu Pays Bassari. Mu di jàppale visiteurs, xale yi ak wa dëkk ñu gën a xam culture, territoire ak environnement.

### Pays Bassari

Pays Bassari am na patrimoine culturel ak naturel bu riche. Aada, savoir-faire, paysage ak pratiquesu communauté yi di bokk ci identitéu territoire. Architecture, agriculture ak cérémonies di mën a joxe xibaar ci yoonu dund ak cosaan.

### Jàng ak exposition

Centre bi mën a may espace ngir exposition, waxtaan ak activitésu jàng. Xibaar ci histoire, environnement ak patrimoine di jàppale nit ñi gën a xam seen solo ak seen liens ak territoire.

### Transmission ak communauté

Aar patrimoine du doon rekk denc bérab; mu ëmb it xam-xam, récit ak participationu communauté yi. Mag ñi, guides ak acteurs locaux mën a bokk ci transmissionu savoir-faire ak mémoire.

### Tourisme bu wér

Valorisationu Pays Bassari mën a jàppale tourisme bu topp respectu culture ak environnement. Visites bu baax, gestionu flux ak participationu communauté di mën a boole développementu local ak conservation.`,
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
    excerptWo: 'Paysages sahéliens, faune ak ressources yu bokk ci identitéu Ferlo, ak pastoralism ak aarug environnement.',
    contentWo: `### Jëmmal

Ferlo mooy territoire bu paysages sahéliens yu wuute, fu nit ak nature di dundandoo. Fiche bi di fésal solo bu faune, ressources ak savoir-faire yi ñuy jëfandikoo ci environnementu bu sedd ak sec.

### Paysage ak saison

Ferlo am na espace yu yaatu, végétation bu topp saison yi ak ressources yu dépend ci ndox. Jamono ju taw di soppi melokaanu suuf ak ndox, te jamono ju noor di soxla toppatoo bu gën ci ressources yi.

### Pastoralism ak dundug rurale

Pastoralism bokk na ci dynamiqueu territoire. Boroom jur yi di doxandoo ak xaalis, ndox ak bérab yu ñuy denc ngir dundal jur. Xam-xamu routes, céanes ak saison di jàppale adaptationu communautés yi.

### Faune ak biodiversité

Ferlo am na faune ak végétation yu méngoo ak conditionsu Sahel. Aar habitats, ndox ak xeetu mbindeef yi di am solo ngir biodiversité bi des. Xam-xam ci espèces yi di jàppale gestionu territoire.

### Aar ressources

Gestion bu baax, transmissionu savoir-faire ak jëfandikoo bu wér di mën a jàppale wéyantu dundug communauté yi. Aar suuf, ndox ak végétation di bokk ci yoonu dundal Ferlo ci jamono yu yàgg.`,
  },
  'la-gomme-arabique-au-senegal-ressource-du-sahel-et-valorisation': {
    titleWo: 'Gomme arabique',
    excerptWo: 'Ressource bu Sahel bu bokk ci économie rurale, produits naturels ak valorisationu activitéu communauté.',
    contentWo: `### Jëmmal

Gomme arabique mooy produit bu naturel bu bokk ci ressourcesu Sahel. Ci Senegaal, production ak commerce bi di lëkkale environnement, activité rurale ak opportunitésu valorisation.

### Arbres ak collecte

Gomme bi di génère ci arbres yu mën a dund ci conditionsu Sahel. Collecte bi di soxla xam-xamu arbres, saison ak pratiques yu topp environnement. Nit ñi di dajale produit bi ci yoon yu ñu jàngale ci expérience.

### Économie rurale

Gomme arabique mën a bokk ci revenu yu communauté yi, rawatina ci zones rurales. Jaay, transport ak transformation mën a boole ay acteurs yu bari ci chaîneu valeur. Qualitéu produit ak organisationu marché di am solo ci njariñu activité bi.

### Valorisation

Valorisationu gomme arabique mën a yokk valeuru produit bi boo ko boolee ak transformation, qualité ak commerce bu organisé. Xam-xam ci conservation ak conditionnement di mën a jàppale yeggale produit bi ci yeneen marchés.

### Environnement ak avenir

Aar arbres ak gestionu ressources di am solo ngir production bi mën a wéy ci jamono yu yàgg. Jëfandikoo bu wér, régénérationu arbres ak respectu environnement di lëkkale économie ak conservationu Sahel.`,
  },
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
