/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable unused-imports/no-unused-imports */
import { useLanguage } from "kotii-languages";
import { capitalizeFirstLetter } from "kotii-utils";
import PropTypes from "prop-types";
import React from "react";

import styled from "kotii-styled";
import MarkdownAd from "../MarkdownAd/index.jsx";
// import MarkdownHeader from "../MarkdownHeader/index.js";
import MarkdownVideo from "../MarkdownVideo/index.jsx";
import StandardComponent from "../StandardComponent/index.jsx";

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

const markdownComponentType = (
  mkComponent,
  markdownComponents,
  index,
  parsedMarkdown,
  posts
) => {
  console.log("THE MARKDOWN COMPONENT", mkComponent, markdownComponents, posts);
  const componentType = Object.keys(mkComponent)[0];
  const currentComponent = Object.entries(markdownComponents).find(
    ([key, value]) => {
      if (value.pathID === mkComponent[componentType]) return value;
    }
  )[1];
  console.log("THE CURRENT COMPONENT", currentComponent);
  const ComponentInContext = currentComponent.component;
  console.log("THE COMPONENT IN CONTEXT", ComponentInContext);

  switch (componentType) {
    case "demo":
      return <TestDemo key={index} parsedMarkdown={parsedMarkdown} />;
    case "component":
      return (
        <StandardComponent key={index}>
          <ComponentInContext parsedMarkdown={parsedMarkdown} posts={posts} />
        </StandardComponent>
      );
    case "video":
      return (
        <MarkdownVideo key={index}>
          <ComponentInContext parsedMarkdown={parsedMarkdown} posts={posts} />
        </MarkdownVideo>
      );
    case "ad":
      return (
        <MarkdownAd key={index}>
          <ComponentInContext parsedMarkdown={parsedMarkdown} posts={posts} />
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
  console.log("THE ENGLISH CONTENT", englishContent);
  const { fileName, parsedMarkdown } = englishContent;
  const { html, toc, metaDataKeys } = parsedMarkdown;
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
          {html.map((markdownHtmlItem, i) => {
            if (isHtmlString(markdownHtmlItem))
              return <MarkdownElement htmlString={markdownHtmlItem} key={i} />;
            return markdownComponentType(
              markdownHtmlItem,
              markdownComponents,
              i,
              parsedMarkdown
            );
          })}
        </MainArea>
        {/* <MarkdownTOC toc={toc} /> */}
      </MarkdownContentArea>
    </MarkdownRenderCanvas>
  );
};

MarkdownRender.propTypes = {
  markdownData: PropTypes.array.isRequired,
  // markdownComponents: PropTypes.object.isRequired,
};

export default MarkdownRender;
