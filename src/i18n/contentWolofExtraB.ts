import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_B: Record<string, WolofContent> = {
  'thiere-mboum-une-specialite-cerealiere-du-patrimoine-culinaire-senegalais': {
    titleWo: 'Thiéré mboum',
    excerptWo: 'Spécialité céréalière.',
    contentWo: `### Jëmmal\n\nThiéré mboum : mil, sauce, patrimoine culinaire.`,
  },
  'jus-de-tamarin': {
    titleWo: 'Jus bu tamarin',
    excerptWo: 'Naan bu tamarin.',
    contentWo: `### Jëmmal\n\nJus bu tamarin : sedd, fruits locaux.`,
  },
  'jus-de-ditakh': {
    titleWo: 'Jus bu ditakh',
    excerptWo: 'Naan bu ditakh.',
    contentWo: `### Jëmmal\n\nJus bu ditakh : fruit bu local.`,
  },
  'les-salons-de-the-et-la-ceremonie-de-lataya-au-senegal': {
    titleWo: 'Ataya',
    excerptWo: 'Ceremonie bu thé.',
    contentWo: `### Jëmmal\n\nAtaya : ñetti gallé, waxtaan, teranga.`,
  },
  'lempire-du-djolof': {
    titleWo: 'Empire bu Djolof',
    excerptWo: 'Taariixu Djolof — njiit ak aada yu yàgg.',
    contentWo: `### Jëmmal\n\nEmpire du Djolof mooy benn ci royaumes yu yàgg yu Senegaal. Taariix, njiit ak aada yu nord.`,
  },
  'le-royaume-du-cayor': {
    titleWo: 'Royaume bu Cayor',
    excerptWo: 'Taariixu Cayor — Damel yi ak aada.',
    contentWo: `### Jëmmal\n\nRoyaume du Cayor am na solo ci taariixu Senegaal. Damel yi, aada ak diggante ak yeneen royaumes.`,
  },
  'hymne-national-senegal-lion-rouge': {
    titleWo: 'Hymne nasyonaal — Lion Rouge',
    excerptWo: 'Hymne bu Senegaal — paroles ak taariix.',
    contentWo: `### Jëmmal\n\nHymne national du Sénégal (« Le Lion rouge ») mooy simbule bu réew mi. Paroles, musik ak taariixu indipendance.`,
  },
  'musee-mbiin-ndiogoye-joal': {
    titleWo: 'Musée Mbiin Ndiogoye (Joal)',
    excerptWo: 'Mémoire ak patrimoine ci Joal.',
    contentWo: `### Jëmmal\n\nMusée Mbiin Ndiogoye de Joal dafay aar mémoire ak patrimoine bu Siin. Aada Sereer ak taariix local.`,
  },
  'ecomusee-commerce-fluvial-podor': {
    titleWo: 'Écomusée bu Podor',
    excerptWo: 'Commerce fluvial ak taariixu norte.',
    contentWo: `### Jëmmal\n\nÉcomusée du commerce fluvial de Podor : dexu Senegaal, commerce ak taariixu norte.`,
  },
  'week-end-dakar-itineraire-culturel-patrimoine': {
    titleWo: 'Week-end ci Dakar — itinéraire culturel',
    excerptWo: 'Patrimoine, aada ak bérab yu Dakar.',
    contentWo: `### Jëmmal\n\nItinéraire culturel ci Dakar : Gorée, Corniche, musées, marchés ak bérab yu aada.`,
  },
  'centre-culturel-regional-blaise-senghor-de-dakar': {
    titleWo: 'Centre culturel Blaise Senghor',
    excerptWo: 'Centre culturel régional ci Dakar.',
    contentWo: `### Jëmmal\n\nCentre Culturel Régional Blaise Senghor ci Dakar : art, spectacles ak aada.`,
  },
  'tourisme-louga-terroirs-nord': {
    titleWo: 'Tourisme ci Louga',
    excerptWo: 'Terroirs ak patrimoine bu norte.',
    contentWo: `### Jëmmal\n\nLouga : terroirs, Ndiambour, sàmm ak aada yu norte.`,
  },
  'tourisme-kaffrine-saloum-interieur': {
    titleWo: 'Tourisme ci Kaffrine',
    excerptWo: 'Saloum intérieur ak agro-pastoral.',
    contentWo: `### Jëmmal\n\nKaffrine : découverte du Saloum intérieur, agriculture ak sàmm.`,
  },
  'tourisme-matam-vallee-fleuve': {
    titleWo: 'Tourisme ci Matam',
    excerptWo: 'Wàllu dexu Senegaal.',
    contentWo: `### Jëmmal\n\nMatam : vallée du fleuve, Fouta-Toro, agriculture ak aada Peul.`,
  },
  'tourisme-tambacounda-senegal-oriental': {
    titleWo: 'Tourisme ci Tambacounda',
    excerptWo: 'Senegaal oriental, Niokolo-Koba.',
    contentWo: `### Jëmmal\n\nTambacounda : penku, Niokolo-Koba, nature ak askan yu wuute.`,
  },
  'tourisme-ziguinchor': {
    titleWo: 'Tourisme ci Ziguinchor',
    excerptWo: 'Casamance, mangrove, Cap Skirring.',
    contentWo: `### Jëmmal\n\nZiguinchor : Casamance, plages, mangrove ak aada yu Diola.`,
  },
  'tourisme-kolda': {
    titleWo: 'Tourisme ci Kolda',
    excerptWo: 'Haute Casamance, Fouladou.',
    contentWo: `### Jëmmal\n\nKolda : Haute Casamance, agriculture, sàmm ak aada.`,
  },
  'tourisme-sedhiou': {
    titleWo: 'Tourisme ci Sédhiou',
    excerptWo: 'Casamance, vallées ak àll yi.',
    contentWo: `### Jëmmal\n\nSédhiou : vallées, forêts, aada ak patrimoine bu Casamance.`,
  },
  'tourisme-kedougou': {
    titleWo: 'Tourisme ci Kédougou',
    excerptWo: 'Bassari, chutes, nature.',
    contentWo: `### Jëmmal\n\nKédougou : pays Bassari, Dindéfélo, or ak tourisme nature.`,
  },
  'cimetiere-de-bel-air-patrimoine-historique-de-dakar': {
    titleWo: 'Cimetière bu Bel-Air',
    excerptWo: 'Patrimoine historique bu Dakar.',
    contentWo: `### Jëmmal\n\nCimetière de Bel-Air : mémoire ak taariixu Dakar.`,
  },
  'mosquee-el-hadji-omar-patrimoine-religieux-du-senegal': {
    titleWo: 'Mosquée El Hadji Omar',
    excerptWo: 'Patrimoine religieux.',
    contentWo: `### Jëmmal\n\nMosquée El Hadji Omar : patrimoine religieux bu Senegaal.`,
  },
  'mosquee-de-camberene-patrimoine-religieux-de-dakar': {
    titleWo: 'Mosquée bu Cambérène',
    excerptWo: 'Patrimoine religieux bu Dakar.',
    contentWo: `### Jëmmal\n\nMosquée de Cambérène : aada ak diine ci Dakar.`,
  },
  'eglise-saint-louis-patrimoine-religieux-de-saint-louis': {
    titleWo: 'Église Saint-Louis',
    excerptWo: 'Patrimoine religieux bu Ndar.',
    contentWo: `### Jëmmal\n\nÉglise Saint-Louis : patrimoine religieux ak architecture ci Ndar.`,
  },
  'mosquee-de-la-pointe-patrimoine-religieux-de-dakar': {
    titleWo: 'Mosquée de la Pointe',
    excerptWo: 'Patrimoine religieux bu Dakar.',
    contentWo: `### Jëmmal\n\nMosquée de la Pointe : diine ak architecture ci Dakar.`,
  },
  'medina-baye': {
    titleWo: 'Médina Baye',
    excerptWo: 'Centre spirituel bu Kaolack.',
    contentWo: `### Jëmmal\n\nMédina Baye : centre spirituel, aada Tidjane ci Kaolack.`,
  },
  'patrimoine-religieux-du-senegal': {
    titleWo: 'Patrimoine religieux bu Senegaal',
    excerptWo: 'Mosquées, églises ak bérab yu diine.',
    contentWo: `### Jëmmal\n\nPatrimoine religieux : mosquées, églises, mausolées ak aada yu réew mi.`,
  },
  'carabane': {
    titleWo: 'Carabane',
    excerptWo: 'Dunu ak aada ci Casamance.',
    contentWo: `### Jëmmal\n\nCarabane : île, histoire, aada ak tourisme ci Casamance.`,
  },
  'thiere-boulettes-couscous-mil-sauce-boulettes': {
    titleWo: 'Thiéré boulettes',
    excerptWo: 'Couscous de mil ak sauce boulettes.',
    contentWo: `### Jëmmal\n\nThiéré boulettes : mil, sauce, boulettes — patrimoine céréalier.`,
  },
  'mosquee-de-baghere-patrimoine-religieux-de-sedhiou': {
    titleWo: 'Mosquée bu Baghère',
    excerptWo: 'Patrimoine religieux bu Sédhiou.',
    contentWo: `### Jëmmal\n\nMosquée de Baghère : diine ak architecture ci Sédhiou.`,
  },
  'mosquee-de-karantaba-patrimoine-religieux-de-sedhiou': {
    titleWo: 'Mosquée bu Karantaba',
    excerptWo: 'Patrimoine religieux bu Sédhiou.',
    contentWo: `### Jëmmal\n\nMosquée de Karantaba : patrimoine religieux ci Sédhiou.`,
  },
  'chateau-de-sedhiou-memoire-architecturale-de-la-casamance': {
    titleWo: 'Château bu Sédhiou',
    excerptWo: 'Mémoire architecturale bu Casamance.',
    contentWo: `### Jëmmal\n\nChâteau de Sédhiou : architecture, taariix ak mémoire bu Casamance.`,
  },
  'falaise-de-toundeup-riya-site-geologique-de-yoff': {
    titleWo: 'Falaise bu Toundeup Riya',
    excerptWo: 'Site géologique ci Yoff.',
    contentWo: `### Jëmmal\n\nFalaise de Toundeup Riya : site géologique ci Yoff, Dakar.`,
  },
  'cap-manuel-site-prehistorique-et-geologique-de-dakar': {
    titleWo: 'Cap Manuel',
    excerptWo: 'Site préhistorique ak géologique bu Dakar.',
    contentWo: `### Jëmmal\n\nCap Manuel : préhistoire, géologie ak panorama ci Dakar.`,
  },
  'femme-kagnalene-thionk-tradition-rituelle-de-casamance': {
    titleWo: 'Femme Kagnalene Thionk',
    excerptWo: 'Tradition rituelle bu Casamance.',
    contentWo: `### Jëmmal\n\nKagnalene Thionk : rite, aada ak transmission ci Casamance.`,
  },
  'goungoudongho-rite-traditionnel-de-circoncision': {
    titleWo: 'Goungoudongho',
    excerptWo: 'Rite traditionnel de circoncision.',
    contentWo: `### Jëmmal\n\nGoungoudongho : rite, aada ak transmission yu yàgg.`,
  },
  'caayde-patrimoine-culturel-peul-du-matam': {
    titleWo: 'Caaydé',
    excerptWo: 'Patrimoine culturel peul bu Matam.',
    contentWo: `### Jëmmal\n\nCaaydé : aada Peul, patrimoine culturel ci Matam.`,
  },
  'diokaa-pratique-culturelle-traditionnelle-du-senegal-oriental': {
    titleWo: 'Diokaa',
    excerptWo: 'Pratique culturelle bu penku.',
    contentWo: `### Jëmmal\n\nDiokaa : aada yu penku Senegaal, transmission.`,
  },
  'fifiree-ceremonie-traditionnelle-du-matam': {
    titleWo: 'Fifiree',
    excerptWo: 'Cérémonie traditionnelle bu Matam.',
    contentWo: `### Jëmmal\n\nFifiree : cérémonie, aada ak askanu Matam.`,
  },
};
