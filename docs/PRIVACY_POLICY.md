# Politique de confidentialité — VJR 221 (brouillon)

**⏳ Brouillon technique, à faire valider par un juriste avant publication.**
Ce document décrit factuellement ce que l'application fait aujourd'hui
(vérifié dans le code) — il ne doit pas être publié tel quel sans relecture
légale ni mise à jour de la date/coordonnées de contact réelles.

## Ce que l'application collecte

**Rien n'est envoyé à un serveur autre que vjr221.sn**, et uniquement pour
charger du contenu public (régions, communes, annuaire, actualités).

- **Favoris** : stockés uniquement sur l'appareil (`AsyncStorage`), jamais
  transmis à un serveur (aucun backend de compte n'existe — voir
  `src/services/authService.ts`).
- **Préférence de langue** : stockée localement sur l'appareil.
- **Préférences de notifications** : stockées localement sur l'appareil.
  Aucune notification n'est envoyée actuellement.
- **Aucun identifiant publicitaire, aucun tracker analytique, aucun cookie
  tiers** n'est intégré dans le code de l'application à ce jour.
- **Aucune géolocalisation automatique** de l'utilisateur (aucune dépendance
  de géolocalisation n'est installée dans le projet).

## Appels réseau effectués par l'application

- `https://vjr221.sn/wp-json/wp/v2/...` (publications)
- `https://vjr221.sn/wp-json/vjr221/v1/...` (régions, départements,
  communes, annuaire)

Ces appels sont des lectures publiques, sans authentification, identiques à
la consultation du site web vjr221.sn dans un navigateur.

## Liens externes

L'application peut ouvrir, à l'initiative de l'utilisateur (bouton
"Appeler", "Localiser", "Site web", "Partager") :

- l'application Téléphone de l'appareil,
- l'application Plans/Maps par défaut,
- le navigateur web,
- le système de partage natif de l'appareil.

Aucune donnée n'est transmise automatiquement à ces services sans action
explicite de l'utilisateur.

## Évolutions futures nécessitant une mise à jour de ce document

Ce document devra être révisé **avant** l'activation de :

- un système de compte utilisateur (`src/services/authService.ts` — non
  activé),
- des notifications push réelles (`src/services/notificationService.ts` —
  non activé),
- tout outil d'analytics.

## Contact

⏳ **À compléter** : adresse email/formulaire de contact réel du porteur du
projet VJR 221, et date de dernière mise à jour.
