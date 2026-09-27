import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 11 — grandes figures du cinéma sénégalais */
export const CONTENT_WO_EXTRA_G: Record<string, WolofContent> = {
  'ousmane-sembene': {
    titleWo: 'Ousmane Sembène — bindkat ak cinéaste bu Senegaal',
    excerptWo: 'Bindkat, réalisateur ak pionnier bu cinéma africain, ñu koy jàpp ci baayu cinéma bu Senegaal.',
    contentWo: `### Jëmmal

Ousmane Sembène mooy bindkat ak cinéaste bu Senegaal. Mu bind ay romans ak nouvelles, te ci cinéma mu def film yu jëm ci mbirum askan wi, kolonisation, société ak justice.

### Littérature

Mu bind œuvres yu mel ni Les Bouts de bois de Dieu, Xala ak Le Docker noir. Bindam dafa lëkkale xelal ci société ak waxtaan ci dundug nit ñi.

### Cinéma

Ci film yi, mu def La Noire de..., Mandabi, Xala ak Moolaadé. Filmam dafa boole récit, critique sociale ak cosaanu Afrique.

### Héritage

Ousmane Sembène des na benn ci ay kanam yu mag yu cinéma africain ak ci patrimoine culturel bu Senegaal. Liggeeyam am na solo ci yokkute cinéma bu Afrique ci àdduna.`,
  },
  'djibril-diop-mambety': {
    titleWo: 'Djibril Diop Mambéty — cinéaste bu Senegaal',
    excerptWo: 'Réalisateur ak artiste bu Senegaal, xam nañu ko ci Touki Bouki ak Hyènes.',
    contentWo: `### Jëmmal

Djibril Diop Mambéty mooy réalisateur ak artiste bu Senegaal. Filmam dafa am style bu boppam, lëkkale récit, humour, musique ak xelal ci société.

### Touki Bouki

Touki Bouki (1973) mooy benn ci filmam yu gën a xam. Film bi topp na Magaye ak Anta ci seen bëgg-bëgg a génn Senegaal, te dafa jëfandikoo images ak musique ngir wone xalaat ci liberté ak rêve.

### Hyènes

Hyènes, film bu 1992, aju na ci théâtre bi Les Vieux Os bu Friedrich Dürrenmatt. Mu delloo récit bi ci contexte bu Senegaal, ak mbirum xaalis, pouvoir ak vengeance.

### Héritage

Cinémaam am na berab bu mag ci histoire du cinéma africain. Touki Bouki ak yeneen filmam di wone style bu bëgg liberté ci création.`,
  },
  'safi-faye': {
    titleWo: 'Safi Faye — réalisatrice ak ethnologue bu Senegaal',
    excerptWo: 'Benn ci jëkkër yi ci cinéma bu Afrique, te mu liggéey ci film documentaire ak fiction.',
    contentWo: `### Jëmmal

Safi Faye mooy réalisatrice ak ethnologue bu Senegaal. Mu bokk na ci pionnières yu cinéma bu Afrique, te filmam dafa lëkkale observation ethnographique, dundug askan wi ak création cinématographique.

### Mossane

Mossane, film bu fiction, wone na dund ak xalaat yu benn village bu Senegaal, rawatina ci jigéen, cosaan ak choix bu nit ki ci dund.

### Documentaire

Ci ay documentairesam, Safi Faye dafa seetaan dundug nit ñi ci monde rural, liggéey, agriculture, cosaan ak jokkoo ci biir askan.

### Héritage

Liggeeyam bokk na ci taariixu cinéma documentaire africain. Mu jàppale na ci wone seen voix ak seen expérience ci film.`,
  },
  'alain-gomis': {
    titleWo: 'Alain Gomis — réalisateur bu Senegaal',
    excerptWo: 'Réalisateur ak scénariste bu Senegaal, xam nañu ko ci Tey ak Félicité.',
    contentWo: `### Jëmmal

Alain Gomis mooy réalisateur ak scénariste bu Senegaal. Filmam dafa seetaan identité, mémoire, dundug dëkk ak xaal yu nit ñi di jafe-jafe.

### Tey ak Aujourd’hui

Film bi Tey (Aujourd’hui) dafa topp nit ku dellu ci Dakar, te récit bi lëkkale na mémoire, dundug dëkk ak waxtu.

### Félicité

Félicité (2017) mooy film bu wone jigéen bu di chanteuse ci Kinshasa ak yoon wi mu jàppale doomam. Film bi am na reconnaissance internationale ak prix yu cinéma.

### Cinéma

Alain Gomis bokk na ci génération bu cinéastes africains yu di jëfandikoo cinéma ngir waxtaan ci identité, société ak expérience bu Afrique.`,
  },
};
