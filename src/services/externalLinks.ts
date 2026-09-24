import { Linking } from 'react-native';

export type ExternalLinkKind = 'web' | 'phone' | 'email' | 'map' | 'whatsapp';

const SITE_ORIGIN = 'https://vjr221.sn';

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
  let url = normalize(value);
  if (!url) return null;

  if (kind === 'phone') {
    if (/^tel:/i.test(url)) {
      return /^tel:\+?[0-9][0-9 .()\-]{0,}$/i.test(url) ? url : null;
    }
    const digits = url.replace(/[^0-9+]/g, '');
    if (digits.length >= 2) return `tel:${digits}`;
    return null;
  }
  if (kind === 'email') {
    if (/^mailto:/i.test(url)) return /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(url) ? url : null;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url)) return `mailto:${url}`;
    return null;
  }

  if (kind === 'whatsapp') {
    if (/^https:\/\/wa\.me\/[0-9]{8,15}$/i.test(url)) return url;
    if (/^whatsapp:\/\/send\?phone=[0-9]{8,15}/i.test(url)) return url;
    return buildWhatsAppUrl(url);
  }

  if (kind === 'map') {
    if (/^geo:-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?(?:\?[^\s]*)?$/i.test(url)) return url;
    if (/^maps:\/\/?\?[^\s]+$/i.test(url)) return url;
  }

  // Ancres internes : non ouvrables dans le navigateur externe.
  if (url.startsWith('#')) return null;

  // Chemins relatifs du site VJR 221.
  if (url.startsWith('/')) {
    url = `${SITE_ORIGIN}${url}`;
  }

  // WordPress peut fournir des domaines sans protocole ou d'anciens liens HTTP.
  if (kind === 'web') {
    if (/^http:\/\//i.test(url)) {
      url = `https://${url.slice('http://'.length)}`;
    } else if (!/^[a-z][a-z0-9+.-]*:/i.test(url) && /^(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:[/?#].*)?$/i.test(url)) {
      url = `https://${url}`;
    }
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
    await Linking.openURL(safeUrl);
    return true;
  } catch {
    return false;
  }
}
