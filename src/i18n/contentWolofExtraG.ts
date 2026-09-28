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

};
