# Brouillon de description de PR — mobile/phase6-integration → main

*(À copier tel quel dans la description GitHub de la Pull Request lors de sa création. Fichier utilitaire, à supprimer ou déplacer une fois la PR ouverte.)*

## Contexte

`origin/main` ne contenait que les 2 commits de la Phase 1/2
(`70ac3f3`, `c86c353`). Le développement des Phases 3 à 5 a été réalisé
et validé dans un environnement de développement séparé, sans accès
d'écriture GitHub direct — cette PR intègre donc rétroactivement une base
déjà fonctionnelle, pas un nouveau développement.

**Aucun conflit** : `origin/main` est un ancêtre direct de cette branche
(fast-forward pur, historique intégralement préservé, aucun commit
réécrit ni squashé).

## Fonctionnalités livrées

- Territoire réel : Sénégal → 14 régions → départements → communes →
  quartiers/villages, avec recherche/filtre et navigation parent/enfant.
- Contenus encyclopédiques réellement rattachés à chaque lieu (API
  `vjr221/v1/lieu/{id}/contenus`).
- Annuaire national branché sur les données réelles (téléphone, adresse,
  horaires, réseaux), réutilisant le système de fiches existant.
- Cartographie : abstraction indépendante du fournisseur (aucun SDK carte
  ajouté), distance, ouverture de navigation externe.
- Deep links : `vjr221://open/...` **et** résolution des permaliens réels
  du site (`https://vjr221.sn/...`) par slug — pas seulement le schéma
  synthétique interne.
- Partage centralisé.
- Compte : architecture complète (session, favoris synchronisables),
  aucun backend simulé — l'app reste 100 % utilisable sans compte.
- Notifications : infrastructure complète, **aucun envoi réel**.
- FR/Wolof : 56 clés strictement symétriques entre les deux langues.
- `app.json`/`eas.json` configurés (`sn.vjr221.mobile`, profils de build).

## Tests réalisés

- TypeScript strict : 0 erreur
- ESLint : 0 erreur, 0 warning
- **62 tests Jest** (0 échec) : mappers API, cache/offline, deep links
  (dont résolution de permaliens réels capturés en direct sur vjr221.sn),
  retry réseau, favoris (ajout/suppression), i18n, notifications
- `expo export` Android et iOS : les deux réussissent
- 8 endpoints WordPress testés en HTTP réel (accueil, recherche, région,
  département, commune, annuaire imbriqué, contenus associés) — tous
  HTTP 200, shape vérifié champ par champ
- **Aucun test sur appareil physique ni simulateur** — voir
  `docs/DEVICE_TESTING_CHECKLIST.md`, à cocher manuellement après le
  premier build EAS installable

## Bugs trouvés et corrigés pendant l'intégration

1. URLs réelles du site (permaliens sans ID) non reconnues par les deep
   links → corrigé (résolution par slug)
2. Catégorie WordPress orpheline faussant le typage des contenus liés →
   corrigé côté vjr221.sn
3. Dépendance `expo-localization` inutilisée → retirée
4. 4 écrans avec texte français sans équivalent wolof → corrigé
5. Préférences de notifications ne précisant pas qu'aucun envoi réel n'a
   lieu → légende ajoutée

Détail complet : `docs/AUDIT.md`.

## Limites restantes (non résolues par cette PR)

- Aucun build EAS réel n'a été généré (nécessite un compte Expo)
- Aucun test sur appareil physique
- Aucun backend d'authentification ni de notifications push réel
- Vraie carte interactive non implémentée (coordonnées + navigation
  externe uniquement)
- Publication sur les stores non entamée (comptes développeur requis)

Voir `docs/ETAT_PRODUCTION.md` pour la vue complète ✅/⏳/🔜.

## Ne pas merger si

- La CI n'est pas verte
- Les 62 tests ne passent pas dans l'environnement CI
