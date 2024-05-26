import { BaseProps, Opacity } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "width"> {
    gridArea?: string;
    disabled?: boolean;
    fallback?: string;
    fit?: "cover" | "contain";
    opacity?: Opacity;
    width?: string | number;
    src?: string;
}
