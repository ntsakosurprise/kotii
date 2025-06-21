//import path from "path";
import postcss from "postcss";

import {compareCssPlugin} from "../postcss-plugins/index.js";


const compareCss = function (oldCssAst,newCssAst) {
 
  const astBefore = newCssAst
  const astToTransform = astBefore
  console.log("Copmaring TWO CSS trees::",newCssAst)
  console.log("Copmaring TWO CSS OLD::",oldCssAst)
  return new Promise((resolve) => {
    postcss([compareCssPlugin(oldCssAst,newCssAst)])
      .process(astToTransform)
      .then((result) => {
        console.log("POST CSS PROCESSOR HAS COMPLETED", result);
        resolve({ compared: true, update: result.root.update});
      });
  });
};

export default compareCss;
