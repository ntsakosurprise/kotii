import { ColorType, ThicknessType } from "grommet/utils";
import { BaseProps, HorizVert, Opacity, SizeNoneXs } from "../../../types";
export interface PageHeaderProps
  extends Omit<
    BaseProps,
    | "children"
    | "wrap"
    | "width"
    | "fill"
    | "size"
    | "direction"
    | "overflow"
    | "pad"
  > {
  gridArea?: string;

  // children?: ReactElement;
  onChange?: () => {};
  name?: string;
  reverse?: boolean;
  id?: string;

  direction?: HorizVert;
  invert?: boolean;
  // label?: boolean | ((label: any) => {});

  size?: "full" | Exclude<SizeNoneXs, "none">;
  defaultValue?: string | number | readonly string[];

  plain?: boolean;

  animate?: boolean;

  messages?: {
    previous?: string;
    next?: string;
  };

  bounds?:
    | number[][]
    | {
        x: { min: number; max: number };
        y: { min: number; max: number };
      };
  dash?: boolean;
  onClick?: () => {};
  opacity?: boolean | Opacity;
  overflow?: boolean;
  pattern?:
    | "squares"
    | "circles"
    | "stripesHorizontal"
    | "stripesVertical"
    | "stripesDiagonalDown"
    | "stripesDiagonalUp";
  point?:
    | "circle"
    | "diamond"
    | "square"
    | "star"
    | "triangle"
    | "triangleDown";
  round?: boolean;
  thickness?:
    | "none"
    | "hair"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "string";
  type?: "bar" | "line" | "area" | "point";
  values: (
    | number
    | number[]
    | {
        color?: ColorType;
        label?: string;
        onClick?: (...args: any[]) => any;
        onHover?: (...args: any[]) => any;
        opacity?: "weak" | "medium" | "strong" | boolean | number;
        thickness?: ThicknessType;
        value: number | number[];
      }
  )[];
  pad?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  // skeleton?: { width?: { min?: number } };
}
