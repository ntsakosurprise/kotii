const crypto = require("crypto");

let KOTII_STYLED_REGEX = /import\s+styled\s+from\s+['"]kotii-styled['"]/;
let STYLED_USAGE_REGEX =
  /\b([A-Za-z0-9_]+)\s*=\s*styled(?:\.([A-Za-z0-9]+)|\(([^)]+)\))/g;

module.exports = function (source) {
  const relativeFilePath = this._module.resourceResolveData.relativePath;

  let content = getFileContent(source, relativeFilePath);
  return content;
};

const getFileContent = (content, relativeFilePath) => {
  return findStyledComponentsPatterns(content, relativeFilePath);
};
const findStyledComponentsPatterns = (sourceString, relativeFilePath) => {
  console.log("THE SOURCE STRING", sourceString);
  if (KOTII_STYLED_REGEX.test(sourceString)) {
    console.log("COMPONENT-REL-PATH", relativeFilePath);
    let newSourceWithStyledConfig = transformStyledComponentCalls(
      sourceString,
      relativeFilePath
    );
    console.log("THE MODIFIED SOURCE$$$", newSourceWithStyledConfig);

    return newSourceWithStyledConfig;
  }
  return sourceString;
};

const transformStyledComponentCalls = (sourceString, componentRelPath) => {
  console.log("FIND STYLED COMPONENT PATTERNS");

  let manifest = {};
  let match;
  let modifiedSource = sourceString;

  while ((match = STYLED_USAGE_REGEX.exec(sourceString)) !== null) {
    console.log("THE WHILE LOOP");
    const variableName = match[1];
    const htmlTag = match[2];
    const functionalWrapper = match[3];

    const componentKey = `${componentRelPath}__${variableName}`;

    if (!manifest[componentKey]) {
      // Create a short, secure MD5 checksum block

      const hash = crypto
        .createHash("md5")
        .update(componentKey)
        .digest("base64url")
        .substring(0, 8);

      manifest[componentKey] = {
        componentId: `kt-${hash}`, // Unique Kotii Framework Namespace prefix
        variableName,
        tagType: htmlTag ? "property" : "functional",
        target: htmlTag || functionalWrapper,
      };
    }

    const { componentId, tagType, target } = manifest[componentKey];

    if (tagType === "property") {
      modifiedSource = modifiedSource.replace(
        new RegExp(`\\b${variableName}\\s*=\\s*styled\\.${target}`, "g"),
        `${variableName} = styled.${target}.withConfig({ componentId: "${componentId}" })`
      );
    } else {
      modifiedSource = modifiedSource.replace(
        new RegExp(
          `\\b${variableName}\\s*=\\s*styled\\(\\s*${target}\\s*\\)`,
          "g"
        ),
        `${variableName} = styled(${target}).withConfig({ componentId: "${componentId}" })`
      );
    }
  }
  return modifiedSource;
};
