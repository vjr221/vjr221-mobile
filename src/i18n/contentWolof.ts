import type { ContentItem } from '../types/content';
import { CONTENT_WO_EXTRA } from './contentWolofExtra';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Régions, tourisme, patrimoine — gastronomie dans contentWolofExtra */
const CONTENT_WO_CORE: Record<string, WolofContent> = {
  'region-de-dakar': {
    titleWo: 'Diiwaanu Dakar',
    excerptWo: 'Dakar — dëkk bu mag bu politik, ekonom ak administrasyon.',
    contentWo: `### Jëmmal\n\nDiiwaanu Dakar mooy diiwaan bu gën a ndaw ci superficie, waaye mu am solo lool. Dakar mooy capitale. Départements : Dakar, Guédiawaye, Pikine, Keur Massar, Rufisque. Gorée, Corniche, Renaissance Africaine.`,
  },
  'region-de-ziguinchor': {
    titleWo: 'Diiwaanu Ziguinchor',
    excerptWo: 'Xolum Casamance — mangrove, tourisme, aada Diola.',
    contentWo: `### Jëmmal\n\nZiguinchor nekk na ci Casamance. Départements : Ziguinchor, Oussouye, Bignona. Cap Skirring, mangrove, aada yu wuute.`,
  },
  'region-de-thies': {
    titleWo: 'Diiwaanu Thiès',
    excerptWo: 'Bunt bu littoral — Lac Rose, Petite Côte, industrie.',
    contentWo: `### Jëmmal\n\nThiès : départements Thiès, Tivaouane, Mbour. Lac Rose, Somone, Popenguine, Bandia.`,
  },
  'region-de-saint-louis': {
    titleWo: 'Diiwaanu Ndar',
    excerptWo: 'Dëkk bu UNESCO, dexu Senegaal, Langue de Barbarie.',
    contentWo: `### Jëmmal\n\nNdar (Saint-Louis) : patrimoine UNESCO, Pont Faidherbe, pêche ak tourisme.`,
  },
  'region-de-diourbel': {
    titleWo: 'Diiwaanu Diourbel',
    excerptWo: 'Baol — Touba, aada Mouride, agriculture.',
    contentWo: `### Jëmmal\n\nDiourbel, Bambey, Mbacké. Touba ak Grand Magal.`,
  },
  'region-de-kaolack': {
    titleWo: 'Diiwaanu Kaolack',
    excerptWo: 'Carrefour arachidier — Saalum, commerce, sel.',
    contentWo: `### Jëmmal\n\nKaolack, Guinguinéo, Nioro. Commerce ak dexu Saalum.`,
  },
  'region-de-kaffrine': {
    titleWo: 'Diiwaanu Kaffrine',
    excerptWo: 'Xolum agro-pastoral (2008).',
    contentWo: `### Jëmmal\n\nKaffrine, Birkelane, Koungheul, Malem Hodar. Agriculture ak sàmm.`,
  },
  'region-de-fatick': {
    titleWo: 'Diiwaanu Fatick',
    excerptWo: 'Siin-Saalum — delta, mangrove, aada Sereer.',
    contentWo: `### Jëmmal\n\nFatick, Foundiougne, Gossas. Îles du Saloum, Joal-Fadiouth.`,
  },
  'region-de-louga': {
    titleWo: 'Diiwaanu Louga',
    excerptWo: 'Bunt yu Sahel — Ndiambour, sàmm.',
    contentWo: `### Jëmmal\n\nLouga, Kébémer, Linguère. Sàmm ak agriculture.`,
  },
  'region-de-matam': {
    titleWo: 'Diiwaanu Matam',
    excerptWo: 'Wàllu dexu Senegaal — Fouta, agriculture.',
    contentWo: `### Jëmmal\n\nMatam, Kanel, Ranérou. Dex gi ak sàmm.`,
  },
  'region-de-tambacounda': {
    titleWo: 'Diiwaanu Tambacounda',
    excerptWo: 'Diiwaan bu gën a rëy — Niokolo-Koba.',
    contentWo: `### Jëmmal\n\nTambacounda, Bakel, Goudiry, Koumpentoum. Parc Niokolo-Koba.`,
  },
  'region-de-kedougou': {
    titleWo: 'Diiwaanu Kédougou',
    excerptWo: 'Sud-est — Bassari, chutes, or.',
    contentWo: `### Jëmmal\n\nKédougou, Saraya, Salémata. Dindéfélo, pays Bassari.`,
  },
  'region-de-kolda': {
    titleWo: 'Diiwaanu Kolda',
    excerptWo: 'Fouladou — Haute Casamance.',
    contentWo: `### Jëmmal\n\nKolda, Vélingara, Médina Yoro Foulah. Agriculture ak sàmm.`,
  },
  'region-de-sedhiou': {
    titleWo: 'Diiwaanu Sédhiou',
    excerptWo: 'Casamance — vallées ak àll yi.',
    contentWo: `### Jëmmal\n\nSédhiou, Bounkiling, Goudomp. Agriculture ak aada.`,
  },
  'le-lac-rose': {
    titleWo: 'Lac Rose',
    excerptWo: 'Lac Retba — tourisme ak sel.',
    contentWo: `### Jëmmal\n\nLac Rose (Retba) nekk na ci wetug Dakar. Melo rose, sel ak tourisme.`,
  },
  'l-ile-de-goree': {
    titleWo: 'Dunu Gorée',
    excerptWo: 'UNESCO — mémoire traite négrière.',
    contentWo: `### Jëmmal\n\nGorée ci géeju Dakar. Maison des Esclaves, tourisme mémoriel.`,
  },
  'tourisme-saint-louis-patrimoine-fleuve': {
    titleWo: 'Tourisme ci Ndar',
    excerptWo: 'Patrimoine, dex, littoral.',
    contentWo: `### Jëmmal\n\nNdar UNESCO, Langue de Barbarie, tourisme culturel.`,
  },
  'tourisme-thies-patrimoine-littoral': {
    titleWo: 'Tourisme ci Thiès',
    excerptWo: 'Littoral ak nature.',
    contentWo: `### Jëmmal\n\nPetite Côte, Bandia, Lac Rose.`,
  },
  'tourisme-fatick-sine-saloum': {
    titleWo: 'Tourisme ci Fatick',
    excerptWo: 'Siin-Saalum, delta.',
    contentWo: `### Jëmmal\n\nÎles du Saloum, Palmarin, Fadiouth.`,
  },
  'tourisme-kaolack-saloum': {
    titleWo: 'Tourisme ci Kaolack',
    excerptWo: 'Saalum ak centre.',
    contentWo: `### Jëmmal\n\nDexu Saalum, marchés.`,
  },
  'tourisme-diourbel-baol': {
    titleWo: 'Tourisme ci Diourbel',
    excerptWo: 'Baol ak Touba.',
    contentWo: `### Jëmmal\n\nTouba, terroirs Baol.`,
  },
  'tourisme-senegal-oriental-nature-cultures': {
    titleWo: 'Tourisme ci penku',
    excerptWo: 'Niokolo-Koba, Kédougou.',
    contentWo: `### Jëmmal\n\nParc, Bassari, chutes.`,
  },
  'iles-du-saloum-archipel-et-paysages-du-delta': {
    titleWo: 'Duni Saalum',
    excerptWo: 'Archipel, mangrove.',
    contentWo: `### Jëmmal\n\nDelta, bolong, tourisme écologique.`,
  },
  'reserve-naturelle-communautaire-de-somone-lagune-et-mangrove-de-la-petite-cote': {
    titleWo: 'Reserve bu Somone',
    excerptWo: 'Lagune ak mangrove.',
    contentWo: `### Jëmmal\n\nPetite Côte, picc, pirogue.`,
  },
  'fleuve-senegal-patrimoine-naturel': {
    titleWo: 'Dexu Senegaal',
    excerptWo: 'Axe historique bu norte.',
    contentWo: `### Jëmmal\n\nNdar, Matam, Bakel.`,
  },
  'lac-guiers-patrimoine-naturel': {
    titleWo: 'Lac de Guiers',
    excerptWo: 'Ressource bu ndox.',
    contentWo: `### Jëmmal\n\nNorte, ndox mu am solo.`,
  },
  'reserve-naturelle-de-popenguine-patrimoine-naturel-du-senegal': {
    titleWo: 'Reserve bu Popenguine',
    excerptWo: 'Falaise ak géej.',
    contentWo: `### Jëmmal\n\nPetite Côte, nature.`,
  },
  'foret-classee-de-bandia-patrimoine-naturel-de-thies': {
    titleWo: 'Àll bu Bandia',
    excerptWo: 'Safari bu jege Dakar.',
    contentWo: `### Jëmmal\n\nThiès, rab, àll.`,
  },
  'paysage-ferlo-patrimoine-naturel': {
    titleWo: 'Paysage bu Ferlo',
    excerptWo: 'Espaces pastoraux.',
    contentWo: `### Jëmmal\n\nNorte-penku, sàmm.`,
  },
  'biennale-dakar-dakart-art-africain': {
    titleWo: 'Biennale bu Dakar',
    excerptWo: 'Art contemporain.',
    contentWo: `### Jëmmal\n\nDak'Art — fànn yu Afrique.`,
  },
  'mausolee-de-cheikh-ahmadou-bamba-patrimoine-religieux-de-touba': {
    titleWo: 'Mausolée bu Touba',
    excerptWo: 'Xolum mouridisme.',
    contentWo: `### Jëmmal\n\nCheikh Ahmadou Bamba, Grand Magal.`,
  },
  'festival-national-arts-cultures-fesnac': {
    titleWo: 'FESNAC',
    excerptWo: 'Festival national.',
    contentWo: `### Jëmmal\n\nFecc, musik, aada yu diiwaan yépp.`,
  },
};

const CONTENT_WO: Record<string, WolofContent> = { ...CONTENT_WO_CORE, ...CONTENT_WO_EXTRA };

export function getWolofContentBySlug(slug: string): WolofContent | undefined {
  const clean = slug.replace(/^\/+|\/+$/g, '').split('/').pop() ?? slug;
  return CONTENT_WO[clean];
}

export function getWolofContent(item: ContentItem): WolofContent | undefined {
  const slug = item.url?.replace(/\/$/, '').split('/').pop();
  return slug ? getWolofContentBySlug(slug) : undefined;
}
