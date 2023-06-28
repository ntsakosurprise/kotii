/* eslint-disable no-unused-vars */
import FlexSandbox from "Modules/FlexSandbox";
import React from "react";
import Card from "../../demos/card";
import Component from "../../special/component";
import Video from "../../videos/video";

export const Home = () => {
  // console.log("carouselSlick;;;", CarouselSlick);

  return (
    <div style={{ color: "red", fontSize: "50px" }}>
      {/* <Demo /> */}
      <Card />
      <Component />
      <Video />
      <FlexSandbox />
    </div>
    // <Carousel />
    //   <CarouselSlick
    //     settings={settings}
    //     items={[...items]}
    //     shouldShowHead={true}
    //   />
  );
};
