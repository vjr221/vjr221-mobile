# Checklist de tests sur appareil physique — VJR 221 Mobile

**Aucune case de ce document n'a été cochée automatiquement.** Cet
environnement de développement ne dispose d'aucun téléphone ni simulateur
Android/iOS ; tout ce qui précède ce document (typecheck, lint, 62 tests
Jest, `expo export`) est un test automatisé ou une vérification HTTP de
l'API — jamais un test visuel réel sur écran. Cette checklist est à cocher
manuellement par une personne disposant d'un appareil réel, après un build
EAS installable (voir docs/STORE_RELEASE.md).

## Android

- [ ] Installation de l'APK/AAB sur un téléphone Android réel
- [ ] Lancement de l'application (démarrage, splash, accueil)
- [ ] Navigation entre les 5 onglets (Accueil, Explorer, Recherche, Favoris, Plus)
- [ ] Recherche : saisie, résultats, aucun résultat, retour
- [ ] Ouverture d'une fiche (contenu, image, actions)
- [ ] Annuaire : catégories, recherche, fiche, appel, localisation
- [ ] Favoris : ajout, fermeture de l'écran, retour, présence confirmée, suppression
- [ ] Partage d'une fiche (feuille de partage native)
- [ ] Deep link : ouverture d'une URL `vjr221.sn` réelle depuis une autre app (WhatsApp, SMS, navigateur)
- [ ] Comportement en réseau faible (3G simulé ou zone de faible couverture)
- [ ] Comportement en données mobiles (hors Wi-Fi)
- [ ] Reprise après fermeture complète de l'application (état conservé, pas de crash)
- [ ] Test sur au moins 2 tailles d'écran différentes (petit et grand)

## iPhone / iOS

- [ ] Installation via TestFlight sur un iPhone réel
- [ ] Lancement de l'application (démarrage, splash, accueil)
- [ ] Navigation entre les 5 onglets
- [ ] Recherche : saisie, résultats, aucun résultat, retour
- [ ] Ouverture d'une fiche (contenu, image, actions)
- [ ] Annuaire : catégories, recherche, fiche, appel, localisation
- [ ] Favoris : ajout, fermeture de l'écran, retour, présence confirmée, suppression
- [ ] Partage d'une fiche (feuille de partage native)
- [ ] Deep link : ouverture d'une URL `vjr221.sn` réelle depuis une autre app
- [ ] Comportement en réseau faible
- [ ] Reprise après fermeture complète de l'application
- [ ] Test sur au moins 2 tailles d'écran différentes (iPhone standard et Pro Max, ou iPad si pertinent)

## Après chaque case cochée

Noter dans ce fichier : date, modèle d'appareil, version OS, résultat
(✅ / ❌ + description du problème le cas échéant). Ne jamais marquer une
ligne comme validée sans l'avoir réellement exécutée sur l'appareil.
