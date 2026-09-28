import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 45 — cinéma d’auteur, récits sociaux et génération contemporaine. */
export const CONTENT_WO_EXTRA_AI: Record<string, WolofContent> = {
  'mansour-sora-wade': {
    titleWo: 'Mansour Sora Wade — cinéaste bu Senegaal',
    excerptWo: 'Cinéaste bu Senegaal bu parcoursam bokk ci cinéma d’auteur, ak nettali yi di seet nit ñi ak société.',
    contentWo: `### Parcours

Mansour Sora Wade mooy cinéaste bu Senegaal. Parcoursam bokk na ci cinéma d’auteur bu réew mi, ak ci yeneen yoon yu création cinématographique.

### Nettaliu nit ak société

Cinémaam di seet dundin nit ñi, réalités sociales ak mbirum identité. Nettali yi di jëfandikoo cinéma ngir xool diggante nit, société ak dëkkandoo.

### Création ak diversité

Liggéeyam di yokk diversitéu cinéma bu Senegaal ak wone ay gis-gis yu wuute. Œuvresu cinéma mën na jox nit ñi yoon ngir gis réew mi ak jamono jii ci beneen melokaan.

### Li war a fàttaliku

- Cinéaste bu Senegaal
- Cinéma d’auteur
- Nettaliu société ak nit ñi
- Création cinématographique`,
  },

  'joseph-gai-ramaka': {
    titleWo: 'Joseph Gaï Ramaka — réalisateur ak producteur bu Senegaal',
    excerptWo: 'Réalisateur ak producteur bu Senegaal buy liggéey ci cinéma africain, production ak nettali yu jëm ci société.',
    contentWo: `### Parcours

Joseph Gaï Ramaka mooy réalisateur ak producteur bu Senegaal. Liggéeyam bokk na ci cinéma africain bu jamono jii.

### Société ak nit ñi

Œuvream di seet mbirum société, diggante nit ñi ak soppi-soppi yu Senegaal bu tey. Cinéma di nekk yoonu nettali ak xalaat ci dundin.

### Production ak circulation

Ci liggéeyu production, parcoursam di jàppale sos ak circulationu œuvres cinématographiques. Festivals ak réseaux culture di jàppale wone ay œuvres ci yeneen béréb.

### Li war a fàttaliku

- Réalisateur bu Senegaal
- Producteur
- Cinéma africain bu jamono jii
- Création ak production cinématographique`,
  },

  'dyana-gaye': {
    titleWo: 'Dyana Gaye — réalisatrice bu Senegaal',
    excerptWo: 'Réalisatrice bu Senegaal buy liggéey ci cinéma contemporain, nettaliu nit ñi, territoires ak diggante aada yi.',
    contentWo: `### Parcours

Dyana Gaye mooy réalisatrice bu Senegaal bu liggéeyam bokk ci cinéma contemporain. Gis-gisam jëm na ci parcoursu nit ñi ak diggante territoires ak aada yi.

### Cinéma ak expérience

Film yi di seet expériencesu nit ñi, yoon yi ñuy jaar ak diggante Senegaal ak yeneen espacesu culture. Nettali ak images di bokk ngir wone ay dundin yu wuute.

### Aada ak identité

Liggéeyam di jàppale xool mbirum identité ak aada yi ci melokaan yu wuute. Loolu di ubbi waxtaan ci diggante nit, territoire ak mémoire.

### Li war a fàttaliku

- Réalisatrice bu Senegaal
- Cinéma contemporain
- Nettali ak identité
- Aada ak territoires`,
  },

  'moussa-toure': {
    titleWo: 'Moussa Toure — réalisateur bu Senegaal, auteur de La Pirogue',
    excerptWo: 'Cinéaste bu Senegaal buy seet réalitésu société, mobilitéu nit ñi ak dundin ci Afrique de l’Ouest.',
    contentWo: `### Parcours

Moussa Toure mooy cinéaste bu Senegaal, ak parcours bu bokk ci cinéma bu Afrique de l’Ouest ci jamono gannaaw 1990 yi.

### Cinéma ak société

Liggéeyu réalisateur bi di jàppale nettali réalitésu société, parcoursu nit ñi ak mbir yu jëm ci territoire ak identité. Cinéma di jox yoon ngir xool dundin ci beneen gis-gis.

### La Pirogue

*La Pirogue* bokk na ci liggéey yi lëkkale cinéma bu Senegaal ak récitsu société ak mobilitéu nit ñi. Film bi di ubbi waxtaan ci yoon, dëkkuwaay ak xaalisug dundin yu jëm ci déplacement.

### Li war a fàttaliku

- Cinéaste bu Senegaal
- Cinéma bu Afrique de l’Ouest
- Réalisation
- *La Pirogue*`,
  },

  'halima-gadji': {
    titleWo: 'Halima Gadji — actrice, mannequin ak entrepreneure bu Senegaal',
    excerptWo: 'Actrice, mannequin ak entrepreneure bu Senegaal bu xam nekk ci télévision ak sériesu Senegaal.',
    contentWo: `### Parcours artistique

Halima Gadji mooy actrice, mannequin ak entrepreneure bu Senegaal. Parcoursam bokk na ci scène audiovisuelle bu réew mi.

### Télévision ak visibilité

Mu gën a xam ci rôle bi mu def ci série *Maîtresse d’un homme marié*, te loolu yokk na visibilitéam ci public bu Senegaal.

### Création ak activités

Parcoursu artistes yi mën na boole jeu, mode ak initiativesu entrepreneuriat. Loolu di wone ni métiersu culture di wuute ci jamono jii.

### Li war a fàttaliku

- Actrice bu Senegaal
- Mannequin
- Entrepreneure
- Audiovisuel ak télévision`,
  },
};
