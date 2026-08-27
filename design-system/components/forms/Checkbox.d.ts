/** Checkbox — pass type="radio" for a radio with the same skin. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  /** 'checkbox' (default) or 'radio'. */
  type?: 'checkbox' | 'radio';
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
