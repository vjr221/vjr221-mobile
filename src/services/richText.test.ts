import { parseRichContent } from './richText';

describe('parseRichContent', () => {
  it('retourne un tableau vide sur une entrée vide', () => {
    expect(parseRichContent('')).toEqual([]);
  });
  it('parse un paragraphe simple', () => {
    const blocks = parseRichContent('<p>Bonjour le monde.</p>');
    expect(blocks).toEqual([{ kind: 'paragraph', runs: [{ text: 'Bonjour le monde.' }] }]);
  });
  it('distingue les niveaux de titre h2/h3/h4', () => {
    const blocks = parseRichContent('<h2>Histoire</h2><h3>Origines</h3><h4>Détail</h4>');
    expect(blocks.map((b) => (b.kind === 'heading' ? b.level : null))).toEqual([2, 3, 4]);
  });
  it('conserve gras, italique et liens comme runs distincts', () => {
    const blocks = parseRichContent('<p>Texte <strong>important</strong> et <em>nuancé</em>, voir <a href="https://vjr221.sn/x">la fiche</a>.</p>');
    expect(blocks).toHaveLength(1);
    const runs = blocks[0].kind === 'paragraph' ? blocks[0].runs : [];
    expect(runs.some((r) => r.bold && r.text === 'important')).toBe(true);
    expect(runs.some((r) => r.italic && r.text === 'nuancé')).toBe(true);
    expect(runs.some((r) => r.href === 'https://vjr221.sn/x' && r.text === 'la fiche')).toBe(true);
  });
  it('numérote correctement une liste ordonnée et distingue une liste non ordonnée', () => {
    const blocks = parseRichContent('<ol><li>Un</li><li>Deux</li></ol><ul><li>A</li><li>B</li></ul>');
    const items = blocks.filter((b) => b.kind === 'listItem') as Extract<(typeof blocks)[number], { kind: 'listItem' }>[];
    expect(items.map((i) => [i.ordered, i.index])).toEqual([[true, 1], [true, 2], [false, 1], [false, 2]]);
  });
  it('parse une citation', () => {
    const blocks = parseRichContent('<blockquote><p>Une citation.</p></blockquote>');
    expect(blocks[0].kind).toBe('quote');
  });
  it('décode les entités HTML dans les runs', () => {
    const blocks = parseRichContent('<p>Café &amp; th&eacute;.</p>');
    const runs = blocks[0].kind === 'paragraph' ? blocks[0].runs : [];
    expect(runs[0].text).toBe('Café & thé.');
  });
  it('parse un sommaire WordPress en bloc lisible', () => {
    const html = '<div class="sommaire"><a href="#presentation">Présentation générale</a><a href="#histoire">Histoire</a><a href="#culture">Culture</a></div><h2 id="presentation">Présentation générale</h2><p>La région.</p>';
    const blocks = parseRichContent(html);
    expect(blocks[0]).toEqual({
      kind: 'toc',
      items: [
        { text: 'Présentation générale', href: '#presentation' },
        { text: 'Histoire', href: '#histoire' },
        { text: 'Culture', href: '#culture' },
      ],
    });
    expect(blocks.some((b) => b.kind === 'heading')).toBe(true);
  });
  it('préserve les espaces autour des éléments inline', () => {
    const blocks = parseRichContent('<p>Un texte <strong>important</strong> et <em>lisible</em>.</p>');
    const runs = blocks[0].kind === 'paragraph' ? blocks[0].runs : [];
    expect(runs.map((r) => r.text).join('')).toBe('Un texte important et lisible.');
  });
  it('ne plante pas sur un conteneur HTML non pris en charge', () => {
    expect(() => parseRichContent('<div><span>orphelin</span></div>')).not.toThrow();
  });
  it('gère une séquence réaliste titre + paragraphe + liste', () => {
    const html = '<h2>Géographie</h2><p>La région est bordée par <strong>le fleuve</strong>.</p><ul><li>Climat tropical</li><li>Relief plat</li></ul>';
    const blocks = parseRichContent(html);
    expect(blocks.map((b) => b.kind)).toEqual(['heading', 'paragraph', 'listItem', 'listItem']);
  });
  it('récupère les balises HTML doublement encodées', () => {
    const html = '&lt;div class="sommaire"&gt;&lt;a href="#presentation"&gt;Présentation générale&lt;/a&gt;&lt;a href="#histoire"&gt;Histoire&lt;/a&gt;&lt;/div&gt;&lt;h2&gt;Présentation générale&lt;/h2&gt;&lt;p&gt;La région de Ziguinchor.&lt;/p&gt;';
    const blocks = parseRichContent(html);
    expect(blocks[0]).toEqual({
      kind: 'toc',
      items: [
        { text: 'Présentation générale', href: '#presentation' },
        { text: 'Histoire', href: '#histoire' },
      ],
    });
    expect(blocks.some((b) => b.kind === 'heading')).toBe(true);
    expect(blocks.some((b) => b.kind === 'paragraph')).toBe(true);
  });
});
