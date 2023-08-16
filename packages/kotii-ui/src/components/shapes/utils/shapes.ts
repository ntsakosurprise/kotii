import { getDefaultValue } from "./getters";
import { DoWidthHeightType } from "./types";
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
