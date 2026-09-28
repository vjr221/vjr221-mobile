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
    excerptWo: 'Poète, penseur ak premier président bu République du Sénégal, te am na solo ci littérature francophone ak Négritude.',
    contentWo: `### Jëmmal

Léopold Sédar Senghor nekk na poète, penseur ak homme d’État bu Senegaal. Mu doon premier président bu République du Sénégal, te bind na ci littérature francophone.

### Négritude ak littérature

Senghor bokk na ci gën a xam-xam ci mouvementu Négritude, ak Aimé Césaire ak Léon-Gontran Damas. Bindam dafa jëm ci identité africaine, mémoire, culture ak universalisme.

### Héritage

Téere yu mu bind ak liggéeyam ci mbirum aada ak politique am nañu solo ci histoire intellectuelle bu Senegaal ak Afrique.`,
  },
  'ken-bugul-ecrivaine-senegalaise': {
    titleWo: 'Ken Bugul — bindkat bu Senegaal',
    excerptWo: 'Ken Bugul bokk na ci bindkat yu am solo ci littérature bu Senegaal, te am na boppam ci roman.',
    contentWo: `### Jëmmal

Ken Bugul mooy nom de plume bu Mariètou Mbaye Biléoma, bindkat bu Senegaal. Bindam dafa jëm ci identité, solitude, société ak expérience personnelle.

### Littérature

Roman yi mu bind am nañu solo ci littérature africaine francophone. Style bi dafa jëfandikoo récit bu intime ak réflexion ci dundin.

### Transmission

Téere yi mu bind jàppale nañu ci xelal mbirum identité ak xaalis bu nit ki ci société.`,
  },
  'mariama-ba-ecrivaine-senegalaise': {
    titleWo: 'Mariama Bâ — bindkat bu Senegaal',
    excerptWo: 'Bindkat bu Senegaal bu am solo ci littérature africaine francophone, xam ko rawatina ci So Long a Letter.',
    contentWo: `### Jëmmal

Mariama Bâ nekk na bindkat bu Senegaal, te bindam dafa jëm ci dundinu jigéen, njaboot, société ak xew-xew yu askan.

### Téere

So Long a Letter (Une si longue lettre) mooy ci téere yi gën a xam ci bindkat bi. Téere bi dafa jëfandikoo bataaxal ngir wax ci amitié, mariage, perte ak xaalis bu jigéen ci société.

### Héritage

Liggéeyu Mariama Bâ bokk na ci littérature bu Senegaal ak ci yëgle mbirum njaboot ak xaalis bu jigéen.`,
  },
  'birago-diop-poete-et-ecrivain-senegalais': {
    titleWo: 'Birago Diop — poète ak bindkat bu Senegaal',
    excerptWo: 'Poète, conteur ak vétérinaire bu Senegaal, xam nañu ko ci Les Contes d’Amadou Koumba ak bindam ci oralité.',
    contentWo: `### Jëmmal

Birago Diop nekk na poète, écrivain ak conteur bu Senegaal. Mu jëfandikoo lu bari ci oralité ak cosaan yi ci bindam.

### Contes ak poésie

Les Contes d’Amadou Koumba bokk nañu ci téere yi gën a xam ci liggéeyam. Contes yi dañuy wone xam-xam, ndigal, mbind mi ak imagination bu oralité africaine.

### Héritage

Birago Diop am na solo ci bind ak aar patrimoine oral. Poésieem ak contesam jàppale nañu ci wéy ak yeggali cosaan yi.`,
  },
  'cheikh-hamidou-kane-ecrivain-senegalais': {
    titleWo: 'Cheikh Hamidou Kane — bindkat bu Senegaal',
    excerptWo: 'Bindkat bu Senegaal bu xam nekk ci littérature africaine francophone, rawatina ci L’Aventure ambiguë.',
    contentWo: `### Jëmmal

Cheikh Hamidou Kane nekk na bindkat bu Senegaal. Bindam dafa jëm ci jàng, identité, diine, modernité ak diggante cosaan ak yoon yu bees.

### L’Aventure ambiguë

L’Aventure ambiguë mooy téereem bu gën a xam. Roman bi dafa wone jafe-jafe yu nit ki di daje ci diggante njàng bu cosaan ak njàng bu occidental.

### Solo ci littérature

Téere bi bokk na ci classiques yu littérature africaine francophone, te dafay may xel ci mbirum identité ak modernité.`,
  },
};
