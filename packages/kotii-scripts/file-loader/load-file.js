import crypto from "crypto";
import fs from "fs";

const secret = "Hi";
let fileNamePattern = "";
export default (loaderConfig, fileConfig) => {
  console.log("THE FILE LOADR", loaderConfig, fileConfig);
  if (loaderConfig.inlinePngs && fileConfig.extension === ".png") {
    console.log("IS CONFIG .PNG");
    return createFileNameAsB64(fileConfig);
  }
  if (!fileNamePattern) fileNamePattern = getFileNameFromConfig(loaderConfig);
  console.log("THE FILE NAME PATTERN", fileNamePattern);
  if (fileNamePattern.isHash) {
    return createFileNameWithHash(fileConfig);
  } else {
    return createFileNameAsIs(fileConfig);
  }
};

const getFileNameFromConfig = (config) => {
  let name = config.name;
  let nameSplit = name.split(".");
  if (nameSplit[0] === "hash") {
    return {
      isHash: true,
    };
  } else {
    return {
      isRegularName: true,
    };
  }
};
const createFileNameWithHash = (config) => {
  // Calling createHash method
  const hash = crypto.createHash("sha256", secret);

  console.log(hash);
  return `${hash}${config.extension}`;
};
const createFileNameAsIs = (config) => {
  return `${config.filename}`;
};
const createFileNameAsB64 = (config, fName) => {
  let pngContent = fs.readFileSync(config.fullUrl, { encoding: "base64" });
  const b64 = pngContent.toString("base64");
  let dataURI = `data:image/png;base64,${b64}`;

  return dataURI;
};
