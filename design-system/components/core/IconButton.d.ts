/** Square icon-only control for toolbars, card corners and dismissals. */
export interface IconButtonProps {
  /** Lucide icon name — see assets/icons/ for the shipped set. */
  icon?: string;
  /** Required accessible label (also the tooltip). */
  label: string;
  /** plain = bare · outline = hairline + glass fill · solid = accent fill */
  variant?: 'plain' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
