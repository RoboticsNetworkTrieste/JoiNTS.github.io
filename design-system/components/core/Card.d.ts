/**
 * The surface primitive: hairline border, 14px radius, ink-800 fill.
 * @startingPoint section="Core" subtitle="Card surfaces: default, grid, glass, accent" viewport="700x260"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** default = ink surface · flat = transparent · glass = blurred glass fill · grid = blueprint grid ground · accent = accent-tinted */
  variant?: 'default' | 'flat' | 'glass' | 'grid' | 'accent';
  pad?: 'sm' | 'md' | 'lg';
  /** Adds hover lift + accent border. Implied by href. */
  interactive?: boolean;
  /** Drop shadow — only for elements that genuinely float (menus, dialogs). */
  floating?: boolean;
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Card(props: CardProps): JSX.Element;
