# État de production — VJR 221 Mobile

Dernière mise à jour : **2026-09-27** · version app **1.6.0** (versionCode **19**) · **release publique** `android-v1.6.0-1ea26db`.

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
