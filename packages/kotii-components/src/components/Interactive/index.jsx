import React from "react";

export const Interactive = (children, props) => {
  return React.cloneElement(children, { ...props, "data-interactive": true });
};
