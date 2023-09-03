import { ReactElement, ReactNode } from "react";
import { BaseProps, Opacity } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "wrap" | "width"> {
  gridArea?: string;
  disabled?: boolean;
  fallback?: string;
  fit?: "cover" | "contain";
  opacity?: Opacity;
  width?: string | number;
  src?: string;
  inline?: boolean;
  asComponent?: ReactNode | ReactElement;

  // skeleton?: { width?: { min?: number } };
}
