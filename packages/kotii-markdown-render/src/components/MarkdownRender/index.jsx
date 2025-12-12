/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable unused-imports/no-unused-imports */
import { useLanguage } from "kotii-languages";
import PropTypes from "prop-types";
import React from "react";

import styled from "kotii-styled";
import MarkdownAd from "../MarkdownAd/index.jsx";
// import MarkdownHeader from "../MarkdownHeader/index.js";
import MarkdownVideo from "../MarkdownVideo/index.jsx";
import StandardComponent from "../StandardComponent/index.jsx";
import MarkdownElement from "../MarkdownElement/index.jsx";

const MarkdownRenderCanvas = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  // overflow: "hidden",
}));

const MarkdownContentArea = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  // top: "100px",
  // position: "relative",
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

const getLanguagePosts = (routes, setLanguage) => {
  let posts = [];

  routes.forEach((element) => {
    element.markdownData.forEach((languageItem) => {
      if (languageItem.locale.toLowerCase() === setLanguage.toLowerCase()) {
        posts.push({
          ...languageItem.parsedMarkdown.metaDataKeys,
          path: element.path,
        });
      }
    });
  });

  return posts;
};

// const capitalizeFirstLetter = (text) => {
//   console.log("The text Uppercasing;;;", text);
//   return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
// };

const isHtmlString = (itemChecked) => {
  if (typeof itemChecked === "string" && itemChecked.length) return true;
  return false;
};
const getHtmlBody = (itemChecked) => {
  if (typeof itemChecked === "string" && itemChecked.length) return itemChecked;
  return null;
};

const markdownComponentType = (mkComponent, index, options) => {
  const {
    languagePosts: posts,
    markdownComponents,
    markdownHtmlBody: body,
    post: currentPost,
  } = options;
  console.log("THE MARKDOWN COMPONENT", mkComponent, markdownComponents, posts);
  const componentType = Object.keys(mkComponent)[0];
  const currentComponent = Object.entries(markdownComponents).find(
    ([key, value]) => {
      if (value.pathID === mkComponent[componentType]) return value;
    }
  )[1];
  const isServer = typeof window != "undefined" ? false : true;
  console.log("THE CURRENT COMPONENT", currentComponent);
  const ComponentInContext = currentComponent.component;
  console.log("THE COMPONENT IN CONTEXT", ComponentInContext);

  switch (componentType) {
    case "demo":
      return <TestDemo key={index} posts={posts} post={currentPost} />;
    case "component":
      return <ComponentInContext posts={posts} post={currentPost} />;
    case "video":
      return (
        <MarkdownVideo key={index}>
          <ComponentInContext posts={posts} post={currentPost} />
        </MarkdownVideo>
      );
    case "ad":
      return (
        <MarkdownAd key={index}>
          <ComponentInContext posts={posts} post={currentPost} />
        </MarkdownAd>
      );
    default:
      return null;
  }
};

const MarkdownRender = ({
  markdownData,
  markdownComponents,
  routes = null,
}) => {
  console.log("MARKDOWN RENDER PROPS: docs", markdownData);
  console.log("MARKDODWN RENDER PROPS: modules", markdownComponents);
  const { language } = useLanguage();
  const englishContent = getSetLanguageContent(markdownData, language);
  const languagePosts = getLanguagePosts(routes, language);
  console.log("THE ENGLISH CONTENT", englishContent);
  const { fileName, parsedMarkdown } = englishContent;
  const { html, toc, metaDataKeys } = parsedMarkdown;
  const { useCustomRender = false } = metaDataKeys;
  const markdownHtmlBody = getHtmlBody(html);
  const componentsOptions = {
    languagePosts,
    markdownComponents,
    markdownHtmlBody,
    useCustomRender,
    post: metaDataKeys,
  };
  console.log("THE PARSED MARKDOWN", parsedMarkdown);
  console.log("Kotii-markdown set Language:::", language, React.lazy, toc);

  // console.log("Filename;;;", fileName);
  // console.log("html", html);
  if (useCustomRender) {
    return html.map((markdownHtmlItem, i) => {
      if (!isHtmlString(markdownHtmlItem)) {
        return markdownComponentType(markdownHtmlItem, i, componentsOptions);
      }

      return null;
    });
  }

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
              languagePosts
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
