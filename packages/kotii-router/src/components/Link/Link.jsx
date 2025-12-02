/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "../../utils/index.js";

const Link = ({
  to,
  routeState = {},
  isAbsolute = false,
  children,
  ...props
}) => {
  const handleOnclick = (e) => {
    e.preventDefault();

    navigate(to, routeState);
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
