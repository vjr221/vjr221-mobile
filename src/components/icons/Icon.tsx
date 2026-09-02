import Svg, { Path, Circle, Line, Polyline, Rect } from 'react-native-svg';

/**
 * Famille d'icônes trait fin de VJR 221 — mêmes tracés que ceux déjà
 * dessinés pour le site (wireframes + page /application/) : traits ronds,
 * 1.6–1.9px, jamais de remplissage plein sauf indication contraire.
 * Remplace les glyphes Unicode utilisés jusqu'ici comme icônes de catégories.
 */
export type IconName =
  | 'home'
  | 'territoires'
  | 'annuaire'
  | 'search'
  | 'heart'
  | 'heartFilled'
  | 'more'
  | 'phone'
  | 'pin'
  | 'share'
  | 'chevronRight'
  | 'chevronDown'
  | 'chevronLeft'
  | 'image'
  | 'compass'
  | 'check'
  | 'close'
  | 'mail'
  | 'globe'
  | 'clock'
  | 'bell'
  | 'user'
  | 'info'
  | 'sun'
  | 'moon'
  | 'settings';

export function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 1.7 }: { name: IconName; size?: number; color: string; strokeWidth?: number }) {
  const common = { fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {renderPaths(name, common)}
    </Svg>
  );
}

