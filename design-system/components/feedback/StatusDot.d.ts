/** Mono label with a state dot — project activity, robot online, build health. */
export interface StatusDotProps {
  /** live = pulsing accent · info · warn · danger · idle = muted (default) */
  state?: 'live' | 'info' | 'warn' | 'danger' | 'idle';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export declare function StatusDot(props: StatusDotProps): JSX.Element;
