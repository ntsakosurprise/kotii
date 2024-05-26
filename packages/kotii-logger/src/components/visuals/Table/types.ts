import { BaseProps } from "../../../types";
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
    | "round"
    | "background"
    | "align"
    | "border"
  > {
  gridArea?: string;

  // actions?: AnchorType[];
  caption?: string;
  align?: "center" | "left" | "right";

  // skeleton?: { width?: { min?: number } };
}
