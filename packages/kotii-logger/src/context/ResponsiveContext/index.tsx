import { ResponsiveContext as GresponsiveContext } from "grommet";
import React from "react";
const ResContext = React.createContext<any>(null);

const ResponsiveContext = () => {
  const size = React.useContext(GresponsiveContext);
  return <ResContext.Provider value={{ size }}></ResContext.Provider>;
};

export default ResponsiveContext;
export const useResponsiveContext = () => {
  return React.useContext(ResContext);
};
