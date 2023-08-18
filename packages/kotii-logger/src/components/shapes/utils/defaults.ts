import { SHAPES_COLOR } from "../constants";
const sizes = {
  xxsmall: 25,
  xsmall: 50,
  small: 100,
  medium: 300,
  large: 400,
  xlarge: 500,
  xxlarge: 600,
};
const BORDER_SIZES = {
  none: 0,
  xxsmall: 1,
  xsmall: 1.5,
  small: 2,
  medium: 2.5,
  large: 3,
  xlarge: 3.5,
  xxlarge: 4,
};

const BORDER_LINES = {
  solid: "solid",
  dotted: "dotted",
  dashed: "dashed",
  groove: "groove",
  ridge: "ridge",
  inset: "inset",
  double: "double",
  hidden: "hidden",
};

export const defaultValues = {
  width: {
    numeric: 100,
    string: sizes,
  },
  height: {
    numeric: 100,
    string: sizes,
  },
  background: SHAPES_COLOR,
  border: { width: BORDER_SIZES, color: SHAPES_COLOR, lines: BORDER_LINES },
};
