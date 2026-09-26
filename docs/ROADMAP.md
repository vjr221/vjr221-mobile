# Roadmap — VJR 221 Mobile

> Chef de projet · décision 2026-09-26 · cible **1.6.0 consolidation** puis stores.

## Livré (1.5.0 — pre-release)

- Accueil, recherche unifiée, favoris locaux, partage, FR/Wolof (pack local), thème.
- Explorer territoires (région → village) + annuaire + contenus liés (`lieu/{id}/contenus`).
- Stabilité démarrage : **aucun** module natif Sentry / expo-location au cold start.
- Custom Tabs, App Links restreints, cleanExcerpt, vague 8 priorité API `*_wo`.
- Plugin WordPress **vjr221-wolof** déployé (14/14 régions en prod).

## Décision produit

La 1.5.0 **n’est pas** une release finale grand public tant que la matrice appareils n’est pas verte.  
On ne réécrit pas l’app : on consolide. Les trois leviers qui changent l’expérience sont **GPS défensif**, **Explorer enrichi**, **compte/favoris sync** — dans cet ordre **après** fiabilité.

## 1.6.0 — Phases (ordre strict)

### Phase A — Fiabilité (bloquant stores)

| Action | Owner | Critère de done |
|--------|-------|-----------------|
| Matrice appareils Android 10→16, RAM faible, 4G, offline, MAJ 1.4→1.5 | Humain | Checklist `DEVICE_TESTING_CHECKLIST.md` cochée |
| Validation deep links (installé / non installé) | Humain | Permalien → app ou page /application/ |
| Monitoring **post-premier rendu** (pas cold start) | Dev | ✅ Contrat livré |
| Déployer plugin Wolof + seed 14 régions | WP | ✅ 14/14 en prod |
| Corriger préfixe JSON `1{...}` côté serveur si possible | WP | Client strip déjà en place |
| Pre-release vc18 : boot + GPS + À découvrir + Wolof | Humain | ✅ validé 2026-09-26 |

### Phase B — Géoloc défensive

| Action | Statut |
|--------|--------|
| Module isolé, `import()` dynamique, **jamais** au démarrage | ✅ |
| Permission uniquement au clic « Près de moi » | ✅ |
| Timeout + fallback UI si refus / unavailable | ✅ |
| Distance + ouverture itinéraire | ✅ |
| Validation appareil GPS réel | ✅ vc18 |

### Phase C — Annuaire + proximité

- Filtres catégories + « Près de moi » branché sur GPS B ✅

### Phase D — Explorer découverte

| Action | Statut |
|--------|--------|
| Bloc « À découvrir ici » par territoire (`lieu/{id}/contenus`) | ✅ |
| Types API réels (tourism/heritage/people/…) | ✅ |
| Diversification ≤3/type, max 10, round-robin | ✅ |
| Données API only (rien d’inventé) | ✅ |
| Carte interactive | plus tard (externe suffit) |

### Phase E — Compte transversal

- JWT / Application Passwords uniquement si contrat auth stable.
- Favoris sync site ↔ app (`favoritesSyncService` déjà skeleton).
- Préférences langue + notif.

### Phase F — Distribution

- APK **stable** (plus pre-release).
- Page `/application/` synchronisée.
- Play Store → TestFlight iOS.

## Hors scope 1.6.0

- Réécrire la navigation ou le design system.
- Contenu inventé hors API.
- Sentry / expo-location en import **statique** (interdit).

## Indicateurs de succès 1.6.0

1. Taux d’ouverture sans crash > 99 % sur matrice A.
2. Mode Wolof : 14 régions depuis CMS ou pack local sans écran vide.
3. « Autour de moi » utile sur ≥ 1 appareil GPS réel. ✅
4. Une release GitHub **non** pre-release + notes claires.
