import { LanguageSwitcher, useLanguage } from "kotii-languages";
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
    zIndex: 2,
  };
});

const MarkdownHeader = () => {
  const { get } = useLanguage();
  return (
    <Header>
      <div style={{ width: "300px" }}>
        <LanguageSwitcher />
      </div>

      <p>I am the header with translation {get("message")}</p>
    </Header>
  );
};

MarkdownHeader.propTypes = {
  toc: PropTypes.array,
};

export default MarkdownHeader;
