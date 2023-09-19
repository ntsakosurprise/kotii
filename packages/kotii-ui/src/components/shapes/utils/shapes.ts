import { getDefaultValue } from "./getters";
import { shapeClips } from "./shape_clips";
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

export const rectangleWidthHeight = (
  width,
  height,
  shape
): DoWidthHeightType => {
  if (!width && !height)
    return {
      width: getDefaultValue("width", true),
      height: getDefaultValue("width", true) / 2,
    };
  if (!width) return { width: height, height: height / 2 };
  if (!height) return { width, height: width / 2 };
  return { width, height: height / 2 };
};

export const ovalWidthHeight = (width, height, shape): DoWidthHeightType => {
  if (!width && !height) {
    let width = getDefaultValue("width", true);
    let height = width / 2;
    // let radiusDivisor = height / 2 + "px";
    let borderRadius = BORDER_RADIUS;
    return {
      width,
      height,
      borderRadius,
    };
  }
  if (!width) return { width: height, height: height / 2 };
  if (!height) return { width, height: width / 2 };
  return { width, height: height / 2 };
};

export const clipPathWidthHeight = (
  width,
  height,
  shape
): DoWidthHeightType => {
  if (!width && !height)
    return {
      width: getDefaultValue("width", true),
      height: getDefaultValue("height", true),
    };
  if (!width) return { width: height, height };
  if (!height) return { width, height: width };
  return { width, height };
};

export const doClippedShapes = (props, shape, themeMode) => {
  if (!shapeClips[shape]) return {};
  let flexLayout = doClippedShapesContentPositioning();

  return {
    clipPath: shapeClips[shape],
    ...flexLayout,
  };
};

const doClippedShapesContentPositioning = () => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
};
