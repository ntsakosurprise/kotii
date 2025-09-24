/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { MarkdownRender } from "kotii-react-modules";
import { markdownComponents, markdownData } from "Markdowns/intro/intro.md";

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
