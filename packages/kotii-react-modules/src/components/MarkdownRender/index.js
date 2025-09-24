/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable unused-imports/no-unused-imports */
import { useLanguage } from "kotii-languages";
import { capitalizeFirstLetter } from "kotii-utils";
import PropTypes from "prop-types";
import React from "react";

import styled from "styled-components";
import MarkdownAd from "../MarkdownAd/index.js";
// import MarkdownHeader from "../MarkdownHeader/index.js";
import MarkdownVideo from "../MarkdownVideo/index.js";
import StandardComponent from "../StandardComponent/index.js";

const MarkdownRenderCanvas = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}));

const MarkdownContentArea = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  top: "100px",
  position: "relative",
}));
const MainArea = styled("div")(() => ({
  width: "60%",
  order: 1,
}));
const TestDemo = () => {
  return <div>I am the Demo</div>;
};

const getSetLanguageContent = (contents, setLanguage) => {
  let content = [];

  contents.forEach((element) => {
    if (element.locale.toLowerCase() === setLanguage.toLowerCase())
      content = element;
  });

  return content;
};

// const capitalizeFirstLetter = (text) => {
//   console.log("The text Uppercasing;;;", text);
//   return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
// };

const isHtmlString = (itemChecked) => {
  if (typeof itemChecked === "string" && itemChecked.length) return true;
  return false;
};

const markdownComponentType = (mkComponent, markdownComponents) => {
  const mkObjectKey = Object.keys(mkComponent)[0];
  const ComponentInContext =
    markdownComponents[capitalizeFirstLetter(mkObjectKey)];

  switch (mkObjectKey.toLowerCase()) {
    case "demo":
      return <TestDemo />;
    case "component":
      return (
        <StandardComponent>
          <ComponentInContext />
        </StandardComponent>
      );
    case "video":
      return (
        <MarkdownVideo>
          <ComponentInContext />
        </MarkdownVideo>
      );
    case "ad":
      return (
        <MarkdownAd>
          <ComponentInContext />
        </MarkdownAd>
      );
    default:
      return null;
  }
};

const MarkdownRender = ({ markdownData, markdownComponents }) => {
  console.log("MARKDOWN RENDER PROPS: docs", markdownData);
  console.log("MARKDODWN RENDER PROPS: modules", markdownComponents);
  const { language } = useLanguage();
  const englishContent = getSetLanguageContent(markdownData, language);
  const { fileName, parsedMarkdown } = englishContent;
  const { html, toc } = parsedMarkdown;
  console.log("THE PARSED MARKDOWN", parsedMarkdown);
  console.log("Kotii-markdown set Language:::", language, React.lazy, toc);

  // console.log("Filename;;;", fileName);
  // console.log("html", html);

  return (
    <MarkdownRenderCanvas>
      {/* <MarkdownHeader /> */}

      <MarkdownContentArea>
        {/* <MarkdownSidebar /> */}
        <MainArea>
          {/* {html.map((markdownHtmlItem, i) => {
            if (isHtmlString(markdownHtmlItem))
              return <MarkdownElement htmlString={markdownHtmlItem} key={i} />;
            return markdownComponentType(markdownHtmlItem, markdownComponents);
          })} */}
        </MainArea>
        {/* <MarkdownTOC toc={toc} /> */}
      </MarkdownContentArea>
    </MarkdownRenderCanvas>
  );
};

MarkdownRender.propTypes = {
  markdownData: PropTypes.array.isRequired,
  markdownComponents: PropTypes.object.isRequired,
};

export default MarkdownRender;
