//import path from "path";
import postcss from "postcss";
//import postcssModules from "postcss-modules";
import postCssModules from "../postcss-plugins/index.js";

const renderCssModules = function (cssInput, opts, filePath) {
  return new Promise((resolve) => {
    postcss([postCssModules])
      .process(cssInput)
      .then((result) => {
        console.log("POST CSS PROCESSOR HAS COMPLETED", result.css);
        opts[filePath] = { ...result.root.modulesMap };
        console.log("THE FIEPATH", opts);
        delete result.root.modulesMap;
        resolve({ css: result.css, cssModules: opts[filePath] });
      });
  });
};

export default renderCssModules;
