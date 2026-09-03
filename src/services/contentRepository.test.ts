import { CATEGORY_TAXONOMY, getCategoryContent, toContentItem } from './contentRepository';

describe('CATEGORY_TAXONOMY', () => {
  it('couvre tous les univers éditoriaux connectés à Explorer', () => {
    // Régression : si une entrée disparait ici sans que categories.ts soit
    // mis à jour, la tuile correspondante ouvrirait un écran vide.
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
    // Régression : WordPress renvoie parfois des emojis en entités numériques
    // (&#128279; = 🔗, &#9999;&#65039; = ✏️) qui s'affichaient littéralement
    // dans l'app avant décodage.
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
    // &nbsp; se décode en insécable réelle (U+00A0), pas en espace normale ;
    // construit via   explicite pour éviter toute ambiguïté d'espace.
    expect(item.excerpt).toBe('« Vraiment » — test…');
  });
});
