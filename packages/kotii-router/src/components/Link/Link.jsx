import React from "react";
import { navigate } from "../../utils/index.js";

const Link = ({ to, isAbsolute = false, children, ...props }) => {
  console.log("THE NAVIGATE FUNCTION", to, isAbsolute);
  const handleOnclick = (e) => {
    console.log("HANDLE CLICK RUNS", e);
    e.preventDefault();
    console.log("LINK NAVIGATION TO", to);
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
