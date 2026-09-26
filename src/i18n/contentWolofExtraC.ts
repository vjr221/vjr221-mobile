import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 6 — UNESCO, îles, nature, langues, artisanat */
export const CONTENT_WO_EXTRA_C: Record<string, WolofContent> = {
  'ile-de-saint-louis-patrimoine-mondial-de-lunesco': {
    titleWo: 'Dunu Ndar (UNESCO)',
    excerptWo: 'Patrimoine mondial — Île de Saint-Louis.',
    contentWo: `### Jëmmal\n\nÎle de Saint-Louis : patrimoine mondial UNESCO, architecture, dex ak taariix.`,
  },
  'le-senegal-et-le-patrimoine-mondial-de-lunesco': {
    titleWo: 'Patrimoine mondial bu Senegaal',
    excerptWo: 'Sites UNESCO yu Senegaal.',
    contentWo: `### Jëmmal\n\nSenegaal am na sites UNESCO : Gorée, Ndar, Bassari, Delta Saalum, mégalithes.`,
  },
  'cercles-megalithiques-de-sine-ngayene': {
    titleWo: 'Cercles bu Sine Ngayène',
    excerptWo: 'Mégalithes bu Siin.',
    contentWo: `### Jëmmal\n\nSine Ngayène : cercles mégalithiques, patrimoine mondial, doj yu yàgg.`,
  },
  'pays-bassari-patrimoine-culturel-paysages': {
    titleWo: 'Pays Bassari — paysages',
    excerptWo: 'Patrimoine culturel ak paysages.',
    contentWo: `### Jëmmal\n\nPays Bassari : paysages culturels UNESCO, aada Bassari, Peul ak Bédik.`,
  },
  'delta-saloum-ecosystemes-iles-mangroves': {
    titleWo: 'Delta Saalum — écosystèmes',
    excerptWo: 'Îles, mangrove ak bolong.',
    contentWo: `### Jëmmal\n\nDelta du Saloum : écosystèmes, duni yi, mangrove ak patrimoine vivant.`,
  },
  'architecture-traditionnelle-sine-saloum': {
    titleWo: 'Architecture bu Siin-Saalum',
    excerptWo: 'Architecture traditionnelle.',
    contentWo: `### Jëmmal\n\nArchitecture traditionnelle du Sine-Saloum : cases, aada ak materials yu local.`,
  },
  'architecture-traditionnelle-casamance': {
    titleWo: 'Architecture bu Casamance',
    excerptWo: 'Architecture traditionnelle.',
    contentWo: `### Jëmmal\n\nArchitecture traditionnelle de Casamance : cases, aada Diola ak Mandingue.`,
  },
  'place-faidherbe-coeur-historique-de-saint-louis': {
    titleWo: 'Place Faidherbe',
    excerptWo: 'Xolum historique bu Ndar.',
    contentWo: `### Jëmmal\n\nPlace Faidherbe : cœur historique de Saint-Louis, patrimoine urbain.`,
  },
  'quai-roume-memoire-portuaire-et-urbaine-de-dakar': {
    titleWo: 'Quai Roume',
    excerptWo: 'Mémoire portuaire bu Dakar.',
    contentWo: `### Jëmmal\n\nQuai Roume : mémoire portuaire ak urbaine de Dakar.`,
  },
  'maison-a-etages-de-saint-louis-architecture-urbaine-historique': {
    titleWo: 'Maisons à étages bu Ndar',
    excerptWo: 'Architecture urbaine historique.',
    contentWo: `### Jëmmal\n\nMaisons à étages de Saint-Louis : architecture urbaine, taariix.`,
  },
  'mosquee-de-divinity-patrimoine-religieux-de-dakar': {
    titleWo: 'Mosquée de Divinity',
    excerptWo: 'Patrimoine religieux bu Dakar.',
    contentWo: `### Jëmmal\n\nMosquée de Divinity : patrimoine religieux ci Dakar.`,
  },
  'aire-marine-protegee-bamboung': {
    titleWo: 'AMP Bamboung',
    excerptWo: 'Aire marine protégée.',
    contentWo: `### Jëmmal\n\nAire marine protégée de Bamboung : conservation, jën ak mangrove.`,
  },
  'reserve-speciale-faune-ndiael': {
    titleWo: 'Reserve bu Ndiaël',
    excerptWo: 'Grande zone humide.',
    contentWo: `### Jëmmal\n\nRéserve spéciale de faune du Ndiaël : zone humide, picc ak conservation.`,
  },
  'camp-de-simenti-porte-dentree-du-parc-national-du-niokolo-koba': {
    titleWo: 'Camp bu Simenti',
    excerptWo: 'Porte d entrée bu Niokolo-Koba.',
    contentWo: `### Jëmmal\n\nCamp de Simenti : porte d entrée du Parc national du Niokolo-Koba.`,
  },
  'saloum-fleuve-mangroves-iles-patrimoine-vivant': {
    titleWo: 'Dexu Saalum',
    excerptWo: 'Fleuve, mangrove, duni yi.',
    contentWo: `### Jëmmal\n\nLe Saloum : fleuve, mangroves, îles et patrimoine vivant.`,
  },
  'ile-de-mar-lodj': {
    titleWo: 'Dunu Mar Lodj',
    excerptWo: 'Île bu Saalum.',
    contentWo: `### Jëmmal\n\nÎle de Mar Lodj : tourisme, mangrove ak aada yu Saalum.`,
  },
  'ile-deloubaline-village-insulaire-patrimoine-diola-casamance': {
    titleWo: 'Dunu Eloubaline',
    excerptWo: 'Village insulaire Diola.',
    contentWo: `### Jëmmal\n\nÎle d Eloubaline : village insulaire, patrimoine Diola, Casamance.`,
  },
  'ile-ehidj-casamance': {
    titleWo: 'Dunu Ehidj',
    excerptWo: 'Paysage insulaire bu Casamance.',
    contentWo: `### Jëmmal\n\nÎle d Ehidj : paysage insulaire ak mémoire bu Casamance.`,
  },
  'ile-de-diogue-vie-insulaire-dans-larchipel-des-bolongs-de-casamance': {
    titleWo: 'Dunu Diogué',
    excerptWo: 'Vie insulaire ci bolong yi.',
    contentWo: `### Jëmmal\n\nÎle de Diogué : vie insulaire dans l archipel des bolongs.`,
  },
  'toubab-dialaw-village-lebou-falaises-petite-cote': {
    titleWo: 'Toubab Dialaw',
    excerptWo: 'Village Lébou, falaises.',
    contentWo: `### Jëmmal\n\nToubab Dialaw : village lébou, falaises, Petite Côte, art ak tourisme.`,
  },
  'plage-d-abene': {
    titleWo: 'Plage bu Abéné',
    excerptWo: 'Plage bu Casamance.',
    contentWo: `### Jëmmal\n\nPlage d Abéné : littoral Casamance, tourisme ak aada.`,
  },
  'le-ndut-langue-cangin-du-centre-ouest-senegal': {
    titleWo: 'Ndut (langue)',
    excerptWo: 'Langue cangin bu centre-sowwu.',
    contentWo: `### Jëmmal\n\nLe Ndut : langue cangin du centre-ouest, patrimoine linguistique.`,
  },
  'le-saafi-langue-cangin-et-culture-saafi-saafi': {
    titleWo: 'Saafi (langue)',
    excerptWo: 'Langue cangin ak aada.',
    contentWo: `### Jëmmal\n\nLe Saafi : langue cangin et culture saafi-saafi.`,
  },
  'poterie-au-senegal-argile-techniques-et-usages-traditionnels': {
    titleWo: 'Poterie bu Senegaal',
    excerptWo: 'Argile, techniques, usages.',
    contentWo: `### Jëmmal\n\nPoterie : argile, techniques traditionnelles ak transmission.`,
  },
  'vannerie-senegalaise-fibres-vegetales-objets-et-transmission': {
    titleWo: 'Vannerie bu Senegaal',
    excerptWo: 'Fibres, objets, transmission.',
    contentWo: `### Jëmmal\n\nVannerie sénégalaise : fibres végétales, objets ak savoir-faire.`,
  },
  'bijouterie-artisanale-au-senegal-metaux-techniques-et-creation': {
    titleWo: 'Bijouterie artisanale',
    excerptWo: 'Métaux, techniques, création.',
    contentWo: `### Jëmmal\n\nBijouterie artisanale : métaux, techniques ak création.`,
  },
  'fouta-toro-fleuve-senegal-cultures-patrimoine-nord-est': {
    titleWo: 'Fouta-Toro',
    excerptWo: 'Fleuve, cultures, norte-penku.',
    contentWo: `### Jëmmal\n\nFouta-Toro : fleuve Sénégal, cultures Haalpulaar, patrimoine.`,
  },
  'la-casamance-fleuve-laxe-vital-du-sud-du-senegal': {
    titleWo: 'Dexu Casamance',
    excerptWo: 'Axe vital bu sud.',
    contentWo: `### Jëmmal\n\nFleuve Casamance : axe vital du sud, mangrove ak aada.`,
  },
  'la-faleme-riviere-frontaliere-vallee-et-patrimoine-de-lest-du-sen': {
    titleWo: 'Dexu Falémé',
    excerptWo: 'Rivière frontalière bu penku.',
    contentWo: `### Jëmmal\n\nLa Falémé : rivière frontalière, vallée ak patrimoine de l est.`,
  },

  'tourisme-communautaire-senegal': {
    titleWo: 'Turismu bokkale ci Senegaal',
    excerptWo: 'Jàngat Senegaal ci biir dëkk yi, ak askan wi, ak aada ak cosaan yi.',
    contentWo: `### Jëmmal

Turismu bokkale dafay may nit ñi ñu gis Senegaal ci lu gëna jege dëkk yi. Gannaaw loolu, ñu daldi dëkk ak askan wi, xam aada yi te dimbali ci taxawu cosaan ak patrimoine bu dëkk yi.

### Yoon wu dëkk yi

Ci turismu bokkale, askan wi bokk na ci dalal gan ñi, dalal leen ci kër yi, lekkal leen, wone leen liggéeyu loxo ak cosaan yi. Lii dafa jëm ci yokk doole dëkk yi, du rekk ci wone ab bérab.

### Dëkk yu bari

Ci Sine-Saalum ak Casamance, nit ñi man nañu gis mangrove yi, bolong yi ak dundug dëkk yi. Ci penku Senegaal, man nañu xam aada yi ak taarixu dëkk yi. Am na it ay yoon yu jëm ci ndox, mbay, liggéeyu loxo ak cosaan.`,
  },
  'tourisme-accessible-senegal': {
    titleWo: 'Turismu bu jàppale ñépp ci Senegaal',
    excerptWo: 'Yokk yombal gu gan ñi di soxla ngir man a gis Senegaal.',
    contentWo: `### Lu tax yombal am solo?

Yombal ci turismu dafay tekki yombal yoon yi, dugg ci tabax yi ak bérab yi, xamle bu leer, sanitaare yi, barab yu ñuy toog ak ndimbal gu nit ñi. Lii di yokk it seen njariñ ci dalal gan ñi.

### Soxla yu wuute

Am na ñi soxla yombal ngir dox, gis, dégg walla xam bu gëna yomb. Xamle ci tànk yi, suuf si, diggante yi, sanitaare yi ak yoonu dem ak dikk dafay may gan ñi waajal seen tukki.

### Bérab yi ak nit ñi

Gorée, Ndar, Sine-Saalum, Casamance, penku Senegaal ak dëkk yi man nañu yokk seen yombal. Lii dafay soxla ay jumtukaay yu baax ak xamle bu dëgg. Su xibaar bi wóorul, warul ñu jox ko ni dëgg la.`,
  },
  'tourisme-memoire-senegal': {
    titleWo: 'Turismu taarix ak fàttaliku ci Senegaal',
    excerptWo: 'Bérab yi, nettali yi ak yoon yi di tax ñu xam taarixu Senegaal.',
    contentWo: `### Fàttaliku gu wuute

Turismu taarix ak fàttaliku dafay may nit ñi xam Senegaal jaarale ko ci bérab yi, réew yi, muze yi ak tabax yi di fésal ay xew-xew yu mag. Fàttaliku Senegaal du benn nettali rekk.

### Ay xew-xew ak ay bérab

Nettali yi jëm nañu ci nguur yi, xeex yi ak taxawaayu askan wi, ci jaay-jaay ak jëfandikoo yoon yi, ci traite ak koloniyalism, ci yokkute dëkk yi, ci tukki nit ñi ak ci xeexu indépendance.

### Jàng ak teral

Gis bérab yu am taarix war nañu ànd ak xam-xam ak teral. Muze, monument, bérab yu am solo ak nettaliu waa dëkk yi man nañu yokk xam-xamu ñépp.`,
  },
  'le-kankourang-rite-dinitiation-mandingue-inscrit-au-patrimoine-de-lunesco': {
    titleWo: 'Kankourang — xew-xewu njàngale Manding',
    excerptWo: 'Kankourang mooy xew-xewu njàngale bu Manding, te UNESCO dafa ko xam ci patrimoine immatériel.',
    contentWo: `### Jëmmal

Kankourang mooy xew-xewu njàngale bu xeeti Manding ci Senegaal ak Gambie. Dafay am solo ci waxtaan ak njàngale yu jëm ci genç yi di jàpp ci sëmb ak cosaan.

### Li mu jëm

Kankourang dafa boole ci njàngale ak aar genç yi ci waxtu bi ñuy def ay ndaje yu cosaan. Xew-xew bi dafay yokk bokkute ak jàngale ci cosaan.

### Xamle ko ci àdduna

UNESCO dafa ko duggal ci Liste du patrimoine culturel immatériel de l'humanité ci 2005. Kankourang di wone ne cosaan yi man nañu nekk dund, te ñu war leen a jàngale ak aar ci jamono yu bees.`,
  },
  'xooy-ceremonie-divinatoire-patrimoine-serere-senegal': {
    titleWo: 'Xooy — xew-xewu seetlu ak patrimoine Sereer',
    excerptWo: 'Xooy mooy xew-xewu Sereer bu ñuy def ci diggante jamono ju taw.',
    contentWo: `### Jëmmal

Xooy mooy xew-xewu seetlu bu waa Sereer di def ci diggante jamono yu taw. Saltigé yi, ñuy xam ne ñooy boroom xam-xam bi, di wax ci li ñuy gis ak li man a ñëw.

### Guddi gu fees ak waxtaan

Xooy dafay am ci guddi gu yagg. Saltigé yi di toppante, di wax seen seetlu, tam-tam yi di dox, te askan wi di teew ci ndaje bi.

### Li mu tekki ci askan wi

Waxtaanu Xooy man na jëm ci taw yi, feebar yi, jafe-jafe yi ak yoon yi askan wi di jëfandikoo ngir seet ay tontu. Xew-xew bi di wone dooleg cosaan ak bokkute.`,
  },

  'patrimoine-culturel-immateriel-du-senegal-inventaire-expressions': {
    titleWo: 'Patrimoine culturel bu Senegaal bu dul jëfandikoo ay jumtukaay',
    excerptWo: 'Aada, xam-xam, ndaje, cosaan ak liggéeyu loxo yu askan yi di dundal.',
    contentWo: `### Jëmmal

Patrimoine culturel bu dul jëfandikoo ay jumtukaay dafay may ñu xam Senegaal ci aada yi, xam-xam yi ak jëf yi askan yi di jàppale te di jàngale ci seen diggante.

### Ci biir dëkk yi

Cosaan yi bokk nañu ci làkk yi, ndaje yi, xew-xew yi, fecc yi, woyu cosaan, xam-xamu nature ak liggéeyu loxo. Ci Senegaal, wuute gi ci fukki ak ñeent régions yi dafa feeñ it ci aada ak jëf yi.

### Aar patrimoine bi

Aar patrimoine bu dund du tekki rekk denc ay mbir. War na ñu dimbali askan yi ko yor, jàngale ko ci diggante maam ak sëy, bind ak wone ko, te may ñu kontine di ko jëfandikoo.

### Ay misaal

Kankourang, Xooy, Tuuru Maam Njaré, Xaxaar ak ay jëf yu bari bokk nañu ci expressions yi ñuy jàng ci patrimoine culturel bu Senegaal.`,
  },
  'patrimoine-architectural-saint-louis-senegal': {
    titleWo: 'Tabax ak patrimoine bu Ndar',
    excerptWo: 'Kër, mbedd, quai ak fàttaliku gu dëkk bu Ndar.',
    contentWo: `### Dëkk bu ndox mi tabax

Patrimoine bu Ndar dafa sukkandiku ci jokkoo gi am ci île bi, dexu Senegaal, quais yi ak dëkk bi. Kër yi, mbedd yi, cour yi, balcons yi ak tabax yu public yi bokk nañu ci melokaanu dëkk bi.

### Ndar ak dex

Ndar dafa yokk ci île bu nekk ci géej gi ak dexu Senegaal. Ndox mi, pont yi, quais yi ak melokaanu mbedd yi dañuy jëflante ci architecture bi. Am na it tabax yu XIXe ak XXe siècle.

### Patrimoine bu dund

Aar tabax yi war nañu toppatoo nit ñi ci dëkk bi, seen jëfandikoo, jumtukaay yi ak ay risk yu man a yàq bérab yi. Defar tabax du rekk rafetlu kanam; dafay sàmm melokaanu mbedd yi, cour yi ak jokkoo gi am ak dex mi.

### Gis ak teral

Ku bëgg a xam Ndar man na dox ci mbedd yi ak quais yi, te di teral barab yu private yi. Xamle ak ay guide yu dëkk bi man nañu dimbali ci xam taarixu dëkk bi bu gëna yaatu.`,
  },
  'le-delta-du-saloum-paysage-de-mangroves-et-de-bolongs-patrimoine-mondial-de-lunesco': {
    titleWo: 'Delta Saalum — mangrove ak bolong, patrimoine mondial UNESCO',
    excerptWo: 'Deltabu Saalum: dunu yli, bolong ak mangrove, patrimoine mondial.',
    contentWo: `### Jëmmal

Delta Saalum mooy barab bu ndox ak suuf bu yaatu, diggante Petite Côte ak diggante Gambi. Sine ak Saloum di daje ak Géej Atlantique, di sos dunu iles, bolong ak mangrove.

### Iles ak bolong

Delta bi am na lu ëpp 200 iles ak ilots yu bolong yi séddale. Bolong yi ay yoon yu ndox lañu, di jaar ci mangrove ak vasière yi. Ci biir ecosystem bi, ndox mu neex ak ndoxum géej di daje.

### Patrimoine ak askan wi

Askani pêcheurs yi dafa bokk ci dundug delta bi. Amas coquilliers yi di wone ne nit ñi nekk nañu foofu lu yàgg. Patrimoine bi boole nature, taarix ak dundug askan yi.

### Xam-xam yu am solo

Delta Saalum nekk na réserve de biosphère UNESCO ba ci 1980, te duggu na ci patrimoine mondial ci 2011 ni paysage culturel. Parc national bi sos nañu ko ci 1976 ngir aar ecosystem yi ak njàngum nature.`,
  },
  'le-parc-national-du-delta-du-saloum': {
    titleWo: 'Parc national bu Delta Saalum',
    excerptWo: 'Dunu mangrove, iles, bolong ak gëstu nature ci région Fatick.',
    contentWo: `### Jëmmal

Parc national bu Delta Saalum mooy benn ci bérab yu gëna am solo ci nature bu Senegaal. Mu nekk ci région Fatick, te am mangrove, iles, bolong, vasière ak forêt.

### Ecosystem bu wuute

Parc bi dafa nekk bérab bu ay xeet yu bari di dund. Mangrove yi, ndox mi ak suuf si dañuy boole ngir sos ab ecosystem bu am solo ci aar biodiversité.

### Xew-xew ak économie

Delta bi dafa am taarix, aada ak liggéey yu aju ci pêche ak écotourisme. Askani dëkk yi bokk nañu ci dund ak aar bérab yi.

### Xam-xam

Parc bi sos nañu ko ci 1976. Mu am lu tollu ci 76 000 hectares. Delta Saalum nekk na ci patrimoine mondial UNESCO, te reserve de biosphère bi di yokk njariñu conservation bi.`,
  },
  'toubacouta': {
    titleWo: 'Toubacouta',
    excerptWo: 'Dëkk ci départementu Foundiougne, bunt bu mag bu Delta Saalum ak écotourisme.',
    contentWo: `### Jëmmal\n\nToubacouta mooy commune ci départementu Foundiougne, ci arrondissement bu tudd it Toubacouta. Mooy benn ci bunt yi gëna am solo ngir dugg ci Parc national bu Delta Saalum, patrimoine mondial UNESCO.\n\n### Géeographie\n\nToubacouta nekk na ci sudu départementu Foundiougne, ci xolum Réserve de biosphère bu Delta Saalum. Bandiala, mangrove yi, bolong yi ak duni yi bokk nañu ci paysage bi.\n\n### Économie\n\nÉcotourisme, pêche ak agriculture bokk nañu ci liggéey yi gëna am solo. Sorties ci pirogue, gis picc yi ak xam mangrove yi bokk nañu ci activités yu ñuy def.\n\n### Aada ak askan\n\nTerritoire bi may na ñu gis aada Sereer ak Mandingue, ak xam-xamu navigation, pêche ak jëfandikoo ressources yu delta bi. Aar mangrove yi ak bolong yi am na solo ngir dundug askan wi ak tourisme bu sax.\n\n### Toppatoo\n\nYokkute turismu war na ànd ak aar bérab yu yomb a yàq, wàññi mbalit ak jëfandikoo acteurs locaux.`,
  },
  'dionewar': {
    titleWo: 'Dionewar',
    excerptWo: 'Commune insulaire bu Foundiougne, ci duni Saalum, xam ne ko ci amas coquilliers ak pêche.',
    contentWo: `### Jëmmal\n\nDionewar mooy commune insulaire ci départementu Foundiougne, ci duni Saalum. Dëkk bi xam nañu ko ci amas coquilliers yu yàgg ak dundug askan niominka.\n\n### Géeographie ak taarix\n\nDionewar nekk na ci benn île bu Delta Saalum. Dugg ci territoire bi ci ndox rekk. Amas coquilliers yi di wone ne nit ñi dëkk nañu foofu lu yàgg.\n\n### Aada ak dundin\n\nAskan niominka am nañu aada bu lëkkale ak géej, pêche ak dundug duni yi. Pêche artisanale, écotourisme ak dajale coquillages bokk nañu ci économie bi.\n\n### Enjeux\n\nEnclavement insulaire ak aar ressources halieutiques bokk nañu ci mbir yi territoire bi war a saytu. Aar environnement bi ak patrimoine bi am na solo ci jamono yu ñëw.`,
  },
  'foundiougne-et-le-sine-saloum-porte-dentree-des-iles-et-des-mangroves': {
    titleWo: 'Foundiougne ak Sine-Saalum — bunt bu duni yi ak mangrove yi',
    excerptWo: 'Foundiougne mooy benn ci yoon yi ñuy jaar ngir dugg ci Sine-Saalum, fleuve, bolong, mangrove ak duni yi.',
    contentWo: `### Jëmmal\n\nFoundiougne mooy benn ci bérab yi ñuy jaar ngir dugg ci Sine-Saalum. Géeographie bi boole fleuve, bolong, mangrove, duni ak terroirs ruraux.\n\n### Ndox ak yoon yi\n\nMarée yi di soppi melokaanu ndox mi. Pirogue yi man nañu may nit ñi dem ci bolong yi ak ci ay bérab insulaires, sukkandiku ci xaalis ak xaal bu bérab bi.\n\n### Patrimoine bu dund\n\nXam-xam ci làkk yi, lekk, savoir-faire, cérémonie yi ak diggante askan yi ak seen environnement bokk nañu ci patrimoine bi.\n\n### Turismu bu toppatoo\n\nMangrove yi ak zones humides yi dañuy soxla aar. Excursions yi war nañu jëfandikoo opérateurs locaux, wàññi mbalit ak teral bérab yi ñuy saxal ak yooni dundug askan yi.`,
  },
  'keur-samba-gueye': {
    titleWo: 'Keur Samba Gueye',
    excerptWo: 'Commune bu Foundiougne ci arrondissementu Toubacouta, ci Delta Saalum.',
    contentWo: `### Jëmmal\n\nKeur Samba Gueye mooy commune ci départementu Foundiougne, ci arrondissementu Toubacouta, ci Delta Saalum.\n\n### Taarix ak dundin\n\nDëkk bi, bu nekkoon communauté rurale, yokku na ni benn localité traditionnelle bu delta bi te nekk commune bu am sa bopp ci reformu territoriale bu 2013.\n\n### Économie\n\nPêche, agriculture ak petit commerce bokk nañu ci liggéey yi. Territoire bi dafa sukkandiku it ci ressources yu Delta Saalum.\n\n### Toppatoo\n\nYokkute ressources yi war na ànd ak aar environnement bu delta bi, ndax mangrove yi ak bolong yi am nañu solo ci dundug askan wi.`,
  },
};