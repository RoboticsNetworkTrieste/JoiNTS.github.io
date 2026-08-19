/**
 * The primary action control.
 * @startingPoint section="Core" subtitle="Button variants, sizes and states" viewport="700x200"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = accent fill (one per view) · secondary = hairline · ghost = bare · danger = destructive only */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label. */
  icon?: string;
  /** Lucide icon name rendered after the label — usually 'arrow-right' or 'external-link'. */
  iconEnd?: string;
  /** Mono + uppercase label. Reserve for terminal-flavoured actions (e.g. CLONE REPO). */
  mono?: boolean;
  block?: boolean;
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;
