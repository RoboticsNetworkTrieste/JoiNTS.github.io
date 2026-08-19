/** Terminal / source snippet on the deepest ink, with a mono title bar and copy button. */
export interface CodeBlockProps {
  /** Snippet text (or spans with class "c" comment / "k" keyword / "s" string). */
  children?: React.ReactNode;
  /** Shown in the bar instead of the language. */
  filename?: string;
  /** Bar label when no filename, e.g. "bash", "python". */
  language?: string;
  copyable?: boolean;
  style?: React.CSSProperties;
  className?: string;
}
export declare function CodeBlock(props: CodeBlockProps): JSX.Element;
