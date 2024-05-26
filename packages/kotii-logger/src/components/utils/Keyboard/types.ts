import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "wrap" | "fill" | "width"> {
  onBackspace?: () => {};
  onComma?: () => {};
  onDown?: () => {};
  onEnter?: () => {};
  onEsc?: () => {};
  onKeyDown?: () => {};
  onLeft?: () => {};
  onRight?: () => {};
  onShift?: () => {};
  onSpace?: () => {};
  onUp?: () => {};
  onTab?: () => {};
  target?: "document" | "component";
  // skeleton?: { width?: { min?: number } };
}
