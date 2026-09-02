import { toCommune, toDepartment, toInfos, toRegion, toVillage } from './geoRepository';

describe('toInfos', () => {
  it('convertit les champs absents en null plutôt que de les inventer', () => {
    expect(toInfos({ superficie: null, population: null, chef_lieu: null, gentile: null })).toEqual({
      superficie: null,
      population: null,
      chefLieu: null,
      gentile: null,
    });
  });

  it('conserve les valeurs réellement fournies par l’API', () => {
    expect(toInfos({ superficie: '547 km²', population: '3 940 000 hab. (2023)', chef_lieu: 'Dakar', gentile: 'Dakarois(e)' })).toEqual({
      superficie: '547 km²',
      population: '3 940 000 hab. (2023)',
      chefLieu: 'Dakar',
      gentile: 'Dakarois(e)',
    });
  });
});

describe('toRegion', () => {
  it('normalise une région sans ajouter de relation parente', () => {
    const region = toRegion({
      id: 2153,
      slug: 'region-de-dakar',
      title: 'Région de Dakar',
      excerpt: 'Présentation',
      permalink: 'https://vjr221.sn/region-de-dakar/',
      image: null,
      gps: null,
      infos: { superficie: null, population: null, chef_lieu: null, gentile: null },
    });
    expect(region).toMatchObject({ kind: 'region', id: 2153, title: 'Région de Dakar' });
  });
});

describe('toDepartment', () => {
  it('conserve le rattachement région tel que renvoyé par l’API, sans le fabriquer', () => {
    const withRegion = toDepartment({
      id: 2024, slug: 'departement-d-oussouye', title: 'Département d’Oussouye', excerpt: null,
      permalink: 'https://vjr221.sn/departement-d-oussouye/', image: null, gps: null,
      infos: { superficie: null, population: null, chef_lieu: null, gentile: null },
      region: { id: 336, name: 'Région de Ziguinchor', slug: 'region-de-ziguinchor' },
    });
    expect(withRegion.region).toEqual({ id: 336, name: 'Région de Ziguinchor', slug: 'region-de-ziguinchor' });
    expect(withRegion.departement).toBeNull();

    const withoutRegion = toDepartment({
      id: 1, slug: 'x', title: 'X', excerpt: null, permalink: 'https://vjr221.sn/x/', image: null, gps: null,
      infos: { superficie: null, population: null, chef_lieu: null, gentile: null },
    });
    expect(withoutRegion.region).toBeNull();
  });
});

describe('toCommune', () => {
  it('n’invente pas de département/région quand l’API ne les fournit pas encore', () => {
    const commune = toCommune({
      id: 16174, slug: 'ngodiba', title: 'Ngodiba', excerpt: null, permalink: 'https://vjr221.sn/ngodiba/',
      image: null, gps: null, infos: { superficie: null, population: null, chef_lieu: null, gentile: null },
    });
    expect(commune.region).toBeNull();
    expect(commune.departement).toBeNull();
    expect(commune.arrondissement).toBeNull();
  });
});

describe('toVillage', () => {
  it('conserve la référence commune quand elle est renseignée', () => {
    const village = toVillage({
      id: 12510, slug: 'affiniam', title: 'Affiniam', excerpt: null, permalink: 'https://vjr221.sn/affiniam/',
      image: null, gps: { lat: 12.55, lng: -16.5 }, infos: { superficie: null, population: null, chef_lieu: null, gentile: null },
      commune: { id: 4731, name: 'Adéane', slug: 'adeane' },
    });
    expect(village.commune).toEqual({ id: 4731, name: 'Adéane', slug: 'adeane' });
    expect(village.gps).toEqual({ lat: 12.55, lng: -16.5 });
  });
});
