/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
import MarkdownElement from "../MarkdownElement";
import StandardComponent from "../StandardComponent";

const TestDemo = () => {
  return <div>I am the Demo</div>;
};

const capitalizeFirstLetter = (text) => {
  console.log("The text Uppercasing;;;", text);
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};

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
    default:
      return null;
  }
};

const MarkdownRender = ({ markdownData, markdownComponents }) => {
  console.log("MARKDOWN RENDER PROPS: docs", markdownData);
  console.log("MARKDODWN RENDER PROPS: modules", markdownComponents);
  const englishContent = markdownData[0];
  const { fileName, parsedMarkdown } = englishContent;
  const { html } = parsedMarkdown;

  console.log("Filename;;;", fileName);
  console.log("html", html);

  return (
    <div>
      {html.map((markdownHtmlItem, i) => {
        if (isHtmlString(markdownHtmlItem))
          return <MarkdownElement htmlString={markdownHtmlItem} key={i} />;
        return markdownComponentType(markdownHtmlItem, markdownComponents);
      })}
    </div>
  );
};

MarkdownRender.propTypes = {
  markdownData: PropTypes.array.isRequired,
  markdownComponents: PropTypes.object.isRequired,
};

export default MarkdownRender;
