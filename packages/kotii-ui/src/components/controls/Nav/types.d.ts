import { BaseProps } from "../../../types";
export interface NavProps extends Omit<BaseProps, "onClick"> {
  onClick?: (event: React.MouseEvent) => void;
}
