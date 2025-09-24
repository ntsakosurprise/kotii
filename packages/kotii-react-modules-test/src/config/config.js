import { getFromStorage } from "kotii-utils";
// import { themes } from "./themes";

// const processDefaultTheme = () => {
//   return null;
// };
//setInStorage("themes", themes);
//processDefaultTheme();

export const logStoredThemesStatus = () => {
  if (getFromStorage("themes")) {
    console.log("Themes have been set");
  } else {
    console.log("Theme are not yet available");
  }
};
