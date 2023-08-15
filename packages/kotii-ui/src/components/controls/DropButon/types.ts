import { BaseProps } from "../../../types";

export interface PageHeaderProps extends Omit<BaseProps, "align"> {
  dropAlign?: {
    top?: "top" | "bottom";
    bottom?: "top" | "bottom";
    right?: "left" | "right";
    left?: "left" | "right";
  };
  dropContent: JSX.Element;
  dropProps?: object;
  dropTarget?: Object;
  gridArea?: string;
  onClose?: () => {};
  onOpen?: () => {};
  open?: boolean;
  restrictFocus?: boolean;
  trapFocus?: boolean;
  stretch?: boolean | "align";

  // skeleton?: { width?: { min?: number } };
}
