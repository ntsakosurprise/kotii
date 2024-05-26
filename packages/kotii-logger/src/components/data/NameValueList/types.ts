import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "justify"> {
  gridArea?: string;
  layout?: "column" | "grid";
  nameProps?: {
    align?: AlignType;
    width?: WidthType;
  };
  pairProps?: {
    direction?: "column" | "column-reverse" | "row";
  };
  valueProps?: {
    align?: AlignType;
    width?: WidthType;
  };
}

export type AlignType =
  | "baseline"
  | "center"
  | "end"
  | "start"
  | "stretch"
  | string;

export type WidthType =
  | "xxsmall"
  | "xxlarge"
  | TShirtSizeType
  | "100%"
  | {
      width?: "xxsmall" | "xxlarge" | TShirtSizeType | "100%";
      max?: "xxsmall" | "xxlarge" | TShirtSizeType | "100%";
      min?: "xxsmall" | "xxlarge" | TShirtSizeType | "100%";
    };

type TShirtSizeType =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | string;
