import { ButtonExtendedProps } from "grommet";
import { ReactElement } from "react";
import { BackgroundType, BaseProps } from "../../../types";

export interface PageHeaderProps extends Omit<BaseProps, "align"> {
  dropAlign?: {
    top?: "top" | "bottom";
    bottom?: "top" | "bottom";
    right?: "left" | "right";
    left?: "left" | "right";
  };
  dropProps?: object;
  dropTarget?: Object;
  dropBackground?: string | BackgroundType;
  gridArea?: string;
  icon?: ReactElement;
  items: ButtonExtendedProps[] | ButtonExtendedProps[][];
  label?: string | ReactElement;
  messages?: {
    openMenu: string;
    closeMenu: string;
  };
  open?: boolean;

  // skeleton?: { width?: { min?: number } };
}
