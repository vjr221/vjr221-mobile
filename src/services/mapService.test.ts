import { distanceKm, formatDistance, isValidCoordinates } from './mapService';

describe('isValidCoordinates', () => {
  it('accepts a valid lat/lng pair', () => {
    expect(isValidCoordinates({ lat: 14.7167, lng: -17.4677 })).toBe(true);
  });

  it('rejects out-of-range latitude or longitude', () => {
    expect(isValidCoordinates({ lat: 91, lng: 0 })).toBe(false);
    expect(isValidCoordinates({ lat: 0, lng: -181 })).toBe(false);
  });

  it('rejects non-finite numbers', () => {
    expect(isValidCoordinates({ lat: NaN, lng: 0 })).toBe(false);
    expect(isValidCoordinates({ lat: Infinity, lng: 0 })).toBe(false);
  });

  it('rejects missing fields, wrong types, and non-objects rather than fabricating a location', () => {
    expect(isValidCoordinates(null)).toBe(false);
    expect(isValidCoordinates(undefined)).toBe(false);
    expect(isValidCoordinates('14.7,-17.4')).toBe(false);
    expect(isValidCoordinates({ lat: '14.7', lng: -17.4 })).toBe(false);
    expect(isValidCoordinates({ lat: 14.7 })).toBe(false);
  });
});

describe('distanceKm', () => {
  it('returns 0 for identical points', () => {
    const point = { lat: 14.7167, lng: -17.4677 };
    expect(distanceKm(point, point)).toBeCloseTo(0, 6);
  });

  it('computes the great-circle distance between Dakar and Saint-Louis (~185 km)', () => {
    const dakar = { lat: 14.7167, lng: -17.4677 };
    const saintLouis = { lat: 16.0179, lng: -16.4896 };
    expect(distanceKm(dakar, saintLouis)).toBeGreaterThan(170);
    expect(distanceKm(dakar, saintLouis)).toBeLessThan(200);
  });

  it('is symmetric', () => {
    const a = { lat: 12.5, lng: -13.2 };
    const b = { lat: 15.9, lng: -16.1 };
    expect(distanceKm(a, b)).toBeCloseTo(distanceKm(b, a), 9);
  });
});

describe('formatDistance', () => {
  it('formats sub-kilometer distances in rounded meters', () => {
    expect(formatDistance(0.42)).toBe('420 m');
    expect(formatDistance(0)).toBe('0 m');
  });

  it('formats kilometer-and-above distances with one decimal', () => {
    expect(formatDistance(1)).toBe('1.0 km');
    expect(formatDistance(12.34)).toBe('12.3 km');
  });

  it('returns an empty string for negative or non-finite values rather than a nonsensical label', () => {
    expect(formatDistance(-5)).toBe('');
    expect(formatDistance(NaN)).toBe('');
    expect(formatDistance(Infinity)).toBe('');
  });
});
