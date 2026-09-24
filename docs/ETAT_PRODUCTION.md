# État de production — VJR 221 Mobile

Dernière mise à jour : 2026-09-24 · version **1.5.0** (versionCode 13).

Légende : ✅ opérationnel · ⏳ action humaine · 🔜 prévu

## ✅ Opérationnel

- Accueil, recherche unifiée, favoris, partage, FR/Wolof, thème système/clair/sombre.
- Territoires (régions → villages), annuaire, contenus encyclopédiques — API `vjr221/v1` + `wp/v2`.
- Urgences nationales accessibles depuis l’accueil et l’onglet Plus.
- Deep links : `vjr221://` et permaliens `https://vjr221.sn/...` (résolution par slug).
- Cache offline TTL 15 min, retry réseau avec jitter, déduplication GET.
- ErrorBoundary global, back Android (détail → onglet → système), splash jusqu’aux polices.
- TypeScript strict, ESLint, Jest, CI `mobile-ci` + release Android manuelle.
- `applicationId` / `bundleIdentifier` : **`sn.vjr221.mobile`**.
- APK de production via `.github/workflows/android-release.yml` (workflow_dispatch).
- **Stabilité 1.5.0** : démarrage sans modules natifs Sentry / expo-location (cause probable du crash après 1.2.1). La géoloc « près de moi » renvoie `unavailable` de façon explicite.

## ⏳ Action humaine

- Valider l’APK **1.5.0** sur appareil physique (démarrage, navigation, offline) — checklist `docs/DEVICE_TESTING_CHECKLIST.md`.
- Mettre à jour https://vjr221.sn/application/ (URL APK, version affichée, SHA-256).
- Comptes Google Play Console et Apple Developer Program.
- Premier build EAS / TestFlight.
- Relecture juridique + URL publique de `docs/PRIVACY_POLICY.md`.
- Captures d’écran store.

## 🔜 Prévu (architecture déjà prête)

- GPS natif sûr, observabilité post-démarrage, auth réelle, push, carte embarquée.
