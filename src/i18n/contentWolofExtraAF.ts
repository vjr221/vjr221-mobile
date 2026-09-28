import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 42 — littérature et scène contemporaine. */
export const CONTENT_WO_EXTRA_AF: Record<string, WolofContent> = {
  'ibrahima-sall-ecrivain-senegalais': {
    titleWo: 'Ibrahima Sall — bindkat bu Senegaal',
    excerptWo: 'Bindkat bu Senegaal bu bokk ci mbindiin ak waxtaanu littérature, te lëkkale nettali ak aada.',
    contentWo: `### Parcours

Ibrahima Sall mooy bindkat bu Senegaal. Parcoursam bokk na ci mbindiin ak scène littéraire bu réew mi.

### Mbindiin ak aada

Bindam di jëfandikoo nettali ak xalaat ngir wone ay jikko, ay xew-xew ak ay mbir yu aju ci dund ak aada. Loolu di yokk jokkoo diggante bind ak xam-xamu askan wi.

### Bérab ci littérature

Liggéeyu bindkat yi di yokk diversitéu littérature bu Senegaal. Ci seen mbindiin, ñuy denc ay nettali ak xalaat te di leen jox yeneen mbooloo ak générations.

### Li war a fàttaliku

- Bindkat bu Senegaal
- Littérature ak mbindiin
- Aada ak transmission`,
  },

  'aminata-maiga-ka': {
    titleWo: 'Aminata Maïga Ka — bindkat bu Senegaal',
    excerptWo: 'Bindkat bu Senegaal bu bokk ci littérature africaine francophone, di seet nit ñi ak mbirum société.',
    contentWo: `### Œuvre

Aminata Maïga Ka mooy bindkat bu Senegaal. Œuvream bokk na ci littérature africaine francophone ak nettaliu réalités sociales.

### Nit ñi ak société

Bindam di seet diggante nit ñi, dund ak société. Nettali yi di may gis-gis ci expériencesu nit ñi ak soppi-soppi yu am ci dundug jamono.

### Bérab ci littérature bu Senegaal

Mu bokk ci diversitéu baatu jigéen ñi ci littérature bu Senegaal. Mbindiin yi di yokk seen feeñ ak seen baat ci espaceu littérature.

### Li war a fàttaliku

- Bindkat bu Senegaal
- Littérature africaine francophone
- Nit ñi ak mbirum société`,
  },

  'mamadou-diaw-artiste': {
    titleWo: 'Mamadou Diaw — artiste bu Senegaal ci scène contemporaine',
    excerptWo: 'Artiste bu Senegaal bu lëkkale création contemporaine, xalaat ak expressionu scène culturelle.',
    contentWo: `### Parcours artistique

Mamadou Diaw mooy artiste bu Senegaal bu bokk ci scène contemporaine. Liggéeyam lëkkale ak création ak expressionu culturelle bu jamono jii.

### Création ak aada

Scène artistique bu Senegaal am na disciplines ak influences yu wuute. Artistes yi di jëfandikoo seen liggéey ngir wone xalaat, expérience ak ay jëfandikoo yu cosaan ak yu bees.

### Dialogue ak société

Création di nekk it yoonu waxtaan diggante mémoire, société ak jamono jii. Loolu di may nit ñi gis ni art mën a wone soppi-soppi ak xalaatu askan wi.

### Li war a fàttaliku

- Artiste bu Senegaal
- Création contemporaine
- Aada ak expression culturelle`,
  },
};
