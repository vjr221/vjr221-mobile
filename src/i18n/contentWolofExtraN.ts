import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_N: Record<string, WolofContent> = {
  'musee-boribana-art-africain-ile-de-goree': {
    titleWo: 'Musée Boribana — art africain ci Dunu Gorée',
    excerptWo: 'Musée-galerie bu art africain traditionnel ak contemporain, ci Dunu Gorée.',
    contentWo: `### Jëmmal

Musée Boribana mooy musée-galerie bu nekk ci Dunu Gorée. Mu wone ay œuvres ak objets yu aju ci art africain, te visite bi mën na boole xam-xam ci patrimoine ak taariixu Gorée.

### Collection ak art

Bérab bi dafa boole cosaan ak création contemporaine. Gis ay œuvres ci contexteu Gorée dafay yokk njàngum patrimoine ak xam-xamu art africain.

### Gorée ak patrimoine

Musée bi mën na bokk ci parcoursu découverte bu Dunu Gorée, ci wetug yeneen bérab yu am solo ci mémoire ak patrimoine. Toppatoo bérab yi ak teral seen solo am na solo ci visite bi.

### Jàng ak seet

Musée-galerie bi may na nit ñi xam ay formesu art africain ak seen contexte. Ku koy seet mën na boole visite bi ak yeneen bérab yu patrimoineu Gorée.`,
  },
  'parc-national-des-iles-de-la-madeleine': {
    titleWo: 'Parc nationalu Îles de la Madeleine',
    excerptWo: 'Archipel volcanique ci kanamu Dakar, ak falaises, picc yi ak patrimoine naturel ak spirituel.',
    contentWo: `### Jëmmal

Parc nationalu Îles de la Madeleine nekk na ci géej gi, ci kanamu Dakar. Archipel bi ëmb ay îlots volcaniques ak falaises, te am na picc yu géej ak yeneen xeet yu dëkk ci littoral.

### Taariix ak aarug site

Site bi am na statut parc national, te aarug géologie, végétation, picc ak patrimoine bi bokk na ci solo bi mu am. Fragilitéu îlots yi moo tax seetaan ak jëfandikoo site bi war a nekk ci toppatoo.

### Nature ak aada

Falaises yi, baobab yi ak végétation bu dëkk ci ngelaw géej gi di boole paysage bi. Site bi am na it solo ci xalaatu askan wi, rawatina ci aada yu Lébou yu lëkkale ak bérab bi.

### Seetaan

Ñuy dem ci pirogue jógé Soumbédioune, ak éco-gardes yu ñu agréé. Seetaan bi war na topp ndigal yi ngir aar îlots yi, picc yi ak yeneen xeet yu dëkk fa.`,
  },
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
};
