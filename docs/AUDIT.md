# Audit produit et technique — VJR 221 Mobile

Réalisé après les priorités 1 à 9. Inspection réelle du code (2230 lignes de
`src/`), pas de revue théorique. Classement P0 (bloqueur) → P3 (optimisation
future). Les P0/P1 listés ci-dessous ont été corrigés dans ce même lot.

## P0 — Bloqueur

Aucun trouvé. L'application compile, se lance, et aucun écran ne plante sur
un état de données absent (vérifié : régions/départements/communes/villages
sans parent renseigné, annuaire sans coordonnées, contenu sans image).

## P1 — Important (corrigés)

1. **Kicker de carte en anglais.** `ContentCard` affichait `item.type.toUpperCase()`
   brut pour tout type autre que `news` — un annuaire ou un contenu tourisme
   affichait "DIRECTORY" / "TOURISM" à un public francophone, alors que les
   traductions existaient déjà dans `i18n/strings.ts`. Corrigé : le kicker
   passe maintenant par `useI18n()`.
2. **Fiches tronquées à l'ouverture.** Les cartes "contenus associés"
   (Explorer → région/département/commune) et les entrées d'annuaire
   ouvraient `ContentDetailScreen` avec l'objet de *liste* (extrait seul,
   payload volontairement léger côté API) au lieu de charger la fiche
   complète. Corrigé : `openFull`/`openEntry` récupèrent maintenant le détail
   complet avant ouverture, avec repli silencieux sur la version courte en
   cas d'échec réseau (jamais de blocage).
3. **Architecture de synchronisation des favoris jamais appelée.** Le
   contrat `favoritesSyncService.ts` (fusion locale/serveur) existait mais
   `FavoritesProvider` ne le consultait jamais — code mort. Corrigé :
   `FavoritesProvider` appelle `syncFavorites()` au chargement (aujourd'hui
   un no-op sans backend, prêt pour plus tard sans changement d'écran).

## P2 — Amélioration (corrigés)

4. **Appel réseau structurellement inutile.** Le champ ACF "lieu associé"
   (qui relie tourisme/patrimoine/gastronomie/personnalités à un lieu) ne
   peut cibler que région/département/commune — jamais un village (vérifié
   dans la configuration ACF elle-même). `VillageScreen` appelait pourtant
   `RelatedContent`, qui aurait été systématiquement vide. Retiré.
5. **Incohérence Recherche vs Accueil.** `HomeScreen` affiche un bandeau
   "hors connexion" quand le contenu vient du cache ; `SearchScreen` ne le
   faisait pas alors qu'elle utilise la même stratégie de cache. Aligné.

## P3 — Optimisation future (non corrigés, documentés)

- `notificationService.ts` réexporte les préférences depuis `authService.ts`
  pour éviter une dépendance circulaire ; à terme, un fichier
  `preferencesService.ts` dédié serait plus lisible.
- Pas de géolocalisation automatique de l'utilisateur (`DistanceLabel`
  nécessite des coordonnées `from` fournies explicitement) — nécessiterait
  `expo-location`, non ajouté tant qu'aucun écran n'en a un besoin réel.
- Pas de rafraîchissement automatique au retour de connexion (l'utilisateur
  doit rouvrir l'écran ou taper "Réessayer") — acceptable vu le TTL de cache
  de 15 min, mais une amélioration possible.

## Produit — parcours vérifiés

- Accueil → Explorer → Région → Département → Commune → Village → retour :
  navigation cohérente, jamais d'écran vide sans message.
- Accueil → Explorer → Annuaire → catégorie → recherche → fiche → appeler /
  localiser / partager / favori : chaque action n'apparaît que si la donnée
  existe (vérifié sur des fiches avec et sans téléphone/GPS).
- Recherche → fiche → retour → favoris : le favori apparaît immédiatement.
- Changement de langue (FR/Wolof) : persiste après redémarrage simulé
  (relecture AsyncStorage).
- Aucun onboarding requis pour utiliser l'app sans compte — conforme à la
  consigne "fonctionnement complet sans compte".

## Données — aucune donnée fictive trouvée

Vérifié champ par champ dans les mappers (`geoRepository.ts`,
`directoryRepository.ts`, `contentRepository.ts`) : tout champ absent côté
API devient `undefined`/`null`, jamais une valeur par défaut inventée. Les
14 régions, les départements/communes filtrés, les entrées d'annuaire et les
contenus associés proviennent tous de `vjr221.sn` en temps réel (voir
docs/API.md).

## Technique

- TypeScript strict : 0 erreur.
- ESLint (`eslint-config-expo` + `react-hooks`) : 0 erreur, 0 warning.
- 52 tests Jest, tous verts (mappers, cache, deep links, retry réseau,
  fusion de favoris, notifications, cartographie).
- CI (`.github/workflows/ci.yml`) : typecheck + lint + test + build de
  vérification Android — inchangée, toujours valide.
- Aucun secret dans Git (vérifié : `.env.example` ne contient que des URLs
  publiques).

## Performance

- Un seul retry automatique sur échec réseau/5xx (`http.ts`), jamais sur 4xx.
- `DirectoryScreen` utilise `FlatList` (collection potentiellement large,
  annuaire national) ; les autres listes restent sur `ScrollView` + `.map()`
  car leurs tailles sont bornées (14 régions, ~5-10 départements/communes
  par filtre, page de 6-12 pour l'accueil/recherche) — un `FlatList` n'y
  apporterait pas de gain mesurable pour l'instant.
- Cache TTL 15 min partagé par tous les services de données.

## Accessibilité

- `accessibilityRole`/`accessibilityLabel` présents sur tous les éléments
  interactifs nouvellement ajoutés (chips annuaire, actions pratiques,
  bouton d'itinéraire).
- Pas d'animation lourde dans le projet (aucun usage d'`Animated`) : rien à
  désactiver pour "réduction des animations" à ce stade.
- Contraste des couleurs du design system : hérité des phases précédentes,
  non modifié dans cet audit — à vérifier avec un outil dédié (ex.
  Accessibility Inspector) lors d'un futur passage design.
