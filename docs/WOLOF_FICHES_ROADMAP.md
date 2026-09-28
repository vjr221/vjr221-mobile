# VJR 221 — Chantier traduction Wolof des fiches

## Objectif

Étendre progressivement la traduction Wolof des fiches affichées dans l'application mobile VJR 221, sans modifier le contenu français et sans casser le mode hors ligne.

## État actualisé — 27 septembre 2026

- Application : ligne 1.5.0, architecture préparant la 1.6.0.
- Interface FR/Wolof : déjà opérationnelle.
- Source prioritaire en ligne : WordPress, champs `title_wo`, `excerpt_wo`, `content_wo`.
- Repli hors ligne : fichiers `src/i18n/contentWolof*.ts`.
- Couverture locale existante : **396 fiches uniques** réparties dans les packs `contentWolof.ts` et `contentWolofExtra.ts` à `contentWolofExtraAI.ts`.
- Contrôle de couverture actuel : **396 clés uniques, 0 doublon**.
- Les 14 régions disposent déjà d'un contenu Wolof dans le pack local et d'un mécanisme d'import CMS.
- Le plugin WordPress `vjr221-wolof` expose les trois champs Wolof à l'API REST et à `vjr221/v1`.

## Contrôle QA — 27 septembre 2026

- Corpus local : **396 fiches / 396 clés uniques / 0 doublon**.
- Régression apostrophe `d'année` : **0 occurrence**.
- Apostrophe ASCII entre lettres : **0 occurrence** dans les titres, extraits et corps locaux.
- Tests dédiés présents dans `src/i18n/contentWolof.test.ts`.
- Aucun build APK requis pour cette étape éditoriale.

## Règle éditoriale

Pour chaque fiche :

