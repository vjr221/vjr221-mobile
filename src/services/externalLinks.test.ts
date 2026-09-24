import { sanitizeExternalUrl } from './externalLinks';

describe('sanitizeExternalUrl', () => {
  it('accepte les URL https et force HTTPS sur les liens HTTP ou sans protocole', () => {
    expect(sanitizeExternalUrl('https://vjr221.sn/region-de-dakar/')).toBeTruthy();
    expect(sanitizeExternalUrl('http://example.com')).toBe('https://example.com/');
    expect(sanitizeExternalUrl('www.example.com/fiche')).toBe('https://www.example.com/fiche');
    expect(sanitizeExternalUrl('example.com/fiche')).toBe('https://example.com/fiche');
    expect(sanitizeExternalUrl('/region-de-dakar/')).toBe('https://vjr221.sn/region-de-dakar/');
    expect(sanitizeExternalUrl('#presentation')).toBeNull();
    expect(sanitizeExternalUrl('javascript:alert(1)')).toBeNull();
    expect(sanitizeExternalUrl('file:///etc/passwd')).toBeNull();
  });

  it('valide les schémas téléphone et email', () => {
    expect(sanitizeExternalUrl('tel:+221338000000', 'phone')).toBe('tel:+221338000000');
    expect(sanitizeExternalUrl('tel:15', 'phone')).toBe('tel:15');
    expect(sanitizeExternalUrl('tel:17', 'phone')).toBe('tel:17');
    expect(sanitizeExternalUrl('tel:18', 'phone')).toBe('tel:18');
    expect(sanitizeExternalUrl('mailto:contact@vjr221.sn', 'email')).toBe('mailto:contact@vjr221.sn');
    expect(sanitizeExternalUrl('tel:+221338000000')).toBeNull();
  });
});
