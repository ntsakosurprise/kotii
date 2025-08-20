import React from "react";
import { navigate } from "../../utils/index.js";

const Suspense = ({ to, isAbsolute = false, children, ...props }) => {
  const handleOnclick = (e) => {
    e.preventDefault();
    console.log("LINK NAVIGATION TO", to);
    navigate(to);
  };
  return (
    <a href={to} onClick={handleOnclick} {...props}>
      {children}
    </a>
  );
};

export default Suspense;
