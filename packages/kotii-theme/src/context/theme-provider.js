/* eslint-disable react/prop-types */
import { logStoredThemesStatus } from "Config";
import { useTheme } from "Hooks";
import React, { useEffect } from "react";
// import { ThemeProvider } from "styled-components";
import { Grommet } from "grommet";

// Create ThemeContent
const ThemeContext = React.createContext(null);

// const myGrommetTheme = {
//   global: {
//     font: {
//       family: "Roboto",
//     },
//   },
// };

export const CustomThemeProvider = (props) => {
  const { theme, themes, isThemeLoaded, changeTheme } = useTheme();
  console.log("currentTheme;;;", theme);
  console.log("CurrentThemes", themes);
  console.log("isThemeLoaded", isThemeLoaded);
  console.log(props);
  useEffect(() => {
    console.log("PROVIDER EFFECT RUNNING", themes);
    logStoredThemesStatus();
  }, []);
  return (
    <Grommet theme={theme}>
      <ThemeContext.Provider
        value={{ theme, themes, isThemeLoaded, changeTheme }}
      >
        {props.children}
      </ThemeContext.Provider>
    </Grommet>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
