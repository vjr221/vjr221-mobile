/**
 * VJR 221 Mobile Design System 2026 — jetons de base.
 *
 * Direction produit (architecte / UI) :
 * - L’app est le prolongement tactile de vjr221.sn, pas un shell générique.
 * - Identité sénégalaise : savane (vert profond), terre (ocre), safran (or).
 * - Typo de marque : Unbounded (titres), Instrument Sans (UI), Lora (citations),
 *   IBM Plex Mono (métadonnées / kickers).
 * - Surfaces claires, ombres mesurées, boutons pilule, pas de chrome administratif.
 * - Mode sombre = « nuit sénégalaise » (vert-nuit), pas d’inversion pure.
 */

export type ColorScheme = 'light' | 'dark';

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 } as const;

/** Rayons : un cran plus généreux qu’un admin panel, toujours lisible sur mobile. */
export const radii = { sm: 12, md: 16, lg: 20, xl: 28, pill: 999 } as const;

/** Échelle typographique (tailles). Les graisses vivent dans `fonts`. */
export const type = {
  display: 34,
  h1: 26,
  h2: 20,
  bodyLg: 17,
  body: 15,
  caption: 13,
  micro: 11,
} as const;

/** Line-heights recommandées pour chaque grade (lisibilité encyclopédique). */
export const leading = {
  display: 40,
  h1: 32,
  h2: 26,
  bodyLg: 26,
  body: 22,
  caption: 18,
  micro: 14,
} as const;

/**
 * Noms de familles @expo-google-fonts, chargés par ThemeProvider.
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

/** Durées d’animation (ms) — feedback press, slide détail, skeleton. */
export const motion = {
  press: 120,
  fade: 200,
  slide: 280,
  skeleton: 1100,
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
  safranText: string;
  shadowRgb: string;
}

export const lightPalette: Palette = {
  scheme: 'light',
  bg: '#F3E8D4',
  bgAlt: '#E9DCC0',
  surface: '#FFFFFF',
  surfaceSoft: '#FBF6EB',
  ink: '#1C211B',
  inkSoft: '#4F5A48',
  line: '#E0D3B6',
  savane: '#0F2E1F',
  savane2: '#1A4530',
  terre: '#C45F24',
  terreStrong: '#A34C1B',
  safran: '#E8A82A',
  rouge: '#9B2C33',
  onSavane: '#F3E8D4',
  onSavaneSoft: 'rgba(243,232,212,.80)',
  white: '#FFFFFF',
  safranText: '#7A5610',
  shadowRgb: '15,46,31',
};

/** Nuit sénégalaise — redessinée, pas une inversion. */
export const darkPalette: Palette = {
  scheme: 'dark',
  bg: '#0E140D',
  bgAlt: '#161D15',
  surface: '#1A2219',
  surfaceSoft: '#222B20',
  ink: '#F2EDDD',
  inkSoft: '#B4B39E',
  line: '#2F382A',
  savane: '#0B1710',
  savane2: '#142A1B',
  terre: '#E69255',
  terreStrong: '#F2A86E',
  safran: '#F2C666',
  rouge: '#E5858C',
  onSavane: '#F2EDDD',
  onSavaneSoft: 'rgba(242,237,221,.78)',
  white: '#FFFFFF',
  safranText: '#F2C666',
  shadowRgb: '0,0,0',
};

export function palette(scheme: ColorScheme): Palette {
  return scheme === 'dark' ? darkPalette : lightPalette;
}

export type ShadowLevel = 'subtle' | 'raised' | 'floating';

/**
 * Trois niveaux d’élévation :
 * - subtle : cartes en liste
 * - raised : hero / CTA
 * - floating : tab bar / modale
 */
export function shadow(p: Palette, level: ShadowLevel) {
  const rgb = p.shadowRgb;
  switch (level) {
    case 'raised':
      return {
        shadowColor: `rgb(${rgb})`,
        shadowOpacity: p.scheme === 'dark' ? 0.42 : 0.14,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 24,
        elevation: 7,
      } as const;
    case 'floating':
      return {
        shadowColor: `rgb(${rgb})`,
        shadowOpacity: p.scheme === 'dark' ? 0.5 : 0.22,
        shadowOffset: { width: 0, height: 16 },
        shadowRadius: 36,
        elevation: 12,
      } as const;
    case 'subtle':
    default:
      return {
        shadowColor: `rgb(${rgb})`,
        shadowOpacity: p.scheme === 'dark' ? 0.28 : 0.07,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 12,
        elevation: 2,
      } as const;
  }
}
