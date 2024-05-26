import { ReactElement, ReactNode } from "react";
import { BaseProps, ButtonType, Target } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "hoverIndicator"> {
    color?: string | {
        dark?: string;
        light?: string;
    };
    gridArea?: string;
    disabled?: boolean;
    href?: string;
    icon?: ReactElement;
    label?: string | ReactElement;
    onClick?: () => {};
    active?: boolean;
    badge?: ReactElement | boolean | number | Exclude<ButtonType, "elevation">;
    busy?: boolean;
    children?: ReactNode;
    hoverIndicator?: boolean | string | "background";
    messages?: {
        busy: string;
        success: string;
    };
    plain?: boolean;
    primary?: boolean;
    secondary?: boolean;
    reverse?: boolean;
    success?: boolean;
    target?: Target;
    tip?: string | {
        content: ReactNode | "string";
        dropProps: Object;
        plain: boolean;
    };
    type?: "button" | "reset" | "submit";
}
