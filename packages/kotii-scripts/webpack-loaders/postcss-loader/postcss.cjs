const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const postcssNested = require("postcss-nested");
const tailwindcss = require("tailwindcss");
let tailwindConfig = null;
const fs = require("fs");

module.exports = async function (css, from, to, options) {
  console.log("THE FROM TO", from, to);
  // let to = "/Users/surprisemashele/Apps/new-with-npm/src/build/tailwind.css";

  return new Promise((resolve) => {
    if (!tailwindConfig) {
      tailwindConfig = require(options.tailwindConfig);
    }
    console.log("THE SAVED TAILWIND", tailwindConfig);
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
          console.log("Save to", to);
          // console.log("save to map", result.map)
          // if(fs.existsSync("/Users/surprisemashele/Apps/new-with-npm/src/build")){
          //   console.log("Build folder exist")
          // }else{
          //   console.log("Build Folder does not exist")
          // }
          // fs.writeFileSync(to,result.css)
          // fs.writeFileSync(`${to}.map`, result.map.toString());
          resolve({
            css: result.css,
            // map: result.map.toString()
          });
        } catch (error) {
          console.log("CSS SAVING ERROR", error);
        }

        // fs.writeFile(to, result.css, (
        //   err,
        // ) => true);
        // if (result.map) {
        //   fs.writeFile(`${to}.map`, result.map.toString(), () => true);
        // }
      });
  });
};
