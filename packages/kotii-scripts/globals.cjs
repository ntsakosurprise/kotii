const fs = require("node:fs");
const Papa = require("papaparse");
const { parseString } = require("xml2js");


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

const removeStylesJson = ()=>{
  
  let stylesPath =  `${__dirname}/dev/styles.json`
  let stylesPathCss =  `${__dirname}/dev/styles-css-modules.json`
  console.log("REMOVE STYLES RUNS",stylesPath)
  if(fs.existsSync(stylesPath)) fs.unlinkSync(stylesPath)
  if(fs.existsSync(stylesPathCss)) fs.unlinkSync(stylesPathCss)
}

module.exports = { getNodejsForeignData,removeStylesJson };
