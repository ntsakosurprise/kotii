/* eslint-disable react/prop-types */
// import { logStoredThemesStatus } from "Config";
// import { deepMerge } from "grommet/utils";
// import { useTheme } from "Hooks";
import React from "react";
// import { DemoSection } from "../components/ThemeSwitcher/DemoSection";
// import { ThemeProvider } from "styled-components";

import { Grommet } from "grommet";

type ThemeProps = {
  theme: { name: string };
};

const theme = {
  theme: { name: "Surprise" },
};

// Create ThemeContent
const ThemeContext = React.createContext<ThemeProps>(theme);

// const myGrommetTheme = {
//   global: {
//     font: {
//       family: "Roboto",
//     },
//   },
// };

export const CustomThemeProvider = (props) => {
  // const { theme, themes, isThemeLoaded, changeTheme } = useTheme();
  // const [darkMode, setDarkMode] = React.useState(true);

  // console.log("currentTheme;;;", theme);
  // console.log("CurrentThemes", themes);
  // console.log(isThemeLoaded);
  // console.log(props);
  // useEffect(() => {
  //   logStoredThemesStatus();
  // }, []);
  // useEffect(() => {
  //   console.log("The updates theme;;;", theme);
  //   console.log("Grommet", grommet);
  // }, [theme]);
  return (
    <ThemeContext.Provider value={theme}>
      <Grommet
      // theme={deepMerge(grommet, theme)}
      // themeMode={darkMode ? "dark" : "light"}
      >
        {props.children}
      </Grommet>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
