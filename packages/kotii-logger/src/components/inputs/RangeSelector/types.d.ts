import { ReactElement } from "react";
import { SizeNoneXs } from "src/types/generic/types";
import { BaseProps, HorizVert, Opacity } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "width" | "fill" | "size" | "direction"> {
    gridArea?: string;
    disabled?: boolean;
    children?: ReactElement;
    onChange?: () => {};
    name?: string;
    reverse?: boolean;
    id?: string;
    values?: number[];
    max?: number;
    min?: number;
    step?: number;
    direction?: HorizVert;
    invert?: boolean;
    messages?: {
        lower: string;
        upper: string;
    };
    opacity?: boolean | Opacity;
    round?: "full" | Exclude<SizeNoneXs, "none">;
    size?: "full" | Exclude<SizeNoneXs, "none">;
}
