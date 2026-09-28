import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 12 — institutions et lieux culturels actuellement recensés sur VJR 221 */
export const CONTENT_WO_EXTRA_H: Record<string, WolofContent> = {
  'musee-du-crds-de-saint-louis-musee-regional-saint-louis': {
    titleWo: 'Musée du CRDS bu Ndar — musée régional ak patrimoine',
    excerptWo: 'Musée bu Centre de recherches et de documentation du Sénégal ci Ndar, buy jàppale taariix, recherche ak dencug patrimoine.',
    contentWo: `### Jëmmal

Musée du CRDS bu Ndar bokk na ci Centre de recherches et de documentation du Sénégal. Mu jàppale ci dencug, documentation ak transmissionu taariix ak patrimoine bu Saint-Louis ak norte Senegaal.

### Ndar ak mémoire

Saint-Louis am na taariix bu yàgg bu lëkkale dexu Senegaal, commerce, administration, architecture ak aada. Musée bi di may ay repères ci mbir yi tax dëkk bi am solo ci taariixu réew mi.

### Recherche ak collections

CRDS di lëkkale recherche, documentation, collections ak médiation. Musée ak centreu documentation di jàppale chercheurs, étudiants ak visiteurs ci jokkoo ak xam-xam bu patrimoine.

### Transmission

Dencug patrimoine am na solo bu dul denc rekk : war na itam jox nit ñi yoon ngir xam, jàng ak fàttaliku. Musée bi bokk na ci liggéey boobu ci Ndar.

### Li war a fàttaliku

- Musée du CRDS bu Ndar
- Taariix ak patrimoine bu Saint-Louis
- Recherche, documentation ak transmission`,
  },
  'musee-regional-de-thies-histoire-et-ethnographie-thies': {
    titleWo: 'Musée régionalu Thiès — taariix ak ethnographie',
    excerptWo: 'Musée bu Thiès buy wone taariix, ethnographie, mémoire locale ak patrimoine bu diiwaan bi.',
    contentWo: `### Jëmmal

Musée régionalu Thiès mooy bérab bu ñuy denc ak wone mbirum taariix ak patrimoine bu diiwaan bi. Mu lëkkale collections, ethnographie ak mémoire locale.

### Diiwaanu Thiès

Thiès am na bérab bu am solo ci taariixu transport, industrie, agriculture ak culture. Seetlu mbirum dundug nit ñi ci diiwaan bi di may xam-xam ci yoonu dëkk ak soppi-soppi yi ñu jaar.

### Ethnographie ak patrimoine

Ethnographie di jàppale xam ni nit ñi di dund, liggéey, def aada ak yokk seen askan. Collectionsu musée mën na doon ay repères ngir jàng cosaan ak mémoire bu diiwaan bi.

### Transmission

Musée régional yi am nañu solo ci njàng, recherche ak transmission. Ñu may nañu jeunes, chercheurs ak visiteurs yoon ngir xam taariix ak patrimoine ci seen bérab.

### Li war a fàttaliku

- Musée régionalu Thiès
- Taariix ak ethnographie
- Mémoire locale ak transmission`,
  },
  'maison-de-la-culture-douta-seck-medina-dakar': {
    titleWo: 'Maison de la Culture Douta Seck — bérab bu arts ci Médina',
    excerptWo: 'Centre culturel bu Médina ci Dakar, buy jàppale création, diffusion, rencontres ak transmissionu arts.',
    contentWo: `### Jëmmal

Maison de la Culture Douta Seck nekk na ci Médina ci Dakar. Mu bokk ci bérab yi di doxal vie culturelle bu dëkk bi, ak activités yu jëm ci création, diffusion ak transmissionu arts.

### Création ak rencontre

Maison bi mën na doon bérab bu artistes, acteurs culturels ak public di daje. Rencontres, échanges ak activités culturelles di jàppale jokkoo diggante création ak dëkkandoo.

### Arts ak transmission

Arts scéniques, arts visuels ak yeneen formesu expression mën nañu am seen bérab ci centre bi. Transmission ak njàng di may jeunes ak public yi yoon ngir bokk ci dundug culture.

### Patrimoine culturel

Maisonu culture yi am nañu solo ci aar ak yégle patrimoine, di boole mémoire ak création bu jamono jii. Douta Seck bokk na ci paysageu établissements culturels bu Dakar.

### Li war a fàttaliku

- Maison de la Culture Douta Seck
- Médina, Dakar
- Création, arts ak transmission`,
  },
  'leopold-sedar-senghor-poete-et-homme-detat': {
    titleWo: 'Léopold Sédar Senghor — bindkat, poète ak homme d’État bu Senegaal',
    excerptWo: 'Poète, penseur ak premier président bu République du Sénégal, ku bokk ci taariixu littérature ak xelal bu réew mi.',
    contentWo: `### Jëmmal

Léopold Sédar Senghor nekk na poète, penseur ak homme d’État bu Senegaal. Mu doon premier président bu République du Sénégal, te bind na ci littérature francophone.

### Négritude ak littérature

Senghor bokk na ci xam-xam ak yokkute mouvementu Négritude, ak Aimé Césaire ak Léon-Gontran Damas. Bindam di waxtaan ci identité africaine, mémoire, culture ak diggante Afrique ak àdduna.

### Xelal ak patrimoine

Ci poésie ak bindam, mu jëfandikoo baat ngir seetlu cosaan, mémoire ak expérience africaine. Liggéeyam bokk na ci patrimoine intellectuel ak littéraire bu Senegaal.

### Li war a fàttaliku

- Léopold Sédar Senghor
- Poésie ak Négritude
- Littérature, culture ak xelal`,
  },
};
