# État de production — VJR 221 Mobile

Dernière mise à jour : Phase 4 (2026-09-01). Légende : ✅ opérationnel et
vérifié · ⏳ nécessite une action humaine · 🔜 prévu ultérieurement.

## ✅ Opérationnel et vérifié

- Accueil, recherche, favoris, partage, FR/Wolof — connectés à `wp/v2/posts`.
- Territoire (régions → départements → communes → villages), annuaire
  national, contenus encyclopédiques associés — connectés à l'API custom
  `vjr221/v1` (vérifiée en direct sur vjr221.sn à chaque étape).
- Deep links : schéma app `vjr221://open/...` **et** permaliens réels du
  site (`https://vjr221.sn/mon-article/`) résolus par slug.
- Cache offline TTL 15 min avec retry automatique sur échec réseau transitoire.
- TypeScript strict (0 erreur), ESLint (0 erreur/warning), 56 tests Jest
  (0 échec), build de vérification Expo Android et iOS (0 échec).
- `applicationId`/`bundleIdentifier` : **`sn.vjr221.mobile`** — confirmé et
  verrouillé par le porteur du projet.

## ⏳ Nécessite une action humaine

- Comptes Google Play Console et Apple Developer Program (aucun n'existe
  encore à ma connaissance).
- Premier build réel (`eas build`) — nécessite un compte EAS connecté,
  jamais exécuté depuis cet environnement.
- Test réel sur appareil physique/simulateur Android et iOS — **jamais
  effectué**, cet environnement n'en dispose pas.
- Politique de confidentialité (`docs/PRIVACY_POLICY.md`) : relecture
  juridique puis hébergement sur une URL publique.
- Captures d'écran réelles pour les fiches store.
- Renseignement des options WordPress `vjr221_playstore_url` /
  `vjr221_appstore_url` une fois l'app publiée.

## 🔜 Prévu ultérieurement (architecture déjà prête)

- Backend d'authentification réel (`src/services/authService.ts` définit
  le contrat, `UnavailableAuthProvider` échoue explicitement aujourd'hui).
- Fournisseur de notifications push réel (`src/services/notificationService.ts`
  — aucun envoi réel, `expo-notifications` volontairement pas installé).
- Vraie carte interactive avec tuiles (aujourd'hui : coordonnées + ouverture
  navigation externe uniquement, `src/services/mapService.ts`).
- Écrans dédiés par catégorie éditoriale (tourisme, patrimoine... au-delà
  de "contenus associés" à un lieu).
