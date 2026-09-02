import { useEffect } from 'react';
import { Linking } from 'react-native';
import { parseDeepLink, type DeepLinkDestination } from '../services/deepLinks';

/**
 * Écoute les liens entrants (lien froid au lancement + liens reçus en cours
 * d'utilisation) et les transmet, déjà parsés, à l'appelant. La logique
 * d'interprétation vit uniquement dans `services/deepLinks.ts` — ce hook ne
 * fait que brancher l'API `Linking` de React Native dessus.
 */
export function useDeepLinkRouter(onDestination: (destination: DeepLinkDestination) => void) {
  useEffect(() => {
    let mounted = true;

    Linking.getInitialURL().then((url) => {
      if (mounted && url) onDestination(parseDeepLink(url));
    });

    const subscription = Linking.addEventListener('url', ({ url }) => {
      onDestination(parseDeepLink(url));
    });

    return () => {
      mounted = false;
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
