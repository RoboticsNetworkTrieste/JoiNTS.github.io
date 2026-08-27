/**
 * Sticky site header: lockup left, nav + CTA right, 72px tall, blurred ink scrim.
 * @startingPoint section="Navigation" subtitle="Sticky site header with nav and CTA" viewport="1200x120"
 */
export interface SiteHeaderLink { label: string; href: string; active?: boolean }
export interface SiteHeaderProps {
  links?: SiteHeaderLink[];
  /** href of the current page — marks that link accent. */
  active?: string;
  /** Right-hand primary action. */
  cta?: { label: string; href?: string; onClick?: (e: React.MouseEvent) => void };
  /** GitHub org URL — renders an icon button before the CTA. */
  github?: string;
  /** Intercepts link clicks for client-side routing in prototypes. */
  onNavigate?: (href: string) => void;
  style?: React.CSSProperties;
  className?: string;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
