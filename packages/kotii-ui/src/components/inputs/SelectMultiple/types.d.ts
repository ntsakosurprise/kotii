import { ReactElement, ReactNode } from "react";
import { BaseProps, HorizVert, Opacity, SizeNoneXs, SizeWithNone } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "width" | "fill" | "size" | "direction"> {
    gridArea?: string;
    disabled?: boolean | (string | number | Object)[];
    onChange?: () => {};
    name?: string;
    reverse?: boolean;
    id?: string;
    direction?: HorizVert;
    invert?: boolean;
    messages?: {
        multiple?: string;
    };
    opacity?: boolean | Opacity;
    size?: "full" | Exclude<SizeNoneXs, "none">;
    clear?: boolean | {
        position: "top" | "bottom";
        label: string;
    };
    closeOnChange?: boolean;
    defaultValue?: (string | number | Object)[];
    disabledKey?: string | (() => {});
    dropAlign?: {
        top?: "top" | "bottom";
        bottom?: "top" | "bottom";
        right?: "left" | "right";
        left?: "left" | "right";
    };
    dropProps?: object;
    dropTarget?: Object;
    dropHeight?: Exclude<SizeWithNone, "none">;
    emptySearchMessage?: string | ReactNode;
    focustIndicator?: boolean;
    icon?: boolean | ReactNode | (() => {});
    labelKey?: string | (() => ReactNode);
    onMore?: () => {};
    onOpen?: () => {};
    onClose?: () => {};
    onSearch?: () => {};
    open?: boolean;
    options: (string | number | boolean | JSX.Element | Object)[];
    placeholder?: ReactElement | ReactNode | string;
    plain?: boolean;
    replace?: boolean;
    searchPlaceholder?: ReactNode | string;
    selected?: number | number[];
    value?: (string | number | Object)[];
    valueKey?: string | {
        key: "string";
        reduce?: boolean;
    } | (() => string);
    valueLabel?: ReactNode | (() => ReactNode);
    help?: string | ReactNode;
    limit?: number;
    showSelectedInline?: boolean;
    sortSelectedOnClose?: boolean;
}
