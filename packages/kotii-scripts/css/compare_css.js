//import path from "path";
import postcss from "postcss";
import { compareCssPlugin } from "../postcss-plugins/index.js";

const compareCss = function (oldCssAst, newCssAst) {
  const astBefore = newCssAst;
  const astToTransform = astBefore;

  return new Promise((resolve) => {
    postcss([compareCssPlugin(oldCssAst, newCssAst)])
      .process(astToTransform)
      .then((result) => {
        resolve({ compared: true, update: result.root.update });
      });
  });
};

export default compareCss;
