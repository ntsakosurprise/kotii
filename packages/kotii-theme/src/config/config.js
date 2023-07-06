import { getFromStorage, setInStorage } from "kotii-utils";
import { grommetThemes, themes } from "./themes";

const processDefaultTheme = () => {
  if (!getFromStorage("theme"))
    setInStorage("theme", grommetThemes.seaWaveTheme);
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
