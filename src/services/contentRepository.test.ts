import { toContentItem } from './contentRepository';

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
