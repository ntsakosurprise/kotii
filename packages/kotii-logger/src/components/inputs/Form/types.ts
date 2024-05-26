import { ReactNode } from "react";

import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<
    BaseProps,
    "children" | "wrap" | "width" | "fill" | "size" | "direction" | "pad"
  > {
  gridArea?: string;
  disabled?: boolean;

  // children?: ReactElement;
  onChange?: () => {};

  name?: string;
  reverse?: boolean;
  id?: string;

  focustIndicator?: boolean;

  placeholder?: string;

  defaultSuggestion?: number;

  contextProps?: {};

  help?: string | ReactNode;
  htmlFor?: string;
  info?: string | ReactNode;
  label?: string | ReactNode;
  require?: boolean | { indicator: false };

  validate?: "blur" | "submit" | "change";
  pad?: boolean;

  errors?: { name: "string" };
  infos?: { name: "string" };
  kind?: string;
  messages?: {
    required: string;
    invalid: string;
  };
  onReset?: () => {};
  onSubmit?: () => {};
  onValidate?: () => {};
  value?: string;

  // skeleton?: { width?: { min?: number } };
}
