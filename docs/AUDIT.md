# Audit produit et technique — VJR 221 Mobile

Réalisé après les priorités 1 à 9. Inspection réelle du code (`src/`), pas de revue théorique. Classement P0 (bloqueur) → P3 (optimisation future). Les P0/P1 listés ci-dessous ont été corrigés dans ce même lot.

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
- **64 tests Jest, tous verts** (mappers, cache, deep links, retry réseau,
  fusion de favoris, notifications, cartographie et normalisation des textes
  WordPress).
- CI GitHub : workflow unique `.github/workflows/mobile-ci.yml` :
  typecheck + lint + tests + export Android + build APK Debug + vérification
  et archivage de l'artefact — **CI #28 vert**.
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

---

# Audit Phase 4 — finalisation production (2026-09-01, suite)

Patch `vjr221-mobile-phase4-complet.patch` appliqué via `git am` sur un
clone frais de `origin/main` : **0 conflit, 14/14 commits acceptés**.

## Découvertes de cet audit

### P1 — corrigé : les vraies URLs du site n'ouvraient pas l'application

Toutes les URLs réellement partagées depuis vjr221.sn (permaliens WordPress
standards, ex. `https://vjr221.sn/region-de-dakar/`) n'ont pas d'ID dans le
chemin. Le parseur de deep links ne reconnaissait que son propre schéma
synthétique `vjr221://open/{segment}/{id}` (utilisé par le bandeau "Lire
dans l'application" côté WordPress) et retombait sur `unknown` → navigateur
pour tout permalien réel. Aucun crash, mais l'objectif de la Priorité 6
n'était pas atteint pour le partage réel. **Corrigé** : nouvelle destination
`permalink` + résolution par slug via `wp/v2/posts?slug=X` (endpoint vérifié
en direct sur vjr221.sn). Voir commit `fix(deeplinks)`.

### P2 — corrigé : dépendance `expo-localization` inutilisée

Déclarée dans `package.json` et `app.json` mais jamais importée dans le
code — `I18nProvider` gère la langue via `AsyncStorage`, pas via
l'appareil. Retirée des deux fichiers.

### Bug WordPress trouvé et corrigé (hors dépôt mobile, côté vjr221.sn)

La catégorie "Écrivains" (`personnalites-lettres`) avait `parent: 0` au
lieu d'être rattachée à "Personnalités" — seule anomalie parmi 7
sous-catégories, cause probable d'une saisie manuelle. Conséquence
concrète : les contenus liés à cette branche (romanciers, poètes,
essayistes) remontaient `type: "news"` et `category: null` dans
`/wp-json/vjr221/v1/lieu/{id}/contenus` au lieu de `type: "people"`.
Corrigé via `wp_update_term`, vérifié sans régression (ancienne et
nouvelle URL d'archive répondent toutes deux HTTP 200).

## Ce qui n'a PAS pu être testé dans cet environnement

- **Aucun test sur appareil physique ou simulateur** Android/iOS : cet
  environnement ne dispose ni d'émulateur, ni d'appareil connecté. Tout ce
  qui est qualifié de "testé" dans ce document est soit un test automatisé
  (Jest), soit une vérification HTTP directe de l'API — jamais une
  vérification visuelle réelle sur écran.
- Le comportement natif des deep links (`vjr221://`, Android App Links,
  iOS Universal Links) au niveau du système d'exploitation n'a pas pu être
  vérifié : seule la logique de parsing/résolution (`deepLinks.ts`,
  `resolveContentBySlug`) a été testée, unitairement et contre l'API réelle.
- La persistance réelle des favoris à travers un redémarrage d'app n'a été
  vérifiée qu'au niveau logique (tests `favoritesSyncService`), pas en
  conditions réelles sur appareil.

## Suite de l'audit Phase 4 (même session, poursuite)

Points 5, 8, 9 de la checklist repassés en revue avec correctifs réels :

- **Point 5 (favoris)** : `toggleFavorite` extrait en fonction pure et
  testée (ajout, suppression, cycle complet, non-mutation). La
  persistance `AsyncStorage` réelle sur redémarrage d'app n'est
  vérifiable qu'au niveau logique dans cet environnement (pas d'appareil).
- **Point 8 (notifications)** : les interrupteurs de préférences
  n'indiquaient nulle part qu'aucune notification réelle n'est envoyée —
  un utilisateur pouvait raisonnablement croire le contraire. Ajout d'une
  légende explicite.
- **Point 9 (FR/Wolof)** : 4 écrans introduits ce tour avaient des textes
  français en dur sans équivalent wolof (`AccountScreen`,
  `NotificationPreferencesScreen`, `ExploreScreen`, `ContentDetailScreen`).
  Corrigé — les clés i18n sont maintenant strictement symétriques FR/WO,
  verrouillé par `strings.test.ts`. Les textes hérités de la Phase 2
  (`ContentStates.tsx`) restent non traduits : préexistants, hors périmètre
  de cet audit.

**Total tests actuel : 64/64.**
