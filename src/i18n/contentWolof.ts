import type { ContentItem } from '../types/content';
import { CONTENT_WO_EXTRA } from './contentWolofExtra';
import { CONTENT_WO_EXTRA_B } from './contentWolofExtraB';
import { CONTENT_WO_EXTRA_C } from './contentWolofExtraC';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/**
 * Couche Wolof — régions, tourisme, patrimoine (vague 7 : qualité).
 * Compléments : Extra + ExtraB + ExtraC
 */
const CONTENT_WO_CORE: Record<string, WolofContent> = {
  'region-de-dakar': {
    titleWo: 'Diiwaanu Dakar',
    excerptWo: 'Diiwaan bu gën a ndaw ci superficie, waaye Dakar mooy dëkk bu mag bu politik, ekonom ak administrasyon.',
    contentWo: `### Jëmmal\n\nDiiwaanu Dakar mooy diiwaan bu gën a ndaw ci Senegaal ci kaw superficie, waaye mu am solo lool ci mbirum politik, ekonom, administrasyon ak way-dëkk. Dakar, dëkk bu mag bu réew mi, nekk na ci péninsule Cap-Vert, ci wetug géej gi.\n\n### Géeographie\n\nDakar dafa aju ci Atlantique ci norte, sowwu ak sud ; Thiès mooy ci penku. Péninsule Cap-Vert, Îles de la Madeleine ak Gorée bokk nañu ci paysage bi.\n\n### Taariix\n\nTaariixu Dakar dafa lëkkale ak Cap-Vert ak Gorée. Gannaaw indipendance ci 1960, Dakar des na capitale bu République du Senegaal.\n\n### Toppatoo\n\nJuróom-benn départements : Dakar, Guédiawaye, Pikine, Keur Massar ak Rufisque.\n\n### Ekonom ak aada\n\nCommerce, services, banques, numérique ak tourisme. Gorée, Monument de la Renaissance Africaine, Corniche, Village des Arts ak marchés yu mag yi.`,
  },
  'region-de-ziguinchor': {
    titleWo: 'Diiwaanu Ziguinchor',
    excerptWo: 'Xolum Casamance — mangrove, tourisme, aada yu Diola ak askan yu wuute.',
    contentWo: `### Jëmmal\n\nDiiwaanu Ziguinchor nekk na ci penku-sowwu Senegaal. Mooy xolum Casamance ci mbirum taariix, ekonom ak aada.\n\n### Géeographie\n\nGambia ci norte, Sédhiou ci penku, Guinée-Bissau ci sud, Atlantique ci sowwu. Ziguinchor mooy chef-lieu.\n\n### Aada\n\nCasamance dafa fees ak aada yu wuute — Diola, Mandingue, Balante, Peul ak Wolof. Fecc, musik ak architecture traditionnelle am nañu solo.\n\n### Toppatoo\n\nÑetti départements : Ziguinchor, Oussouye ak Bignona.\n\n### Tourisme\n\nCap Skirring, mangrove yi, duni yi ak plages yu Casamance.`,
  },
  'region-de-thies': {
    titleWo: 'Diiwaanu Thiès',
    excerptWo: 'Bunt bu jëm ci littoral — industrie, Lac Rose, Petite Côte ak Bandia.',
    contentWo: `### Jëmmal\n\nDiiwaanu Thiès nekk na ci penku Dakar. Mooy benn ci diiwaan yu am solo ci industrie, transport, agriculture ak tourisme littoral.\n\n### Toppatoo\n\nDépartements : Thiès, Tivaouane ak Mbour.\n\n### Nature ak tourisme\n\nLac Rose (Lac Retba), Petite Côte (Saly, Somone, Popenguine), forêt de Bandia, Tivaouane ak bérab yu aada yi.\n\n### Ekonom\n\nIndustrie, commerce, agriculture, tourisme littoral ak diggante ak Dakar.`,
  },
  'region-de-saint-louis': {
    titleWo: 'Diiwaanu Ndar (Saint-Louis)',
    excerptWo: 'Dëkk bu UNESCO, dexu Senegaal, Langue de Barbarie ak taariix bu yàgg.',
    contentWo: `### Jëmmal\n\nNdar (Saint-Louis) mooy dëkk bu taariix, patrimoine mondial UNESCO. Diiwaan bi nekk na ci norte Senegaal, ci wetug dexu Senegaal.\n\n### Taariix\n\nNdar doon na capitale bu Afrique occidentale française. Île de Saint-Louis, Pont Faidherbe ak architecture coloniale xam nañu leen ci àdduna bi.\n\n### Nature\n\nLangue de Barbarie, Parc national, dex gi ak géej gi.\n\n### Ekonom\n\nPêche, agriculture, tourisme culturel ak naturel.`,
  },
  'region-de-diourbel': {
    titleWo: 'Diiwaanu Diourbel',
    excerptWo: 'Baol — Touba, aada Mouride, agriculture ak terroirs.',
    contentWo: `### Jëmmal\n\nDiiwaanu Diourbel nekk na ci xolum Baol. Xam nañu ko ci Touba, centre spirituel Mouride, ak agriculture.\n\n### Aada ak diine\n\nTouba ak Grand Magal am nañu solo lool ci aada, diine ak ekonomu centre Senegaal. Mausolée bu Cheikh Ahmadou Bamba mooy bérab bu ñu gën a séen.\n\n### Toppatoo\n\nDépartements : Diourbel, Bambey ak Mbacké.\n\n### Ekonom\n\nAgriculture (arachide, mil), commerce ak tourisme religieux.`,
  },
  'region-de-kaolack': {
    titleWo: 'Diiwaanu Kaolack',
    excerptWo: 'Carrefour bu bassin arachidier — Saalum, commerce, sel ak transport.',
    contentWo: `### Jëmmal\n\nKaolack mooy carrefour economique ci centre Senegaal, rawatina ci commerce arachide ak dexu Saalum. Dëkk bu mag bi dafa jël solo ci transport, marchés yu mag yi ak sel.\n\n### Toppatoo\n\nDépartements : Kaolack, Guinguinéo ak Nioro du Rip.\n\n### Ekonom\n\nAgriculture (arachide, mil), commerce, sel bu Kaolack, transport ak yeneen services. Marchés yu mag yi bokk nañu ci dundinu réew mi.\n\n### Aada\n\nAada yu Saalum, diine ak dundin bu centre Senegaal.`,
  },
  'region-de-kaffrine': {
    titleWo: 'Diiwaanu Kaffrine',
    excerptWo: 'Xolum agro-pastoral bu centre (sosu na ci 2008) — arachide, mil ak sàmm.',
    contentWo: `### Jëmmal\n\nDiiwaanu Kaffrine sosu na ci 2008, génne ci Kaolack. Mooy territoire agro-pastoral ci centre Senegaal, diggante Kaolack ak Tambacounda.\n\n### Toppatoo\n\nDépartements : Kaffrine, Birkelane, Koungheul ak Malem Hodar.\n\n### Ekonom\n\nAgriculture (arachide, mil, niébé), sàmm ak commerce yu local. Tool yi ak sàmm bokk nañu ci dundin bu diiwaan bi.\n\n### Nature\n\nPaysage bu sahel ak savane, diggante centre ak penku.`,
  },
  'region-de-fatick': {
    titleWo: 'Diiwaanu Fatick',
    excerptWo: 'Siin-Saalum — delta, mangrove, aada Sereer ak réserve UNESCO.',
    contentWo: `### Jëmmal\n\nFatick xam nañu ko ci Delta du Saloum, patrimoine naturel ak culture Sereer.\n\n### Nature\n\nÎles du Saloum, mangrove, bolong yi ak réserve de biosphère UNESCO. Joal-Fadiouth, Palmarin ak Foundiougne.\n\n### Toppatoo\n\nDépartements : Fatick, Foundiougne ak Gossas.\n\n### Aada\n\nAada Sereer, saltigues, ndut ak tourisme écologique.`,
  },
  'region-de-louga': {
    titleWo: 'Diiwaanu Louga',
    excerptWo: 'Bunt yu Sahel — Ndiambour, sàmm, agriculture ak Ferlo.',
    contentWo: `### Jëmmal\n\nLouga nekk na ci norte Senegaal, diggante Saint-Louis ak Matam. Territoire pastoral ak agricole, xam ko ci Ndiambour ak diggante ak Ferlo.\n\n### Toppatoo\n\nDépartements : Louga, Kébémer ak Linguère.\n\n### Ekonom\n\nSàmm, agriculture (arachide, niébé), commerce ak transport. Linguère jege na ci Ferlo.\n\n### Aada\n\nAada yu norte, sàmm ak dundin bu Sahel.`,
  },
  'region-de-matam': {
    titleWo: 'Diiwaanu Matam',
    excerptWo: 'Wàllu dexu Senegaal — Fouta-Toro, agriculture, sàmm ak aada Peul.',
    contentWo: `### Jëmmal\n\nMatam nekk na ci nord-est, ci wetug dexu Senegaal. Zone agricole ak pastorale, xolum Fouta-Toro ak diggante ak Mauritanie.\n\n### Toppatoo\n\nDépartements : Matam, Kanel ak Ranérou-Ferlo.\n\n### Ekonom ak aada\n\nAgriculture bu wàllu dex gi, sàmm, commerce ak jokkoo ak Mauritanie. Aada Peul ak Haalpulaar am na solo ci diiwaan bi.\n\n### Nature\n\nDex gi, tool yu wàll ak paysage bu Fouta.`,
  },
  'region-de-tambacounda': {
    titleWo: 'Diiwaanu Tambacounda',
    excerptWo: 'Diiwaan bu gën a rëy — Niokolo-Koba, penku ak nature.',
    contentWo: `### Jëmmal\n\nTambacounda mooy diiwaan bu gën a rëy ci Senegaal. Niokolo-Koba bokk na ci patrimoine naturel bu àdduna bi.\n\n### Nature\n\nParc national du Niokolo-Koba (UNESCO), àll yi ak rab yu àll — lion, éléphant, hippopotame.\n\n### Toppatoo\n\nDépartements : Tambacounda, Bakel, Goudiry ak Koumpentoum.\n\n### Ekonom\n\nAgriculture, sàmm, or ak tourisme nature.`,
  },
  'region-de-kedougou': {
    titleWo: 'Diiwaanu Kédougou',
    excerptWo: 'Sud-est — chutes de Dindéfélo, pays Bassari, or ak nature.',
    contentWo: `### Jëmmal\n\nKédougou nekk na ci sud-est Senegaal. Xam nañu ko ci nature, or ak aada Bassari, Peul ak Bédik.\n\n### Nature ak aada\n\nChutes de Dindéfélo, pays Bassari (UNESCO), montagne yi ak askan yu wuute. Paysages culturels Bassari, Peul et Bédik.\n\n### Toppatoo\n\nDépartements : Kédougou, Saraya ak Salémata.\n\n### Ekonom\n\nOr, agriculture, tourisme nature ak culturel.`,
  },
  'region-de-kolda': {
    titleWo: 'Diiwaanu Kolda',
    excerptWo: 'Fouladou — Haute Casamance, agriculture, sàmm ak aada yu wuute.',
    contentWo: `### Jëmmal\n\nKolda nekk na ci Haute Casamance, territoire Fouladou. Zone bu fees ak agriculture, sàmm ak askan yu wuute.\n\n### Toppatoo\n\nDépartements : Kolda, Vélingara ak Médina Yoro Foulah.\n\n### Ekonom ak aada\n\nAgriculture (riz, arachide), sàmm ak commerce. Aada Peul, Mandingue ak askan yu Haute Casamance.\n\n### Nature\n\nÀll yi, tool yu riz ak paysage bu Casamance bu kaw.`,
  },
  'region-de-sedhiou': {
    titleWo: 'Diiwaanu Sédhiou',
    excerptWo: 'Casamance — vallées, àll yi, aada yu wuute ak patrimoine.',
    contentWo: `### Jëmmal\n\nSédhiou nekk na ci Casamance, diggante Ziguinchor ak Kolda. Vallées, àll yi, dëkk yu aada ak patrimoine bu local.\n\n### Toppatoo\n\nDépartements : Sédhiou, Bounkiling ak Goudomp.\n\n### Ekonom\n\nAgriculture (riz bu Casamance), pêche ci dex yi ak commerce local. Riz am na solo ci dundin.\n\n### Aada ak patrimoine\n\nAada yu wuute, Fort Pinet-Laprade, mosquées yu yàgg ak dundin bu Casamance.`,
  },
  'le-lac-rose': {
    titleWo: 'Lac Rose (Lac Retba)',
    excerptWo: 'Lac bu am melo rose — tourisme, sel ak patrimoine naturel ci wetug Dakar.',
    contentWo: `### Jëmmal\n\nLac Rose walla Lac Retba nekk na ci wetug Dakar (diiwaanu Thiès). Melo rose bi mën na feeñ ci jamono yu tàng, rawatina ci njaarum sel bu am solo.\n\n### Solo\n\nTourisme, extraction du sel, plage, chameaux, photo yu rafet ak dundin bu local. Benn ci bérab yu gën a xam ci Senegaal, jege Dakar.\n\n### Xibaar\n\nMelo bi dafa aju ci micro-algues ak sel ; dañu koy seet ci waxtu yu tàng.`,
  },
  'l-ile-de-goree': {
    titleWo: 'Dunu Gorée',
    excerptWo: 'Patrimoine mondial UNESCO — mémoire de la traite négrière atlantique.',
    contentWo: `### Jëmmal\n\nDunu Gorée nekk na ci géeju Dakar. Mooy bérab bu xelal nit ñi ci taariixu traite négrière atlantique, te bokk na ci patrimoine mondial UNESCO.\n\n### Solo\n\nMaison des Esclaves, musées, architecture coloniale, tourisme mémoriel ak aada. Gorée dafa am solo ci xelal àdduna bi ak ci taariixu Afrique.\n\n### Seetaan\n\nPirogue walla ferry jële Dakar ; bérab bu ndaw waaye bu fees ak taariix.`,
  },
  'tourisme-saint-louis-patrimoine-fleuve': {
    titleWo: 'Tourisme ci Ndar (Saint-Louis)',
    excerptWo: 'Patrimoine UNESCO, dexu Senegaal ak littoral.',
    contentWo: `### Jëmmal\n\nNdar nekk na ci norte. Île UNESCO, Pont Faidherbe, Langue de Barbarie, Parc national ak géej gi. Tourisme culturel ak naturel am na solo.`,
  },
  'tourisme-thies-patrimoine-littoral': {
    titleWo: 'Tourisme ci Thiès',
    excerptWo: 'Petite Côte, Lac Rose, Bandia — bunt bu littoral.',
    contentWo: `### Jëmmal\n\nThiès mooy bunt bu jëm ci Petite Côte. Somone, Popenguine, Bandia, Saly ak Lac Rose bokk nañu ci bérab yu am solo.`,
  },
  'tourisme-fatick-sine-saloum': {
    titleWo: 'Tourisme ci Fatick — Siin-Saalum',
    excerptWo: 'Delta, mangrove, duni yi ak aada yu Siin.',
    contentWo: `### Jëmmal\n\nFatick nekk na ci xolum Siin-Saalum. Îles du Saloum, Palmarin, Joal-Fadiouth, Foundiougne ak réserves yu nature.`,
  },
  'tourisme-kaolack-saloum': {
    titleWo: 'Tourisme ci Kaolack — Saalum',
    excerptWo: 'Saalum, bassin arachidier ak dëkk bu centre.',
    contentWo: `### Jëmmal\n\nKaolack mooy dëkk bu mag ci centre. Dexu Saalum, marchés yu mag yi ak aada yu local.`,
  },
  'tourisme-diourbel-baol': {
    titleWo: 'Tourisme ci Diourbel — Baol',
    excerptWo: 'Touba, terroirs ak aada yu Baol.',
    contentWo: `### Jëmmal\n\nDiourbel nekk na ci Baol. Touba, Diourbel, Bambey ak tourisme religieux (Grand Magal).`,
  },
  'tourisme-senegal-oriental-nature-cultures': {
    titleWo: 'Tourisme ci penku Senegaal',
    excerptWo: 'Niokolo-Koba, Kédougou, Bassari ak nature.',
    contentWo: `### Jëmmal\n\nPenku Senegaal : Parc Niokolo-Koba, pays Bassari, Kédougou, chutes de Dindéfélo ak askan yu wuute.`,
  },
  'iles-du-saloum-archipel-et-paysages-du-delta': {
    titleWo: 'Duni Saalum',
    excerptWo: 'Archipel, mangrove, jën ak aada yu nappkat yi.',
    contentWo: `### Jëmmal\n\nDuni Saalum bokk nañu ci patrimoine naturel bu gën a rafet. Mangrove, bolong yi, tourisme écologique ak pêche artisanale.`,
  },
  'delta-du-saloum-patrimoine-mondial-de-lunesco': {
    titleWo: 'Delta bu Saalum (UNESCO)',
    excerptWo: 'Patrimoine mondial — mangrove, duni yi ak aada.',
    contentWo: `### Jëmmal\n\nDelta du Saloum mooy patrimoine mondial UNESCO. Mangrove, duni yi, bolong ak aada yu Siin-Saalum.`,
  },
  'reserve-naturelle-communautaire-de-somone-lagune-et-mangrove-de-la-petite-cote': {
    titleWo: 'Reserve bu Somone',
    excerptWo: 'Lagune ak mangrove ci Petite Côte.',
    contentWo: `### Jëmmal\n\nReserve de Somone : lagune, mangrove, picc migrateurs ak pirogue. Bérab bu jàppale nature ak tourisme.`,
  },
  'fleuve-senegal-patrimoine-naturel': {
    titleWo: 'Dexu Senegaal',
    excerptWo: 'Patrimoine naturel ak axe historique bu norte.',
    contentWo: `### Jëmmal\n\nDexu Senegaal mooy benn ci dex yu mag yu Afrique de l'Ouest. Ndar, Matam, Bakel ak tool yu wàllu dex gi.`,
  },
  'lac-guiers-patrimoine-naturel': {
    titleWo: 'Lac de Guiers',
    excerptWo: 'Ressource bu ndox mu norte.',
    contentWo: `### Jëmmal\n\nLac de Guiers nekk na ci norte. Mooy benn ci sources yu ndox yu am solo ci réew mi, rawatina ci wetug Dakar.`,
  },
  'reserve-naturelle-de-popenguine-patrimoine-naturel-du-senegal': {
    titleWo: 'Reserve bu Popenguine',
    excerptWo: 'Falaise, géej ak nature ci Petite Côte.',
    contentWo: `### Jëmmal\n\nReserve de Popenguine : falaise, géej ak tourisme écologique. Bérab bu aada ak nature.`,
  },
  'foret-classee-de-bandia-patrimoine-naturel-de-thies': {
    titleWo: 'Àll bu Bandia',
    excerptWo: 'Àll, rab yi ak safari bu jege Dakar.',
    contentWo: `### Jëmmal\n\nForêt de Bandia nekk na ci wetug Thiès. Safari, rab (rhinocéros, giraffe…) ak àll. Tourisme bu jege Dakar.`,
  },
  'paysage-ferlo-patrimoine-naturel': {
    titleWo: 'Paysage bu Ferlo',
    excerptWo: 'Espaces pastoraux bu norte-penku.',
    contentWo: `### Jëmmal\n\nFerlo : zone bu yàtt, sàmm ak dundin bu pastoral. Paysage bu am solo ci norte-penku Senegaal.`,
  },
  'pays-bassari-paysages-culturels-bassari-peul-et-bedik': {
    titleWo: 'Pays Bassari',
    excerptWo: 'Paysages culturels UNESCO — Bassari, Peul ak Bédik.',
    contentWo: `### Jëmmal\n\nPays Bassari nekk na ci diiwaanu Kédougou. UNESCO : paysages culturels Bassari, Peul et Bédik. Aada, montagne ak nature.`,
  },
  'cercles-megalithiques-de-senegambie-patrimoine-mondial': {
    titleWo: 'Cercles mégalithiques bu Sénégambie',
    excerptWo: 'Patrimoine mondial UNESCO — doj yu yàgg.',
    contentWo: `### Jëmmal\n\nCercles mégalithiques de Sénégambie bokk nañu ci patrimoine mondial UNESCO. Doj yu yàgg, taariix ak aada.`,
  },
  'biennale-dakar-dakart-art-africain': {
    titleWo: 'Biennale bu Dakar (Dak\'Art)',
    excerptWo: 'Art africain contemporain — fànn bu mag.',
    contentWo: `### Jëmmal\n\nDak\'Art mooy benn ci fànn yu mag yu art contemporain ci Afrique. Expositions, rencontres ak dynamique culturelle bu Dakar.`,
  },
  'mausolee-de-cheikh-ahmadou-bamba-patrimoine-religieux-de-touba': {
    titleWo: 'Mausolée bu Cheikh Ahmadou Bamba',
    excerptWo: 'Xolum mouridisme ci Touba — Grand Magal.',
    contentWo: `### Jëmmal\n\nMausolée bi nekk na ci Touba. Mooy bérab bu ñu gën a séen ci mbirum diine mouride, rawatina ci Grand Magal. Touba am na solo lool ci aada, diine ak ekonom.`,
  },
  'festival-national-arts-cultures-fesnac': {
    titleWo: 'FESNAC',
    excerptWo: 'Festival national des Arts et Cultures.',
    contentWo: `### Jëmmal\n\nFESNAC dafay wone fecc, musik, théâtre ak aada yu diiwaan yépp ci réew mi.`,
  },
};

const CONTENT_WO: Record<string, WolofContent> = {
  ...CONTENT_WO_CORE,
  ...CONTENT_WO_EXTRA,
  ...CONTENT_WO_EXTRA_B,
  ...CONTENT_WO_EXTRA_C,
};

export function getWolofContentBySlug(slug: string): WolofContent | undefined {
  const clean = (slug.replace(/^\/+|\/+$/g, '').split('/').pop() ?? slug).toLowerCase();
  if (CONTENT_WO[clean]) return CONTENT_WO[clean];
  const withoutNum = clean.replace(/-\d+$/, '');
  if (withoutNum !== clean && CONTENT_WO[withoutNum]) return CONTENT_WO[withoutNum];
  return undefined;
}

export function getWolofContent(item: ContentItem): WolofContent | undefined {
  const candidates: string[] = [];
  if (item.url) candidates.push(item.url.replace(/\/$/, '').split('/').pop() ?? '');
  const maybeSlug = (item as { slug?: string }).slug;
  if (maybeSlug) candidates.push(maybeSlug);
  for (const c of candidates) {
    if (!c) continue;
    const wo = getWolofContentBySlug(c);
    if (wo) return wo;
  }
  return undefined;
}
