/** Small mono status chip — project state, licence, protocol version. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'ok' | 'info' | 'warn' | 'danger' | 'solid';
  /** Lucide icon name, rendered at 12px. */
  icon?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Badge(props: BadgeProps): JSX.Element;
