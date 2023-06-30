/* eslint-disable react/prop-types */
import PropTtypes from "prop-types";
import React from "react";

const StandardComponent = ({ children }) => {
  return <>{children}</>;
};

StandardComponent.propTypes = {
  children: PropTtypes.element.isRequired,
};

export default StandardComponent;
