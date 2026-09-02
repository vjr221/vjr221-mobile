import { getDirectoryEntries } from './directoryRepository';
import { getJson } from './http';

jest.mock('./http', () => ({ getJson: jest.fn() }));

describe('getDirectoryEntries', () => {
  it('convertit une entrée annuaire réelle en ContentItem, sans champ inventé', async () => {
    (getJson as jest.Mock).mockResolvedValueOnce({
      items: [{
        id: 2516, slug: 'cafe-de-rome', title: 'Café de Rome', excerpt: 'Un café historique', permalink: 'https://vjr221.sn/cafe-de-rome/',
        category: { id: 202, slug: 'cafes', name: 'Cafés' },
        image: { url: 'https://vjr221.sn/img.jpg', thumb: 'https://vjr221.sn/img-thumb.jpg', alt: null },
        contact: { telephone: '+221 33 000 00 00', whatsapp: null, email: null, site_web: null, adresse: 'Place de l’Indépendance, Dakar', ville: null, region: null, gps: { lat: 14.6708, lng: -17.4313 } },
        horaires: '08h-22h', prix: null, note: null,
      }],
      meta: { page: 1, per_page: 20, total: 1, total_pages: 1 },
    });

    const result = await getDirectoryEntries({ categorie: 'cafes' });
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toMatchObject({
      id: 2516, title: 'Café de Rome', type: 'directory', url: 'https://vjr221.sn/cafe-de-rome/',
      practical: { phone: '+221 33 000 00 00', address: 'Place de l’Indépendance, Dakar', coordinates: { latitude: 14.6708, longitude: -17.4313 } },
    });
    // Aucun email/whatsapp/site inventé quand l'API les renvoie null.
    expect(result.items[0].practical?.email).toBeUndefined();
    expect(result.items[0].practical?.website).toBeUndefined();
  });

  it('ne fabrique pas de coordonnées quand l’API n’en fournit pas', async () => {
    (getJson as jest.Mock).mockResolvedValueOnce({
      items: [{
        id: 1, slug: 'x', title: 'X', excerpt: null, permalink: 'https://vjr221.sn/x/', category: null, image: null,
        contact: { telephone: null, whatsapp: null, email: null, site_web: null, adresse: null, ville: null, region: null, gps: null },
        horaires: null, prix: null, note: null,
      }],
      meta: { page: 1, per_page: 20, total: 1, total_pages: 1 },
    });
    const result = await getDirectoryEntries();
    expect(result.items[0].practical?.coordinates).toBeUndefined();
  });
});
