# Roadmap — VJR 221 Mobile

> Chef de projet · 2026-09-27 · **1.6.0 publique** (A–D livrés · validé 2 appareils · tag `android-v1.6.0-1ea26db`).

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

## Hors scope

- Import **statique** Sentry / expo-location.
- Contenu inventé hors API.
- Réécriture navigation / design system.
