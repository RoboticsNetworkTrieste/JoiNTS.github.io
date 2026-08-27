/** Rotating loader — the Lucide loader-circle on an 1100ms linear spin — servo register, no easing. */
export interface SpinnerProps {
  size?: number;
  /** Accessible label. */
  label?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Spinner(props: SpinnerProps): JSX.Element;
