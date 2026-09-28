import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 78 — consolidation du cinéma documentaire et d’auteur. */
export const CONTENT_WO_EXTRA_AJ: Record<string, WolofContent> = {
  'ousmane-william-mbaye': {
    titleWo: 'Ousmane William Mbaye — cinéaste ak documentariste bu Senegaal',
    excerptWo: 'Cinéaste ak documentariste bu Senegaal buy seet taariix, mémoire, société ak parcoursu nit ñi ci film yi.',
    contentWo: `### Jëmmal

Ousmane William Mbaye mooy cinéaste ak documentariste bu Senegaal. Liggéeyam di jëm ci récits yu taariix, mémoire, société ak nit ñi am solo ci Senegaal.

### Documentaire ak mémoire

Documentaire yi di lëkkale archives, témoignages ak parcoursu nit ñi ak mémoire bu réew mi. Nataal di nekk yoon ngir denc ay tracesu jamono ak xam-xam ci société.

### Nettali ak transmission

Liggéeyam di jàppale yégle récits yu Senegaal ci public bu réew mi ak ci bitim-réew. Cinéma documentaire di boole regard artistique ak liggéeyu mémoire.

### Li war a fàttaliku

- Cinéaste ak documentariste bu Senegaal
- Mémoire ak taariix
- Documentaire
- Transmissionu récits`,
  },
  'safi-faye': {
    titleWo: 'Safi Faye — cinéaste ak ethnologue bu Senegaal',
    excerptWo: 'Cinéaste ak ethnologue bu Senegaal, figure bu cinéma africain buy nettali aada, dundin ak relations sociales.',
    contentWo: `### Jëmmal

Safi Faye mooy cinéaste ak ethnologue bu Senegaal. Liggéeyam bokk na ci développementu cinéma africain buy jox solo récitsu askan ak expérience bu local.

### Cinéma ak aada

Film yi di seet aada, dundin, liggéey ak relations sociales. Regard bi di jàppale wone ni cinéma mën na denc xam-xam ci dundug nit ñi.

### Askan ak territoire

Récits yi di bàyyi bérab ci communautés ak territoires. Loolu di jàppale xam dëkk, aada ak soppi-soppi yu société jaar ci film.

### Li war a fàttaliku

- Cinéaste ak ethnologue
- Cinéma africain
- Aada ak dundin
- Récitsu askan`,
  },
  'alain-gomis': {
    titleWo: 'Alain Gomis — réalisateur senegaalo-français',
    excerptWo: 'Réalisateur senegaalo-français buy jëfandikoo cinéma d’auteur ngir seet identité, mémoire, solitude ak société.',
    contentWo: `### Jëmmal

Alain Gomis mooy réalisateur senegaalo-français. Cinémaam di jëm ci identité, mémoire, solitude, société ak xalaat ci dundin.

### Cinéma d’auteur

Film yi di jëfandikoo personnages ak situations ngir seet mbir yu xóot ci nit ak société. Regardu auteur di jox solo ci expérience intérieure ak questionsu identité.

### Mémoire ak rayonnement

Liggéeyam bokk na ci cinéma d’auteur africain ak ci festivals internationaux. Film yi di ubbi waxtaan ci mémoire, identité ak gis-gis bu nit ñi.

### Li war a fàttaliku

- Réalisateur senegaalo-français
- Cinéma d’auteur
- Mémoire ak identité
- Festivals ak circulationu œuvres`,
  },
  'moussa-sene-absa': {
    titleWo: 'Moussa Sène Absa — cinéaste ak artiste bu Senegaal',
    excerptWo: 'Cinéaste ak artiste bu Senegaal buy lëkkale cinéma, peinture ak arts visuels ci créationam.',
    contentWo: `### Jëmmal

Moussa Sène Absa mooy cinéaste ak artiste bu Senegaal. Dafa liggéey ci cinéma, peinture ak arts visuels.

### Cinéma ak société

Récitsam di jàppale mbirum société, aada, relations humaines ak identité senegaaleer. Cinéma di nekk yoonu nettali ak expression artistique.

### Arts visuels

Peinture ak arts visuels di yokk wàllu expression ci liggéeyam. Lëkkale formu art yi di wone ab création bu boole nataal, couleur ak nettali.

### Li war a fàttaliku

- Cinéaste bu Senegaal
- Peinture ak arts visuels
- Cinéma ak société
- Création artistique`,
  },
};
