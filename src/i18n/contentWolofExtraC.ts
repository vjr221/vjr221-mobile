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
};
