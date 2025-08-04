const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const postcssNested = require("postcss-nested");
const tailwindcss = require("tailwindcss");
const path = require("path");
let tailwindConfig = null;

const fs = require("fs");

module.exports = async function (css, from, to, options, tsConfigReader) {
  // let to = "/Users/surprisemashele/Apps/new-with-npm/src/build/tailwind.css";
  console.log("THE TAILWIND OPTIONS", options);

  return new Promise(async (resolve) => {
    if (!tailwindConfig) {
      const fileExt = path.extname(options.tailwindConfig);

      if (
        fileExt === ".js" &&
        options.fileReader(options.tailwindConfig).indexOf("module.exports") >=
          0
      ) {
        throw new Error(
          `File: ${path.basename(
            options.tailwindConfig
          )} should use commonjs with a .cjs extension`
        );
      } else if (fileExt === ".cjs") {
        tailwindConfig = await options.tsConfigReaders.commonJs(
          options.tailwindConfig
        );
      } else {
        tailwindConfig = await options.tsConfigReaders.esmJs(
          options.tailwindConfig
        );
      }
      // tailwindConfig = await tsConfigReader(options.tailwindConfig);
      // console.log("THE TAILWIND CONFIG", tailwindConfig);
      //require(options.tailwindConfig);
    }

    postcss([
      autoprefixer,
      postcssNested,
      tailwindcss({
        config:
          typeof tailwindConfig == "function"
            ? tailwindConfig(options.contentPath)
            : options.tailwindConfig,
      }),
    ])
      .process(css, { from: from, to: to })
      .then((result) => {
        try {
          resolve({
            css: result.css,
          });
        } catch (error) {
          console.log("CSS SAVING ERROR", error);
        }
      });
  });
};
