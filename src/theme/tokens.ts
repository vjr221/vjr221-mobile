/**
 * VJR 221 Mobile Design System 2026 — jetons de base.
 *
 * Palette et typographie reprises de l'identité déjà validée pour vjr221.sn
 * (artefact « VJR 221 — Wireframes modernisation » + page /application/) afin
 * que l'app reste le prolongement numérique naturel du site, pas une
 * interface générique consommant l'API.
 *
 * `spacing` / `radii` / `type` / `fonts` sont neutres (identiques clair/sombre).
 * Les couleurs, elles, dépendent du thème : voir `lightPalette` / `darkPalette`
 * et le hook `useTheme()` dans `./ThemeProvider`. Le mode sombre n'est pas une
 * inversion de la palette claire : chaque valeur est choisie séparément
 * (fond vert-nuit profond plutôt que noir neutre, terre/safran éclaircis pour
 * rester lisibles, ombres neutres plutôt que teintées savane).
 */

export type ColorScheme = 'light' | 'dark';

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 } as const;

export const radii = { sm: 10, md: 14, lg: 18, xl: 24, pill: 999 } as const;

/** Échelle typographique (tailles) ; les graisses vivent dans `fonts`. */
export const type = {
  display: 34,
  h1: 26,
  h2: 20,
  bodyLg: 17,
  body: 15,
  caption: 13,
  micro: 11,
} as const;

/**
 * Noms de familles tels qu'exposés par les paquets @expo-google-fonts,
 * chargés par `ThemeProvider` via `useFonts`. Quatre rôles, comme sur le site :
 * Unbounded (display), Instrument Sans (corps/UI), Lora italique (citations
 * éditoriales), IBM Plex Mono (kickers/labels/métadonnées).
 */
export const fonts = {
  displayBold: 'Unbounded_700Bold',
  displayExtraBold: 'Unbounded_800ExtraBold',
  displaySemiBold: 'Unbounded_600SemiBold',
  body: 'InstrumentSans_400Regular',
  bodyMedium: 'InstrumentSans_500Medium',
  bodySemiBold: 'InstrumentSans_600SemiBold',
  bodyBold: 'InstrumentSans_700Bold',
  serifItalic: 'Lora_400Regular_Italic',
  mono: 'IBMPlexMono_500Medium',
  monoSemiBold: 'IBMPlexMono_600SemiBold',
} as const;

export interface Palette {
  scheme: ColorScheme;
  bg: string;
  bgAlt: string;
  surface: string;
  surfaceSoft: string;
  ink: string;
  inkSoft: string;
  line: string;
  savane: string;
  savane2: string;
  terre: string;
  terreStrong: string;
  safran: string;
  rouge: string;
  onSavane: string;
  onSavaneSoft: string;
  white: string;
  /** Composantes RGB (sans alpha) utilisées pour les ombres teintées. */
  shadowRgb: string;
}

export const lightPalette: Palette = {
  scheme: 'light',
  bg: '#F4E9D6',
  bgAlt: '#EBDEC0',
  surface: '#FFFFFF',
  surfaceSoft: '#FBF5E8',
  ink: '#20241F',
  inkSoft: '#55604F',
  line: '#DDD0B3',
  savane: '#123322',
  savane2: '#1B4A32',
  terre: '#BE5A21',
  terreStrong: '#A34C1B',
  safran: '#E5A324',
  rouge: '#9B2C33',
  onSavane: '#F4E9D6',
  onSavaneSoft: 'rgba(244,233,214,.78)',
  white: '#FFFFFF',
  shadowRgb: '18,51,34',
};

/** « Nuit sénégalaise » — redessinée, pas une inversion de la palette claire. */
export const darkPalette: Palette = {
  scheme: 'dark',
  bg: '#11170F',
  bgAlt: '#1A211A',
  surface: '#1C231B',
  surfaceSoft: '#222A21',
  ink: '#F1ECDC',
  inkSoft: '#B7B6A2',
  line: '#37402F',
  savane: '#0D1A12',
  savane2: '#16301F',
  terre: '#E38A4C',
  terreStrong: '#F0A165',
  safran: '#F0C25E',
  rouge: '#E27A81',
  onSavane: '#F1ECDC',
  onSavaneSoft: 'rgba(241,236,220,.78)',
  white: '#FFFFFF',
  shadowRgb: '0,0,0',
};

export function palette(scheme: ColorScheme): Palette {
  return scheme === 'dark' ? darkPalette : lightPalette;
}

export type ShadowLevel = 'subtle' | 'raised' | 'floating';

/**
 * Trois niveaux d'élévation, à utiliser par rôle (voir le design system :
 * subtile pour les cartes en liste, surélevée pour le hero/CTA, flottante
 * pour une barre d'actions ou une modale) — jamais partout par réflexe.
 */
export function shadow(p: Palette, level: ShadowLevel) {
  const rgb = p.shadowRgb;
  switch (level) {
    case 'raised':
      return {
        shadowColor: `rgb(${rgb})`,
        shadowOpacity: p.scheme === 'dark' ? 0.4 : 0.16,
        shadowOffset: { width: 0, height: 12 },
        shadowRadius: 28,
        elevation: 8,
      } as const;
    case 'floating':
      return {
        shadowColor: `rgb(${rgb})`,
        shadowOpacity: p.scheme === 'dark' ? 0.5 : 0.26,
        shadowOffset: { width: 0, height: 20 },
        shadowRadius: 44,
        elevation: 14,
      } as const;
    case 'subtle':
    default:
      return {
        shadowColor: `rgb(${rgb})`,
        shadowOpacity: p.scheme === 'dark' ? 0.3 : 0.08,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 14,
        elevation: 3,
      } as const;
  }
}
