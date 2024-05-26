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
  > {
  gridArea?: string;

  // children?: ReactElement;
  onChange?: () => {};
  name?: string;
  id?: string;

  size?: "full" | Exclude<SizeNoneXs, "none">;

  hourLimit?: 12 | 24 | "12" | "24";
  precision?: "minutes" | "seconds" | "hours";
  run?: boolean | "forward" | "backward";
  time?: string;
  type?: "analog" | "digital";
  // skeleton?: { width?: { min?: number } };
}
