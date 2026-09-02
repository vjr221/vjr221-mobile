import { parseDeepLink, type DeepLinkDestination } from './deepLinks';
import { getNotificationPreferences, setNotificationPreferences, type NotificationPreferences } from './authService';

/**
 * Infrastructure de notifications push.
 *
 * IMPORTANT : ce module ne envoie et ne reçoit AUCUNE notification réelle.
 * `expo-notifications` n'est volontairement pas ajouté comme dépendance tant
 * que le projet Expo (EAS project id) et les identifiants Firebase/APNs ne
 * sont pas configurés (voir docs/STORE_RELEASE.md). Ce qui suit est le
 * contrat complet — payload, permissions, token, préférences, deep link —
 * pour brancher un vrai fournisseur sans réécrire les écrans.
 */

export type NotificationCategory = 'publication' | 'actualite' | 'evenement' | 'tourisme' | 'recommandation';

/** Forme attendue d'un payload de notification VJR 221. */
export interface NotificationPayload {
  id: string;
  category: NotificationCategory;
  title: string;
  body: string;
  /** URL VJR 221 (site ou app) que la notification doit ouvrir, si applicable. */
  deepLinkUrl?: string;
}

export function isValidNotificationPayload(value: unknown): value is NotificationPayload {
  if (!value || typeof value !== 'object') return false;
  const payload = value as Partial<NotificationPayload>;
  const validCategories: NotificationCategory[] = ['publication', 'actualite', 'evenement', 'tourisme', 'recommandation'];
  return (
    typeof payload.id === 'string' && payload.id.length > 0 &&
    typeof payload.title === 'string' && payload.title.length > 0 &&
    typeof payload.body === 'string' &&
    typeof payload.category === 'string' && validCategories.includes(payload.category as NotificationCategory)
  );
}

/** Résout la destination interne d'une notification, ou `null` si aucun lien VJR221 valide. */
export function resolveNotificationDestination(payload: NotificationPayload): DeepLinkDestination | null {
  if (!payload.deepLinkUrl) return null;
  const destination = parseDeepLink(payload.deepLinkUrl);
  return destination.kind === 'unknown' ? null : destination;
}

export type PermissionState = 'undetermined' | 'granted' | 'denied';

/** Contrat que tout futur fournisseur (expo-notifications, OneSignal...) doit implémenter. */
export interface NotificationProvider {
  getPermissionState(): Promise<PermissionState>;
  requestPermission(): Promise<PermissionState>;
  getDeviceToken(): Promise<string | null>;
}

/**
 * Fournisseur « non implémenté » : aucun SDK push n'est encore intégré.
 * Ne demande jamais la permission au démarrage (conforme à la consigne
 * « ne pas demander de permissions inutiles ») — un futur écran de
 * préférences appellera `requestPermission()` explicitement, à l'action de
 * l'utilisateur, une fois un vrai fournisseur branché.
 */
export class UnavailableNotificationProvider implements NotificationProvider {
  async getPermissionState(): Promise<PermissionState> {
    return 'undetermined';
  }
  async requestPermission(): Promise<PermissionState> {
    return 'undetermined';
  }
  async getDeviceToken(): Promise<string | null> {
    return null;
  }
}

export const notificationProvider: NotificationProvider = new UnavailableNotificationProvider();

export type { NotificationPreferences };
export { getNotificationPreferences, setNotificationPreferences };
