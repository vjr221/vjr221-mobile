export type ExternalLinkKind = 'web' | 'phone' | 'email';

function normalize(value: string): string {
  return value.trim().replace(/[\u0000-\u001F\u007F]/g, '');
}

export function sanitizeExternalUrl(value: string | null | undefined, kind: ExternalLinkKind = 'web'): string | null {
  if (!value) return null;
  const url = normalize(value);
  if (!url) return null;

  if (kind === 'phone') {
    return /^tel:\+?[0-9][0-9 .()\-]{5,}$/.test(url) ? url : null;
  }

  if (kind === 'email') {
    return /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(url) ? url : null;
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
