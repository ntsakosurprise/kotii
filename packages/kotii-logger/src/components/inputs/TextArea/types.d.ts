/// <reference types="react" />
import { BaseProps, HorizVert, Opacity, SizeNoneXs } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "width" | "fill" | "size" | "direction"> {
    gridArea?: string;
    onChange?: () => {};
    name?: string;
    reverse?: boolean;
    id?: string;
    direction?: HorizVert;
    invert?: boolean;
    opacity?: boolean | Opacity;
    size?: "full" | Exclude<SizeNoneXs, "none">;
    focustIndicator?: boolean;
    open?: boolean;
    options: (string | number | boolean | JSX.Element | Object)[];
    placeholder?: string;
    plain?: boolean;
    value?: string;
    resize?: boolean | HorizVert;
}
