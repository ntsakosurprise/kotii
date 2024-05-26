import { ReactNode } from "react";
import { BaseProps, HorizVert, SizeNoneXs } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "width" | "fill" | "size" | "direction" | "overflow" | "pad" | "round" | "background"> {
    gridArea?: string;
    onChange?: () => {};
    name?: string;
    reverse?: boolean;
    id?: string;
    invert?: boolean;
    size?: "full" | Exclude<SizeNoneXs, "none">;
    defaultValue?: string | number | readonly string[];
    detail?: boolean;
    direction?: HorizVert;
    placeholder?: string | ReactNode;
    series?: string;
    pad?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";
    max?: number;
    round?: boolean;
    thickness?: ThicknessType;
    type?: "bar" | "circle" | "pie" | "semicircle";
    value?: number;
    values?: {
        color?: string;
        highlight?: boolean;
        label?: string;
        onClick?: (event: React.MouseEvent) => void;
        onHover?: (over: boolean) => void;
        value: number;
    }[];
    background?: string | {
        color?: string;
        opacity?: "weak" | "medium" | "strong" | string | true | false | number;
    };
}
export type ThicknessType = "hair" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "none";
