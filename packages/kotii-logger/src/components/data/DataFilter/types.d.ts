import { BaseProps } from "../../../types";
export interface PageHeaderProps extends BaseProps {
    gridArea?: string;
    options?: (string | number | {
        label: string;
        value: string | number | boolean;
    })[];
    property: string;
    range?: {
        max: number;
        min: number;
    };
}
