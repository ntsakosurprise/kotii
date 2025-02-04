const path = require("path");
const fs = require("fs");
let assetsManifestData = null;

module.exports = function (cssContent) {
  console.log(
    "SyncStylesLoader context",
    this._module.resourceResolveData.relativePath
  );
  const relativeFilePath = this._module.resourceResolveData.relativePath;
  let options = this.getOptions();

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

  let content = getFileContent(relativeFilePath);
  console.log("THE CONTENT", content);

  return `export default ${JSON.stringify(content)}`;

  // return `export default ${JSON.stringify(modulesMap)}`;
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
      content = currentAssetMap.modules;
      break;
    }
  }

  return content;
};
