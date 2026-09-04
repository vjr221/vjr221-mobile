# État de production — VJR 221 Mobile

Dernière mise à jour : 2026-09-04. Légende : ✅ opérationnel et
vérifié · ⏳ nécessite une action humaine · 🔜 prévu ultérieurement.

## ✅ Opérationnel et vérifié

- Accueil, recherche, favoris, partage, FR/Wolof — connectés à `wp/v2/posts`.
- Territoire (régions → départements → communes → villages), annuaire
  national, contenus encyclopédiques associés — connectés à l'API custom
  `vjr221/v1` (vérifiée en direct sur vjr221.sn à chaque étape).
- Deep links : schéma app `vjr221://open/...` **et** permaliens réels du
  site (`https://vjr221.sn/mon-article/`) résolus par slug.
- Cache offline TTL 15 min avec retry automatique sur échec réseau transitoire.
- TypeScript strict (0 erreur), ESLint (0 erreur/warning), 45 tests Jest
  (0 échec), build de vérification Expo Android (0 échec — aucun build de
  vérification iOS n'est exécuté en CI actuellement).
- `applicationId`/`bundleIdentifier` : **`sn.vjr221.mobile`** — confirmé et
  verrouillé par le porteur du projet.
- **APK Android 1.0.1 publié et distribué** : build de production généré
  par la CI (`.github/workflows/android-release.yml`, bundle JS embarqué,
  icône officielle VJR 221 depuis la médiathèque), publié en GitHub Release
  et relié à **https://vjr221.sn/application/**
  via l'option `vjr221_android_apk_url` (version affichée
  "1.0.1"). QR code de la page vérifié fonctionnel (pointe vers
  `/application/` elle-même, conformément à docs/STORE_RELEASE.md). Numéro
  de version synchronisé entre `app.json` (`1.0.1`), `package.json`
  (`1.0.1`) et l'option WordPress `vjr221_android_version`.
- Bandeau "Lire dans l'application" (schéma `vjr221://`) actif sur les
  fiches, cohérent avec le mapping catégorie→segment côté mobile.

## ⏳ Nécessite une action humaine

- Comptes Google Play Console et Apple Developer Program (aucun n'existe
  encore à ma connaissance).
- Premier build EAS réel (`eas build`) — nécessite un compte EAS connecté,
  jamais exécuté depuis cet environnement. Le build Android actuellement
  distribué vient de la CI GitHub Actions (Gradle direct), pas d'EAS.
- Test réel sur appareil physique/simulateur Android et iOS — **jamais
  effectué**, cet environnement n'en dispose pas. L'APK est publié et
  téléchargeable, mais son bon fonctionnement sur un appareil réel reste
  à valider (voir `docs/DEVICE_TESTING_CHECKLIST.md`).
- Politique de confidentialité (`docs/PRIVACY_POLICY.md`) : relecture
  juridique puis hébergement sur une URL publique.
- Captures d'écran réelles pour les fiches store.
- iOS : build TestFlight — bloqué tant qu'aucun compte Apple Developer
  Program n'existe. `app.json` est déjà prêt côté configuration
  (`bundleIdentifier`, `buildNumber`, `associatedDomains`).
- Renseignement des options WordPress `vjr221_playstore_url` /
  `vjr221_appstore_url` une fois l'app publiée sur les stores.

## 🔜 Prévu ultérieurement (architecture déjà prête)

- Backend d'authentification réel (`src/services/authService.ts` définit
  le contrat, `UnavailableAuthProvider` échoue explicitement aujourd'hui).
- Fournisseur de notifications push réel (`src/services/notificationService.ts`
  — aucun envoi réel, `expo-notifications` volontairement pas installé).
- Vraie carte interactive avec tuiles (aujourd'hui : coordonnées + ouverture
  navigation externe uniquement, `src/services/mapService.ts`).
- Écrans dédiés par catégorie éditoriale (tourisme, patrimoine... au-delà
  de "contenus associés" à un lieu).
