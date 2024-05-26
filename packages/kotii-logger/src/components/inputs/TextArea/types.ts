import { BaseProps, HorizVert, Opacity, SizeNoneXs } from "../../../types";
export interface PageHeaderProps
  extends Omit<
    BaseProps,
    "children" | "wrap" | "width" | "fill" | "size" | "direction"
  > {
  gridArea?: string;

  // children?: ReactElement;
  onChange?: () => {};
  name?: string;
  reverse?: boolean;
  id?: string;
  direction?: HorizVert;
  invert?: boolean;
  // label?: boolean | ((label: any) => {});
  opacity?: boolean | Opacity;
  size?: "full" | Exclude<SizeNoneXs, "none">;

  // defaultValue?: string | number | Readonly;

  focustIndicator?: boolean;

  open?: boolean;
  options: (string | number | boolean | JSX.Element | Object)[];
  placeholder?: string;
  plain?: boolean;
  value?: string;

  resize?: boolean | HorizVert;

  // skeleton?: { width?: { min?: number } };
}
