import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

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
};

export function getWolofContentBySlug(slug: string): WolofContent | undefined {
  const clean = slug.replace(/^\/+|\/+$/g, '').split('/').pop() ?? slug;
  return CONTENT_WO[clean];
}

export function getWolofContent(item: ContentItem): WolofContent | undefined {
  const slug = item.url?.replace(/\/$/, '').split('/').pop();
  return slug ? getWolofContentBySlug(slug) : undefined;
}
