# API VJR 221

La configuration par défaut utilise `https://vjr221.sn/wp-json/wp/v2`.

## Endpoints confirmés

- `GET /posts?per_page=6&_embed` : publications récentes pour l'accueil.
- `GET /posts?per_page=12&page={n}&search={term}&_embed` : recherche paginée.
- `GET /posts?include={id}&per_page=1&_embed` : fiche de contenu.

La réponse est transformée dans `src/services/contentRepository.ts`; aucun composant n'appelle une URL directement. L'API publique auditée ne fournit pas encore de type dédié aux régions, départements, communes ou entrées d'annuaire. Ces univers sont configurés dans `src/config/categories.ts` et restent explicitement indisponibles jusqu'à la publication d'un endpoint fiable.
