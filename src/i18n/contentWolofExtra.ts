import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Gastronomie, lieux phares & compléments Wolof */
export const CONTENT_WO_EXTRA: Record<string, WolofContent> = {
  'ile-de-fadiouth': {
    titleWo: 'Dunu Fadiouth',
    excerptWo: 'Dunu coquillages ci Siin — aada Sereer ak patrimoine.',
    contentWo: `### Jëmmal\n\nÎle de Fadiouth nekk na ci wetug Joal. Dunu bi dafa tabax ci coquillages ; aada Sereer ak cimetière chrétien-musulman xam nañu leen.`,
  },
  'cap-skirring': {
    titleWo: 'Cap Skirring',
    excerptWo: 'Plage yu rafet ci Casamance — tourisme ak géej.',
    contentWo: `### Jëmmal\n\nCap Skirring nekk na ci diiwaanu Ziguinchor. Mooy benn ci bérab yu tourisme yu gën a xam ci Casamance — plage, hotels ak nature.`,
  },
  'pointe-des-almadies-dakar': {
    titleWo: 'Pointe des Almadies',
    excerptWo: 'Sowwu bu gën a sowwu ci Cap-Vert — Dakar, géej ak tourisme.',
    contentWo: `### Jëmmal\n\nPointe des Almadies mooy extrémité occidentale bu péninsule Cap-Vert. Restaurants, surf ak vista yu géej.`,
  },
  'plage-de-ngor': {
    titleWo: 'Plage bu N\'Gor',
    excerptWo: 'Plage ak dunu N\'Gor ci Dakar — surf, tourisme ak aada Lébou.',
    contentWo: `### Jëmmal\n\nPlage de N\'Gor nekk na ci Dakar. Dunu N\'Gor, surf ak restaurants yu géej am nañu solo ci tourisme local.`,
  },
  'thieboudiene-ceebu-jen': {
    titleWo: 'Ceebu jën (Thiéboudiène)',
    excerptWo: 'Riz ak jën — mbuum bu gën a xam ci këri Senegaal.',
    contentWo: `### Jëmmal\n\nCeebu jën (thiéboudiène) mooy mbuum bu nasyonaal bu Senegaal. Riz, jën (thiof walla yeneen), diwtiir, tomate ak wutus yu local.\n\n### Xibaar\n\nAm na ceebu jën bu xonq (rouge) ak bu weex (blanc). Dañu koy lekk ci njël walla ngoon, ak waxtu yu mag.`,
  },
  'ceebu-yapp': {
    titleWo: 'Ceebu yàpp',
    excerptWo: 'Riz ak yàpp — mbuum bu am solo ci këri yi.',
    contentWo: `### Jëmmal\n\nCeebu yàpp mooy riz bu ñu toxal ak yàpp (nag walla bëy), diwtiir ak wutus. Mbuum bu fees ci dëkk yi.`,
  },
  'mafe': {
    titleWo: 'Mafé',
    excerptWo: 'Sauce bu arachide ak yàpp walla jën.',
    contentWo: `### Jëmmal\n\nMafé mooy sauce bu arachide (tigadege), dañu koy toxal ak yàpp, jën walla vegetables. Lekk nañu ko ak ceeb.`,
  },
  'domoda': {
    titleWo: 'Domoda',
    excerptWo: 'Sauce bu tigadege ak vegetables — mbuum bu neex.',
    contentWo: `### Jëmmal\n\nDomoda dafa nirook mafé waaye mu am yeneen vegetables ak style bu local. Ceeb ak sauce bu arachide.`,
  },
  'soupou-kandia': {
    titleWo: 'Suppu kandja',
    excerptWo: 'Sauce bu gombo (kandja) ak jën walla yàpp.',
    contentWo: `### Jëmmal\n\nSuppu kandja mooy sauce bu gombo, jën walla yàpp, dañu koy lekk ak ceeb. Mbuum bu neex bu waxtu yu tàng.`,
  },
  'thiakry': {
    titleWo: 'Thiakry',
    excerptWo: 'Dessert bu mil (couscous) ak meew.',
    contentWo: `### Jëmmal\n\nThiakry mooy dessert bu couscous de mil, meew, sukkar ak yeneen. Dañu koy lekk ci ngoon walla ci fêtes.`,
  },
  'cafe-touba': {
    titleWo: 'Kafe Touba',
    excerptWo: 'Kafe bu am xorom ak jar — aada Mouride.',
    contentWo: `### Jëmmal\n\nKafe Touba dafa am poivre jar (djar) ak kafe. Xam nañu ko ci aada Mouride ak ci dëkk yépp ci Senegaal.`,
  },
  'bissap': {
    titleWo: 'Bissap',
    excerptWo: 'Jus bu tortue (hibiscus) — tàng walla sedd.',
    contentWo: `### Jëmmal\n\nBissap mooy jus bu feuilles de hibiscus. Dañu koy naan sedd walla tàng, ak sukkar. Bissap bu xonq ak bu ñuul am na.`,
  },
  'jus-de-bouye': {
    titleWo: 'Jus bu buy',
    excerptWo: 'Jus bu pain de singe (baobab).',
    contentWo: `### Jëmmal\n\nJus bu buy (bouye) dañu koy def ci doom yu baobab. Naan bu am solo ci santé ak aada.`,
  },
  'jus-de-gingembre': {
    titleWo: 'Jus bu gingembre',
    excerptWo: 'Jus bu gingembre bu tàng — naan bu gaaw.',
    contentWo: `### Jëmmal\n\nJus bu gingembre dafa am solo ci marchés ak restaurants. Naan bu tàng, dañu koy boole ak citron walla bissap.`,
  },
  'thiere-bassi-salte': {
    titleWo: 'Thiéré bassi salté',
    excerptWo: 'Couscous de mil ak sauce — patrimoine céréalier.',
    contentWo: `### Jëmmal\n\nThiéré (couscous de mil) ak bassi salté bokk nañu ci patrimoine culinaire. Dañu koy lekk ci waxtu yu mag ak fêtes.`,
  },
  'poisson-braise-lakk-dieune': {
    titleWo: 'Lakk jën (poisson braisé)',
    excerptWo: 'Jën bu ñu lakk ci taal — géej ak marchés.',
    contentWo: `### Jëmmal\n\nLakk jën mooy jën bu ñu braisé ci taal. Xam nañu ko ci plages, marchés ak restaurants yu géej.`,
  },
  'ndambe-ragout-de-niebe-petit-dejeuner-populaire-senegalais': {
    titleWo: 'Ndambé',
    excerptWo: 'Ragoût bu niébé — njël bu popular.',
    contentWo: `### Jëmmal\n\nNdambé mooy ragoût bu niébé, dañu koy lekk ci njël ak mburu. Mbuum bu yomb bu marchés yu Dakar.`,
  },
  'thiou': {
    titleWo: 'Thiou',
    excerptWo: 'Sauce bu tomate ak jën walla yàpp.',
    contentWo: `### Jëmmal\n\nThiou mooy sauce bu tomate, dañu koy toxal ak jën walla yàpp, lekk ak ceeb.`,
  },
  'caldou': {
    titleWo: 'Caldou',
    excerptWo: 'Mbuum bu jën bu Casamance — riz ak sauce.',
    contentWo: `### Jëmmal\n\nCaldou mooy mbuum bu jën bu xam ci Casamance. Riz, jën ak sauce bu local.`,
  },
  'le-thiof-au-senegal-poisson-emblematique-peche-et-gastronomie': {
    titleWo: 'Thiof',
    excerptWo: 'Jën bu gën a xam ci ceebu jën ak napp.',
    contentWo: `### Jëmmal\n\nThiof mooy jën bu emblématique ci Senegaal. Dañu koy jàpp ci géej, lekk ci ceebu jën ak yeneen mbuum.`,
  },
  'riz-de-casamance': {
    titleWo: 'Ceebu Casamance',
    excerptWo: 'Riz bu local bu Casamance — agriculture ak aada.',
    contentWo: `### Jëmmal\n\nRiz de Casamance am na solo ci dundin ak aada. Tool yu riz ci mangrove ak vallées.`,
  },
  'lakhou-bissap': {
    titleWo: 'Lakhou bissap',
    excerptWo: 'Mbuum bu mil ak bissap.',
    contentWo: `### Jëmmal\n\nLakhou bissap dafa boole mil ak bissap. Mbuum bu aada bu am solo ci yeneen dëkk.`,
  },
  'les-epices-dans-la-cuisine-senegalaise': {
    titleWo: 'Xorom yi ci këri Senegaal',
    excerptWo: 'Xorom, netetou, jar ak yeneen.',
    contentWo: `### Jëmmal\n\nKëri Senegaal dafa fees ak xorom : netetou, jar (djar), gingembre, piment ak yeneen yu local.`,
  },
};
