/** Big display figure over a mono uppercase label. Use in rows of 3–4. */
export interface StatBlockProps {
  value: React.ReactNode;
  /** Mono uppercase caption. */
  label: string;
  /** Suffix rendered in the accent colour, e.g. "+" or "%". */
  accentPart?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
