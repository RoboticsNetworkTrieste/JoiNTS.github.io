/**
 * Single-line text input.
 * @startingPoint section="Forms" subtitle="Inputs, selects, checkboxes and switches" viewport="700x320"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Lucide icon name rendered inside the left edge (e.g. 'search', 'mail'). */
  icon?: string;
  /** Mono font — for URLs, commands, IDs. */
  mono?: boolean;
  invalid?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
