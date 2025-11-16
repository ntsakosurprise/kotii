// @ts-nocheck
import React from "react";

import styled from "kotii-styled";
import FooterActions from "./footeractions.tsx";
import FooterBrand from "./footerbrand.tsx";

const StyledFooter = styled("footer")({
  marginTop: "auto",

  display: "flex",
  flexDirection: "column",
  // justifyItems: "center",
  // alignItems: "center",
});

const Footer = () => {
  return (
    <StyledFooter>
      <FooterActions />
      <FooterBrand />
    </StyledFooter>
  );
};

export default Footer;
