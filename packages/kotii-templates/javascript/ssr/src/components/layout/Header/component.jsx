import styled from "kotii-styled";
import React from "react";
import { TfiGithub } from "react-icons/tfi/index.js";
import { Link } from "kotii-router";
import { Brand } from "../shared/index.jsx";
import {LanguageSwitcher, useLanguage} from "kotii-languages"


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
  const {get} = useLanguage()
  return (
    <StyledHeader>
      <Brand />
      <HeaderActions>
        {/* <Link to="https://github.com/ntsakosurprise/kotii" target={"_blank"}>
          <TfiGithub style={{ color: "#00BFA5", fontSize: "25px" }} />
        </Link> */}
        {/* <StyledLink to="/faqs">Faqs</StyledLink> */}
        <StyledLink to="/blog">{get("header.posts")}</StyledLink>
        <StyledLink to="/connection">{get("header.connection")}</StyledLink>
        <StyledLink to="/about">{get("header.about")}</StyledLink>
        <StyledLink to="/todo">{get("header.todo")}</StyledLink>
        <StyledLink to="/goals/release-kotii">{get("header.goals")}</StyledLink>
        <StyledLink  to="/posts/blog-like">Localization</StyledLink>
        <StyledLink to="/privacy?name=surprise&surname=mashele" id="app-locales">
          <LanguageSwitcher >
            <TfiGithub style={{ color: "#00BFA5", fontSize: "25px" }} />
          </LanguageSwitcher>
          
        </StyledLink>
      </HeaderActions>
    </StyledHeader>
  );
};

export default AppHeader;
