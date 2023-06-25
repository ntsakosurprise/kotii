/* eslint-disable no-unused-vars */

import { marked } from "marked";

const extractMetadataPattern = /---[\r\n]([\s\S]*)[\r\n]---/;
const metaKeyPairsPattern = /(.*):(.*)?/g;
const extractDescriptionPattern = /<p className="description">(.+)?<\/p>/;
const extractSpecialContentPattern = /{{("component"|"demo"|"video"):(.*)}}/g;
const markdownSplitPattern = /({{(?:"component"|"demo"|"video"):(?:.*)}})/gm;
const idifyStringPattern = /\s/g;
// Define initial identifiers

// Define Renderer

// const metaData = {};
const tableOfContents = [];

// Extract meta data from a markdown document
const extractMetaData = (markdown) => {
  //   console.log("THE MARKDOWN;;;", markdown);
  const metaMatchResult = markdown.match(extractMetadataPattern);
  console.log(
    "The metaMatchResult",
    metaMatchResult ? metaMatchResult[1] : metaMatchResult
  );
  if (!metaMatchResult) return null;
  return metaMatchResult;

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
  if (keyPairs && Object.keys(keyPairs).length > 0) return keyPairs;
  return null;
  // console.log("THE keyPairs;;;", keyPairs);
  // return true;
};

// Extrack title information
const extractTitle = (markdown) => {};

// Extract possible Description
const extractDescription = (markdown) => {
  const descriptionMatch = markdown.match(extractDescriptionPattern);
  if (!descriptionMatch) return null;
  console.log("The matched descriptionFull", descriptionMatch[0]);
  console.log("The matched descriptionText", descriptionMatch[1]);
  return descriptionMatch[1];

  // return true;
};

// Extrack markdown content to be rendered as-is
const extractContent = (markdown) => {};
const getMarkdownDemos = (markdown) => {};
const getMarkdownComponents = (contentDictionary) => {};
const getMarkdownVideos = (contentDictionary) => {};
const extractSpecialContent = (markdown) => {
  const specialContent = [];
  let specialContentMatch = null;

  while ((specialContentMatch = extractSpecialContentPattern.exec(markdown))) {
    console.log(
      "Possible Special ContentMatch",
      specialContentMatch ? specialContentMatch : null
    );
    let nestedStringRegex = /"(.*)":(.*?).?}/;
    let regularStringRegex = /"(.*)":(.*)[^}]/;
    let regexToUse = specialContentMatch[0].match(/}{3}$/)
      ? nestedStringRegex
      : regularStringRegex;

    const specialContentCleanMatch = specialContentMatch[0].match(regexToUse);
    specialContent.push(JSON.parse(`{${specialContentCleanMatch[0]}}`));
    console.log("SpecialContentCleanMatch", specialContentCleanMatch);
    console.log(
      "SpecialContentJSONIFIED",
      JSON.parse(`{${specialContentCleanMatch[0]}}`)
    );
    // console.log(
    //   "Special Content JSON parsed",
    //   JSON.parse(`{${specialContentMatch[0]}}`)
    // );
  }

  if (specialContent && specialContent.length > 0) return specialContent;
  return null;

  // console.log("THEsPECIALcONTENT;;;", specialContent);
  // return true;
}; // Extract special content
const IdifyString = (string) => {
  console.log("IDIFY STRING", string);
  const idified = string.trim().toLowerCase().replace(idifyStringPattern, "-");
  console.log("IDIFIED STRING", idified);
  return idified || " ";
};
const convertMarkdown = (markdown) => {
  console.log("The Convert Markdown", convertMarkdown);

  const renderer = {
    heading(text, level) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

      if (level === 1 || level >= 4) {
        return false;
      }

      // if (level === 2){
      //   if(tableOfContents.length === 0){

      //     tableOfContents.push({
      //       id: ,
      //       children: []
      //     })
      //   }else{

      //   }
      // }
      return `
              <h${level}>
                <a name="${escapedText}" class="anchor" href="#${escapedText}">
                  <span class="header-link"></span>
                </a>
                ${text}
              </h${level}>`;
    },
  };

  marked.use({
    async: false,
    renderer,
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartypants: false,
    xhtml: false,
  });
  return marked.parse(markdown);
};

const splitMarkdown = (markdown) => {
  const splitContent = markdown.split(markdownSplitPattern);
  console.log("The split.length", splitContent.length);
  console.log("The split", splitContent);

  splitContent.map((it) => {
    console.log("SPLIT ITEM;;;", it);
  });
  console.log("The split.length", splitContent.length);
  return splitContent || {};
};
// const getMardkdownConveter = () => {
//   return convertMarkdown(markdown);
// };

const beginExtraction = (markdown) => {
  const metaDataString = extractMetaData(markdown) || "";
  const metaDataKeys = extractMetaKeyPairs(metaDataString) || null;
  const description = extractDescription(markdown) || null;
  const specialContent = extractSpecialContent(markdown);
  // const toc = extractTableOfContent(markdown);
  return {
    metaDataKeys,
    description,
    specialContent,
    // toc,
  };
};
export const parseMarkdown = (markdown) => {
  return beginExtraction(markdown);
};

export {
  extractMetaData,
  extractMetaKeyPairs,
  extractDescription,
  extractTitle,
  extractContent,
  extractSpecialContent,
  getMarkdownDemos,
  getMarkdownComponents,
  getMarkdownVideos,
  splitMarkdown,
  convertMarkdown,
  IdifyString,
};
