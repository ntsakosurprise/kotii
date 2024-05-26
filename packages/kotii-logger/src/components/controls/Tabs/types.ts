import { ReactElement, ReactNode } from "react";
import {
  Align,
  BaseProps,
  ButtonType,
  GrowShrink,
  Target,
} from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "children" | "hoverIndicator" | "flex" | "justify"> {
  gridArea?: string;
  disabled?: boolean;
  href?: string;
  icon?: ReactElement;
  label?: string | ReactElement;
  onClick?: () => {};
  active?: boolean;
  badge?: ReactElement | boolean | number | Exclude<ButtonType, "elevation">;
  busy?: boolean;
  children: ReactNode;
  hoverIndicator?: boolean | string | "background";
  messages?: {
    tabContents?: string;
  };
  plain?: boolean;
  primary?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  success?: boolean;
  target?: Target;
  tip?:
    | string
    | {
        content: ReactNode | "string";
        dropProps: Object;
        plain: boolean;
      };
  type?: "button" | "reset" | "submit";
  activeIndex?: number;
  alignControls?: Align;
  flex?: boolean | GrowShrink;
  justify?: Exclude<Align, "stretch">;
  onActive?: () => {};

  // skeleton?: { width?: { min?: number } };
}
