import React from "react";
import styled from "styled-components";
import { useKotiiTheme } from "../../../context/";
import { Shapes } from "../types";
// import { defaultValues } from "./defaults";
// import * as ERORR_MESSAGES from "./error_messages";
import { createJSCSSSchema } from "../helpers";

interface SquareProps extends Shapes {
  name?: string;
}

// const checkBackground = (colors, background, themeMode) => {
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
// const giveJsCssOb = (props) => {
//   console.log("The passed props", props);
//   console.log("KOTIITHEME PROVIDER;;;", props?.theme?.global?.colors);

//   let width = props?.width ? props.width : 0;
//   let height = props?.height ? props.height : 0;
//   let themeColors = props?.theme?.global?.colors
//     ? props?.theme?.global?.colors
//     : null;
//   let background = props?.background ? props.background : defaultValues.color;
//   let isAllDimensionsSet = width && height ? true : false;
//   background = themeColors
//     ? checkBackground(themeColors, background, props?.themeMode)
//     : background;

//   let isOnlyWidth = isAllDimensionsSet ? false : width ? true : false;
//   let isOnlyHeight = isAllDimensionsSet ? false : height ? true : false;

//   if (isAllDimensionsSet) {
//     if (width !== height) throw new Error(ERORR_MESSAGES.dimensions_mismatch);
//   } else if (isOnlyWidth) {
//     console.log("only width set");
//     height = width;
//     console.log("update value of height", height);
//   } else if (isOnlyHeight) {
//     console.log("only height set");
//     width = height;
//     console.log("updated value of width", width);
//   }
//   return {
//     width: width,
//     height: height,
//     backgroundColor: background,
//     display: "flex",
//   };
// };

const StyledShape = styled("div")((props: any) => {
  console.log("The PROPS", props);
  const shapeName = props?.name || "shape";
  const styles = createJSCSSSchema(props, "clip-path", shapeName);
  console.log("The SHAPE STYLES", styles);
  return { ...styles };
});

const Shape: React.FC<SquareProps> = ({
  testID = "",
  children,
  name,
  ...props
}) => {
  const { theme, themes, changeTheme, themeMode = "dark" } = useKotiiTheme();
  const newProps = { ...props, themeMode };
  console.log("ChangeThemeMode", changeTheme);

  return (
    <StyledShape {...newProps} theme={theme} name={name} data-testid={testID}>
      {children ? children : null}
    </StyledShape>
  );
};

export default Shape;
