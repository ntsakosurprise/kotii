import { ReactNode } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "children" | "wrap" | "fill"> {
  gridArea?: string;
  disabled?: boolean;
  children: ReactNode;
  onChild?: () => {};
  activeChild?: number;
  controls?: boolean | "arrows" | "selectors";
  initialChild?: number;
  play?: number;
  wrap?: boolean;
  fill?: boolean;

  // skeleton?: { width?: { min?: number } };
}
