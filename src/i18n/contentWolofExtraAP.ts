import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_AP: Record<string, WolofContent> = {
  'le-ndepp': {
    titleWo: 'Ndëpp',
    excerptWo: 'Jébbalu Lébou bu yàgg, jëm ci wér-gu-yaramu ruu, setal ak jàmmu askan.',
    contentWo: `### Jëmmal

Ndëpp mooy benn ci jébbal yu xam-xam ci aada Lébou. Ñu koy boole ak wér-gu-yaramu ruu, setal ak delloo équilibre diggante nit, askan ak mbir yu ñu gëm.

### Aada Lébou

Lébou yi dëkk nañu ci penkumu Cap-Vert, rawatina ci Yoff, Ngor, Ouakam ak Cambérène. Aada bi lëkkale na ak géej, bokk ak askan ak xam-xamu maam yi.

### Jébbal ak yëngu-yëngu

Ndëpp mën na ëmb woote, woy, percussions, fecc ak jëf yu am maana ci setal. Mbooloo mi ak jàppale am nañu solo ci ceremony bi.

### Toppatoo ak sàmm

Xam-xam ci Ndëpp dafa jaar ci wax ak jàng ci njaboot ak ci ceremony yi. Urbanisation ak soppi dundin di wone lu war a def ngir aar patrimoine bi.`,
  },
  'centre-culturel-regional-de-sedhiou': {
    titleWo: 'Centre culturel régional de Sédhiou',
    excerptWo: 'Serwis régional bu Culture, jëm ci arts, jàng ak patrimoine bu Sédhiou.',
    contentWo: `### Jëmmal

Centre culturel régional de Sédhiou mooy serwis bu ministère bu Culture bi, te dafa liggéey ci région ngir doxal politique culturelle bu réew mi.

### Arts ak patrimoine

Centre bi di yokk expressions artistiques ak littéraires, di dimbali acteurs culturels, di doxal lecture publique ak di wone patrimoine matériel ak immatériel bu région bi.

### Événements ak transmission

Dafa bokk ci journée yu théâtre, danse, livre ak fête de la musique. Dafa itam dimbali ci waajal délégation régionale bu FESNAC.

### Territoire

Sédhiou sosu na région ci 2008, ci génne ci Kolda. Centre bi am na solo ci structuration bu vie culturelle bu région bi.`,
  },
  'direction-arts-senegal': {
    titleWo: 'Direction des Arts du Sénégal',
    excerptWo: 'Serwis bu yoon yu réew mi ngir yokk création artistique ak culturelle.',
    contentWo: `### Jëmmal

Direction des Arts mooy serwis bu public bi di doxal politique bu réew mi ci yokk création artistique ak culturelle.

### Wàll yi

Liggéey bi dafa ëmb arts visuels, design, mode, arts vivants, danse, musique ak théâtre, ak yeneen projets yu am solo.

### Solo ci secteur culturel

Direction bi di jàppale structuration ak développement bu création ci wàll yu wuute, te di wone richesse bu scène artistique bu Senegaal.`,
  },
};
