import React from "react";
import { TfiGithub } from "react-icons/tfi/index.js";
import styled from "styled-components";
import { Link } from "wouter";
import { Brand } from "../shared/index.jsx";
// import { Link } from "react-router-dom";

const StyledHeader = styled("header")({
  backgroundColor: "#f2f3f4",
  display: "flex",
  flexDirection: "row",
  justifyItems: "center",
  height: "80px",
  paddingLeft: "2%",
  paddingRight: "2%",
  justifyContent: "space-between",
});

const HeaderActions = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  };
});

const StyledLink = styled(Link)({
  display: "flex",
  flexDirection: "row",
});

const AppHeader = () => {
  return (
    <StyledHeader>
      <Brand />
      <HeaderActions>
        {/* <Link href="https://github.com/ntsakosurprise/kotii" target={"_blank"}>
          <TfiGithub style={{ color: "#00BFA5", fontSize: "25px" }} />
        </Link> */}
        <StyledLink href="/faqs">Faqs</StyledLink>
        <StyledLink href="/connection">Connection</StyledLink>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/todo">Todo</StyledLink>
        <StyledLink href="/privacy">
          <TfiGithub style={{ color: "#00BFA5", fontSize: "25px" }} />
        </StyledLink>
      </HeaderActions>
    </StyledHeader>
  );
};

export default AppHeader;
