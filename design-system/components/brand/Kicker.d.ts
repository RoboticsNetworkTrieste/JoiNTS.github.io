/** Uppercase mono eyebrow — JoiNTS's signature label above a heading or beside a rule. */
export interface KickerProps {
  children?: React.ReactNode;
  /** Prefix a 24px accent dash. Use on section headers, not inside cards. */
  dash?: boolean;
  /** 'accent' (default) or 'muted' for secondary metadata. */
  tone?: 'accent' | 'muted';
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Kicker(props: KickerProps): JSX.Element;
