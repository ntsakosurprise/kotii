/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import kotiiSvg from "./kotii.svg";
import kotiiAltSvg from "./kotii_alt.svg";
const StyledBrand = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const BrandLogo = styled("div")((props) => {
  return {
    width: props?.size ? `${props.size}px` : "50px",
  };
});
const BrandText = styled("p")((props) => {
  return { color: "black", fontSize: "25px", ...props.brandLogoTextStyles };
});

const Brand = (props) => {
  // eslint-disable-next-line react/prop-types
  const logo = props?.logo ? props.logo : "kotii";
  const brandLogoSize = props?.brandLogoSize ? props.brandLogoSize : 50;
  const logoSize = props?.logoSize ? props?.logoSize : 40;
  const brandLogoTextStyles = props?.brandLogoTextStyles
    ? props.brandLogoTextStyles
    : {};
  return (
    <StyledBrand>
      <Link
        to="/"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BrandLogo size={brandLogoSize}>
          <img
            src={logo === "kotii" ? kotiiSvg : kotiiAltSvg}
            alt="Kotii Logo"
            width={logoSize}
          />
        </BrandLogo>
        <BrandText brandLogoTextStyles={brandLogoTextStyles}>Kotii</BrandText>
        {/* <Test /> */}
      </Link>
    </StyledBrand>
  );
};

export { Brand };
