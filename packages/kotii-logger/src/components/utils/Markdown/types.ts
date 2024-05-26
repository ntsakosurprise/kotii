import {
  Align,
  BaseProps,
  Corners,
  FontSizes,
  RangeType,
  Weight,
} from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "size" | "fill"> {
  color?: string | { dark?: string; light?: string };
  anchor?: Corners;
  weight?: Weight | number;
  truncate?: boolean;
  textAlign?: Exclude<Align, "stretch"> | "justify";
  wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";
  level?: RangeType | "1" | "2" | "3" | "4" | "5" | "6";
  gridArea?: string;
  fill?: boolean;
  tip?: string;
  size?: FontSizes;
  // skeleton?: { width?: { min?: number } };
}
