import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_J: Record<string, WolofContent> = {
  'musee-de-la-femme-henriette-bathily-dakar': {
    titleWo: 'Musée de la Femme Henriette Bathily — Dakar',
    excerptWo: 'Musée bu jëm ci taariixu jigéen ñi, dundug jigéen yu Senegaal ak liggéeyu émancipation.',
    contentWo: `### Jëmmal

Musée de la Femme Henriette Bathily (MUFEM) mooy musée bu jëm ci taariix, rôle ak dundug jigéen yu Senegaal, ci dëkk ak ci gox. Ñu ubbi ko ci Gorée ci 1994, te ñu yóbbu ko Dakar ci 2015.

### Taariix ak bérab

Musée bi sosu na ci Gorée ci 1994. Gannaaw loolu ñu yóbbu ko Dakar ci Place du Souvenir Africain et de la Diaspora, Corniche Ouest.

### Collections ak transmission

Musée bi dafay wone mbir yu aju ci dundug jigéen yu Senegaal ci milieu rural ak urbain, ak itam ay nit yu am solo ci yoonu émancipation jigéen ñi.

### Li war a fàttaliku

- Musée de la Femme Henriette Bathily
- Taariix ak dundug jigéen yu Senegaal
- Patrimoine, transmission ak émancipation`,
  },
};
