import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 12 — institutions et lieux culturels actuellement recensés sur VJR 221 */
export const CONTENT_WO_EXTRA_H: Record<string, WolofContent> = {
  'musee-du-crds-de-saint-louis-musee-regional-saint-louis': {
    titleWo: 'Musée du CRDS bu Ndar — musée régional',
    excerptWo: 'Musée bu Centre de recherches et de documentation du Sénégal ci Ndar, te dafa jàppale ci taariix ak patrimoine.',
    contentWo: `### Jëmmal

Musée du CRDS bu Ndar bokk na ci Centre de recherches et de documentation du Sénégal. Mu jàppale ci conservation, documentation ak transmissionu taariix ak patrimoine bu Saint-Louis ak norte Senegaal.

### Saint-Louis ak patrimoine

Ndar am na taariix bu yàgg, lëkkale dexu Senegaal, commerce, administration, aada ak architecture. Musée bi mën na may visiteurs ak chercheurs ay repères ci taariix bu dëkk bi ak diiwaan bi.

### Xam-xam ak transmission

CRDS dafa lëkkale recherche, documentation, collections ak médiation. Mu bokk ci réseauu bérab yu di jàppale ci xam-xam ci patrimoine bu Senegaal.`,
  },
  'musee-regional-de-thies-histoire-et-ethnographie-thies': {
    titleWo: 'Musée régionalu Thiès — taariix ak ethnographie',
    excerptWo: 'Musée bu Thiès bu wone taariix, ethnographie ak patrimoine bu diiwaan bi.',
    contentWo: `### Jëmmal

Musée régionalu Thiès mooy bérab bu ñuy wone ak di yeggali taariix ak patrimoine bu diiwaan bi. Mu lëkkale collections, ethnographie ak mémoire locale.

### Diiwaanu Thiès

Thiès am na berab bu am solo ci taariixu transport, industrie, agriculture ak culture. Musée bi mën na jàppale ci xam-xam ci dund ak cosaanu nit ñi ci diiwaan bi.

### Transmission

Musées régionaux am nañu solo ci education, recherche ak transmission. Ils may nañu jeunes, chercheurs ak visiteurs ay outils ngir xam taariix ak patrimoine.`,
  },
  'maison-de-la-culture-douta-seck-medina-dakar': {
    titleWo: 'Maison de la Culture Douta Seck — pôle culturel bu Médina',
    excerptWo: 'Centre culturel bu Médina bu Dakar, dédié ci création, diffusion ak transmissionu arts.',
    contentWo: `### Jëmmal

Maison de la Culture Douta Seck nekk na ci Médina ci Dakar. Mu nekk na centre bu création, diffusion ak transmissionu arts, te dafa bokk ci vie culturelle bu dëkk bi.

### Missions

Centre bi dafay jàppale ci rencontres, échanges, documentation culturelle ak création. Activités yi mën nañu aju ci arts scéniques, arts visuels ak multimédia.

### Transmission

Maison bi dafay may solo ci njàngat ak jeunes, te dafa jàppale ci aar patrimoine culturel matériel ak immatériel. Mu nekk it ci réseauu établissements culturels bu réew mi.`,
  },
  'leopold-sedar-senghor-poete-et-homme-detat': {
    titleWo: 'Léopold Sédar Senghor — bindkat, poète ak nit ku bokk ci réew',
    excerptWo: 'Poète, penseur ak premier président bu République du Sénégal, te am na solo ci littérature francophone ak Négritude.',
    contentWo: `### Jëmmal

Léopold Sédar Senghor nekk na poète, penseur ak homme d'État bu Senegaal. Mu doon premier président bu République du Sénégal, te bind na ci littérature francophone.

### Négritude ak littérature

Senghor bokk na ci gën a xam-xam ci mouvementu Négritude, ak Aimé Césaire ak Léon-Gontran Damas. Bindam dafa jëm ci identité africaine, mémoire, culture ak universalisme.

### Héritage

Téere yu mu bind ak liggéeyam ci mbirum aada ak politique am nañu solo ci histoire intellectuelle bu Senegaal ak Afrique.`,
  },
  'ken-bugul-ecrivaine-senegalaise': {
    titleWo: 'Ken Bugul — bindkat bu Senegaal',
    excerptWo: 'Aminata Sow Fall, Ken Bugul ak yeneen bindkat yi bokk nañu ci littérature bu Senegaal; Ken Bugul am na boppam ci roman.',
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
