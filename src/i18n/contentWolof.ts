import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

const CONTENT_WO: Record<string, WolofContent> = {
  'commune-des-hlm': { titleWo: 'Kominu HLM', excerptWo: 'Komin bu nekk ci agglomération Dakar, ci biir dëkk yu am solo ci dundug métropole bi.', contentWo: `### Jëmmal

Kominu HLM bokk na ci agglomération Dakar. Mooy territoire urbain bu fees ak way-dëkk, commerce, services ak activités yu bés bu nekk.

### Dund ak services

Kër, écoles, commerces, services ak transport bokk nañu ci dundug komin bi. Jëmmal bi lëkkale na ak yokkute Dakar ak quartiers yi ci wetu.

### Askan ak identité

Ni askan yi di dund, di liggéey ak di bokkandoo ci quartier yi jox komin bi identité bu boppam. Aada ak initiatives locales mën nañu yokk mbooloo.`, },
  'tourisme-communautaire-senegal': { titleWo: 'Turis bu askan wi ci Senegaal', excerptWo: 'Turis bu askan wi dafay boole gan ak askan yi ci dund, aada ak yokkute local.', contentWo: `### Jëmmal

Turis bu askan wi mooy yoonu gan-gësté bu askan yi ci bérab bi bokk ci jëfandikoo ak jariñu tourisme. Ci Senegaal, mooy may gan yi gis aada, lekk, liggéeyu loxo, nature ak dundug dëkk yi ci yoon wu bokk ak askan wi.

### Askan ak yokkute local

Jariñ bi war na dem ba askan yi. Hébergement, restauration, guide, artisanat ak transport mën nañu sos ay liggéey te yokk xaalisu dëkk yi.

### Aada ak nature

Turis bu askan wi dafay boole seet ak xam. Gan yi mën nañu bokk ci yégle aada, togg, liggéeyu loxo, xew-xew ak seet nature.

### Aar ak toppatoo

Bérab bi war nañu ko aar, te gan-gësté war nañu topp aada ak environnement. Jokkoo diggante askan ak gan mooy tax tourisme bi mën a dund lu yàgg.`, },
  'cap-skirring': { titleWo: 'Cap Skirring', excerptWo: 'Bérab bu géej ci Casamance, xam ko ci plages, nature ak tourisme.', contentWo: `### Jëmmal

Cap Skirring nekk na ci Casamance, ci wetug Atlantique. Bérab bi xam nañu ko ci plages yu neex, nature ak tourisme.

### Géej ak nature

Plages yi, cocotiers, mangrove ak paysages yu Casamance di jox bérab bi melokaan bu am solo. Gan yi mën nañu seet géej, nature ak dundug dëkk.

### Tourisme

Hébergement, restauration, artisanat ak activités yu géej bokk nañu ci économie touristique. Jokkoo ak askan wi mooy benn ci solo yi ngir tourisme bi am jariñ.

### Aar bérab bi

Littoral ak ecosystems yi war nañu leen a aar. Développement bu tourisme war na bokk ak toppatoo environnement.`, },
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


export function getWolofContent(item: ContentItem): WolofContent | undefined {
  const slug = item.url?.replace(/\/$/, '').split('/').pop();
  return slug ? CONTENT_WO[slug] : undefined;
}
