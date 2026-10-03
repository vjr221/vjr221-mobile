# État de production — VJR 221 Mobile

Dernière mise à jour : **2026-10-03** · préparation **1.7.0** (versionCode **20**) · base `main` après les vagues Wolof 105–108.

Légende : ✅ opérationnel · ⏳ action humaine · 🕛 prévu · ⚠️ compromis assumé

## ✅ Opérationnel (1.6.0)

- Accueil, recherche unifiée, favoris locaux, partage, FR/Wolof (API + pack local étendu), thème.
- Territoires + annuaire + `lieu/{id}/contenus` via `vjr221/v1` + posts `wp/v2`.
- **Monitoring post-render** (contrat no-op, jamais au cold start).
- **GPS défensif** : `expo-location` en `import()` dynamique uniquement au clic « Près de moi » — validé appareil.
- **À découvrir ici** : types API + diversification ≤3/type.
- Deep links schéma + permaliens ; Custom Tabs pour liens site.
- Cache offline 15 min, retry, strip préfixe JSON parasite.
- ErrorBoundary, splash non bloquant.
- CI + workflow Android release.
- **Plugin WP Wolof** déployé en prod (14/14 régions).
- **APK public** : tag `android-v1.6.0-1ea26db` — validé sur **2 téléphones** (install + tests).

### APK courant

- URL : https://github.com/vjr221/vjr221-mobile/releases/download/android-v1.6.0-1ea26db/VJR221.apk
- Taille : ~87 Mo
- SHA-256 : `27ebc0661e010437ef12a9097fb84e769776f2c11e7e1aa40bb4b5e015aee4b1`
- Page site : https://vjr221.sn/application/

## 🧪 Préparation de la release 1.7.0

- Version Expo/package alignée sur **1.7.0**.
- Android `versionCode` et iOS `buildNumber` alignés sur **20**.
- Le workflow Android dérive désormais automatiquement le `versionCode` des notes de release.
- La branche `main` est **184 commits devant** le tag `android-v1.6.0-1ea26db` ; ces changements incluent principalement les consolidations Wolof et leur couverture de tests.
- **Aucun APK 1.7.0 publié à ce stade** : la release attend les contrôles CI et un build Android production réussi.

## ⚠️ Compromis assumés

- Sentry = no-op (pas de crash reporting cloud tant que SDK non réintroduit post-render).
- Phase E compte/JWT absente — favoris locaux uniquement (`favoritesSyncService` skeleton).
- Signature APK = **keystore debug CI** (Play Store refusera tant que secrets `ANDROID_RELEASE_KEYSTORE_*` absents).

## ⏳ Action humaine restante

1. Mettre à jour https://vjr221.sn/application/ (lien APK + SHA-256 + date 27 sept. 2026).
2. Sur GitHub Releases : décocher **Set as a pre-release** pour `android-v1.6.0-1ea26db` (devient latest).
3. (Plus tard) Keystore release stable dans les secrets GitHub pour MAJ cohérentes + Play.

## 🕛 Suite

- Phase E : si contrat JWT WP.
- Phase F stores : Play / TestFlight (voir `STORE_RELEASE.md`, `IOS_DEPLOYMENT.md`).
