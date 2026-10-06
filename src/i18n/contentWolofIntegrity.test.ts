import fs from 'fs';
import path from 'path';

import { getWolofContentBySlug, getWolofContentKeys } from './contentWolof';

const entries = () => getWolofContentKeys().map((k) => [k, getWolofContentBySlug(k)] as const);

describe('intégrité des packs Wolof', () => {
  it('ne contient aucun titre markdown collé à la phrase précédente', () => {
    const glued = entries().filter(([, v]) => /[.!?»]### /.test(v?.contentWo ?? ''));
    expect(glued.map(([k]) => k)).toEqual([]);
  });

  it('chaque entrée a un titre, un extrait et un corps non vides', () => {
    const empty = entries().filter(([, v]) => !v?.titleWo || !v?.excerptWo || !v?.contentWo);
    expect(empty.map(([k]) => k)).toEqual([]);
  });

  it('chaque fichier de pack déclare autant de clés que d’accolades fermantes', () => {
    const dir = __dirname;
    const files = fs.readdirSync(dir).filter((f) => /^contentWolof.*\.ts$/.test(f) && !f.endsWith('.test.ts'));
    for (const f of files) {
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      const opens = (src.match(/^ {2}'[^']+': \{$/gm) ?? []).length;
      const closes = (src.match(/^ {2}\},$/gm) ?? []).length;
      expect({ f, opens }).toEqual({ f, opens: closes });
    }
  });
});
