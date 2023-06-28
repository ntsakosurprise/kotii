/* eslint-disable no-unused-vars */

import { marked } from "marked";

const extractMetadataPattern = /---[\r\n]([\s\S]*)[\r\n]---/;
const metaKeyPairsPattern = /(.*):(.*)?/g;
const extractDescriptionPattern = /<p className="description">(.+)?<\/p>/;
const extractSpecialContentPattern = /{{("component"|"demo"|"video"):(.*)}}/g;
const specialToJsonPattern = /("component"|"demo"|"video"):(.*)/;
const markdownSplitPattern = /({{(?:"component"|"demo"|"video"):(?:.*)}})/gm;
const idifyStringPattern = /\s/g;
// Define initial identifiers

// Define Renderer

// const metaData = {};
let tableOfContents = [];

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
const idifyString = (string) => {
  console.log("IDIFY STRING", string);
  const idified = string.trim().toLowerCase().replace(idifyStringPattern, "-");
  console.log("IDIFIED STRING", idified);
  return idified;
};
const convertMarkdown = (markdown) => {
  console.log("The Convert Markdown", convertMarkdown);

  const renderer = {
    heading(text, level) {
      // const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
      let textModified = text.replaceAll("&#39;", "'");
      let headingID = idifyString(textModified);
      let tocLen = tableOfContents.length;
      let tocIndex = tocLen - 1;

      console.log("The current level;;", level);
      if (level === 1 || level > 4) {
        console.log("Excepted Headings;;;", level);
        return `
        <h${level}>
          ${textModified}
        </h${level}>`;
      }

      if (level === 2) {
        tableOfContents.push({
          id: headingID,
          children: [],
        });
      } else if (level === 3) {
        if (tocLen >= 1) {
          tableOfContents[tocIndex].children.push({
            id: headingID,
            children: [],
          });
        }
      } else if (level === 4) {
        if (tocLen > 0) {
          console.log("Child4 being configured");
          if (tableOfContents[tocIndex].children.length > 0) {
            let tocChildLen = tableOfContents[tocIndex].children.length;
            let tocChildIndex = tocChildLen - 1;
            tableOfContents[tocIndex].children[tocChildIndex].children.push({
              id: headingID,
            });
          }
        }
      }

      console.log("Heading Rendere toc;;", tableOfContents);
      console.log(
        "tableOfContentsJsonIFIED;;;",
        JSON.stringify(tableOfContents)
      );
      return `
              <h${level} id="${headingID}">
                ${textModified}
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
  let html = marked.parse(markdown).replaceAll("&#39;", "'");
  console.log("The returned HTML;;;", html);
  return html;
};

const splitMarkdown = (markdown) => {
  const splitContent = markdown.split(markdownSplitPattern);
  console.log("The split.length", splitContent.length);
  console.log("The split", splitContent);

  splitContent.map((it) => {
    console.log("SPLIT ITEM;;;", it);
  });
  console.log("The split.length", splitContent.length);
  return splitContent;
};
// const getMardkdownConveter = () => {
//   return convertMarkdown(markdown);
// };

const beginExtraction = (markdown) => {
  const metaDataString = extractMetaData(markdown) || "";
  const metaDataKeys = extractMetaKeyPairs(metaDataString) || null;
  const description = extractDescription(markdown) || null;
  const specialContent = extractSpecialContent(markdown);
  const markDownSplit = splitMarkdown(markdown);
  const html = markDownSplit.map((mk) => {
    console.log("SPLITITEM;;;", mk);
    if (specialToJsonPattern.test(mk)) {
      //  let regexToUse = nested ? : specialToJsonPattern.exec(mk)
      let matchedString = specialToJsonPattern.exec(mk);
      let specialString = matchedString[0];
      // let itemNeeded = matchedString[0]
      console.log("THE FeedBack;;;", matchedString);
      console.log("THE SPecialString;;;", specialString);
      console.log(
        "SpeicalString with itemsRemoved",
        specialString.replace(/.{2}$/, "")
      );

      return JSON.parse(`{${specialString.replace(/.{2}$/, "")}}`);
    }
    return convertMarkdown(mk).replace(/\n/g, "").trim();
  });
  console.log("SplitMARKDOWN;;;", markDownSplit);
  console.log("THE HTML;;;", html);
  console.log("THE TABLE OF CONTENTS;;;", tableOfContents);
  // const toc = extractTableOfContent(markdown);
  return {
    metaDataKeys,
    description,
    specialContent,
    markDownSplit,
    html: html,
    toc: tableOfContents,
  };
};
export const parseMarkdown = (markdown) => {
  tableOfContents = [];
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
  idifyString,
};
