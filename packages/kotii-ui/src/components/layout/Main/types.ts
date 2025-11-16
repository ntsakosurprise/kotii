import { BaseProps } from "../../../types";
export interface MainProps extends Omit<BaseProps, "onClick"> {
  onClick?: (event: React.MouseEvent) => void;
}
