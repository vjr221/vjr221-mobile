import type { ContentItem } from '../types/content';
import { CONTENT_WO_EXTRA } from './contentWolofExtra';
import { CONTENT_WO_EXTRA_B } from './contentWolofExtraB';
import { CONTENT_WO_EXTRA_C } from './contentWolofExtraC';
import { CONTENT_WO_EXTRA_D } from './contentWolofExtraD';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/**
 * Couche Wolof — régions, tourisme, patrimoine (vague 7 : qualité).
 * Compléments : Extra + ExtraB + ExtraC
 */
const CONTENT_WO_CORE: Record<string, WolofContent> = {
  'region-de-dakar': {
    titleWo: 'Diiwaanu Dakar',
    excerptWo: 'Diiwaan bu gën a ndaw ci superficie, waaye Dakar mooy dëkk bu mag bu politik, ekonom ak administrasyon.',
    contentWo: `### Jëmmal\n\nDiiwaanu Dakar mooy diiwaan bu gën a ndaw ci Senegaal ci kaw superficie, waaye mu am solo lool ci mbirum politik, ekonom, administrasyon ak way-dëkk. Dakar, dëkk bu mag bu réew mi, nekk na ci péninsule Cap-Vert, ci wetug géej gi.\n\n### Géeographie\n\nDakar dafa aju ci Atlantique ci norte, sowwu ak sud ; Thiès mooy ci penku. Péninsule Cap-Vert, Îles de la Madeleine ak Gorée bokk nañu ci paysage bi.\n\n### Taariix\n\nTaariixu Dakar dafa lëkkale ak Cap-Vert ak Gorée. Gannaaw indipendance ci 1960, Dakar des na capitale bu République du Senegaal.\n\n### Toppatoo\n\nJuróom-benn départements : Dakar, Guédiawaye, Pikine, Keur Massar ak Rufisque.\n\n### Ekonom ak aada\n\nCommerce, services, banques, numérique ak tourisme. Gorée, Monument de la Renaissance Africaine, Corniche, Village des Arts ak marchés yu mag yi.`,
  },
};

const CONTENT_WO: Record<string, WolofContent> = {
  ...CONTENT_WO_CORE,
  ...CONTENT_WO_EXTRA,
  ...CONTENT_WO_EXTRA_B,
  ...CONTENT_WO_EXTRA_C,
  ...CONTENT_WO_EXTRA_D,
};

export function getWolofContentKeys(): string[] {
  return Object.keys(CONTENT_WO);
}

export function getWolofContentBySlug(slug: string): WolofContent | undefined {
  const clean = (slug.replace(/^\/+|\/+$/g, '').split('/').pop() ?? slug).toLowerCase();
  if (CONTENT_WO[clean]) return CONTENT_WO[clean];
  const withoutNum = clean.replace(/-\d+$/, '');
  if (withoutNum !== clean && CONTENT_WO[withoutNum]) return CONTENT_WO[withoutNum];
  return undefined;
}

export function getWolofContent(item: ContentItem): WolofContent | undefined {
  const candidates: string[] = [];
  if (item.url) candidates.push(item.url.replace(/\/$/, '').split('/').pop() ?? '');
  const maybeSlug = (item as { slug?: string }).slug;
  if (maybeSlug) candidates.push(maybeSlug);
  for (const c of candidates) {
    if (!c) continue;
    const wo = getWolofContentBySlug(c);
    if (wo) return wo;
  }
  return undefined;
}
