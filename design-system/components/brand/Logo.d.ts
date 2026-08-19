/**
 * The TORC mark. Ring + torque arc + terminal dot, copied from the delivered SVGs.
 * @startingPoint section="Brand" subtitle="Logo variants, tones and the torque mark" viewport="700x220"
 */
export interface LogoProps {
  /** icon = ring only · wordmark = TORC lettering · lockup = wordmark (default) · tile = accent app tile · stacked = wordmark + full name */
  variant?: 'icon' | 'wordmark' | 'lockup' | 'tile' | 'stacked';
  /** Rendered height in px. Wordmark width follows the 292:92 aspect. Min 20px for wordmark, 16px for icon. */
  height?: number;
  /** 'light' = light ink for dark grounds (default) · 'dark' = forest ink for light grounds */
  tone?: 'light' | 'dark';
  /** Override the arc/dot colour. Only for one-colour reproductions. */
  accent?: string;
  /** Override the letterform colour. Only for one-colour reproductions. */
  ink?: string;
  /** Accessible label. */
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
