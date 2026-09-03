import { useCallback, useRef } from 'react';

/**
 * Garde-fou contre les réponses réseau qui arrivent dans le désordre : quand
 * l'utilisateur tape vite dans un champ de recherche (ou change rapidement de
 * filtre), une réponse lente pour un appel ancien peut arriver APRÈS une
 * réponse rapide pour l'appel suivant et écraser silencieusement un résultat
 * plus récent et correct par un résultat obsolète.
 *
 * Usage (identique au pattern déjà utilisé dans DirectoryScreen, ici partagé) :
 *   const { start, isCurrent } = useLatestRequest();
 *   const load = useCallback((q: string) => {
 *     const id = start();
 *     setState('loading');
 *     fetchThing(q)
 *       .then((result) => { if (!isCurrent(id)) return; setItems(result); setState('ready'); })
 *       .catch(() => { if (!isCurrent(id)) return; setState('error'); });
 *   }, [start, isCurrent]);
 */
export function useLatestRequest() {
  const requestId = useRef(0);

  const start = useCallback(() => ++requestId.current, []);
  const isCurrent = useCallback((id: number) => id === requestId.current, []);

  return { start, isCurrent };
}
