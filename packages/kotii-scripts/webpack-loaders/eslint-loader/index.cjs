const createLinter = require("./eslinter.cjs");
let esLinter = null;

module.exports = async function (jsFilleContent, map) {
  let options = this.getOptions();
  let asyncCallback = this.async();
  const { lintDirectory } = options;
  console.log("THE LINTER OPTIONS", options);
  console.log("THE LINTER JS CONTENT", jsFilleContent);
  console.log("THE LINTER MAP", map);
  if (this.resource.indexOf("node_modules") >= 0)
    return asyncCallback(null, jsFilleContent);
  try {
    if (!esLinter) esLinter = await createLinter(options);
    console.log("ESLINT LINTER", esLinter);
    const lintResults = await esLinter.linter.lintFiles([this.resource]);
    const resultText = esLinter.formatter.format(lintResults);

    console.log("THE LINT RESULT", lintResults, resultText);
  } catch (error) {
    console.log("Lint error", error);
  }

  asyncCallback(null, jsFilleContent);
  // return jsFilleContent;
};
