import { sanitizeExternalUrl } from './externalLinks';

describe('sanitizeExternalUrl', () => {
  it('accepts only http and https web URLs', () => {
    expect(sanitizeExternalUrl('https://vjr221.sn/region-de-dakar/')).toBeTruthy();
    expect(sanitizeExternalUrl('http://example.com')).toBeTruthy();
    expect(sanitizeExternalUrl('javascript:alert(1)')).toBeNull();
    expect(sanitizeExternalUrl('file:///etc/passwd')).toBeNull();
  });

  it('accepts tel and mailto only through their dedicated kinds', () => {
    expect(sanitizeExternalUrl('tel:+221338000000', 'phone')).toBe('tel:+221338000000');
    expect(sanitizeExternalUrl('mailto:contact@vjr221.sn', 'email')).toBe('mailto:contact@vjr221.sn');
    expect(sanitizeExternalUrl('tel:+221338000000')).toBeNull();
    expect(sanitizeExternalUrl('mailto:contact@vjr221.sn')).toBeNull();
  });

  it('rejects malformed or dangerous values', () => {
    expect(sanitizeExternalUrl('   ')).toBeNull();
    expect(sanitizeExternalUrl('data:text/html,<script>alert(1)</script>')).toBeNull();
    expect(sanitizeExternalUrl('javascript://https://vjr221.sn')).toBeNull();
  });
});
