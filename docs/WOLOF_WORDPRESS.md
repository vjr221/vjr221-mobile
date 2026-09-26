# Wolof — source WordPress (vague 8)

## Principe

| Priorité | Source |
|----------|--------|
| 1 | Champs API `title_wo`, `excerpt_wo`, `content_wo` (WordPress) |
| 2 | Couche locale mobile `contentWolof*.ts` (repli) |
| 3 | Contenu français |

L'app est prête : dès qu'un champ `*_wo` est renvoyé par l'API, il est affiché. Sinon, le pack mobile local prend le relais.

## Posts (`wp/v2/posts`)

Enregistrer des meta :

- `title_wo` (string)
- `excerpt_wo` (string / HTML léger)
- `content_wo` (HTML ou Markdown simple type `### Jëmmal`)

Exposition REST :

```php
register_post_meta( 'post', 'title_wo', [
  'type'         => 'string',
  'single'       => true,
  'show_in_rest' => true,
] );
// idem excerpt_wo, content_wo
```

Ou via `rest_prepare_post` :

```php
$data->data['title_wo']   = get_post_meta( $post->ID, 'title_wo', true );
$data->data['excerpt_wo'] = get_post_meta( $post->ID, 'excerpt_wo', true );
$data->data['content_wo'] = get_post_meta( $post->ID, 'content_wo', true );
```

## Geo API (`vjr221/v1`)

Sur régions / départements / communes / villages (liste + détail) :

- `title_wo`
- `excerpt_wo`
- `content_wo` (détail uniquement)

L'app les mappe déjà (`geoRepository` + `GeoDetailCard`).

## Migration progressive

1. 14 régions en priorité côté WP
2. Gastronomie / UNESCO / lieux phares
3. Alléger ensuite la couche locale mobile (garder un repli offline minimal)

## Test rapide

```bash
curl -s 'https://vjr221.sn/wp-json/wp/v2/posts?slug=region-de-dakar&_fields=title,title_wo,excerpt_wo,content_wo'
curl -s 'https://vjr221.sn/wp-json/vjr221/v1/regions/2153'
```
