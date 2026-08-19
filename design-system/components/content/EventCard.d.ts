/** Meetup / hackathon row: mono date block, kind kicker, title, place + time, action. */
export interface EventCardProps {
  /** Day number, e.g. "18". */
  day: string;
  /** Three-letter month, lowercase in source, e.g. "set". */
  month: string;
  title: string;
  /** Venue, e.g. "Area Science Park". */
  where?: string;
  /** Time range, e.g. "18:30 → 21:00". */
  when?: string;
  /** Mono kicker: "meetup", "hackathon", "sfida". */
  kind?: string;
  href?: string;
  ctaLabel?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function EventCard(props: EventCardProps): JSX.Element;
