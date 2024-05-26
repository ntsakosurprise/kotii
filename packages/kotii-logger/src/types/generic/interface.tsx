import { MouseEventHandler } from "react";
import {
  AlignAroundBetween,
  AlignBase,
  AnimationT,
  BackgroundAltType,
  BackgroundType,
  Basis,
  Border,
  BorderType,
  Direction,
  GrowShrink,
  HorizVert,
  Justify,
  Overflow,
  Size,
  SizeNoneXs,
  Skeleton,
  Spacings,
} from "./types";
export interface BaseProps {
  direction?: Direction;
  pad?: SizeNoneXs | "xxsmall" | "xlarge" | "xxlarge" | Spacings;
  border?: BorderType | boolean | Border | [any];
  size?: Size;
  background?: string | BackgroundType | BackgroundAltType;
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
  children?: React.ReactNode;
  focusIndicator?: boolean;
  gap?: SizeNoneXs | "xlarge";
  gridArea?: string;
  hoverIndicator?: string | boolean;
  height?: "xxsmall" | "xsmall" | Size | "xlarge" | "xxlarge";
  justify?: Justify;
  margin?: SizeNoneXs | "xxsmall" | "xlarge" | "xxlarge" | Spacings;
  onClick?: MouseEventHandler<HTMLElement>;
  overflow?: Overflow | string;
  responsive?: boolean;
  round?: boolean | "xxsmall" | "xsmall" | Size | "xlarge" | "full" | string;
  skeleton?: boolean | Skeleton;
  width?:
    | "xxsmall"
    | "xsmall"
    | Size
    | "xlarge"
    | "xxlarge"
    | { min: string; max: string };
  wrap?: boolean | "reverse";
}

export interface MarkdownType {
  a: string;
  img: Img;
  p: P;
  table: Table;
  td: Td;
  tbody: Tbody;
  tfoot: Tfoot;
  th: Th;
  thead: Thead;
  tr: Tr;
}

export interface Img {
  component: string;
}

export interface P {
  component: string;
}

export interface Table {
  component: string;
}

export interface Td {
  component: string;
}

export interface Tbody {
  component: string;
}

export interface Tfoot {
  component: string;
}

export interface Th {
  component: string;
}

export interface Thead {
  component: string;
}

export interface Tr {
  component: string;
}
