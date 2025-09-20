import * as fs from "fs";
import path from "path";
// const { parseMarkdown } = require("./markdownParser");
// const { getLanguageLocal, capitalizeFirstLetter } = require("./utils");
import { capitalizeFirstLetter, getLanguageLocal } from "./utils";
// const { parseMarkdown } = require("./markdownParser");
import { parseMarkdown } from "./markdownParser";
// const supportedLanguages = ["ts", "ve", "en"];

// const languagesFullNames = [
//   { name: "Xitsonga", locale: "ts" },
//   { name: "Tshivenda", locale: "ve" },
// ];
// const validLanguagePattern = /_(?<locale>.*?)\.md/;
const validLanguagePattern =
  /(?<locale>[._-](?<lang>[a-z]{2})(?:[-_](?<region>[A-Z]{2}))?)\.mdx?$/i;

// eslint-disable-next-line no-unused-vars
export default function (markdown) {
  console.log("mardown in kotii-markdown", markdown);
  markdown?.getLogger ? markdown.getLogger() : null;

  const { supportedLanguages, filePath, importsDictionary } =
    doCommons(markdown);
  const { importsArray, importsIDs } = importsDictionary;

  markdown?.addDependency ? markdown.addDependency(filePath) : null;

  const loaded = `

   ${importsArray.join("\r\n")}
   
   export const markdownData = ${JSON.stringify(supportedLanguages, null, 2)}
   export const markdownComponents = {${importsIDs
     .map((importID) => {
       return `${JSON.stringify(importID.componentName)}: ${
         importID.componentName
       },`;
     })
     .join("\n")}}
 
 `;

  return loaded;
}

export const serverLoader = async function (markdown) {
  const { supportedLanguages, importsDictionary } = doCommons(markdown);
  const { importsIDs } = importsDictionary;
  const { customComponentLoader = null } = markdown;
  let serverData = {
    markdownData: supportedLanguages,
  };
  let loadPromises = null;
  console.log("THE MARKDOWN IMPORT IDS", importsIDs);
  if (importsIDs) {
    serverData["markdownComponents"] = {};
    loadPromises = importsIDs.map(async (importID) => {
      serverData.markdownComponents[importID.componentName] = {
        type: importID.componentType,
        pathID: importID.specialPath,
        value: customComponentLoader
          ? await customComponentLoader(importID.specialFullPath)
          : importID.specialFullPath,
      };
    });
  }
  await Promise.all(loadPromises);

  return serverData;
};

const getFileInContextFileInfo = function (markdownFile) {
  const resourceRootFolder = process.cwd(); // Get all resources root folder
  const filePath = markdownFile.resource; // Webpack, get filepath
  console.log("THE MARKDOWN passed options", markdownFile, resourceRootFolder);
  const fileFolder = path.dirname(filePath); // Use file path to get file folder
  console.log("THE FOLDER", fileFolder);
  const fileName = path.basename(filePath); // Get filename(including extension)
  const fileExtension = path.extname(filePath); // Get file extension
  const fileNamePlain = path.basename(filePath, fileExtension); // Get filename without extension
  const folderFiles = fs.readdirSync(fileFolder);
  console.log("THE FOLDER FILES");

  return {
    fileFolder,
    fileName,
    fileExtension,
    fileNamePlain,
    folderFiles,
    filePath,
    resourceRootFolder,
  };
};
const getValidFolderFiles = function (options) {
  const { folderFiles, fileName, resourceRootFolder } = options;
  const validFiles = folderFiles.filter((f) => {
    // console.log("EXec test", validLanguagePattern.exec(f));
    console.log("THE fileName", f);
    console.log("THE FILENAME;;;", fileName, resourceRootFolder);
    console.log("THE FILENAME CONDITION;;;", fileName === f);
    let isDefaultFileName = fileName === f;
    if (validLanguagePattern.test(f) || isDefaultFileName) {
      let locale = getLanguageLocal(validLanguagePattern, f);
      // let locale = validLanguagePattern.exec(f)?.groups?.locale;
      console.log("THE LOCAL;;", locale);
      // if (supportedLanguages.includes(locale) || isDefaultFileName)
      return true;
    }
  });

  console.log("THE VALID FILES", validFiles);
  return validFiles;
};

