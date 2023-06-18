const path = require("path");
// import path from "path";
//const fs = require("fs");
const { parseMarkdown } = require("./markdownParser");

console.log(parseMarkdown);

// eslint-disable-next-line no-unused-vars
module.exports = function (markdown) {
  this.getLogger();
  const resourceRootFolder = process.cwd(); // Get all resources root folder
  const filePath = this.resourcePath; // Webpack, get filepath
  const fileFolder = path.dirname(filePath); // Use file path to get file folder
  const fileName = path.basename(filePath); // Get filename(including extension)
  const fileExtension = path.extname(filePath); // Get file extension
  const fileNamePlain = path.basename(filePath, fileExtension); // Get filename without extension
  // const rePath = this.resourcePath;
  // console.log("MarkDownFolder", rePath);
  console.log("resource root", resourceRootFolder);
  console.log("file path;", filePath);
  console.log("fileFolder", fileFolder);
  console.log("fileName", fileName);
  console.log("FileExtension", fileExtension);
  console.log("FileNamePlain", fileNamePlain);
  // console.log("The source BASE PATH", path.dirname(reContext));

  //parseMarkdown(markdown);
  const docs = {
    content: markdown,
  };

  const loaded = `

   export const docs = ${JSON.stringify(docs, null, 2)}
  
  `;

  return loaded;
};
