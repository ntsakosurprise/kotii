const path = require("path");
const fs = require("fs");
let styledManifestData = null;

module.exports = function (source) {
  const relativeFilePath = this._module.resourceResolveData.relativePath;
  let options = this.getOptions();

  let assetsPath = path.resolve(
    options.referenceAssetsPath,
    options.assetsFile
  );
  if (!styledManifestData) {
    if (fs.existsSync(assetsPath)) {
      styledManifestData = JSON.parse(
        fs.readFileSync(assetsPath, {
          encoding: "utf8",
        })
      );
    }
  }

  if (!styledManifestData) return source;

  let content = getFileContent(source, relativeFilePath);

  return `export default ${JSON.stringify(content)}`;

  // return `export default ${JSON.stringify(modulesMap)}`;
};

const getFileContent = (content, relativeFilePath) => {
  // let assetsKeys = Object.keys(styledManifestData);
  // let content = "";

  // for (
  //   let currentAssetIndex = 0;
  //   currentAssetIndex < assetsKeys.length;
  //   currentAssetIndex++
  // ) {
  //   let currentAssetMap = styledManifestData[assetsKeys[currentAssetIndex]];

  //   if (currentAssetMap.pathContext.fileRelativePath === relativeFilePath) {
  //     content = currentAssetMap.modules;
  //     break;
  //   }
  // }

  let outputCode = content;
  const manifestKeys = Object.keys(styledManifestData);

  for (let i = 0; i < manifestKeys.length; i++) {
    const key = manifestKeys[i];
    const [savedPath, variableName] = key.split("__");

    if (savedPath === relativeFilePath) {
      const { componentId, tagType, target } = styledManifestData[key];

      if (tagType === "property") {
        const search = new RegExp(
          `(\\b${variableName}\\s*=\\s*styled\\.${target})`,
          "g"
        );
        outputCode = outputCode.replace(
          search,
          `$1.withConfig({ componentId: "${componentId}" })`
        );
      } else {
        const search = new RegExp(
          `(\\b${variableName}\\s*=\\s*styled\\(\\s*${target}\\s*\\))`,
          "g"
        );
        outputCode = outputCode.replace(
          search,
          `$1.withConfig({ componentId: "${componentId}" })`
        );
      }
    }
  }

  return outputCode;
};
