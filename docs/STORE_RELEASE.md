# Publication VJR 221 sur les stores

Ce document prépare la publication ; **il ne publie rien**. Aucune capture
d'écran, avis, statistique ou identifiant réel n'est fabriqué ici : tout ce
qui nécessite une action humaine (comptes développeur, captures réelles,
validation légale) est explicitement marqué **⏳ À faire par un humain**.

## Identité de l'application

- Nom : **VJR 221**
- Signature : **Le Sénégal dans sa diversité**
- `applicationId` / `bundleIdentifier` proposés : `sn.vjr221.mobile`
  (configurés dans `app.json`) — ⏳ **à confirmer par le porteur du projet
  avant tout premier build de production** : cet identifiant est permanent
  une fois publié sur les stores, il ne peut plus être changé sans perdre
  l'historique de l'app.
- Icônes : `./assets/icon.png`, `./assets/android-icon-*.png` — déjà
  présentes dans le dépôt (Phase 1), non modifiées ici.

## Comptes nécessaires ⏳ À faire par un humain

| Compte | Usage | Coût indicatif |
| --- | --- | --- |
| Google Play Console | Publication Android | 25 USD (unique) |
| Apple Developer Program | Publication iOS | 99 USD/an |
| Compte Expo (EAS) | Builds cloud, soumission | Gratuit pour ce volume |

Aucun de ces comptes n'existe encore côté projet à ma connaissance — je ne
peux ni les créer ni y accéder depuis cet environnement.

## Certificats et identifiants

- **Android** : `eas build` génère et gère un keystore automatiquement s'il
  n'en existe pas (`eas credentials`). Rien à préparer manuellement.
- **iOS** : nécessite un certificat de distribution + profil de provisioning,
  générables via `eas build` une fois le compte Apple Developer actif.
  ⏳ Nécessite le compte Apple ci-dessus.
- **Notifications push** (préparées en amont, non activées — voir
  `src/services/notificationService.ts`) : nécessiteront un projet Firebase
  (Android/FCM) et une clé APNs (iOS) le jour où les notifications réelles
  seront activées. Non requis pour une première publication.

## Variables d'environnement de build

Définies dans `eas.json` par profil (`development`/`preview`/`production`),
valeurs par défaut dans `.env.example`. Aucun secret n'est stocké dans Git :

- `EXPO_PUBLIC_APP_ENV`
- `EXPO_PUBLIC_SITE_URL`
- `EXPO_PUBLIC_API_BASE_URL`
- `EXPO_PUBLIC_GEO_API_BASE_URL`

Toutes publiques (URLs) — aucune n'est un secret à protéger.

## Builds

```bash
eas build --platform android --profile production   # génère un .aab
eas build --platform ios --profile production        # nécessite le compte Apple
eas build --platform android --profile preview        # .apk pour tests internes
```

⏳ Non exécuté depuis cet environnement (pas de compte EAS connecté). Le
build de vérification local (`npx expo export --platform android`) a été
validé à chaque étape de développement — voir `docs/AUDIT.md`.

## Fiche Google Play

| Champ | Contenu |
| --- | --- |
| Nom | VJR 221 |
| Description courte (80 car.) | Le Sénégal dans sa diversité : régions, communes, annuaire, patrimoine. |
| Catégorie | Voyages et locaux (Travel & Local) |
| Version | 1.0.0 (versionCode 1) |
| Package | `sn.vjr221.mobile` |
| Icône | `./assets/icon.png` |

**Description longue** (brouillon factuel, à valider) :

> VJR 221 est le compagnon mobile officiel du site vjr221.sn pour explorer
> le Sénégal : les 14 régions, leurs départements et communes, un annuaire
> national d'établissements (adresse, téléphone, horaires), et les contenus
> encyclopédiques du site (personnalités, tourisme, patrimoine,
> gastronomie). Disponible en français et en wolof.

⏳ **Captures d'écran** : à produire depuis un simulateur/appareil réel une
fois un build installé — je ne peux pas générer de captures d'écran d'un
appareil réel depuis cet environnement de développement.

⏳ **Politique de confidentialité** : brouillon factuel fourni dans
`docs/PRIVACY_POLICY.md` (à faire relire par un juriste puis héberger sur
une URL publique avant soumission — Google Play l'exige).

## Fiche App Store

| Champ | Contenu |
| --- | --- |
| Nom | VJR 221 |
| Sous-titre (30 car.) | Le Sénégal dans sa diversité |
| Catégorie | Voyage (Travel) |
| Mots-clés | senegal, tourisme, annuaire, patrimoine, regions, gastronomie |
| Version | 1.0.0 (build 1) |
| Bundle ID | `sn.vjr221.mobile` |

Même description longue que Google Play (contenu factuel identique).

⏳ Captures d'écran et fiche de confidentialité App Store (formulaire
"Confidentialité de l'app" d'Apple) : mêmes réserves que ci-dessus.

## Checklist avant soumission

- [ ] Comptes Google Play / Apple Developer créés
- [ ] `applicationId`/`bundleIdentifier` confirmés par le porteur du projet
- [ ] Politique de confidentialité relue et hébergée (URL publique)
- [ ] Captures d'écran réelles (Android + iOS, plusieurs tailles)
- [ ] `eas build --profile production` réussi sur les deux plateformes
- [ ] Test d'installation manuel sur au moins un appareil Android et un iOS
- [ ] Vérification des deep links (`vjr221.sn/...`) sur build de production
  réel (l'`autoVerify`/`associatedDomains` ne peut être validé qu'avec un
  domaine signé, pas en local)
- [ ] Soumission (`eas submit`) — validation humaine obligatoire, jamais
  automatique
