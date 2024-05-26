import { ReactNode } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "children" | "wrap" | "fill" | "width"> {
  gridArea?: string;
  disabled?: boolean;
  children?: ReactNode | Function;
  items?: (string | number | React.ReactElement | Record<string, any>)[];
  onMore?: () => {};
  renderMarker?: (marker: React.ReactElement) => React.ReactElement;
  replace?: boolean;
  show?: number;
  step?: number;

  // skeleton?: { width?: { min?: number } };
}
