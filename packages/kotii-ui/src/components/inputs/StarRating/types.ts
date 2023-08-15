import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "animation" | "children"> {
  gridArea?: string;
  // disabled?: boolean | (string | number | Object)[];

  // children?: ReactElement;
  onChange?: () => {};
  name: string;
  reverse?: boolean;
  id?: string;
}
