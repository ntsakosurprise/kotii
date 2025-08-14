import React from "react";
import { navigate } from "../../utils/index.js";

const Link = ({ to, isAbsolute = false, children, ...props }) => {
  const handleOnclick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleOnclick} {...props}>
      {children}
    </a>
  );
  //   return (
  //     <a href={!isAbsolute ? `#${to}` : to} onClick={handleOnclick} {...props}>
  //       {children}
  //     </a>
  //   );
};

export default Link;
