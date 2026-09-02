# API VJR 221

Deux bases d'API sont utilisées, configurables par variables d'environnement (`.env.example`).

## 1. API WordPress standard — `EXPO_PUBLIC_API_BASE_URL`

Par défaut `https://vjr221.sn/wp-json/wp/v2`. Utilisée pour les publications (actualités).

- `GET /posts?per_page=6&_embed` : publications récentes pour l'accueil.
- `GET /posts?per_page=12&page={n}&search={term}&_embed` : recherche paginée.
- `GET /posts?include={id}&per_page=1&_embed` : fiche de contenu.

Transformée dans `src/services/contentRepository.ts` vers le type `ContentItem`.

## 2. API territoriale custom VJR 221 — `EXPO_PUBLIC_GEO_API_BASE_URL`

Par défaut `https://vjr221.sn/wp-json/vjr221/v1`. Namespace REST custom exposé côté
WordPress (`wp-content/novamira-sandbox/vjr221-mobile-api.php`) spécifiquement pour
débloquer la hiérarchie territoriale et l'annuaire, qui n'existaient pas dans `wp/v2`
(les champs ACF concernés ont `show_in_rest: false`).

Toutes les routes sont en lecture seule (GET), publiques, et ne renvoient jamais de
donnée fabriquée : un champ absent en base est `null`.

### Territoire

| Route | Description |
| --- | --- |
| `GET /regions` | Liste des régions. Paramètres : `q` (filtre texte), `page`, `per_page`. |
| `GET /regions/{id}` | Fiche région (contenu, galerie, liens utiles inclus). |
| `GET /departements?region={id}` | Liste des départements, filtrable par région. |
| `GET /departements/{id}` | Fiche département. |
| `GET /communes?departement={id}&region={id}` | Liste des communes, filtrable. |
| `GET /communes/{id}` | Fiche commune. |
| `GET /villages?commune={id}` | Liste des quartiers/villages, filtrable par commune. |
| `GET /villages/{id}` | Fiche quartier/village. |

Forme d'un élément de liste :

```json
{
  "id": 2153,
  "slug": "region-de-dakar",
  "title": "Région de Dakar",
  "excerpt": "…",
  "permalink": "https://vjr221.sn/region-de-dakar/",
  "image": { "url": "…", "thumb": "…", "alt": null },
  "gps": { "lat": 14.7167, "lng": -17.4677 },
  "infos": { "superficie": null, "population": null, "chef_lieu": null, "gentile": null },
  "region": null,
  "departement": null,
  "arrondissement": null
}
```

`region` / `departement` (objets `{id, name, slug}` ou `null`) n'apparaissent que sur
départements/communes. `commune` (même forme) n'apparaît que sur les villages/quartiers.
Un détail (`/regions/{id}`, etc.) ajoute `content`, `galerie` (tableau d'images) et
`liens_utiles` (tableau `{label, url}`).

Réponses de liste : `{ "items": [...], "meta": { "page", "per_page", "total", "total_pages" } }`.

### Annuaire

| Route | Description |
| --- | --- |
| `GET /annuaire?categorie=&region=&q=&page=&per_page=` | Liste, filtrable par sous-catégorie (slug), région (slug ACF), recherche texte. |
| `GET /annuaire/{id}` | Fiche complète (contact, horaires détaillés, services, réseaux, galerie). |
| `GET /annuaire/categories` | Les 35 sous-catégories avec leur compteur. |

Voir `wp-content/novamira-sandbox/vjr221-mobile-api.php` côté WordPress pour le détail
exact des champs (`vjr_ann_*`).

## Ce qui n'est PAS encore exposé

- Taxonomies éditoriales dédiées (tourisme, patrimoine, gastronomie, personnalités,
  événements) : ces univers restent sur `wp/v2/posts` générique et sont marqués
  `available: false` dans `src/config/categories.ts` tant qu'un contrat dédié n'existe pas.
- Authentification / comptes utilisateurs.
- Notifications push.

Aucun composant n'appelle une URL directement : tout passe par
`src/services/contentRepository.ts` (actualités) ou `src/services/geoRepository.ts`
(territoire), qui gèrent aussi le cache offline (TTL 15 min, `src/services/cache.ts`).

## Contenus liés à un lieu — `GET /lieu/{id}/contenus`

Personnalités, tourisme, patrimoine et gastronomie réellement rattachés à une
région/un département/une commune via le champ ACF "Lieu associé"
(`vjr_lieu_associe`, post_object, cible uniquement region/departement/commune
— jamais un village). Payload volontairement léger (pas de `content` complet)
pour les listes ; le mobile recharge la fiche complète via `getContentDetail(id)`
avant d'ouvrir l'écran de détail.

```json
{ "items": [{ "id": 9428, "title": "…", "excerpt": "…", "permalink": "…", "image": null, "type": "people", "category": { "id": 34, "slug": "personnalites-arts", "name": "Artistes et Musiciens" } }] }
```

`type` est dérivé de la catégorie (`people`, `tourism`, `heritage`, `gastronomy`)
et correspond directement au `ContentType` mobile.

## Intégration site ↔ application

Côté WordPress (`wp-content/novamira-sandbox/vjr221-mobile-app-integration.php`,
hors dépôt mobile) :

- Shortcode `[vjr221_app_download]` : badges Play Store/App Store + QR code,
  pilotés par les options `vjr221_playstore_url`/`vjr221_appstore_url` (vides
  par défaut → état honnête "Bientôt disponible", jamais de lien fictif).
- Bandeau "Lire dans l'application" injecté sur chaque fiche (mobile uniquement),
  pointant vers `vjr221://open/{segment}/{id}` — le même mapping catégorie→segment
  que `src/services/deepLinks.ts` (`regions`/`departements`/`communes`/
  `quartiers-villages`/`annuaire`, avec remontée d'arbre pour les sous-catégories
  imbriquées de l'annuaire), donc les deux couches ne peuvent pas diverger sans
  que ce soit visible aux tests des deux côtés.
