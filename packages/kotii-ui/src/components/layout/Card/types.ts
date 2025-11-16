import { BaseProps } from "../../../types";
export interface CardProps extends Omit<BaseProps, "onClick"> {
  onClick?: (event: React.MouseEvent) => void;
}
