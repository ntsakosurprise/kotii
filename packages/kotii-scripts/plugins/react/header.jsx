import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/layout/Footer/component.jsx";

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
  console.log("THE APP Footer", Footer);
  return (
    <StyledHeader>
      <HeaderActions>
        {/* <Link to="https://github.com/ntsakosurprise/kotii" target={"_blank"}>
          <TfiGithub style={{ color: "#00BFA5", fontSize: "25px" }} />
        </Link> */}
        <StyledLink to="/faqs">Faqs</StyledLink>
        <StyledLink to="/connection">Connection</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/todo">Todo</StyledLink>
      </HeaderActions>
      <Footer />
    </StyledHeader>
  );
};

export default AppHeader;
