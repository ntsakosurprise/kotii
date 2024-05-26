import { CSSProperties, ReactElement, ReactNode } from "react";
import { BaseProps } from "../../types/index";

type ShapeBackground = {
  light?: string;
  dark?: string;
};

type ShapesTShirtSizes =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge";
export interface Shapes
  extends Omit<
    BaseProps,
    "children" | "width" | "height" | "size" | "background"
  > {
  width?: string | number | ShapesTShirtSizes;
  height?: string | number | ShapesTShirtSizes;
  background?: string | ShapeBackground;
  size?: string | ShapesTShirtSizes;
  children?: ReactNode | ReactElement | JSX.Element | JSX.Element[];
  style?: CSSProperties;
}

export type ShapeNames = "square" | "circle";
