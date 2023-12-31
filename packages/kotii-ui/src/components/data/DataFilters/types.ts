import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "onClick"> {
  gridArea?: string;
  onClick?: (event: React.MouseEvent) => void;
  id?: string;
  drop?: boolean;
  heading?: string;
  layer?: boolean;
}
