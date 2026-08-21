/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MarkdownLoader: () => (/* reexport safe */ _lib_markdown_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   capitalizeFirstLetter: () => (/* reexport safe */ _lib_utils_js__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter),\n/* harmony export */   convertMarkdown: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.convertMarkdown),\n/* harmony export */   extractContent: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.extractContent),\n/* harmony export */   extractDescription: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.extractDescription),\n/* harmony export */   extractMetaData: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.extractMetaData),\n/* harmony export */   extractMetaKeyPairs: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.extractMetaKeyPairs),\n/* harmony export */   extractSpecialContent: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.extractSpecialContent),\n/* harmony export */   extractTitle: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.extractTitle),\n/* harmony export */   getLanguageLocal: () => (/* reexport safe */ _lib_utils_js__WEBPACK_IMPORTED_MODULE_2__.getLanguageLocal),\n/* harmony export */   getMarkdownComponents: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.getMarkdownComponents),\n/* harmony export */   getMarkdownDemos: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.getMarkdownDemos),\n/* harmony export */   getMarkdownVideos: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.getMarkdownVideos),\n/* harmony export */   idifyString: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.idifyString),\n/* harmony export */   serverLoader: () => (/* reexport safe */ _lib_markdown_loader_js__WEBPACK_IMPORTED_MODULE_0__.serverLoader),\n/* harmony export */   splitMarkdown: () => (/* reexport safe */ _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__.splitMarkdown)\n/* harmony export */ });\n/* harmony import */ var _lib_markdown_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/markdown-loader.js */ \"./lib/markdown-loader.js\");\n/* harmony import */ var _lib_markdownParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/markdownParser.js */ \"./lib/markdownParser.js\");\n/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/utils.js */ \"./lib/utils.js\");\n\n\n\n\n\n//# sourceURL=webpack://kotii-markdown/./index.js?\n}");

/***/ },

