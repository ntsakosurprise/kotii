import { ReactNode } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps extends BaseProps {
    footer?: ReactNode;
    header?: ReactNode;
}
