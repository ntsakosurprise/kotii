import { getFromStorage, setInStorage } from "Utilities";
import { themes } from "./themes";

setInStorage("themes", themes);

export const logStoredThemesStatus = () => {
  if (getFromStorage("themes")) {
    console.log("Themes have been set");
  } else {
    console.log("Theme are not yet available");
  }
};