/***/ "./lib/markdown-loader.js"
/*!********************************!*\
  !*** ./lib/markdown-loader.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   serverLoader: () => (/* binding */ serverLoader)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\n/* harmony import */ var _markdownParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdownParser */ \"./lib/markdownParser.js\");\n\n\n// const { parseMarkdown } = require(\"./markdownParser\");\n// const { getLanguageLocal, capitalizeFirstLetter } = require(\"./utils\");\n\n// const { parseMarkdown } = require(\"./markdownParser\");\n\n// const supportedLanguages = [\"ts\", \"ve\", \"en\"];\n\n// const languagesFullNames = [\n//   { name: \"Xitsonga\", locale: \"ts\" },\n//   { name: \"Tshivenda\", locale: \"ve\" },\n// ];\n// const validLanguagePattern = /_(?<locale>.*?)\\.md/;\nconst validLanguagePattern = /(?<locale>[._-](?<lang>[a-z]{2})(?:[-_](?<region>[A-Z]{2}))?)\\.mdx?$/i;\nconst removeLocalTrailingCharactersPattern = /^[._]/g;\n\n// eslint-disable-next-line no-unused-vars\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(markdown) {\n  console.log(\"mardown in kotii-markdown\", markdown);\n  markdown?.getLogger ? markdown.getLogger() : null;\n  const {\n    supportedLanguages,\n    filePath,\n    importsDictionary\n  } = doCommons(markdown);\n  const {\n    importsArray,\n    importsIDs\n  } = importsDictionary;\n  markdown?.addDependency ? markdown.addDependency(filePath) : null;\n  const loaded = `\n\n   ${importsArray.join(\"\\r\\n\")}\n   \n   export const markdownData = ${JSON.stringify(supportedLanguages, null, 2)}\n   export const markdownComponents = {${importsIDs.map(importID => {\n    return `${JSON.stringify(importID.componentName)}: ${importID.componentName},`;\n  }).join(\"\\n\")}}\n \n `;\n  return loaded;\n}\nconst serverLoader = async function (markdown) {\n  const {\n    supportedLanguages,\n    importsDictionary\n  } = doCommons(markdown);\n  const {\n    importsIDs\n  } = importsDictionary;\n  const {\n    customComponentLoader = null\n  } = markdown;\n  let serverData = {\n    markdownData: supportedLanguages\n  };\n  let loadPromises = null;\n  console.log(\"THE MARKDOWN IMPORT IDS\", importsIDs);\n  if (importsIDs) {\n    serverData[\"markdownComponents\"] = {};\n    loadPromises = importsIDs.map(async importID => {\n      serverData.markdownComponents[importID.componentName] = {\n        type: importID.componentType,\n        pathID: importID.specialPath,\n        value: customComponentLoader ? await customComponentLoader(importID.specialFullPath) : importID.specialFullPath\n      };\n    });\n  }\n  await Promise.all(loadPromises);\n  // serverData[\"pagePosts\"] = posts;\n  return serverData;\n};\nconst getFileInContextFileInfo = function (markdownFile) {\n  const resourceRootFolder = process.cwd(); // Get all resources root folder\n  const filePath = markdownFile.resource; // Webpack, get filepath\n  console.log(\"THE MARKDOWN passed options\", markdownFile, resourceRootFolder);\n  const fileFolder = path__WEBPACK_IMPORTED_MODULE_1___default().dirname(filePath); // Use file path to get file folder\n  console.log(\"THE FOLDER\", fileFolder);\n  const fileName = path__WEBPACK_IMPORTED_MODULE_1___default().basename(filePath); // Get filename(including extension)\n  const fileExtension = path__WEBPACK_IMPORTED_MODULE_1___default().extname(filePath); // Get file extension\n  const fileNamePlain = path__WEBPACK_IMPORTED_MODULE_1___default().basename(filePath, fileExtension); // Get filename without extension\n  const folderFiles = fs__WEBPACK_IMPORTED_MODULE_0__.readdirSync(fileFolder);\n  console.log(\"THE FOLDER FILES\");\n  return {\n    fileFolder,\n    fileName,\n    fileExtension,\n    fileNamePlain,\n    folderFiles,\n    filePath,\n    resourceRootFolder\n  };\n};\nconst getValidFolderFiles = function (options) {\n  const {\n    folderFiles,\n    fileName,\n    resourceRootFolder\n  } = options;\n  const validFiles = folderFiles.filter(f => {\n    // console.log(\"EXec test\", validLanguagePattern.exec(f));\n    console.log(\"THE fileName\", f);\n    console.log(\"THE FILENAME;;;\", fileName, resourceRootFolder);\n    console.log(\"THE FILENAME CONDITION;;;\", fileName === f);\n    let isDefaultFileName = fileName === f;\n    if (validLanguagePattern.test(f) || isDefaultFileName) {\n      let locale = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getLanguageLocal)(validLanguagePattern, f);\n      // locale.replace(removeLocalTrailingCharactersPattern, \"\");\n      // let locale = validLanguagePattern.exec(f)?.groups?.locale;\n      console.log(\"THE LOCAL;;\", locale);\n      // if (supportedLanguages.includes(locale) || isDefaultFileName)\n      return true;\n    }\n  });\n  console.log(\"THE VALID FILES\", validFiles);\n  return validFiles;\n};\nconst getSupportedLanguageFilesInFolder = function (options, markdown, validFolderFiles) {\n  const {\n    fileFolder,\n    fileName\n  } = options;\n  const supportedLanguages = validFolderFiles.map(validLanguage => {\n    console.log(\"validLanguage\", validLanguage);\n    console.log(\"The path Join\", path__WEBPACK_IMPORTED_MODULE_1___default().join(fileFolder, validLanguage));\n    let languageFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(fileFolder, validLanguage);\n    console.log(\"LigoPath;;;\", languageFilePath);\n    let rawMarkdown = fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync(languageFilePath, {\n      encoding: \"utf-8\"\n    });\n    markdown?.addDependency ? markdown.addDependency(languageFilePath) : null;\n    let isDefaultFileName = fileName === validLanguage;\n    let languageLocale = isDefaultFileName ? \"en\" : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getLanguageLocal)(validLanguagePattern, validLanguage);\n    console.log(\"THE LANGUAGE LOCAL\", languageLocale);\n    return {\n      rawMdText: rawMarkdown,\n      fileName: validLanguage,\n      locale: languageLocale.replace(removeLocalTrailingCharactersPattern, \"\"),\n      parsedMarkdown: (0,_markdownParser__WEBPACK_IMPORTED_MODULE_3__.parseMarkdown)(rawMarkdown)\n    };\n  });\n  return supportedLanguages;\n};\nconst createSpecialMetaData = function (options, supportedLanguages, markdown) {\n  const {\n    resourceRootFolder,\n    fileNamePlain\n  } = options;\n  supportedLanguages.map(ln => {\n    // console.log(\"Language item;;;\", ln);\n    console.log(\"CREATING\");\n    if (ln.parsedMarkdown?.metaDataKeys && !ln.parsedMarkdown.metaDataKeys?.slug) {\n      ln.parsedMarkdown.metaDataKeys[\"slug\"] = fileNamePlain;\n    }\n    if (ln.parsedMarkdown?.metaDataKeys) {\n      if (ln.parsedMarkdown?.html && ln.parsedMarkdown.html.length > 0) {\n        console.log(\"HTML IS SET\", ln.parsedMarkdown.html.length);\n        let htmlBody = getHtmlBody(ln.parsedMarkdown.html);\n        console.log(\"THE HTML BODY\", htmlBody);\n        ln.parsedMarkdown.metaDataKeys[\"body\"] = htmlBody;\n      }\n    }\n    if (ln.parsedMarkdown?.specialContent) {\n      ln.parsedMarkdown.specialContent.map(sp => {\n        // console.log(\"Language special\", sp);\n\n        let special = sp.special;\n        let specialComponentType = special.component ? \"component\" : special.video ? \"video\" : \"demo\";\n        let specialPath = special.component ? special.component : special.video ? special.video : special.demo;\n        let specialSplit = specialPath.split(\"/\");\n        let fileNamePortion = specialSplit[specialSplit.length - 1];\n        let fullFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(resourceRootFolder, specialPath);\n        console.log(\"THE SPECIAL SPLIT\", specialSplit);\n        console.log(\"THE FULL FILE PATH\", fullFilePath, \"Root\", fullFilePath);\n        let fileContent = fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync(fullFilePath, {\n          encoding: \"utf-8\"\n        });\n        let itemImported = `import ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(fileNamePortion.replace(/\\.(jsx|js|tsx|ts)$/, \"\"))} from \"${fullFilePath}\"`;\n        // console.log(\"ITEM IMPORTED;;;\", itemImported);\n        markdown?.addDependency ? markdown.addDependency(fullFilePath) : null;\n        // console.log(\"THE FILE CONTENTS;;;\", fileContent);\n        sp.file = {\n          name: fileNamePortion,\n          contents: fileContent,\n          imports: itemImported,\n          specialPath,\n          specialFullPath: fullFilePath,\n          componentType: specialComponentType,\n          componentName: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(fileNamePortion.replace(/\\.(jsx|js|tsx|ts)$/, \"\"))\n        };\n        console.log(\"SPECIALSPLIT;;;\", specialSplit);\n        return sp;\n      });\n    }\n  });\n};\n\n// const createPost = function (supportedLanguages) {\n//   const posts = [];\n\n//   supportedLanguages.map((ln) => {\n//     // console.log(\"Language item;;;\", ln);\n//     console.log(\"THE SUPPORTED LN\", ln);\n\n//     posts.push({ ...ln.parsedMarkdown.metaDataKeys });\n//   });\n//   console.log(\"THE MADE FOR POSTS\", posts);\n//   return posts;\n// };\n\nconst getImportIDs = function (languages) {\n  let importsArray = [];\n  let importsIDs = [];\n  languages.map(ln => {\n    if (ln.parsedMarkdown?.specialContent) {\n      let specialCont = ln.parsedMarkdown.specialContent;\n      specialCont.map(sp => {\n        !importsIDs.includes(sp.file.componentName) ? importsIDs.push({\n          componentName: sp.file.componentName,\n          specialPath: sp.file.specialPath,\n          specialFullPath: sp.file.specialFullPath,\n          componentType: sp.file.componentType\n        }) : \"\";\n        !importsArray.includes(sp.file.imports) ? importsArray.push(sp.file.imports) : \"\";\n      });\n    }\n  });\n  return {\n    importsArray,\n    importsIDs\n  };\n};\nconst getHtmlBody = function (html) {\n  return html.map(content => {\n    console.log(\"THE HTML CONTENT\", content);\n    if (isHtmlString(content)) {\n      console.log(\"THE HTML IS A STRING\");\n      return content;\n    }\n  }).join(\"\");\n};\nconst isHtmlString = itemChecked => {\n  if (typeof itemChecked === \"string\" && itemChecked.length) return true;\n  return false;\n};\nconst doCommons = function (markdown) {\n  const fileInfo = getFileInContextFileInfo(markdown);\n  console.log(\"THE DO COMMONS\", fileInfo);\n  const {\n    fileNamePlain,\n    filePath\n  } = fileInfo;\n  const validFolderFiles = getValidFolderFiles(fileInfo);\n  const supportedLanguages = getSupportedLanguageFilesInFolder(fileInfo, markdown, validFolderFiles);\n  createSpecialMetaData(fileInfo, supportedLanguages, markdown);\n  // const posts = createPost(supportedLanguages);\n\n  const importsDictionary = getImportIDs(supportedLanguages);\n  return {\n    validFolderFiles,\n    supportedLanguages,\n    fileNamePlain,\n    filePath,\n    importsDictionary\n  };\n};\n\n//# sourceURL=webpack://kotii-markdown/./lib/markdown-loader.js?\n}");

