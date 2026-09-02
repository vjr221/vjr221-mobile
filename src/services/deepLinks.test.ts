import { fallbackWebUrl, parseDeepLink } from './deepLinks';

describe('parseDeepLink', () => {
  it('reconnaît une URL de contenu (site)', () => {
    expect(parseDeepLink('https://vjr221.sn/content/221')).toEqual({ kind: 'content', id: 221 });
  });

  it('reconnaît une URL de contenu (schéma app)', () => {
    expect(parseDeepLink('vjr221://open/content/221')).toEqual({ kind: 'content', id: 221 });
  });

  it('reconnaît une URL de catégorie', () => {
    expect(parseDeepLink('https://vjr221.sn/categorie/tourisme')).toEqual({ kind: 'category', slug: 'tourisme' });
  });

  it('reconnaît une URL géographique (région, département, commune, village)', () => {
    expect(parseDeepLink('https://vjr221.sn/regions/2153')).toEqual({ kind: 'region', id: 2153 });
    expect(parseDeepLink('https://vjr221.sn/departements/2024')).toEqual({ kind: 'department', id: 2024 });
    expect(parseDeepLink('https://vjr221.sn/communes/4731/')).toEqual({ kind: 'commune', id: 4731 });
    expect(parseDeepLink('https://vjr221.sn/quartiers-villages/12510')).toEqual({ kind: 'village', id: 12510 });
  });

  it('reconnaît une URL annuaire (fiche et catégorie)', () => {
    expect(parseDeepLink('https://vjr221.sn/annuaire/9001')).toEqual({ kind: 'directory', id: 9001 });
    expect(parseDeepLink('https://vjr221.sn/annuaire/annuaire-restaurants')).toEqual({ kind: 'directory-category', slug: 'annuaire-restaurants' });
  });

  it('ignore les paramètres et ancres additionnels', () => {
    expect(parseDeepLink('https://vjr221.sn/content/221?utm_source=facebook&utm_medium=social#section-2')).toEqual({ kind: 'content', id: 221 });
  });

  it('tolère www. et un slash final', () => {
    expect(parseDeepLink('https://www.vjr221.sn/regions/2153/')).toEqual({ kind: 'region', id: 2153 });
  });

  it('retombe sur "home" pour la racine du site', () => {
    expect(parseDeepLink('https://vjr221.sn/')).toEqual({ kind: 'home' });
    expect(parseDeepLink('vjr221://open')).toEqual({ kind: 'home' });
  });

  it('renvoie "unknown" pour une URL invalide', () => {
    expect(parseDeepLink('pas-une-url')).toEqual({ kind: 'unknown', url: 'pas-une-url' });
  });

  it('renvoie "unknown" pour un domaine différent (aucun faux positif)', () => {
    const result = parseDeepLink('https://exemple-externe.com/content/221');
    expect(result.kind).toBe('unknown');
  });

  it('renvoie "permalink" (avec le slug, sans résoudre) pour un permalien WordPress classique', () => {
    expect(parseDeepLink('https://vjr221.sn/un-article-quelconque/')).toEqual({
      kind: 'permalink', slug: 'un-article-quelconque', url: 'https://vjr221.sn/un-article-quelconque/',
    });
  });

  it('renvoie "unknown" (pas "permalink") pour un chemin à plusieurs segments non reconnu', () => {
    const result = parseDeepLink('https://vjr221.sn/wp-admin/edit.php');
    expect(result.kind).toBe('unknown');
  });

  it('fournit un fallback web propre pour les destinations non reconnues', () => {
    const destination = parseDeepLink('https://exemple-externe.com/x');
    expect(fallbackWebUrl(destination)).toBe('https://exemple-externe.com/x');
    expect(fallbackWebUrl({ kind: 'home' })).toBe('https://vjr221.sn');
  });

  it('fournit aussi un fallback pour un permalien non résolu', () => {
    const destination = parseDeepLink('https://vjr221.sn/un-article-quelconque/');
    expect(fallbackWebUrl(destination)).toBe('https://vjr221.sn/un-article-quelconque/');
  });
});
