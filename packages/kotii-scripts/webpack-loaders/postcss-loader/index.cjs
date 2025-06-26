const compileTailwind = require("./postcss.cjs");
const path = require("path");

module.exports = async function (cssContent) {
  let options = this.getOptions();
  let asyncCallback = this.async();
  let filePath = this.resource;
  if (path.extname(filePath) !== ".css") return asyncCallback(null, cssContent);
  if (filePath.indexOf(options.mainCssFilename) < 0)
    return asyncCallback(null, cssContent);

  let result = await compileTailwind(
    cssContent,
    filePath,
    `${filePath}`,
    options
  );
  this.emitFile("tailwind.css", result.css);

  asyncCallback(null, cssContent);
  // return jsFilleContent;
};
