import type { ContentItem } from '../types/content';

/**
 * Couche de synchronisation des favoris : Local -> serveur, lorsqu'un compte
 * existera. Aucun backend de favoris distants n'existe encore (voir
 * authService.ts) ; cette couche définit le contrat et la stratégie de
 * fusion pour que rien ne soit à repenser le jour où il sera branché.
 */

export interface RemoteFavoritesProvider {
  fetchRemoteFavorites(): Promise<ContentItem[]>;
  pushFavorites(items: ContentItem[]): Promise<void>;
}

/** Aucun backend de favoris distants pour l'instant : lecture vide, écriture ignorée. */
export class UnavailableRemoteFavoritesProvider implements RemoteFavoritesProvider {
  async fetchRemoteFavorites(): Promise<ContentItem[]> {
    return [];
  }
  async pushFavorites(): Promise<void> {
    // pas de backend : rien à envoyer, aucune donnée locale n'est perdue pour autant
  }
}

export const remoteFavoritesProvider: RemoteFavoritesProvider = new UnavailableRemoteFavoritesProvider();

/**
 * Fusionne favoris locaux et favoris serveur : union par id, jamais de
 * suppression silencieuse. En cas de doublon (même id, contenu différent),
 * la version locale est préférée car c'est celle que l'utilisateur vient
 * de modifier sur cet appareil.
 */
export function mergeFavorites(local: ContentItem[], remote: ContentItem[]): ContentItem[] {
  const byId = new Map<number, ContentItem>();
  remote.forEach((item) => byId.set(item.id, item));
  local.forEach((item) => byId.set(item.id, item)); // le local écrase le remote en cas de conflit
  return Array.from(byId.values());
}

/**
 * Synchronise les favoris locaux avec le serveur (si un compte existe) et
 * renvoie l'état fusionné à conserver localement. Ne supprime jamais un
 * favori local en cas d'échec réseau : renvoie simplement la liste locale
 * inchangée.
 */
export async function syncFavorites(local: ContentItem[], provider: RemoteFavoritesProvider = remoteFavoritesProvider): Promise<ContentItem[]> {
  try {
    const remote = await provider.fetchRemoteFavorites();
    const merged = mergeFavorites(local, remote);
    await provider.pushFavorites(merged);
    return merged;
  } catch {
    return local;
  }
}
