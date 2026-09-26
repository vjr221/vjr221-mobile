# État de production — VJR 221 Mobile

Dernière mise à jour : **2026-09-26** · version app **1.6.0** (versionCode **19**) · pre-release consolidation.

Légende : ✅ opérationnel · ⏳ action humaine · 🕛 prévu · ⚠️ compromis assumé

## ✅ Opérationnel (1.6.0)

- Accueil, recherche unifiée, favoris locaux, partage, FR/Wolof (API + pack local), thème.
- Territoires + annuaire + `lieu/{id}/contenus` via `vjr221/v1` + posts `wp/v2`.
- **Monitoring post-render** (contrat no-op, jamais au cold start).
- **GPS défensif** : `expo-location` en `import()` dynamique uniquement au clic « Près de moi » — validé appareil (vc18).
- **À découvrir ici** : types API + diversification ≤3/type.
- Deep links schéma + permaliens ; Custom Tabs pour liens site.
- Cache offline 15 min, retry, strip préfixe JSON parasite.
- ErrorBoundary, splash non bloquant.
- CI + workflow Android release.
- **Plugin WP Wolof** déployé en prod (14/14 régions).

## ⚠️ Compromis assumés

- Sentry = no-op (pas de crash reporting cloud tant que SDK non réintroduit post-render).
- Phase E compte/JWT absente — favoris locaux uniquement (`favoritesSyncService` skeleton).
- Matrice appareils multi-OS encore partielle (1 session vc18 OK).

## ⏳ Action humaine (bloquant release GitHub **stable** + stores)

1. Élargir matrice (`DEVICE_TESTING_CHECKLIST.md`) : offline, deep links OS, MAJ 1.5→1.6.
2. Décider retrait du flag `--prerelease` sur la release GitHub.
3. Mettre à jour https://vjr221.sn/application/ avec le nouvel APK.

## 🕛 Suite

- Phase E : si contrat JWT WP.
- Phase F stores : Play / TestFlight (voir `STORE_RELEASE.md`, `IOS_DEPLOYMENT.md`).
