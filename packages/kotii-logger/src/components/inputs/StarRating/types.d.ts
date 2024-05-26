import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "animation" | "children"> {
    gridArea?: string;
    onChange?: () => {};
    name: string;
    reverse?: boolean;
    id?: string;
}
