import { backgroundAltType, backgroundType, borderType } from "./types";

import {
  AlignAroundBetween,
  AnimationT,
  Direction,
  Size,
  SizeNoneXs,
} from "./types";
export interface BaseProps {
  direction?: Direction;
  pad?: string;
  border?: borderType | boolean;
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
  height?: "xxsmall" | "xsmall" | Size | "xlarge" | "xxlarge";
}
