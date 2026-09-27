import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_N: Record<string, WolofContent> = {
  'musee-boribana-art-africain-ile-de-goree': {
    titleWo: 'Musée Boribana — art africain ci Dunu Gorée',
    excerptWo: 'Musée-galerie bu art africain traditionnel ak contemporain, ci Dunu Gorée.',
    contentWo: `### Jëmmal

Musée Boribana mooy musée-galerie bu nekk ci Dunu Gorée. Mu wone collectionu art africain traditionnel ak contemporain, ci masques, statues ak yeneen objets rituels.

### Collection ak art

Bérab bi dafa boole ay œuvres yu aju ci cosaan ak création contemporaine. Gis leen ci contexteu Gorée dafay yokk njàngum patrimoine ak art africain.

### Gorée ak patrimoine

Musée bi mën na bokk ci parcoursu découverte bu Dunu Gorée, ci wetug Maison des Esclaves ak Fort d’Estrées. Dunu Gorée mooy bérab bu am solo ci mémoire ak patrimoineu Senegaal.

### Jàng ak seet

Musée-galerie bi may na opportunity ngir gis ay formesu art africain ak xam-xam ci seen contexte. Yoon wu baax mooy boole visite bi ak yeneen bérab yu patrimoineu Gorée.`,
  },
  'parc-national-des-iles-de-la-madeleine': {
    titleWo: 'Parc nationalu Îles de la Madeleine',
    excerptWo: 'Archipel volcanique bu ñu dëkkul, ci kanamu Dakar, ak falaises, picc yi ak patrimoineu naturel ak spirituel.',
    contentWo: `### Jëmmal

Parc nationalu Îles de la Madeleine nekk na ci diggante géej gi, ci kanamu Dakar, ak ay 4 kilomètres ci Dakar. Archipel bi am na ñaari îlots volcaniques : Île au Sarpan, walla Île aux Serpents, ak Île Loungue. Superficie bi mat na ci lu ëpp 45 hectares.

### Statut ak taariix

Archipel bi doon na réserve ornithologique ci 1949. Ci 17 juin 1964, loi dafa aar ko, te ci 16 janvier 1976 mu am statut parc national. Candidature bi ci patrimoine mondial UNESCO yóbbu nañu ko ci 2005 ngir richesseu géologique, écologique ak culturelle.

### Nature ak aada

Falaises volcaniques yi mën nañu yéeg ba 35 mètres. Picc yu géej, baobabs yu ndaw ak yeneen végétation yu dëkk ci ngelaw géej gi nekk nañu fa. Îlots yi itam di wone bérab yu tortues marines di wër ci jamono hivernage.

Bérab bi am na solo ci communauté lébou, ndax Leuk Daour, génie protecteuru Dakar, bokk na ci ay croyances yu lëkkale ak site bi.

### Seetaan

Dañuy dem ci pirogue jógé Soumbédioune, ak éco-gardes yu ñu agréé par Direction des parcs nationaux du Sénégal. Visite bi dafa am ay ndigal ngir aar fragilitéu site bi.`,
  },
  'reserve-ornithologique-kalissaye': {
    titleWo: 'Réserve ornithologique de Kalissaye',
    excerptWo: 'Aire protégée ci littoralu Casamance, fu ñuy aar picc yu géej ak bérab yu tortues marines di génn.',
    contentWo: `### Jëmmal

Réserve ornithologique de Kalissaye nekk na ci géeju Casamance, ci gémmiñu marigot Kalissaye, ci diiwaanu Ziguinchor. Sos nañu ko ci 1978 ngir aar coloniesu picc yu géej yi di denc seen tuxu ak bérab yu tortues marines di génn.

### Îlots ak ekosistem

Réserve bi boole ay îlots yu suuf, estuaires, mangrove ak géej. Diggante suuf, mangrove ak océan bi dafay def Kalissaye bérab bu am solo ci seetaan picc ak aar habitats yu littoral.

### Picc ak tortues

Kalissaye lëkkale nañu ko ak sternes, pélican blanc ak yeneen picc yu géej. Site bi itam am na solo ci aar tortue verte ak tortue caouanne.

### Aar patrimoine naturel

Protectionu Kalissaye du rekk aar espèces yi. Dafay dimbali ci aar habitatsu littoral yu yomb a yàqu ak biodiversité bu Basse-Casamance. Réserve bi itam am na recognition ci conventionu Ramsar ak ci conservationu picc.

### Li ñuy seet

Ñi koy seet mën nañu gis paysages littoraux yi, îlots yu gémmiñu Kalissaye, picc yu géej ak migrateurs, ak yeneen patrimoines naturelsu Casamance. Aar site bi ak respektu ekosistem bi am na solo.`,
  },
};
