const path = require("path");
const fs = require("fs");
let assetsManifestData = null;

// eslint-disable-next-line no-unused-vars
module.exports = function (pngFile) {
  let options = this.getOptions();
  let pngBase64 = "";
  const filePath = this.resource; // Webpack, get filepath

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

  if (assetsManifestData[filePath]) {
    pngBase64 = assetsManifestData[filePath];
  }

  return `export default ${JSON.stringify(pngBase64)}`;
};
