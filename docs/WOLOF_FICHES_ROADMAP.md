# VJR 221 — Chantier traduction Wolof des fiches

## Objectif

Étendre progressivement la traduction Wolof des fiches affichées dans l'application mobile VJR 221, sans modifier le contenu français et sans casser le mode hors ligne.

## État actualisé — 27 septembre 2026

- Application : ligne 1.5.0, architecture préparant la 1.6.0.
- Interface FR/Wolof : déjà opérationnelle.
- Source prioritaire en ligne : WordPress, champs `title_wo`, `excerpt_wo`, `content_wo`.
- Repli hors ligne : fichiers `src/i18n/contentWolof*.ts`.
- Couverture locale existante : **300 fiches uniques** réparties dans les packs `contentWolof.ts` et `contentWolofExtra.ts` à `contentWolofExtraH.ts`.
- Contrôle de couverture actuel : **300 clés uniques, 0 doublon**.
- Les 14 régions disposent déjà d'un contenu Wolof dans le pack local et d'un mécanisme d'import CMS.
- Le plugin WordPress `vjr221-wolof` expose les trois champs Wolof à l'API REST et à `vjr221/v1`.

## Règle éditoriale

Pour chaque fiche :

1. Traduire **titre + extrait + corps**.
2. Préserver les noms propres, lieux, institutions, sigles et données factuelles.
3. Ne pas inventer de coordonnées, chiffres ou informations absentes du français.
4. Conserver la structure Markdown des fiches (`###`, paragraphes, listes).
5. Employer un Wolof naturel et compréhensible, avec les termes français conservés lorsqu'ils sont les noms officiels ou les plus usuels.
6. Faire une relecture de cohérence avant intégration.
7. Publier d'abord dans WordPress lorsque la fiche existe côté CMS.
8. Ajouter au pack local uniquement comme repli hors ligne / couverture immédiate.
9. Ne jamais remplacer une traduction CMS existante sans vérification préalable.

## Ordre de traitement

### Phase 1 — couverture prioritaire

- 14 régions : déjà couvertes, à contrôler comme référence linguistique.
- Patrimoine majeur et UNESCO.
- Tourisme et sites emblématiques.
- Gastronomie sénégalaise.
- Culture, rites, langues et artisanat.

### Phase 2 — territoire

- Départements.
- Communes et localités disposant d'une fiche éditoriale.
- Nature, parcs, réserves et plages.

### Phase 3 — personnes et vie publique

- Personnalités.
- Institutions et acteurs publics disposant d'une fiche encyclopédique.
- Histoire et grandes figures.

### Phase 4 — annuaire et contenus dynamiques

- Fiches professionnelles réellement publiées.
- Contenus d'actualité lorsque la traduction éditoriale est pertinente.
- Vérification du comportement quand aucune traduction n'existe.

## Contrôle qualité

Une fiche est considérée comme « traduite » uniquement si :

- `title_wo` est renseigné ;
- `excerpt_wo` est renseigné lorsque l'extrait français existe ;
- `content_wo` est renseigné pour une fiche détaillée ;
- les paragraphes sont correctement séparés ;
- l'app affiche effectivement le Wolof depuis l'API ;
- le repli local reste valide lorsque le réseau est indisponible.

## Architecture à conserver

La résolution actuelle reste :

**WordPress Wolof → pack local Wolof → français**

Le chantier ne doit pas transformer les traductions éditoriales en textes UI codés en dur.

## Première livraison de cette branche

Cette branche formalise le chantier et servira de base aux prochaines vagues de traduction. Les traductions déjà présentes ne sont pas réécrites dans cette phase de cadrage.
## Vagues consolidées — 27 septembre 2026

- Vagues 8 à 12 : intégrées dans les packs locaux, avec relectures ciblées.
- Vagues 13 à 17 : consolidation QA, contrôle des clés, doublons et apostrophes ; aucune nouvelle fiche n'est ajoutée tant que la correspondance avec les fiches CMS n'est pas suffisamment vérifiable.
- **État local : 300 fiches / 300 clés uniques / 0 doublon.**
- Une régression connue d'apostrophe ASCII (d'année) est désormais couverte par un test dédié.
- Aucun APK n'est requis pour ces contrôles de contenu : le chantier reste limité aux sources i18n, tests et documentation.

