import React from "react";
import styled from "styled-components";

const Hero = styled("div")(() => {
  return {
    marginLeft: "10px",
  };
});

const HeroText = styled("p")(() => {
  return {
    marginLeft: "10px",
  };
});

{
  /* <Hero>
<HeroText>Focus on your idea, Forget about configurations</HeroText>;
</Hero> */
}
const Index = () => {
  return (
    <Hero>
      <HeroText>Focus on your idea, Forget about configurations</HeroText>
    </Hero>
  );
};

export default Index;
