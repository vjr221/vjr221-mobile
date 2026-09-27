import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Empty — ExtraC holds full pack; kept for import compatibility */
export const CONTENT_WO_EXTRA_D: Record<string, WolofContent> = {};
