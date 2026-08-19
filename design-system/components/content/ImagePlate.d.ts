/**
 * Hardware photography plate with HUD corner brackets and mono annotation.
 * Renders an explicitly labelled empty plate when no src is given.
 * @startingPoint section="Content" subtitle="Photography plate with HUD annotation" viewport="700x340"
 */
export interface ImagePlateProps {
  /** Image URL. Omit to render the "inserire fotografia" placeholder. */
  src?: string;
  alt?: string;
  /** CSS aspect-ratio string. '16 / 9' default; '21 / 9' for hero bands, '4 / 5' for portrait. */
  ratio?: string;
  /** Fixed height instead of a ratio (e.g. '68vh' for a full-bleed hero). */
  height?: string;
  /** Mono uppercase caption pinned bottom-left. */
  caption?: React.ReactNode;
  /** Mono index pinned top-right, e.g. 'FIG. 02'. */
  index?: string;
  /** Removes side borders and radius for edge-to-edge use. */
  bleed?: boolean;
  /** Corner brackets. On by default. */
  hud?: boolean;
  style?: React.CSSProperties;
  className?: string;
}
export declare function ImagePlate(props: ImagePlateProps): JSX.Element;
