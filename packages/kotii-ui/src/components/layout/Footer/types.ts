import { BaseProps } from "../../../types";
export interface FooterProps extends Omit<BaseProps, "onClick"> {
  onClick?: (event: React.MouseEvent) => void;
}
