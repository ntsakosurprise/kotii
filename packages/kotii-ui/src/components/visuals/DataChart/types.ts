import { ReactNode } from "react";
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

  invert?: boolean;
  // label?: boolean | ((label: any) => {});

  size?: "full" | Exclude<SizeNoneXs, "none">;
  defaultValue?: string | number | readonly string[];

  plain?: boolean;
  animate?: boolean;
  opacity?: boolean | Opacity;

  axis?: boolean | Axis;
  bounds?:
    | "align"
    | {
        x?: number[];
        y?: number[];
      };
  chart?: string;
  data: {}[];
  detail?: boolean;
  direction?: HorizVert;
  guide?: boolean;
  legend?: boolean;
  offset?:
    | boolean
    | {
        gap?: "string";
      };
  placeholder?: string | ReactNode;
  series?: string;
  pad?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";

  // skeleton?: { width?: { min?: number } };
}

export type GranularityType = "coarse" | "medium" | "fine";
export type XYaxis = {
  granularity?: GranularityType;
  property?: string;
};
export type Axis = {
  x?: boolean | string | XYaxis;
  y?: boolean | string | XYaxis;
};

type Data = {
  date: string;
  amount: number;
  percent: number;
};
