import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_AM: Record<string, WolofContent> = {
  'ablaye-cissoko': {
    titleWo: 'Ablaye Cissoko',
    excerptWo: 'Koraïste ak chanteur senegaaleer — kora, poésie ak dialogue culturel.',
    contentWo: `### Jëmmal

Ablaye Cissoko mooy musicien ak koraïste senegaaleer. Liggéeyam dafa jëm ci kora, voix ak poésie.

### Musik

Dafa lëkkale tradition bu kora ak influences yu wuute, ci son bu dal ak bu jëm ci dialogue diggante cultures.

### Rayonnement

Ablaye Cissoko bokk na ci artistes senegaaleer yi di wone patrimoine musical bu Senegaal ci scènes internationales.`,
  },
  'seckou-keita': {
    titleWo: 'Seckou Keita',
    excerptWo: 'Koraïste ak compositeur — tradition mandingue ak création contemporaine.',
    contentWo: `### Jëmmal

Seckou Keita mooy koraïste ak compositeur. Kora mooy instrument bu mag ci liggéeyam, te dafa lëkkale tradition mandingue ak création contemporaine.

### Musik

Liggéeyam dafa jëm ci dialogue diggante kora, voix ak yeneen instruments. Son bi dafa wone richesse bu musique mandingue.

### Rayonnement

Seckou Keita am na audience ci bitim-réew te bokk na ci artistes yi di yokk xam-xamu kora.`,
  },
  'positive-black-soul': {
    titleWo: 'Positive Black Soul',
    excerptWo: 'Groupe hip-hop senegaaleer — rap, culture urbaine ak Afrique.',
    contentWo: `### Jëmmal

Positive Black Soul mooy groupe hip-hop bu Senegaal. Groupe bi bokk na ci génération bu pionniers yu rap senegaaleer.

### Musik

Rap bi dafa jëm ci identité, société, culture urbaine ak Afrique. Groupe bi dafa contribué ci développement bu hip-hop ci Senegaal.

### Héritage

Positive Black Soul am na solo ci taariixu rap senegaaleer ak ci rayonnement bu hip-hop africain.`,
  },
  'orchestre-baobab': {
    titleWo: 'Orchestre Baobab',
    excerptWo: 'Groupe bu mag ci musique senegaaleer — mbalax, afro-cubain ak patrimoine.',
    contentWo: `### Jëmmal

Orchestre Baobab mooy benn ci groupes yu mag yu musique senegaaleer. Liggéeyam lëkkale sonorités sénégalaises ak influences afro-cubaines.

### Musik

Groupe bi am na wàllu ci développement bu musique populaire ci Senegaal, ak sonorités yu jëm ci danse, cuivres, guitares ak rythmes africains.

### Héritage

Orchestre Baobab bokk na ci patrimoine musical bu Senegaal ak ci rayonnement bu musique bi ci bitim-réew.`,
  },
};
