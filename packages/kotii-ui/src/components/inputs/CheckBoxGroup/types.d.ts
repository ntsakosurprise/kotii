import { CheckBoxType } from "grommet";
import { ReactElement } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "width" | "fill" | "size"> {
    gridArea?: string;
    disabled?: boolean;
    checked?: boolean;
    children?: ReactElement;
    onChange?: () => {};
    name?: string;
    defaultValue?: Array<string | number>;
    options: (string | CheckBoxType)[];
    value?: [number | string];
    valueKey?: string;
    labelKey?: string;
}
