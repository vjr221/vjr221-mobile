import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_AN: Record<string, WolofContent> = {
  'el-hadj-ndiaye': {
    titleWo: 'El Hadj N’Diaye',
    excerptWo: 'Chanteur ak musicien senegaaleer — folk, tradition ak création contemporaine.',
    contentWo: `### Jëmmal

El Hadj N’Diaye mooy chanteur ak musicien senegaaleer. Liggéeyam dafa lëkkale sonorités traditionnelles ak influences contemporaines.

### Musik

Dafa jëfandikoo voix ak instruments yu wuute ngir sos musique bu am identité senegaaleer.

### Solo

Liggéeyam bokk na ci scène musicale senegaaleer ak ci wone richesse bu patrimoine musical.`,
  },
  'ngaaka-blinde': {
    titleWo: 'Ngaaka Blindé',
    excerptWo: 'Rappeur senegaaleer — hip-hop, performance ak culture urbaine.',
    contentWo: `### Jëmmal

Ngaaka Blindé mooy rappeur senegaaleer. Liggéeyam bokk na ci scène hip-hop bu génération bu bees.

### Musik

Dafa jëfandikoo rap ak performance ngir wax ci dundin, jeunesse ak société, te di yokk sonorités yu scène urbaine.

### Culture urbaine

Ngaaka Blindé bokk na ci artistes yi di yokk visibilité bu rap ak culture urbaine ci Senegaal.`,
  },
  'dip-doundou-guiss': {
    titleWo: 'Dip Doundou Guiss',
    excerptWo: 'Rappeur ak producteur senegaaleer — rap, scène urbaine ak création.',
    contentWo: `### Jëmmal

Dip Doundou Guiss mooy artiste bu scène hip-hop senegaaleer. Dafa liggéey ci rap ak production musicale.

### Musik

Liggéeyam dafa jëm ci écriture, performance ak création bu sonorités yu urbaine.

### Rayonnement

Dip bokk na ci génération bu artistes yi di yokk développement bu rap senegaaleer ci plateforme yu numériques ak scènes publiques.`,
  },
  'youssou-ndour': {
    titleWo: 'Youssou N’Dour',
    excerptWo: 'Chanteur ak percussionniste senegaaleer — mbalax, musique populaire ak rayonnement international.',
    contentWo: `### Jëmmal

Youssou N’Dour mooy chanteur ak percussionniste senegaaleer, xam-xam ci mbalax ak musique populaire.

### Musik

Liggéeyam dafa lëkkale sabar, rythmes africains, voix ak influences internationales. Mbalax bokk na ci identité bu son bi.

### Rayonnement

Youssou N’Dour am na audience internationale te bokk na ci artistes yi gën a wone musique senegaaleer ci bitim-réew.`,
  },
};
