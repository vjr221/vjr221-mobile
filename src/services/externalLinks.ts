export type ExternalLinkKind = 'web' | 'phone' | 'email' | 'map' | 'whatsapp';

function normalize(value: string): string {
  return value.trim().replace(/[\u0000-\u001F\u007F]/g, '');
}

/** Construit une URL WhatsApp sécurisée à partir d'un numéro brut. */
export function buildWhatsAppUrl(phone: string): string | null {
  const digits = phone.replace(/\D+/g, '');
  if (digits.length < 8 || digits.length > 15) return null;
  return `https://wa.me/${digits}`;
}

export function sanitizeExternalUrl(value: string | null | undefined, kind: ExternalLinkKind = 'web'): string | null {
  if (!value) return null;
  const url = normalize(value);
  if (!url) return null;

  // Numéros d'urgence courts (15, 17, 18) et numéros internationaux.
  if (kind === 'phone') return /^tel:\+?[0-9][0-9 .()\-]{1,}$/.test(url) ? url : null;
  if (kind === 'email') return /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(url) ? url : null;

  if (kind === 'whatsapp') {
    if (/^https:\/\/wa\.me\/[0-9]{8,15}$/i.test(url)) return url;
    if (/^whatsapp:\/\/send\?phone=[0-9]{8,15}/i.test(url)) return url;
    return buildWhatsAppUrl(url);
  }

  if (kind === 'map') {
    if (/^geo:-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?(?:\?[^\s]*)?$/i.test(url)) return url;
    if (/^maps:\/\/?\?[^\s]+$/i.test(url)) return url;
  }

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

export async function openExternalUrl(value: string | null | undefined, kind: ExternalLinkKind = 'web'): Promise<boolean> {
  const safeUrl = sanitizeExternalUrl(value, kind);
  if (!safeUrl) return false;
  try {
    const { Linking } = await import('react-native');
    if (!(await Linking.canOpenURL(safeUrl))) return false;
    await Linking.openURL(safeUrl);
    return true;
  } catch {
    return false;
  }
}
