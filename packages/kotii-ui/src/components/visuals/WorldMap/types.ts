import { Align, BaseProps } from "../../../types";
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
    | "align"
    | "border"
  > {
  gridArea?: string;

  continents?: {
    color?: string | { dark?: string; light?: string };
    name:
      | "Africa"
      | "Asia"
      | "Australia"
      | "Europe"
      | "North America"
      | "South America";
  }[];
  hoverColor?: string | { dark?: string; light?: string };

  onSelectPlace?: (place: [number, number]) => void;
  places?: {
    color?: string | { dark?: string; light?: string };
    content?: React.ReactNode;
    dropProps?: Align;
    name?: string;
    location: number[];
  }[];
}
