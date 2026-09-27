import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_AK: Record<string, WolofContent> = {
  'didier-awadi': {
    titleWo: 'Didier Awadi',
    excerptWo: 'Rappeur senegaaleer — hip-hop, société ak engagement culturel.',
    contentWo: `### Jëmmal

Didier Awadi mooy rappeur senegaaleer ak benn ci figures yu mag yu hip-hop ci Afrique de l’Ouest.

### Musik

Liggéeyam dafa jëm ci rap, histoire, société ak questions yu dundin. Da fa jëfandikoo musik ngir wax ci mbir yu am solo ci société.

### Solo

Awadi bokk na ci développement bu hip-hop senegaaleer ak ci rayonnement bu rap africain.`,
  },
  'doudou-ndiaye-rose': {
    titleWo: 'Doudou Ndiaye Rose',
    excerptWo: 'Performer bu sabar ak percussion — patrimoine musical bu Senegaal.',
    contentWo: `### Jëmmal

Doudou Ndiaye Rose mooy percussionniste ak chef d’orchestre senegaaleer, xam-xam bu mag ci sabar.

### Sabar

Liggéeyam ci percussion dafa jàpp ci rythmes, ensembles ak transmission bu patrimoine musical senegaaleer.

### Héritage

Doudou Ndiaye Rose am na solo ci taariixu musique senegaaleer ak ci wone sabar ci scène internationale.`,
  },
  'wassis-diop': {
    titleWo: 'Wasis Diop',
    excerptWo: 'Musicien ak compositeur senegaaleer — musique, cinéma ak création contemporaine.',
    contentWo: `### Jëmmal

Wasis Diop mooy musicien ak compositeur senegaaleer. Liggéeyam dafa lëkkale musique senegaaleer ak influences yu wuute.

### Cinéma ak création

Dafa liggéey ci musique de film ak ci projets artistiques yu jëm ci création contemporaine.

### Rayonnement

Liggéeyam bokk na ci wone richesse bu musique senegaaleer ci scènes internationales.`,
  },
  'cheikh-lo': {
    titleWo: 'Cheikh Lô',
    excerptWo: 'Guitariste ak chanteur senegaaleer — mbalax, reggae, musique spirituelle ak influences internationales.',
    contentWo: `### Jëmmal

Cheikh Lô mooy chanteur ak guitariste senegaaleer. Musikam dafa lëkkale mbalax ak influences yu wuute, ci biir am spirituel ak acoustique.

### Musik

Dafa jëfandikoo voix, guitare ak rythmes africains ngir sos son bu am boppam.

### Rayonnement

Cheikh Lô bokk na ci artistes senegaaleer yi amoon audience ci bitim-réew, te liggéeyam dafa wone diversité bu musique Senegaal.`,
  },
};
