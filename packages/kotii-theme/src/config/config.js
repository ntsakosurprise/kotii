import { getFromStorage, setInStorage } from "kotii-utils";
import { grommetThemes } from "./themes";

const processDefaultTheme = () => {
  console.log("PROCESSDEFAULTHEME;;;");

  if (!getFromStorage("theme"))
    setInStorage("theme", JSON.stringify(grommetThemes.seaWaveTheme));
};
//removeFromStorage("themes");
setInStorage("themes", JSON.stringify(grommetThemes));
processDefaultTheme();

export const logStoredThemesStatus = () => {
  if (getFromStorage("themes")) {
    console.log("Themes have been set", grommetThemes);
  } else {
    console.log("Themes are not yet available");
  }
};
