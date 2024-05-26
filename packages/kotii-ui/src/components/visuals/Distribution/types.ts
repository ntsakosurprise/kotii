import { BaseProps, Basis, SizeNoneXs } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "wrap" | "width" | "basis" | "children" | "fill"> {
  gridArea?: string;
  children?: (...args: any[]) => any;
  values: {
    value: number;
    color?: string | { dark?: string; light?: string };
  }[];
  basis?: Exclude<SizeNoneXs, "none"> | Basis;
  fill?: boolean;

  // skeleton?: { width?: { min?: number } };
}
