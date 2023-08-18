/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { logStoredThemesStatus } from "../config";
import { useTheme } from "../hooks";
// import { DemoSection } from "../components/ThemeSwitcher/DemoSection";
// import { ThemeProvider } from "styled-components";

import { defaultProps as grommetTheme, Grommet } from "grommet";
type ThemeModeProps = "dark" | "light" | "auto";
type ThemeProps = {
  theme: Object;
  themes: [];
  isThemeLoaded: boolean;
  changeTheme: (currentTheme: any) => void;
  changeThemeMode: (...arg: any) => void;
  grommetTheme: Object;
  themeMode: ThemeModeProps;
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
  const { themes, isThemeLoaded } = useTheme();
  const [themeMode, setThemeMode] = React.useState<ThemeModeProps>("dark");
  const [themeName, setThemeName] = useState("dark");

  // console.log("currentTheme;;;", theme);
  // console.log("CurrentThemes", themes);
  // console.log(isThemeLoaded);
  console.log(props);
  useEffect(() => {
    logStoredThemesStatus();
  }, []);

  const changeThemeMode = (themeMode) => {
    console.log("CURRENT THEMMODE", JSON.stringify(themeMode));
    if (themeMode === "dark") {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
  };

  const changeTheme = (name) => {
    setThemeName(name);
  };
  useEffect(() => {
    console.log("THEME NAME CHANGED;;;", themeName);
    console.log("directThemes", directThemes);
    console.log("directThemes theme", directThemes[themeName]);
  }, [themeName]);
  console.log("The theme name", themeName);
  console.log("The them", directThemes[themeName]);

  return (
    <ThemeContext.Provider
      value={{
        theme: directThemes[themeName],
        themes,
        isThemeLoaded,
        changeTheme,
        grommetTheme,
        changeThemeMode,
        themeMode,
      }}
    >
      <Grommet theme={directThemes[themeName]} themeMode={themeMode}>
        {props.children}
      </Grommet>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);

const directThemes = {
  dark: {
    global: {
      colors: {
        background: {
          dark: "#EADDCA",
          light: "#964B00",
        },
        "app-background": {
          dark: "#EADDCA",
          light: "#964B00",
        },
      },
      font: {
        family: "Roboto",
      },
    },
  },

  light: {
    global: {
      colors: {
        background: { dark: "#f5f0f0", light: "white" },
        "app-background": {
          dark: "#f5f0f0",
          light: "white",
        },
      },
      font: {
        family: "Roboto",
      },
    },
  },

  cherry: {
    /* BEGIN: Mapping Colors to Components */
    global: {
      colors: {
        /* BEGIN: Color Palette Definition */
        ruby: {
          dark: "#d4111e",
          light: "#f58990",
        },
        "ruby!": "#EF3F4C",
        gold: {
          dark: "#df9007",
          light: "#e7b86b",
        },
        "gold!": "#F9B644",
        amethyst: {
          dark: "#9B59B6",
          light: "#C39BD3",
        },
        "amethyst!": "#AF7AC5",
        "grey-1": "#ECE9E3",
        "grey-2": "#CECCC6",
        "grey-3": "#737069",
        "grey-4": "#52504C",
        /* END: Color Palette Definition */
        /* BEGIN: Mapping Colors to Grommet Namespaces */
        background: {
          dark: "grey-4",
          light: "grey-1",
        },
        "background-back": {
          dark: "grey-4",
          light: "grey-1",
        },
        "background-front": {
          dark: "grey-3",
          light: "grey-2",
        },
        brand: "ruby!",
        control: {
          dark: "brand",
          light: "brand",
        },
        input: {
          background: "blue",
        },
        text: {
          dark: "grey-1",
          light: "grey-3",
        },
        "app-background": { dark: "blue", light: "green" },
      },
      focus: {
        border: {
          color: "gold",
        },
      },

      background: { dark: "#ed9807", light: "#F9B644" },
      /* END: Mapping Colors to Grommet Namespaces */
    },
    anchor: {
      color: {
        dark: "gold",
        light: "amethyst!",
      },
    },
    /* END: Mapping Colors to Components */
  },

  seaWave: {
    global: {
      colors: {
        /* BEGIN: Color Palette Definition */
        ruby: {
          dark: "#d4111e",
          light: "#f58990",
        },
        "ruby!": "#EF3F4C",
        gold: {
          dark: "#df9007",
          light: "#e7b86b",
        },
        "gold!": "#F9B644",
        amethyst: {
          dark: "#9B59B6",
          light: "#C39BD3",
        },
        "amethyst!": "#AF7AC5",
        "grey-1": "#ECE9E3",
        "grey-2": "#CECCC6",
        "grey-3": "#737069",
        "grey-4": "#52504C",
        /* END: Color Palette Definition */
        /* BEGIN: Mapping Colors to Grommet Namespaces */
        background: {
          dark: "grey-4",
          light: "grey-1",
        },
        "background-back": {
          dark: "grey-4",
          light: "grey-1",
        },
        "background-front": {
          dark: "grey-3",
          light: "grey-2",
        },
        brand: "ruby!",
        control: {
          dark: "brand",
          light: "brand",
        },
        input: {
          background: "blue",
        },
        text: {
          dark: "grey-1",
          light: "grey-3",
        },
        "app-background": { dark: "#d4111e", light: "#e84f59" },
      },
      focus: {
        border: {
          color: "gold",
        },
      },

      /* END: Mapping Colors to Grommet Namespaces */
    },
    /* BEGIN: Mapping Colors to Components */
    anchor: {
      color: {
        dark: "gold",
        light: "amethyst!",
      },
    },
    /* END: Mapping Colors to Components */
  },
};
