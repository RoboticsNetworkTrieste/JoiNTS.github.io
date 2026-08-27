/** Multi-line text input. Same skin as Input, min-height 112px, vertical resize only. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  mono?: boolean;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
