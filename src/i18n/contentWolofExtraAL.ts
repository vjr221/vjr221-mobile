import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_AL: Record<string, WolofContent> = {
  'carlou-d': {
    titleWo: 'Carlou-D',
    excerptWo: 'Musicien ak chanteur senegaaleer — folk, mbalax ak création contemporaine.',
    contentWo: `### Jëmmal

Carlou-D mooy artiste ak musicien senegaaleer. Musikam dafa lëkkale sonorités africaines ak influences contemporaines.

### Musik

Dafa jëfandikoo voix, guitare ak rythmes yu wuute. Liggéeyam dafa jëm ci création bu am boppam ak fusion bu genres.

### Rayonnement

Carlou-D bokk na ci génération bu artistes senegaaleer yi di wër sonorités yu bees te di wone musique Senegaal ci bitim-réew.`,
  },
  'sister-fa': {
    titleWo: 'Sister Fa',
    excerptWo: 'Rappeuse senegaaleer — hip-hop, société ak voix bu jigéen yi.',
    contentWo: `### Jëmmal

Sister Fa mooy rappeuse senegaaleer. Liggéeyam dafa jëm ci hip-hop, société ak questions yu jëm ci dundin.

### Musik

Rapp bi dafa jëfandikoo texte ak performance ngir wax ci expériences ak mbir yu am solo ci société.

### Solo

Sister Fa bokk na ci artistes jigéen yi di yokk seen place ci scène hip-hop senegaaleer.`,
  },
  'fou-malade': {
    titleWo: 'Fou Malade',
    excerptWo: 'Rappeur ak artiste senegaaleer — hip-hop, société ak expression citoyenne.',
    contentWo: `### Jëmmal

Fou Malade mooy rappeur senegaaleer ak acteur bu scène hip-hop. Liggéeyam dafa jëm ci musique ak mbirum société.

### Hip-hop

Dafa jëfandikoo rap ngir wax ci dundin, jeunesse, société ak questions yu jamono jii.

### Rayonnement

Fou Malade bokk na ci mouvement hip-hop senegaaleer ak ci transmission bu culture urbaine.`,
  },
  'keyti': {
    titleWo: 'Keyti',
    excerptWo: 'Rappeur ak pionnier bu hip-hop senegaaleer — texte, scène ak culture urbaine.',
    contentWo: `### Jëmmal

Keyti mooy rappeur senegaaleer, bokk ci pionniers yu hip-hop ci Senegaal.

### Musik

Liggéeyam dafa jàpp ci rap, écriture ak performance. Texte yi di jàngale ci société ak expérience bu jeunesse.

### Héritage

Keyti am na wàllu ci taariixu hip-hop senegaaleer ak ci développement bu scène urbaine.`,
  },
  'daara-j-family': {
    titleWo: 'Daara J Family',
    excerptWo: 'Groupe hip-hop senegaaleer — rap, reggae ak influences africaines.',
    contentWo: `### Jëmmal

Daara J Family mooy groupe bu musique senegaaleer, xam-xam ci hip-hop ak fusion bu sonorités africaines.

### Musik

Groupe bi dafa lëkkale rap, reggae, mbalax ak yeneen influences. Tekki ak créativité am nañu solo ci son bi.

### Rayonnement

Daara J Family bokk na ci groupes senegaaleer yi amoon audience ci scènes internationales.`,
  },
};
