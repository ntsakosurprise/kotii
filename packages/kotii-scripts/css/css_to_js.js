import postcss from "postcss";
import { transformCssPlugin } from "../postcss-plugins/index.js";
import createCssAst from "./create_css_ast.js";
import mergeCssFiles from "./merge_css_files.js";

const renderCssModules = function (
  cssInput,
  opts,
  moduleMeta,
  isModules = false
) {
  let shortName = moduleMeta.shortName;

  return new Promise((resolve) => {
    mergeCssFiles(cssInput, moduleMeta)
      .then((mergeResults) => {
        const astBefore = createCssAst([mergeResults.input]);
        // if(!isModules) return {cssAst: astBefore, pathContext: moduleMeta.pathContext}
        const copiedAst = JSON.parse(JSON.stringify(astBefore));

        if (!isModules)
          return resolve({
            cssAst: copiedAst,
            css: mergeResults.input,
            pathContext: moduleMeta.pathContext,
            // inputBeforeMerge: mergeResults?.inputBefore || null,
            imports: mergeResults?.imports || null,
            allImports: mergeResults?.allImports || null,
          });

        postcss([transformCssPlugin])
          .process(astBefore)
          .then((result) => {
            opts[shortName] = {
              modules: { ...result.root.modulesMap },
              pathContext: moduleMeta.pathContext,
            };

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
