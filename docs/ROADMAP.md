# Roadmap

## Prêt

- Accueil connecté aux publications WordPress, recherche, fiches, favoris et partage.
- Cache TTL/offline (avec un retry automatique sur échec réseau transitoire), FR/Wolof
  persistant, design system et validation CI.
- **Territoire réel** : Sénégal → 14 régions → départements → communes → quartiers/villages,
  navigation parent/enfant, recherche/filtre par nom, fiches avec infos clés (superficie,
  population, chef-lieu, gentilé), galerie, liens utiles. Contenus encyclopédiques
  (personnalités/tourisme/patrimoine/gastronomie) réellement rattachés à chaque
  région/département/commune. États loading/error/empty/offline explicites partout.
  Voir `src/features/explore/GeoExplorer.tsx`.
- **Annuaire national** : catégories, recherche, filtres, fiches avec appel/localisation/
  site web/partage/favori conditionnels à la donnée disponible. Réutilise le système de
  fiches existant (`ContentItem`/`ContentCard`/`ContentDetailScreen`) plutôt qu'un second
  système parallèle. Voir `src/features/directory/`.
- **Cartographie** : abstraction indépendante du fournisseur (validation coordonnées,
  distance, ouverture navigation externe) — aucun SDK carte embarqué. `src/services/mapService.ts`.
- **Deep links + partage** : parseur centralisé `vjr221://` et `https://vjr221.sn/...`,
  routage automatique vers la bonne destination (fiche, région/département/commune/village,
  annuaire), fallback web propre pour toute URL non reconnue. `src/services/deepLinks.ts`,
  câblé dans `AppNavigator.tsx` via `useDeepLinkRouter`.
- **Compte** : architecture complète (session, connexion/inscription/déconnexion, fusion de
  favoris locaux/serveur qui ne supprime jamais rien) — aucun backend d'authentification
  n'existe encore côté vjr221.sn, donc `UnavailableAuthProvider` échoue explicitement plutôt
  que de simuler un compte. L'app reste pleinement utilisable sans compte.
  `src/services/authService.ts`, `favoritesSyncService.ts`.
- **Notifications** : contrat complet (payload, permissions, token, préférences, deep link
  depuis notification) — **aucun envoi réel**, `expo-notifications` volontairement pas ajouté
  tant que le projet EAS/Firebase/APNs n'existe pas. `src/services/notificationService.ts`.
- **Production** : `app.json`/`eas.json` configurés (`applicationId`/`bundleIdentifier`
  proposés, à confirmer — voir docs/STORE_RELEASE.md), deep links Android/iOS déclarés.
- **Site vjr221.sn** : shortcode de téléchargement (état honnête "bientôt disponible" tant
  que l'app n'est pas publiée), bandeau "Lire dans l'application" sur les fiches — côté
  WordPress, `wp-content/novamira-sandbox/vjr221-mobile-app-integration.php`.

## À connecter quand une source réelle existera

- Taxonomies éditoriales dédiées avec navigation propre par catégorie (aujourd'hui, les
  contenus encyclopédiques n'apparaissent que via "contenus associés" à un lieu, ou par
  recherche/accueil — pas encore de `CategoryScreen` dédié).
- Backend d'authentification (aucun compte réel possible tant qu'il n'existe pas).
- Fournisseur de notifications push réel (Firebase/APNs).
- Vraie carte interactive (aujourd'hui : coordonnées + ouverture navigation externe
  uniquement, pas de tuiles cartographiques affichées dans l'app).
- Publication effective sur les stores (comptes développeur requis — voir
  docs/STORE_RELEASE.md).
- URLs Play Store / App Store réelles dans les options WordPress
  `vjr221_playstore_url` / `vjr221_appstore_url` (vides par défaut aujourd'hui).
