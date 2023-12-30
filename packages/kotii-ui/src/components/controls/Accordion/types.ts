import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "onClick"> {
  gridArea?: string;
  activeIndex?: number | number[];
  animate?: boolean;
  messages?: { tabContents?: string };
  multiple?: boolean;
  onActive?: ([]) => {};
  onClick?: (event: React.MouseEvent) => void;
  // skeleton?: { width?: { min?: number } };
}
