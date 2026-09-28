import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 77 — consolidation des arts visuels, photographie et littérature. */
export const CONTENT_WO_EXTRA_AE: Record<string, WolofContent> = {
  'papa-ibra-tall': {
    titleWo: 'Papa Ibra Tall — peintre, dessinateur ak enseignant bu Senegaal',
    excerptWo: 'Artiste ak enseignant bu Senegaal, ku lëkkale peinture, dessin ak njàngale ci développementu arts visuels.',
    contentWo: `### Parcours

Papa Ibra Tall mooy peintre, dessinateur ak enseignant bu Senegaal. Parcoursam bokk na ci histoireu arts visuels bu réew mi gannaaw indépendance.

### Art ak njàngale

Liggéeyam ci peinture ak dessin dafa ànd ak njàngale. Mu bokk ci efforts yu jëm ci structurationu formation artistique ak transmissionu xam-xamu art.

### École de Dakar ak expression

Papa Ibra Tall lëkkale na ak École de Dakar, ci contexte bu artistes di seet formesu expression yu ànd ak cosaan, symboles ak imaginaire africain.

### Li war a fàttaliku

- Peintre ak dessinateur bu Senegaal
- Enseignementu arts
- École de Dakar
- Transmissionu xam-xamu art`,
  },

  'moustapha-dime': {
    titleWo: 'Moustapha Dimé — sculpteur bu Senegaal',
    excerptWo: 'Sculpteur bu Senegaal ci art contemporain africain, ku jëfandikoo matériaux yu wuute ngir sos formes ak compositions.',
    contentWo: `### Œuvre

Moustapha Dimé bokk na ci ay sculpteurs yu mag yu Senegaal ci art contemporain africain. Liggéeyam di seet possibilité yu sculpture ci diggante matière, forme ak symboles.

### Matériaux ak technique

Œuvre yi di jëfandikoo bois, métal ak objets yu ñu dellusi jëfandikoo ngir sos compositions. Jëfandikoo matières yu wuute di jox sculpture yi ab dimensionu tactile ak visuel.

### Expression ak patrimoine

Sculptuream di lëkkale création contemporaine ak références yu jóge ci cultures ak spiritualités africaines. Loolu di jàppale waxtaan ci identité ak mémoire.

### Li war a fàttaliku

- Sculpteur bu Senegaal
- Art contemporain africain
- Bois, métal ak objets
- Création ak symboles`,
  },

  'mamadou-gomis-photographe': {
    titleWo: 'Mamadou Gomis — photographe ak documentariste bu Senegaal',
    excerptWo: 'Photographe bu Senegaal buy jëfandikoo nataal ngir denc mémoire ak nettali réalités sociales, culturelles ak urbaines.',
    contentWo: `### Photographie documentaire

Mamadou Gomis mooy photographe ak documentariste bu Senegaal. Liggéeyam di bokk ci photographie bu terrain, fu nataal di jàpp nit ñi, barab yi ak soppi-soppi yu société.

### Mémoire visuelle

Photographie documentaire di denc ay tracesu jamono ak dundin. Ci nataal yi, nit ñi, dëkk yi ak paysages di mën a nekk seede ci mémoire bu réew mi.

### Gis-gis ci société

Liggéeyu photographe bi di jàppale wone diversitéu territoires ak réalités sociales. Nataal mën na boole regard artistique ak documentation.

### Li war a fàttaliku

- Photographe ak documentariste
- Photographie documentaire
- Mémoire visuelle
- Société ak territoires`,
  },

  'faty-sow-kane': {
    titleWo: 'Faty Sow Kane — bindkat ak universitaire bu Senegaal',
    excerptWo: 'Bindkat ak universitaire bu Senegaal, buy bokk ci création littéraire, xalaat ak transmissionu xam-xam.',
    contentWo: `### Parcours

Faty Sow Kane mooy bindkat ak universitaire bu Senegaal. Parcoursam bokk na ci wàllu littérature ak productionu xalaat.

### Bind ak xalaat

Liggéeyam boole bind, analyse ak réflexion. Littérature ak njàngum xel di daje ci waxtaan ci société, culture ak identité.

### Transmission

Ci njàngale ak recherche, xam-xam di wër ak jottali. Contributionu bindkat ak universitaire bi di yokk visibilitéu jigéen ñi ci création ak transmissionu xam-xam.

### Li war a fàttaliku

- Bindkat bu Senegaal
- Universitaire
- Création littéraire
- Xalaat ak transmissionu xam-xam`,
  },
};