function renderPaths(name: IconName, common: { fill: string; stroke: string; strokeWidth: number; strokeLinecap: 'round'; strokeLinejoin: 'round' }) {
  switch (name) {
    case 'home':
      return (
        <>
          <Path d="M4 11.5 12 4l8 7.5" {...common} />
          <Path d="M6 10v9h12v-9" {...common} />
        </>
      );
    case 'territoires':
      return (
        <>
          <Path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" {...common} />
          <Line x1="9" y1="4" x2="9" y2="18" {...common} />
          <Line x1="15" y1="6" x2="15" y2="20" {...common} />
        </>
      );
    case 'annuaire':
      return (
        <>
          <Rect x="4" y="3" width="10" height="18" {...common} />
          <Rect x="14" y="9" width="6" height="12" {...common} />
        </>
      );
    case 'search':
      return (
        <>
          <Circle cx="11" cy="11" r="7" {...common} />
          <Line x1="21" y1="21" x2="16.65" y2="16.65" {...common} />
        </>
      );
    case 'heart':
      return <Path d="M12 20.5s-7.5-4.6-9.6-9C.8 7.7 2.8 4 6.4 4c2 0 3.4 1 5.6 3.2C14.2 5 15.6 4 17.6 4 21.2 4 23.2 7.7 21.6 11.5 19.5 15.9 12 20.5 12 20.5Z" {...common} />;
    case 'heartFilled':
      return <Path d="M12 20.5s-7.5-4.6-9.6-9C.8 7.7 2.8 4 6.4 4c2 0 3.4 1 5.6 3.2C14.2 5 15.6 4 17.6 4 21.2 4 23.2 7.7 21.6 11.5 19.5 15.9 12 20.5 12 20.5Z" {...common} fill={common.stroke} />;
    case 'more':
      return (
        <>
          <Circle cx="5" cy="12" r="1.6" fill={common.stroke} stroke="none" />
          <Circle cx="12" cy="12" r="1.6" fill={common.stroke} stroke="none" />
          <Circle cx="19" cy="12" r="1.6" fill={common.stroke} stroke="none" />
        </>
      );
    case 'phone':
      return <Path d="M6 3h4l2 5-2.5 2.5a12 12 0 0 0 6 6L18 14l5 2v4c0 1.1-.9 2-2 2C11.5 22 2 12.5 2 4c0-1.1.9-2 2-2Z" {...common} />;
    case 'pin':
      return (
        <>
          <Path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" {...common} />
          <Circle cx="12" cy="9" r="2.4" {...common} />
        </>
      );
    case 'share':
      return (
        <>
          <Circle cx="18" cy="5" r="2.4" {...common} />
          <Circle cx="6" cy="12" r="2.4" {...common} />
          <Circle cx="18" cy="19" r="2.4" {...common} />
          <Line x1="8.2" y1="10.8" x2="15.8" y2="6.2" {...common} />
          <Line x1="8.2" y1="13.2" x2="15.8" y2="17.8" {...common} />
        </>
      );
    case 'chevronRight':
      return <Polyline points="9 6 15 12 9 18" {...common} />;
    case 'chevronLeft':
      return <Polyline points="15 6 9 12 15 18" {...common} />;
    case 'chevronDown':
      return <Polyline points="6 9 12 15 18 9" {...common} />;
    case 'image':
      return (
        <>
          <Rect x="3" y="4" width="18" height="16" rx="2" {...common} />
          <Circle cx="8.5" cy="9.5" r="1.5" {...common} />
          <Path d="m21 15-5-5-9 9" {...common} />
        </>
      );
    case 'compass':
      return (
        <>
          <Circle cx="12" cy="12" r="9" {...common} />
          <Path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" {...common} />
        </>
      );
    case 'check':
      return <Polyline points="4 12.5 9.5 18 20 6" {...common} />;
    case 'close':
      return (
        <>
          <Line x1="6" y1="6" x2="18" y2="18" {...common} />
          <Line x1="18" y1="6" x2="6" y2="18" {...common} />
        </>
      );
    case 'mail':
      return (
        <>
          <Rect x="3" y="5" width="18" height="14" rx="2" {...common} />
          <Path d="m4 7 8 6 8-6" {...common} />
        </>
      );
    case 'globe':
      return (
        <>
          <Circle cx="12" cy="12" r="9" {...common} />
          <Path d="M3 12h18M12 3c2.4 2.6 3.6 5.7 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.7-3.6-9s1.2-6.4 3.6-9Z" {...common} />
        </>
      );
    case 'clock':
      return (
        <>
          <Circle cx="12" cy="12" r="9" {...common} />
          <Path d="M12 7v5.5l4 2.3" {...common} />
        </>
      );
    case 'bell':
      return (
        <>
          <Path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10Z" {...common} />
          <Path d="M10 19a2 2 0 0 0 4 0" {...common} />
        </>
      );
    case 'user':
      return (
        <>
          <Circle cx="12" cy="8.5" r="3.5" {...common} />
          <Path d="M4.5 20c1.4-3.6 4.3-5.5 7.5-5.5s6.1 1.9 7.5 5.5" {...common} />
        </>
      );
    case 'info':
      return (
        <>
          <Circle cx="12" cy="12" r="9" {...common} />
          <Line x1="12" y1="11" x2="12" y2="16.5" {...common} />
          <Circle cx="12" cy="7.6" r="0.9" fill={common.stroke} stroke="none" />
        </>
      );
    case 'sun':
      return (
        <>
          <Circle cx="12" cy="12" r="4.5" {...common} />
          <Line x1="12" y1="2.5" x2="12" y2="5" {...common} />
          <Line x1="12" y1="19" x2="12" y2="21.5" {...common} />
          <Line x1="4.2" y1="4.2" x2="6" y2="6" {...common} />
          <Line x1="18" y1="18" x2="19.8" y2="19.8" {...common} />
          <Line x1="2.5" y1="12" x2="5" y2="12" {...common} />
          <Line x1="19" y1="12" x2="21.5" y2="12" {...common} />
          <Line x1="4.2" y1="19.8" x2="6" y2="18" {...common} />
          <Line x1="18" y1="6" x2="19.8" y2="4.2" {...common} />
        </>
      );
    case 'moon':
      return <Path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" {...common} />;
    case 'settings':
    default:
      return (
        <>
          <Circle cx="12" cy="12" r="3" {...common} />
          <Path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1H20a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1Z" {...common} />
        </>
      );
  }
}
