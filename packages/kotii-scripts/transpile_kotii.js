import babel from "@babel/core";
import generate from "@babel/generator";
import parser from "@babel/parser";
import traverse from "@babel/traverse";
import fs from "fs";
import { loggas, logger } from "kotii-logger";
import path from "path";
// let options = {
//   presets: ["@babel/preset-react"],
//   plugins: ["@babel/plugin-syntax-import-assertions"],
// };
logger.setNameSpaces([{ namespace: "transpilation:prod", id: "transpile" }]);

let options = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-json-modules"],
    [
      "file-loader",
      {
        name: "[hash].[ext]",
        extensions: ["png", "jpg", "jpeg", "gif", "svg"],
        publicPath: "public/",
        outputPath: null,
      },
      "img-file-loader-plugin",
    ],
  ],
};
let workingDir = process.cwd();
let filesToTranspile = [
  {
    source: `${workingDir}/kotii-land/dev/build.js`,
    destination: `${workingDir}/kotii-land/prod/build_b.js`,
  },
  {
    source: `${workingDir}/kotii-land/dev/app_.js`,
    destination: `${workingDir}/kotii-land/prod/app_b.js`,
  },
  {
    source: `${workingDir}/kotii-land/dev/public.js`,
    destination: `${workingDir}/kotii-land/prod/public_b.js`,
  },
  {
    source: `${workingDir}/plugins/react`,
    destination: `${workingDir}/plugins/react-pruned`,
    transpile: ["methods.js", "reactview.js"],
    isFolder: true,
  },
  {
    source: `${workingDir}/react-components`,
    destination: `${workingDir}/react-components-pruned`,
    isFolder: true,
    recursive: true,
  },
];
let changeList = [
  { toPrune: "react-components", toChangeTo: "react-components-pruned" },
  { toPrune: "public", toChangeTo: "public_b" },
  { toPrune: "build", toChangeTo: "build_b" },
  { toPrune: "app_", toChangeTo: "app_b" },
];

const transpileFiles = (toTranspile) => {
  loggas.transpile.debug("THE FILES TO TRANSPILE", filesToTranspile);
  toTranspile.forEach((file) => {
    loggas.transpile.debug("THE FILE", file);
    if (file?.isFolder) {
      if (!fs.existsSync(file.destination)) {
        fs.mkdirSync(file.destination);
      }
      fs.readdirSync(file.source).forEach((sourceFile) => {
        loggas.transpile.debug("THE READDIR SOURCE FILE", sourceFile);
        let sourceFileFullPath = `${file.source}${path.sep}${sourceFile}`;
        if (fs.statSync(sourceFileFullPath).isDirectory()) {
          transpileFiles([
            {
              source: sourceFileFullPath,
              destination: `${file.destination}${path.sep}${sourceFile}`,
              isFolder: true,
              recursive: true,
            },
          ]);
        } else {
          //   if (file?.transpile && file.transpile.includes(sourceFile)) {
          //     transpileFile({
          //       source: `${file.source}${path.sep}${sourceFile}`,
          //       destination: `${file.destination}${path.sep}${sourceFile}`,
          //     });
          //   } else if (file?.recursive) {
          //     loggas.transpile.debug("RECURSSIVE KEY", file, sourceFile);
          //     transpileFile({
          //       source: `${file.source}${path.sep}${sourceFile}`,
          //       destination: `${file.destination}${path.sep}${sourceFile}`,
          //     });
          //   } else {
          //     fs.cpSync(
          //       sourceFileFullPath,
          //       `${file.destination}${path.sep}${sourceFile}`
          //     );
          //   }
          transpileFile({
            source: `${file.source}${path.sep}${sourceFile}`,
            destination: `${file.destination}${path.sep}${sourceFile}`,
          });
        }
      });
    } else {
      transpileFile(file);
    }

    // process.exit();
  });
  loggas.transpile.info("Transpilation successfully completed");
};

