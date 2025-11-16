import fs from "fs";
import createCssAst from "./create_css_ast.js";

const MATCH_IMPORT_LINE_REGEX = /(\s\n\r)*@import\s*(.*)\.+(css)["']\)[;\s]/gm;
const MATCH_REMOTE_IMPORT_LINE_REGEX =
  /(\s\n\r)*@import\s*(.*)(https|http)(.*)\.+(css)["']\)[;\s]/gm;
const MATCH_REMOTE_RESOURCE_REGEX = /(https|http):+\/\//i;
const INCLUDE_PRE_TEXT = "INCLUDED_CSS_HEAD:";
const INCLUDE_POST_TEXT = "INCLUDED_CSS_FOOTER:";
let REMOTE_IMPORTS_STRING = [];
const mergeCssFiles = function (cssInput, moduleMeta) {
  return new Promise(async (resolve) => {
    let pathContext = moduleMeta.pathContext;
    let imports = {
      [moduleMeta.pathContext.fileFullPath]: {
        inputBefore: cssInput,
        //  inputAfterMerge: '',
        inputBeforeAst: createCssAst([cssInput]),
        parent: moduleMeta?.parent || null,
        selfReferencePath: moduleMeta.pathContext.fileFullPath,
        pathAsShortID: moduleMeta?.pathAsShortID || null,
        children: {},
      },
    };
    if (!MATCH_IMPORT_LINE_REGEX.test(cssInput)) {
      return resolve({
        input: cssInput,
      });
    } else {
      let inputToModify = recursivelyCombineCss(
        cssInput,
        moduleMeta,
        imports,
        REMOTE_IMPORTS_STRING
      );

      imports[Object.keys(imports)[0]]["inputAfter"] =
        moduleMeta?.shouldWrapFile
          ? `/* ${INCLUDE_PRE_TEXT} ${
              imports[pathContext.fileFullPath].pathAsShortID
            } */ ${inputToModify} /* ${INCLUDE_POST_TEXT} ${
              imports[pathContext.fileFullPath].pathAsShortID
            } */`
          : inputToModify;

      let resultsData = {
        input: MATCH_REMOTE_IMPORT_LINE_REGEX.test(inputToModify)
          ? inputToModify.replace(MATCH_REMOTE_IMPORT_LINE_REGEX, "")
          : `${inputToModify}`,
        imports,
      };
      if (REMOTE_IMPORTS_STRING.length > 0) {
        resultsData["allImports"] = REMOTE_IMPORTS_STRING;
        REMOTE_IMPORTS_STRING = [];
      }
      return resolve(resultsData);
    }
  });
};

const recursivelyCombineCss = (cssInput, moduleMeta, imports = null) => {
  let matches = cssInput.match(MATCH_IMPORT_LINE_REGEX);
  let inputToModify = cssInput;
  let importKeys = Object.keys(imports);
  let parentPath = importKeys[importKeys.length - 1];
  matches = matches.filter((importStatement) => {
    if (!MATCH_REMOTE_RESOURCE_REGEX.test(importStatement)) return true;
    REMOTE_IMPORTS_STRING.push(`${importStatement}\n`);
  });

  matches.forEach((match, i) => {
    let importsPath = extractImportPath(match);
    let filePath = searchForFilePath(importsPath, moduleMeta);
    let fileContents = getFileContents(filePath);

    if (!imports[filePath])
      imports[filePath] = {
        inputBefore: fileContents,
        inputBeforeAst: createCssAst([fileContents]),
      };

    if (imports[parentPath]?.children)
      imports[parentPath].children[importsPath] = {
        path: filePath,
      };

    if (!MATCH_IMPORT_LINE_REGEX.test(fileContents)) {
      let fileName = match.match(/\.(.*)\.+(css)/)[0];
      fileContents = `/* ${INCLUDE_PRE_TEXT} ${fileName} */ ${fileContents} /* ${INCLUDE_POST_TEXT} ${fileName} */`;
      imports[filePath]["inputAfter"] = fileContents;
      imports[filePath]["pathAsShortID"] = importsPath.trim();
      imports[filePath]["selfReferencePath"] = filePath;
      imports[filePath]["parent"] = {
        path: parentPath,
      };
    } else {
      imports[filePath]["children"] = {};
      let fileName = match.match(/\.(.*)\.+(css)/)[0];
      fileContents = recursivelyCombineCss(fileContents, moduleMeta, imports);
      fileContents = `/* ${INCLUDE_PRE_TEXT} ${fileName} */ ${fileContents} /* ${INCLUDE_POST_TEXT} ${fileName} */`;
      imports[filePath]["inputAfter"] = fileContents;
      imports[filePath]["pathAsShortID"] = importsPath.trim();
      imports[filePath]["selfReferencePath"] = filePath;
      imports[filePath]["parent"] = {
        path: parentPath,
      };
    }

    inputToModify = inputToModify.replace(match, fileContents);
  });

  return inputToModify;
};

const extractImportPath = (cssDecoratedPath) => {
  let PATH_EXTRACT_REGEX = /\("(.*)"\)/;
  let pathStringMatch = PATH_EXTRACT_REGEX.exec(cssDecoratedPath);

  return pathStringMatch[1];
};
const searchForFilePath = (pathString, opts) => {
  if (pathString.indexOf("/") >= 0) {
    let pathPieces = pathString.split("/");
    let parentFilePath = opts.pathContext.fileFullPath;
    let splitParentFilePath = parentFilePath.split("/");

    if (pathPieces[0] === "" || pathPieces[0] === ".") pathPieces.splice(0, 1);
    if (splitParentFilePath[0] === "" || splitParentFilePath[0] === ".")
      splitParentFilePath.splice(0, 1);

    let fileName = pathPieces[pathPieces.length - 1];

    if (pathPieces.length === 1) {
      let parentFilePathFolder = parentFilePath.replace(
        "/" + splitParentFilePath.splice(splitParentFilePath.length - 1, 1),
        ""
      );
      let currentFileNamePath = `${parentFilePathFolder}/${fileName}`;
      if (!fs.existsSync(currentFileNamePath))
        throw new Error(
          `Imported css file with path: ${currentFileNamePath} does not exist.`
        );
      // console.log("THE PARENT FILE PATH FOLDER", parentFilePathFolder)
      return currentFileNamePath;
    } else {
      // for(let pathIndex=0; pathIndex < pathPieces.length; pathIndex){
      //   let currentItem = pathPieces[pathIndex]
      //   if(currentItem === fileName){
      //   }
      //   console.log("Current Item", currentItem)
      // }
    }
  } else {
    // relative path
  }
};

const getFileContents = (realFilePath) => {
  if (!fs.existsSync(realFilePath))
    throw new Error("Imported css file path:", realFilePath, "does not exist");
  let contents = fs.readFileSync(realFilePath, { encoding: "utf8" });

  return contents;
};

export default mergeCssFiles;
