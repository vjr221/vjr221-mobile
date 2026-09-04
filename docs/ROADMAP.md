# Roadmap VJR 221 Mobile

## État actuel — intégration Phase 6

- Accueil, recherche, fiches, favoris, partage et cache offline : prêts.
- Français / wolof persistant : prêt.
- Territoire réel : Sénégal → 14 régions → départements → communes → quartiers/villages : prêt.
- Annuaire national : catégories, recherche, filtres et fiches : prêt.
- Deep links `vjr221://` et liens web `vjr221.sn` : câblés côté application.
- Configuration Android/iOS Expo et EAS : prête pour validation humaine des identifiants et credentials.
- Documentation API, audit et publication : présente dans `docs/`.
- **CI GitHub : vert** — workflow unique `mobile-ci.yml` avec TypeScript, lint, **64 tests**, export Android, build APK Debug, vérification et archivage de l'artefact.

## Prochaine séquence

1. ~~Faire passer le CI complet sur GitHub.~~ **Terminé — CI #28 vert.**
2. Installer un build preview Android sur appareil réel.
3. Tester un build iOS sur appareil réel/distribution Apple.
4. Vérifier les deep links et App Links sur builds réels.
5. Finaliser l'URL publique de la politique de confidentialité.
6. Créer/valider les comptes Google Play, Apple Developer et EAS.
7. Générer les builds de production Android/iOS.
8. Préparer captures, fiches store et questionnaires de confidentialité.
9. Soumettre manuellement aux stores après validation finale.
10. Publier les URL réelles Play Store/App Store dans l'intégration WordPress et activer les téléchargements sur `/application/`.

## Fonctionnalités volontairement différées

- Compte utilisateur réel : nécessite un backend d'authentification sur vjr221.sn.
- Notifications push réelles : nécessite configuration Firebase/APNs/EAS.
- Carte interactive embarquée : l'app utilise actuellement les coordonnées et la navigation externe.
- Taxonomies éditoriales mobiles dédiées : à exposer via une API contractuelle fiable.

Aucune de ces fonctionnalités n'est simulée avec de fausses données.
