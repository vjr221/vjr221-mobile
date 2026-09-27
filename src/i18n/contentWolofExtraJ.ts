import type { ContentItem } from '../types/content';
import { CONTENT_WO_EXTRA } from './contentWolofExtra';
import { CONTENT_WO_EXTRA_B } from './contentWolofExtraB';
import { CONTENT_WO_EXTRA_C } from './contentWolofExtraC';
import { CONTENT_WO_EXTRA_D } from './contentWolofExtraD';
import { CONTENT_WO_EXTRA_E } from './contentWolofExtraE';
import { CONTENT_WO_EXTRA_F } from './contentWolofExtraF';
import { CONTENT_WO_EXTRA_G } from './contentWolofExtraG';
import { CONTENT_WO_EXTRA_H } from './contentWolofExtraH';
import { CONTENT_WO_EXTRA_I } from './contentWolofExtraI';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_J: Record<string, WolofContent> = {
  'musee-de-la-femme-henriette-bathily-dakar': {
    titleWo: 'Musée de la Femme Henriette Bathily — Dakar',
    excerptWo: 'Musée bu jëm ci taariixu jigéen ñi, dundug jigéen yu Senegaal ak liggéeyu émancipation.',
    contentWo: `### Jëmmal

Musée de la Femme Henriette Bathily (MUFEM) mooy musée bu jëm ci taariix, rôle ak dundug jigéen yu Senegaal, ci dëkk ak ci gox. Ñu ubbi ko ci Gorée ci 1994, te ñu yóbbu ko Dakar ci 2015.

### Taariix ak transfert

Musée bi sosu na ci Gorée ci 1994, te gannaaw loolu ñu yóbbu ko Dakar ci Place du Souvenir Africain et de la Diaspora, Corniche Ouest.

### Collections

Musée bi dafay wone mbir yu aju ci dundug jigéen yu Senegaal ci milieu rural ak urbain, ak itam ay nit yu am solo ci yoonu émancipation jigéen ñi.

### Solo

MUFEM bokk na ci bérab yu jàppale xam-xam, transmission ak valorisationu patrimoine ak taariixu jigéen ñi ci Senegaal.`,
  },
  'grand-theatre-national-doudou-ndiaye-coumba-rose-dakar': {
    titleWo: 'Grand Théâtre national Doudou Ndiaye Coumba Rose — scène bu mag bu Dakar',
    excerptWo: 'Benn ci scène yu mag yu arts ak spectacles ci Senegaal, te mu bokk ci réseau bu institutions culturelles nationales.',
    contentWo: `### Jëmmal

Grand Théâtre national Doudou Ndiaye Coumba Rose mooy benn ci scène yu mag yu arts ak spectacles ci Senegaal. Mu bokk ci établissements culturels yu nekk ci tutelle bu département bi yor Culture.

### Institution ci biir écosystème culturel

Grand Théâtre bi nekk na ci wetu yeneen structures culturelles nationales, mel ni Musée des Civilisations Noires, Compagnie du Théâtre national Daniel Sorano, Maison de la Culture Douta Seck, Galerie nationale des Arts ak École nationale des Arts.

### Scène bu arts vivants

Vocationu Grand Théâtre bi mooy program ak wone spectacles ak manifestations culturelles. Mu nekk na itam bérab bu artistes, professionnels, publics ak initiatives culturelles di daje.

### Agenda culturel

Événements yu ñu di organiz ci Grand Théâtre mën nañu bokk ci agenda culturel territorial, ngir dimbali nit ñi ci seet ak xam ay manifestations ci Dakar.

### Localisation

Dëkk: Dakar
Diiwaan: Dakar
Institution: Grand Théâtre national Doudou Ndiaye Coumba Rose`,
  },
};
