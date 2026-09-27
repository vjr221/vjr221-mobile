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
  'niodior': {
    titleWo: 'Niodior',
    excerptWo: 'Dëkk Sereer bu mag ci île Guior, ci Delta Saalum, xam ne ko ci pêche ak coquillages.',
    contentWo: `### Jëmmal

Niodior mooy dëkk Sereer bu mag ci île Guior, ci Delta Saalum. Mooy chef-lieuu arrondissementu Niodior te bokk na ci dëkk yu gëna mag ci duni Saalum.

### Cosaan ak aada

Ci nettaliu cosaan, Bandé Niambo, benn lëg bu jóge Kansala ci nguurum Gabou, moo war a sos Niodior. Niodorois yi bokk nañu ci xeetu Sereer, te am nañu jokkoo gu dëgër ak Dionewar ci aada ak parenté.

### Pêche ak coquillages

Pêche mooy liggéeyu mag ci dëkk bi. Nit ñi di dajale ak wow coques ak huîtres sauvages, te di leen jaay ci Dakar, Gambie, Kaolack ak Casamance. Dëkk bi dugg ci ndox rekk, ci pirogue bu motor.

### Services ak dundin

Niodior am na centre de santé ak maternité, ay écoles primaires, lycée ak ay établissementu njàngum arabe. Dëkk bi nekk na ci commune Dionewar, ci départementu Foundiougne, région Fatick.`,
  },
  'djilor': {
    titleWo: 'Djilor',
    excerptWo: 'Commune bu Foundiougne ci Delta Saalum, chef-lieuu arrondissementu Djilor.',
    contentWo: `### Jëmmal

Djilor mooy commune ci départementu Foundiougne, ci arrondissementu Djilor, ci Delta Saalum. Mooy chef-lieuu arrondissement bi te am solo ci mbirum administrasyon ci sudu département bi.

### Géeographie ak taarix

Djilor nekk na ci zone bu Delta Saalum. Dëkk bi, bu nekkoon communauté rurale, yokku na ba nekk commune bu am sa bopp ci reformu territoriale bu 2013.

### Économie

Pêche, agriculture ak petit commerce bokk nañu ci liggéey yi gëna am solo ci territoire bi.

### Toppatoo

Yokkute ressources yu Delta Saalum war na ànd ak aar environnement bi, ndax mangrove yi, bolong yi ak ressources yu ndox am nañu solo ci dundug askan wi.`,
  },
  'soum': {
    titleWo: 'Soum',
    excerptWo: 'Commune bu Foundiougne ci arrondissementu Toubacouta, ci Delta Saalum.',
    contentWo: `### Jëmmal

Soum mooy commune ci départementu Foundiougne, ci arrondissementu Toubacouta, ci Delta Saalum.

### Taarix ak dundin

Soum, bu nekkoon communauté rurale, yokku na ni benn localité traditionnelle bu delta bi te nekk commune bu am sa bopp ci reformu territoriale bu 2013.

### Économie

Pêche, agriculture ak petit commerce bokk nañu ci liggéey yi. Dëkk bi dafa sukkandiku ci ressources yu Delta Saalum.

### Toppatoo

Yokkute territoire bi war na ànd ak aar environnement bu delta bi, mangrove yi ak bolong yi.`,
  },
  'betenty': {
    titleWo: 'Bétenty',
    excerptWo: 'Dëkk bu yàgg ci Delta Saalum, xam ne ko ci pêche ak dajale huîtres ci mangrove yi.',
    contentWo: `### Jëmmal

Ci nettaliu dëkk bi, Bétenty sosu na lu ëpp juróom-ñetti téeméeri at ci kanam, te Sandy Coly Ndao moo ñuy jox ni ki ko sos. Sereer ak Mandingue bokk nañu ci askanu dëkk bi.

### Pêche ak huîtres

Pêche mooy liggéeyu mag. Nit ñi di dajale huîtres ci mangrove yi, te ay produits yu ñu defar, mel ni huîtres yu ñu saxal, di jaay leen. Bolong yi ak mangrove yi wër dëkk bi.

### Xew-xew bu 2017

Ci 24 awril 2017, benn pirogue dafa lëmbe, te ñu ñuul 21 nit, ci biir ñoom ñu bari ay jigéen. Xew-xew boobu am na solo ci fàttaliku dëkk bi ak ci xelal ci njàngum sécurité ci ndox.

### Rattachement administratif

Bétenty bokk na ci commune Toubacouta, départementu Foundiougne, région Fatick, ci xolum Delta Saalum.`,
  },
  'joal-fadiouth': {
    titleWo: 'Joal-Fadiouth',
    excerptWo: 'Dëkk ci Petite-Côte, ci région Thiès, ak île Fadiouth gu sos ci amas coquillages, te xam ne ko ci bokkute diine.',
    contentWo: `### Jëmmal

Joal-Fadiouth nekk na ci Petite-Côte ci région Thiès. Commune bi sédd na ci ñaari part: Joal ci suuf si ak Fadiouth ci île bu nit ñi tabax ci amas coquillages yu daan a dajale ay at yu bare. Benn pontu daanu boisé moo lëkkale île bi ak continent.

### Île bu wuute

Fadiouth dafa am mbedd yu weex yu coquillages sos, te île bi dafa gëna nekk piétonne. Gréniers à mil yi ci pilotis, ci wetu mangrove yi, bokk nañu ci melokaanu bérab bi.

### Bokkute diine

Fadiouth xam nañu ko it ci cimetière bu bokk, fa tombes chrétiennes ak musulmanes nekk ci benn bérab. Lii di misaal ci cohabitation ak bokkute diggante askan yi.

### Senghor ak Joal

Joal mooy bérab bu am solo ci taarixu Senegaal ndax mooy dëkk bu Léopold Sédar Senghor, président bu njëkk bu Senegaal, juddoo.`,
  },
  'gare-de-dakar-la-porte-dentree-historique-du-chemin-de-fer-dakar-niger': {
    titleWo: 'Gare bu Dakar — bunt bu taarixu chemin de fer Dakar-Niger',
    excerptWo: 'Gare bu Dakar, tabax colonial bu am solo, te bokk ci taarixu chemin de fer Dakar-Niger.',
    contentWo: `### Jëmmal

Gare bu Dakar nekk na ci bérabu gare bu Dakar-Niger, te ci 2004 lañu soppi turu place bi ba di Place du Tirailleur. Mooy benn ci tabax colonial yi gëna aar seen melokaan ci Dakar.

### Taarixu rail

Forme bu bees bu gare bi sosu na diggante 1913 ak 1914. Lu yàgg, mooy buntu départ bu chemin de fer Dakar-Niger, yoon wu am solo ci lëkkale Dakar ak Bamako.

Gare bu njëkk bi tabaxu woon na ci 1885 ngir ligne Dakar-Saint-Louis, te inauguration bi amoon na 6 juillet 1885. Lii bokk na ci tàmbaliu chemin de fer ci Afrique de l'Ouest.

### Patrimoine

Gare bi di wone benn pàcc ci histoireu transport, architecture ak développementu Dakar. Aar tabax bi ak xam taarix bi am na solo ci patrimoine urbain bu dëkk bi.`,
  },
  'ecomusee-diakhao': {
    titleWo: 'Écomusée bu Diakhao — fàttaliku Sine ak patrimoine Sereer',
    excerptWo: 'Buntu xam-xam bu Diakhao, ci taariixu Sine ak patrimoine culturel Sereer.',
    contentWo: `### Jëmmal

Écomusée bu Diakhao dafay ubbi bunt ci taariixu Sine ak fàttaliku Sereer. Diakhao lëkkale na taariixu nguurum Sine, cosaan yi, bérab yu fàttaliku ak patrimoine culturel.

### Diakhao ak Sine

Diakhao am na solo ci taariixu royaume du Sine ak ci fàttaliku Sereer. Territoire bi dafay lëkkale taariixu nguur, cosaan, bérab yu am solo ak patrimoine culturel.

### Patrimoine ak xam-xam

Écomusée bi bokk na ci bérab yu culture yu ñuy xamle ci Senegaal. Mu may ñu gëna xam patrimoine bu Sine, te du rekk ci grands circuits yu Dakar ak Petite-Côte.

### Fàttaliku ak jàngale

Patrimoine bi war nañu ko denc ak jàngale ko ci diggante maam ak sëy. Écomusée bi man na lëkkale xam-xamu Diakhao ak fiches yi jëm ci Sine, personnalités historiques, cosaan Sereer, Fatick ak patrimoine culturel bu dul jëfandikoo ay jumtukaay.`,
  },
  'musee-mbiin-ndiogoye-de-joal-memoire-et-patrimoine-de-joal-fadiouth': {
    titleWo: 'Musée Mbiin Ndiogoye bu Joal — fàttaliku ak patrimoine',
    excerptWo: 'Muze ci xolum Joal, di denc ak wone fàttaliku local ak patrimoine bu Joal-Fadiouth.',
    contentWo: `### Jëmmal

Musée Mbiin Ndiogoye bu Joal nekk na ci Joal-Fadiouth. Mu am solo ci denc ak wone fàttaliku local, taariix ak patrimoine bu dëkk bi.

### Joal-Fadiouth ak patrimoine

Joal-Fadiouth am na patrimoine bu wuute, lëkkale Joal ci continent ak Fadiouth ci île bu amas coquillages. Muze bi man na dimbali ci gëna xam territoire bi, cosaan yi ak dundug askan wi.

### Fàttaliku local

Muze yi ci dëkk yi am nañu solo ndax dañuy denc nettali yi ak mbir yi man a réer. Lii dafay may xale yi ak gan ñi xam taarixu Joal-Fadiouth ci benn bérab.

### Transmission

Denc patrimoine du rekk tekki denc ay mbir. War na ànd ak jàngale, waxtaan ak nit ñi ci dëkk bi, ak xam-xam yu ñuy jàngale ci diggante maam ak sëy.`,
  },
  'ecomusee-du-commerce-fluvial-de-podor-memoire-du-fleuve-senegal': {
    titleWo: 'Écomusée bu jaay-jaayu ndox mu Podor — fàttaliku dexu Senegaal',
    excerptWo: 'Écomusée bu Podor di wone dexu Senegaal ni yoonu jokkoo, jaay-jaay ak dundin.',
    contentWo: `### Jëmmal

Écomusée bu jaay-jaayu ndox mu Podor dafay ubbi bunt ci taariixu dexu Senegaal ni yoonu jokkoo diggante dëkk yi. Podor ak escales yu yàgg yi bokk nañu ci taariixu échanges ci dex gi.

### Dexu Senegaal

Dexu Senegaal doon na yoon wu am solo ci tukki, transport ak jaay-jaay. Dëkk yu nekk ci wetam dañuy jokkoo jaarale ko ci ndox, waxtaan ak produits yu wuute.

### Podor ak escales yi

Podor am na solo ci histoireu échanges ci wàllu dex gi. Écomusée bi dafay may ñu xam yoonu dund, liggéey ak jokkoo yi lëkkale dëkk yi ak dex mi.

### Patrimoine fluvial

Patrimoine bu dex gi boole taariix, environnement ak savoir-faire. Denc ko ak wone ko dafay dimbali ci xam solo bu dexu Senegaal ci dundug askan yi.`,
  },
  'musee-des-forces-armees-du-senegal-memoire-militaire-et-histoire-nationale': {
    titleWo: 'Musée des Forces armées du Senegaal — fàttaliku militaire',
    excerptWo: 'Bérab bu fàttaliku di denc histoireu forces armées ak pàcc yu taariixu réew mi.',
    contentWo: `### Jëmmal

Musée des Forces armées du Senegaal mooy bérab bu fàttaliku ci histoireu réew mi ak forces armées. Mu dafay dimbali ci xam ay pàcc yu am solo ci taariixu Senegaal.

### Histoire ak collections

Muze bi dafay jëm ci mbir yu lëkkale ak histoireu militaire, ay xew-xew, ay nit ak jumtukaay yu man a wone yoonu réew mi jaar ci ay jamono.

### Bérab bu fàttaliku

Muze bi du rekk bérab bu ñuy gis ay objets. Mu bokk na ci yoonu jàngale ci taariix, fàttaliku ak jokkoo diggante ay génération.

### Denc ak jàngale

Patrimoine militaire war nañu ko denc ci yoon wu dëgg, te xamle ko ak sources yu wóor. Muze bi man na dimbali xale yi, jàngkat yi ak gan ñi ci gëna xam taariixu réew mi.`,
  },
  'fort-de-podor': {
    titleWo: 'Fort bu Podor',
    excerptWo: 'Monument historique ci wetug dexu Senegaal, témoinu commerce ak taariixu Fouta-Toro.',
    contentWo: `### Jëmmal

Fort bu Podor mooy benn ci monument yu am solo ci norte Senegaal. Mu nekk ci wetu dexu Senegaal, ci dëkk Podor, te dafay wone ay téeméeri at yu taariixu commerce, militaire ak politique ci vallée bi.

### Podor ak dex gi

Fort bi nekk na ci bérab bu am solo ngir toppatoo yooni ndox ak jokkoo yu lëkkale intérieuru réew mi ak géej gi. Dexu Senegaal doon na yoon wu mag ci transport, commerce ak jokkoo.

### Fonction militaire ak commerce

Ci jamono ju colonial, fort bi amoon na rôle ci seetlu dex gi, aar yoonu commerce ak toppatoo échanges. Produits yi ñuy jëfandikoo ci échanges bokk nañu ci gomme arabique, céréales, meew ak liggéeyu loxo.

### Patrimoine

Fort bu Podor mooy bérab bu fàttaliku ci histoireu Fouta-Toro, architecture militaire ak commerce fluvial. Aar tabax bi ak xam nettali bi man na dimbali ci jàngale taariixu vallée bi.

### Turismu ak jàngale

Gan ñi man nañu seet fort bi, gis dex gi ak xam yoonu commerce ak jokkoo yi doon dox ci Podor. Bérab bi man na it dimbali jàngkat yi ci histoireu commerce fluvial ak jamono colonial.`,
  },
  'cathedrale-du-souvenir-africain-dakar': {
    titleWo: 'Cathédrale du Souvenir Africain bu Dakar',
    excerptWo: 'Bérab bu mag ci Plateau, patrimoine religieux ak fàttaliku ci histoireu Dakar.',
    contentWo: `### Jëmmal

Cathédrale du Souvenir Africain, te ñuy woowe ko it Notre-Dame-des-Victoires, nekk na ci Plateau ci Dakar. Mooy benn ci bérab yu am solo ci dundug katolik bu Senegaal.

### Taarixu tabax bi

Projet bi tàmbalee na ci 1910. Benn ci xew-xew yi am solo mooy poseu première pierre ci 11 novembre 1922. Tabax bi ñu ko defar ak melokaan yu lëkkale architecture soudanaise ak byzantine, ak ay jumtukaay yu jóge Afrique ak Europe.

### Fàttaliku

Cathédrale bi am na solo ci fàttaliku réew mi. Ci 2001, obsequesu Léopold Sédar Senghor, présidentu njëkk bu Senegaal, amoon na fa. Cardinal Hyacinthe Thiandoum it nekk na fa ci tomb.

### Bokkute ci dundug dëkk bi

Bérab bi di wone benn pàcc ci patrimoine religieux bu Dakar ak ci bokkute diine. Mu nekk na ci wetu Grande Mosquée de Dakar, di wone jokkoo ak bokkute yu am ci réew mi.`,
  },
  'musee-theodore-monod-d-art-africain': {
    titleWo: 'Musée Théodore Monod bu Art Africain',
    excerptWo: 'Muze bu Dakar bu denc, di gëstu ak di wone patrimoine artistique ak culturel bu Afrique.',
    contentWo: `### Jëmmal

Musée Théodore Monod bu Art Africain nekk na ci Dakar te bokk na ci institutions muséales yu yàgg ci Afrique de l'Ouest. Mu jëm ci denc, gëstu ak wone arts traditionnels africains.

### IFAN ak Théodore Monod

Muze bi sosu na ci cadre bu Institut Fondamental d'Afrique Noire (IFAN). Turu Théodore Monod ñu jox ko ngir fàttaliku gëstu-kat ak explorateur bi liggéeyoon ci xam Afrique.

### Collections

Collections yi boole nañu ay objets ak savoir-faire yu wuute, mel ni textile, bois, métal ak vannerie. Muze bi may na ñu gëna xam expressions artistiques ak cosaan yu wuute ci kontinaŋ Afrique.

### Jàng ak patrimoine

Muze bi di dimbali ci recherche, njàngale ak transmission. Jàngkat, chercheurs, gan ñi ak nit ñi ci wàllu culture man nañu ko jëfandikoo ngir gëna xam patrimoine bu Afrique.`,
  },
  'palais-du-gouverneur-de-saint-louis': {
    titleWo: 'Palaisu Gouverneur bu Saint-Louis',
    excerptWo: 'Tabax bu am solo ci taariixu Saint-Louis, te doonoon kër ak biro bu gouverneur colonial bi.',
    contentWo: `### Jëmmal

Palaisu Gouverneur bu Saint-Louis nekk na ci biir île bu Saint-Louis. Mu bokk na ci tabax yu am solo ci patrimoine architectural ak historique bu dëkk bi.

### Taarix ak fonction

Ci jamono colonial, palais bi doon na résidence officielle ak siège administratif bu gouverneur. Dafa doon benn ci bérab yi décisions yu am solo ci administrationu territoire bi di ame.

### Architecture ak dëkk bi

Tabax bi nekk na ci tissu urbain colonial bu île bu Saint-Louis. Jokkoo bi mu am ak yeneen tabax yu tarihi di yokk njariñam ci xam melokaanu dëkk bi.

### Patrimoine

Palaisu Gouverneur mooy benn ci màndargay fàttaliku ci période coloniale ak taariixu Saint-Louis. Aar ko ak denc nettaliam dafay dimbali ci xam taariixu dëkk bi.`,
  },
  'village-artisanal-de-soumbedioune-le-sanctuaire-de-lartisanat-senegalais-a-dakar': {
    titleWo: 'Village artisanal bu Soumbédioune',
    excerptWo: 'Bérab bu am solo ci Dakar, di wone ak di denc savoir-faire yu artisanat bu Senegaal.',
    contentWo: `### Jëmmal

Village artisanal bu Soumbédioune nekk na ci Corniche Ouest bu Dakar, wetu géej gi, ci wetu Médina. Mooy benn ci vitrines yu mag yu artisanat bu Senegaal.

### Nguuru ak sos

Village bi sosu na ci njàngat yi ñu defoon ci début des années 1960, ci waxtu preparatifs Festival mondial des arts nègres. Mu yokk na ndaw yi ak artisans yi bérab ngir liggéey ak wone seen savoir-faire.

### Savoir-faire

Ci ateliers yi, artisans yi di liggéey ci maroquinerie, sculpture sur bois, bijouterie, poterie, vannerie ak yeneen métiers. Bérab bi di wone ne artisanat mooy patrimoine ak it secteur bu am solo ci économie.

### Patrimoine ak tourisme

Soumbédioune di jëme ci tourisme ak ci transmissionu savoir-faire. Gane yi man nañu gis liggéeyu artisans yi, seet objets yi ak gëna xam cosaanu artisanat bu Senegaal.`,
  },
  'coniagui-rites-et-savoir-faire-de-la-communaute-coniagui': {
    titleWo: 'Coniagui — ay xew-xew ak savoir-faire',
    excerptWo: 'Cosaan, pratiques sociales ak savoir-faire yu askanu Coniagui ci régionu Kédougou.',
    contentWo: `### Jëmmal

Cosaanu Coniagui boole na pratiques sociales, rites ak savoir-faire yu bokk ci patrimoine culturel immatériel bu Senegaal. Mu am solo ci régionu Kédougou.

### Transmissionu cosaan

Ay pratique yu Coniagui di jaar ci génération yi, jaarale ko ci waxtaan, njàng ak dundug askan. Rites ak savoir-faire yi di wone identité ak bokkute bu communauté bi.

### Patrimoine culturel

Xam-xam bi du rekk nettali yu yàgg. Mu boole it yoonu dund, jëfandikoo savoir-faire ak ay mbir yu am solo ci dundug communauté.

### Denc ak transmission

Denc cosaanu Coniagui dafay soxla documentation, njàngale ak jàppale transmissionu xam-xam bi ci xale yi ak génération yu ñëw. Patrimoine bii yokk na diversité culturelle bu Senegaal.`,
  },
  'le-fanal-de-saint-louis-la-parade-des-lanternes-de-fin-dannee': {
    titleWo: 'Fanal bu Saint-Louis — paradeu lanternes bu fin d’année',
    excerptWo: 'Tradition bu Saint-Louis bu lëkkale fête, musique, lanternes ak patrimoine culturel.',
    contentWo: `### Jëmmal

Fanal bu Saint-Louis mooy benn ci traditions yu am solo ci dundug dëkk bi. Mu lëkkale parade, lanternes, musique ak bokkuteu askan ci waxtu fêtes yu fin d’année.

### Tradition ak taariix

Fanal bi bokk na ci patrimoine culturel bu Saint-Louis. Mu wone melokaanu fête yu yàgg ak yoonu dëkk bi di jëfandikoo musique, lumière ak procession ngir defar xew-xew bu bokkute.

### Patrimoine vivant

Fanal du rekk spectacle. Mooy it yoonu transmettre cosaan, musique ak pratiques culturelles ci génération yi. Ñi ci bokk di yokk dundug patrimoine immatériel bu Saint-Louis.

### Turismu ak bokkute

Ci jamono yu fête, Fanal man na dalal gan ñi te wone leen benn pàcc ci identité culturelle bu Saint-Louis. Dafa yokk njariñu patrimoine ci dundug dëkk bi.`,
  },
  'les-regates-traditionnelles-au-senegal-sport-nautique-culture-et-transmission': {
    titleWo: 'Régates traditionnelles ci Senegaal',
    excerptWo: 'Course yu gaal yu lëkkale sport nautique, cosaan, compétition ak transmission ci communities yu wetu géej.',
    contentWo: `### Jëmmal

Régates traditionnelles ci Senegaal bokk nañu ci activités nautiques yu am solo ci communities yu dëkk ci wetu géej ak dex. Gaal yi di daje ci course yu ñuy def ci waxtu fêtes ak manifestations culturelles.

### Sport ak cosaan

Régate bi du rekk compétition. Mu lëkkale préparationu gaal, xam-xamu ndox, liggéeyu koox ak bokkuteu askan. Ay yoon yu ñuy defar gaal ak yoonu tàmbali course di jaar ci génération.

### Transmission

Ndaw yi di jàng ci mag ñi yoonu defar ak doxal gaal, discipline ak bokkute. Régates yi man nañu dimbali ci denc savoir-faire yu lëkkale ak dundug géej.

### Patrimoine

Régates traditionnelles di wone ne patrimoine culturel man na nekk ci sport, fête ak dundug communities. Denc ak jàppale pratiques yii dafay yokk diversité culturelle bu Senegaal.`,
  },
  'le-mandinka-langue-mandingue-de-lest-du-senegal': {
    titleWo: 'Mandinka — làkk Manding bu penku Senegaal',
    excerptWo: 'Làkk Mandinka ak cosaanu Manding ci penku Senegaal, bokk ci diversité linguistique bu réew mi.',
    contentWo: `### Jëmmal

Mandinka mooy benn ci làkk yi ñuy wax ci espace Manding, te am na ay communautés ci penku Senegaal. Làkk bi bokk na ci familleu langues mandées.

### Làkk ak identité

Làkk du rekk jumtukaay bu waxtaan. Mu bokk na ci identité, cosaan, nettali ak transmissionu xam-xam ci génération yi. Ci Mandinka, ay nettali ak expressions culturelles di jaar ci wax ak dundug askan.

### Diversité linguistique

Senegaal am na diversité linguistique bu mag. Mandinka bokk na ci làkk yi di yokk richesseu patrimoine culturel immatériel bu réew mi.

### Transmission

Denc Mandinka soxla na jàngale, jëfandikoo làkk bi ci dundug bés-bés ak transmission ci xale yi. Yoonu numérique ak documentation man nañu it dimbali ci denc ak wone làkk bi.`,
  },
  'departement-de-kedougou': {
    titleWo: 'Départementu Kédougou',
    excerptWo: 'Boppu administratif bu régionu Kédougou, ci penku-estu Senegaal, ci wetu frontière yu Mali ak Guinée.',
    contentWo: `### Jëmmal

Départementu Kédougou bokk na ci régionu Kédougou, ci penku-estu Senegaal. Mu nekk ci espace bu melokaan wu wuute, ak ay collines, savanes ak cours d'eau.

### Terroir ak environnement

Dëkk yi ci département bi dund nañu ci mbir yu lëkkale ak agriculture, élevage, commerce ak ressources naturelles. Environnement bi am na it solo ci patrimoine naturel ak tourisme.

### Cosaan ak diversité

Kédougou bokk na ci bérab yu diversité culturelle bu mag. Ay communautés ak cosaan yu wuute di bokk ci dundug territoire bi, ak làkk, rites ak savoir-faire yu wuute.

### Développement ak patrimoine

Département bi dafa am potentialités ci agriculture, élevage, tourisme ak économie locale. Denc patrimoine naturel ak culturel ak yokk services yu askan di soxla bokk na ci développementu territoire bi.`,
  },
  'la-colonisation-du-senegal-conquete-administration-et-transformations': {
    titleWo: 'Colonisation bu Senegaal — conquête, administration ak soppi',
    excerptWo: 'Nettali ci conquête coloniale, organisation administrative ak soppi yi période coloniale indi ci Senegaal.',
    contentWo: `### Jëmmal

Colonisation bu Senegaal mooy période bu am solo ci taariixu réew mi. Mu lëkkale expansionu pouvoir colonial français, résistances yu communities ak soppi ci organisationu territoire bi.

### Conquête ak résistance

Expansionu pouvoir colonial doxoon na ndànk-ndànk, ak ay résistance yu dëkk ak royaumes yi. Ay leaders ak populations yu wuute jàppoon nañu seen territoire ak seen pouvoir ci anam yu wuute.

### Administration

Ci jamono colonial, administration bi defaroon ay divisions territoriales, centres administratifs ak institutions yu ñuy jëfandikoo ngir toppatoo territoire bi. Dakar ak yeneen dëkk yu am solo yokku nañu seen rôle.

### Soppi yu jamono bi

Colonisation indi na soppi ci commerce, transport, école, justice ak organisationu dëkk. Waaye période bi boole na it contraintes, inégalités ak résistances.

### Mémoire historique

Xam colonisation soxla na jàng taariixu sources yu wuute ak bàyyi place ci résistance, expériencesu populations ak soppi yu am ci société sénégalaise.`,
  },
  'agriculture-et-elevage-dans-le-senegal-oriental-filieres-et-marches': {
    titleWo: 'Agriculture ak élevage ci Senegaal oriental',
    excerptWo: 'Filières, pratiques ak marchés yu lëkkale ak agriculture ak élevage ci penku-réew mi.',
    contentWo: `### Jëmmal

Agriculture ak élevage bokk nañu ci activités yu am solo ci économieu Senegaal oriental. Ay producteurs di jëfandikoo terroirs yu wuute ngir sàkk dund ak jaay.

### Agriculture

Filières yi mën nañu boole céréales ak yeneen cultures yu dëppoo ak terroir yi. Production bi aju na ci ndox, taw, sols ak accès aux marchés.

### Élevage

Élevage am na solo ci dundug askan yi. Bokk na ci revenus, alimentation ak échanges. Yoonu élevage ak mobilitéu jur di sukkandiku ci ressourcesu naturel ak saison.

### Marchés ak filières

Jokkoo diggante producteurs, commerçants ak consommateurs di tax production bi am valeur ci marché. Transport ak accès aux infrastructures bokk nañu ci mbir yi di mëna soppi njariñu filières yi.`,
  },
  'musee-des-civilisations-noires': {
    titleWo: 'Musée des Civilisations Noires',
    excerptWo: 'Muze bu Dakar bu wone ak di denc histoire, cultures ak contributions yu askanu ñu ñuy bokk ci peuples noirs.',
    contentWo: `### Jëmmal

Musée des Civilisations Noires nekk na ci Dakar. Mu jëm ci denc, wone ak transmissionu histoire ak cultures yu lëkkale ak peuples noirs ci Afrique ak ci diaspora.

### Histoire ak identité

Muze bi di jox bérab ci nettali yu lëkkale ak civilisations, savoir-faire, arts ak expressions culturelles. Mu may na it xool patrimoine Afrique ci perspective bu wuute.

### Collections ak expositions

Ay collections ak expositions man nañu wone objets, œuvres ak témoignages yu lëkkale ak jamono ak régions yu wuute. Muze bi di jokkoo patrimoine matériel ak immatériel.

### Jàng ak transmission

Muze bi am na solo ci recherche, njàngale ak transmissionu xam-xam. Dafa may gan ñi, jàngkat yi ak nit ñi ci wàllu culture yeneen yoon yu ñuy xam histoire ak diversité culturelle.`,
  },
  'manufacture-senegalaise-des-arts-decoratifs-de-thies': {
    titleWo: 'Manufacture Sénégalaise des Arts Décoratifs bu Thiès',
    excerptWo: 'Institusyon bu Thiès bu jëm ci création, transmission ak valorisationu arts décoratifs bu Senegaal.',
    contentWo: `### Jëmmal

Manufacture Sénégalaise des Arts Décoratifs bu Thiès bokk na ci bérab yi am solo ci création ak transmissionu savoir-faire artistiques ci Senegaal.

### Arts ak savoir-faire

Institusyon bi jëfandikoo na arts décoratifs ngir yokk création ak liggéeyu artists. Savoir-faire yi man nañu lëkkale ak textile, dessin, peinture ak yeneen formesu création.

### Thiès ak patrimoine

Thiès am na bérab bu am solo ci histoireu arts ak artisanat bu Senegaal. Manufacture bi bokk na ci denc ak yokk xam-xamu création ci dëkk bi.

### Transmission

Njàngale ak transmissionu savoir-faire di am solo ci yoon wi. Jàppale artists ak ndaw yi man na tax xam-xam bi wéy ci génération yi.`,
  },
  'musee-de-la-femme-henriette-bathily': {
    titleWo: 'Musée de la Femme Henriette-Bathily',
    excerptWo: 'Muze bu Gorée bu jëm ci nettali, denc ak wone ay expériences ak contributions yu jigéen ñi ci société.',
    contentWo: `### Jëmmal

Musée de la Femme Henriette-Bathily nekk na ci Gorée. Mu jëm ci denc ak wone histoireu jigéen ñi, seen contributions ak ay expériences ci société.

### Jigéen ak société

Muze bi may na bérab ngir nettali ay parcours ak liggéeyu jigéen ñi ci wàllu social, culturel ak économique. Mu di wone diversitéu expériencesu jigéen ci jamono yu wuute.

### Patrimoine ak mémoire

Denc témoignages ak objets yu lëkkale ak dundug jigéen ñi dafay yokk mémoire sociale. Muze bi bokk na ci patrimoine culturel bu Gorée ak Senegaal.

### Jàng ak transmission

Expositions ak activitésu médiation man nañu dimbali ci xam solo bu contributionsu jigéen ñi ak ci transmissionu mémoire ci génération yi.`,
  },
  'maison-ousmane-sow': {
    titleWo: 'Kër Ousmane Sow',
    excerptWo: 'Bérab bu Dakar bu denc mémoire ak oeuvreu artiste Ousmane Sow, ak patrimoine artistique bu Senegaal.',
    contentWo: `### Jëmmal

Kër Ousmane Sow bokk na ci bérab yi lëkkale ak patrimoine artistique bu Senegaal. Mu fàttaliku oeuvreu sculpteur Ousmane Sow ak yoonu créationam.

### Ousmane Sow

Ousmane Sow doon na artiste bu Senegaal bu amoon tur ci sculpture. Œuvresam di jëfandikoo forme, corps ak matière ngir nettali ay histoires ak figures humaines.

### Mémoire ak création

Kër gi man na jox gan ñi benn bérab ngir gëna xam artiste bi, yoonu liggéeyam ak pàcc bi mu def ci histoireu art bu Senegaal.

### Transmissionu patrimoine

Denc mémoireu artiste yi am solo ci transmissionu patrimoine contemporain. Kër Ousmane Sow man na dimbali ci jàngale arts ak wone liggéeyu artiste bu Senegaal.`,
  },
  'musee-historique-du-senegal-fort-d-estrees': {
    titleWo: 'Musée historique du Senegaal — Fort d’Estrées',
    excerptWo: 'Muze bu Gorée bu nettali taariixu Senegaal ci ay collections ak témoignages yu wuute.',
    contentWo: `### Jëmmal

Musée historique du Senegaal, nekk ci Fort d’Estrées ci Gorée, bokk na ci bérab yu am solo ci patrimoine historique bu réew mi. Mu jëm ci nettali ay pàcc yu wuute ci taariixu Senegaal.

### Gorée ak mémoire

Fort bi nekk ci Gorée, dëkk bi am solo ci taariixu échanges atlantiques ak mémoire. Muze bi di jox bérab ngir jàng ay événements ak transformations yu amoon ci réew mi.

### Collections ak témoignages

Expositions yi man nañu boole objets, documents ak témoignages yu lëkkale ak histoireu Senegaal. Ñuy jëfandikoo leen ngir jàngale taariix ak fàttaliku.

### Patrimoine

Fort d’Estrées ak muze bi bokk nañu ci patrimoine bu Gorée. Denc ak wone bérab bi di dimbali ci transmissionu mémoire ci génération yi.`,
  },
  'village-des-arts-de-dakar': {
    titleWo: 'Village des Arts bu Dakar',
    excerptWo: 'Bérab bu Dakar bu dajale artistes ak créations, di wone diversitéu arts contemporains bu Senegaal.',
    contentWo: `### Jëmmal

Village des Arts bu Dakar mooy espace bu artists di liggéey, di sos ak di wone seen créations. Mu bokk na ci bérab yu am solo ci scène artistique bu Dakar.

### Création ak ateliers

Village bi dafa dajale ateliers ak espacesu création. Artists yu wuute di jëfandikoo bérab bi ngir liggéey ci disciplines yu wuute.

### Arts ak diversité

Œuvres yi di wone melokaan yu wuute ci art contemporain, ak ay themes yu lëkkale ak société, identité ak dund. Bérab bi di tax artistes yi jokkoo ak public.

### Transmission ak rayonnement

Expositions, rencontres ak yeneen activités man nañu dimbali ci transmissionu xam-xamu arts. Village bi it di yokk visibilitéu artistes ak créationu Senegaal.`,
  },
  'maison-des-esclaves-de-goree': {
    titleWo: 'Kër Esclaves bu Gorée',
    excerptWo: 'Bérab bu mémoire bu Gorée, lié ci taariixu traite négrière ak mémoire des personnes réduites en esclavage.',
    contentWo: `### Jëmmal

Kër Esclaves bu Gorée bokk na ci bérab yu am solo ci mémoire historique bu Senegaal. Mu nekk ci île bu Gorée, te mu lëkkale ak nettali yu traite négrière transatlantique.

### Mémoire

Kër gi di jox bérab ngir waxtaan ci conditions yu personnes yu ñu jàppoon ak ñu joxoon ci esclavage. Mémoire bi dafa am solo ci xam ay conséquencesu traite négrière ci sociétés.

### Architecture ak transmission

Tabax bi ak espace yi ci biir di jox ay repères ngir jàng taariix. Bérab bi di jëfandikoo it ci transmissionu mémoire ci gan ñi ak génération yu ñëw.

### Patrimoine

Kër Esclaves bokk na ci patrimoine bu Gorée. Denc ko ak nettali bu sukkandiku ci sources yu wóor am na solo ngir jàng taariix ak fàttaliku ci anam bu dëgg.`,
  },
  'maison-natale-de-leopold-sedar-senghor': {
    titleWo: 'Kër juddug Léopold Sédar Senghor',
    excerptWo: 'Bérab bu fàttaliku ci Joal, lëkkale ak juddug ak mémoireu Léopold Sédar Senghor.',
    contentWo: `### Jëmmal

Kër juddug Léopold Sédar Senghor nekk na ci Joal. Mu bokk na ci bérab yu lëkkale ak mémoireu benn ci figures yu am solo ci histoireu Senegaal.

### Senghor ak Joal

Joal bokk na ci bérab yi am solo ci nettaliu dundug Senghor. Kër gi di jox repères ci environnement bi mu juddoo ak patrimoine bu dëkk bi.

### Mémoire ak patrimoine

Bérab bu juddug nit ku am solo ci histoire man na nekk espaceu mémoire. Denc ko ak nettaliam di dimbali ci jàng taariix ak xam bokkuteu Joal ci dundug Senghor.

### Transmission

Gan ñi ak jàngkat yi man nañu jëfandikoo bérab bi ngir gëna xam dund, nettali ak patrimoine bi lëkkale ak Senghor.`,
  },
  'musee-boribana': {
    titleWo: 'Musée Boribana',
    excerptWo: 'Bérab artistique bu Dakar bu lëkkale création, exposition ak wone arts contemporains.',
    contentWo: `### Jëmmal

Musée Boribana bokk na ci bérab yi di wone arts ak création ci Dakar. Mu jox artistes ak public benn espaceu exposition ak découverte.

### Art ak création

Muze bi di jëfandikoo expositions ngir wone œuvres yu artists yu wuute. Mu bokk na ci dundug scène artistique bu Dakar.

### Transmission

Expositions ak activitésu médiation man nañu dimbali public bi ci gëna xam œuvres ak démarches artistiques. Bérab yi mel nii di yokk jokkoo diggante artists ak gan ñi.

### Patrimoine contemporain

Denc lieuxu création ak mémoire artistique am na solo ci patrimoine contemporain bu Senegaal. Muze bi bokk na ci paysage culturel bu Dakar.`,
  },
  'centre-dinterpretation-du-delta-du-saloum': {
    titleWo: 'Centre d’interprétation du Delta du Saloum',
    excerptWo: 'Bérab bu jàngale ak wone patrimoine naturel ak culturel bu Delta du Saloum.',
    contentWo: `### Jëmmal

Centre d’interprétation du Delta du Saloum jëm na ci jàngale ak wone richesseu environnement ak patrimoine bu Delta du Saloum.

### Nature ak territoire

Delta bi boole na bolongs, mangroves, îles ak zonesu wetug ndox. Milieu bii am na solo ci dundug populations ak biodiversité.

### Culture ak savoir-faire

Centre bi man na dimbali ci xam cosaan, savoir-faire ak yoonu dund yu lëkkale ak territoire bu Delta du Saloum. Patrimoine naturel ak culturel di jokkoo ci dundug communities.

### Jàngale ak sensibilisation

Jàngale visiteurs ci valeur patrimoine bi bokk na ci missionu centre bi. Xam environnement ak cosaan di dimbali ci denc ak toppatoo territoire bi.`,
  },
  'mosquee-de-divinity': {
    titleWo: 'Mosquée de Divinity',
    excerptWo: 'Bérab bu religioŋ ak patrimoine bu Dakar, lëkkale ak dundug communauté musulmane.',
    contentWo: `### Jëmmal

Mosquée de Divinity bokk na ci patrimoine religieux bu Dakar. Mu nekk na ci bérab bu ñuy jëfandikoo ci julli ak dundug communauté.

### Architecture ak espace religieux

Mosquée bi di boole fonctionu julli ak melokaanu architectureu bérab bi. Tabax ak espace yi di bokk ci paysageu dëkk bi.

### Patrimoine

Bérab yi mel ni mosquée yi di wone bokkuteu diine ak histoireu communities. Denc patrimoine religieux dafay dimbali ci xam diversitéu culture ak dundug Dakar.

### Dundug communauté

Mosquée di nekk it espaceu rencontre, waxtaan ak bokkute. Mu bokk ci yoonu dundug nit ñi ci quartier bi.`,
  },
  'chateau-de-saint-louis': {
    titleWo: 'Château bu Saint-Louis',
    excerptWo: 'Tabax bu historique ci île bu Saint-Louis, bokk ci patrimoine architectural bu dëkk bi.',
    contentWo: `### Jëmmal

Château bu Saint-Louis bokk na ci tabax yu am solo ci patrimoine architectural bu île bu Saint-Louis. Mu bokk ci paysageu historique bu dëkk bi.

### Architecture ak histoire

Tabax bi di wone ay melokaan yu lëkkale ak architectureu Saint-Louis ak ay jamono yu dëkk bi jaar. Mu bokk ci tissu urbain bu île bi.

### Mémoire

Tabax yu tarihi di jox ay repères ci soppi yu dëkk bi ak ci dundug populations. Château bi bokk na ci nettaliu patrimoine bu Saint-Louis.

### Denc patrimoine

Aar tabax yi ak dokumente seen histoire di dimbali ci transmissionu mémoire. Patrimoine architectural bu Saint-Louis am na solo ci identitéu dëkk bi.`,
  },
  'mame-woury-thioubou': {
    titleWo: 'Mame Woury Thioubou',
    excerptWo: 'Bindkat, journaliste ak réalisatrice bu Senegaal, mu liggéey ci mbind ak cinéma.',
    contentWo: `### Jëmmal

Mame Woury Thioubou mooy bindkat, journaliste ak réalisatrice bu Senegaal. Liggeyamu dafay lëkkale mbind, médias ak cinéma.

### Mbind ak médias

Mu bokk ci scène littéraire ak médiatique bu Senegaal, te liggéeyam di yokk xam-xamu nit ñi ci société ak culture.

### Cinéma ak nettali

Ci réalisations ak projets yu mel ni, mu jëfandikoo nettali ngir wone dund ak yëngu-yëngu yu société.

### Gëstu ak transmission

Liggeyamu di bokk ci wàllu création ak transmissionu xam-xam ci Senegaal.`,
  },
  'ibrahima-sall': {
    titleWo: 'Ibrahima Sall',
    excerptWo: 'Bindkat bu Senegaal, bokk ci scène littéraire ak culturelle bu réew mi.',
    contentWo: `### Jëmmal

Ibrahima Sall mooy bindkat bu Senegaal, te bokk na ci scène littéraire ak culturelle bu réew mi.

### Mbind

Liggeyam ci mbind di yokk diversitéu voix yi ci littérature bu Senegaal.

### Culture ak nettali

Mbind dafay joxe benn yoon ngir xalaat, nettali ak séddoo ay xalaat ci société.

### Transmission

Bindkat yi am nañu solo ci denc ak yóbbu baat ak xam-xam ci génération yi ñëw.`,
  },
  'faty-sow-kane': {
    titleWo: 'Faty Sow Kane',
    excerptWo: 'Bindkat ak universitaire bu Senegaal, bokk ci création ak transmission intellectuelle.',
    contentWo: `### Jëmmal

Faty Sow Kane mooy bindkat ak universitaire bu Senegaal. Mu bokk ci wàllu mbind ak transmissionu xam-xam.

### Mbind ak gëstu

Liggeyam di lëkkale littérature, gëstu ak xalaat universitaire. Mu bokk ci diversitéu production intellectuelle bu Senegaal.

### Transmission

Université ak littérature di nekk yoon yu am solo ngir séddoo xam-xam ak yokk xalaat bu jàppandi.

### Héritage

Liggeyu bindkat ak universitaire yi di bokk ci patrimoine intellectuel bu réew mi.`,
  },
  'aminata-maiga-ka': {
    titleWo: 'Aminata Maïga Ka',
    excerptWo: 'Bindkat bu Senegaal, figure bu littérature africaine francophone.',
    contentWo: `### Jëmmal

Aminata Maïga Ka mooy bindkat bu Senegaal, te bokk na ci littérature africaine francophone.

### Mbind ak littérature

Mbindam di yokk voixu littérature bu Senegaal ci espaceu francophone. Mu bokk ci productionu littéraire bu Aferik.

### Culture

Littérature di jox yoon ngir nettali dund, xalaat ak expérience yu nit ñi. Bindkat yi di yokk diversitéu baat yi.

### Transmission

Œuvres littéraires di wéy ci génération yi te di denc mémoire ak xalaat.`,
  },
  'mame-younousse-dieng': {
    titleWo: 'Mame Younousse Dieng',
    excerptWo: 'Bindkat bu Senegaal ak taxawkat bu làkk Wolof.',
    contentWo: `### Jëmmal

Mame Younousse Dieng mooy bindkat bu Senegaal, te liggeyam lëkkale mbind ak yëngu-yëngu ci làkk Wolof.

### Làkk ak mbind

Mu bokk ci ñi di jëfandikoo mbind ngir yokk solo ak feeñal làkk Wolof. Liggeyam di wone ne làkk mooy itam alal culturel.

### Transmission

Bind ak jàng di dimbali ci yóbbu làkk ak xam-xam ci génération yi ñëw.

### Héritage

Taxawu làkk yi di bokk ci aar diversitéu linguistique ak culturelle bu Senegaal.`,
  },
  'ndeye-coumba-mbengue-diakhate': {
    titleWo: 'Ndeye Coumba Mbengue Diakhaté',
    excerptWo: 'Benn ci pionnières yu littérature bu jigéen ci Senegaal.',
    contentWo: `### Jëmmal

Ndeye Coumba Mbengue Diakhaté bokk na ci pionnières yu littérature bu jigéen ci Senegaal, ci littérature bu ñu bind ci français.

### Littérature ak société

Mbindu jigéen yi di yokk feeñal expérience, xalaat ak nettali yu jigéen ci société.

### Transmission

Littérature di nekk yoonu transmissionu xalaat ak mémoire, te liggeyu pionnières yi di jox ay njàngale ci génération yi.

### Héritage

Place bi mu am ci histoireu littérature bu Senegaal di bokk ci patrimoine intellectuel ak culturel bu réew mi.`,
  },
  'cheikh-ndiaye': {
    titleWo: 'Cheikh Ndiaye',
    excerptWo: 'Artiste peintre bu Senegaal, bokk ci création visuelle bu contemporain.',
    contentWo: `### Jëmmal

Cheikh Ndiaye mooy artiste bu Senegaal, te liggeyam bokk na ci scène bu arts visuels contemporains.

### Peinture ak création

Peinture di nekk ci biir liggeyam, te création visuelle di jëfandikoo ay melokaan ngir séddoo xalaat ak gis-gis.

### Scène artistique

Mu bokk ci yëngu-yëngu bu arts visuels ci Senegaal, fu artistes di wone seen liggey ak seen gis-gis.

### Transmission

Arts visuels di dimbali ci denc mémoire, xalaat ak nettali yu jamono ji.`,
  },
  'papa-ibra-tall': {
    titleWo: 'Papa Ibra Tall',
    excerptWo: 'Peintre, dessinateur ak jàngalekat bu Senegaal, figure bu École de Dakar.',
    contentWo: `### Jëmmal

Papa Ibra Tall mooy peintre, dessinateur ak pédagogue bu Senegaal, te bokk na ci figures yu École de Dakar.

### École de Dakar

Mu bokk ci histoireu scèneu arts visuels bu Senegaal, ci jamono yi École de Dakar di yokk.

### Peinture ak dessin

Peinture ak dessin di nekk ci yoonu création ak expression artistique. Liggeyu artistes yi di yokk patrimoineu arts visuels.

### Transmission

Pédagogie ak création di jokkoo ngir jàngale ak yóbbu xam-xamu arts ci génération yi.`,
  },
  'moustapha-dime': {
    titleWo: 'Moustapha Dimé',
    excerptWo: 'Sculpteur bu Senegaal, figure bu am solo ci art contemporain africain.',
    contentWo: `### Jëmmal

Moustapha Dimé mooy sculpteur bu Senegaal, te am na benn place bu am solo ci art contemporain africain.

### Sculpture

Liggeyam di jëfandikoo matériaux yu wuute, ci biir yoonu création bu jëm ci sculpture. Œuvres yi di bokk ci histoireu arts visuels bu Senegaal.

### Art contemporain

Mu bokk ci artistes yi yokk seen gis-gis ci création contemporaine bu Afrik.

### Héritage

Liggeyu artistes yi di wéy ci œuvres yi ak ci mémoireu scène artistique bu Senegaal.`,
  },
  'mamadou-gomis': {
    titleWo: 'Mamadou Gomis',
    excerptWo: 'Photographe ak documentariste bu Senegaal, bokk ci photographie documentaire.',
    contentWo: `### Jëmmal

Mamadou Gomis mooy photographe ak documentariste bu Senegaal. Liggeyam bokk na ci photographie documentaire ak mémoire visuelle.

### Photographie

Photographie di jëfandikoo ngir tëral ay images yu dundug société, territoire ak nit ñi. Mu jox ay repères ci mémoire visuelle.

### Documentation

Documentaire di dimbali ci seet ak nettali ay réalité yu wuute. Images yi di am solo ci denc mémoire.

### Héritage

Photographie documentaire bu Senegaal di yokk patrimoine visuel bu réew mi ak yoon yi ngir jàng dund ak société.`,
  },
  'sokhna-benga': {
    titleWo: 'Sokhna Benga',
    excerptWo: 'Bindkat bu Senegaal, ci mbindum littérature bu contemporain.',
    contentWo: `### Jëmmal

Sokhna Benga mooy bindkat bu Senegaal, te liggeyam bokk na ci littérature bu contemporain.

### Mbind

Mbindam di yokk diversitéu voix ak nettali ci littérature bu Senegaal. Mu bokk ci yëngu-yëngu bu création littéraire.

### Société ak culture

Littérature di jox yoon ngir nettali dund, xalaat ak expérience yu nit ñi. Bindkat yi di bokk ci waxtaanu société.

### Transmission

Œuvres yi di dimbali ci denc mémoire ak yóbbu xalaat ci génération yi ñëw.`,
  },
  'khady-sylla': {
    titleWo: 'Khady Sylla',
    excerptWo: 'Bindkat ak cinéaste bu Senegaal, jëfandikoo mbind ak cinéma ci nettali.',
    contentWo: `### Jëmmal

Khady Sylla mooy bindkat ak cinéaste bu Senegaal. Liggeyam di lëkkale littérature ak cinéma.

### Création

Ci mbind ak image, mu di nettali ay expérience ak xalaat yu jëm ci dundug nit ñi ak société.

### Cinéma documentaire

Cinéma di jox yoon ngir seet ak nettali réalité yu wuute. Mu bokk ci création audiovisuelle bu Senegaal.

### Héritage

Liggey ci mbind ak cinéma di yokk patrimoine culturel ak visuel bu réew mi.`,
  },
  'mamousse-diagne': {
    titleWo: 'Mamousse Diagne',
    excerptWo: 'Xamkat bu Senegaal, philosophe ak spécialiste bu raison orale africaine.',
    contentWo: `### Jëmmal

Mamousse Diagne mooy philosophe bu Senegaal ak xamkat bu gëstu ci raison orale africaine.

### Xalaat ak raison orale

Gëstu ci oralité di jàngat yoonu waxtaan, nettali ak xam-xam yu ñuy yóbbu ci wax.

### Saint-Louis ak formation

Mu juddoo ci Saint-Louis, te parcoursu universitaire ak intellectuel bi lëkkale philosophie ak gëstu ci culture.

### Transmission

Xalaatam di bokk ci gëstu ak denc patrimoine intellectuel bu Aferik.`,
  },
  'amady-aly-dieng': {
    titleWo: 'Amady Aly Dieng',
    excerptWo: 'Économiste ak intellectuel bu Senegaal, figure bu xalaat critique.',
    contentWo: `### Jëmmal

Amady Aly Dieng mooy économiste ak intellectuel bu Senegaal, te am na benn place ci xalaat critique bu réew mi.

### Économie ak xalaat

Formationu économie bi jox na ko yoon ngir gëstu ak waxtaan ci mbirum société ak développement.

### Intellectuel

Liggeyam bokk na ci waxtaanu intellectuel ak xalaat ci jamono ak yoonu dëkk ak réew.

### Héritage

Mbind ak xalaat yu intellectuels yi di nekk ci patrimoineu xam-xam bu Senegaal.`,
  },
  'abasse-ndione': {
    titleWo: 'Abasse Ndione',
    excerptWo: 'Romancier bu Senegaal, benn ci ay voix yu am solo ci roman noir.',
    contentWo: `### Jëmmal

Abasse Ndione mooy romancier bu Senegaal. Mu am na benn place ci littérature bu réew mi, rawatina ci roman noir.

### Parcours

Ci parcoursu liggey bi mu ame ci wàllu santé, mu yokk mbindam ci littérature.

### Roman ak société

Roman yi di jëfandikoo nettali ngir seet ay mbir yu jëm ci société ak dundug nit ñi.

### Héritage

Liggeyu romanciers yi di yokk diversitéu littérature bu Senegaal ak Afrique.`,
  },
  'amadou-lamine-sall': {
    titleWo: 'Amadou Lamine Sall',
    excerptWo: 'Poète bu Senegaal, ak taxawkat bu Maison africaine de la poésie.',
    contentWo: `### Jëmmal

Amadou Lamine Sall mooy poète bu Senegaal ak benn ci acteurs yi ci wàllu poésie bu Aferik.

### Poésie

Mbindu poésie di lëkkale baat, xalaat ak émotion. Mu bokk ci yëngu-yëngu bu poésie bu Senegaal.

### Maison africaine de la poésie

Mu lëkkale itam ak yëngu-yëngu yu jëm ci yokk ak wone poésie ci Aferik.

### Transmission

Poésie di dimbali ci denc baat, mémoire ak xalaat ci génération yi.`,
  },
  'mohamed-mbougar-sarr': {
    titleWo: 'Mohamed Mbougar Sarr',
    excerptWo: 'Romancier bu Senegaal, lauréat du prix Goncourt.',
    contentWo: `### Jëmmal

Mohamed Mbougar Sarr mooy romancier bu Senegaal. Mu am na prix Goncourt te bokk ci littérature africaine contemporaine.

### Littérature

Mbindam di yokk feeñal littérature bu Senegaal ci scène francophone ak internationale.

### Roman ak xalaat

Roman di jëfandikoo nettali, xalaat ak expérience ngir waxtaan ci société ak conditionu nit.

### Rayonnement

Succèsu œuvres yi di yokk xam-xamu littérature bu Senegaal ci bitim réew mi.`,
  },
  'david-diop': {
    titleWo: 'David Diop',
    excerptWo: 'Poète bu Senegaal, baat bu am doole ci littérature anticoloniale.',
    contentWo: `### Jëmmal

David Diop mooy poète bu Senegaal, te poésieam bokk na ci baat yi di wax ci contexte anticolonial.

### Poésie ak résistance

Mbindam di jëfandikoo poésie ngir nettali xalaat, résistance ak dundug peuples ci jamono colonial.

### Littérature africaine

Poésieam bokk na ci histoireu littérature africaine ak ci yëngu-yëngu bu création anticoloniale.

### Héritage

Liggeyam di wéy ci jàngat ak xam littérature africaine ak nettaliu histoire.`,
  },
  'ken-bugul': {
    titleWo: 'Ken Bugul',
    excerptWo: 'Bindkat bu Senegaal, benn ci ay voix yu wute ci littérature africaine.',
    contentWo: `### Jëmmal

Ken Bugul mooy benn ci ay bindkat yu Senegaal yi am solo ci littérature africaine contemporaine.

### Mbind

Œuvresam di wone ay expérience, xalaat ak dundug nit, te di bokk ci littérature bu Senegaal ci espaceu francophone.

### Identité ak société

Mbind di waxtaan ci identité, relation ak société ak ay expérience yu dund.

### Héritage

Liggeyam di yokk diversitéu voix yi ci littérature africaine.`,
  },
  'cheikh-aliou-ndao': {
    titleWo: 'Cheikh Aliou Ndao',
    excerptWo: 'Poète, romancier ak dramaturge bu Senegaal, bokk ci littérature bu français ak Wolof.',
    contentWo: `### Jëmmal

Cheikh Aliou Ndao mooy poète, romancier ak dramaturge bu Senegaal. Mu bokk ci littérature bu français ak Wolof.

### Mbind ak théâtre

Liggeyam boole na poésie, roman ak théâtre. Mu jëfandikoo ay forme yu wuute ngir nettali histoire ak dundug société.

### Làkk Wolof

Jëfandikoo Wolof ci littérature di yokk feeñal làkk ak patrimoine culturel bu Senegaal.

### Héritage

Liggeyam di bokk ci transmissionu littérature ak diversitéu baat yi ci réew mi.`,
  },
  'boubacar-boris-diop': {
    titleWo: 'Boubacar Boris Diop',
    excerptWo: 'Romancier, essayiste ak intellectuel bu Senegaal.',
    contentWo: `### Jëmmal

Boubacar Boris Diop mooy romancier, essayiste ak intellectuel bu Senegaal, benn ci ay voix yu am solo ci littérature bu contemporain.

### Roman ak xalaat

Mbindam di lëkkale nettali, xalaat ak gëstu ci mbirum société, histoire ak mémoire.

### Làkk ak patrimoine

Liggeyu mbind ci français ak yëngu-yëngu ci Wolof di bokk ci waxtaanu làkk ak identité.

### Transmission

Œuvres ak xalaat yi di dimbali ci denc mémoire ak yokk xam-xamu littérature bu Senegaal.`,
  },
  'birago-diop': {
    titleWo: 'Birago Diop',
    excerptWo: 'Bindkat, poète ak vétérinaire bu Senegaal, xam-xamkat bu oralité africaine.',
    contentWo: `### Jëmmal

Birago Diop mooy vétérinaire, diplomate ak bindkat bu Senegaal. Mu am na solo ci mbind ak oralité africaine.

### Contes ak oralité

Mu bind ak yóbbu ay nettali yu lëkkale ak tradition orale. Contes yi di denc xam-xam ak xel mu ñu yóbbu ci wax.

### Littérature

Poésie ak contesam bokk nañu ci patrimoineu littérature africaine francophone.

### Héritage

Liggeyam di dimbali ci denc ak transmissionu patrimoine oral ak culturel bu Aferik.`,
  },
  'aminata-sow-fall': {
    titleWo: 'Aminata Sow Fall',
    excerptWo: 'Bindkat bu Senegaal, benn ci pionnières yu littérature africaine francophone.',
    contentWo: `### Jëmmal

Aminata Sow Fall mooy bindkat bu Senegaal ak benn ci ay voix yu am solo ci littérature africaine francophone.

### Mbind ak société

Roman yi di seet dundug société, relation yu diggante nit ñi ak ay soppi yu xew.

### Littérature bu jigéen

Liggeyam bokk na ci feeñal voixu jigéen ci littérature africaine.

### Héritage

Œuvres yi di bokk ci patrimoine littéraire bu Senegaal ak Aferik.`,
  },
  'fatou-diome': {
    titleWo: 'Fatou Diome',
    excerptWo: 'Romancière bu Senegaal, xam-xamkat ci mbirum migration ak identité.',
    contentWo: `### Jëmmal

Fatou Diome mooy romancière bu Senegaal. Mbindam di waxtaan ci migration, identité ak expérienceu diaspora.

### Littérature ak migration

Roman yi di nettali yoonu nit ñi diggante Senegaal ak bitim réew, ak ay mbir yu jëm ci identité.

### Diaspora

Liggeyam di jox benn baat ci expérienceu diaspora ak relationu diggante réew ak dëkk yi ñu dem.

### Héritage

Mbindam di bokk ci littérature bu Senegaal ci scène francophone internationale.`,
  },
  'felwine-sarr': {
    titleWo: 'Felwine Sarr',
    excerptWo: 'Économiste, écrivain ak intellectuel bu Senegaal, bokk ci xalaat ci Aferik.',
    contentWo: `### Jëmmal

Felwine Sarr mooy économiste, écrivain ak intellectuel bu Senegaal. Liggeyam lëkkale économie, xalaat ak culture.

### Xalaat ci Aferik

Mbind ak xalaatam di waxtaan ci yoonu Aferik, développement ak placeu savoir.

### Littérature ak culture

Ci mbind, mu di lëkkale xalaat ak nettali ngir seet identité ak aveniru sociétés africaines.

### Transmission

Liggeyu intellectuels yi di dimbali ci yokk waxtaanu xam-xam ak xalaat ci Aferik.`,
  },
  'souleymane-bachir-diagne': {
    titleWo: 'Souleymane Bachir Diagne',
    excerptWo: 'Philosophe ak universitaire bu Senegaal, figure bu xalaat intellectuel africain.',
    contentWo: `### Jëmmal

Souleymane Bachir Diagne mooy philosophe ak universitaire bu Senegaal, te liggeyam bokk na ci xalaat intellectuel africain.

### Philosophie

Gëstu ci philosophieam di lëkkale xalaat, savoir ak histoireu idées.

### Université ak transmission

Liggeyu universitaire di dimbali ci jàngale ak transmissionu xam-xam ci génération yi.

### Rayonnement

Xalaat ak gëstu yi di yokk feeñal contributionsu xamkat yu Senegaal ci monde intellectuel.`,
  },
  'awa-ly': {
    titleWo: 'Awa Ly',
    excerptWo: 'Chanteuse ak auteure-compositrice bu Senegaal, mu lëkkale soul, jazz, pop ak ay influence yu wuute.',
    contentWo: `### Jëmmal

Chanteuse ak auteure-compositrice bu Senegaal, mu lëkkale soul, jazz, pop ak ay influence yu wuute.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'yoro-ndiaye': {
    titleWo: 'Yoro Ndiaye',
    excerptWo: 'Chanteur ak musicien bu Senegaal, bokk ci scène musicale bu contemporain.',
    contentWo: `### Jëmmal

Chanteur ak musicien bu Senegaal, bokk ci scène musicale bu contemporain.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'nuru-kane': {
    titleWo: 'Nuru Kane',
    excerptWo: 'Musicien bu Senegaal, xam-xamkat bu ngoni, lëkkale traditions ouest-africaines ak influences contemporaines.',
    contentWo: `### Jëmmal

Musicien bu Senegaal, xam-xamkat bu ngoni, lëkkale traditions ouest-africaines ak influences contemporaines.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'wasis-diop': {
    titleWo: 'Wasis Diop',
    excerptWo: 'Musicien, compositeur ak cinéaste bu Senegaal, liggeyam lëkkale musique ak cinéma.',
    contentWo: `### Jëmmal

Musicien, compositeur ak cinéaste bu Senegaal, liggeyam lëkkale musique ak cinéma.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'el-hadj-ndiaye': {
    titleWo: 'El Hadj N’Diaye',
    excerptWo: 'Guitariste, chanteur ak poète bu Senegaal, figure bu afro-folk ak afro-blues.',
    contentWo: `### Jëmmal

Guitariste, chanteur ak poète bu Senegaal, figure bu afro-folk ak afro-blues.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'laba-sosseh': {
    titleWo: 'Laba Sosseh',
    excerptWo: 'Chanteur ak musicien sénégambien, figure bu salsa africaine.',
    contentWo: `### Jëmmal

Chanteur ak musicien sénégambien, figure bu salsa africaine.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'titi-ndeye-fatou-tine': {
    titleWo: 'Titi (Ndeye Fatou Tine)',
    excerptWo: 'Choriste bu jëm ci diva bu mbalax, ak benn ci ay voix yu jigéen yu am solo ci musique bu Senegaal.',
    contentWo: `### Jëmmal

Choriste bu jëm ci diva bu mbalax, ak benn ci ay voix yu jigéen yu am solo ci musique bu Senegaal.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'xuman': {
    titleWo: 'Xuman',
    excerptWo: 'Rappeur bu Senegaal, cofondateur du Journal Rappé.',
    contentWo: `### Jëmmal

Rappeur bu Senegaal, cofondateur du Journal Rappé.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'alioune-mbaye-nder': {
    titleWo: 'Alioune Mbaye Nder',
    excerptWo: 'Chanteur bu Senegaal, figure bu mbalax.',
    contentWo: `### Jëmmal

Chanteur bu Senegaal, figure bu mbalax.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'ablaye-cissoko': {
    titleWo: 'Ablaye Cissoko',
    excerptWo: 'Griot ak joueuru kora bu Senegaal, lëkkale tradition musicale ak création contemporaine.',
    contentWo: `### Jëmmal

Griot ak joueuru kora bu Senegaal, lëkkale tradition musicale ak création contemporaine.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'seckou-keita': {
    titleWo: 'Seckou Keita',
    excerptWo: 'Joueuru kora ak musicien bu Senegaal, bokk ci rayonnementu traditions musicales ouest-africaines.',
    contentWo: `### Jëmmal

Joueuru kora ak musicien bu Senegaal, bokk ci rayonnementu traditions musicales ouest-africaines.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'mansour-seck': {
    titleWo: 'Mansour Seck',
    excerptWo: 'Guitariste, chanteur ak compositeur bu Senegaal, figure bu Yéla ak musique pulaar.',
    contentWo: `### Jëmmal

Guitariste, chanteur ak compositeur bu Senegaal, figure bu Yéla ak musique pulaar.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'khar-mbaye-madiaga': {
    titleWo: 'Khar Mbaye Madiaga',
    excerptWo: 'Cantatrice bu Senegaal, figure bu tradition musicale lébou.',
    contentWo: `### Jëmmal

Cantatrice bu Senegaal, figure bu tradition musicale lébou.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'yande-codou-sene': {
    titleWo: 'Yandé Codou Sène',
    excerptWo: 'Grande voix bu tradition musicale sérère, ak figure bu patrimoine musical bu Senegaal.',
    contentWo: `### Jëmmal

Grande voix bu tradition musicale sérère, ak figure bu patrimoine musical bu Senegaal.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'ndiaga-mbaye': {
    titleWo: 'Ndiaga Mbaye',
    excerptWo: 'Griot, auteur-compositeur-interprète bu Senegaal, xam-xamkat ci baat ak parol yu musique.',
    contentWo: `### Jëmmal

Griot, auteur-compositeur-interprète bu Senegaal, xam-xamkat ci baat ak parol yu musique.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'kine-lam': {
    titleWo: 'Kiné Lam',
    excerptWo: 'Chanteuse bu Senegaal, figure bu mbalax traditionnel.',
    contentWo: `### Jëmmal

Chanteuse bu Senegaal, figure bu mbalax traditionnel.

### Musique ak création

Liggeyu artist bi bokk na ci dundug musique bu Senegaal, te di jokkoo ak ay traditions ak formes yu contemporain.

### Patrimoine culturel

Musique di denc baat, mémoire ak xam-xam yu génération yi yóbbu. Artistes yi di dimbali ci transmissionu patrimoine bi.

### Rayonnement

Liggeyu musique yi di yokk feeñal culture bu Senegaal ci réew mi ak bitim réew.`,
  },
  'ousmane-william-mbaye': {
    titleWo: 'Ousmane William Mbaye',
    excerptWo: 'Réalisateur ak documentariste bu Senegaal, liggeyam di contribuw ci mémoire audiovisuelle bu réew mi.',
    contentWo: `### Jëmmal

Réalisateur ak documentariste bu Senegaal, liggeyam di contribuw ci mémoire audiovisuelle bu réew mi.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'thierno-ndiaye-doss': {
    titleWo: 'Thierno Ndiaye Doss',
    excerptWo: 'Comédien bu Senegaal, figure bu cinéma ak théâtre bu réew mi.',
    contentWo: `### Jëmmal

Comédien bu Senegaal, figure bu cinéma ak théâtre bu réew mi.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'awa-sene-sarr': {
    titleWo: 'Awa Sène Sarr',
    excerptWo: 'Comédienne, actrice ak voix bu Senegaal, figure bu théâtre ak cinéma.',
    contentWo: `### Jëmmal

Comédienne, actrice ak voix bu Senegaal, figure bu théâtre ak cinéma.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'douta-seck': {
    titleWo: 'Douta Seck',
    excerptWo: 'Pionnier bu théâtre ak cinéma bu Senegaal, ak parcoursu international.',
    contentWo: `### Jëmmal

Pionnier bu théâtre ak cinéma bu Senegaal, ak parcoursu international.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'alioune-badara-beye': {
    titleWo: 'Alioune Badara Bèye',
    excerptWo: 'Bindkat, dramaturge ak acteur bu am solo ci culture bu Senegaal.',
    contentWo: `### Jëmmal

Bindkat, dramaturge ak acteur bu am solo ci culture bu Senegaal.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'oumar-ndao': {
    titleWo: 'Oumar Ndao',
    excerptWo: 'Metteur en scène ak acteur bu Senegaal, liggeyam di yokk théâtre bu réew mi.',
    contentWo: `### Jëmmal

Metteur en scène ak acteur bu Senegaal, liggeyam di yokk théâtre bu réew mi.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'isseu-niang': {
    titleWo: 'Isseu Niang',
    excerptWo: 'Artiste multidisciplinaire bu Senegaal, bokk ci danse, chant, théâtre ak cinéma.',
    contentWo: `### Jëmmal

Artiste multidisciplinaire bu Senegaal, bokk ci danse, chant, théâtre ak cinéma.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'fatou-cisse': {
    titleWo: 'Fatou Cissé',
    excerptWo: 'Danseuse ak chorégraphe bu Senegaal, bokk ci création bu danse contemporaine.',
    contentWo: `### Jëmmal

Danseuse ak chorégraphe bu Senegaal, bokk ci création bu danse contemporaine.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'feral-benga': {
    titleWo: 'Féral Benga',
    excerptWo: 'Danseur bu Senegaal, xam-xamkat bu scèneu danse ak spectacle.',
    contentWo: `### Jëmmal

Danseur bu Senegaal, xam-xamkat bu scèneu danse ak spectacle.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'moussa-sene-absa': {
    titleWo: 'Moussa Sène Absa',
    excerptWo: 'Cinéaste, peintre ak hommeu théâtre bu Senegaal, artiste multidisciplinaire.',
    contentWo: `### Jëmmal

Cinéaste, peintre ak hommeu théâtre bu Senegaal, artiste multidisciplinaire.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'souleyemane-keita': {
    titleWo: 'Souleymane Keïta',
    excerptWo: 'Artiste peintre bu Senegaal, figure bu peinture abstraite bu réew mi.',
    contentWo: `### Jëmmal

Artiste peintre bu Senegaal, figure bu peinture abstraite bu réew mi.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'mansour-ciss': {
    titleWo: 'Mansour Ciss',
    excerptWo: 'Plasticien bu Senegaal, liggeyam di seet identité, panafricanisme ak création conceptuelle.',
    contentWo: `### Jëmmal

Plasticien bu Senegaal, liggeyam di seet identité, panafricanisme ak création conceptuelle.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'zulu-mbaye': {
    titleWo: 'Zulu Mbaye',
    excerptWo: 'Artiste peintre bu Senegaal, bokk ci scèneu arts plastiques bu contemporain.',
    contentWo: `### Jëmmal

Artiste peintre bu Senegaal, bokk ci scèneu arts plastiques bu contemporain.

### Création

Liggeyu artist bi di bokk ci yëngu-yëngu bu création bu Senegaal, ak ay formes yu mel ni théâtre, cinéma, danse walla arts visuels.

### Culture

Art di jox yoon ngir nettali dund, xalaat ak mémoire. Artistes yi di yokk diversitéu patrimoine culturel.

### Transmission

Spectacle, image ak création di dimbali ci yóbbu xam-xam ak patrimoine ci génération yi ñëw.`,
  },
  'ahmad-faye': {
    titleWo: 'Ahmad Faye',
    excerptWo: 'Athlète bu Senegaal, spécialiste saut en longueur, bokk ci compétitions internationales.',
    contentWo: `### Jëmmal

Athlète bu Senegaal, spécialiste saut en longueur, bokk ci compétitions internationales.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'amath-faye': {
    titleWo: 'Amath Faye',
    excerptWo: 'Athlète bu Senegaal, spécialiste triple saut ak saut en longueur.',
    contentWo: `### Jëmmal

Athlète bu Senegaal, spécialiste triple saut ak saut en longueur.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'combe-seck': {
    titleWo: 'Combé Seck',
    excerptWo: 'Céiste bu Senegaal, bokk ci canoë-kayak de course en ligne.',
    contentWo: `### Jëmmal

Céiste bu Senegaal, bokk ci canoë-kayak de course en ligne.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'edmond-sanka': {
    titleWo: 'Edmond Sanka',
    excerptWo: 'Para-kayakiste bu Senegaal, bokk ci développementu canoë ak para-canoë.',
    contentWo: `### Jëmmal

Para-kayakiste bu Senegaal, bokk ci développementu canoë ak para-canoë.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'brancou-badio': {
    titleWo: 'Brancou Badio',
    excerptWo: 'International bu Senegaal ci basketball, meneur ak capitaineu équipe nationale.',
    contentWo: `### Jëmmal

International bu Senegaal ci basketball, meneur ak capitaineu équipe nationale.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'louis-francois-mendy': {
    titleWo: 'Louis-François Mendy',
    excerptWo: 'Athlète bu Senegaal, spécialiste 110 mètres haies.',
    contentWo: `### Jëmmal

Athlète bu Senegaal, spécialiste 110 mètres haies.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'moussa-niakhate': {
    titleWo: 'Moussa Niakhaté',
    excerptWo: 'Défenseur international bu Senegaal, bokk ci équipe nationale.',
    contentWo: `### Jëmmal

Défenseur international bu Senegaal, bokk ci équipe nationale.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'pape-thiaw': {
    titleWo: 'Pape Thiaw',
    excerptWo: 'Joueur international bu Senegaal, bokk ci génération 2002, toppatoo équipe nationale.',
    contentWo: `### Jëmmal

Joueur international bu Senegaal, bokk ci génération 2002, toppatoo équipe nationale.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'habib-diallo': {
    titleWo: 'Habib Diallo',
    excerptWo: 'Attaquant international bu Senegaal, formé ci Génération Foot ak passé ci football européen.',
    contentWo: `### Jëmmal

Attaquant international bu Senegaal, formé ci Génération Foot ak passé ci football européen.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'saly-sarr': {
    titleWo: 'Saly Sarr',
    excerptWo: 'Triple-sauteuse bu Senegaal, recordwoman nationale ak médaillée mondiale.',
    contentWo: `### Jëmmal

Triple-sauteuse bu Senegaal, recordwoman nationale ak médaillée mondiale.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'aya-traore': {
    titleWo: 'Aya Traoré',
    excerptWo: 'Basketteuse bu Senegaal, internationale ak ancienne joueuse bu haut niveau.',
    contentWo: `### Jëmmal

Basketteuse bu Senegaal, internationale ak ancienne joueuse bu haut niveau.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'isabelle-sambou': {
    titleWo: 'Isabelle Sambou',
    excerptWo: 'Lutteuse bu Senegaal, figure bu lutte féminine africaine ak olympienne.',
    contentWo: `### Jëmmal

Lutteuse bu Senegaal, figure bu lutte féminine africaine ak olympienne.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'mame-maty-mbengue': {
    titleWo: 'Mame Maty Mbengue',
    excerptWo: 'Légende bu basketball féminin bu Senegaal, figure historiqueu équipe nationale.',
    contentWo: `### Jëmmal

Légende bu basketball féminin bu Senegaal, figure historiqueu équipe nationale.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'adama-diatta': {
    titleWo: 'Adama Diatta',
    excerptWo: 'Lutteur bu Senegaal, spécialiste lutte libre ak participant ci compétitions internationales.',
    contentWo: `### Jëmmal

Lutteur bu Senegaal, spécialiste lutte libre ak participant ci compétitions internationales.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'gorgui-dieng': {
    titleWo: 'Gorgui Dieng',
    excerptWo: 'Basketteur bu Senegaal, joueur bu NBA ak figure bu basketball sénégalais.',
    contentWo: `### Jëmmal

Basketteur bu Senegaal, joueur bu NBA ak figure bu basketball sénégalais.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'battling-siki': {
    titleWo: 'Battling Siki',
    excerptWo: 'Boxeur bu Sénégal, champion du monde ci 1922, figure historiqueu boxe africaine.',
    contentWo: `### Jëmmal

Boxeur bu Sénégal, champion du monde ci 1922, figure historiqueu boxe africaine.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'iba-mar-diop': {
    titleWo: 'Iba Mar Diop',
    excerptWo: 'Pionnier bu sport bu Senegaal, te stadeu Dakar tudd na ci turam.',
    contentWo: `### Jëmmal

Pionnier bu sport bu Senegaal, te stadeu Dakar tudd na ci turam.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'amy-mbacke-thiam': {
    titleWo: 'Amy Mbacké Thiam',
    excerptWo: 'Athlète bu Senegaal, championne du monde du 400 mètres ci 2001.',
    contentWo: `### Jëmmal

Athlète bu Senegaal, championne du monde du 400 mètres ci 2001.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'oumy-diop': {
    titleWo: 'Oumy Diop',
    excerptWo: 'Nageuse bu Senegaal, championne d’Afrique ak figure bu natation nationale.',
    contentWo: `### Jëmmal

Nageuse bu Senegaal, championne d’Afrique ak figure bu natation nationale.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'henri-camara': {
    titleWo: 'Henri Camara',
    excerptWo: 'Footballeur international bu Senegaal, figure bu équipe nationale ci génération 2002.',
    contentWo: `### Jëmmal

Footballeur international bu Senegaal, figure bu équipe nationale ci génération 2002.

### Sport

Parcoursu sportif bi bokk na ci histoireu sport bu Senegaal, ci discipline bi ak compétitions yi.

### Transmission

Athlètes yi di nekk ay exempleu travail, préparation ak transmissionu expérience ci génération yi.

### Rayonnement

Sport bu haut niveau di yokk feeñal Senegaal ci compétitions africaines ak internationales.`,
  },
  'colle-ardo-sow': {
    titleWo: 'Collé Ardo Sow',
    excerptWo: 'Styliste bu Senegaal, pionnière bu pagne tissé ak mode bu réew mi.',
    contentWo: `### Jëmmal

Styliste bu Senegaal, pionnière bu pagne tissé ak mode bu réew mi.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'diouma-dieng-diakhate': {
    titleWo: 'Diouma Dieng Diakhaté',
    excerptWo: 'Styliste bu Senegaal, fondatrice bu Shalimar Couture.',
    contentWo: `### Jëmmal

Styliste bu Senegaal, fondatrice bu Shalimar Couture.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'sarah-diouf': {
    titleWo: 'Sarah Diouf',
    excerptWo: 'Entrepreneure ak créatrice de mode bu Senegaal, fondatrice bu Tongoro.',
    contentWo: `### Jëmmal

Entrepreneure ak créatrice de mode bu Senegaal, fondatrice bu Tongoro.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'adama-paris': {
    titleWo: 'Adama Paris',
    excerptWo: 'Styliste ak entrepreneure bu Senegaal, fondatrice bu Dakar Fashion Week.',
    contentWo: `### Jëmmal

Styliste ak entrepreneure bu Senegaal, fondatrice bu Dakar Fashion Week.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'lamine-diasse': {
    titleWo: 'Lamine Diassé',
    excerptWo: 'Couturier bu Senegaal, spécialisteu costume sur-mesure.',
    contentWo: `### Jëmmal

Couturier bu Senegaal, spécialisteu costume sur-mesure.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'oumou-sy': {
    titleWo: 'Oumou Sy',
    excerptWo: 'Styliste ak costumière bu Senegaal, figure bu couture ak création artistique.',
    contentWo: `### Jëmmal

Styliste ak costumière bu Senegaal, figure bu couture ak création artistique.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'nzinga-biegueng-mboup': {
    titleWo: 'Nzinga Biegueng Mboup',
    excerptWo: 'Architecte bu Senegaal ak cofondatrice bu Worofila.',
    contentWo: `### Jëmmal

Architecte bu Senegaal ak cofondatrice bu Worofila.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'ousmane-mbaye': {
    titleWo: 'Ousmane Mbaye',
    excerptWo: 'Designer ak sculpteur bu Senegaal, jëfandikoo métal recyclé ci création.',
    contentWo: `### Jëmmal

Designer ak sculpteur bu Senegaal, jëfandikoo métal recyclé ci création.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'tidiane-deme': {
    titleWo: 'Tidiane Dème',
    excerptWo: 'Entrepreneur ak acteur bu numérique bu Senegaal, bokk ci innovation technologique.',
    contentWo: `### Jëmmal

Entrepreneur ak acteur bu numérique bu Senegaal, bokk ci innovation technologique.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'pape-amadou-seck': {
    titleWo: 'Pape Amadou Seck',
    excerptWo: 'Acteur ak créateur bu Senegaal, bokk ci spectacle vivant.',
    contentWo: `### Jëmmal

Acteur ak créateur bu Senegaal, bokk ci spectacle vivant.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'mamadou-diaw': {
    titleWo: 'Mamadou Diaw',
    excerptWo: 'Artiste bu Senegaal, bokk ci création contemporaine ak scène culturelle.',
    contentWo: `### Jëmmal

Artiste bu Senegaal, bokk ci création contemporaine ak scène culturelle.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
  'aminata-zaaria': {
    titleWo: 'Aminata Zaaria',
    excerptWo: 'Artiste ak créatrice bu Senegaal, bokk ci création contemporaine ak valorisationu patrimoine.',
    contentWo: `### Jëmmal

Artiste ak créatrice bu Senegaal, bokk ci création contemporaine ak valorisationu patrimoine.

### Création

Liggeyu personnalité bi di bokk ci création bu Senegaal, ci mode, design, spectacle walla arts.

### Culture ak territoire

Création di lëkkale xalaat, savoir-faire ak identitéu culturel bu réew mi.

### Transmission

Liggeyu créateurs yi di dimbali ci yokk savoir-faire ak feeñal créativitéu Senegaal.`,
  },
};