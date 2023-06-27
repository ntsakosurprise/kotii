/* eslint-disable no-unused-vars */
import FlexSandbox from "Modules/FlexSandbox";
import React from "react";
import Video from "../../demos/video";

export const Home = () => {
  // console.log("carouselSlick;;;", CarouselSlick);

  return (
    <div style={{ color: "red", fontSize: "50px" }}>
      {/* <Demo /> */}
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
