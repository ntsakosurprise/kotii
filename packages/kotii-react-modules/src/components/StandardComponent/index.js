/* eslint-disable react/prop-types */
import PropTtypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledStandardComponent = styled("div")(() => ({
  width: "100%",
}));

const StandardComponent = ({ children }) => {
  return <StyledStandardComponent>{children}</StyledStandardComponent>;
};

StandardComponent.propTypes = {
  children: PropTtypes.element.isRequired,
};

export default StandardComponent;
