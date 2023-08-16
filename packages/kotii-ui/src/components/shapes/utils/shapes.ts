import { getDefaultValue } from "./getters";
import { DoWidthHeightType } from "./types";
const BORDER_RADIUS: string = "50%";
export const squareWidthHeight = (width, height, shape): DoWidthHeightType => {
  if (!width && !height)
    return {
      width: getDefaultValue("width", true),
      height: getDefaultValue("height", true),
    };
  if (!width) return { width: height, height };
  if (!height) return { width, height: width };
  return { width, height };
};

export const circleWidthHeight = (width, height, shape): DoWidthHeightType => {
  let borderRadius = BORDER_RADIUS;
  if (!width && !height)
    return {
      width: getDefaultValue("width", true),
      height: getDefaultValue("height", true),
      borderRadius,
    };
  if (!width) return { width: height, height, borderRadius };
  if (!height) return { width, height: width, borderRadius };
  return { width, height, borderRadius };
};
