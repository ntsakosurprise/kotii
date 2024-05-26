import { Align, BaseProps, FontSizes, Weight } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "size" | "fill"> {
    color?: string | {
        dark?: string;
        light?: string;
    };
    weight?: Weight | number;
    truncate?: boolean;
    textAlign?: Exclude<Align, "stretch"> | "justify";
    maxLines?: number;
    gridArea?: string;
    fill?: boolean;
    size?: FontSizes;
}
