import React from "react";

import styled from "styled-components";
import FooterActions from "./footeractions.jsx";
import FooterBrand from "./footerbrand.jsx";

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
