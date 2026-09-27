import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_AJ: Record<string, WolofContent> = {
  'ousmane-william-mbaye': {
    titleWo: 'Ousmane William Mbaye',
    excerptWo: 'Réalisateur ak documentariste senegaaleer — taariix, société ak mémoire.',
    contentWo: `### Jëmmal

Ousmane William Mbaye mooy cinéaste ak documentariste senegaaleer. Liggéeyam dafa jëm ci récits yu taariix, mémoire, société ak personnages yu am solo ci Senegaal.

### Cinéma

Documentaires yi dañuy jàngale nit ñi ci parcours ak expériences yu wuute, te di lëkkale taariix bu réew mi ak xel mu jamono jii.

### Solo

Liggéeyam bokk na ci développement bu documentaire senegaaleer ak ci wone récits yu Senegaal ci scènes nationales ak internationales.`,
  },
  'safi-faye': {
    titleWo: 'Safi Faye',
    excerptWo: 'Cinéaste, ethnologue ak pionnière bu cinéma africain — aada, askan ak dundin.',
    contentWo: `### Jëmmal

Safi Faye mooy cinéaste ak ethnologue bu Senegaal. Mooy benn ci jigéen yi njëkk ci Afrique subsaharienne di def cinéma professionnel.

### Cinéma

Mossane ak yeneen liggéeyam jëm nañu ci aada, dundin bu askan, relations sociales ak place bu nit ci société.

### Solo

Safi Faye am na solo ci taariixu cinéma africain, rawatina ci développement bu cinéma bu jëm ci récits yu askan ak expérience bu local.`,
  },
  'alain-gomis': {
    titleWo: 'Alain Gomis',
    excerptWo: 'Réalisateur senegaalo-français — cinéma d’auteur, mémoire ak identité.',
    contentWo: `### Jëmmal

Alain Gomis mooy réalisateur senegaalo-français. Cinémaam dafa jëm ci identité, mémoire, solitude, société ak xalaat ci dundin.

### Liggéey

Filmiam bokk na ci cinéma d’auteur africain, te ay récitsam dañuy jëfandikoo personnages ak situations ngir seet mbir yu xóot ci nit ak société.

### Rayonnement

Liggéeyam am na wàllu ci festivals internationaux ak ci wone cinéma africain bu am boppam.`,
  },
  'moussa-sene-absa': {
    titleWo: 'Moussa Sène Absa',
    excerptWo: 'Cinéaste, peintre ak artiste senegaaleer — cinéma, art visuel ak culture.',
    contentWo: `### Jëmmal

Moussa Sène Absa mooy cinéaste ak artiste senegaaleer, te dafa liggéey itam ci peinture ak arts visuels.

### Cinéma ak arts

Liggéeyam dafa lëkkale cinéma ak expression visuelle. Récitsam jàpp nañu ci société, aada, relations humaines ak identité senegaaleer.

### Solo

Moussa Sène Absa bokk na ci artistes yi contribué ci rayonnement bu cinéma ak arts visuels senegaaleer ci réew mi ak bitim-réew.`,
  },
};
