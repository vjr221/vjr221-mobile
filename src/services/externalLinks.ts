import { Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export type ExternalLinkKind = 'web' | 'phone' | 'email' | 'map' | 'whatsapp';

const SITE_ORIGIN = 'https://vjr221.sn';

function normalize(value: string): string {
  return value.trim().replace(/[\u0000-\u001F\u007F]/g, '');
}

function isVjr221Host(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === 'vjr221.sn' || host === 'www.vjr221.sn' || host.endsWith('.vjr221.sn');
  } catch {
    return false;
  }
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

  if (url.startsWith('#')) return null;

  if (url.startsWith('/')) {
    url = `${SITE_ORIGIN}${url}`;
  }

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

/**
 * Ouvre une URL externe.
 *
 * Pour http(s) : Chrome Custom Tabs / SFSafariViewController via expo-web-browser.
 * Sur Android, Linking.openURL(vjr221.sn) est intercepté par les App Links et
 * rouvre l'app au lieu du site — d'où le « rechargement in-app ».
 * On n'utilise jamais Linking en fallback pour le domaine VJR 221.
 */
export async function openExternalUrl(value: string | null | undefined, kind: ExternalLinkKind = 'web'): Promise<boolean> {
  const safeUrl = sanitizeExternalUrl(value, kind);
  if (!safeUrl) return false;

  const isHttp = /^https?:\/\//i.test(safeUrl);
  const useBrowser = kind === 'web' || (isHttp && kind !== 'whatsapp');

  if (useBrowser) {
    try {
      await WebBrowser.openBrowserAsync(safeUrl, {
        presentationStyle: WebBrowser.WebBrowserPresentationStyle.FULL_SCREEN,
        toolbarColor: '#1B4332',
        controlsColor: '#F4E9D6',
        showTitle: true,
        enableDefaultShareMenuItem: true,
        createTask: true,
      });
      return true;
    } catch {
      // Domaine VJR 221 : ne JAMAIS retomber sur Linking (boucle App Links).
      if (isVjr221Host(safeUrl)) {
        return false;
      }
      try {
        await Linking.openURL(safeUrl);
        return true;
      } catch {
        return false;
      }
    }
  }

  try {
    await Linking.openURL(safeUrl);
    return true;
  } catch {
    return false;
  }
}
