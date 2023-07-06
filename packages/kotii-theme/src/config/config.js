import { getFromStorage, setInStorage } from "kotii-utils";
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
    console.log("Themes are not yet available");
  }
};
