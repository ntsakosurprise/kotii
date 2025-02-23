const createPretier = require("./prettier.cjs");
let prettier = null;

module.exports = async function (jsFilleContent, map) {
  let options = this.getOptions();
  let asyncCallback = this.async();
  let filePath = this.resource
  const { lintDirectory } = options;
  console.log("THE LINTER OPTIONS", options);
  console.log("THE LINTER JS CONTENT", jsFilleContent);
  if (this.resource.indexOf("node_modules") >= 0)
    return asyncCallback(null, jsFilleContent);
  try {
    if (!prettier) prettier = await createPretier(options);
       let prettifyResults = await prettier.prettier.format(jsFilleContent, { ...prettier.prettierOptions,parser: "babel",filepath: filePath})

    console.log("THE PRETTIFY RESULT", prettifyResults);
  } catch (error) {
    console.log("Prettier error", error);
  }

  asyncCallback(null, jsFilleContent);
  // return jsFilleContent;
};