const transpileFile = (file) => {
  let source = "";
  loggas.transpile.debug("THE FILE SOURCE");
  source = fs.readFileSync(file.source, {
    encoding: "utf-8",
  });
  let transpiled = babel.transformSync(source, options);
  loggas.transpile.debug("THE FILE DESTINATION", file.destination);

  //   const jsFile = readFileSync(file.destination);
  let ast = parser.parse(transpiled.code.toString(), {
    sourceType: "module",
  });
  let isUp = updateJSXImportDeclarations(ast);
  updateJSXExportDeclarations(ast);
  const { code: genCode } = generate.default(ast);
  fs.writeFileSync(file.destination.replace(/.jsx$/, ".js"), `${genCode}`);
};
const updateJSXImportDeclarations = function (ast) {
  // let removedImportsIds = [];

  let isUpdated = false;
  traverse.default(ast, {
    ImportDeclaration(path) {
      let importSpecifier = path.node.source.value;
      loggas.transpile.debug("AST NODE AFTER Import Node", importSpecifier);
      //   loggas.transpile.debug("AST NODE SPECIFIER", path.node.specifiers[0]?.local.name);

      if (importSpecifier === "./pages.js") {
        path.node.source.value = "/.kotii-land/pages.js";
        return;
      }

      if (/.jsx$/.test(importSpecifier)) {
        loggas.transpile.debug(
          "IT IS JSX",
          importSpecifier,
          /^(\.+)/.test(importSpecifier)
        );
        path.node.source.value = importSpecifier.replace(/.jsx$/, ".js");
        isUpdated = true;
      }

      if (importSpecifier.indexOf("kotii-land/dev") >= 0) {
        path.node.source.value = importSpecifier.replace(
          "kotii-land/dev",
          "kotii-land/prod"
        );
      }

      for (let ch = 0; ch < changeList.length; ch++) {
        let toPrune = changeList[ch].toPrune;
        let toChangeTo = changeList[ch].toChangeTo;
        if (importSpecifier.indexOf(toPrune) > 0) {
          if (importSpecifier.indexOf("app_redux") > 0) {
            break;
          }

          path.node.source.value = path.node.source.value.replace(
            toPrune,
            toChangeTo
          );
          break;
        }
      }
      //   if (importSpecifier.indexOf("react-components") > 0) {
      //     path.node.source.value = path.node.source.value.replace(
      //       "react-components",
      //       "react-components-pruned"
      //     );
      //     return;
      //   }
      //   loggas.transpile.debug("NOT JSX", /^(\.+)/.test(path.node.source.value));
      //   if (
      //     !/^(\.+)/.test(path.node.source.value) &&
      //     !isBuiltin(path.node.source.value) &&
      //     meta.alias[path.node.source.value]
      //   ) {
      //     loggas.transpile.debug("SOURCE NOT RELATIVE", path.node.source.value);
      //     path.node.source.value = `${meta.appMain}${
      //       meta.alias[path.node.source.value]
      //     }.js`;
      //     isUpdated = true;
      //   }

      // if (toRemove.indexOf(path.node.source.value) >= 0) {
      //   let local = path.node.specifiers[0]?.local.name;
      //   removedImportsIds.push(local);
      //   self.astDeleteNode(routesNode, compsNode, local);
      //   path.remove();
      // }
    },
  });
  return isUpdated;
};
const updateJSXExportDeclarations = function (ast) {
  let isUpdated = false;
  traverse.default(ast, {
    ExportNamedDeclaration(path) {
      let exportSpecifier = path.node.source ? path.node.source.value : "";
      loggas.transpile.debug("export specifier", exportSpecifier);
      //   loggas.transpile.debug("AST NODE SPECIFIER", path.node.specifiers[0]?.local.name);

      if (/.jsx$/.test(exportSpecifier)) {
        loggas.transpile.debug(
          "IT IS JSX",
          exportSpecifier,
          /^(\.+)/.test(exportSpecifier)
        );
        path.node.source.value = exportSpecifier.replace(/.jsx$/, ".js");
        isUpdated = true;
      }
      for (let ch = 0; ch < changeList.length; ch++) {
        let toPrune = changeList[ch].toPrune;
        let toChangeTo = changeList[ch].toChangeTo;
        if (exportSpecifier.indexOf(toPrune) > 0) {
          path.node.source.value = path.node.source.value.replace(
            toPrune,
            toChangeTo
          );
          break;
        }
      }
    },
  });
  return isUpdated;
};
transpileFiles(filesToTranspile);
