# Wolof — source WordPress (vague 8 + plugin)

## Principe

| Priorité | Source |
|----------|--------|
| 1 | Champs API `title_wo`, `excerpt_wo`, `content_wo` (WordPress) |
| 2 | Couche locale mobile `contentWolof*.ts` (repli offline) |
| 3 | Contenu français |

L’app est prête (`contentRepository`, `geoRepository`, `GeoDetailCard`).

## Plugin livré

Dossier : **`wordpress/vjr221-wolof/`**

1. Copier dans `wp-content/plugins/vjr221-wolof/`
2. Activer l’extension
3. **Outils → VJR 221 Wolof → Importer les 14 régions**
4. Tester :

```bash
curl -s 'https://vjr221.sn/wp-json/wp/v2/posts?slug=region-de-dakar&_fields=title,title_wo,excerpt_wo,content_wo'
curl -s 'https://vjr221.sn/wp-json/vjr221/v1/regions/2153'
```

Le plugin :

- enregistre les meta `title_wo` / `excerpt_wo` / `content_wo` ;
- les expose en racine sur `wp/v2/posts` ;
- enrichit les réponses `vjr221/v1` (liste + détail) ;
- fournit le filtre `vjr221_geo_item` pour le plugin geo ;
- offre une metabox d’édition dans l’admin.

## Migration progressive

1. 14 régions (seed inclus)
2. Gastronomie / UNESCO / lieux phares
3. Alléger le pack mobile (garder un repli offline minimal)

## Patch optionnel plugin geo

```php
$item = apply_filters( 'vjr221_geo_item', $item, $post_id, 'detail' );
```
