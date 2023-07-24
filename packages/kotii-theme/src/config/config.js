import { getFromStorage, removeFromStorage, setInStorage } from "kotii-utils";
import { themes } from "./themes";

const initiateThemes = () => {
  console.log("PROCESSDEFAULTHEME;;;");

  if (!getFromStorage("theme")) {
    setInStorage("theme", themes.seaWave);
    setInStorage("themes", themes);
  }
};

removeFromStorage("theme");
removeFromStorage("themes");

initiateThemes();

export const logStoredThemesStatus = () => {
  if (getFromStorage("themes")) {
    console.log("Themes have been set", getFromStorage("themes"));
  } else {
    console.log("Themes are not yet available");
  }
};

export const checkOrSetThemes = () => {
  // removeFromStorage("theme");
  // removeFromStorage("themes");
  const foundItemInChek = getFromStorage("theme");
  console.log("CHECKORSETTING");
  console.log("FoundItemInChek", foundItemInChek);
  if (!foundItemInChek) {
    console.log("Item not found, check about to set;;;", themes);
    // console.log("Item stringified;;;", JSON.stringify(grommetThemes));
    // console.log(
    //   "Item theme stringified;;;",
    //   JSON.stringify(grommetThemes.seaWaveTheme)
    // );
    setInStorage("theme", themes.seaWaveTheme);
    setInStorage("themes", themes);
  }
  return true;

  // setInStorage("themes", JSON.stringify(grommetThemes));
  // return true;
};

export const getThemes = () => {
  const themes = getFromStorage("themes");
  if (themes) {
    return themes;
  }
  return null;

  // setInStorage("themes", JSON.stringify(grommetThemes));
  // return true;
};

export const getTheme = () => {
  const theme = getFromStorage("theme");

  if (theme) {
    return theme;
  }
  return null;

  // setInStorage("themes", JSON.stringify(grommetThemes));
  // return true;
};
