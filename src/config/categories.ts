import type { ContentType } from '../types/content';

export type Category = { id: ContentType; labelKey: string; emoji: string; available: boolean };

/**
 * Disponibilité réelle des univers éditoriaux côté application.
 *
 * `available: true` signifie que l'API expose des données réelles et qu'un écran
 * dédié existe. Les autres univers restent affichés (pour montrer l'ambition du
 * produit) mais annoncent clairement l'état « à venir » — jamais de contenu inventé.
 */
export const categories: Category[] = [
  { id: 'regions', labelKey: 'regions', emoji: '◉', available: true },
  { id: 'tourism', labelKey: 'tourism', emoji: '⍁', available: false },
  { id: 'heritage', labelKey: 'heritage', emoji: '◇', available: false },
  { id: 'gastronomy', labelKey: 'gastronomy', emoji: '◌', available: false },
  { id: 'history', labelKey: 'history', emoji: '◫', available: false },
  { id: 'nature', labelKey: 'nature', emoji: '♧', available: false },
  { id: 'culture', labelKey: 'culture', emoji: '◈', available: false },
  { id: 'events', labelKey: 'events', emoji: '✦', available: false },
  { id: 'people', labelKey: 'people', emoji: '●', available: false },
  { id: 'directory', labelKey: 'directory', emoji: '▦', available: true },
  { id: 'news', labelKey: 'news', emoji: '▤', available: true },
];
