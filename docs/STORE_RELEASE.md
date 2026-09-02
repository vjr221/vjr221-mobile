# Publication VJR 221 sur les stores

Ce document prépare la publication ; **il ne publie rien**. Les actions nécessitant des comptes ou validations humaines restent manuelles.

## Identité

- Nom : **VJR 221**
- Signature : **Le Sénégal dans sa diversité**
- Android package : `sn.vjr221.mobile`
- iOS bundle identifier : `sn.vjr221.mobile`
- Version initiale : `1.0.0` / build Android `1` / iOS `1`

La configuration Expo est déjà prête pour Android et iOS, avec deep links vers `vjr221.sn`.

## Comptes requis

- Google Play Console — publication Android.
- Apple Developer Program — publication iOS.
- Compte Expo/EAS — génération des builds cloud.

Ces comptes doivent être créés/connectés par le porteur du projet.

## Profils EAS

`eas.json` contient trois profils :

- `development` : client de développement, distribution interne.
- `preview` : distribution interne ; Android produit un APK installable.
- `production` : build de production avec incrément automatique de version.

Commandes à exécuter après connexion EAS :

```bash
eas login
eas build --platform android --profile preview
eas build --platform ios --profile preview
eas build --platform android --profile production
eas build --platform ios --profile production
```

Aucun build EAS n'est lancé automatiquement par le dépôt.

## Validation avant publication

1. Installer le build preview Android sur un appareil réel.
2. Installer le build preview iOS via distribution appropriée.
3. Tester accueil, Explorer, Recherche, Favoris et Plus.
4. Tester français et wolof.
5. Tester mode hors ligne et reprise réseau.
6. Tester les appels vers `vjr221.sn`.
7. Tester les liens `https://vjr221.sn/...` et le schéma `vjr221://`.
8. Produire les captures d'écran réelles Android/iOS.
9. Finaliser et publier la politique de confidentialité.
10. Effectuer une dernière revue légale et éditoriale.

## Google Play

- Nom : VJR 221
- Description courte : **Le Sénégal dans sa diversité : régions, communes, annuaire, patrimoine.**
- Catégorie proposée : Voyages et locaux.
- Package : `sn.vjr221.mobile`

Description longue à valider avant soumission :

> VJR 221 est l'application mobile officielle du portail vjr221.sn. Elle permet d'explorer le Sénégal à travers ses régions, départements, communes et quartiers/villages, de consulter l'annuaire national et de découvrir les contenus consacrés au tourisme, au patrimoine, à la gastronomie et aux personnalités. L'application est disponible en français et en wolof.

## App Store

- Nom : VJR 221
- Sous-titre : **Le Sénégal dans sa diversité**
- Catégorie proposée : Voyage.
- Bundle ID : `sn.vjr221.mobile`
- Mots-clés proposés : `senegal, tourisme, annuaire, patrimoine, regions, gastronomie`

## Confidentialité

La politique technique est dans `docs/PRIVACY_POLICY.md`. Elle doit être relue, complétée avec les coordonnées officielles et hébergée sur une URL publique avant soumission.

## Ce qui reste volontairement manuel

- création/connexion des comptes développeur ;
- signature et credentials Apple/Google ;
- installation et tests sur appareils réels ;
- captures store ;
- questionnaire de confidentialité Apple/Google ;
- validation juridique ;
- soumission finale aux stores.

**Aucune publication automatique n'est configurée.**
