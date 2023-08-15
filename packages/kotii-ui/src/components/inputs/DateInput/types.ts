import { ReactElement } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "children" | "wrap" | "width" | "fill" | "size"> {
  gridArea?: string;
  disabled?: boolean;

  checked?: boolean;
  children?: ReactElement;
  label?: string | ReactElement;
  onChange?: () => {};
  name?: string;
  reverse?: boolean;
  toggle?: boolean;
  fill?: boolean;

  buttonProps?: {};
  calendarProps?: {};
  defaultValue?: string | string[];
  dropProps?: {
    align?: {
      top?: "top" | "bottom";
      bottom?: "top" | "bottom";
      right?: "left" | "right";
      left?: "left" | "right";
    };
  };
  format?: string;
  icon?: ReactElement;
  id?: string;
  inline?: boolean;
  inputProps?: {};
  messages?: {
    enterCalendar: string;
    exitCalendar: string;
  };
  value?: string | string[];

  // skeleton?: { width?: { min?: number } };
}
