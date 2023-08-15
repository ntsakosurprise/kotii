import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "wrap" | "fill" | "width"> {
  id: string;
  label?: string;
  messages?: { skipTo: string };

  // skeleton?: { width?: { min?: number } };
}