/***/ },

/***/ "./lib/markdownParser.js"
/*!*******************************!*\
  !*** ./lib/markdownParser.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertMarkdown: () => (/* binding */ convertMarkdown),\n/* harmony export */   extractContent: () => (/* binding */ extractContent),\n/* harmony export */   extractDescription: () => (/* binding */ extractDescription),\n/* harmony export */   extractMetaData: () => (/* binding */ extractMetaData),\n/* harmony export */   extractMetaKeyPairs: () => (/* binding */ extractMetaKeyPairs),\n/* harmony export */   extractSpecialContent: () => (/* binding */ extractSpecialContent),\n/* harmony export */   extractTitle: () => (/* binding */ extractTitle),\n/* harmony export */   getMarkdownComponents: () => (/* binding */ getMarkdownComponents),\n/* harmony export */   getMarkdownDemos: () => (/* binding */ getMarkdownDemos),\n/* harmony export */   getMarkdownVideos: () => (/* binding */ getMarkdownVideos),\n/* harmony export */   idifyString: () => (/* binding */ idifyString),\n/* harmony export */   parseMarkdown: () => (/* binding */ parseMarkdown),\n/* harmony export */   splitMarkdown: () => (/* binding */ splitMarkdown)\n/* harmony export */ });\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable no-unused-vars */\n\n\nconst extractMetadataPattern = /^---\\s*([\\s\\S]*?)\\s*---/;\n// const extractMetadataPattern = /---[\\r\\n]([\\s\\S]*)[\\r\\n]---/;\n// const metaKeyPairsPattern = /(.*):(.*)?/g;\nconst metaKeyPairsPattern = /^\\s*(?!https?:\\/\\/|---)([^:\\n\\r]+?)\\s*:\\s*(.+)$/gm;\nconst extractDescriptionPattern = /<p className=\"description\">(.+)?<\\/p>/;\nconst extractSpecialContentPattern = /{{(\"component\"|\"demo\"|\"video\"):(.*)}}/g;\nconst specialToJsonPattern = /(\"component\"|\"demo\"|\"video\"):(.*)/;\nconst markdownSplitPattern = /({{(?:\"component\"|\"demo\"|\"video\"):(?:.*)}})/gm;\nconst idifyStringPattern = /\\s/g;\n// Define initial identifiers\n\n// Define Renderer\n\n// const metaData = {};\nlet tableOfContents = [];\n\n// Extract meta data from a markdown document\nconst extractMetaData = markdown => {\n  //   console.log(\"THE MARKDOWN;;;\", markdown);\n  const metaMatchResult = markdown.match(extractMetadataPattern);\n  console.log(\"The metaMatchResult\", metaMatchResult ? metaMatchResult[1] : metaMatchResult);\n  if (!metaMatchResult) return null;\n  return metaMatchResult;\n\n  //return extractMetaKeyPairs(extractHeader);\n  //if (!metaMatchResult) return metaData;\n};\n\n// Extract header information\nconst extractMetaKeyPairs = extractedHeaderString => {\n  const keyPairs = {};\n  let matchedHeaderResults = null;\n  console.log(\"The searchedString\", extractedHeaderString);\n  while (matchedHeaderResults = metaKeyPairsPattern.exec(extractedHeaderString)) {\n    console.log(\"THe matchedHeader\", matchedHeaderResults);\n    const key = matchedHeaderResults[1];\n    const value = matchedHeaderResults[2];\n    console.log(\"THe value\", key);\n    console.log(\"The value\", value);\n    // console.log(\"The value with the replace string\", value.replace(/(.*)/, $1));\n\n    keyPairs[key] = value.trim();\n  }\n  if (keyPairs && Object.keys(keyPairs).length > 0) return keyPairs;\n  return null;\n  // console.log(\"THE keyPairs;;;\", keyPairs);\n  // return true;\n};\n\n// Extrack title information\nconst extractTitle = markdown => {};\n\n// Extract possible Description\nconst extractDescription = markdown => {\n  const descriptionMatch = markdown.match(extractDescriptionPattern);\n  if (!descriptionMatch) return null;\n  console.log(\"The matched descriptionFull\", descriptionMatch[0]);\n  console.log(\"The matched descriptionText\", descriptionMatch[1]);\n  return descriptionMatch[1];\n\n  // return true;\n};\n\n// Extrack markdown content to be rendered as-is\nconst extractContent = markdown => {};\nconst getMarkdownDemos = markdown => {};\nconst getMarkdownComponents = contentDictionary => {};\nconst getMarkdownVideos = contentDictionary => {};\nconst extractSpecialContent = markdown => {\n  const specialContent = [];\n  let specialContentMatch = null;\n  while (specialContentMatch = extractSpecialContentPattern.exec(markdown)) {\n    // console.log(\n    //   \"Possible Special ContentMatch\",\n    //   specialContentMatch ? specialContentMatch : null\n    // );\n    let nestedStringRegex = /\"(.*)\":(.*?).?}/;\n    let regularStringRegex = /\"(.*)\":(.*)[^}]/;\n    let regexToUse = specialContentMatch[0].match(/}{3}$/) ? nestedStringRegex : regularStringRegex;\n    const specialContentCleanMatch = specialContentMatch[0].match(regexToUse);\n    specialContent.push({\n      special: JSON.parse(`{${specialContentCleanMatch[0]}}`)\n    });\n    // console.log(\"SpecialContentCleanMatch\", specialContentCleanMatch);\n    // console.log(\n    //   \"SpecialContentJSONIFIED\",\n    //   JSON.parse(`{${specialContentCleanMatch[0]}}`)\n    // );\n    // console.log(\n    //   \"Special Content JSON parsed\",\n    //   JSON.parse(`{${specialContentMatch[0]}}`)\n    // );\n  }\n  if (specialContent && specialContent.length > 0) return specialContent;\n  return null;\n\n  // console.log(\"THEsPECIALcONTENT;;;\", specialContent);\n  // return true;\n}; // Extract special content\nconst idifyString = string => {\n  // console.log(\"IDIFY STRING\", string);\n  const idified = string.trim().toLowerCase().replace(idifyStringPattern, \"-\");\n  // console.log(\"IDIFIED STRING\", idified);\n  return idified;\n};\nconst convertMarkdown = markdown => {\n  // console.log(\"The Convert Markdown\", convertMarkdown);\n\n  const renderer = {\n    heading(text, level) {\n      // const escapedText = text.toLowerCase().replace(/[^\\w]+/g, \"-\");\n      let textModified = text.replaceAll(\"&#39;\", \"'\");\n      let headingID = idifyString(textModified);\n      let tocLen = tableOfContents.length;\n      let tocIndex = tocLen - 1;\n\n      // console.log(\"The current level;;\", level);\n      if (level === 1 || level > 4) {\n        // console.log(\"Excepted Headings;;;\", level);\n        return `\n        <h${level}>\n          ${textModified}\n        </h${level}>`;\n      }\n      if (level === 2) {\n        tableOfContents.push({\n          id: headingID,\n          children: []\n        });\n      } else if (level === 3) {\n        if (tocLen >= 1) {\n          tableOfContents[tocIndex].children.push({\n            id: headingID,\n            children: []\n          });\n        }\n      } else if (level === 4) {\n        if (tocLen > 0) {\n          // console.log(\"Child4 being configured\");\n          if (tableOfContents[tocIndex].children.length > 0) {\n            let tocChildLen = tableOfContents[tocIndex].children.length;\n            let tocChildIndex = tocChildLen - 1;\n            tableOfContents[tocIndex].children[tocChildIndex].children.push({\n              id: headingID\n            });\n          }\n        }\n      }\n\n      // console.log(\"Heading Rendere toc;;\", tableOfContents);\n      // console.log(\n      //   \"tableOfContentsJsonIFIED;;;\",\n      //   JSON.stringify(tableOfContents)\n      // );\n      return `\n              <h${level} id=\"${headingID}\">\n                ${textModified}\n              </h${level}>`;\n    }\n  };\n  marked__WEBPACK_IMPORTED_MODULE_0__.marked.use({\n    async: false,\n    renderer,\n    pedantic: false,\n    gfm: true,\n    breaks: false,\n    sanitize: false,\n    smartypants: false,\n    xhtml: false\n  });\n  let html = marked__WEBPACK_IMPORTED_MODULE_0__.marked.parse(markdown).replaceAll(\"&#39;\", \"'\");\n  // console.log(\"The returned HTML;;;\", html);\n  return html;\n};\nconst splitMarkdown = markdown => {\n  const splitContent = markdown.split(markdownSplitPattern);\n  // console.log(\"The split.length\", splitContent.length);\n  // console.log(\"The split\", splitContent);\n\n  splitContent.map(it => {\n    // console.log(\"SPLIT ITEM;;;\", it);\n  });\n  // console.log(\"The split.length\", splitContent.length);\n  return splitContent;\n};\n// const getMardkdownConveter = () => {\n//   return convertMarkdown(markdown);\n// };\n\nconst beginExtraction = markdown => {\n  const metaDataString = extractMetaData(markdown) || \"\";\n  const metaDataKeys = extractMetaKeyPairs(metaDataString) || null;\n  const description = extractDescription(markdown) || null;\n  const specialContent = extractSpecialContent(markdown);\n  const markDownSplit = splitMarkdown(markdown.replace(extractMetadataPattern, \"\"));\n  const html = markDownSplit.map(mk => {\n    // console.log(\"SPLITITEM;;;\", mk);\n    if (specialToJsonPattern.test(mk)) {\n      //  let regexToUse = nested ? : specialToJsonPattern.exec(mk)\n      let matchedString = specialToJsonPattern.exec(mk);\n      let specialString = matchedString[0];\n      // let itemNeeded = matchedString[0]\n      // console.log(\"THE FeedBack;;;\", matchedString);\n      // console.log(\"THE SPecialString;;;\", specialString);\n      // console.log(\n      //   \"SpeicalString with itemsRemoved\",\n      //   specialString.replace(/.{2}$/, \"\")\n      // );\n\n      return JSON.parse(`{${specialString.replace(/.{2}$/, \"\")}}`);\n    }\n    return convertMarkdown(mk).replace(/\\n/g, \"\").trim();\n  });\n  // console.log(\"SplitMARKDOWN;;;\", markDownSplit);\n  // console.log(\"THE HTML;;;\", html);\n  // console.log(\"THE TABLE OF CONTENTS;;;\", tableOfContents);\n  // console.log(\"ThespecialcontenT;;;\", specialContent);\n  // const toc = extractTableOfContent(markdown);\n  return {\n    metaDataKeys,\n    description,\n    specialContent,\n    markDownSplit,\n    html: html,\n    toc: tableOfContents\n  };\n};\nconst parseMarkdown = markdown => {\n  tableOfContents = [];\n  return beginExtraction(markdown);\n};\n\n\n//# sourceURL=webpack://kotii-markdown/./lib/markdownParser.js?\n}");

/***/ },

/***/ "./lib/utils.js"
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),\n/* harmony export */   getLanguageLocal: () => (/* binding */ getLanguageLocal)\n/* harmony export */ });\nconst getLanguageLocal = (pattern, match) => {\n  console.log(\"The pattern;;;\", pattern);\n  console.log(\"The patternMatch;;;\", match);\n  return pattern.exec(match)?.groups?.locale;\n};\nconst capitalizeFirstLetter = text => {\n  console.log(\"The text Uppercasing;;;\", text);\n  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;\n};\n\n\n//# sourceURL=webpack://kotii-markdown/./lib/utils.js?\n}");

/***/ },

/***/ "marked"
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
(module) {

module.exports = require("marked");

/***/ },

/***/ "fs"
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
(module) {

module.exports = require("fs");

/***/ },

/***/ "path"
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
(module) {

module.exports = require("path");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;