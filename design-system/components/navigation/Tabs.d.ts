/** Mono uppercase tab strip on a hairline, accent underline on the active tab. */
export interface TabItem { value: string; label: string }
export interface TabsProps {
  /** Strings or {value,label} pairs. */
  tabs?: (string | TabItem)[];
  /** Controlled value; omit for internal state. */
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;
