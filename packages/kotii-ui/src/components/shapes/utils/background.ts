import { extractProperty } from "./ekstractors";
import { getDefaultValue, getVendorThemeProps } from "./getters";
const checkBackground = (colors, background, themeMode) => {
  let backgroundName = colors[background.toLowerCase()] || null;

  console.log("theBackgroundBefore;;;", background);
  console.log("The background", colors[background.toLowerCase()]);
  console.log("backgroundName", backgroundName);
  if (!backgroundName) return background;

  if (typeof backgroundName === "object") {
    if (themeMode === "dark" || themeMode === "light") {
      console.log("themeMODE IS dark or light");
      background = backgroundName[themeMode];
    } else {
      background = background;
    }
  } else {
    console.log("themeBackgroun is a string");
    background = backgroundName;
  }
  console.log("The Background After;;;", background);
  return background;
};

const doBackground = (
  props: object,
  shape: string,
  themeMode: string
): string => {
  let background =
    extractProperty("background", props) || getDefaultValue("background");
  let themeColors = getVendorThemeProps(props, "colors");

  background = themeColors
    ? checkBackground(themeColors, background, themeMode)
    : background;

  return background;
};

export { doBackground };
