import { MouseEventHandler } from "react";
import {
  AlignAroundBetween,
  AnimationT,
  backgroundAltType,
  backgroundType,
  Border,
  borderType,
  Direction,
  Justify,
  Margins,
  Overflow,
  Size,
  SizeNoneXs,
} from "./types";
export interface BaseProps {
  direction?: Direction;
  pad?: string;
  border?: borderType | boolean | Border | [any];
  size?: Size;
  background?: string | backgroundType | backgroundAltType;
  a11yTitle?: string;
  elevation?: SizeNoneXs | "xlarge";
  align?: AlignBase;
  alignContent?: AlignAroundBetween;
  alignSelf?: AlignBase;
  animation?: AnimationT;
  basis?: "xxsmall" | Size | "xlarge" | "xxlarge" | Basis;
  as?: React.ComponentType<any>;
  fill?: HorizVert | boolean;
  flex?: GrowShrink | { grow: number; shrink: number };
  children: React.ReactNode;
  focusIndicator?: boolean;
  gap?: SizeNoneXs | "xlarge";
  gridArea?: string;
  hoverIndicator?: string | boolean;
  height?: "xxsmall" | "xsmall" | Size | "xlarge" | "xxlarge";
  justify?: Justify;
  margin?: SizeNoneXs | "xxsmall" | "xlarge" | "xxlarge" | Margins;
  onClick?: MouseEventHandler<HTMLElement>;
  overflow?: Overflow | string;
}
