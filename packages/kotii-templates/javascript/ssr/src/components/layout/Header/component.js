import React from "react";
import { TfiGithub } from "react-icons/tfi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Brand } from "../shared";
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
  return { display: "flex", flexDirection: "row", alignItems: "center" };
});

const AppHeader = () => {
  return (
    <StyledHeader>
      <Brand />
      <HeaderActions>
        {/* <Link to="https://github.com/ntsakosurprise/kotii" target={"_blank"}>
          <TfiGithub style={{ color: "#00BFA5", fontSize: "25px" }} />
        </Link> */}

        <Link to="/privacy">
          <TfiGithub style={{ color: "#00BFA5", fontSize: "25px" }} />
        </Link>
      </HeaderActions>
    </StyledHeader>
  );
};

export default AppHeader;
