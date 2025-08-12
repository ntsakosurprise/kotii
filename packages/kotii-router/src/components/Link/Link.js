import React from "react";

const Link = ({ goTo, isAbsolute = false, children, ...props }) => {
  return (
    <a href={!isAbsolute ? `#${goTo}` : goTo} {...props}>
      {children}
    </a>
  );
};

export default Link;
