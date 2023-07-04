/* eslint-disable no-unused-vars */
import { markdownComponents, markdownData } from "Markdowns/intro/intro.md";
import React from "react";
import MarkdownRender from "../../../modules/MarkdownRender";

/*export const Home = () => {
  // console.log("carouselSlick;;;", CarouselSlick);

  return (
    <div style={{ color: "red", fontSize: "50px" }}>
      <Demo />
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
};*/

export const Home = () => {
  // console.log("carouselSlick;;;", CarouselSlick);

  return (
    <MarkdownRender
      markdownData={markdownData}
      markdownComponents={markdownComponents}
    />
  );
};
