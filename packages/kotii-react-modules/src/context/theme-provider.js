/* eslint-disable react/prop-types */
import { logStoredThemesStatus } from "Config";
import { useTheme } from "Hooks";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
const ThemeContext = React.createContext(null);

export const CustomThemeProvider = (props) => {
  const { theme, themes, isThemeLoaded, changeTheme } = useTheme();
  console.log("currentTheme;;;", theme);
  console.log(themes);
  console.log(isThemeLoaded);
  console.log(props);
  useEffect(() => {
    logStoredThemesStatus();
  });
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{ theme, themes, isThemeLoaded, changeTheme }}
      >
        {props.children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);