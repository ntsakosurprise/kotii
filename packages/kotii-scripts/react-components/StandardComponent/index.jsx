/* eslint-disable react/prop-types */
import styled from "kotii-styled";
import PropTtypes from "prop-types";

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
