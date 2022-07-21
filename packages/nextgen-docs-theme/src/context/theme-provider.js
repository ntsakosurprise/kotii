/* eslint-disable react/prop-types */
import { logStoredThemesStatus } from "Config";
import { useTheme } from "Hooks";
import React, { useEffect } from "react";
const ThemeContext = React.createContext(null);

export const ThemeProvider = (props) => {
  const [theme, isThemeLoaded, changeTheme] = useTheme();
  useEffect(() => {
    logStoredThemesStatus();
  });
  return (
    <ThemeContext.Provider value={(theme, isThemeLoaded, changeTheme)}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
