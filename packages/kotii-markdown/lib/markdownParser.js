/* eslint-disable no-unused-vars */

/* Markdown Content Regular Expressions */

const extractMetadataPattern = /---[\r\n]([\s\S]*)[\r\n]---/;
const metaKeyPairsPattern = /(.*):(.*)?/g;
const extractDescriptionPattern = /<p className="description">(.+)?<\/p>/;
// Define initial identifiers

const metaData = {};
const tableOfContents = [];
const specialData = [];

// Extract meta data from a markdown document
const extractMetaData = (markdown) => {
  //   console.log("THE MARKDOWN;;;", markdown);
  const metaMatchResult = markdown.match(extractMetadataPattern);
  console.log(
    "The metaMatchResult",
    metaMatchResult ? metaMatchResult[1] : metaMatchResult
  );
  if (!metaMatchResult) return null;
  return true;

  //return extractMetaKeyPairs(extractHeader);
  //if (!metaMatchResult) return metaData;
};

// Extract header information
const extractMetaKeyPairs = (extractedHeaderString) => {
  const keyPairs = {};
  let matchedHeaderResults = null;
  console.log("The searchedString", extractedHeaderString);
  while (
    (matchedHeaderResults = metaKeyPairsPattern.exec(extractedHeaderString))
  ) {
    console.log("THe matchedHeader", matchedHeaderResults);
    const key = matchedHeaderResults[1];
    const value = matchedHeaderResults[2];

    console.log("THe value", key);
    console.log("The value", value);
    // console.log("The value with the replace string", value.replace(/(.*)/, $1));

    keyPairs[key] = value.trim();
  }
  console.log("THE keyPairs;;;", keyPairs);
  return true;
};

// Extrack title information
const extractTitle = (markdown) => {};

// Extract possible Description
const extractDescription = (markdown) => {
  const descriptionMatch = markdown.match(extractDescriptionPattern);
  if (!descriptionMatch) return false;
  console.log("The matched descriptionFull", descriptionMatch[0]);
  console.log("The matched descriptionText", descriptionMatch[1]);
  return true;
};

// Extrack markdown content to be rendered as-is
const extractContent = (markdown) => {};
const getMarkdownDemos = (markdown) => {};
const getMarkdownComponents = (contentDictionary) => {};
const getMarkdownVideos = (contentDictionary) => {};

export const parseMarkdown = (markdown) => {
  extractMetaData(markdown);
};

export {
  extractMetaData,
  extractMetaKeyPairs,
  extractDescription,
  extractTitle,
  extractContent,
  getMarkdownDemos,
  getMarkdownComponents,
  getMarkdownVideos,
};
