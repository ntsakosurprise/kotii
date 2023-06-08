/* eslint-disable no-unused-vars */

/* Markdown Content Regular Expressions */

const extractMetadataPattern = /---[\r\n]([\s\S]*)[\r\n]---/;

// Define initial identifiers

const metaData = {};

// Extract meta data from a markdown document
const extractMetaData = (markdown) => {
  console.log("THE MARKDOWN;;;", markdown);
  const metaMatchResult = markdown.match(extractMetadataPattern);
  console.log("The metaMatchResult", metaMatchResult);
  //if (!metaMatchResult) return metaData;
};

// Extract header information
const extractHeader = (markdown) => {};

// Extrack title information
const extractTitle = (markdown) => {};

// Extract possible Description
const extractDescription = (markdown) => {};

// Extrack markdown content to be rendered as-is
const extractContent = (markdown) => {};
const getMarkdownDemos = (markdown) => {};
const getMarkdownComponents = (contentDictionary) => {};

export const parseMarkdown = (markdown) => {
  extractMetaData(markdown);
};
