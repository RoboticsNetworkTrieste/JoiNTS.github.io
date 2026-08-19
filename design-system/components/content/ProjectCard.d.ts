/**
 * A TORC project tile: glyph, live state, title, one-paragraph summary, topic badges, mono meta row.
 * @startingPoint section="Content" subtitle="Project tile with state and repo meta" viewport="700x300"
 */
export interface ProjectCardProps {
  title: string;
  /** 1–2 sentences: what it is and what problem it attacks. */
  summary: string;
  /** Activity of the project. */
  state?: 'live' | 'info' | 'warn' | 'danger' | 'idle';
  /** Mono label next to the dot, e.g. "sviluppo attivo". Omit to hide the indicator. */
  stateLabel?: string;
  /** Topic badges (lowercase in source). */
  tags?: string[];
  /** Hardware/stack line, e.g. "ROS 2 · Jetson Orin". */
  stack?: string;
  /** Number of contributors. */
  contributors?: number;
  /** Last-activity string, e.g. "ultimo commit 3g". */
  updated?: string;
  /** Makes the whole card a link. */
  href?: string;
  /** Lucide glyph in the accent tile (default 'circuit-board'). */
  icon?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
