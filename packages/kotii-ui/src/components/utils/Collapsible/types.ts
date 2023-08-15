import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "direction"> {
  gridArea?: string;
  disabled?: boolean;
  direction?: "horizontal" | "vertical";
  open?: boolean;

  // skeleton?: { width?: { min?: number } };
}
