import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/**
 * Couche Wolof locale pour les fiches prioritaires (régions + lieux phares).
 * Quand l'API ne fournit pas encore title_wo / content_wo, l'app bascule ici.
 * Clé = slug WordPress (dernier segment d'URL).
 */
const CONTENT_WO: Record<string, WolofContent> = {
  'region-de-dakar': {
    titleWo: 'Diiwaanu Dakar',
    excerptWo: 'Diiwaan bu gën a ndaw ci réew mi ci superficie, waaye Dakar mooy dëkk bu mag bu politik, ekonom ak administrasyon.',
    contentWo: `### Jëmmal\n\nDiiwaanu Dakar mooy diiwaan bu gën a ndaw ci Senegaal ci kaw superficie, waaye mu am solo lool ci mbirum politik, ekonom, administrasyon ak way-dëkk. Dakar, dëkk bu mag bu réew mi, mooy benn ci péninsule Cap-Vert, ci wetug géej gi.\n\n### Géeographie\n\nDakar nekk na ci peninsule Cap-Vert. Diiwaan bi dafa aju ci Atlantique ci norte, sowwu ak sud, te Thiès mooy ci penku.\n\n### Taariix\n\nTaariixu Dakar dafa lëkkale ak Cap-Vert ak Gorée. Gannaaw indipendance ci 1960, Dakar des na capitale bu République du Senegaal.\n\n### Toppatoo\n\nDiiwaan bi am na juróom benn départements : Dakar, Guédiawaye, Pikine, Keur Massar ak Rufisque.\n\n### Ekonom\n\nCommerce, services, banques, télécommunications, industrie ak numérique bokk nañu ci sektëër yu am solo.\n\n### Aada ak tourisme\n\nGorée, Monument de la Renaissance Africaine, Corniche ak Village des Arts bokk nañu ci bérab yi gën a xam.`,
  },
  'region-de-ziguinchor': {
    titleWo: 'Diiwaanu Ziguinchor',
    excerptWo: 'Xolum Casamance ci mbirum taariix, ekonom ak aada, diiwaan bu fees ak mangrove, tourism ak wuute culture.',
    contentWo: `### Jëmmal\n\nDiiwaanu Ziguinchor nekk na ci penku-sowwu Senegaal. Mooy xolum Casamance ci mbirum taariix, ekonom ak aada.\n\n### Géeographie\n\nGambia mooy ci norte, Sédhiou ci penku, Guinée-Bissau ci sud, Atlantique ci sowwu. Ziguinchor mooy chef-lieu.\n\n### Taariix ak aada\n\nCasamance dafa fees ak aada yu wuute, rawatina ci askanu Diola, Mandingue, Balante, Peul ak Wolof.\n\n### Toppatoo\n\nDiiwaan bi am na ñetti départements : Ziguinchor, Oussouye ak Bignona.\n\n### Ekonom\n\nAgriculture, pêche, commerce ak tourisme bokk nañu ci sektëër yu am solo.\n\n### Aada ak tourisme\n\nMangrove yi, fecc, musik ak architecture traditionnelle bokk nañu ci patrimoine bi.`,
  },
  'region-de-thies': {
    titleWo: 'Diiwaanu Thiès',
    excerptWo: 'Diiwaan bu nekk ci wetug Dakar, xam ko ci industrie, agriculture ak patrimoine.',
    contentWo: `### Jëmmal\n\nDiiwaanu Thiès nekk na ci penku Dakar. Mooy benn ci diiwaan yu am solo ci industrie, transport ak agriculture.\n\n### Toppatoo\n\nDépartements : Thiès, Tivaouane ak Mbour.\n\n### Tourisme\n\nLac Rose (Lac Retba) nekk na ci diiwaan bi.`,
  },
  'region-de-saint-louis': {
    titleWo: 'Diiwaanu Saint-Louis',
    excerptWo: 'Dëkk bu taariix bu UNESCO, ci wetug fleuve Sénégal.',
    contentWo: `### Jëmmal\n\nSaint-Louis mooy dëkk bu taariix, patrimoine mondial UNESCO. Diiwaan bi nekk na ci norte Senegaal, ci wetug fleuve Sénégal.`,
  },
  'region-de-diourbel': {
    titleWo: 'Diiwaanu Diourbel',
    excerptWo: 'Touba ak aada Mouride, ci biir bassin arachidier.',
    contentWo: `### Jëmmal\n\nDiiwaanu Diourbel xam nañu ko ci Touba, centre spirituel Mouride, ak agriculture.`,
  },
  'region-de-kaolack': {
    titleWo: 'Diiwaanu Kaolack',
    excerptWo: 'Carrefour du bassin arachidier, commerce ak agriculture.',
    contentWo: `### Jëmmal\n\nKaolack mooy carrefour economique ci centre Senegaal, rawatina ci commerce arachide.`,
  },
  'region-de-kaffrine': {
    titleWo: 'Diiwaanu Kaffrine',
    excerptWo: 'Cœur agro-pastoral du Sénégal central.',
    contentWo: `### Jëmmal\n\nDiiwaanu Kaffrine sosu na ci 2008. Mooy territoire agro-pastoral ci centre Senegaal.`,
  },
  'region-de-fatick': {
    titleWo: 'Diiwaanu Fatick',
    excerptWo: 'Delta du Saloum, réserve de biosphère UNESCO.',
    contentWo: `### Jëmmal\n\nFatick xam nañu ko ci Delta du Saloum, patrimoine naturel ak culture Sereer.`,
  },
  'region-de-louga': {
    titleWo: 'Diiwaanu Louga',
    excerptWo: 'Portes du Sahel, terre du Ndiambour.',
    contentWo: `### Jëmmal\n\nLouga nekk na ci norte Senegaal, diggante Saint-Louis ak Matam, territoire pastoral ak agricole.`,
  },
  'region-de-matam': {
    titleWo: 'Diiwaanu Matam',
    excerptWo: 'Vallée du fleuve Sénégal, agriculture ak élevage.',
    contentWo: `### Jëmmal\n\nMatam nekk na ci nord-est, ci wetug fleuve Sénégal, zone agricole ak pastorale.`,
  },
  'region-de-tambacounda': {
    titleWo: 'Diiwaanu Tambacounda',
    excerptWo: 'Parc national du Niokolo-Koba, est du Sénégal.',
    contentWo: `### Jëmmal\n\nTambacounda mooy diiwaan bu gën a rëy. Niokolo-Koba bokk na ci patrimoine naturel.`,
  },
  'region-de-kedougou': {
    titleWo: 'Diiwaanu Kédougou',
    excerptWo: 'Chutes de Dindéfélo, pays Bassari, sud-est.',
    contentWo: `### Jëmmal\n\nKédougou nekk na ci sud-est, xam ko ci nature, or et aada Bassari.`,
  },
  'region-de-kolda': {
    titleWo: 'Diiwaanu Kolda',
    excerptWo: 'Fouladou, Haute Casamance, agriculture ak élevage.',
    contentWo: `### Jëmmal\n\nKolda nekk na ci Haute Casamance, territoire Fouladou.`,
  },
  'region-de-sedhiou': {
    titleWo: 'Diiwaanu Sédhiou',
    excerptWo: 'Vallées ak forêts de la Casamance.',
    contentWo: `### Jëmmal\n\nSédhiou nekk na ci Casamance, diggante Ziguinchor ak Kolda.`,
  },
  'le-lac-rose': {
    titleWo: 'Lac Rose',
    excerptWo: 'Lac Retba, bérab bu am solo ci tourisme ak patrimoine naturel.',
    contentWo: `### Jëmmal\n\nLac Rose walla Lac Retba nekk na ci wetug Dakar. Melo rose bi mën na feeñ ci jamono yu tàng.`,
  },
  'l-ile-de-goree': {
    titleWo: 'Dunu Gorée',
    excerptWo: 'Patrimoine mondial UNESCO, mémoire de la traite négrière.',
    contentWo: `### Jëmmal\n\nDunu Gorée nekk na ci géeju Dakar. Mooy bérab bu xelal nit ñi ci taariixu traite négrière atlantique.`,
  },
  'tourisme-saint-louis-patrimoine-fleuve': {
    titleWo: 'Tourisme ci Ndar (Saint-Louis)',
    excerptWo: 'Patrimoine, dexu Senegaal ak littoral — Ndar mooy benn ci dëkk yu mag yu aada ci réew mi.',
    contentWo: `### Jëmmal\n\nNdar (Saint-Louis) nekk na ci norte Senegaal, ci wetug dexu Senegaal. Dëkk bi dafa am taariix bu yàgg, architecture coloniale ak aada yu fees.\n\n### Li war a seet\n\nÎle de Saint-Louis (UNESCO), Pont Faidherbe, Langue de Barbarie ak géej gi.\n\n### Taariix\n\nNdar doon na capitale bu Afrique occidentale française lu yàgg. Tey jii, tourisme culturel ak naturel am na solo lool.`,
  },
  'tourisme-thies-patrimoine-littoral': {
    titleWo: 'Tourisme ci Thiès',
    excerptWo: 'Patrimoine, bunt bu jëm ci littoral ak bérab yu nature ci wetug Dakar.',
    contentWo: `### Jëmmal\n\nThiès mooy bunt bu mag bu jëm ci littoral ak ci penku réew mi. Diiwaan bi dafa fees ak patrimoine, industrie ak bérab yu nature.\n\n### Li war a seet\n\nPetite Côte, Somone, Popenguine, Bandia ak dëkk yu aada yi ci wet gi.`,
  },
  'tourisme-fatick-sine-saloum': {
    titleWo: 'Tourisme ci Fatick — Siin-Saalum',
    excerptWo: 'Delta bu Saloum, mangrove, duni yi ak aada yu Siin.',
    contentWo: `### Jëmmal\n\nFatick nekk na ci xolum Siin-Saalum. Delta bi, mangrove yi ak duni yi dañuy woo ay touristes yu bëgg nature ak aada.\n\n### Li war a seet\n\nÎles du Saloum, Palmarin, Foundiougne, Joal-Fadiouth ak réserves yu nature.`,
  },
  'tourisme-kaolack-saloum': {
    titleWo: 'Tourisme ci Kaolack — Saalum',
    excerptWo: 'Saalum, bassin arachidier ak dëkk bu am solo ci ekonomu centre.',
    contentWo: `### Jëmmal\n\nKaolack mooy dëkk bu mag ci centre Senegaal, xam ko ci commerce, arachide ak dexu Saalum.\n\n### Li war a seet\n\nDexu Saalum, marchés yu mag yi ak bérab yu aada yi ci diiwaan bi.`,
  },
  'tourisme-diourbel-baol': {
    titleWo: 'Tourisme ci Diourbel — Baol',
    excerptWo: 'Patrimoine religieux, terroirs ak aada yu Baol.',
    contentWo: `### Jëmmal\n\nDiourbel nekk na ci xolum Baol. Diiwaan bi dafa am solo ci mbirum diine (rawatina Touba), agriculture ak aada.\n\n### Li war a seet\n\nTouba, Diourbel, Bambey ak terroirs yu Baol.`,
  },
  'tourisme-senegal-oriental-nature-cultures': {
    titleWo: 'Tourisme ci penku Senegaal',
    excerptWo: 'Nature, cultures ak bérab yu mag ci Kédougou, Tambacounda ak wet gi.',
    contentWo: `### Jëmmal\n\nPenku Senegaal dafa fees ak nature, montagne, parc nationaux ak askan yu wuute.\n\n### Li war a seet\n\nParc Niokolo-Koba, pays bassari, Kédougou, chutes ak réserves yu nature.`,
  },
  'iles-du-saloum-archipel-et-paysages-du-delta': {
    titleWo: 'Duni Saalum',
    excerptWo: 'Archipel ak paysages yu delta — mangrove, jën ak aada yu nappkat yi.',
    contentWo: `### Jëmmal\n\nDuni Saalum bokk nañu ci patrimoine naturel bu gën a rafet ci Senegaal. Mangrove, bolong yi ak jën yi dañuy dundal askan wi.\n\n### Solo\n\nTourisme écologique, pêche artisanale ak aada yu Siin-Saalum.`,
  },
  'reserve-naturelle-communautaire-de-somone-lagune-et-mangrove-de-la-petite-cote': {
    titleWo: 'Reserve bu Somone',
    excerptWo: 'Lagune ak mangrove ci Petite Côte — bérab bu jàppale nature ak tourisme.',
    contentWo: `### Jëmmal\n\nReserve naturelle communautaire de Somone nekk na ci Petite Côte. Lagune bi ak mangrove yi dañuy aar picc, jën ak ecosysteme bi.\n\n### Li war a seet\n\nPirogue ci lagune, oiseaux migrateurs ak plage yu jege.`,
  },
  'fleuve-senegal-patrimoine-naturel': {
    titleWo: 'Dexu Senegaal',
    excerptWo: 'Patrimoine naturel ak axe historique bu norte réew mi.',
    contentWo: `### Jëmmal\n\nDexu Senegaal mooy benn ci dex yu mag yu Afrique de l'Ouest. Mu bokk na ci taariix, agriculture ak dëkk yu norte yi.\n\n### Solo\n\nNdar, Matam, Bakel ak tool yu wàllu dex gi.`,
  },
  'lac-guiers-patrimoine-naturel': {
    titleWo: 'Lac de Guiers',
    excerptWo: 'Patrimoine naturel ak ressource bu ndox mu norte.',
    contentWo: `### Jëmmal\n\nLac de Guiers nekk na ci norte Senegaal. Mooy benn ci sources yu ndox yu am solo ci réew mi, rawatina ci wetug Dakar.`,
  },
  'reserve-naturelle-de-popenguine-patrimoine-naturel-du-senegal': {
    titleWo: 'Reserve bu Popenguine',
    excerptWo: 'Patrimoine naturel ci Petite Côte — falaise, géej ak aada.',
    contentWo: `### Jëmmal\n\nReserve naturelle de Popenguine nekk na ci Petite Côte. Falaise yi, géej gi ak nature bi dañuy woo ay visit yu aada ak écologique.`,
  },
  'foret-classee-de-bandia-patrimoine-naturel-de-thies': {
    titleWo: 'Àll bu Bandia',
    excerptWo: 'Patrimoine naturel ci diiwaanu Thiès — àll, rab yi ak tourisme.',
    contentWo: `### Jëmmal\n\nForêt classée de Bandia nekk na ci wetug Thiès / Petite Côte. Mooy bérab bu nirook safari bu jege Dakar, fa mu am ay rab ak àll.`,
  },
  'biennale-dakar-dakart-art-africain': {
    titleWo: 'Biennale bu Dakar (Dak\'Art)',
    excerptWo: 'Art africain contemporain — fànn bu mag bu wone artiste yi ci àdduna bi.',
    contentWo: `### Jëmmal\n\nBiennale de Dakar (Dak\'Art) mooy benn ci fànn yu mag yu art contemporain ci Afrique. Mu wone na artiste yu réew mi ak yu àdduna bi.\n\n### Solo\n\nExpositions, rencontres ak dynamique culturelle bu Dakar.`,
  },
  'mausolee-de-cheikh-ahmadou-bamba-patrimoine-religieux-de-touba': {
    titleWo: 'Mausolée bu Cheikh Ahmadou Bamba',
    excerptWo: 'Patrimoine religieux bu Touba — xolum mouridisme.',
    contentWo: `### Jëmmal\n\nMausolée de Cheikh Ahmadou Bamba nekk na ci Touba. Mooy bérab bu ñu gën a séen ci mbirum diine mouride, rawatina ci Grand Magal.\n\n### Solo\n\nTouba mooy dëkk bu am solo lool ci aada, diine ak ekonomu centre Senegaal.`,
  },
  'festival-national-arts-cultures-fesnac': {
    titleWo: 'FESNAC',
    excerptWo: 'Festival national des Arts et Cultures — wone aada yu Senegaal yépp.',
    contentWo: `### Jëmmal\n\nFestival national des Arts et Cultures (FESNAC) dafay wone fecc, musik, théâtre ak aada yu diiwaan yépp ci réew mi.`,
  },
  'paysage-ferlo-patrimoine-naturel': {
    titleWo: 'Paysage bu Ferlo',
    excerptWo: 'Espaces pastoraux ak patrimoine naturel bu norte-penku.',
    contentWo: `### Jëmmal\n\nFerlo mooy zone bu yàtt, xam ko ci sàmm, àll yu néew ak dundin bu pastoral. Mooy benn ci paysages yu am solo ci norte-penku Senegaal.`,
  },
};

export function getWolofContentBySlug(slug: string): WolofContent | undefined {
  const clean = slug.replace(/^\/+|\/+$/g, '').split('/').pop() ?? slug;
  return CONTENT_WO[clean];
}

export function getWolofContent(item: ContentItem): WolofContent | undefined {
  const slug = item.url?.replace(/\/$/, '').split('/').pop();
  return slug ? getWolofContentBySlug(slug) : undefined;
}