1. Traduire **titre + extrait + corps**.
2. Préserver les noms propres, lieux, institutions, sigles et données factuelles.
3. Ne pas inventer de coordonnées, chiffres ou informations absentes du français.
4. Conserver la structure Markdown des fiches (`###`, paragraphes, listes).
5. Employer un Wolof naturel et compréhensible, avec les termes français conservés lorsqu'ils sont les noms officiels ou les plus usuels.
6. Éviter l'apostrophe ASCII `'` à l'intérieur des mots Wolof ; employer `’` ou des guillemets doubles lorsque la syntaxe TypeScript l'exige.
7. Faire une relecture de cohérence avant intégration.
8. Publier d'abord dans WordPress lorsque la fiche existe côté CMS.
9. Ajouter au pack local uniquement comme repli hors ligne / couverture immédiate.
10. Ne jamais remplacer une traduction CMS existante sans vérification préalable.

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


## Mise à jour — vague 55

- **Vague 55 : 6 fiches territoriales vérifiées ajoutées** — Département de Thiès, Département de Tivaouane, Département de Bakel, Département de Fatick, Département de Rufisque et Département de Sédhiou. Les fiches correspondantes sont publiées sur VJR 221 et étaient absentes du pack Wolof local avant cette vague.
- **État local visé après la vague 55 : 442 fiches uniques.**
- La recherche du corpus a confirmé que `reserve-speciale-faune-gueumbeul` n'est pas dupliquée dans les packs locaux actuels ; l'ancienne alerte de déduplication est donc obsolète.
- Aucun APK n'est requis pour cette vague : les changements sont éditoriaux et seront validés par la CI.

## Vagues consolidées — 27 septembre 2026

- Vagues 8 à 12 : intégrées dans les packs locaux, avec relectures ciblées.
- Vagues 13 à 17 : consolidation QA, contrôle des clés, doublons et apostrophes.
- **Vague 18 : 2 fiches patrimoine vérifiées ajoutées** — Parc national du Niokolo-Koba et Place du Souvenir Africain de Dakar.
- **Vague 19 : 2 fiches culture/personnalité vérifiées ajoutées** — Musée de la Femme Henriette Bathily à Dakar et Grand Théâtre national Doudou Ndiaye Coumba Rose.
- **Vague 20 : 3 fiches nature/territoire vérifiées ajoutées** — Mont Assirik, Yoff-Layène et les collines de Kédougou.
- **Vague 21 : 3 fiches nature/mémoire vérifiées ajoutées** — Île d’Egueye, Désert de Lompoul et Boubacar Joseph Ndiaye.
- **Vague 22 : 3 fiches nature/patrimoine vérifiées ajoutées** — Chutes de Dindéfélo, Wanar et Réserve naturelle communautaire de Palmarin.
- **Vague 23 : 3 fiches culture/histoire vérifiées ajoutées** — Fodé Kaba Doumbouya, Yeela et patrimoine diola de Casamance.
- **Vague 24 : 3 fiches nature/culture vérifiées ajoutées** — Musée Boribana, Parc national des Îles de la Madeleine et Réserve ornithologique de Kalissaye.
- **Vague 25 : 3 fiches nature/territoire vérifiées ajoutées** — Réserve naturelle communautaire de Tocc-Tocc, Parc national de la Basse-Casamance et Île de Karabane.
- **Vague 26 : 3 fiches nature vérifiées ajoutées** — Parc national des Oiseaux du Djoudj, Réserve de Fathala et Parc national de la Langue de Barbarie. Séléki et Camp de Simenti ont été vérifiés comme déjà disponibles/couverts séparément et n’ont pas été dupliqués.
- Une fiche candidate déjà présente dans le corpus (`cafe-touba`) a été détectée et n'a pas été dupliquée.
- **Vague 27 : 4 fiches nature/patrimoine vérifiées ajoutées ou enrichies** — Réserve spéciale de faune de Guembeul, Mangroves de Casamance, Case ronde sérère, Royaume du Jolof et Baobab d’Iwol.\n- **Vague 28 : 5 fiches patrimoine/culture vérifiées ajoutées** — Cases à étage de Mlomp, Cases à impluvium du royaume Bandial, Galerie nationale des Arts, École nationale des Arts et Marché Kermel.\n- **Vague 29 : 5 fiches patrimoine/culture/artisanat vérifiées ajoutées** — Gare de Thiès, Marché Sandaga, patrimoine industriel du Sénégal, artisanat traditionnel sénégalais et patrimoine fluvial de l’Est.\n- **Vague 30 : 2 fiches culture vérifiées ajoutées** — Mankanya et teinture traditionnelle à l’indigo.\n- **Vague 31 : 2 fiches patrimoine/culture vérifiées ajoutées** — patrimoine sérère et maisons à signares de Saint-Louis et Gorée.\n- **Vague 32 : 5 fiches culture/patrimoine/artisanat vérifiées ajoutées** — Gumbe, palmier à huile de Casamance, métiers de la forge à Kaffrine, Chambre de Commerce de Dakar et village d’Iwol.\n- **Vague 33 : 4 fiches nature/culture vérifiées ajoutées** — Réserve de Bandia, Camp de Simenti, Réserve spéciale de faune de Guéumbeul et Galerie nationale des Arts.\n- **Vague 34 : 6 fiches patrimoine religieux/éducatif et faune vérifiées ajoutées** — Daara El Hadji Djamil Ndao, Essaout, Cathédrale de Saint-Louis, Grande Mosquée de Dakar, Mosquée Massalikul Jinaan et Calao à bec rouge.\n- **Vague 35 : 6 fiches patrimoine religieux, nature et gastronomie vérifiées ajoutées** — Grande Mosquée de Tivaouane, Grande Mosquée de Touba, Pèlerinage marial de Popenguine, Parc national du Delta du Saloum, Tamarinier et Calao terrestre.\n- **Vague 36 : 4 fiches patrimoine, nature et institutions vérifiées ajoutées** — Grande Mosquée Omarienne, Phare des Mamelles, Crocodile du Nil et Palais de la République.\n- **Vague 37 : 4 fiches patrimoine/culture vérifiées ajoutées** — Les ethnies du Sénégal, Le conte au Sénégal, Le Palor et le réseau des musées et établissements culturels publics.\n- **Vague 38 : 4 fiches culture/patrimoine vérifiées ajoutées** — Festival du Sahel, Festival international de Sédhiou, théâtre au Sénégal et SOGEPA SN.
- **Vague 39 : 4 fiches cinéma/arts visuels vérifiées ajoutées** — Cinéma sénégalais, arts visuels au Sénégal, Biennale de Dakar (Dak’Art) et festivals de cinéma au Sénégal.
- **Vague 40 : 4 fiches artistes/musiciens vérifiées ajoutées** — Takeifa, Awa Ly, Yoro Ndiaye et Nuru Kane.
- **Vague 41 : 4 fiches arts visuels/littérature vérifiées ajoutées** — Papa Ibra Tall, Moustapha Dimé, Mamadou Gomis et Faty Sow Kane.
- **Vague 42 : 4 fiches littérature/scène contemporaine vérifiées ajoutées** — Ibrahima Sall, Aminata Maïga Ka, Pape Amadou Seck et Mamadou Diaw.
- **Vague 43 : 4 fiches spectacle/arts visuels vérifiées ajoutées** — Ousseynou Bissichi, Ismaël Thiam, Joëlle le Bussy et Aïssa Dione.
- **Vague 44 : 4 fiches cinéma/audiovisuel vérifiées ajoutées** — Moussa Bathily, Samba Félix Ndiaye, Alassane Diago et Sada Thioub.
- **Vague 45 : 5 fiches cinéma d’auteur/audiovisuel vérifiées ajoutées** — Mansour Sora Wade, Joseph Gaï Ramaka, Dyana Gaye, Moussa Touré et Halima Gadji.\n- **Vague 46 : 4 fiches cinéma/audiovisuel ajoutées** — Ousmane William Mbaye, Safi Faye, Alain Gomis et Moussa Sène Absa.\n- **Vague 47 : 4 fiches musique vérifiées ajoutées** — Didier Awadi, Doudou Ndiaye Rose, Wasis Diop et Cheikh Lô.\n- **Vague 48 : 5 fiches musique urbaine vérifiées ajoutées** — Carlou-D, Sister Fa, Fou Malade, Keyti et Daara J Family.\n- **Vague 49 : 4 fiches musique/patrimoine musical vérifiées ajoutées** — Ablaye Cissoko, Seckou Keita, Positive Black Soul et Orchestre Baobab.\n- **Vague 50 : 4 fiches musique/hip-hop vérifiées ajoutées** — El Hadj N’Diaye, Ngaaka Blindé, Dip Doundou Guiss et Youssou N’Dour.\n- **Vague 51 : 4 fiches cinéma/audiovisuel vérifiées ajoutées** — Marième Myriam Niang, Rokhaya Niang, Mati Diop et Djibril Diop Mambéty.\n- **Vague 52 : 3 nouvelles fiches culture/institutions vérifiées ajoutées** — Le Ndëpp, Centre culturel régional de Sédhiou et Direction des Arts du Sénégal. FESNAC a été détecté comme déjà présent dans le noyau historique et n’a pas été dupliqué.
- **Vague 53 : 6 fiches culturelles régionales vérifiées ajoutées** — FESNAC à Kaffrine, Festival international de Sédhiou, FEDERACS, Ligue Matam Slam, FERACK et Festival International de Jazz de Saint-Louis.
- **Vague 54 : 6 fiches culture, territoire et littérature vérifiées ajoutées** — Fatou Cissé, Andréya Ouamba, Mame Birame Diouf, Kolibantang, Lamine Konté et Nafissatou Dia Diouf.
- **État local : 436 fiches / 436 clés uniques visées après la vague 54.**
- Régression `d'année` : 0 occurrence.
- Apostrophe ASCII entre lettres : 0 occurrence.
- Les nouveaux packs AP/AQ/AR sont désormais inclus dans le scan automatique des apostrophes.
- **Point QA à traiter avant de certifier le corpus global** : la clé `reserve-speciale-faune-gueumbeul` existe dans le pack historique et dans ExtraW ; la version historique est conservée comme référence et la déduplication de la seconde occurrence reste à effectuer avec sauvegarde.\n- **État local : 421 fiches / 421 clés uniques visées après la vague 51.**
- Régression `d'année` : 0 occurrence.
- Apostrophe ASCII entre lettres : 0 occurrence.
- La fiche Douta Seck déjà présente dans le corpus a été détectée et non dupliquée lors de la vague 19.
- Aucun APK n'est requis pour ces contrôles de contenu : le chantier reste limité aux sources i18n, tests et documentation.

