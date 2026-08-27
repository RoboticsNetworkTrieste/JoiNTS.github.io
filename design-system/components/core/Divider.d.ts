/** Hairline rule. The 'lit' variant fades ink → accent and is the brand's section separator. */
export interface DividerProps {
  variant?: 'default' | 'accent' | 'lit';
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
}
export declare function Divider(props: DividerProps): JSX.Element;
