# VJR 221 — Plugin Wolof

Expose `title_wo`, `excerpt_wo`, `content_wo` pour que l’app mobile (vague 8) priorise le CMS sur le pack local.

## Installation

1. Copier le dossier `vjr221-wolof/` dans `wp-content/plugins/`
2. Activer **VJR 221 — Wolof** dans Extensions
3. Outils → **VJR 221 Wolof** → *Importer les 14 régions*
4. Vérifier :

```bash
curl -s 'https://vjr221.sn/wp-json/wp/v2/posts?slug=region-de-dakar&_fields=title,title_wo,excerpt_wo,content_wo'
curl -s 'https://vjr221.sn/wp-json/vjr221/v1/regions/2153' | head -c 500
```

## Ce que fait le plugin

| Couche | Action |
|--------|--------|
| Meta post | `register_post_meta` + metabox édition |
| `wp/v2/posts` | Clés racine `title_wo`, `excerpt_wo`, `content_wo` |
| `vjr221/v1` | Enrichissement via `rest_post_dispatch` (liste + détail) |
| Filtre | `vjr221_geo_item` pour intégration native dans le plugin geo |

## Patch recommandé dans le plugin geo (optionnel mais propre)

Dans la construction de chaque item liste/détail :

```php
$item = apply_filters( 'vjr221_geo_item', $item, $post_id, 'list' );   // ou 'detail'
```

Sans ce patch, le fallback `rest_post_dispatch` du plugin Wolof enrichit quand même les réponses JSON.

## Priorité côté app mobile

1. Champs API `*_wo`
2. Pack local `contentWolof*.ts`
3. Français

## Sécurité

- Meta éditables uniquement par `edit_posts`
- Import seed réservé à `manage_options`
- Sanitize `wp_kses_post`
