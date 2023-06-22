const path = require("path");
// import path from "path";
const fs = require("fs");
// const { parseMarkdown } = require("./markdownParser");
const { getLanguageLocal } = require("./utils");
const { parseMarkdown } = require("./markdownParser");
const supportedLanguages = ["ts", "ve"];
// const languagesFullNames = [
//   { name: "Xitsonga", locale: "ts" },
//   { name: "Tshivenda", locale: "ve" },
// ];
const validLanguagePattern = /_(?<locale>.*?)\.md/;

// eslint-disable-next-line no-unused-vars
module.exports = function (markdown) {
  this.getLogger();
  const resourceRootFolder = process.cwd(); // Get all resources root folder
  const filePath = this.resourcePath; // Webpack, get filepath
  const fileFolder = path.dirname(filePath); // Use file path to get file folder
  const fileName = path.basename(filePath); // Get filename(including extension)
  const fileExtension = path.extname(filePath); // Get file extension
  const fileNamePlain = path.basename(filePath, fileExtension); // Get filename without extension
  const folderFiles = fs.readdirSync(fileFolder);
  const validFolderFiles = folderFiles.filter((f) => {
    // console.log("EXec test", validLanguagePattern.exec(f));

    if (validLanguagePattern.test(f)) {
      let locale = getLanguageLocal(validLanguagePattern, f);
      // let locale = validLanguagePattern.exec(f)?.groups?.locale;
      console.log("THE LOCAL;;", locale);
      if (supportedLanguages.includes(locale)) return true;
    }
  });

  const languages = validFolderFiles.map((validLanguage) => {
    console.log("validLanguage", validLanguage);
    console.log("The path Join", path.join(fileFolder, validLanguage));
    let rawMarkdown = fs.readFileSync(path.join(fileFolder, validLanguage), {
      encoding: "utf-8",
    });
    return {
      rawMdText: rawMarkdown,
      fileName: validLanguage,
      locale: getLanguageLocal(validLanguagePattern, validLanguage),
      parsedMarkdwon: parseMarkdown(rawMarkdown),
    };
  });

  // const rePath = this.resourcePath;
  // console.log("MarkDownFolder", rePath);
  // console.log("THE fs Module", fs);
  console.log("resource root", resourceRootFolder);
  console.log("file path;", filePath);
  console.log("fileFolder", fileFolder);
  console.log("fileName", fileName);
  console.log("FileExtension", fileExtension);
  console.log("FileNamePlain", fileNamePlain);
  console.log("Folder files", folderFiles);
  console.log("Valid folder files;;;", validFolderFiles);
  console.log("Languages;;;", languages);
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