const getSupportedLanguageFilesInFolder = function (
  options,
  markdown,
  validFolderFiles
) {
  const { fileFolder, fileName } = options;
  const supportedLanguages = validFolderFiles.map((validLanguage) => {
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
  return supportedLanguages;
};

const createSpecialMetaData = function (options, supportedLanguages, markdown) {
  const { resourceRootFolder } = options;

  supportedLanguages.map((ln) => {
    // console.log("Language item;;;", ln);

    if (ln.parsedMarkdown?.specialContent) {
      ln.parsedMarkdown.specialContent.map((sp) => {
        // console.log("Language special", sp);

        let special = sp.special;
        let specialComponentType = special.component
          ? "component"
          : special.video
          ? "video"
          : "demo";
        let specialPath = special.component
          ? special.component
          : special.video
          ? special.video
          : special.demo;

        let specialSplit = specialPath.split("/");
        let fileNamePortion = specialSplit[specialSplit.length - 1];
        let fullFilePath = path.join(resourceRootFolder, specialPath);
        console.log("THE SPECIAL SPLIT", specialSplit);
        console.log("THE FULL FILE PATH", fullFilePath, "Root", fullFilePath);

        let fileContent = fs.readFileSync(fullFilePath, { encoding: "utf-8" });
        let itemImported = `import ${capitalizeFirstLetter(
          fileNamePortion.replace(/\.(jsx|js|tsx|ts)$/, "")
        )} from "${fullFilePath}"`;
        // console.log("ITEM IMPORTED;;;", itemImported);
        markdown?.addDependency ? markdown.addDependency(fullFilePath) : null;
        // console.log("THE FILE CONTENTS;;;", fileContent);
        sp.file = {
          name: fileNamePortion,
          contents: fileContent,
          imports: itemImported,
          specialPath,
          specialFullPath: fullFilePath,
          componentType: specialComponentType,
          componentName: capitalizeFirstLetter(
            fileNamePortion.replace(/\.(jsx|js|tsx|ts)$/, "")
          ),
        };

        console.log("SPECIALSPLIT;;;", specialSplit);
        return sp;
      });
    }
  });
};

const createPost = function (supportedLanguages) {
  const posts = [];

  supportedLanguages.map((ln) => {
    // console.log("Language item;;;", ln);
    console.log("THE SUPPORTED LN", ln);

    posts.push({ ...ln.parsedMarkdown.metaDataKeys });
  });
  console.log("THE MADE FOR POSTS", posts);
  return posts;
};

const getImportIDs = function (languages) {
  let importsArray = [];
  let importsIDs = [];

  languages.map((ln) => {
    if (ln.parsedMarkdown?.specialContent) {
      let specialCont = ln.parsedMarkdown.specialContent;
      specialCont.map((sp) => {
        !importsIDs.includes(sp.file.componentName)
          ? importsIDs.push({
              componentName: sp.file.componentName,
              specialPath: sp.file.specialPath,
              specialFullPath: sp.file.specialFullPath,
              componentType: sp.file.componentType,
            })
          : "";
        !importsArray.includes(sp.file.imports)
          ? importsArray.push(sp.file.imports)
          : "";
      });
    }
  });
  return { importsArray, importsIDs };
};

const doCommons = function (markdown) {
  const fileInfo = getFileInContextFileInfo(markdown);

  const { fileNamePlain, filePath } = fileInfo;

  const validFolderFiles = getValidFolderFiles(fileInfo);
  const supportedLanguages = getSupportedLanguageFilesInFolder(
    fileInfo,
    markdown,
    validFolderFiles
  );

  createSpecialMetaData(fileInfo, supportedLanguages, markdown);
  const posts = createPost(supportedLanguages);

  const importsDictionary = getImportIDs(supportedLanguages);
  return {
    validFolderFiles,
    supportedLanguages,
    fileNamePlain,
    filePath,
    importsDictionary,
    posts,
  };
};
