# Roadmap — VJR 221 Mobile

> Chef de projet · 2026-09-26 · **1.6.0 consolidation** (A–D livrés + GPS validé appareil).

## Livré — 1.6.0 (pre-release jusqu’à matrice complète)

- Accueil, recherche, favoris locaux, partage, FR/Wolof, thème.
- Explorer territoires + annuaire + « À découvrir ici ».
- Monitoring post-render · GPS défensif (import dynamique) · Wolof CMS.
- Plugin WordPress **vjr221-wolof** en prod (14/14).

## Phases 1.6.0

| Phase | Statut |
|-------|--------|
| A Fiabilité / monitoring | ✅ (+ session appareil vc18) |
| B GPS défensif | ✅ code + appareil |
| C Annuaire proximité | ✅ |
| D Explorer découverte | ✅ |
| E Compte / JWT / favoris sync | ⏸ pas de backend |
| F Distribution stable + stores | ⏳ matrice + page /application/ |

## Indicateurs

1. Ouverture sans crash — OK session validée.
2. Wolof 14 régions CMS — ✅.
3. « Près de moi » GPS réel — ✅.
4. Release GitHub **non** pre-release — ⏳ décision humaine.

## Hors scope

- Import **statique** Sentry / expo-location.
- Contenu inventé hors API.
- Réécriture navigation / design system.
