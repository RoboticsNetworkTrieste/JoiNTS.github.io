/**
 * Hardware-datasheet rows: mono uppercase key, mono tabular value, hairline separators.
 * @startingPoint section="Content" subtitle="Spec / datasheet rows" viewport="700x260"
 */
export interface SpecRow { key: string; value: React.ReactNode; note?: string }
export interface SpecTableProps {
  /** `[key, value, note?]` tuples or `{key, value, note}` objects. */
  rows?: (SpecRow | [string, React.ReactNode, string?])[];
  /** Denser row padding for sidebars. */
  tight?: boolean;
  style?: React.CSSProperties;
  className?: string;
}
export declare function SpecTable(props: SpecTableProps): JSX.Element;
