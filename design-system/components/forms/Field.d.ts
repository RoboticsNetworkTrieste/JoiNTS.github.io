/** Label + control + hint/error wrapper. Every form control in JoiNTS sits in a Field. */
export interface FieldProps {
  /** Mono uppercase label text. */
  label?: string;
  htmlFor?: string;
  required?: boolean;
  /** Helper copy shown below the control (hidden while an error is present). */
  hint?: string;
  /** Error message — replaces the hint and shows a warning glyph. */
  error?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Field(props: FieldProps): JSX.Element;
