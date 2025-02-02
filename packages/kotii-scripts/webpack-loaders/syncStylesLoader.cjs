const path = require("path");
const fs = require("fs");
let assetsManifestData = null;

module.exports = function (cssContent) {
  console.log(
    "SyncStylesLoader context",
    this._module.resourceResolveData.relativePath
  );
  const filePath = this.resource;
  const fileSpecifier = this._module.resourceResolveData.relativePath;
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

  if (assetsManifestData[fileSpecifier]) {
    modulesMap = assetsManifestData[fileSpecifier].modules;
  }

  return `export default ${JSON.stringify(modulesMap)}`;
};
