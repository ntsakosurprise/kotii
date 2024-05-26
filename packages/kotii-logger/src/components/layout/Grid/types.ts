import { Align, BaseProps, Basis, Size } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "justify"> {
  areas?: { name?: string; start?: number[]; end?: number[] }[] | string[][];
  columns?:
    | "xsmall"
    | Size
    | "xlarge"
    | string
    | string[]
    | string[][]
    | Basis
    | "flex"
    | { count?: "fit" | "fill"; size?: string };
  gridArea?: string;
  justify?: Align;
  rows?:
    | "xsmall"
    | Size
    | "xlarge"
    | string
    | string[]
    | string[][]
    | Basis
    | "flex";
}
