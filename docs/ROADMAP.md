# Roadmap — VJR 221 Mobile

## Livré (1.5.0)

- Accueil, recherche unifiée (publications + territoires + annuaire), favoris, partage.
- Explorer : univers éditoriaux WordPress + territoires (région → village) + annuaire.
- Urgences nationales (15 / 17 / 18), FR/Wolof, thème clair/sombre/système.
- Cache offline TTL 15 min, deep links (schéma app + permaliens vjr221.sn).
- Build Android de production via GitHub Actions (APK signé, bundle JS embarqué).
- Stabilité démarrage : pas de SDK natif Sentry ni expo-location (évite le crash post-1.2.1).

## Prochaine vague (après validation appareil)

- Réintroduire `expo-location` de façon optionnelle et défensive (GPS « près de moi »).
- Observabilité (Sentry ou équivalent) **après** le premier rendu JS, jamais au cold start.
- Compte utilisateur réel et sync favoris serveur (contrats déjà dans `authService` / `favoritesSyncService`).
- Notifications push (contrat prêt, aucun envoi réel aujourd’hui).
- EAS Build / stores (Play Console, App Store) — comptes à créer côté porteur.
- Carte interactive embarquée (aujourd’hui : ouverture navigation externe).

## Hors scope immédiat

- Contenu métier fictif ou inventé : interdit — uniquement l’API vjr221.sn.
