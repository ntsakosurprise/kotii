import { MouseEventHandler } from "react";
import { BaseProps, SizeNoneXs } from "../../../types";
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
    | "animation"
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
  connections: ConnectionType[];
  animation?: boolean | "pulse" | "draw" | Animation;
  onClick?: MouseEventHandler;
  // skeleton?: { width?: { min?: number } };
}

type ConnectionType = {
  anchor?: "center" | "vertical" | "horizontal";
  animation?: boolean | "pulse" | "draw" | Animation;
  color?: string | { dark?: string; light?: string };
  fromTarget: string | Object;
  label?: string;
  offset?: string;
  thickness?: ThicknessType;
  toTarget: string | Object;
  type?: "direct" | "curved" | "rectilinear";
};
type Connections = ConnectionType;
type ThicknessType = "xsmall" | "small" | "medium" | "large" | string;

type Animation = {
  type?: "pulse" | "draw";
  delay?: number | string;
  duration?: number | string;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
};
