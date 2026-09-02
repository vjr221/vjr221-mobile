import type { ContentType } from '../types/content';
import type { IconName } from '../components/icons/Icon';

export type Category = { id: ContentType; labelKey: string; emoji: string; icon: IconName; available: boolean };

/**
 * Disponibilité réelle des univers éditoriaux côté application.
 *
 * `available: true` signifie que l'API expose des données réelles et qu'un écran
 * dédié existe. Les autres univers restent affichés (pour montrer l'ambition du
 * produit) mais annoncent clairement l'état « à venir » — jamais de contenu inventé.
 *
 * `emoji` est conservé pour compatibilité mais l'UI affiche désormais `icon`
 * (famille SVG trait fin de la marque) plutôt que des glyphes Unicode.
 */
export const categories: Category[] = [
  { id: 'regions', labelKey: 'regions', emoji: '◉', icon: 'territoires', available: true },
  { id: 'tourism', labelKey: 'tourism', emoji: '⍁', icon: 'compass', available: false },
  { id: 'heritage', labelKey: 'heritage', emoji: '◇', icon: 'info', available: false },
  { id: 'gastronomy', labelKey: 'gastronomy', emoji: '◌', icon: 'clock', available: false },
  { id: 'history', labelKey: 'history', emoji: '◫', icon: 'clock', available: false },
  { id: 'nature', labelKey: 'nature', emoji: '♧', icon: 'globe', available: false },
  { id: 'culture', labelKey: 'culture', emoji: '◈', icon: 'image', available: false },
  { id: 'events', labelKey: 'events', emoji: '✦', icon: 'bell', available: false },
  { id: 'people', labelKey: 'people', emoji: '●', icon: 'user', available: false },
  { id: 'directory', labelKey: 'directory', emoji: '▦', icon: 'annuaire', available: true },
  { id: 'news', labelKey: 'news', emoji: '▤', icon: 'mail', available: true },
];
