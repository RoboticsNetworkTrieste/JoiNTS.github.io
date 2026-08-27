/**
 * Inline message block — build results, form errors, community notices.
 * @startingPoint section="Feedback" subtitle="Alerts, status dots and spinners" viewport="700x260"
 */
export interface AlertProps {
  tone?: 'neutral' | 'ok' | 'info' | 'warn' | 'danger';
  /** Bold first line. */
  title?: string;
  children?: React.ReactNode;
  /** Override the default Lucide glyph for the tone. */
  icon?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Alert(props: AlertProps): JSX.Element;
