import * as fs from "fs";
import path from "path";
// const { parseMarkdown } = require("./markdownParser");
// const { getLanguageLocal, capitalizeFirstLetter } = require("./utils");
import { capitalizeFirstLetter, getLanguageLocal } from "./utils";
// const { parseMarkdown } = require("./markdownParser");
import { parseMarkdown } from "./markdownParser";
const supportedLanguages = ["ts", "ve", "en"];
let isServerMode = false;

// const languagesFullNames = [
//   { name: "Xitsonga", locale: "ts" },
//   { name: "Tshivenda", locale: "ve" },
// ];
const validLanguagePattern = /_(?<locale>.*?)\.md/;

// eslint-disable-next-line no-unused-vars
export default function (markdown) {
  console.log("mardown in kotii-markdown", markdown);
  markdown?.getLogger ? markdown.getLogger() : null;
  isServerMode = markdown?.isServerMode || false;

  const resourceRootFolder = process.cwd(); // Get all resources root folder
  const filePath = markdown.resource; // Webpack, get filepath
  console.log("THE MARKDOWN passed options", markdown, resourceRootFolder);
  const fileFolder = path.dirname(filePath); // Use file path to get file folder
  console.log("THE FOLDER", fileFolder);
  const fileName = path.basename(filePath); // Get filename(including extension)
  const fileExtension = path.extname(filePath); // Get file extension
  const fileNamePlain = path.basename(filePath, fileExtension); // Get filename without extension
  const folderFiles = fs.readdirSync(fileFolder);
  const validFolderFiles = folderFiles.filter((f) => {
    // console.log("EXec test", validLanguagePattern.exec(f));
    console.log("THE fileName", f);
    console.log("THE FILENAME;;;", fileName, resourceRootFolder);
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
    markdown?.addDependency ? markdown.addDependency(languageFilePath) : null;
    let isDefaultFileName = fileName === validLanguage;

    return {
      rawMdText: rawMarkdown,
      fileName: validLanguage,
      locale: isDefaultFileName
        ? "en"
        : getLanguageLocal(validLanguagePattern, validLanguage),
      parsedMarkdown: parseMarkdown(rawMarkdown),
    };
  });
  console.log("THE LANGUAGES", languages);

  languages.map((ln) => {
    // console.log("Language item;;;", ln);

    if (ln.parsedMarkdown?.specialContent) {
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
        let fullFilePath = path.join(resourceRootFolder, specialPath);
        console.log("THE FULL FILE PATH", fullFilePath, "Root", fullFilePath);

        let fileContent = fs.readFileSync(fullFilePath, { encoding: "utf-8" });
        let itemImported = `import ${capitalizeFirstLetter(
          fileNamePortion.replace(/\.js$/, "")
        )} from "MarkdownComps/${specialSplit[2]}/${fileNamePortion}"`;
        // console.log("ITEM IMPORTED;;;", itemImported);
        markdown?.addDependency ? markdown.addDependency(fullFilePath) : null;
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
    }
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
    if (ln.parsedMarkdown?.specialContent) {
      let specialCont = ln.parsedMarkdown.specialContent;
      specialCont.map((sp) => {
        !importsIDs.includes(sp.file.componentName)
          ? importsIDs.push(sp.file.componentName)
          : "";
        !importsArray.includes(sp.file.imports)
          ? importsArray.push(sp.file.imports)
          : "";
      });
    }
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

  markdown?.addDependency ? markdown.addDependency(filePath) : null;

  // console.log("The source BASE PATH", path.dirname(reContext));

  //parseMarkdown(markdown);

  if (isServerMode) {
    let serverData = {
      markdownData: languages,
      markdownComponents: {},
    };
    importsIDs.map((importID) => {
      serverData.markdownComponents[JSON.stringify(importID)] = importID;
    });
    return serverData;
  }
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
}
