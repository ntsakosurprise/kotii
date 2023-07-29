import { Align, BaseProps, Corners, RangeType, Weight } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "fill"> {
  color?: string | { dark?: string; light?: string };
  anchor?: Corners;
  weight?: Weight | number;
  truncate?: boolean;
  textAlign?: Exclude<Align, "stretch"> | "justify";
  overflowWrap?: "normal" | "anywhere" | "break-word";
  level?: RangeType | "1" | "2" | "3" | "4" | "5" | "6";
  gridArea?: string;
  fill?: boolean;
}
