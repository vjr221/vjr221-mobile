# État de production — VJR 221 Mobile

Dernière mise à jour : **2026-09-26** · version app **1.5.0** (versionCode **17**) · pre-release.

Légende : ✅ opérationnel · ⏳ action humaine · 🕛 prévu · ⚠️ compromis assumé

## ✅ Opérationnel

- Accueil, recherche unifiée, favoris locaux, partage, FR/Wolof (pack local), thème.
- Territoires + annuaire + `lieu/{id}/contenus` via `vjr221/v1` + posts `wp/v2`.
- Priorité Wolof API (vague 8) — repli pack local.
- Deep links schéma + permaliens ; Custom Tabs pour liens site.
- Cache offline 15 min, retry, strip préfixe JSON parasite.
- ErrorBoundary, splash non bloquant, polices timeout.
- CI + workflow Android release.
- **Plugin WP Wolof** dans le dépôt (`wordpress/vjr221-wolof/`) — à activer sur le serveur.

## ⚠️ Compromis 1.5.0 (stabilité)

- Sentry **retiré** (no-op) — aucune télémétrie crash en prod.
- `expo-location` **retiré** — « près de moi » = `unavailable` explicite.
- Cause historique : imports natifs sans plugins Expo → crash avant ErrorBoundary.

## ⏳ Action humaine (bloquant « release finale »)

1. Matrice appareils (voir `DEVICE_TESTING_CHECKLIST.md`).
2. Installer/activer le plugin Wolof + seed 14 régions.
3. Vérifier deep links réels Android.
4. Décider passage pre-release → release GitHub stable.

## 🕛 1.6.0

Voir `ROADMAP.md` — phases A (fiabilité) → B (GPS) → C (annuaire) → D (explorer) → E (compte) → F (stores).
