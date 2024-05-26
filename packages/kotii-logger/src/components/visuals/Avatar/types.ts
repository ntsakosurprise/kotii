import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "children" | "wrap" | "size"> {
  // width?: string | number;
  src?: string;
  size?:
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl";

  // skeleton?: { width?: { min?: number } };
}
