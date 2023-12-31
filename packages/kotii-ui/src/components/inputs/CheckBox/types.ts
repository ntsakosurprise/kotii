import { ReactElement } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<
    BaseProps,
    "children" | "wrap" | "width" | "fill" | "size" | "onClick"
  > {
  gridArea?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  checked?: boolean;
  children?: ReactElement;
  id?: string;
  label?: string | ReactElement;
  onChange?: () => {};
  name?: string;
  reverse?: boolean;
  toggle?: boolean;
  fill?: boolean;
  size?: number;

  // skeleton?: { width?: { min?: number } };
}
