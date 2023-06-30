const path = require("path");
// import path from "path";
const fs = require("fs");
// const { parseMarkdown } = require("./markdownParser");
const { getLanguageLocal, capitalizeFirstLetter } = require("./utils");
const { parseMarkdown } = require("./markdownParser");
const supportedLanguages = ["ts", "ve", "en"];
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
    console.log("THE fileName", f);
    console.log("THE FILENAME;;;", fileName);
    console.log("THE FILENAME CONDITION;;;", fileName === f);
    let isDefaultFileName = fileName === f;
    if (validLanguagePattern.test(f) || isDefaultFileName) {
      let locale = getLanguageLocal(validLanguagePattern, f);
      // let locale = validLanguagePattern.exec(f)?.groups?.locale;
      console.log("THE LOCAL;;", locale);
      if (supportedLanguages.includes(locale) || isDefaultFileName) return true;
    }
  });

  // const convertedMarkdown = convertMarkdown(markdown);

  const languages = validFolderFiles.map((validLanguage) => {
    console.log("validLanguage", validLanguage);
    console.log("The path Join", path.join(fileFolder, validLanguage));
    let languageFilePath = path.join(fileFolder, validLanguage);
    console.log("LigoPath;;;", languageFilePath);
    let rawMarkdown = fs.readFileSync(languageFilePath, {
      encoding: "utf-8",
    });
    this.addDependency(languageFilePath);

    return {
      rawMdText: rawMarkdown,
      fileName: validLanguage,
      locale: getLanguageLocal(validLanguagePattern, validLanguage),
      parsedMarkdown: parseMarkdown(rawMarkdown),
    };
  });

  languages.map((ln) => {
    // console.log("Language item;;;", ln);

    ln.parsedMarkdown.specialContent.map((sp) => {
      // console.log("Language special", sp);
      let special = sp.special;
      let specialPath = special.component
        ? special.component
        : special.video
        ? special.video
        : special.demo;
      let specialSplit = specialPath.split("/");
      let fileNamePortion = specialSplit[specialSplit.length - 1];
      let fullFilePath = /src/.test(specialPath)
        ? path.join(resourceRootFolder, specialPath)
        : path.join(resourceRootFolder, `/src${specialPath}`);
      // console.log("THE COMPONENT FILE PATH;;;", fullFilePath);
      // console.log("THE FILENAME PORTION;;;", fileNamePortion);
      let fileContent = fs.readFileSync(fullFilePath, { encoding: "utf-8" });
      let itemImported = `import ${capitalizeFirstLetter(
        fileNamePortion.replace(/\.js$/, "")
      )} from "MarkdownComps/${specialSplit[2]}/${fileNamePortion}"`;
      // console.log("ITEM IMPORTED;;;", itemImported);
      this.addDependency(fullFilePath);
      // console.log("THE FILE CONTENTS;;;", fileContent);
      sp.file = {
        name: fileNamePortion,
        contents: fileContent,
        imports: itemImported,
        componentName: capitalizeFirstLetter(
          fileNamePortion.replace(/\.js$/, "")
        ),
      };

      console.log("SPECIALSPLIT;;;", specialSplit);
      return sp;
      // let specialFileName = specialSplit[0];
      // console.log("The special fileNAme;;;", specialFileName);
    });
  });

  // console.log(
  //   "firstLanguageSpecialShape;;;",
  //   languages[0].parsedMarkdown.specialContent[0]
  // );

  // const rePath = this.resourcePath;
  // console.log("MarkDownFolder", rePath);
  // console.log("THE fs Module", fs);
  let importsArray = [];
  let importsIDs = [];

  languages.map((ln) => {
    let specialCont = ln.parsedMarkdown.specialContent;
    specialCont.map((sp) => {
      !importsIDs.includes(sp.file.componentName)
        ? importsIDs.push(sp.file.componentName)
        : "";
      !importsArray.includes(sp.file.imports)
        ? importsArray.push(sp.file.imports)
        : "";
    });
  });

  // console.log("resource root", resourceRootFolder);
  // console.log("file path;", filePath);
  // console.log("fileFolder", fileFolder);
  // console.log("fileName", fileName);
  // console.log("FileExtension", fileExtension);
  console.log("FileNamePlain", fileNamePlain);
  // console.log("Folder files", folderFiles);
  // console.log("Valid folder files;;;", validFolderFiles);
  // console.log("Languages;;;", languages);
  // console.log("The IMports;;;", importsArray);
  // console.log("THISLOADER;;;", this);
  this.addDependency(filePath);
  // console.log("The source BASE PATH", path.dirname(reContext));

  //parseMarkdown(markdown);

  const loaded = `

   ${importsArray.join("\r\n")}
   
   export const markdownData = ${JSON.stringify(languages, null, 2)}
   export const markdownComponents = {${importsIDs
     .map((importID) => {
       return `${JSON.stringify(importID)}: ${importID},`;
     })
     .join("\n")}}
 
 `;

  return loaded;
};
