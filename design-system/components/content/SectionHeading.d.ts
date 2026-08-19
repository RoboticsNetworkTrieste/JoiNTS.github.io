/**
 * Kicker + display title + subhead. Opens every page section.
 * @startingPoint section="Content" subtitle="Section heading with mono kicker" viewport="700x260"
 */
export interface SectionHeadingProps {
  /** Mono uppercase eyebrow, 1–3 words. */
  kicker?: string;
  title: React.ReactNode;
  /** One sentence, max ~2 lines. */
  sub?: React.ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  /** Optional trailing element (usually a Button). */
  action?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
