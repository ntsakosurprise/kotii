import { ReactNode } from "react";
import { BaseProps, SizeWithNone } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "align"> {
    align?: {
        top?: "top" | "bottom";
        bottom?: "top" | "bottom";
        right?: "left" | "right";
        left?: "left" | "right";
    };
    gridArea?: string;
    onClick?: () => {};
    hoverIndicator?: boolean | string | "background";
    messages?: {
        busy: string;
        success: string;
    };
    plain?: boolean;
    target?: Object;
    tip?: string | {
        content: ReactNode | "string";
        dropProps: Object;
        plain: boolean;
    };
    type?: "button" | "reset" | "submit";
    elevation?: SizeWithNone;
    inline?: boolean;
    onClickOutside?: () => {};
    onEsc?: () => {};
    restrictFocus?: boolean;
    trapFocus?: boolean;
    stretch?: boolean | "align";
}
