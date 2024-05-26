import { BaseProps } from "../../../types";
export interface HeaderProps extends Omit<BaseProps, "onClick"> {
  onClick?: (event: React.MouseEvent) => void;
}
