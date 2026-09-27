import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 42 — littérature et scène contemporaine. */
export const CONTENT_WO_EXTRA_AF: Record<string, WolofContent> = {
  'ibrahima-sall-ecrivain-senegalais': {
    titleWo: 'Ibrahima Sall — bindkat bu Senegaal',
    excerptWo: 'Bindkat bu Senegaal bu lëkkale ak scène littéraire bu réew mi ak nettaliu aada.',
    contentWo: `### Parcours

Ibrahima Sall mooy bindkat bu Senegaal bu lëkkale ak scène littéraire bu Senegaal.

### Contribution

Parcoursam bokk na ci diversitéu mbindiin yu Senegaal ak transmissionu littérature ak aada.

### Héritage littéraire

Liggéeyu bindkat yi di jàppale sosug patrimoine littéraire bu jamono jii te di may générations yu bees yoonu jot ci xam-xamu aada.

### Li war a fàttaliku

- Bindkat bu Senegaal
- Littérature bu Senegaal
- Transmissionu aada`,
  },

  'aminata-maiga-ka': {
    titleWo: 'Aminata Maïga Ka — bindkat bu Senegaal',
    excerptWo: 'Bindkat bu Senegaal bu œuvream bokk ci littérature africaine francophone ak nettaliu réalités sociales yu Senegaal.',
    contentWo: `### Œuvre

Aminata Maïga Ka mooy bindkat bu Senegaal bu œuvream bokk ci littérature africaine francophone ak expressionu réalités sociales yu Senegaal.

### Xalaat ak société

Bindam di seet notamment diggante nit ñi, société ak expériencesu dund ci contexteu Senegaal buy soppi.

### Bérab ci littérature bu Senegaal

Mu bokk ci diversitéu baatu jigéen ñi ñu jàppale ci yokkute littérature bu Senegaal ci jamono jii.

### Li war a fàttaliku

- Bindkat bu Senegaal
- Littérature africaine francophone
- Bind ak mbirum société`,
  },

  'pape-amadou-seck': {
    titleWo: 'Pape Amadou Seck — acteur ak créateur bu Senegaal',
    excerptWo: 'Acteur ak créateur bu Senegaal buy bokk ci dynamiqueu spectacle vivant ak audiovisuel.',
    contentWo: `### Parcours artistique

Pape Amadou Seck mooy acteur ak créateur bu Senegaal buy bokk ci scène artistique bu Senegaal bu jamono jii, fa théâtre, cinéma, télévision ak spectacle vivant di daje.

### Création ak spectacle

Liggéeyu comédiens di jàppale transmissionu nettali ak imaginaires. Scène bi di itam bérab bu rencontre ak public ak expressionu réalités sociales yu jamono jii.

### Li war a fàttaliku

- Acteur bu Senegaal
- Spectacle vivant
- Audiovisuel
- Création contemporaine`,
  },

  'mamadou-diaw-artiste': {
    titleWo: 'Mamadou Diaw — artiste bu Senegaal ci scène contemporaine',
    excerptWo: 'Artiste bu Senegaal bu lëkkale ak création contemporaine ak expressionsu scène culturelle bu réew mi.',
    contentWo: `### Parcours artistique

Mamadou Diaw mooy artiste bu Senegaal bu lëkkale ak création contemporaine ak expressionsu scène culturelle bu réew mi.

### Création ak transmission

Scène artistique bu Senegaal am na disciplines, influences ak générations yu wuute. Artistes contemporains di delloo xalaat ci héritagesu aada yi te di jàng mbirum Senegaal bu tey.

### Dialogue ak innovation

Création di nekk yoonu waxtaan diggante mémoire, société ak innovation. Loolu di may arts yi wone soppi-soppi yu société ak dundug jamono jii.

### Li war a fàttaliku

- Artiste bu Senegaal
- Création contemporaine
- Aada ak transmission`,
  },
};
