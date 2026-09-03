import type { ContentItem } from '../types/content';
import { getFeaturedContent } from './contentRepository';

/**
 * Suggestions réelles uniquement. On réutilise le flux éditorial public de
 * VJR 221 et on exclut la fiche courante ; aucune donnée fictive n'est créée.
 */
export async function getRelatedContent(item: ContentItem, limit = 6): Promise<ContentItem[]> {
  const result = await getFeaturedContent();
  return result.items.filter((candidate) => candidate.id !== item.id).slice(0, limit);
}
