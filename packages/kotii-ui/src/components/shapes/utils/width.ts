import { checkPropertyValue } from "./checkers";
import { extractProperty } from "./ekstractors";
import { squareWidthHeight } from "./shapes";
import { DoWidthHeightType } from "./types";
export const doWidthHeight = (
  props: object,
  shape: string,
  size: string | number
): DoWidthHeightType => {
  size ? (props["width"] = size) : null;
  let width = checkPropertyValue("width", extractProperty("width", props));
  let height = checkPropertyValue("height", extractProperty("height", props));
  console.log("doWidthAndHeight;;;", width, height);
  console.log("The SHAPE", shape);
  switch (shape) {
    case "square":
      console.log("case is SQUARE");
      return squareWidthHeight(width, height, shape);
  }

  return {
    width,
    height,
  };
};
