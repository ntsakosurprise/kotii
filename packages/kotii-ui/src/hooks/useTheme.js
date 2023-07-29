import { getFromStorage, setInStorage } from "kotii-utils";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const themes = getFromStorage("themes");
  const [theme, setThemeMode] = useState(getFromStorage("theme"));
  const [isThemeLoaded, setThemeStatus] = useState(false);

  const changeTheme = (currentTheme) => {
    setInStorage("theme", JSON.stringify(currentTheme));
    setThemeMode(currentTheme);
  };

  useEffect(() => {
    const currentTheme = getFromStorage(theme);
    currentTheme ? setThemeMode(currentTheme) : setThemeMode(theme);
    setThemeStatus(true);
  }, []);

  return { theme, themes, changeTheme, isThemeLoaded };
};
