export type Align = "start" | "center" | "end" | "stretch";
export type AlignBase = Align | "baseline";
export type AlignAroundBetween = Align | "around" | "between";
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
export type Direction = "row" | "column";

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
