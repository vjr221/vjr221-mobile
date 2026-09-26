# Checklist de tests sur appareil physique — VJR 221 Mobile

**Aucune case n’est cochée automatiquement.** À valider manuellement après install APK (release GitHub ou workflow `android-release`).

Version cible : **1.5.0** (versionCode 17) puis **1.6.x**.

## Matrice appareils (Phase A — bloquant)

| Appareil / OS | Install propre | MAJ depuis 1.4.x | Démarrage | Navigation | Offline | Notes |
|---------------|----------------|------------------|-----------|------------|---------|-------|
| Android 10/11 | [ ] | [ ] | [ ] | [ ] | [ ] | |
| Android 12/13 | [ ] | [ ] | [ ] | [ ] | [ ] | |
| Android 14/15/16 | [ ] | [ ] | [ ] | [ ] | [ ] | |
| RAM ≤ 3 Go | [ ] | — | [ ] | [ ] | [ ] | |
| 4G faible | — | — | [ ] | [ ] | [ ] | |
| Wi‑Fi | — | — | [ ] | [ ] | — | |
| Mode avion | — | — | [ ] | [ ] | [ ] | cache |
| Rotation / veille | — | — | [ ] | [ ] | — | |
| Retour arrière système | — | — | — | [ ] | — | |

## Fonctionnel (tous appareils)

- [ ] Splash puis accueil < 5 s, **sans écran noir bloqué**
- [ ] 5 onglets : Accueil, Explorer, Recherche, Favoris, Plus
- [ ] Région **hors Dakar** (ex. Kaffrine) s’ouvre avec contenu
- [ ] Bouton **Site web** → navigateur / Custom Tabs (pas reload in-app)
- [ ] Mode **Wolof** : titres régions (Diiwaanu …), labels UI
- [ ] Annuaire : liste, fiche, appel / WhatsApp si présents
- [ ] Favoris : ajout, kill app, toujours présents
- [ ] Recherche unifiée (texte + territoires)
- [ ] Deep link `https://vjr221.sn/region-de-dakar/` → fiche (app installée)
- [ ] Même lien sans app → navigateur / page application
- [ ] Plus : Annuaire in-app ; tarifs / contact → site

## Après chaque session

Noter : **date · modèle · Android · build SHA · ✅/❌ + détail**.  
Ne jamais cocher sans exécution réelle.
