import type { ContentItem } from '../types/content';
import { getCategoryContent } from './contentRepository';
import { getDirectoryEntries } from './directoryRepository';

/** Fetches a small set of real editorial items from the same VJR 221 universe.
 * The current item is excluded; nothing is fabricated when the API has no matches.
 * Les fiches annuaire (type 'directory') n'ont pas de mapping dans CATEGORY_TAXONOMY
 * (ce ne sont pas des catégories wp/v2 éditoriales) : elles passent par l'API dédiée
 * /annuaire. `ContentItem.tags` porte le nom affiché de la catégorie, pas son slug,
 * donc on ne filtre pas dessus ici pour éviter d'envoyer un paramètre invalide à
 * l'API — on affiche les entrées d'annuaire les plus récentes, jamais inventées. */
export async function getRelatedContent(item: ContentItem, limit = 6): Promise<ContentItem[]> {
  if (item.type === 'directory') {
    const result = await getDirectoryEntries({ perPage: limit + 1 });
    return result.items.filter((candidate) => candidate.id !== item.id).slice(0, limit);
  }
  const result = await getCategoryContent(item.type, { page: 1 });
  return result.items.filter((candidate) => candidate.id !== item.id).slice(0, limit);
}
