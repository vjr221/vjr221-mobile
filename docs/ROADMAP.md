# Roadmap

## Prêt

- Accueil connecté aux publications WordPress, recherche, fiches, favoris et partage.
- Cache TTL/offline, FR/Wolof persistant, design system et validation CI.
- **Territoire réel** : Sénégal → 14 régions → départements → communes → quartiers/villages,
  navigation parent/enfant, recherche/filtre par nom, fiches avec infos clés (superficie,
  population, chef-lieu, gentilé), galerie, liens utiles. États loading/error/empty/offline
  explicites à chaque niveau. Voir `src/features/explore/GeoExplorer.tsx`.

## À connecter quand l'API le permettra

- Annuaire national dans l'app mobile (l'API `vjr221/v1/annuaire` existe déjà côté
  WordPress — voir docs/API.md — mais aucun écran mobile ne la consomme encore).
- Taxonomies éditoriales dédiées (tourisme, patrimoine, gastronomie, personnalités,
  événements), galeries, contenus associés — nécessitent un contrat d'API par univers.
- Cartographie (marqueurs, distance, ouverture navigation externe).
- Deep links VJR 221 (`vjr221.sn/...` → écran mobile correspondant).
- Compte utilisateur, favoris synchronisés, préférences, historique.
- Notifications (service, permissions, token, préférences) — aucune notification réelle
  envoyée pour l'instant.
- EAS Build et analytics respectueux de la vie privée.
