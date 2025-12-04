import fs from "fs";
const plugin = (opts = {}) => {
  // import: (atRule, { result }) {
  //   const importedFile = parseImport(atRule)
  //   result.messages.push({
  //     type: 'dependency',
  //     plugin: 'postcss-import',
  //     file: importedFile,
  //     parent: result.opts.from
  //   })
  // }

  let cssString = null;
  let importsIndexesInThisFile = [];
  return {
    postcssPlugin: "merge-css-files",
    AtRule: {
      import: (atRule, { result }) => {
        importsIndexesInThisFile.length === 0
          ? importsIndexesInThisFile.push(1)
          : importsIndexesInThisFile.push(importsIndexesInThisFile.length + 1);

        let filePath = searchForFilePath(
          extractImportPath(atRule.params),
          opts
        );
        let fileContents = getFileContents(filePath);
        cssString = {
          content: fileContents,
          nodeIndex:
            importsIndexesInThisFile[importsIndexesInThisFile.length - 1],
          importRequestString: atRule.params,
          filePath,
          // parentPathAsID: opts.pathContext.fileFullPath
        };

        // const importedFile = parseImport(atRule)
        // result.messages.push({
        //   type: 'dependency',
        //   plugin: 'postcss-import',
        //   file: importedFile,
        //   parent: result.opts.from
        // })
      },
    },
    OnceExit(css) {
      if (cssString) {
        css["processImportedFiles"] = true;
        css["cssStringContent"] = cssString;
        cssString = null;
      } else {
        css["processImportedFiles"] = false;
      }
    },
  };
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

    let parentFileName = splitParentFilePath[splitParentFilePath.length - 1];
    let fileName = pathPieces[pathPieces.length - 1];
    let possibleFilePath = "";

    if (pathPieces.length === 1) {
      let parentFilePathFolder = parentFilePath.replace(
        "/" + splitParentFilePath.splice(splitParentFilePath.length - 1, 1),
        ""
      );
      let currentFileNamePath = `${parentFilePathFolder}/${fileName}`;
      if (!fs.existsSync(currentFileNamePath))
        throw new Error("Imported css file does not exist");

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
  // return realFilePath
  let contents = fs.readFileSync(realFilePath, { encoding: "utf8" });

  return contents;
};

plugin.postcss = true;

export default plugin;
