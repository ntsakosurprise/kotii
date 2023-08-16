import { number_check_pattern, split_string_by_space } from "../patterns";
import colors from "./colors";
import { defaultValues } from "./defaults";
import { extractProperty } from "./ekstractors";
import { BorderLineType, BorderWidth } from "./types";
import { capitalizeFirstLetter } from "./utils";
// import { getDefaultValue, getVendorThemeProps } from "./getters";

export const doBorder = (props, shape, themeMODE): object => {
  let border = extractProperty("border", props);
  console.log("THE BORDER", props);
  console.log("THE BORDER EXTRACTED;;;", border);
  const { border: defaultBorder } = defaultValues;
  const { width: borderWidth } = defaultBorder;
  if (!border) return {};
  let splitBorder = splitBorderString(border, split_string_by_space);
  let rawBorder = borderWidth[splitBorder[0]] || splitBorder[0];

  console.log("TheRawBorder;;;", rawBorder);
  let numericeBorder = rawBorder ? setMeasurementUnit(rawBorder, "px") : 0;
  console.log("THE NUMERIC BORDER;;;", numericeBorder);
  let textOrNumericBorder = rawBorder ? rawBorder : numericeBorder;
  console.log("BORDER SPLIT", splitBorder);
  if (textOrNumericBorder) {
    let handledBorder = handleBorder(
      splitBorder,
      defaultValues.border,
      numericeBorder
    );
    console.log("handleBorder;;;", handledBorder);
    return handledBorder;
  }
  return {
    border,
  };
};

export const borderByString = (borderString: string): object => {
  const { border } = defaultValues;
  const { width } = border;
  const setBorder = width[borderString] || "";

  if (setBorder) {
    if (setBorder === "none") return setBorder;
  }

  return {
    border,
  };
};

const splitBorderString = (
  borderString: string,
  splitBy: string | RegExp
): string[] => {
  return borderString.trim().split(splitBy);
};

const handleBorder = (
  borderDict: string[],
  defaultBorder: { width: BorderWidth; lines: BorderLineType; color: string },
  setBorder: string | number
): object => {
  console.log("BorderDictionary", borderDict);
  console.log("BorderDictionary", borderDict[2]);
  console.log("BorderDictionary", colors[borderDict[2]]);
  console.log("BorderDictionary", colors);

  let { lines, color } = defaultBorder;
  let borderWidth: BorderWidth | string | number = setBorder;
  let borderStyle: BorderLineType = borderDict[1]
    ? lines[borderDict[1]]
    : lines?.solid;
  let borderColor = borderDict[2] ? borderDict[2] : color;
  let borderLen = borderDict.length;

  let sides = borderLen > 3 ? borderDict.slice(3, borderLen) : [];
  let borderSides = {};
  sides
    ? sides.map((item, i) => {
        let splitBorderSide = splitBorderString(item, ":");
        let splitBorderSideValues = splitBorderString(splitBorderSide[1], "-");
        let borderSideWidth = splitBorderSideValues[0];
        let borderSideStyle = splitBorderSideValues[1];
        let borderSideColor = splitBorderSideValues[2];

        borderSides[
          `border${capitalizeFirstLetter(splitBorderSide[0])}`
        ] = `${setMeasurementUnit(
          borderSideWidth
        )} ${borderSideStyle} ${borderSideColor}`;
      })
    : "";

  return {
    borderWidth,
    borderStyle,
    borderColor,
    ...borderSides,
  };
};

const setMeasurementUnit = (target: string, unit: string = "px") => {
  if (number_check_pattern.test(target)) {
    return `${target}${unit}`;
  } else {
    return target;
  }
};
