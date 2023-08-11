import { CSSProperties, ReactElement, ReactNode } from "react";

type ShapeBackground = {
  light?: string;
  dark?: string;
};

type ShapesTextSizes =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge";
export type Shapes = {
  width?: string | number | ShapesTextSizes;
  height?: string | number | ShapesTextSizes;
  background?: string | ShapeBackground;
  size?: string | ShapesTextSizes;
  children?: ReactNode | ReactElement | JSX.Element | JSX.Element[];
  style?: CSSProperties;
};
