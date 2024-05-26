import { ReactElement } from "react";
import { Corners } from "src/types/generic/types";
import { BaseProps } from "../../../types";
export interface PageHeaderProps extends BaseProps {
  title?: string;
  subtitle?: string;
  parent?: ReactElement;
  actions?: ReactElement;
  position?: Corners | string;
  responsive?: boolean;
  target?: Object;
}
