/* eslint-disable react/prop-types */
import styled from "kotii-styled";
import PropTtypes from "prop-types";
import React from "react";
const StyledStandardComponent = styled("div")(() => ({
  width: "100%"
}));
const StandardComponent = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledStandardComponent, null, children);
};
StandardComponent.propTypes = {
  children: PropTtypes.element.isRequired
};
export default StandardComponent;