import { getFromStorage, setInStorage } from "Utilities";
import { themes } from "./themes";

const processDefaultTheme = () => {
  if (!getFromStorage("theme")) setInStorage("theme", themes.calm);
};
setInStorage("themes", themes);
processDefaultTheme();

export const logStoredThemesStatus = () => {
  if (getFromStorage("themes")) {
    console.log("Themes have been set");
  } else {
    console.log("Theme are not yet available");
  }
};
