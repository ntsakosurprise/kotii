import { BaseProps } from "../../../types";
export interface BoxProps extends Omit<BaseProps, "onClick"> {
  onClick?: (event: React.MouseEvent) => void;
}
