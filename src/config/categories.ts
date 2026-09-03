import type { ContentType } from '../types/content';
import type { IconName } from '../components/icons/Icon';
import type { TranslationKey } from '../i18n/strings';

export type Category = {
  id: ContentType;
  labelKey: TranslationKey;
  descKey: TranslationKey;
  /** Présent uniquement pour les univers qui ouvrent CategoryContentScreen (voir ExploreScreen). */
  introKey?: TranslationKey;
  emoji: string;
  icon: IconName;
  available: boolean;
};

/**
 * Disponibilité réelle des univers éditoriaux côté application.
 *
 * `available: true` signifie que l'API expose des données réelles et qu'un écran
 * dédié existe. Depuis l'intégration des rubriques WordPress (voir
 * `contentRepository.CATEGORY_TAXONOMY`), tous les univers ci-dessous sont
 * connectés à de vraies catégories du site — plus aucun « à venir » de façade :
 * un univers resterait `available: false` uniquement s'il n'existe encore aucune
 * catégorie WordPress correspondante, jamais par oubli.
 *
 * `descKey` alimente la légende courte de chaque tuile dans Explorer (remplace
 * le badge Disponible/À venir, redondant maintenant que tout est disponible).
 * `introKey` alimente le chapô de l'écran de rubrique (CategoryContentScreen).
 *
 * `emoji` est conservé pour compatibilité mais l'UI affiche désormais `icon`
 * (famille SVG trait fin de la marque) plutôt que des glyphes Unicode.
 */
export const categories: Category[] = [
  { id: 'regions', labelKey: 'regions', descKey: 'regionsDesc', emoji: '◉', icon: 'territoires', available: true },
  { id: 'tourism', labelKey: 'tourism', descKey: 'tourismDesc', introKey: 'tourismIntro', emoji: '⍁', icon: 'compass', available: true },
  { id: 'heritage', labelKey: 'heritage', descKey: 'heritageDesc', introKey: 'heritageIntro', emoji: '◇', icon: 'info', available: true },
  { id: 'gastronomy', labelKey: 'gastronomy', descKey: 'gastronomyDesc', introKey: 'gastronomyIntro', emoji: '◌', icon: 'clock', available: true },
  { id: 'history', labelKey: 'history', descKey: 'historyDesc', introKey: 'historyIntro', emoji: '◫', icon: 'clock', available: true },
  { id: 'nature', labelKey: 'nature', descKey: 'natureDesc', introKey: 'natureIntro', emoji: '♧', icon: 'globe', available: true },
  { id: 'culture', labelKey: 'culture', descKey: 'cultureDesc', introKey: 'cultureIntro', emoji: '◈', icon: 'image', available: true },
  { id: 'events', labelKey: 'events', descKey: 'eventsDesc', introKey: 'eventsIntro', emoji: '✦', icon: 'bell', available: true },
  { id: 'people', labelKey: 'people', descKey: 'peopleDesc', introKey: 'peopleIntro', emoji: '●', icon: 'user', available: true },
  { id: 'directory', labelKey: 'directory', descKey: 'directoryDesc', emoji: '▦', icon: 'annuaire', available: true },
  { id: 'news', labelKey: 'news', descKey: 'newsDesc', introKey: 'newsIntro', emoji: '▤', icon: 'mail', available: true },
];