## Mise à jour — vague 57

- **Vague 57 : consolidation de 3 fiches patrimoine/nature existantes** — Musée Boribana de Gorée, Parc national des Îles de la Madeleine et Réserve ornithologique de Kalissaye.
- Les trois fiches ont été **réécrites dans leur pack existant** afin d'améliorer le naturel du Wolof, la séparation des idées et la cohérence du vocabulaire de conservation ; aucune nouvelle clé ni aucun doublon n'a été créé.
- Le contenu français n'est pas modifié et les informations propres aux fiches sont conservées sans ajout spéculatif.
- Aucun APK n'est requis à ce stade : validation par CI avant toute prochaine release.

## Mise à jour — vague 58

- **Vague 58 : consolidation littérature et création contemporaine** — Ibrahima Sall, Aminata Maïga Ka et Mamadou Diaw.
- Réécriture ciblée des textes Wolof existants : formulations plus naturelles, meilleure articulation entre parcours, création, société et transmission, sans ajouter de faits biographiques non établis.
- Test dédié ajouté pour contrôler présence, structure Markdown et longueur minimale du contenu.
- Validation CI requise avant poursuite de la chaîne ; aucun APK intermédiaire.


## Mise à jour — vague 59

- **Vague 59 : consolidation des doublons historiques et renforcement du contrôle d’intégrité** — l’audit source a révélé 20 clés présentes dans plusieurs packs locaux, dont Pape Amadou Seck. Les occurrences anciennes ont été retirées des packs précédents, en conservant les versions les plus récentes/enrichies. La couverture fusionnée reste sans doublon.
- Ajout d’un test source qui détecte directement les clés dupliquées entre tous les packs Wolof, en plus du contrôle sur le corpus fusionné.
- Aucun nouveau slug créé ; aucun contenu français modifié.
- Aucun APK intermédiaire : la CI doit valider la consolidation avant la prochaine vague.


## Mise à jour — vague 60

- **Vague 60 : consolidation de 3 profils de création existants** — Oumou Sy, Adama Paris et Nzinga Biegueng Mboup.
- Les formulations génériques ont été remplacées par des textes Wolof structurés autour des éléments déjà présents dans le corpus : couture/costume, mode/Dakar Fashion Week et architecture/Worofila.
- Aucun nouveau slug créé et aucun fait biographique supplémentaire non établi ajouté.
- Test dédié ajouté ; validation CI requise avant la prochaine vague. Aucun APK intermédiaire.


## Mise à jour — vague 61

- **Vague 61 : consolidation musique et danse** — Aminata Fall, Mamy Victory et Baïdy Ba.
- Les trois fiches existantes ont été approfondies en Wolof avec des sections structurées et une formulation plus naturelle, sans ajouter de faits biographiques non établis dans le corpus.
- Aucun nouveau slug et aucun doublon créé.
- Test dédié ajouté ; CI requise avant la poursuite.
