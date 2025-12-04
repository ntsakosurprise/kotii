const compileTailwind = require("./postcss.cjs");
const path = require("path");

module.exports = async function (cssContent) {
  let options = this.getOptions();
  let asyncCallback = this.async();
  let filePath = this.resource;
  if (path.extname(filePath) !== ".css") return asyncCallback(null, cssContent);
  if (filePath.indexOf(options.mainCssFilename) < 0)
    return asyncCallback(null, cssContent);

  // let result = await compileTailwind(
  //   cssContent,
  //   filePath,
  //   `${filePath}`,
  //   options
  // );
  // process["tailwindGenerated"] = "true";
  // this.emitFile("tailwind.css", result.css);
  if (!process?.tailwindGenerated) {
    console.log("GENERATING TAILWIND CSS CONTENT");
    process["runTailwindCss"] = true;
    await options.saveTailwindResources({
      tailwindMainContent: cssContent,
      tailwindConfigPath: options.tailwindConfig,
      tailwindFrom: filePath,
      tailwindTo: filePath,
      buildFolder: options.buildFolder,
    });

    asyncCallback(null, cssContent);
  } else {
    console.log("POST CSS LOADER IS RELOADED");
  }

  // return jsFilleContent;
};
