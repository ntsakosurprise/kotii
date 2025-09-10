import React, { Component } from "react";

import { CarouselSlick, Carousel } from "UI";
import items from "./items";

class About extends Component {
  render() {
    const settings = {
      autoplay: false,
      speed: 300,
      slidesToShow: 5,
    };

    return (
      // <Carousel />
      <CarouselSlick
        settings={settings}
        items={[...items]}
        shouldShowHead={true}
      />
    );
  }
}

export default About;
