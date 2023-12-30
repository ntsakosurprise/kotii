import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "onClick"> {
  gridArea?: string;

  options?: (
    | string
    | number
    | {
        label: string;
        value: string | number | boolean;
      }
  )[];
  property: string;
  onClick?: (event: React.MouseEvent) => void;
  range?: {
    max: number;
    min: number;
  };
}
