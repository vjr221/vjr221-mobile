import type { ContentItem } from '../types/content';
import { getCategoryContent } from './contentRepository';

/** Fetches a small set of real editorial items from the same VJR 221 universe.
 * The current item is excluded; nothing is fabricated when the API has no matches. */
export async function getRelatedContent(item: ContentItem, limit = 6): Promise<ContentItem[]> {
  const result = await getCategoryContent(item.type, { page: 1 });
  return result.items.filter((candidate) => candidate.id !== item.id).slice(0, limit);
}
