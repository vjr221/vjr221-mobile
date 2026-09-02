# VJR 221 Mobile

Application mobile officielle de **VJR 221 — Le Sénégal dans sa diversité**, construite avec Expo et React Native pour iOS et Android.

## Démarrer

1. Copier `.env.example` en `.env.local` et ajuster les URLs si nécessaire.
2. `npm install`
3. `npm run start`

Utiliser `npm run android`, `npm run ios` ou `npm run web` selon la cible.

## Architecture et données

- Une seule base TypeScript cross-platform.
- API WordPress configurée par variables d'environnement, sans contenu métier fictif. Les publications utilisent `wp/v2/posts`; la hiérarchie territoriale (régions/départements/communes/villages) et l'annuaire utilisent l'API custom `vjr221/v1` (voir docs/API.md). Les univers sans API dédiée affichent un état explicite « à venir ».
- Navigation Accueil, Explorer, Recherche, Favoris et Plus, avec fiches réutilisables, partage et ouverture de liens source. Explorer permet de parcourir le Sénégal région par région jusqu'à la commune et au quartier/village (`src/features/explore/GeoExplorer.tsx`), avec recherche/filtre et états loading/error/empty/offline.
- Français et wolof : les libellés d'interface sont centralisés, le choix de langue est persistant et le français reste le fallback.
- Cache local avec TTL de 15 minutes : en cas de réseau indisponible, le dernier contenu connu s'affiche avec un indicateur.

## Environnements

`EXPO_PUBLIC_APP_ENV` accepte `development`, `staging` ou `production`. Les URLs sont configurées avec `EXPO_PUBLIC_SITE_URL`, `EXPO_PUBLIC_API_BASE_URL` (publications WordPress) et `EXPO_PUBLIC_GEO_API_BASE_URL` (territoire et annuaire, API custom `vjr221/v1`).

Voir [l'architecture](docs/architecture.md).

## Vérification

`npm run typecheck` vérifie les contrats TypeScript, `npm run lint` lance Expo lint et `npm test` exécute Jest. `npx expo export --platform android` produit un bundle de vérification ; EAS Build peut ensuite être connecté pour les builds de distribution.

## Roadmap

Voir [l'architecture](docs/architecture.md), [l'API](docs/API.md) et la [roadmap](docs/ROADMAP.md).
