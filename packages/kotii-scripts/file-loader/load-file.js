import crypto from "crypto";
import fs from "fs";
const imagesMime = {
  jpeg: "data:image/jpeg",
  png: "data:image/png",
  svg: "data:image/svg+xml",
  gif: "data:image/gif",
};

const secret = "Hi";
let fileNamePattern = "";
export default (loaderConfig, fileConfig) => {
  console.log("THE FILE LOADR R", loaderConfig, fileConfig);
  let resultObject = { inlined: false };
  if (checkIfShouldInline(loaderConfig, fileConfig)) {
    console.log("IS CONFIG .PNG");
    resultObject.inlined = true;
    resultObject["content"] = createFileNameAsB64(fileConfig);
    return resultObject;
  }
  if (!fileNamePattern) fileNamePattern = getFileNameFromConfig(loaderConfig);
  console.log("THE FILE NAME PATTERN", fileNamePattern);
  if (fileNamePattern.isHash) {
    resultObject["content"] = createFileNameWithHash(fileConfig);
    return resultObject;
  } else {
    resultObject["content"] = createFileNameAsIs(fileConfig);
    return resultObject;
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
  const hash = crypto.createHash("sha256", config.filename).digest("hex");

  console.log(hash);
  return `${hash}${config.extension}`;
};
const createFileNameAsIs = (config) => {
  return `${config.filename}`;
};
const createFileNameAsB64 = (config, fName) => {
  let pngContent = fs.readFileSync(config.fullUrl, { encoding: "base64" });
  const b64 = pngContent.toString("base64");
  let dataURI = `${setInlinedImageMime(
    config.extension.substring(1)
  )};base64,${b64}`;

  return dataURI;
};

const setInlinedImageMime = (imageExtension) => {
  switch (imageExtension) {
    case "jpeg":
    case "jpg":
      return imagesMime["jpeg"];
    case "png":
    case "svg":
    case "gif":
      return imagesMime[imageExtension];
    default:
      return imageExtension;
  }
};
const checkIfShouldInline = (config, fileConfig) => {
  console.log("checking if should inline", fileConfig.extension);
  let limit = 0;
  if (!config?.inline) return false;
  if (!config.inline?.limit) return false;
  if (typeof config.inline.limit === "string") {
    limit = parseInt(config.inline.limit, 10);
  } else {
    limit = config.inline.limit;
  }

  let size = fs.statSync(fileConfig.fullUrl).size;

  if (size <= limit) return true;
  return false;
};
