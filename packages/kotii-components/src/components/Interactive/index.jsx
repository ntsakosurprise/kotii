import React from "react";

export const Interactive = ({ children }) => {
  console.log("THE INTERACTIVE CHILDREN", children);
  return React.cloneElement(children, { "data-interactive": true });
};
