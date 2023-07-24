/* eslint-disable react/prop-types */
import { logStoredThemesStatus } from "Config";
import { deepMerge } from "grommet/utils";
import { useTheme } from "Hooks";
import React, { useEffect } from "react";
// import { DemoSection } from "../components/ThemeSwitcher/DemoSection";
// import { ThemeProvider } from "styled-components";

import {
  Box,
  Button,
  defaultProps as grommetTheme,
  Grommet,
  grommet,
  Heading,
  Paragraph,
} from "grommet";

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
  const [darkMode, setDarkMode] = React.useState(false);

  console.log("currentTheme;;;", theme);
  console.log("CurrentThemes", themes);
  console.log(isThemeLoaded);
  console.log(props);
  useEffect(() => {
    logStoredThemesStatus();
  }, []);
  return (
    <ThemeContext.Provider
      value={{ theme, themes, isThemeLoaded, changeTheme, grommetTheme }}
    >
      <Grommet
        theme={deepMerge(grommet, theme)}
        themeMode={darkMode ? "dark" : "light"}
      >
        {props.children}
        <Box>
          <p>Grommet boxx</p>
          <Heading level="1">Hello Grommet Theme Toggle</Heading>
          <Paragraph fill>
            This is a{" "}
            {/* <Anchor
            as={"a"}
              href="https://developer.hpe.com/blog/dark-mode-theming-in-grommet-theme-color-customization/"
              target="_blank"
              // function={() => {}}
            >
              theming tutorial
            </Anchor> */}
            using Grommet.
          </Paragraph>
          <Button
            label="Toggle Theme"
            primary
            alignSelf="center"
            margin="large"
            onClick={() => setDarkMode(!darkMode)}
          />
        </Box>
        {/* <Box pad="large">
          <Heading level="1">Hello Grommet Theme Toggle</Heading>
          <Paragraph fill>
            This is a{" "}
            <Anchor
              href="https://developer.hpe.com/blog/dark-mode-theming-in-grommet-theme-color-customization/"
              target="_blank"
            >
              theming tutorial
            </Anchor>{" "}
            using Grommet.
          </Paragraph>

          <Button
            label="Toggle Theme"
            primary
            alignSelf="center"
            margin="large"
            onClick={() => setDarkMode(!darkMode)}
          />
          <DemoSection />
        </Box> */}
      </Grommet>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
