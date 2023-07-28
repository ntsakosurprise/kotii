/* eslint-disable react/prop-types */
import { deepMerge } from "grommet/utils";
import React, { useEffect } from "react";
import { logStoredThemesStatus } from "../config";
import { useTheme } from "../hooks";
// import { DemoSection } from "../components/ThemeSwitcher/DemoSection";
// import { ThemeProvider } from "styled-components";

import { defaultProps as grommetTheme, Grommet, grommet } from "grommet";

type ThemeProps = {
  theme: Object;
  themes: [];
  isThemeLoaded: boolean;
  changeTheme: (currentTheme: any) => void;
  grommetTheme: Object;
};

// Create ThemeContent
const ThemeContext = React.createContext<ThemeProps>({} as ThemeProps);

// const myGrommetTheme = {
//   global: {
//     font: {
//       family: "Roboto",
//     },
//   },
// };

export const CustomThemeProvider = (props) => {
  const { theme, themes, isThemeLoaded, changeTheme } = useTheme();
  const [darkMode, setDarkMode] = React.useState(true);

  console.log("currentTheme;;;", theme);
  console.log("CurrentThemes", themes);
  console.log(isThemeLoaded);
  console.log(props);
  useEffect(() => {
    logStoredThemesStatus();
  }, []);
  useEffect(() => {
    console.log("The updates theme;;;", theme);
    //console.log("Grommet", grommet);
  }, [theme]);
  return (
    <ThemeContext.Provider
      value={{ theme, themes, isThemeLoaded, changeTheme, grommetTheme }}
    >
      <Grommet
        theme={deepMerge(grommet, theme)}
        themeMode={darkMode ? "dark" : "light"}
      >
        {props.children}
      </Grommet>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
