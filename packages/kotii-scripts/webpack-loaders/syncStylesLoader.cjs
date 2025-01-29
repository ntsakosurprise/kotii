
const path = require("path");
const fs = require("fs");
let assetsManifestData = null;


module.exports = function (cssContent) {
  const filePath = this.resource;
  let options = this.getOptions();
  let modulesMap = "";

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
    modulesMap = assetsManifestData[filePath];
  }

  return `export default ${JSON.stringify(modulesMap)}`;
};
