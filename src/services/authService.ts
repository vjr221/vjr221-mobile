import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext } from 'react';

/**
 * Abstraction d'authentification.
 *
 * Aucun backend d'authentification n'existe côté vjr221.sn pour l'instant.
 * Cette couche définit le contrat complet (session, profil, préférences)
 * pour qu'un vrai fournisseur (WP + JWT, OAuth, etc.) puisse être branché
 * plus tard SANS toucher aux écrans. L'application reste pleinement
 * utilisable sans compte : c'est le mode par défaut et permanent tant
 * qu'aucun backend n'est connecté.
 */

export interface UserProfile {
  id: string;
  displayName: string;
  email?: string;
}

export type AuthStatus = 'anonymous' | 'authenticated';

export interface AuthSession {
  status: AuthStatus;
  profile: UserProfile | null;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

/** Contrat que tout futur fournisseur d'authentification doit implémenter. */
export interface AuthProvider {
  getSession(): Promise<AuthSession>;
  signIn(credentials: AuthCredentials): Promise<AuthSession>;
  signUp(credentials: AuthCredentials & { displayName: string }): Promise<AuthSession>;
  signOut(): Promise<void>;
}

/**
 * Implémentation « non connectée » : aucun backend n'existe encore, donc
 * toute tentative de connexion échoue explicitement plutôt que de simuler
 * un compte. Elle sert de valeur par défaut sûre et documente clairement
 * l'état actuel dans le message d'erreur.
 */
export class UnavailableAuthProvider implements AuthProvider {
  async getSession(): Promise<AuthSession> {
    return { status: 'anonymous', profile: null };
  }
  async signIn(): Promise<AuthSession> {
    throw new Error('La connexion à un compte VJR 221 n’est pas encore disponible.');
  }
  async signUp(): Promise<AuthSession> {
    throw new Error('La création de compte VJR 221 n’est pas encore disponible.');
  }
  async signOut(): Promise<void> {
    // rien à faire : aucune session n'a jamais pu être ouverte
  }
}

export const authProvider: AuthProvider = new UnavailableAuthProvider();

const Context = createContext<AuthSession>({ status: 'anonymous', profile: null });
export const AuthSessionContext = Context;
export function useAuthSession() {
  return useContext(Context);
}

// ---- Préférences (fonctionnent dès aujourd'hui, sans compte) --------------

export interface NotificationPreferences {
  general: boolean;
  actualites: boolean;
  evenements: boolean;
  tourisme: boolean;
  recommandations: boolean;
}

export const defaultNotificationPreferences: NotificationPreferences = {
  general: true,
  actualites: true,
  evenements: true,
  tourisme: false,
  recommandations: false,
};

const PREFERENCES_KEY = 'settings:notification-preferences';

export async function getNotificationPreferences(): Promise<NotificationPreferences> {
  const raw = await AsyncStorage.getItem(PREFERENCES_KEY);
  if (!raw) return defaultNotificationPreferences;
  try {
    return { ...defaultNotificationPreferences, ...(JSON.parse(raw) as Partial<NotificationPreferences>) };
  } catch {
    return defaultNotificationPreferences;
  }
}

export async function setNotificationPreferences(preferences: NotificationPreferences): Promise<void> {
  await AsyncStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
}
