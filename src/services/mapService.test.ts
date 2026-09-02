import { Linking } from 'react-native';
import { distanceKm, formatDistance, isValidCoordinates, openExternalNavigation } from './mapService';

describe('isValidCoordinates', () => {
  it('valide une paire de coordonnées correcte', () => {
    expect(isValidCoordinates({ lat: 14.7167, lng: -17.4677 })).toBe(true);
  });
  it('rejette des coordonnées absentes ou incomplètes', () => {
    expect(isValidCoordinates(null)).toBe(false);
    expect(isValidCoordinates(undefined)).toBe(false);
    expect(isValidCoordinates({ lat: 14.7 })).toBe(false);
  });
  it('rejette des coordonnées hors plage', () => {
    expect(isValidCoordinates({ lat: 999, lng: -17 })).toBe(false);
    expect(isValidCoordinates({ lat: 14, lng: 200 })).toBe(false);
  });
});

describe('distanceKm', () => {
  it('calcule une distance cohérente entre Dakar et Saint-Louis (~190-270 km à vol d’oiseau)', () => {
    const dakar = { lat: 14.6928, lng: -17.4467 };
    const saintLouis = { lat: 16.0179, lng: -16.4896 };
    const km = distanceKm(dakar, saintLouis);
    expect(km).toBeGreaterThan(150);
    expect(km).toBeLessThan(300);
  });
  it('renvoie 0 pour un point identique', () => {
    const point = { lat: 14.6928, lng: -17.4467 };
    expect(distanceKm(point, point)).toBeCloseTo(0, 5);
  });
});

describe('formatDistance', () => {
  it('affiche des mètres sous 1 km', () => expect(formatDistance(0.35)).toBe('350 m'));
  it('affiche des km au-delà de 1 km', () => expect(formatDistance(12.34)).toBe('12.3 km'));
  it('ne fabrique rien pour une valeur invalide', () => expect(formatDistance(-1)).toBe(''));
});

describe('openExternalNavigation', () => {
  beforeEach(() => jest.clearAllMocks());

  it('ne tente rien pour des coordonnées absentes/invalides', async () => {
    const result = await openExternalNavigation({ lat: 999, lng: 0 });
    expect(result).toBe(false);
    expect(Linking.canOpenURL).not.toHaveBeenCalled();
  });

  it('ouvre le premier candidat disponible', async () => {
    (Linking.canOpenURL as jest.Mock).mockResolvedValueOnce(true);
    const result = await openExternalNavigation({ lat: 14.6928, lng: -17.4467 }, 'Dakar');
    expect(result).toBe(true);
    expect(Linking.openURL).toHaveBeenCalledTimes(1);
  });

  it('renvoie false si aucune application ne peut ouvrir le lien', async () => {
    (Linking.canOpenURL as jest.Mock).mockResolvedValue(false);
    const result = await openExternalNavigation({ lat: 14.6928, lng: -17.4467 });
    expect(result).toBe(false);
    expect(Linking.openURL).not.toHaveBeenCalled();
  });
});
