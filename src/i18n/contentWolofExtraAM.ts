import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 79 — consolidation du patrimoine musical et des musiques contemporaines. */
export const CONTENT_WO_EXTRA_AM: Record<string, WolofContent> = {
  'ablaye-cissoko': {
    titleWo: 'Ablaye Cissoko — koraïste ak chanteur bu Senegaal',
    excerptWo: 'Koraïste ak chanteur bu Senegaal buy lëkkale kora, voix ak poésie ci dialogue diggante cosaan ak création.',
    contentWo: `### Jëmmal

Ablaye Cissoko mooy musicien ak koraïste bu Senegaal. Kora, voix ak poésie bokk nañu ci universu créationam.

### Kora ak poésie

Kora mooy instrument bu am solo ci liggéeyam. Sonoritésu instrument bi ak baat di daje ci musique bu dal, fu poésie ak mélodie di bokk.

### Dialogue diggante aada yi

Liggéeyam di lëkkale patrimoine mandingue ak influences yu wuute. Musique di nekk yoonu waxtaan diggante cosaan, artistes ak publics yu jóge ci barab yu wuute.

### Li war a fàttaliku

- Koraïste ak chanteur bu Senegaal
- Kora ak poésie
- Patrimoine mandingue
- Dialogue culturel`,
  },

  'seckou-keita': {
    titleWo: 'Seckou Keita — koraïste ak compositeur',
    excerptWo: 'Koraïste ak compositeur buy lëkkale tradition mandingue ak création contemporaine ci sonorités yu wuute.',
    contentWo: `### Jëmmal

Seckou Keita mooy koraïste ak compositeur. Kora mooy instrument bu mag ci liggéeyam, te créationam di boole tradition ak formu musique bu jamono jii.

### Kora ak composition

Liggéeyam di seet diggante kora, voix ak yeneen instruments. Arrangement yi di jox bérab ci mélodie, rythme ak dialogue diggante sonorités.

### Patrimoine ak création

Kora bokk na ci patrimoine musical mandingue. Ci liggéeyu Seckou Keita, instrument bi di bokk itam ci création contemporaine ak rencontres musicales.

### Li war a fàttaliku

- Koraïste ak compositeur
- Tradition mandingue
- Création contemporaine
- Dialogue musical`,
  },

  'positive-black-soul': {
    titleWo: 'Positive Black Soul — groupe hip-hop bu Senegaal',
    excerptWo: 'Groupe hip-hop bu Senegaal, bokk ci pionniers yu rap senegaaleer ak culture urbaine.',
    contentWo: `### Jëmmal

Positive Black Soul mooy groupe hip-hop bu Senegaal. Groupe bi bokk na ci génération bu pionniers yu rap senegaaleer.

### Rap ak société

Rap bi di jëfandikoo wax ak rythme ngir waxtaan ci identité, société, culture urbaine ak Afrique. Musique bi di boole expression artistique ak regard ci dundin.

### Hip-hop bu Senegaal

Groupe bi bokk na ci développementu scène hip-hop bu Senegaal. Rap di jàppale itam créationu langage musical bu jege jeunesse ak réalitésu réew mi.

### Li war a fàttaliku

- Groupe hip-hop bu Senegaal
- Rap ak culture urbaine
- Identité ak société
- Patrimoine bu hip-hop`,
  },

  'orchestre-baobab': {
    titleWo: 'Orchestre Baobab — groupe bu mag ci musique bu Senegaal',
    excerptWo: 'Groupe bu mag ci musique bu Senegaal buy lëkkale sonorités sénégalaises ak influences afro-cubaines.',
    contentWo: `### Jëmmal

Orchestre Baobab mooy benn ci groupes yu mag yu musique bu Senegaal. Son bi lëkkale sonorités sénégalaises ak influences afro-cubaines.

### Son ak instruments

Musique bi di boole voix, cuivres, guitares ak rythmes yu jëm ci danse. Mélange bi di wone ni scène musicale bu Senegaal amoon na ay waxtaan ak yeneen traditions musicales.

### Héritage musical

Orchestre Baobab bokk na ci patrimoine musical bu Senegaal. Liggéeyu groupe bi di wone importanceu transmissionu sonorités ak formes musicales ci diggante générations.

### Li war a fàttaliku

- Groupe musical bu Senegaal
- Sonorités sénégalaises
- Influences afro-cubaines
- Patrimoine ak transmission`,
  },
};
