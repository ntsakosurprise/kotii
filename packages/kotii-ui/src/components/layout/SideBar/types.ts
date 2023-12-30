import { ReactNode } from "react";
import { BaseProps } from "../../../types";

export interface SidebarProps extends Omit<BaseProps, "onClick"> {
  onClick?: (event: React.MouseEvent) => void;
  footer?: ReactNode;
  header?: ReactNode;
}
