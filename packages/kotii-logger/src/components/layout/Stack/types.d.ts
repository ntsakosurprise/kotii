import { Align, BaseProps, Basis, Corners, Size } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "justify"> {
    anchor?: Corners;
    guidingChild?: number | "first" | "last";
    interactiveChild?: number | "first" | "last";
    columns?: "xsmall" | Size | "xlarge" | string | string[] | string[][] | Basis | "flex" | {
        count?: "fit" | "fill";
        size?: string;
    };
    gridArea?: string;
    justify?: Align;
    rows?: "xsmall" | Size | "xlarge" | string | string[] | string[][] | Basis | "flex";
}
