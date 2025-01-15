import fs from "node:fs";
import Papa from "papaparse";
import { parseString } from "xml2js";

const getNodejsForeignData = async (dataType, path) => {
  console.log("GET FOREING", dataType, path);
  switch (dataType.toLowerCase()) {
    case "json":
      return getJSON(path);
    case "xml":
      return await getXML(path);
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

export { getNodejsForeignData };
