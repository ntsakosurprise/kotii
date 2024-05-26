import { ReactElement } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps extends BaseProps {
    color?: string | {
        dark?: string;
        light?: string;
    };
    gridArea?: string;
    disabled?: boolean;
    href?: string;
    icon?: ReactElement;
    label?: string | ReactElement;
    revers?: boolean;
    onClick?: () => {};
}
