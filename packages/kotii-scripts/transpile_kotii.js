import babel from "@babel/core";
import generate from "@babel/generator";
import parser from "@babel/parser";
import traverse from "@babel/traverse";
import fs from "fs";
import path from "path";
// let options = {
//   presets: ["@babel/preset-react"],
//   plugins: ["@babel/plugin-syntax-import-assertions"],
// };

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
  console.log("THE FILES TO TRANSPILE", filesToTranspile);
  toTranspile.forEach((file) => {
    console.log("THE FILE", file);
    if (file?.isFolder) {
      if (!fs.existsSync(file.destination)) {
        fs.mkdirSync(file.destination);
      }
      fs.readdirSync(file.source).forEach((sourceFile) => {
        console.log("THE READDIR SOURCE FILE", sourceFile);
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
          //     console.log("RECURSSIVE KEY", file, sourceFile);
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
};

const transpileFile = (file) => {
  let source = "";
  console.log("THE FILE SOURCE");
  source = fs.readFileSync(file.source, {
    encoding: "utf-8",
  });
  let transpiled = babel.transformSync(source, options);
  console.log("THE FILE DESTINATION", file.destination);

  //   const jsFile = readFileSync(file.destination);
  let ast = parser.parse(transpiled.code.toString(), {
    sourceType: "module",
  });
  let isUp = updateJSXImportDeclarations(ast);
  const { code: genCode } = generate.default(ast);
  fs.writeFileSync(file.destination.replace(/.jsx$/, ".js"), `${genCode}`);
};
const updateJSXImportDeclarations = function (ast) {
  // let removedImportsIds = [];

  let isUpdated = false;
  traverse.default(ast, {
    ImportDeclaration(path) {
      let importSpecifier = path.node.source.value;
      console.log("AST NODE AFTER Import Node", importSpecifier);
      //   console.log("AST NODE SPECIFIER", path.node.specifiers[0]?.local.name);

      if (importSpecifier === "./pages.js") {
        path.node.source.value = "/.kotii-land/pages.js";
        return;
      }

      if (/.jsx$/.test(importSpecifier)) {
        console.log(
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
      //   console.log("NOT JSX", /^(\.+)/.test(path.node.source.value));
      //   if (
      //     !/^(\.+)/.test(path.node.source.value) &&
      //     !isBuiltin(path.node.source.value) &&
      //     meta.alias[path.node.source.value]
      //   ) {
      //     console.log("SOURCE NOT RELATIVE", path.node.source.value);
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
transpileFiles(filesToTranspile);
