import React from "react";
import styledDefault from "styled-components";
const styled = styledDefault.default;

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
