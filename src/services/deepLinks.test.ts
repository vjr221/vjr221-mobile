import { fallbackWebUrl, parseDeepLink } from './deepLinks';

describe('parseDeepLink', () => {
  it('resolves a custom-scheme content link', () => {
    expect(parseDeepLink('vjr221://open/content/42')).toEqual({ kind: 'content', id: 42 });
  });

  it('resolves a site content link, ignoring query and hash', () => {
    expect(parseDeepLink('https://vjr221.sn/content/42?utm_source=whatsapp#top')).toEqual({ kind: 'content', id: 42 });
  });

  it('accepts www. and http/https interchangeably for the site domain', () => {
    expect(parseDeepLink('http://www.vjr221.sn/content/7')).toEqual({ kind: 'content', id: 7 });
  });

  it('resolves geo segments (region/department/commune/village)', () => {
    expect(parseDeepLink('https://vjr221.sn/regions/3')).toEqual({ kind: 'region', id: 3 });
    expect(parseDeepLink('https://vjr221.sn/departements/9')).toEqual({ kind: 'department', id: 9 });
    expect(parseDeepLink('https://vjr221.sn/communes/12')).toEqual({ kind: 'commune', id: 12 });
    expect(parseDeepLink('https://vjr221.sn/quartiers-villages/55')).toEqual({ kind: 'village', id: 55 });
  });

  it('resolves directory links, with and without a numeric id', () => {
    expect(parseDeepLink('https://vjr221.sn/annuaire/8')).toEqual({ kind: 'directory', id: 8 });
    expect(parseDeepLink('https://vjr221.sn/annuaire/sante')).toEqual({ kind: 'directory-category', slug: 'sante' });
  });

  it('resolves category links', () => {
    expect(parseDeepLink('https://vjr221.sn/categorie/culture')).toEqual({ kind: 'category', slug: 'culture' });
  });

  it('resolves the empty path to home', () => {
    expect(parseDeepLink('https://vjr221.sn/')).toEqual({ kind: 'home' });
    expect(parseDeepLink('vjr221://open')).toEqual({ kind: 'home' });
  });

  it('treats a single unrecognized path segment as a permalink slug, not a fabricated match', () => {
    expect(parseDeepLink('https://vjr221.sn/mon-article-slug')).toEqual({
      kind: 'permalink',
      slug: 'mon-article-slug',
      url: 'https://vjr221.sn/mon-article-slug',
    });
  });

  it('returns unknown for a foreign domain', () => {
    const result = parseDeepLink('https://example.com/content/42');
    expect(result.kind).toBe('unknown');
  });

  it('returns unknown for a malformed URL', () => {
    const result = parseDeepLink('not a url');
    expect(result.kind).toBe('unknown');
  });

  it('returns unknown rather than guessing when a geo segment has no numeric id', () => {
    const result = parseDeepLink('https://vjr221.sn/regions/');
    expect(result.kind).toBe('unknown');
  });
});

describe('fallbackWebUrl', () => {
  it('returns the original URL for unknown and permalink destinations', () => {
    expect(fallbackWebUrl({ kind: 'unknown', url: 'https://example.com/x' })).toBe('https://example.com/x');
    expect(fallbackWebUrl({ kind: 'permalink', slug: 'x', url: 'https://vjr221.sn/x' })).toBe('https://vjr221.sn/x');
  });

  it('falls back to the site root for any recognized destination', () => {
    expect(fallbackWebUrl({ kind: 'content', id: 1 })).toBe('https://vjr221.sn');
    expect(fallbackWebUrl({ kind: 'home' })).toBe('https://vjr221.sn');
  });
});
