import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 40 — artistes et musiciens contemporains. */
export const CONTENT_WO_EXTRA_AD: Record<string, WolofContent> = {
  'takeifa': {
    titleWo: 'Takeifa — groupe bu Senegaal bu musique contemporaine',
    excerptWo: 'Groupe musical bu Senegaal bu sos musique contemporaine, ak ay influences africaines ak internationales.',
    contentWo: `### Jëmmal

Takeifa mooy groupe musical bu Senegaal buy def musique contemporaine, te di jëfandikoo ay influences yu jóge ci Afrik ak yeneen horizons.

### Création bu bokk

Groupe bi di wone dynamiqueu formations musicales yu Senegaal yu di seet yoon yu bees ci rythmes, voix ak sonorités contemporaines.

### Scène musicale

Takeifa bokk na ci diversitéu scène musicale bu Senegaal ak ubbeeku bi ci publics yu jóge ci réew mi ak ci bitim-réew.

### Li war a fàttaliku

- Groupe bu Senegaal
- Musique contemporaine
- Fusion ak création bu bokk`,
  },

  'awa-ly': {
    titleWo: 'Awa Ly — chanteuse ak auteure-compositrice bu Senegaal',
    excerptWo: 'Chanteuse ak auteure-compositrice bu Senegaal, ci diggante soul, jazz, pop ak influences africaines.',
    contentWo: `### Jëmmal

Awa Ly mooy chanteuse ak auteure-compositrice bu Senegaal. Univers musicalam nekk na ci diggante soul, jazz, pop ak influences africaines.

### Univers musical

Musikam di wone diggante aada yu Afrik ak scènes internationales, ak bérab bu am solo bu baat ak arrangements contemporains.

### Rayonnement

Parcoursam di jàppale visibilité bu artistesu Senegaal ak création musicale bu jóge ci diaspora ci scènes internationales.

### Li war a fàttaliku

- Chanteuse bu Senegaal
- Soul ak jazz
- Influences africaines
- Scène internationale`,
  },

  'yoro-ndiaye': {
    titleWo: 'Yoro Ndiaye — chanteur ak musicien bu Senegaal',
    excerptWo: 'Chanteur ak musicien bu Senegaal bu lëkkale ak scène musicale contemporaine ak expressions populaires.',
    contentWo: `### Jëmmal

Yoro Ndiaye mooy chanteur ak musicien bu Senegaal bu lëkkale ak scène musicale contemporaine ak expressions populaires yu réew mi.

### Parcours musical

Universam nekk na ci scène bu artistes di boole rythmes ak instrumentsu Senegaal ak influences yu jóge ci yeneen horizons.

### Contribution

Parcoursam di yokk diversitéu musique bu Senegaal ci jamono jii ak visibilité bu générationsu artistes yu bees.

### Li war a fàttaliku

- Chanteur bu Senegaal
- Musique contemporaine
- Création musicale`,
  },

  'nuru-kane': {
    titleWo: 'Nuru Kane — musicien bu Senegaal, jëfandikukat ngoni ak fusion musicale',
    excerptWo: 'Musicien bu Senegaal buy boole instruments ak rythmesu Afrik occidentale, musique urbaine ak influences internationales.',
    contentWo: `### Jëmmal

Nuru Kane mooy musicien bu Senegaal buy boole instruments ak rythmesu Afrik occidentale, musique urbaine ak influences internationales.

### Cosaan ak création

Liggéeyam di wone waxtaan diggante traditions musicales yu Senegaal ak formesu jamono jii. Instrumentsu cordes ak rythmesu Afrik occidentale am nañu bérab bu am solo.

### Rayonnement

Parcoursam di jàppale yégle musiquesu Senegaal ak Afrik ci publics internationaux.

### Li war a fàttaliku

- Musicien bu Senegaal
- Fusion musicale
- Traditions yu Afrik occidentale
- Création contemporaine`,
  },
};
