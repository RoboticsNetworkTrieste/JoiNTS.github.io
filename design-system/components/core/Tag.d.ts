/** Pill filter / topic label. Interactive when given onClick. */
export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  /** Makes the tag a filter button. */
  onClick?: (e: React.MouseEvent) => void;
  /** Optional trailing count, e.g. number of projects. */
  count?: number;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Tag(props: TagProps): JSX.Element;
