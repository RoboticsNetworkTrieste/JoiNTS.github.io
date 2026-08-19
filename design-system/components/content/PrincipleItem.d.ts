/**
 * A numbered manifesto principle — zero-padded mono number, display title, body paragraph.
 * @startingPoint section="Content" subtitle="Numbered manifesto principle" viewport="700x200"
 */
export interface PrincipleItemProps {
  /** 1-based index; rendered zero-padded ("01"). */
  number: number | string;
  /** The principle as a full sentence with a full stop. */
  title: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export declare function PrincipleItem(props: PrincipleItemProps): JSX.Element;
