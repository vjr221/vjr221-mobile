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
  it('ignore silencieusement les balises inconnues et retombe sur du texte vide plutôt que de planter', () => {
    expect(() => parseRichContent('<div><span>orphelin</span></div>')).not.toThrow();
    expect(parseRichContent('<div><span>orphelin</span></div>')).toEqual([]);
  });
  it('gère une séquence réaliste titre + paragraphe + liste', () => {
    const html = '<h2>Géographie</h2><p>La région est bordée par <strong>le fleuve</strong>.</p><ul><li>Climat tropical</li><li>Relief plat</li></ul>';
    const blocks = parseRichContent(html);
    expect(blocks.map((b) => b.kind)).toEqual(['heading', 'paragraph', 'listItem', 'listItem']);
  });
});
