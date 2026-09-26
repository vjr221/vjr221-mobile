import { diversifyLieuContent } from './contentRepository';
import type { ContentItem } from '../types/content';

function item(id: number, type: ContentItem['type']): ContentItem {
  return { id, title: `${type}-${id}`, type };
}

describe('diversifyLieuContent', () => {
  it('returns empty for empty input', () => {
    expect(diversifyLieuContent([])).toEqual([]);
  });

  it('caps per type and interleaves', () => {
    const input = [
      ...[1, 2, 3, 4, 5].map((id) => item(id, 'people')),
      item(10, 'tourism'),
      item(11, 'heritage'),
      item(12, 'gastronomy'),
    ];
    const out = diversifyLieuContent(input, 10, 3);
    expect(out.length).toBeLessThanOrEqual(10);
    const peopleCount = out.filter((i) => i.type === 'people').length;
    expect(peopleCount).toBe(3);
    expect(out.some((i) => i.type === 'tourism')).toBe(true);
    expect(out.some((i) => i.type === 'heritage')).toBe(true);
  });

  it('never invents items', () => {
    const input = [item(1, 'tourism'), item(2, 'people')];
    const out = diversifyLieuContent(input, 20, 5);
    expect(out.map((i) => i.id).sort()).toEqual([1, 2]);
  });
});
