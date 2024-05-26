import { ThemeContext as GtContext } from "grommet";
import React from "react";
const TContext = React.createContext<any>(null);

const ThemeContext = ({ theme, children, ...props }) => {
  return (
    <TContext.Provider value={{ theme }}>
      <GtContext.Extend value={theme}>{children}</GtContext.Extend>
    </TContext.Provider>
  );
};

export default ThemeContext;
export const useThemeContext = () => {
  return React.useContext(TContext);
};
