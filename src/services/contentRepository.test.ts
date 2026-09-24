import { CATEGORY_TAXONOMY, getCategoryContent, toContentItem } from './contentRepository';

describe('CATEGORY_TAXONOMY', () => {
  it('couvre tous les univers éditoriaux connectés à Explorer', () => {
    expect(Object.keys(CATEGORY_TAXONOMY).sort()).toEqual(
      ['culture', 'events', 'gastronomy', 'heritage', 'history', 'nature', 'news', 'people', 'tourism'].sort()
    );
  });

  it("ne renvoie jamais un tableau de catégories vide pour un univers déclaré", () => {
    Object.values(CATEGORY_TAXONOMY).forEach((ids) => expect(ids && ids.length).toBeGreaterThan(0));
  });
});

describe('getCategoryContent', () => {
  it("renvoie une liste vide sans appel réseau pour un univers non cartographié (jamais de contenu inventé)", async () => {
    const result = await getCategoryContent('practical');
    expect(result).toEqual({ items: [], fromCache: false, stale: false, hasMore: false });
  });
});

describe('toContentItem', () => {
  it('normalise les URLs d’images WordPress pour Android', () => {
    const item = toContentItem({
      id: 5,
      date: '2026-01-01T00:00:00',
      link: 'https://vjr221.sn/region-de-dakar/',
      title: { rendered: 'Région de Dakar' },
      excerpt: { rendered: 'Dakar' },
      _embedded: {
        'wp:featuredmedia': [{
          source_url: 'http://vjr221.sn/wp-content/uploads/2026/01/dakar.jpg',
          media_details: {
            sizes: {
              medium: { source_url: 'http://vjr221.sn/wp-content/uploads/2026/01/dakar-300x200.jpg' },
            },
          },
        }],
      },
    });
    expect(item.imageUrl).toBe('https://vjr221.sn/wp-content/uploads/2026/01/dakar.jpg');
    expect(item.thumbnailUrl).toBe('https://vjr221.sn/wp-content/uploads/2026/01/dakar-300x200.jpg');
  });


  it('normalise une réponse WordPress sans conserver le HTML', () => {
    const item = toContentItem({ id: 221, date: '2026-09-01T00:00:00', link: 'https://vjr221.sn/article', title: { rendered: '<strong>Dakar</strong>' }, excerpt: { rendered: '<p>Une capitale vivante.</p>' } });
    expect(item).toMatchObject({ id: 221, title: 'Dakar', excerpt: 'Une capitale vivante.', type: 'news' });
  });

  it('préserve les liens éditoriaux et ne crée aucune donnée pratique', () => {
    const item = toContentItem({ id: 1, date: '2026-01-01T00:00:00', link: 'https://vjr221.sn/source', title: { rendered: 'Source' }, excerpt: { rendered: '' } });
    expect(item.url).toBe('https://vjr221.sn/source');
    expect(item.practical).toBeUndefined();
  });

  it('décode les entités HTML numériques (y compris les emojis multi-code-points) au lieu de les afficher brutes', () => {
    const item = toContentItem({
      id: 2,
      date: '2026-01-01T00:00:00',
      link: 'https://vjr221.sn/lien',
      title: { rendered: 'Lien utile &#128279;' },
      excerpt: { rendered: 'À modifier &#9999;&#65039; bient&ocirc;t' },
    });
    expect(item.title).toBe('Lien utile 🔗');
    expect(item.excerpt).toBe('À modifier ✏️ bientôt');
  });

  it('décode les entités HTML nommées courantes (typographie et lettres accentuées)', () => {
    const item = toContentItem({
      id: 3,
      date: '2026-01-01T00:00:00',
      link: 'https://vjr221.sn/entites',
      title: { rendered: 'Ca&eacute;ci &amp; l&#39;autre' },
      excerpt: { rendered: '&laquo;&nbsp;Vraiment&nbsp;&raquo; &mdash; test&hellip;' },
    });
    expect(item.title).toBe("Caéci & l'autre");
    expect(item.excerpt).toBe('« Vraiment » — test…');
  });

  it('reconstruit la structure quand le titre et extrait sont doublement encodés', () => {
    const item = toContentItem({
      id: 4,
      date: '2026-01-01T00:00:00',
      link: 'https://vjr221.sn/region-de-ziguinchor/',
      title: { rendered: '&lt;strong&gt;Région de Ziguinchor&lt;/strong&gt;' },
      excerpt: { rendered: '&lt;p&gt;Présentation générale&lt;/p&gt;&lt;p&gt;Situation géographique&lt;/p&gt;' },
      content: { rendered: '&lt;h2&gt;Présentation générale&lt;/h2&gt;&lt;p&gt;La région est située en Casamance.&lt;/p&gt;' },
    });
    expect(item.title).toBe('Région de Ziguinchor');
    expect(item.excerpt).toBe('Présentation générale\nSituation géographique');
    expect(item.contentBlocks?.some((block) => block.kind === 'heading')).toBe(true);
    expect(item.contentBlocks?.some((block) => block.kind === 'paragraph')).toBe(true);
  });
});
