import { ReactElement, ReactNode } from "react";

import { BaseProps, HorizVert, SizeNoneXs, SizeWithNone } from "../../../types";
export interface PageHeaderProps
  extends Omit<
    BaseProps,
    "children" | "wrap" | "width" | "fill" | "size" | "direction"
  > {
  gridArea?: string;
  disabled?: boolean;

  // children?: ReactElement;
  onChange?: () => {};
  onSelect?: () => {};
  onSuggestionSelect?: () => {};
  onSuggestionClose?: () => {};
  onSuggestionOpen?: () => {};
  name?: string;
  reverse?: boolean;
  id?: string;

  direction?: HorizVert;
  invert?: boolean;
  // label?: boolean | ((label: any) => {});
  messages?: {
    enterSelect: string;
    suggestionsCount: string;
    suggestionsExist: string;
    suggestionIsOpen: string;
  };

  size?: "full" | Exclude<SizeNoneXs, "none">;

  closeOnChange?: boolean;
  // defaultValue?: string | number;
  disabledKey?: string | (() => {});
  dropAlign?: {
    top?: "top" | "bottom";
    bottom?: "top" | "bottom";
    right?: "left" | "right";
    left?: "left" | "right";
  };
  dropProps?: object;
  dropTarget?: Object;
  dropHeight?: Exclude<SizeWithNone, "none">;
  emptySearchMessage?: string | ReactNode;
  focustIndicator?: boolean;
  icon?: ReactElement;

  onMore?: () => {};
  onOpen?: () => {};
  onClose?: () => {};
  onSearch?: () => {};
  open?: boolean;
  suggestions?: (string | Object)[];
  placeholder?: ReactElement | ReactNode | string;
  plain?: boolean;

  value?: number | string;

  defaultSuggestion?: number;

  // skeleton?: { width?: { min?: number } };
}
