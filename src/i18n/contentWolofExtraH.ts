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
};
