import { BaseProps } from "../../../types";
export interface PageProps extends Omit<BaseProps, "onClick"> {
  kind?: "wide" | "narrow" | "full";
  onClick?: (event: React.MouseEvent) => void;
}
