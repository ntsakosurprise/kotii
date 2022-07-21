/* eslint-disable react/prop-types */
import React from "react";
const ThemeContext = React.createContext(null);

export const LanguageProvider = (props) => {
  return <ThemeContext.Provider>{props.children}</ThemeContext.Provider>;
};

export const useThemeContext = () => React.useContext(ThemeContext);
