import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<
    BaseProps,
    | "children"
    | "wrap"
    | "width"
    | "fill"
    | "size"
    | "direction"
    | "overflow"
    | "pad"
    | "round"
    | "background"
    | "onClick"
  > {
  gridArea?: string;

  // actions?: AnchorType[];
  children?: React.ReactNode;
  color?: string | { dark?: string; light?: string };
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string;
  message?: string | { start?: string; end?: string };
  onClick?: (event: React.MouseEvent) => void;

  // skeleton?: { width?: { min?: number } };
}
