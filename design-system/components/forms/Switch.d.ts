/** Binary toggle for settings that apply immediately (telemetry, theme, live view). */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}
export declare function Switch(props: SwitchProps): JSX.Element;
