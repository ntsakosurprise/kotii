import React, { Component } from "react";

import Carousel from "../Carousel/component";
import SlickCarousel from "../CarouselSlick/component";
import items from "./items";
import HeroShapes from "./hero_shapes";
import HeroText from "./hero_text";
import Code from "./code";
import FancyContent from "./fancy";
import SupportContent from "./support";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <HeroText />
        <HeroShapes />
        <strong className="clearfix" />
      </div>
      <Code />
      <FancyContent />
      <SupportContent />
    </div>
  );
};

export default Home;
