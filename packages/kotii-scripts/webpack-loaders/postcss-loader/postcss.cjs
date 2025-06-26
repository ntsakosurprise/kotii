const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const postcssNested = require("postcss-nested");
const tailwindcss = require("tailwindcss");
let tailwindConfig = null;
const fs = require("fs");

module.exports = async function (css, from, to, options) {
  // let to = "/Users/surprisemashele/Apps/new-with-npm/src/build/tailwind.css";

  return new Promise((resolve) => {
    if (!tailwindConfig) {
      tailwindConfig = require(options.tailwindConfig);
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
