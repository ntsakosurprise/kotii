import React from "react";

const Link = ({ goTo, isAbsolute = false, children, ...props }) => {
  const handleOnclick = (e) => {
    e.preventDefault();
  };
  return (
    <a
      href={!isAbsolute ? `#${goTo}` : goTo}
      onClick={handleOnclick}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
