import { useEffect, useState } from "react";
import { setInStorage, getFromStorage } from "Utilities";

export const useTheme = () => {
  const themes = getFromStorage("themes");
  const [theme, setTheme] = useState(themes.dark);
  const [isThemeLoaded, setThemeLoaded] = useState(false);

  const getWebFonts = () => {
    const appFonts = [];
    for (let th in themes) {
      appFonts.push(themes[th].font);
    }
    return appFonts;
  };
  const setThemeMode = (themeMode) => {
    setInStorage("theme", themeMode);
    setTheme(themeMode);
  };

  useEffect(() => {
    const currentTheme = getFromStorage("theme");
    currentTheme ? setTheme(currentTheme) : setTheme(themes.calm);
    setThemeLoaded(true);
  }, []);

  return { theme, isThemeLoaded, setThemeMode, getWebFonts };
};
