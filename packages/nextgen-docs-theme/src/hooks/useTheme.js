import { useEffect, useState } from "react";
import { getFromStorage, setInStorage } from "Utilities";

export const useTheme = () => {
  const themes = getFromStorage("themes");
  const [theme, setThemeMode] = useState(themes.light);
  const [isThemeLoaded, setThemeStatus] = useState(false);

  const changeTheme = (currentTheme) => {
    setInStorage("theme", currentTheme);
    setThemeMode(currentTheme);
  };

  useEffect(() => {
    const currentTheme = getFromStorage(theme);
    currentTheme ? setThemeMode(currentTheme) : setThemeMode(themes.light);
    setThemeStatus(true);
  }, []);

  return { theme, changeTheme, isThemeLoaded };
};
