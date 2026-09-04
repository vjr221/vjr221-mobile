import { decodeHtmlEntities } from './contentRepository';

export type RichRun = { text: string; bold?: boolean; italic?: boolean; href?: string };

export type RichBlock =
  | { kind: 'heading'; level: 2 | 3 | 4; runs: RichRun[] }
  | { kind: 'paragraph'; runs: RichRun[] }
  | { kind: 'listItem'; ordered: boolean; index: number; runs: RichRun[] }
  | { kind: 'quote'; runs: RichRun[] };

const VOID_RUN_TEXT = /^\s*$/;

function parseRuns(innerHtml: string): RichRun[] {
  const runs: RichRun[] = [];
  const INLINE_RE = /<(strong|b)[^>]*>([\s\S]*?)<\/\1>|<(em|i)[^>]*>([\s\S]*?)<\/\3>|<a\s[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>|<br\s*\/?>(?=)/gi;
  let last = 0;
  let match: RegExpExecArray | null;
  const pushText = (raw: string, extra: Partial<RichRun> = {}) => {
    const text = decodeHtmlEntities(raw.replace(/<[^>]*>/g, ''));
    if (!VOID_RUN_TEXT.test(text)) runs.push({ text, ...extra });
  };
  while ((match = INLINE_RE.exec(innerHtml))) {
    if (match.index > last) pushText(innerHtml.slice(last, match.index));
    if (match[1]) pushText(match[2] ?? '', { bold: true });
    else if (match[3]) pushText(match[4] ?? '', { italic: true });
    else if (match[5] !== undefined) pushText(match[6] ?? '', { href: match[5] });
    else runs.push({ text: '\n' });
    last = INLINE_RE.lastIndex;
  }
  if (last < innerHtml.length) pushText(innerHtml.slice(last));
  return runs;
}

function markListContext(html: string): string {
  const depth: { ordered: boolean }[] = [];
  return html.replace(/<ul[^>]*>|<\/ul>|<ol[^>]*>|<\/ol>|<li[^>]*>/gi, (tag) => {
    if (/^<ul/i.test(tag)) {
      depth.push({ ordered: false });
      return tag;
    }
    if (/^<ol/i.test(tag)) {
      depth.push({ ordered: true });
      return tag;
    }
    if (/^<\/(ul|ol)/i.test(tag)) {
      depth.pop();
      return tag;
    }
    const ordered = depth[depth.length - 1]?.ordered ?? false;
    return `<li data-ord="${ordered ? '1' : '0'}">`;
  });
}

const BLOCK_RE = /<h([2-4])[^>]*>([\s\S]*?)<\/h\1>|<blockquote[^>]*>([\s\S]*?)<\/blockquote>|<li[^>]*data-ord="(\d)"[^>]*>([\s\S]*?)<\/li>|<p[^>]*>([\s\S]*?)<\/p>/gi;

export function parseRichContent(html: string): RichBlock[] {
  if (!html) return [];
  const marked = markListContext(html);
  const blocks: RichBlock[] = [];
  let match: RegExpExecArray | null;
  let listIndex = 0;
  let lastListOrdered: boolean | null = null;
  BLOCK_RE.lastIndex = 0;
  while ((match = BLOCK_RE.exec(marked))) {
    const [, hLevel, hInner, quoteInner, liOrdered, liInner, pInner] = match;
    if (hLevel) {
      const runs = parseRuns(hInner ?? '');
      if (runs.length) blocks.push({ kind: 'heading', level: Number(hLevel) as 2 | 3 | 4, runs });
      lastListOrdered = null;
    } else if (quoteInner !== undefined) {
      const runs = parseRuns(quoteInner);
      if (runs.length) blocks.push({ kind: 'quote', runs });
      lastListOrdered = null;
    } else if (liOrdered !== undefined) {
      const runs = parseRuns(liInner ?? '');
      const ordered = liOrdered === '1';
      listIndex = lastListOrdered === ordered ? listIndex + 1 : 1;
      if (runs.length) blocks.push({ kind: 'listItem', ordered, index: listIndex, runs });
      lastListOrdered = ordered;
    } else if (pInner !== undefined) {
      const runs = parseRuns(pInner);
      if (runs.length) blocks.push({ kind: 'paragraph', runs });
      lastListOrdered = null;
    }
  }
  return blocks;
}
