# Architecture

L'application est une application Expo/React Native TypeScript. Les écrans restent indépendants de la source de données : `features/` rend l'interface, `services/` encapsule HTTP, cache et transformation WordPress, `types/` définit les contrats, et `config/` centralise les environnements.

Les contenus ne sont pas codés en dur. Le point d'entrée est `EXPO_PUBLIC_API_BASE_URL`; son défaut cible l'API REST WordPress de vjr221.sn. Les appels sont temporisés et le cache local est disponible via `services/cache.ts`. Les futures taxonomies doivent utiliser le même modèle `ContentItem` ou un modèle spécialisé dans `types/`.

La navigation à onglets est isolée dans `src/app/AppNavigator.tsx`. Lorsqu'une navigation complète est ajoutée, elle pourra remplacer cette couche sans modifier les fonctionnalités. L'i18n démarre en français et wolof dans `src/i18n/strings.ts`.

## Couche territoriale (Sénégal → régions → départements → communes → villages)

`src/types/geo.ts` définit les contrats (`Region`, `Department`, `Commune`, `Village`),
tous alignés sur ce que renvoie réellement l'API `vjr221/v1` (voir docs/API.md) — aucun
champ n'est fabriqué côté client. `src/services/geoRepository.ts` centralise les appels
(mêmes conventions que `contentRepository.ts` : cache TTL 15 min via `services/cache.ts`,
fallback offline transparent). `src/features/explore/GeoExplorer.tsx` implémente la
navigation parent/enfant par une pile locale (l'application n'utilise pas de librairie de
routing) avec recherche/filtre et états loading/error/empty/offline à chaque niveau.
