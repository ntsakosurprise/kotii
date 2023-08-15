import { SHAPES_COLOR } from "./constants";
const sizes = {
  xxsmall: 25,
  xsmall: 50,
  small: 100,
  medium: 300,
  large: 400,
  xlarge: 500,
  xxlarge: 600,
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
};
