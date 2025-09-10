import { useThemeContext } from "Context";
import React from "react";
// import { GlobalStyle } from "./global.style";

// eslint-disable-next-line react/prop-types
const ThemeGlobalStyle = ({ globalStyle: GlobalStyle }) => {
  const { theme } = useThemeContext();
  console.log("Test Global theme", theme);
  return <GlobalStyle theme={theme} />;
};

export { ThemeGlobalStyle };
