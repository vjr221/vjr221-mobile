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
  let url = normalize(value);
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

  // Les données WordPress peuvent contenir un domaine sans protocole ou un ancien lien HTTP.\n  // On force HTTPS pour éviter les blocages cleartext Android et garder un lien web fiable.
  // On le normalise en HTTPS avant validation afin que « Site web » reste fiable.
  if (kind === 'web' && !/^[a-z][a-z0-9+.-]*:/i.test(url) && /^(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:[/?#].*)?$/i.test(url)) {
    url = `https://${url}`;
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
    // Sur Android récent, canOpenURL peut retourner false si le package du
    // navigateur n'est pas déclaré dans <queries>, alors que openURL fonctionne.
    await Linking.openURL(safeUrl);
    return true;
  } catch {
    return false;
  }
}
