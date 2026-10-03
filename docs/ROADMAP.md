# Roadmap — VJR 221 Mobile

> Chef de projet · 2026-10-03 · **préparation 1.7.0** (versionCode 20) · base `main` à 184 commits au-delà de 1.6.0.

## Livré — 1.6.0

- Accueil, recherche, favoris locaux, partage, FR/Wolof, thème.
- Explorer territoires + annuaire + « À découvrir ici ».
- Monitoring post-render · GPS défensif (import dynamique) · Wolof CMS + pack local vagues 46–54.
- Plugin WordPress **vjr221-wolof** en prod (14/14).
- Distribution APK GitHub (sideload) — validée appareil.

## Phases 1.6.0

| Phase | Statut |
|-------|--------|
| A Fiabilité / monitoring | ✅ |
| B GPS défensif | ✅ code + appareil |
| C Annuaire proximité | ✅ |
| D Explorer découverte | ✅ |
| E Compte / JWT / favoris sync | ⏸ pas de backend |
| F Distribution stable + stores | ✅ APK public · ⏳ Play / keystore release |

## Indicateurs

1. Ouverture sans crash — ✅ 2 appareils.
2. Wolof 14 régions CMS + pack local — ✅.
3. « Près de moi » GPS réel — ✅.
4. Release GitHub non pre-release — ⏳ décocher sur le tag `1ea26db` + page `/application/`.

## Préparation — 1.7.0

- Vagues Wolof 105–108 consolidées, avec tests dédiés et nettoyage d’intégrité du corpus.
- Version `1.7.0` alignée dans `app.json` et `package.json`.
- `versionCode` Android / `buildNumber` iOS : **20**.
- Workflow de release corrigé pour reprendre automatiquement le `versionCode` courant dans les notes.
- **Étape suivante : CI complète → build APK production → vérification bundle/signature → test sur appareils → publication GitHub Release.**

## Hors scope

- Import **statique** Sentry / expo-location.
- Contenu inventé hors API.
- Réécriture navigation / design system.
