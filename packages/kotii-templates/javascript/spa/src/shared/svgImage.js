import React from "react";
import styled from "styled-components";
const StyledSvgImage = styled("svg")({
  position: "absolute",
  // top: "120%",
  // left: "20%",
  //right: "20%",
  transform: "translate(120px, 89px)",
});
const SVGImage = () => {
  return (
    <StyledSvgImage>
      <path d="M34.0758 0L57.3928 40.3862H10.7588L34.0758 0Z" fill="#D680FF" />
      <path d="M26.9241 0L50.2411 40.3862H3.60715L26.9241 0Z" fill="#00BFA5" />
      <rect
        x="10.9379"
        y="39.5448"
        width="15.9862"
        height="8.41379"
        fill="#00BFA5"
      />
      <rect
        x="26.9241"
        y="39.5448"
        width="15.9862"
        height="8.41379"
        fill="#F7C02B"
      />
    </StyledSvgImage>
  );
};

export default SVGImage;
