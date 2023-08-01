import { ReactNode } from "react";
import { BaseProps, HorizVert, SizeNoneXs } from "../../../types";
export interface PageHeaderProps
  extends Omit<
    BaseProps,
    "children" | "wrap" | "width" | "fill" | "size" | "direction"
  > {
  gridArea?: string;

  // children?: ReactElement;
  onChange?: () => {};
  name?: string;
  reverse?: boolean;
  id?: string;

  direction?: HorizVert;
  invert?: boolean;
  // label?: boolean | ((label: any) => {});

  size?: "full" | Exclude<SizeNoneXs, "none">;
  defaultValue?: string | number | readonly string[];
  disabledKey?: string | (() => {});
  dropAlign?: {
    top?: "top" | "bottom";
    bottom?: "top" | "bottom";
    right?: "left" | "right";
    left?: "left" | "right";
  };

  focustIndicator?: boolean;
  icon?: boolean | ReactNode | (() => {});

  placeholder?: string;
  plain?: boolean;

  activeDate?: "start" | "end";
  animate?: boolean;
  bounds?: string[];
  children: ReactNode;
  date?: string | string[];
  dates?: string[] | string[][];
  daysOfWeek?: boolean;
  disabled?: string[] | string[][];
  firstDayOfWeek?: 0 | 1;
  header?: (...args) => ReactNode;
  locale?: string;
  messages?: {
    previous?: string;
    next?: string;
  };
  onReference?: () => {};
  onSelect?: () => {};
  range?: boolean | "array";
  reference?: string;
  showAdjacentDays?: boolean | "trim";

  // skeleton?: { width?: { min?: number } };
}
