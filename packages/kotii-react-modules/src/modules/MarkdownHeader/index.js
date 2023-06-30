import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = styled("div")(() => {
  return {
    width: "100%",
    position: "fixed",
    height: "100px",
    backgroundColor: "red",
    top: 0,
  };
});

const MarkdownHeader = () => {
  return (
    <Header>
      <p>I am the header</p>
    </Header>
  );
};

MarkdownHeader.propTypes = {
  toc: PropTypes.array,
};

export default MarkdownHeader;
