import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "animation"> {
    full?: boolean | "vertical" | "horizontal";
    modal?: boolean;
    onClickOutside?: () => {};
    onEsc?: () => {};
    animation?: "none" | "slide" | "fadeIn" | boolean;
    plain?: boolean;
}
