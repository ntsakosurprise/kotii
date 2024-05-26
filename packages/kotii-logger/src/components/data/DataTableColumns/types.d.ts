import { BaseProps } from "../../../types";
export interface PageHeaderProps extends BaseProps {
    gridArea?: string;
    drop: boolean;
    options: (string | {
        property: string;
        label: string;
    })[];
}
