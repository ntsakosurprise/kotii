import { ReactElement } from "react";
import { Align, BaseProps, SizeWithNone } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "width" | "fill"> {
    gridArea?: string;
    disabled?: boolean;
    checked?: boolean;
    children?: ReactElement;
    label?: string | ReactElement;
    onChange?: () => {};
    onBlur?: () => {};
    name?: string;
    reverse?: boolean;
    buttonProps?: {};
    calendarProps?: {};
    dropProps?: {
        align?: {
            top?: "top" | "bottom";
            bottom?: "top" | "bottom";
            right?: "left" | "right";
            left?: "left" | "right";
        };
    };
    icon?: ReactElement;
    id?: string;
    value?: string | number;
    dropHeight?: Exclude<SizeWithNone, "none">;
    mask?: [
        {
            length: number | [number];
            fixed: "string";
            options: [string] | [number];
            regexp: {};
            placeholder: "string";
            restrictToOptions: true;
        }
    ];
    textAlign?: Exclude<Align, "stretch">;
}
