const path = require("path");
const fs = require("fs");
let assetsManifestData = null;

// eslint-disable-next-line no-unused-vars
module.exports = function (pngFile) {
  let options = this.getOptions();

  // const filePath = this.resource; // Webpack, get filepath
  const relativeFilePath = this._module.resourceResolveData.relativePath;
  console.log("THE FILE RESULT", this._module.resourceResolveData);

  let assetsPath = path.resolve(
    options.referenceAssetsPath,
    options.assetsFile
  );
  if (!assetsManifestData) {
    if (fs.existsSync(assetsPath)) {
      assetsManifestData = JSON.parse(
        fs.readFileSync(assetsPath, {
          encoding: "utf8",
        })
      );
    }
  }

  console.log("THE FILE ID CONTENT", assetsManifestData);

  let content = getFileContent(relativeFilePath);
  console.log("THE CONTENT", content);
  // if (assetsManifestData[filePath]) {
  // fileIdContent = assetsManifestData[filePath].content;
  //}

  return `export default ${JSON.stringify(content)}`;
};

const getFileContent = (relativeFilePath) => {
  let assetsKeys = Object.keys(assetsManifestData);
  let content = "";

  for (
    let currentAssetIndex = 0;
    currentAssetIndex < assetsKeys.length;
    currentAssetIndex++
  ) {
    let currentAssetMap = assetsManifestData[assetsKeys[currentAssetIndex]];

    if (currentAssetMap.pathContext.fileRelativePath === relativeFilePath) {
      content = currentAssetMap.content;
      break;
    }
  }

  return content;
};
