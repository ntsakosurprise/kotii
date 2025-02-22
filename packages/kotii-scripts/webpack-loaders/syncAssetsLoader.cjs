const path = require("path");
const fs = require("fs");
let assetsManifestData = null;

// eslint-disable-next-line no-unused-vars
module.exports = function (content) {
  let options = this.getOptions();
  const { referenceAssetsPath, assetsFile } = options;
  // const { emitFile = false, emitPath } = extra;

  // const filePath = this.resource; // Webpack, get filepath
  const relativeFilePath = this._module.resourceResolveData.relativePath;
  // console.log("THE FILE RESULT", this._module.resourceResolveData);

  let assetsPath = path.resolve(referenceAssetsPath, assetsFile);
  if (!assetsManifestData) {
    if (fs.existsSync(assetsPath)) {
      assetsManifestData = JSON.parse(
        fs.readFileSync(assetsPath, {
          encoding: "utf8",
        })
      );
    }
  }

  // console.log("THE FILE ID CONTENT", assetsManifestData);

  let requestContent = getFileContent(relativeFilePath);
  let exportString = `export default ${JSON.stringify(requestContent.content)}`;
  // console.log("THE CONTENT", requestContent);
  // if (assetsManifestData[filePath]) {
  // fileIdContent = assetsManifestData[filePath].content;
  //}
  // if (requestContent.inlined) return exportString;
  // if (emitFile) {
  //   console.log(
  //     "EMIT FILE PATH",
  //     `${requestContent.content}`,
  //     "THE CONTENT",
  //     content
  //   );
  //   this.emitFile(`${requestContent.content}`, content);
  // }
  return exportString;
};

const getFileContent = (relativeFilePath) => {
  let assetsKeys = Object.keys(assetsManifestData);
  let content = "";
  // let inlined = false;
  for (
    let currentAssetIndex = 0;
    currentAssetIndex < assetsKeys.length;
    currentAssetIndex++
  ) {
    let currentAssetMap = assetsManifestData[assetsKeys[currentAssetIndex]];

    if (currentAssetMap.pathContext.fileRelativePath === relativeFilePath) {
      // inlined = currentAssetMap?.inlined || false;
      content = currentAssetMap.content;
      break;
    }
  }

  return {
    content,
    // inlined,
  };
};
