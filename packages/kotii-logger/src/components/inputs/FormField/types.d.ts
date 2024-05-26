import { ReactElement, ReactNode } from "react";
import { BaseProps, HorizVert, SizeWithNone } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "width" | "fill" | "size" | "direction" | "pad"> {
    gridArea?: string;
    disabled?: boolean;
    onChange?: () => {};
    onSelect?: () => {};
    onSuggestionSelect?: () => {};
    onSuggestionClose?: () => {};
    onSuggestionOpen?: () => {};
    name?: string;
    reverse?: boolean;
    id?: string;
    direction?: HorizVert;
    invert?: boolean;
    messages?: {
        enterSelect: string;
        suggestionsCount: string;
        suggestionsExist: string;
        suggestionIsOpen: string;
    };
    size?: number;
    closeOnChange?: boolean;
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
    icon?: ReactElement;
    onMore?: () => {};
    onOpen?: () => {};
    onClose?: () => {};
    onSearch?: () => {};
    open?: boolean;
    suggestions?: (string | Object)[];
    placeholder?: ReactElement | ReactNode | string;
    plain?: boolean;
    value?: number | string;
    defaultSuggestion?: number;
    contextProps?: {};
    error?: string | ReactNode;
    help?: string | ReactNode;
    htmlFor?: string;
    info?: string | ReactNode;
    label?: string | ReactNode;
    require?: boolean | {
        indicator: false;
    };
    validate?: {
        regexp: RegExp;
        message: string | ReactNode;
        status: "error" | "info";
    } | (() => {}) | (string | (() => {}))[];
    validateOn?: "blur" | "submit" | "change";
    component?: Object | (() => {});
    pad?: boolean;
}
