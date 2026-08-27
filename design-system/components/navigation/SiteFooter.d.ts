/** Site footer: lockup + tagline, up to three link columns, mono meta row. */
export interface SiteFooterColumn { title: string; links: { label: string; href: string }[] }
export interface SiteFooterProps {
  columns?: SiteFooterColumn[];
  /** Mono uppercase line under the lockup. */
  tagline?: string;
  /** One short sentence of plain copy. */
  note?: string;
  /** Mono strings for the bottom rule (licence, city, year). */
  meta?: string[];
  style?: React.CSSProperties;
  className?: string;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
