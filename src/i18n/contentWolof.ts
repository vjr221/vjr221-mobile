import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

const CONTENT_WO: Record<string, WolofContent> = {
'region-de-dakar': {
    titleWo: 'Diiwaanu Dakar',
    excerptWo: 'Diiwaan bu gën a ndaw ci réew mi ci superficie, waaye Dakar mooy dëkk bu mag bu politik, ekonom ak administrasyon.',
    contentWo: `### Jëmmal

Diiwaanu Dakar mooy diiwaan bu gën a ndaw ci Senegaal ci kaw superficie, waaye mu am solo lool ci mbirum politik, ekonom, administrasyon ak way-dëkk. Dakar, dëkk bu mag bu réew mi, mooy benn ci péninsule Cap-Vert, ci wetug géej gi.

### Géeographie

Dakar nekk na ci peninsule Cap-Vert, bérab bu gën a sori ci peninsule Afrig ci sowwu. Diiwaan bi dafa aju ci Atlantique ci norte, sowwu ak sud, te Thiès mooy ci penku.

### Taariix

Taariixu Dakar dafa lëkkale ak Cap-Vert ak Gorée. Gorée bokk na ci bérab yu am solo ci xelal nit ñi ci mbirum traite négrière atlantique. Ci finu XIXe siècle, Dakar tànn nañu ko ni capitale bu AOF. Gannaaw indipendance ci 1960, Dakar des na capitale bu République du Senegaal.

### Toppatoo réew mi

Diiwaan bi am na juróom benn départements : Dakar, Guédiawaye, Pikine, Keur Massar ak Rufisque. Ñu ngi boole communes ak quartiers yu bare ci métropole bi.

### Way-dëkk ak ekonom

Dakar mooy diiwaan bu gën a am way-dëkk ci Senegaal. Commerce, services, banques, assurances, télécommunications, industrie, numérique ak BTP bokk nañu ci sektëër yu am solo.

### Transport ak infrastructures

Port autonome de Dakar mooy hub logistique bu am solo ci Afrig Oksidan. TER boole Dakar ak Diamniadio ak Aéroport International Blaise Diagne. Autoroutes ak yeneen yoon yu mag bokk nañu ci réseau transport bi.

### Jàng ak wér-gu-yaram

Dakar dafa dajale universités, écoles ak instituts yu bare. Ci wér-gu-yaram itam, hôpitaux yu mag yi nekk nañu ci diiwaan bi.

### Aada ak tourisme

Dakar mooy benn ci kër yu mag ci aada Senegaal. Mbalax, jazz, hip-hop, musik yu aada, arts, peinture, sculpture, photographie ak festivals di dund ci dëkk bi. Gorée, Monument de la Renaissance Africaine, Corniche, Pointe des Almadies ak Village des Arts bokk nañu ci bérab yi gën a xam.
`,
  },
'region-de-ziguinchor': {
    titleWo: 'Diiwaanu Ziguinchor',
    excerptWo: 'Xolum Casamance ci mbirum taariix, ekonom ak aada, diiwaan bu fees ak mangrove, tourism ak wuute culture.',
    contentWo: `### Jëmmal

Diiwaanu Ziguinchor nekk na ci penku-sowwu Senegaal. Mooy xolum Casamance ci mbirum taariix, ekonom ak aada. Fleuve Casamance, mangrove yi, tourisme ak wuute askan ak làkk yi jox nañu diiwaan bi melokaan bu boppam.

### Géeographie

Diiwaan bi nekk na ci sudu Senegaal. Gambia mooy ci norte, Sédhiou ci penku, Guinée-Bissau ci sud, Atlantique ci sowwu. Ziguinchor mooy chef-lieu.

### Taariix ak aada

Ziguinchor am na taariix bu fees ak échanges, commerce ak influence yu jóge ci Afrig ak Europe. Casamance dafa fees ak aada yu wuute, rawatina ci askanu Diola, Mandingue, Balante, Mancagne, Peul ak Wolof.

### Toppatoo

Diiwaan bi am na ñetti départements : Ziguinchor, Oussouye ak Bignona. Communes ak villages yi nekk ci diiwaan bi dafa bokk ci réseau territorial bu Casamance.

### Ekonom

Agriculture, pêche, commerce ak tourisme bokk nañu ci sektëër yu am solo. Suuf, ndox ak mangrove yi jox nañu ay ressources yu am solo ci dundug askan wi.

### Aada ak tourisme

Ziguinchor mooy bérab bu am solo ci aada Casamance. Fecc, musik, liggéey-loxo, rites initiatiques ak architecture traditionnelle bokk nañu ci patrimoine bi. Mangrove yi ak paysages yu géej ak fleuve di yokk solo tourism bi.
`,
  },
'le-lac-rose': {
    titleWo: 'Lac Rose',
    excerptWo: 'Lac Retba, bérab bu am solo ci tourisme ak patrimoine naturel Senegaal, xam ko ci ndoxam bu mën a am melo rose.',
    contentWo: `### Jëmmal

Lac Rose, walla Lac Retba, mooy benn ci bérab yu naturel yi gën a xam ci Senegaal. Nekk na ci wetug Dakar, te dafa am solo ci tourisme ak patrimoine naturel réew mi.

### Lu tax ñuy woowe ko Lac Rose?

Melo rose bi mën na feeñ ci jamono yi, rawatina bu tàng bi tar te ndox mi am salinité bu rëy. Micro-algue Dunaliella salina dafay joxe pigment bu mën a soppi melo ndox mi.

### Sel

Lac bi am salinité bu rëy. Jëfandikoo sel mooy liggéey bu yàgg ci bérab bi. Récolteurs yi di génn sel ci suufu lac bi, denc ko ci pirogue yi te yóbbu ko ci rëŋŋ.

### Tourisme

Dunes, ndoxum sel, paysages ak pirogues yu fees ak sel def nañu lac bi bérab bu ñuy seetaan. Lac Rose itam bokk na ci xelal nit ñi ci arrivée bu rallye Paris-Dakar ci jamono yu weesu.

### Aar environnement

Lac Rose am na ay défis yu aju ci soppi gu climat, pression nit ñi ak changement ci écosystème. Aar bérab bi mooy tax patrimoine naturel bi mën a dund ak jariñ askan wi.
`,
  },
'l-ile-de-goree': {
    titleWo: 'Dunu Gorée',
    excerptWo: 'Bérab bu xelal nit ñi, patrimoine ak jëfandikoo aada, ci géeju Dakar, bu am solo ci taariixu traite négrière atlantique.',
    contentWo: `### Jëmmal

Dunu Gorée nekk na ci géeju Dakar. Mooy benn ci bérab yu taariix yu gën a xam ci Senegaal ak Afrig. Gorée am na solo lool ci xelal nit ñi ci traite négrière atlantique.

### Taariix

Dunu bi am na ay occupations européennes yu wute ci ay jamono : Portugais, Néerlandais, Anglais ak Français. Positionam ci géej defoon na ko bérab bu am solo ci commerce maritime.

### Mémoire

Ci ay siècle yu weesu, Gorée bokkoon na ci réseau traite des esclaves. Goor ak jigéen ak xale ñu jële woon leen ci géej yi ci Afrig, yóbbu leen ci Amérique. Tey, Gorée mooy bérab bu xelal nit ñi ci tragédie boobu.

### Patrimoine ak UNESCO

Architecture bi, ru yi, kër yi ak bérab yu taariix yi def nañu Gorée bérab bu am solo. Dunu bi bind nañu ko ci patrimoine mondial UNESCO.

### Aada ak tourisme

Gorée accueille artistes, artisans ak musiciens. Way-dëkk ak gan yi mën nañu seet musées, bérab yu taariix, ru yi ak paysages yu géej. Dunu bi joxe itam message bu aju ci xelal, dialogue ak bokkandoo diggante askan yi.
`,
  },
thiakry: {
    titleWo: 'Thiakry',
    excerptWo: 'Dessert ak naan bu ñu defee ak millet, nekk ci lekk yu gën a siiw ci Senegaal.',
    contentWo: `### Jëmmal

Thiakry mooy lekk bu aada ci Senegaal, diggante dessert ak naan. Ñu koy def ak couscousu millet ak sowwu, te nekk ci lekk yu neex yi ñu gën a bëgg ci réew mi.

### Fu mu jóge ak turam

Tur bi « thiakry » (tiakry walla chakery itam) jóge ci baat bu wolof « cakri ». Ci nettali yu aada, lekk bi bokk na ci aada yu Peul (Halpulaar) ak Sereer ci Senegaal, ñooñu dëkkandoo woon ba noppi leeral ko ci yeneen réewi Afrig Oksidan. Ci réew yi, am na ay tur yu mel ni « dégué » ci Côte d’Ivoire, Mali ak Guinée, walla « bodé » ci ay Peul.

### Li ñu koy def

- Couscousu millet
- Sowwu
- Yaourt
- Sukkar
- Vanille, bu recette bi so ko

### Ni ñu koy def

Ñu di def millet bi ci ay ndaw ndaw mbubbaay, topp ñu ko togg ci vapeur, ba noppi boole ko ak sowwu walla yaourt bu ñu suukaree. Mën nañu ci yokk raisins secs walla vanille.

### Ni ñu koy lekk

Ñu koy serve bu sedd, rawatina ci bés yu màggal ak ay xew-xew. Waaye ñu koy lekk itam bés bu nekk, rawatina ci jamono ju tàng.

### Millet, ndoxum dund gu yàgg

Millet mooy dugub bu ñu doon góor-góorlu ci Afrig Oksidan lu yàgg. Dafa bokk ci dugub yi ñuy gën a jëfandikoo ci lekk yu aada ci Senegaal, laata riz di gën a siiw. Thiakry dafay wéyale xam-xam ak liggéeyu dugub boobu.

### Siiw na ci Senegaal

Thiakry siiw na ci màggal ak ay xew-xew, rawatina ci ndaje yu njaboot, céet ak ngénte. Ñu koy jox ci toppatoo lekk walla ni naan bu sedd. `,
  },
thiou: {
    titleWo: 'Thiou',
    excerptWo: 'Ragoutu Senegaal bu bés bu nekk, ñu gën a xam ko ak yapp walla jën, te ñu koy lekk ak ceeb.',
    contentWo: `### Jëmmal

Thiou mooy ragoutu aada ci Senegaal. Mën nañu ko def ak yapp (thiou yapp) walla jën (thiou dieune / thiou diw tir), ñu togg ko ak sosu tomate bu fees ak legum, te ñu koy lekk ak ceeb weex. Mooy bokk ci lekk yi njaboot yu bare ci Senegaal di def lu ëpp bés bu nekk.

### Fu mu jóge ak ay xeet

Baatu « thiou » ci wolof tekki na ragout. Am na ay xeet yu mel ni thiou yapp ak yapp, thiou dieune ak jën bu ñu fritt, ak thiou boulette bu ñu def ak boulettesu jën. Am na itam thiou tir, foo xam ne ñu mën koo def ak diwlin palmi rouj, mu jox lekk bi goût bu gën a tar.

### Li ñu gën a jëfandikoo

- Yapp (wëy walla xar) walla jën weex
- Tomate fresh ak tomate bu ñu concentree
- Legum yu jamono: pom de terre, carotte, chou, patate douce, aubergine
- Soblé, garlic ak diwlin
- Ceeb weex

### Ni ñu koy def

Ñu di assaisonne yapp walla jën bi, topp ñu ko jàpp ci safara ndank-ndank, ba noppi togg ko ci sosu tomate ak soblé. Legum yi ñu leen di yokk ndànk-ndànk, ci ni ñu leen di wara togg, ba sos bi nekk bu neex te mën a topp ceeb weex bi ñu def ci wet.

### Bérab bi mu am ci lekk bu bés

Ci biir lekk yu am solo ak yu ñuy def ci màggal, mel ni thiéboudienne, thiou mooy lekk bu bés bu nekk. Ñu ko bëgg ndax dafa yomb te mën nañu ko soppi, ku nekk def ko ak legum yi am ci jamono ak ni njaboot bi bëgg a lekk.`,
  },
pastels: {
    titleWo: 'Pastels',
    excerptWo: 'Pastels mooy lekk bu ñu fritt, ñu koy fees ak jën walla yapp, te nekk ci lekk yu gën a siiw ci rue yi ci Senegaal.',
    contentWo: `### Jëmmal

Pastels mooy ndaw ndaw chaussons yu ñu fritt, ñu koy fees ak jën walla yapp. Bokk nañu ci lekk yi gën a siiw ci cuisine de rue ci Senegaal.

### Fu mu jóge

Tur bi ak xalaat bi aju na ci ay influence culinaires yu jóge ci péninsule ibérique ak Cap-Vert. Aada ak lekk yi jaar nañu ci géej yi ci Afrig Oksidan, rawatina ci Casamance ak ay comptoir yu njëkk.

### Ni ñu koy def

Ñu mën a def farce ak jën bu ñu xàcc walla yapp bu ñu xotti, ñu boole ko ak soblé ak épices. Ñu denc farce bi ci pâte bu xóotul, ñu bëgg ko ci melokaan triangle walla croissant, ba noppi fritt ko ba mu am melo bu xonq te neex.

### Li ñu koy lekk ak

Ñu gën a serve pastels ak:
- Sosu tomate bu am piment
- Soblé bu ñu marine

### Bérab bi mu am ci aada

Pastels bokk nañu ci lekk yi gën a xam ci rue yi ci Senegaal. Ñu leen di jaay ci marché yi, ci xew-xew ak ci màggal yu am ci quartier yi.

### Lu tax nga wara xam pastels

Pastels dafay jox nit ku bëgg a xam Senegaal yoon wu yomb ngir seet lekk bu am solo ci cuisine de rue, xam ay influence yu jóge ci géej yi, te fees ak goût ak croustillant.`,
  },
'patrimoine-culturel-immateriel-du-senegal-inventaire-expressions': {
    titleWo: 'Ndeyjoor ak aada yu dul jàmm ci Senegaal — lim ak wuute expression yi',
    excerptWo: 'Patrimoine culturel immatériel dafay may nu xam Senegaal jaarale ci aada, xam-xam ak liggéey yu nit ñi di jàppale te di jële ci maam ba ci doom.',
    contentWo: `### Lan mooy patrimoine culturel immatériel?

Mu ëmb nettali yu gëstu, jëf yu askan wi, ay rituel, màggal, xam-xam yu aju ci àdduna ak nature, xam-xam liggéeyu loxo ak expression yu art ak culture yi ñuy jàppale ci jamono yi.

### Aada bi bokk ci réew mi

Ci Senegaal, expression yii dañuy aju ci terroir ak askan yi. Ñu ngi leen gis ci làkk yi, cérémonies yi, musik, fecc, ni xam-xam di jaar, liggéeyu loxo ak ni nit ñi di bokkandoo. Wuute bi dafa ànd ak wuute wu 14 régions yi.

### Lim bu réew mi di yokk

Ci 2021, ministère bi yor Culture wax na ne 59 expression yu bees yokku ci lim bu patrimoine culturel immatériel bu réew mi, ak bokk-bokkute bu askan yi yor aada yooyu ci 14 régions yi. UNESCO dimbali woon na ci liggéey boobu.

### Ay misaal yu ñu bind

- Tuuru Maam Njaré: rituel bu aju ci Lébou yu Yoff ak seen jokkoo ak géej.
- Xaxaar: cérémonie bu mbégte ngir teral jigéen ju bees ci aada wolof.
- Prim: fecc bu aju ci lutte yu Sereer.
- Kankourang: rituelu initiation bu Manding, bu ñu bind itam ci patrimoine VJR 221.
- Kora: instrument ak aada musik bu griot yi Manding, rawatina ci Casamance.

### Aar patrimoine bu dund

Aar patrimoine immatériel du ko rekk denc ay mbir. War nañu itam dimbali askan yi yor ko, tax xam-xam di jaar diggante maam ak doom, def documentation, gëstu, jàngale ak jëfandikoo aada bi ci dund.

### VJR 221 ni atlasu culture

VJR 221 bëgg na bind expression yii te lëkkale leen ak seen terroir, askan, làkk, nit ñu am solo, xew-xew ak bérab yi ñuy def leen. Bu expression amee xibaar bu doy, war nañu sosal ko fiche bu boppam ngir bañ a def doublon te aar xóotinu encyclopédie bi.`,
  },
'le-conte-au-senegal-oralite-transmission-et-patrimoine-vivant': { titleWo: 'Nettali ci Senegaal: wax, jàngale ak patrimoine bu dund', excerptWo: 'Nettali mooy yoon wu mag ngir jaarale xam-xam, aada ak xelal diggante maam ak doom.', contentWo: `### Jëmmal

Nettali bokk na ci patrimoine bu dund ci Senegaal. Ci jamono yu weesu, mag ñi di nettali ci penku nit ñi, ci guddi walla ci ndaje, ngir jàngale, xelal ak neexal.

### Wax ak xam-xam

Nettali dafay jaarale ay leçon ci dund, aada, jikko ak jokkoo ak askan. Làkk yi di am solo ci yoon wi, ndax wax ak dégg mooy alal bu mag.

### Transmission

Jàngale nettali ci ndaw yi mën na tax aada yi bañ a réer. Tey, école, radio, télévision ak numérique mën nañu dimbali ci denc ak yégle nettali yi.

### Patrimoine bu dund

Nettali du mbind rekk. Mooy performance, baat, mouvement, humour ak jokkoo ak ñi déglu. Loolu moo tax mu nekk patrimoine bu dund.`, },
'lartisanat-traditionnel-senegalais': { titleWo: 'Liggéeyu loxo bu aada ci Senegaal', excerptWo: 'Liggéeyu loxo dafa bokk ci aada, ekonom ak patrimoine Senegaal, ak xam-xam yu ñuy jële ci maam ba ci doom.', contentWo: `### Jëmmal

Liggéeyu loxo bu aada mooy benn ci mbir yi gën a wone aada Senegaal. Xam-xam yi di jaar diggante maam ak doom ci liggéeyu loxo, melokaan ak jëfandikoo mbir yu jóge ci réew mi.

### Ay xeet

Tëggu métal, teg, rëdd, tissage, tegal, defar ay mbir ci ndoxum garab, cuir ak yeneen matières bokk nañu ci artisanat bi. Régions yi am nañu seen melokaan ak seen xam-xam.

### Ekonom ak liggéey

Artisanat dafay jox ay revenus ak liggéey. Marchés, foires, tourisme ak vente ci internet mën nañu yokk séddoo ak gan-gësté.

### Aar xam-xam

Aar artisanat mooy aar itam xam-xam. Jàngale ndaw yi, dimbali artisans ak wone seen liggéey ci yoon wu dëgër mën na tax patrimoine bi dund.`, },
'tourisme-memoire-senegal': { titleWo: 'Turis ak xelal ci Senegaal', excerptWo: 'Bérab ak taariix yu may nit ñi xelal ci mbir yu am solo ci taariixu Senegaal.', contentWo: `### Jëmmal

Turis ak xelal mooy seet bérab yi ak patrimoines yi ñuy lëkkale ak taariix, mémoire ak xew-xew yu am solo. Ci Senegaal, bérab yooyu mën nañu dimbali nit ñi xam lu weesu ak jàng ci moom.

### Gorée ak mémoire

Gorée bokk na ci bérab yi gën a am solo ci mémoire bu traite négrière atlantique. Musées, architecture ak bérab yu taariix yi di jox nit ñi xelal ak xam-xam.

### Jàng ci taariix

Turis ak mémoire du seet rekk. Mooy itam jàng, dëggal ay témoignage, aar patrimoine ak wone xew-xew yi ci yoon wu wér.`, },
'tourisme-communautaire-senegal': { titleWo: 'Turis bu askan wi ci Senegaal', excerptWo: 'Turis bu askan wi dafay boole gan ak askan yi ci dund, aada ak yokkute local.', contentWo: `### Jëmmal

Turis bu askan wi mooy yoonu gan-gësté bu askan yi ci bérab bi bokk ci jëfandikoo ak jariñu tourisme. Ci Senegaal, mooy may gan yi gis aada, lekk, liggéeyu loxo, nature ak dundug dëkk yi ci yoon wu bokk ak askan wi.

### Askan ak yokkute local

Jariñ bi war na dem ba askan yi. Hébergement, restauration, guide, artisanat ak transport mën nañu sos ay liggéey te yokk xaalisu dëkk yi.

### Aada ak nature

Turis bu askan wi dafay boole seet ak xam. Gan yi mën nañu bokk ci yégle aada, togg, liggéeyu loxo, xew-xew ak seet nature.

### Aar ak toppatoo

Bérab bi war nañu ko aar, te gan-gësté war nañu topp aada ak environnement. Jokkoo diggante askan ak gan mooy tax tourisme bi mën a dund lu yàgg.`, },
'tourisme-de-la-region-de-dakar-cap-vert-patrimoine-urbain-et-littoral': { titleWo: 'Turis ci Diiwaanu Dakar: Cap-Vert, patrimoine dëkk ak géej', excerptWo: 'Dakar dafa boole patrimoine urbain, géej, Gorée, aada ak bérab yu am solo ci tourisme.', contentWo: `### Jëmmal

Diiwaanu Dakar dafa boole patrimoine urbain, géej, taariix ak aada. Cap-Vert mooy bérab bu am solo ci seet Senegaal.

### Bérab yu am solo

Gorée, Monument de la Renaissance Africaine, Corniche, Pointe des Almadies ak Village des Arts bokk nañu ci bérab yi gan yi gën a seet. Benn-benn ci bérab yii am na seen taariix ak seen jëmmal.

### Aada ak dëkk

Dakar mooy kër yu bare ci musik, arts ak festivals. Mbalax, jazz, hip-hop, peinture, sculpture ak photographie di yokk melokaanu tourisme bi.

### Géej ak environnement

Littoral bi am na solo ci dund ak tourisme. Aar géej, beaches ak ecosystems yi mooy défi bu am solo ngir tourisme bu yàgg.`, },
'sebbe-koliyabe-tradition-culturelle-du-fouta': { titleWo: 'Sebbe Koliyabe: aada bu Fouta', excerptWo: 'Sebbe Koliyabe di wone aada ak patrimoine bu Fouta, ak xam-xam yu jaar ci maam yi.', contentWo: `### Jëmmal

Sebbe Koliyabe bokk na ci expression yu culture bu Fouta. Mu ngi wone ni aada, jikko ak xam-xam di jaar ci jamono yi.

### Transmission

Mag ñi ak askan wi di jàppale ci denc ak wone patrimoine bi. Nettali, cérémonies, musique ak yeneen jëf yu aada mën nañu nekk ci transmission bi.

### Diversité

Fouta am na diversité bu réy ci làkk, aada ak jikko. Expression yu mel ni Sebbe Koliyabe di yokk xam-xam ci diversité bu patrimoine Senegaal.`, },
'keur-simbara': { titleWo: 'Keur Simbara', excerptWo: 'Bérab bu wone aada ak patrimoine bu dëkk, ci biir diversité culturelle bu Senegaal.', contentWo: `### Jëmmal

Keur Simbara bokk na ci bérab yi mën a wone aada, taariix ak dundug askan ci Senegaal. Bérab yi mel ni kii di dimbali nit ñi xam patrimoine ci contexte bi mu dund.

### Aada ak askan

Dundug dëkk, jokkoo diggante njaboot yi, aada ak xam-xam yi di jox bérab bi solo. Ñu war leen a denc ak wone leen ci ndaw yi.

### Patrimoine bu dund

Patrimoine du nekk ci kër ak bérab rekk. Mu ngi itam ci wax, liggéey, lekk, màggal ak jëf yi ñuy def ci bés bu nekk.`, },
'fondes': { titleWo: 'Fondé', excerptWo: 'Fondé mooy lekk bu aada bu ñuy def ci cereales, ak yoon yu wuute ci régions yi.', contentWo: `### Jëmmal

Fondé mooy benn ci lekk yu aada yu aju ci cereales. Ci Senegaal, am na ay xeet yu wuute ci ni ñuy def ko ak ni ñuy lekk ko.

### Cereales ak préparation

Mil walla yeneen cereales mën nañu leen a jëfandikoo ci préparation bi. Ñu mën a boole ko ak meew, sucre, lait caillé walla yeneen ingrédients ci ni aada bi di ko jox.

### Bérab bi mu am ci aada

Fondé bokk na ci lekk yu ñuy def ci njaboot ak ci ay ndaje. Recipes yi di jaar ci maam ba ci doom, te wuute bi wone na diversité gastronomique bu Senegaal.`, },
'jus-et-boissons-traditionnelles-du-senegal': { titleWo: 'Jus ak naan yu aada ci Senegaal', excerptWo: 'Bissap, bouye, ditakh ak yeneen naan yu aada bokk nañu ci lekk ak dundug Senegaal.', contentWo: `### Jëmmal

Senegaal am na naan yu aada yu bare. Ñu ngi boole fruits, graines, feuilles ak yeneen produits yu naturel ngir def ay boissons yu ñuy naan ci bés bu nekk ak ci màggal.

### Bissap

Bissap ñu koy def ak fleurs d’hibiscus. Mën nañu ko naan bu sedd, ak sucre ak parfois aromates. Mooy naan bu siiw lool ci Senegaal.

### Bouye ak ditakh

Bouye, bu jóge ci fruitu baobab, ak ditakh bokk nañu ci boissons yi ñu gën a xam. Ñu mën leen a defar ci yoon yu wuute ci ni njaboot yi di ko def.

### Aada ak économie

Boissons yii bokk nañu ci hospitalité ak gastronomie. Fruits ak produits yu ñuy jëfandikoo mën nañu itam jox ay opportunités ci transformation ak commerce local.`, },
'gastronomie-du-fouta-toro-cereales-lait-et-produits-du-fleuve': { titleWo: 'Gastronomi bu Fouta-Toro: cereales, meew ak produits yu fleuve', excerptWo: 'Lekk bu Fouta-Toro dafa aju ci cereales, meew, produits yu fleuve ak xam-xam yu aada.', contentWo: `### Jëmmal

Fouta-Toro am na gastronomie bu aju ci cereales, meew ak ressources yu fleuve Sénégal. Lekki yi bokk nañu ci dundug askan wi ak aada yi.

### Cereales

Mil, sorgho ak yeneen cereales bokk nañu ci lekk yi. Ñu mën leen a defar ci xam-xam yu wuute, ak meew walla yeneen ingrédients.

### Meew ak produits yu fleuve

Meew ak produits yu jóge ci fleuve ak mbey yi di yokk wuute lekk yi. Pêche ak élevage itam bokk nañu ci économie local.

### Transmission

Recipes yi di jaar ci njaboot yi. Denc leen ak wone leen ci ndaw yi mooy aar patrimoine gastronomique bu Fouta-Toro.`, },
'gastronomie-de-haute-casamance-produits-agricoles-riz-et-traditions': { titleWo: 'Gastronomi bu Haute-Casamance: mbey, ceeb ak aada', excerptWo: 'Lekk ak aada yu Haute-Casamance, ak ceeb, produits yu mbey ak xam-xam yu jaar ci maam ba ci doom.', contentWo: `### Jëmmal

Gastronomi bu Haute-Casamance dafa lëkkale ak suuf, mbey, ndox ak aada yu askan yi. Ceeb, légumes, fruits ak yeneen produits yu dëkk bi bokk nañu ci lekk yi.

### Ceeb ak mbey

Riz am na solo lool ci dund ak mbey ci Casamance. Askani yi di def ay xeet yu bare ci lekk, te ñuy yokk ko ak légumes, jën walla yapp ci ni aada bi di ko def.

### Aada ak xam-xam

Ni ñuy togg, denc ak séddoo lekk yi mooy xam-xam bu jaar ci maam yi. Mbooloo njaboot ak ndaje yi di yokk solo lekk bi.

### Ressources local

Agriculture, jardinage ak produits yu dëkk bi mën nañu jox ay revenus te dimbali souveraineté alimentaire. Aar suuf ak ndox mooy benn ci défi yi.`, },
'commune-des-hlm': { titleWo: 'Kominu HLM', excerptWo: 'Komin bu nekk ci agglomération Dakar, ci biir dëkk yu am solo ci dundug métropole bi.', contentWo: `### Jëmmal

Kominu HLM bokk na ci agglomération Dakar. Mooy territoire urbain bu fees ak way-dëkk, commerce, services ak activités yu bés bu nekk.

### Dund ak services

Kër, écoles, commerces, services ak transport bokk nañu ci dundug komin bi. Jëmmal bi lëkkale na ak yokkute Dakar ak quartiers yi ci wetu.

### Askan ak identité

Ni askan yi di dund, di liggéey ak di bokkandoo ci quartier yi jox komin bi identité bu boppam. Aada ak initiatives locales mën nañu yokk mbooloo.`, },
'cap-skirring': { titleWo: 'Cap Skirring', excerptWo: 'Bérab bu géej ci Casamance, xam ko ci plages, nature ak tourisme.', contentWo: `### Jëmmal

Cap Skirring nekk na ci Casamance, ci wetug Atlantique. Bérab bi xam nañu ko ci plages yu neex, nature ak tourisme.

### Géej ak nature

Plages yi, cocotiers, mangrove ak paysages yu Casamance di jox bérab bi melokaan bu am solo. Gan yi mën nañu seet géej, nature ak dundug dëkk.

### Tourisme

Hébergement, restauration, artisanat ak activités yu géej bokk nañu ci économie touristique. Jokkoo ak askan wi mooy benn ci solo yi ngir tourisme bi am jariñ.

### Aar bérab bi

Littoral ak ecosystems yi war nañu leen a aar. Développement bu tourisme war na bokk ak toppatoo environnement.`, }
};

export function getWolofContent(item: ContentItem): WolofContent | undefined {
  const slug = item.url?.replace(/\/$/, '').split('/').pop();
  return slug ? CONTENT_WO[slug] : undefined;
}
