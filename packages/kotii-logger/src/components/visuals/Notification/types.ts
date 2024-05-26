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
  > {
  gridArea?: string;

  // actions?: AnchorType[];
  global?: boolean;
  title?: string;
  message?: string | React.ReactNode;
  status?: StatusType;
  time?: number;
  toast?:
    | boolean
    | {
        autoClose?: boolean;
        position?: LayerPositionType;
      };
  onClose?: (...args: any[]) => any;
  icon?: JSX.Element;

  // skeleton?: { width?: { min?: number } };
}

type StatusType = "critical" | "warning" | "normal" | "info" | "unknown";
type LayerPositionType =
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "center"
  | "hidden"
  | "left"
  | "right"
  | "top"
  | "top-left"
  | "top-right";
