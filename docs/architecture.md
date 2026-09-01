# Architecture

L'application est une application Expo/React Native TypeScript. Les écrans restent indépendants de la source de données : `features/` rend l'interface, `services/` encapsule HTTP, cache et transformation WordPress, `types/` définit les contrats, et `config/` centralise les environnements.

Les contenus ne sont pas codés en dur. Le point d'entrée est `EXPO_PUBLIC_API_BASE_URL`; son défaut cible l'API REST WordPress de vjr221.sn. Les appels sont temporisés et le cache local est disponible via `services/cache.ts`. Les futures taxonomies doivent utiliser le même modèle `ContentItem` ou un modèle spécialisé dans `types/`.

La navigation à onglets est isolée dans `src/app/AppNavigator.tsx`. Lorsqu'une navigation complète est ajoutée, elle pourra remplacer cette couche sans modifier les fonctionnalités. L'i18n démarre en français et wolof dans `src/i18n/strings.ts`.
