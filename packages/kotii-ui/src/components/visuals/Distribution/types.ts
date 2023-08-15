import { BaseProps, Basis, SizeNoneXs } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "wrap" | "width" | "basis" | "children" | "fill"> {
  gridArea?: string;

  values: {
    value: number;
    color?: string | { dark?: string; light?: string };
  }[];
  basis?: Exclude<SizeNoneXs, "none"> | Basis;
  fill?: boolean;

  // skeleton?: { width?: { min?: number } };
}
