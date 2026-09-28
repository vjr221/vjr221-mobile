import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 57 — consolidation patrimoine naturel et mémoire. */
export const CONTENT_WO_EXTRA_AT: Record<string, WolofContent> = {
  'reserve-ornithologique-kalissaye': {
    titleWo: 'Réserve ornithologique de Kalissaye',
    excerptWo: 'Aire protégée ci littoralu Casamance, fu ñuy aar picc yu géej ak bérab yu tortues marines di génn.',
    contentWo: `### Jëmmal

Réserve ornithologique de Kalissaye nekk na ci géeju Casamance, ci gémmiñu marigot Kalissaye, ci diiwaanu Ziguinchor. Sos nañu ko ngir aar coloniesu picc yu géej yi di denc seen tuxu ak bérab yu tortues marines di génn.

### Ecosystem ak picc

Réserve bi boole ay îlots, estuaires, mangrove ak géej. Picc yu géej ak migrateurs yi dañuy jëfandikoo bérab yi ngir dëkk, wër walla génn ay doom. Kalissaye am na it solo ci aar tortue verte ak tortue caouanne.

### Aarug nature

Aar Kalissaye du rekk aar ay xeet. Dafay aar it habitatsu littoral yu yomb a yàqu, mangrove yi ak biodiversité bu Basse-Casamance. Toppatoo site bi war na ànd ak respektu ekosistem bi.

### Seetaan

Ñi koy seet mën nañu gis paysages littoraux yi, îlots yi ak picc yu géej. Seetaan bi war na topp ndigal yi ngir aar bérab bi ak dundug xeet yi.`,
  },
  'parc-national-des-iles-de-la-madeleine': {
    titleWo: 'Parc nationalu Îles de la Madeleine',
    excerptWo: 'Archipel volcanique ci kanamu Dakar, ak falaises, picc yi ak patrimoine naturel ak spirituel.',
    contentWo: `### Jëmmal

Parc nationalu Îles de la Madeleine nekk na ci géej gi, ci kanamu Dakar. Archipel bi ëmb ay îlots volcaniques ak falaises, te am na it picc yu géej ak yeneen xeet yu dëkk ci littoral.

### Taariix ak aarug site

Site bi am na statut parc national, te aarug géologie, végétation, picc ak patrimoine bi bokk na ci solo bi mu am. Fragilitéu îlots yi moo tax seetaan ak jëfandikoo site bi war a nekk ci toppatoo.

### Nature ak aada

Falaises yi, baobab yi ak végétation bu dëkk ci ngelaw géej gi di boole paysage bi. Site bi am na it solo ci xalaatu askan wi, rawatina ci aada yu Lébou yu lëkkale ak bérab bi.

### Seetaan

Ñuy dem ci pirogue jógé Soumbédioune, ak éco-gardes yu ñu agréé. Seetaan bi war na topp ndigal yi ngir aar îlots yi, picc yi ak yeneen xeet yu dëkk fa.`,
  },
  'parc-national-du-niokolo-koba': {
    titleWo: 'Parc nationalu Niokolo-Koba',
    excerptWo: 'Àll bu mag ci penku Senegaal, bu am solo ci aarug biodiversité ak rab yu àll.',
    contentWo: `### Jëmmal

Parc nationalu Niokolo-Koba nekk na ci penku Senegaal, ci diiwaanu Tambacounda. Mooy benn ci aires protégées yu gëna am solo ci réew mi, ndax biodiversité ak rëyug àll yi.

### Taariix ak patrimoine

Parc bi sosu na ngir aar ekosystem yi ak rab yi. UNESCO dafa ko jàppe patrimoine mondial, te parc bi bokk na it ci réseau des réserves de biosphère.

### Nature

Niokolo-Koba am na savanes, àll yu rëy, collines, prairies ak cours d’eau. Biodiversité bi ëmb na rab yu bare ak xeet yu wuute, te aarug habitats yi am na solo ci seen dund.

### Seetaan ak recherche

Safaris, seetug rab yi, randonnées ak photographie animalière bokk nañu ci mbir yu ñu mën a def ci parc bi, ci toppatoo ay ndigal yu aar nature. Parc bi di it bérab bu ñuy def recherche ci conservation ak écologie.

### Aarug nature

Aarug habitats ak rab yi, surveillance écologique, sensibilisation ak coopération bokk nañu ci liggéeyu conservation bi.`,
  },
};
