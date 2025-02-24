const compileTailwind = require("./postcss.cjs");
const path = require("path");

module.exports = async function (cssContent) {
  let options = this.getOptions();
  let asyncCallback = this.async();
  let filePath = this.resource;
  console.log("kotii postcss loader options", options, path.extname(filePath));
  if (path.extname(filePath) !== ".css") return asyncCallback(null, cssContent);
  if (filePath.indexOf(options.mainCssFilename) < 0)
    return asyncCallback(null, cssContent);
  try {
    let result = await compileTailwind(
      cssContent,
      filePath,
      `${filePath}`,
      options
    );
    this.emitFile("tailwind.css", result.css);
  } catch (error) {
    console.log("Kotii postcss loader", error);
  }

  asyncCallback(null, cssContent);
  // return jsFilleContent;
};
