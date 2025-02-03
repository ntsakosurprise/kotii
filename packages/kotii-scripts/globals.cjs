const fs = require("node:fs");
const Papa = require("papaparse");
const path = require("path");
const { parseString } = require("xml2js");
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");
const parser = new XMLParser();

const getNodejsForeignData = (dataType, path) => {
  console.log("GET FOREING", dataType, path);
  return new Promise((resolve) => {
    switch (dataType.toLowerCase()) {
      case "json":
        return resolve(getJSON(path));
      case "xml":
        return getXML(path).then((data) => {
          resolve(data);
        });
      case "csv":
        return resolve(getCSV(path));
      default:
        "";
    }
  });
};

const getNodejsForeignDataSync = (dataType, path) => {
  console.log("GET FOREING", dataType, path);

  switch (dataType.toLowerCase()) {
    case "json":
      return getJSON(path);
    case "xml":
      return getXMLSync(path);
    case "csv":
      return getCSV(path);
    default:
      "";
  }
};

const getJSON = (absoluteFilePath) => {
  return `export default ${readFileContent(absoluteFilePath)}`;
};

const getXML = (absoluteFilePath) => {
  return new Promise((resolve) => {
    parseString(readFileContent(absoluteFilePath), function (err, result) {
      resolve(`export default ${JSON.stringify(result)}`);
    });
  });
};
const getXMLSync = (absoluteFilePath) => {
  let result = parser.parse(readFileContent(absoluteFilePath));
  console.log("XML DATA SYNC", result);
  return `export default ${JSON.stringify(result)}`;
};

const getCSV = (absoluteFilePath) => {
  let parsedCsv = Papa.parse(readFileContent(absoluteFilePath));
  return `export default ${JSON.stringify(parsedCsv.data)}`;
};

const readFileContent = (absoluteFilePath) => {
  let contents = fs.readFileSync(absoluteFilePath, {
    encoding: "utf-8",
  });

  return contents;
};

const removeStylesJson = () => {
  let stylesPath = `${__dirname}/dev/styles.json`;
  let stylesPathCss = `${__dirname}/dev/styles-css-modules.json`;
  console.log("REMOVE STYLES RUNS", stylesPath);
  if (fs.existsSync(stylesPath)) fs.unlinkSync(stylesPath);
  if (fs.existsSync(stylesPathCss)) fs.unlinkSync(stylesPathCss);
};

const createImportPathContext = (
  filePath,
  specifier,
  firstGenChild = "src"
) => {
  console.log("CREATE IMPORT PATH CONTEXT", specifier);
  let pathContext = {};
  let currentPathString = "";
  let contineScan = true;
  let fileName = "";
  let fileNameSet = false;
  //  while(contineScan){
  //     console.log("THE FOLDER",path.dirname(specifier))
  //     if(!fileName) fileName = path.basename(specifier)
  //     let currentFolder = path.dirname(specifier)
  //      if(!fileNameSet) {
  //        fileNameSet = true;
  //        currentPathString = `${currentFolder}/${fileName}`
  //       }else{
  //         currentPathString = `${currentFolder}/${currentPathString}`
  //       }
  //     if(currentFolder == firstGenChild) {
  //       pathContext[fileRelativePath] = currentPathString
  //       pathContext[fileRoot] = specifier
  //       pathContext[fileUserRequest] = specifier
  //       contineScan = false
  //     }

  //  }
  console.log(
    "THE LAST INDEX OF SOURCE",
    filePath.substring(0, filePath.lastIndexOf(firstGenChild) - 1)
  );
  let lastIndexOfChild = filePath.lastIndexOf(firstGenChild);
  let root = filePath.substring(0, lastIndexOfChild - 1);
  let relativePath = `./${filePath.substring(lastIndexOfChild)}`;
  pathContext["fileRelativePath"] = relativePath;
  pathContext["fileRoot"] = root;
  pathContext["fileUserRequest"] = specifier;
  pathContext["fileFullPath"] = filePath;
  console.log("THE FOLDER", pathContext);
  return pathContext;
};

module.exports = {
  getNodejsForeignData,
  removeStylesJson,
  getNodejsForeignDataSync,
  createImportPathContext,
};
