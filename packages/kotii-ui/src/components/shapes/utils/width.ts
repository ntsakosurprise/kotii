import { checkPropertyValue } from "./checkers";
import { extractProperty } from "./ekstractors";
import {
  circleWidthHeight,
  clipPathWidthHeight,
  ovalWidthHeight,
  rectangleWidthHeight,
  squareWidthHeight,
} from "./shapes";
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
    case "circle":
      return circleWidthHeight(width, height, shape);
    case "rectangle":
      return rectangleWidthHeight(width, height, shape);

    case "oval":
      console.log("case is Rectangle;;;", width, height, shape);
      let rectWidth = ovalWidthHeight(width, height, shape);
      console.log("THE RECTWIDTH;;;", rectWidth);
      return rectWidth;
    case "clip-path":
      return clipPathWidthHeight(width, height, shape);
  }

  return {
    width,
    height,
  };
};
