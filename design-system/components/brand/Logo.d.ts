/**
 * The JoiNTS mark — the I+N ligature logotype from the delivered SVGs.
 * @startingPoint section="Brand" subtitle="Logo variants, tones and the joint mark" viewport="700x220"
 */
export interface LogoProps {
  /** lockup/wordmark = full JoiNTS logotype (default) · icon = the joint alone (accent link between two pin rings, square) · tile = the joint in ink on an accent square (22% radius) · stacked = wordmark over ROBOTICS NETWORK TRIESTE */
  variant?: 'icon' | 'wordmark' | 'lockup' | 'tile' | 'stacked';
  /** Rendered height in px. Pins are always open rings, never filled (the -small asset cut thickens the ring below ~28px). Aligned on cap-height/baseline — the pins overhang top and bottom. */
  height?: number;
  /** 'light' = mist letterforms + mint accent for ink grounds (default) · 'dark' = forest ink + deep green (AA) for light grounds */
  tone?: 'light' | 'dark';
  /** Override the accent (diagonal, right stem, TS, lower pin). Only for sanctioned one-colour cuts. */
  accent?: string;
  /** Override the letterform colour (J O I, top pin). Only for sanctioned one-colour cuts. */
  ink?: string;
  /** Accessible label. */
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
