/** Display-type pull quote on an accent left rule. */
export interface QuoteProps {
  children?: React.ReactNode;
  /** Attribution name, or "Manifesto TORC". */
  by?: string;
  /** Role/affiliation appended after a middot. */
  role?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Quote(props: QuoteProps): JSX.Element;
