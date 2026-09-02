import { resolveContentBySlug, toContentItem } from './contentRepository';

describe('toContentItem', () => {
  it('normalise une réponse WordPress sans conserver le HTML', () => {
    const item = toContentItem({ id: 221, date: '2026-09-01T00:00:00', link: 'https://vjr221.sn/article', title: { rendered: '<strong>Dakar</strong>' }, excerpt: { rendered: '<p>Une capitale vivante.</p>' } });
    expect(item).toMatchObject({ id: 221, title: 'Dakar', excerpt: 'Une capitale vivante.', type: 'news' });
  });

  it('préserve les liens éditoriaux et ne crée aucune donnée pratique', () => {
    const item = toContentItem({ id: 1, date: '2026-01-01T00:00:00', link: 'https://vjr221.sn/source', title: { rendered: 'Source' }, excerpt: { rendered: '' } });
    expect(item.url).toBe('https://vjr221.sn/source');
    expect(item.practical).toBeUndefined();
  });
});

describe('resolveContentBySlug', () => {
  const originalFetch = globalThis.fetch;
  afterEach(() => { globalThis.fetch = originalFetch; jest.restoreAllMocks(); });

  it('résout un contenu réel par son slug WordPress', async () => {
    const post = { id: 2153, date: '2026-01-01T00:00:00', link: 'https://vjr221.sn/region-de-dakar/', title: { rendered: 'Région de Dakar' }, excerpt: { rendered: '<p>Résumé</p>' } };
    globalThis.fetch = jest.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve([post]) });
    const item = await resolveContentBySlug('region-de-dakar');
    expect(item).toMatchObject({ id: 2153, title: 'Région de Dakar' });
  });

  it('renvoie null sans rien inventer quand aucun post ne correspond au slug', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve([]) });
    expect(await resolveContentBySlug('slug-inexistant')).toBeNull();
  });
});
