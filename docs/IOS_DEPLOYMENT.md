# Déploiement iOS — VJR 221

## Principe important

**iOS n’autorise pas** la distribution publique d’un fichier IPA sur un site web
(contrairement à l’APK Android). Les seules voies légitimes sont :

| Canal | Public | Prérequis |
| --- | --- | --- |
| **TestFlight** | Testeurs invités (jusqu’à 10 000) | Apple Developer Program + build EAS production ou ad hoc |
| **App Store** | Tout le monde | Apple Developer + review Apple |
| **Internal distribution** (EAS) | Appareils enregistrés (UDID) | Compte Apple + profil ad hoc |
| **Simulateur** | Dev uniquement | Mac / EAS profile `development` |

La page https://vjr221.sn/application/ affiche un lien **TestFlight** ou **App Store**
quand l’URL est renseignée dans WordPress (`vjr221_testflight_url`) — jamais un IPA.

---

## Prérequis (à faire une fois)

### 1. Apple Developer Program

- Inscription : https://developer.apple.com/programs/ (≈ 99 USD / an)
- Compte organisation ou individuel au nom du porteur VJR 221
- Accepter les accords dans [App Store Connect](https://appstoreconnect.apple.com)

### 2. Compte Expo / EAS

```bash
npm install -g eas-cli
eas login
cd /chemin/vers/vjr221-mobile
eas init   # lie le projet Expo si pas encore fait (écrit projectId dans app.json)
```

### 3. Identité de l’app (déjà dans le dépôt)

| Champ | Valeur |
| --- | --- |
| Nom | VJR 221 |
| Bundle ID | `sn.vjr221.mobile` |
| Version marketing | `1.4.0` (package.json / app.json) |
| Build number iOS | auto-incrémenté par EAS en production (`autoIncrement`) |

---

## Profils EAS (`eas.json`)

| Profil | Usage iOS |
| --- | --- |
| `development` | Simulateur (`ios.simulator: true`) |
| `preview` | Distribution **interne** (appareils enregistrés) |
| `production` | **TestFlight** + **App Store** (IPA signé store) |

---

## Étape A — Premier build iOS (credentials)

Sur une machine avec accès au compte Apple :

```bash
eas credentials -p ios
# ou directement au premier build :
eas build --platform ios --profile production
```

EAS propose de générer automatiquement :

- certificat de distribution Apple
- profil de provisioning App Store

Répondre **Y** aux prompts (recommandé pour démarrer).

---

## Étape B — Build production

```bash
eas build --platform ios --profile production --message "VJR 221 1.4.0 iOS"
```

Suivre le lien EAS dashboard jusqu’à **Finished**.  
Le binaire est un **.ipa** prêt pour App Store Connect.

---

## Étape C — TestFlight (bêta)

### Option 1 — via EAS Submit

```bash
eas submit --platform ios --profile production --latest
```

Renseigner une fois dans `eas.json` → `submit.production.ios` :

- `appleId` : email du compte Apple
- `ascAppId` : ID numérique App Store Connect (créé à la première app)
- `appleTeamId` : Team ID (developer.apple.com → Membership)

Ou laisser EAS demander interactivement.

### Option 2 — manuel

1. App Store Connect → **My Apps** → **+** → New App  
   - Platform : iOS  
   - Bundle ID : `sn.vjr221.mobile`  
   - Name : VJR 221  
2. Transporter / EAS submit upload l’IPA  
3. Onglet **TestFlight** → ajouter testeurs internes ou externes  
4. Après traitement Apple (souvent 5–30 min, parfois review pour testeurs externes)

### Lien public TestFlight

Quand le build est disponible :

1. TestFlight → **Public Link** (optionnel) ou invitation email  
2. Copier l’URL  
3. WordPress → **Réglages > VJR 221 App** → champ `vjr221_testflight_url`  
4. Version iOS affichée : `vjr221_ios_version` = `1.4.0`

La page `/application/` passera de « Bientôt disponible » au bouton iOS.

---

## Étape D — Publication App Store

1. Compléter la fiche App Store Connect :
   - Sous-titre : *Le Sénégal dans sa diversité*
   - Description, mots-clés, catégorie **Voyage**
   - Captures d’écran (iPhone 6.7", 6.5", iPad si tablet)
   - URL politique de confidentialité (voir `docs/PRIVACY_POLICY.md`)
   - Classification âge, droits d’export (encryption : **Non** — déjà `ITSAppUsesNonExemptEncryption: false`)
2. Sélectionner le build TestFlight validé  
3. **Submit for Review**  
4. Après approbation : l’URL App Store remplace ou complète TestFlight sur le site

```bash
# Soumettre le dernier build production
eas submit --platform ios --latest
```

---

## Universal Links (déjà préparés)

- `app.json` → `ios.associatedDomains`: `applinks:vjr221.sn`
- Côté serveur : fichier `https://vjr221.sn/.well-known/apple-app-site-association`  
  doit référencer le Team ID + bundle `sn.vjr221.mobile`  
  (à publier sur WordPress/nginx **après** avoir le Team ID Apple)

Exemple de payload AASA (à adapter) :

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appIDs": ["TEAMID.sn.vjr221.mobile"],
        "components": [{ "/": "/*" }]
      }
    ]
  }
}
```

---

## Checklist opérationnelle

- [ ] Apple Developer Program actif
- [ ] `eas login` + `eas init` (projectId Expo)
- [ ] Premier `eas build -p ios --profile production` OK
- [ ] App créée dans App Store Connect
- [ ] `eas submit` → build visible dans TestFlight
- [ ] Testeurs internes OK sur iPhone réel
- [ ] URL TestFlight renseignée sur vjr221.sn
- [ ] Privacy policy publique
- [ ] Captures d’écran
- [ ] Soumission App Store + review
- [ ] Lien App Store sur `/application/`

---

## Ce que le dépôt ne peut pas automatiser

- Paiement / validation Apple Developer
- Acceptation des accords App Store Connect
- Génération des credentials sans connexion au compte Apple (EAS le fait interactivement)
- Review Apple (humaine)
- Mise à jour WordPress (`vjr221_testflight_url`)

Le workflow GitHub **Android APK Release** reste réservé à Android.  
Les builds iOS passent par **EAS cloud** (machines macOS Apple).
