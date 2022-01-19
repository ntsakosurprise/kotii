import React, { Component } from "react";
import MUIContainer from "../MUIContainer/component";
import Sidebar from "../Sidebar/component";
import IntroContent from "./introContent";

import Carousel from "../Carousel/component";
import SlickCarousel from "../CarouselSlick/component";
import items from "./items";
import HeroShapes from "./hero_shapes";
import HeroText from "./hero_text";
import Code from "./code";
import FancyContent from "./introContent";
import SupportContent from "./support";

const Introduction = () => {
  return (
    <MUIContainer>
      <Sidebar />
      <IntroContent />
    </MUIContainer>
  );
};

export default Introduction;
