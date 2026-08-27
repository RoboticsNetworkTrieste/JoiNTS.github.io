/**
 * Lucide glyph renderer — the only sanctioned icon source for JoiNTS.
 * @startingPoint section="Core" subtitle="The shipped Lucide glyph set" viewport="700x260"
 */
export interface IconProps {
  /** File name from assets/icons/ without the extension, e.g. 'circuit-board', 'git-branch'. */
  name?: string;
  /** Rendered px box. 13 (meta), 16–18 (UI), 20 (buttons), 24+ (feature). */
  size?: number;
  /** Lucide default is 2. Only go to 2.25 at 12–13px. */
  strokeWidth?: number;
  /** Defaults to currentColor — colour the parent, not the icon. */
  color?: string;
  /** Adds a <title> and exposes the icon to screen readers. */
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
/** name → inner SVG markup for all shipped glyphs. */
export declare const ICONS: Record<string, string>;
/** Sorted list of available glyph names. */
export declare const ICON_NAMES: string[];
