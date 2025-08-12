import React from "react";

const Link = ({ goTo, children, ...props }) => {
  return (
    <a href={goTo} {...props}>
      {children}
    </a>
  );
};

export default Link;
