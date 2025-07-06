//import path from "path";
import postcss from "postcss";
//import postcssModules from "postcss-modules";
import { transformCssPlugin } from "../postcss-plugins/index.js";
import createCssAst from "./create_css_ast.js";
import mergeCssFiles from "./merge_css_files.js";

const renderCssModules = function (
  cssInput,
  opts,
  moduleMeta,
  isModules = false
) {
  console.log("MODULES META", moduleMeta, isModules);
  let shortName = moduleMeta.shortName;
  // const astBefore = createCssAst([cssInput])
  // // if(!isModules) return {cssAst: astBefore, pathContext: moduleMeta.pathContext}
  // const copiedAst =  JSON.parse(JSON.stringify(astBefore))
  // console.log("THE COPIED AST", cssInput)

  console.log("THE AST TO TRANSFORM");

  return new Promise((resolve) => {
    mergeCssFiles(cssInput, moduleMeta)
      .then((mergeResults) => {
        console.log("THE MERGE RESULTS", mergeResults);
        const astBefore = createCssAst([mergeResults.input]);
        // if(!isModules) return {cssAst: astBefore, pathContext: moduleMeta.pathContext}
        const copiedAst = JSON.parse(JSON.stringify(astBefore));
        console.log("IS MODULES", isModules);
        if (!isModules)
          return resolve({
            cssAst: copiedAst,
            css: mergeResults.input,
            pathContext: moduleMeta.pathContext,
            // inputBeforeMerge: mergeResults?.inputBefore || null,
            imports: mergeResults?.imports || null,
            allImports: mergeResults?.allImports || null,
          });
        console.log("IS MODULES IS TRUE", isModules);
        postcss([transformCssPlugin])
          .process(astBefore)
          .then((result) => {
            console.log("POST CSS PROCESSOR HAS COMPLETED", result.css);
            opts[shortName] = {
              modules: { ...result.root.modulesMap },
              pathContext: moduleMeta.pathContext,
            };

            console.log("THE FIEPATH", opts);
            delete result.root.modulesMap;
            resolve({
              css: result.css,
              cssModules: opts[shortName],
              cssAst: copiedAst,
            });
          });
      })
      .catch((err) => {
        console.log("Postcss error occured trying to mergeFiles", err);
      });
  });
};

export default renderCssModules;
