# Publication VJR 221 sur les stores

Ce document prépare la publication ; **il ne publie rien**. Les actions nécessitant des comptes ou validations humaines restent manuelles.

Pour le détail iOS (TestFlight → App Store), voir **[IOS_DEPLOYMENT.md](./IOS_DEPLOYMENT.md)**.

## Identité

- Nom : **VJR 221**
- Signature : **Le Sénégal dans sa diversité**
- Android package : `sn.vjr221.mobile`
- iOS bundle identifier : `sn.vjr221.mobile`
- Version courante : voir `package.json` / `app.json` (ex. `1.4.0`)

La configuration Expo est prête pour Android et iOS, avec deep links vers `vjr221.sn`.

## Comptes requis

- Google Play Console — publication Android (store).
- Apple Developer Program — publication iOS (obligatoire).
- Compte Expo/EAS — génération des builds cloud iOS (et optionnellement Android).

Ces comptes doivent être créés/connectés par le porteur du projet.

## Profils EAS

`eas.json` contient trois profils :

- `development` : client de développement ; iOS **simulateur**.
- `preview` : distribution interne ; Android APK ; iOS appareils enregistrés.
- `production` : store / TestFlight ; `autoIncrement` ; Android AAB ; iOS IPA store.

Commandes après connexion EAS :

```bash
eas login
eas init   # une seule fois
eas build --platform android --profile preview
eas build --platform ios --profile preview
eas build --platform android --profile production
eas build --platform ios --profile production
eas submit --platform ios --latest
```

Aucun build EAS n'est lancé automatiquement par le dépôt.

## Android hors store (actuel)

L’APK de production est publié via le workflow GitHub **Android APK Release**
(manuel) puis annoncé sur https://vjr221.sn/application/.

## Validation avant publication store

1. Installer le build preview / production sur appareil réel.
2. Tester accueil, Explorer, Recherche, Favoris, Plus, Urgences.
3. Tester français et wolof.
4. Tester mode hors ligne et reprise réseau.
5. Tester les appels vers `vjr221.sn` et WhatsApp / téléphone.
6. Tester les liens `https://vjr221.sn/...` et le schéma `vjr221://`.
7. Produire les captures d'écran réelles Android/iOS.
8. Finaliser et publier la politique de confidentialité.
9. Effectuer une dernière revue légale et éditoriale.

## Google Play

- Nom : VJR 221
- Description courte : **Le Sénégal dans sa diversité : régions, communes, annuaire, patrimoine.**
- Catégorie proposée : Voyages et locaux.
- Package : `sn.vjr221.mobile`

## App Store

- Nom : VJR 221
- Sous-titre : **Le Sénégal dans sa diversité**
- Catégorie proposée : Voyage.
- Bundle ID : `sn.vjr221.mobile`
- Mots-clés proposés : `senegal, tourisme, annuaire, patrimoine, regions, gastronomie`
- Encryption : non exemptée déclarée `false` dans app.json (`ITSAppUsesNonExemptEncryption`)

## Confidentialité

La politique technique est dans `docs/PRIVACY_POLICY.md`. Elle doit être relue, complétée avec les coordonnées officielles et hébergée sur une URL publique avant soumission.

## Ce qui reste volontairement manuel

- [ ] Comptes Google Play / Apple Developer créés
- [ ] `eas init` + projectId Expo
- [ ] Politique de confidentialité relue et hébergée (URL publique)
- [ ] Captures d'écran réelles (Android + iOS, plusieurs tailles)
- [ ] `eas build --profile production` réussi sur iOS
- [ ] TestFlight validé sur au moins un iPhone
- [ ] URL TestFlight / App Store renseignée sur le site
- [ ] Vérification des deep links / universal links en production
- [ ] Soumission App Store (`eas submit`) — validation humaine Apple

**Aucune publication automatique n'est configurée.**

## Distribution hors stores (site)

Centre de distribution : **https://vjr221.sn/application/** (WordPress).

| État | Android | iOS |
| --- | --- | --- |
| A — Pré-publication | APK direct | TestFlight (si URL renseignée) |
| B — Test | idem | idem |
| C — Stores publiés | Google Play prioritaire | App Store prioritaire |

### iOS — TestFlight / App Store uniquement

Aucun fichier IPA n’est proposé en téléchargement direct.  
Configurer `vjr221_testflight_url` (puis plus tard l’URL App Store) dans les réglages WordPress.
