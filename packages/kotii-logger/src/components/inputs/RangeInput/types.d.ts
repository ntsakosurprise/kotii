import { ReactElement } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "width" | "fill" | "size"> {
    gridArea?: string;
    disabled?: boolean;
    children?: ReactElement;
    onChange?: () => {};
    onBlur?: () => {};
    name?: string;
    reverse?: boolean;
    size?: number;
    id?: string;
    value?: string | number;
    max?: number | string;
    min?: number | string;
    step?: number;
}
