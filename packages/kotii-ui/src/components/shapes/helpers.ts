import { doBackground } from "./utils/background";
import { doBorder } from "./utils/border";
import { doClippedShapes } from "./utils/shapes";
import { DoWidthHeightType } from "./utils/types";
import { doWidthHeight } from "./utils/width";

export const createJSCSSSchema = (props, shape, clipShape = "") => {
  console.log("The passed props", props);
  console.log("KOTIITHEME PROVIDER;;;", props?.theme?.global?.colors);
  let themeMode = props?.themeMode;
  let size = props?.size ? props.size : null;

  let widthHeight: DoWidthHeightType = doWidthHeight(props, shape, size);
  let border = doBorder(props, shape, themeMode);
  let background = doBackground(props, shape, themeMode);
  let clippedShape = clipShape
    ? doClippedShapes(props, clipShape, themeMode)
    : {};
  console.log("the Widthand the HEIGHT;;;", widthHeight);

  return {
    backgroundColor: background,
    ...widthHeight,
    ...border,
    ...clippedShape,
    // border,
    // border: "solid red 2px",
  };
};

// export const checkBackground = (colors, background, themeMode) => {
//   let backgroundName = colors[background.toLowerCase()] || null;

//   console.log("theBackgroundBefore;;;", background);
//   console.log("The background", colors[background.toLowerCase()]);
//   console.log("backgroundName", backgroundName);
//   if (!backgroundName) return background;

//   if (typeof backgroundName === "object") {
//     if (themeMode === "dark" || themeMode === "light") {
//       console.log("themeMODE IS dark or light");
//       background = backgroundName[themeMode];
//     } else {
//       background = background;
//     }
//   } else {
//     console.log("themeBackgroun is a string");
//     background = backgroundName;
//   }
//   console.log("The Background After;;;", background);
//   return background;
// };

// const getDefaultValue = (proKey, isNumeric = false, text = "") => {
//   console.log("getDefaultValue;;;", proKey, isNumeric, text);
//   if (defaultValues[proKey]) {
//     if (isNumeric) return defaultValues[proKey]["numeric"];
//     if (!text) return defaultValues[proKey];
//     console.log(
//       "Value to be returned string;;;",
//       defaultValues[proKey]["string"][text]
//     );
//     return defaultValues[proKey]["string"][text];
//   }
//   throw new Error(ERORR_MESSAGES.property_is_not_supported);
// };

// const getVendorThemeProps = (themeProps, prop): any => {
//   return themeProps?.theme?.global[prop]
//     ? themeProps?.theme?.global[prop]
//     : null;
// };

// export const extractProperty = (propertyKey, propertySource) => {
//   return propertySource[propertyKey] ? propertySource[propertyKey] : false;
// };

// const checkPropertyValue = (propertyKey, value) => {
//   console.log("The PropertycheckValue;;;", value);
//   console.log("THePROPER KEY;;", propertyKey);
//   console.log("TheTypeoF propertyValue;;;", number_check_pattern.test(value));
//   console.log("SHAPE SIZES;;;", SHAPE_SIZES);
//   console.log("SHAPE SIZES INCLUDES", SHAPE_SIZES.includes(value));
//   if (!value) return value;
//   if (number_check_pattern.test(value)) return value;
//   if (typeof value === "string") {
//     if (SHAPE_SIZES.includes(value))
//       return getDefaultValue(propertyKey, false, value.toLowerCase());
//     throw new Error(ERORR_MESSAGES.string_value_constant);
//   }

//   throw new Error(ERORR_MESSAGES.value_format_unrecognised);
// };

// const doWidthHeight = (
//   props: object,
//   shape: string,
//   size: string | number
// ): DoWidthHeightType => {
//   size ? (props["width"] = size) : null;
//   let width = checkPropertyValue("width", extractProperty("width", props));
//   let height = checkPropertyValue("height", extractProperty("height", props));
//   console.log("doWidthAndHeight;;;", width, height);
//   console.log("The SHAPE", shape);
//   switch (shape) {
//     case "square":
//       console.log("case is SQUARE");
//       return squareWidthHeight(width, height, shape);
//   }

//   return {
//     width,
//     height,
//   };
// };

// const doBackground = (
//   props: object,
//   shape: string,
//   themeMode: string
// ): string => {
//   let background =
//     extractProperty("background", props) || getDefaultValue("background");
//   let themeColors = getVendorThemeProps(props, "colors");

//   background = themeColors
//     ? checkBackground(themeColors, background, themeMode)
//     : background;

//   return background;
// };

// const doBorder = (
//   props: object,
//   shape: string,
//   themeMode: string
// ): string | object => {
//   let background =
//     extractProperty("background", props) || getDefaultValue("background");
//   let themeColors = getVendorThemeProps(props, "colors");

//   background = themeColors
//     ? checkBackground(themeColors, background, themeMode)
//     : background;

//   return background;
// };

// const squareWidthHeight = (width, height, shape): DoWidthHeightType => {
//   if (!width && !height)
//     return {
//       width: getDefaultValue("width", true),
//       height: getDefaultValue("height", true),
//     };
//   if (!width) return { width: height, height };
//   if (!height) return { width, height: width };
//   return { width, height };
// };
