import { Linking, Platform } from 'react-native';
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
 * Construit une intent Android qui cible explicitement un navigateur
 * (évite que App Links rouvre sn.vjr221.mobile).
 */
function chromeLikeIntent(url: string, browserPackage: string): string {
  const stripped = url.replace(/^https:\/\//i, '');
  return (
    `intent://${stripped}#Intent;` +
    `scheme=https;` +
    `action=android.intent.action.VIEW;` +
    `category=android.intent.category.BROWSABLE;` +
    `package=${browserPackage};` +
    `S.browser_fallback_url=${encodeURIComponent(url)};` +
    `end`
  );
}

/**
 * Force l'ouverture hors de notre app (navigateur / Custom Tabs).
 * Pour vjr221.sn : jamais Linking.openURL seul → App Links rouvrirait l'app.
 */
async function openInSystemBrowser(url: string): Promise<boolean> {
  // Android : d'abord un navigateur nommé, pour contourner App Links.
  if (Platform.OS === 'android') {
    const browserPackages = [
      'com.android.chrome',
      'com.chrome.beta',
      'com.chrome.dev',
      'com.google.android.apps.chrome',
      'org.mozilla.firefox',
      'com.opera.browser',
      'com.sec.android.app.sbrowser',
      'com.microsoft.emmx',
    ];
    for (const pkg of browserPackages) {
      try {
        await Linking.openURL(chromeLikeIntent(url, pkg));
        return true;
      } catch {
        // essayer le suivant
      }
    }
    try {
      await Linking.openURL(`googlechrome://navigate?url=${encodeURIComponent(url)}`);
      return true;
    } catch {
      // continue
    }
  }

  // Custom Tabs / SFSafariViewController (reste hors de la WebView in-app).
  try {
    await WebBrowser.openBrowserAsync(url, {
      toolbarColor: '#1B4332',
      controlsColor: '#F4E9D6',
      showTitle: true,
      enableDefaultShareMenuItem: true,
      showInRecents: true,
      createTask: true,
    });
    return true;
  } catch {
    // fallbacks ci-dessous
  }

  // Dernier recours : Linking uniquement si CE N'EST PAS vjr221
  // (sinon Android renvoie vers notre app via App Links).
  if (!isVjr221Host(url)) {
    try {
      await Linking.openURL(url);
      return true;
    } catch {
      return false;
    }
  }

  if (Platform.OS === 'ios') {
    try {
      await Linking.openURL(url);
      return true;
    } catch {
      return false;
    }
  }

  return false;
}

/**
 * Ouvre une URL externe.
 * Site VJR 221 → navigateur système, jamais de rebond App Links vers l'app.
 */
export async function openExternalUrl(value: string | null | undefined, kind: ExternalLinkKind = 'web'): Promise<boolean> {
  const safeUrl = sanitizeExternalUrl(value, kind);
  if (!safeUrl) return false;

  const isHttp = /^https?:\/\//i.test(safeUrl);
  if (kind === 'web' || (isHttp && kind !== 'whatsapp' && kind !== 'map')) {
    return openInSystemBrowser(safeUrl);
  }

  try {
    await Linking.openURL(safeUrl);
    return true;
  } catch {
    return false;
  }
}
