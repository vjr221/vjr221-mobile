import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 41 — arts plastiques, photographie et littérature. */
export const CONTENT_WO_EXTRA_AE: Record<string, WolofContent> = {
  'papa-ibra-tall': {
    titleWo: 'Papa Ibra Tall — peintre, dessinateur ak figureu École de Dakar',
    excerptWo: 'Peintre, dessinateur ak enseignant bu Senegaal bu lëkkale ak École de Dakar ak yokkute arts visuels gannaaw indépendance.',
    contentWo: `### Parcours

Papa Ibra Tall mooy peintre, dessinateur ak enseignant bu Senegaal bu lëkkale ak École de Dakar ak yokkute arts visuels bu Senegaal gannaaw indépendance.

### Sos ak njàngale

Liggéeyam ci art ak pédagogie bokk na ci structurationu création plastique bu Senegaal ak formationu générations yu artistes.

### Style ak héritage

Œuvre bi aju na ci seet ci formes, symboles ak imaginaires africains ci contexteu création bu Senegaal bu moderne.

### Li war a fàttaliku

- Peintre ak dessinateur bu Senegaal
- École de Dakar
- Njàngaleu art
- Patrimoineu arts visuels bu Senegaal`,
  },

  'moustapha-dime': {
    titleWo: 'Moustapha Dimé — sculpteur bu mag bu Senegaal',
    excerptWo: 'Benn ci ay sculpteurs yu mag yu Senegaal ci art contemporain africain, ak liggéey ci matériaux yu ñu dellusi jëfandikoo.',
    contentWo: `### Œuvre

Moustapha Dimé bokk na ci sculpteurs yu mag yu Senegaal ci art contemporain africain. Œuvream jëfandikoo na notamment matériaux yu ñu dellusi jëfandikoo ak formes yu jële ci cultures ak spiritualités africaines.

### Technique ak expression

Sculptuream di boole bois, métal ak objets yu ñu gis ba def leen compositions yu am doole ak symboles.

### Reconnaissance

Liggéeyam am na bérab bu am solo ci taariix bu bees bu arts plastiques ci Senegaal ak ci xam-xam bu àdduna ci création artistique bu réew mi.

### Li war a fàttaliku

- Sculpteur bu Senegaal
- Art contemporain africain
- Matériaux yu ñu dellusi jëfandikoo
- Culture ak spiritualité`,
  },

  'mamadou-gomis-photographe': {
    titleWo: 'Mamadou Gomis — photographe ak documentariste bu Senegaal',
    excerptWo: 'Photographe bu Senegaal buy bind ci nataal réalités sociales, culturelles ak urbaines yu réew mi.',
    contentWo: `### Photographie documentaire

Mamadou Gomis mooy photographe bu Senegaal. Liggéeyam di bokk ci traditionu photographie bu terrain buy nettali territoires, nit ñi ak soppi-soppi yu société bu Senegaal.

### Gis-gis ci Senegaal

Photographie documentaire am na solo ci denc mémoire visuelle bu réew mi ak wone communautés yu wuute ak seen expressions culturelles.

### Li war a fàttaliku

- Photographe bu Senegaal
- Photographie documentaire
- Mémoire visuelle ak société`,
  },

  'faty-sow-kane': {
    titleWo: 'Faty Sow Kane — bindkat ak universitaire bu Senegaal',
    excerptWo: 'Bindkat ak universitaire bu Senegaal, ci diversitéu création littéraire ak xalaat ak transmissionu xam-xam.',
    contentWo: `### Parcours

Faty Sow Kane mooy bindkat ak universitaire bu Senegaal. Parcoursam bokk na ci diversitéu création littéraire ak intellectuelle bu Senegaal.

### Bind ak transmission

Liggéeyam boole bind, xalaat ak transmissionu xam-xam. Mu bokk ci traditionu Senegaal fa littérature ak njàngum xel di lëkkale.

### Contribution

Parcoursam di yokk visibilitéu jigéen ñi ci wàllu création, xalaat ak transmissionu aada.

### Li war a fàttaliku

- Bindkat bu Senegaal
- Universitaire
- Création littéraire ak transmission`,
  },
};
