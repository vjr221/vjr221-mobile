# VJR 221 Mobile

Application mobile officielle de **VJR 221 — Le Sénégal dans sa diversité**, construite avec Expo et React Native pour iOS et Android.

## Démarrer

1. Copier `.env.example` en `.env.local` et ajuster les URLs si nécessaire.
2. `npm install`
3. `npm run start`

Utiliser `npm run android`, `npm run ios` ou `npm run web` selon la cible.

## Principes

- Une seule base TypeScript cross-platform.
- API WordPress configurée par variables d'environnement, sans contenu métier fictif.
- Interface accessible et responsive, avec navigation Accueil, Explorer, Recherche, Favoris et Plus.
- Préparée pour le français et le wolof, le cache local, l'offline, les deep links et les environnements dev/staging/prod.

Voir [l'architecture](docs/architecture.md).

## Vérification

`npm run typecheck` vérifie les contrats TypeScript et `npm run lint` lance Expo lint.
