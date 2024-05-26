import { BaseProps } from "../../../types";
export interface PageHeaderProps extends BaseProps {
    gridArea?: string;
    activeIndex?: number | number[];
    animate?: boolean;
    messages?: {
        tabContents?: string;
    };
    multiple?: boolean;
    onActive?: ([]: Iterable<any>) => {};
}
