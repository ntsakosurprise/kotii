export type Align = "start" | "center" | "end" | "stretch";
export type AlignBase = Align | "baseline";
export type AlignAroundBetween = Align | "around" | "between";
export type Justify = AlignAroundBetween | "evenly";
export type AnimationT =
  | "fadeIn"
  | "fadeOut"
  | "jiggle"
  | "pulse"
  | "rotateLeft"
  | "rotateRight"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "zoomIn"
  | "zoomOut";
export type Size = "small" | "medium" | "large";
export type SizeNoneXs = "none" | "xsmall" | Size;
export type Basis =
  | "full"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "auto";
export type HorizVert = "horizontal" | "vertical";
export type GrowShrink = "grow" | "shrink";
export type Direction =
  | "row"
  | "column"
  | "row-responsive"
  | "row-reverse"
  | "column-reverse";
export type Border =
  | "top"
  | "left"
  | "bottom"
  | "right"
  | "start"
  | "end"
  | "horizontal"
  | "vertical"
  | "all"
  | "between";

export type Overflow = "auto" | "hidden" | "scroll" | "visible";

export type animationType = {
  type?: string;
  delay?: number;
  duration?: number;
  size?: "xsmall" | Size;
};

export type borderType = {
  color?: string;
  size?: Size;
};

export type borderSidesType = {
  color?: string;
  size?: string;
  style?: string;
  side?: string;
}[];

export type backgroundType = {
  color?: string;
  dark?: boolean;
  opacity?: boolean;
  position?: string;
  repeat?: string;
  size?: string;
  image?: string;
  clip?: string;
  rotate?: number;
};

export type backgroundAltType = { dark: string; light: string };

export type HoverIndicator = {
  color: string;
  dark: string;
  image: string;
  position: string;
  opacity: string;
  repeat: string;
  size: string;
  light: string;
};

export type HoverIndicatorElevation = {
  background?: HoverIndicator;
  elevation?: string;
};

export type Margins = {
  vertical: string;
  horizontal: string;
  top: string;
  bottom: string;
  left: string;
  right: string;
};
