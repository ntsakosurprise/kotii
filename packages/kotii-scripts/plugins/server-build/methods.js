const methods = {};
import fs from "fs";
import { isBuiltin } from "node:module";
import os from "node:os";
import Papa from "papaparse";
import path, { resolve } from "path";
import { parseString } from "xml2js";
import runNpmScript from "./runNpmScript.js";

methods.init = function () {
  this.listens({
    "generate-server-build": this.handleServerBuild.bind(this),
  });
};
methods.handleServerBuild = function (data) {
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;
  console.log("handling server build", data);
  const { payload } = data;
  const { targetMain, destination, targetSource, routes, contextApp } = payload;
  data.callback({ gotValue: "Ran" });
  // const cwd = getWorkingFolder();
  const cwd = self.kotiiScriptsPath;
  console.log("KOTII SCRIPTS PATH", cwd);
  if (fs.existsSync(`${cwd}/kotii-land/dev/styles.json`)) {
    fs.rmSync(`${cwd}/kotii-land/dev/styles.json`);
  }

  const localPackageJson = JSON.parse(readFileSync(`${cwd}/package.json`));
  const babelJson = JSON.parse(readFileSync(`${cwd}/babel.server.build.json`));
  let updatedBabelJsonPlugins = babelJson.plugins;
  updatedBabelJsonPlugins.unshift([
    `${path.join(cwd, "./babel-plugins/scoped-styles-plugin/index.js")}`,
    {
      appFolder: targetMain,
      appSrc: targetSource,
      cwd: cwd,
    },
  ]);
  babelJson.plugins = [...updatedBabelJsonPlugins];
  console.log("BABEL JSON PLUGINS", babelJson.plugins);
  saveToFile(
    path.join(cwd, "babel.server.build.json"),
    JSON.stringify(babelJson, null, 2)
  );
  // const kottiBabelRc = JSON.parse(readFileSync(`${cwd}/babel.server.json`));
  // const ignores = self.handleIgnores(data.payload.targetSource, kottiBabelRc);
  // console.log("MADE IGNORES", ignores);
  // const HTML = readFileSync(`${cwd}/test.html`);
  // console.log("HTML-PARSER", HTML);
  // const root = parse(HTML);
  // let json = fs.readFileSync(`${process.cwd()}/styles.json`, {
  //   encoding: "utf8",
  // });
  // console.log("THE JSON", json);

  // const head = Array.from(root.getElementsByTagName("head"))[0];
  // console.log(
  //   "HTML-PARSER-ROOT BEFORE",
  //   head.insertAdjacentHTML(
  //     "beforeend",
  //     "<style data-custom-style='mystyle'>p{color:red}</style>"
  //   )
  // );
  // // console.log(
  // //   "StyleEl",
  // //   head.appendChild("<style data-custom-style='mystyle'>p{color:red}</style>")
  // // );
  // console.log("HTML-PARSER-ROOT");
  // saveToFile(`${cwd}/test.html`, root.toString());
  console.log("THE CWD", cwd);
  console.log("THE LOCAL PACKAGE.JSON", localPackageJson);
  localPackageJson["scripts"] = {
    ...localPackageJson.scripts,
    "build-ssr": `babel --config-file ${cwd}/babel.server.build.json  --out-dir ${destination}${path.sep}src ${targetSource}`,
    // "babel-ssr": `babel ${data.payload.targetSource} --out-dir ${data.payload.destination}`,
  };

  // saveToFile(
  //   path.join(cwd, "babel.server.json"),
  //   JSON.stringify(ignores, null, 2)
  // );

  saveToFile(
    path.join(cwd, "package.json"),
    JSON.stringify(localPackageJson, null, 2)
  );

  runNpmScript({ npmCommand: "run", scriptToRun: "build-ssr", cwd: cwd })
    .then((built) => {
      let usrHomeDir = os.homedir();
      let fullTempPath = self.createDistFolder(
        `${usrHomeDir}${path.sep}kotii-tmp`
      );

      // console.log("NPM SCRIPT RAN SUCCESSFULLY", madeTempDir, os.homedir());
      console.log("NPM FULL TEMP PATH", fullTempPath);

      // let dirs = fs.readdirSync(usrHomeDir);
      // saveToFile(`${cwd}${path.sep}tempDirFiles.json`, JSON.stringify(dirs));
      // console.log("TEMP DIRS", dirs);
      // fs.rmdirSync(fullTempPath);
      console.log("TARGET SOURCES", targetSource, "destination", destination);
      console.log("TARGET MAIN", targetMain, "full temp", fullTempPath);
      self.syncDirectories(targetSource, `${destination}/src`);
      self.copyPublicToDist(`${targetMain}`, `${fullTempPath}`);
      self.copyPublicToDist(`${fullTempPath}`, `${destination}`);
      // self.syncDirectories(targetSource, `${destination}/src`);
      fs.rmSync(fullTempPath, { recursive: true });
      self.removeJsxReferences(destination, {
        destination: `${destination}${path.sep}src`,
        targetMain,
        targetSource,
        appManifest: contextApp.appManifest,
      });

      babelJson.plugins.shift();

      saveToFile(
        path.join(cwd, "babel.server.build.json"),
        JSON.stringify(babelJson, null, 2)
      );
      self.saveRoutesInUserLand(routes).then(() => {
        self.doKotiiLandPagesFile(destination, {
          contextApp,
        });
      });
    })
    .catch((error) => {
      console.log("BUILD FAILED WITH FAIURE", error);
    });
};
methods.renderApp = function (views) {
  const self = this;

  return new Promise((resolve) => {
    self.emit({
      type: "handle-react-static",
      data: {
        views: views,
        staticRender: true,
        callback: (data) => {
          resolve(data);
        },
      },
    });
  });
};
methods.cleanBuildFolder = function (view, setCall) {
  const self = this;

  self.emit({
    type: "handle-react-view",
    data: {
      view: view,
      staticRender: true,
      callback: (err, data) => {
        setCall({ message: "handleStaticGeneration in action" });
      },
    },
  });
};

methods.createDistFolder = function (filepath) {
  const self = this;
  const pao = self.pao;
  const makeFolderSync = pao.pa_makeFolderSync;
  const isExistingDir = pao.pa_isExistingDir;
  if (isExistingDir(filepath)) fs.rmSync(filepath, { recursive: true });
  makeFolderSync(filepath);
  return filepath;
};
methods.savePageToFile = function (filepath, content) {
  const self = this;
  const pao = self.pao;
  const saveToFile = pao.pa_saveToFile;

  saveToFile(filepath, content);
};
methods.handleIgnores = function (root) {
  const self = this;
  let ignores = [
    "build",
    "dist",
    "node_modules",
    "src",
    "webpack.config.js",
    ".babelrc",
    ".env.production",
    ".env.staging",
    ".env.development",
  ];
  let absoluteIgnores = ignores.map((ig) => {
    return `${root}${path.sep}${ig}`;
  });
  // jsonConfig["ignore"] = [...absoluteIgnores];
  console.log("THE IGNORE STRING", absoluteIgnores);
  return absoluteIgnores;
};
methods.copyPublicToDist = function (from, to, ignores = []) {
  const self = this;
  let ignoresMerged = [...ignores, ...self.handleIgnores(from)];
  console.log("copying from", from, to, "with merged ignores", ignoresMerged);
  fs.cpSync(from, to, {
    recursive: true,
    filter: (fi) => {
      console.log("THE FILE BEING PROCESSED", fi, ignores.includes(fi));
      // if (ignores.includes(fi)) return true;
      // let thisToReturn = fi !== ignore;
      let thisToReturn = !ignoresMerged.includes(fi);
      // console.log("THIS TO RETURN", thisToReturn);
      return thisToReturn;
    },
  });
};

methods.removeJsxReferences = function (sourceRoot, state) {
  const self = this;

  const pao = self.pao;
  const traverse = self.traverse;
  const generate = self.generate;
  const parser = self.parser;
  const t = self.t;
  const execSync = self.execSync;
  const loadFileSync = pao.pa_loadFileSync;
  const loadFile = pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const cwd = getWorkingFolder();

  let blackListed = ["public", "assets"];
  let rootFiles = [];
  let pruneCandidates = [];
  const files = fs.readdirSync(sourceRoot).filter((file) => {
    let filePath = `${sourceRoot}${path.sep}${file}`;
    if (fs.statSync(filePath).isDirectory()) {
      return true;
    } else if (/.js$/.test(filePath)) {
      rootFiles.push(file);
    }
  });
  pruneCandidates = files.filter((folder) => {
    if (!blackListed.includes(folder)) return true;
  });
  pruneCandidates = [...pruneCandidates, ...rootFiles];
  console.log("FOLDER:", sourceRoot, "With files");
  console.log(files);
  console.log(rootFiles);
  console.log("CANDIATES", pruneCandidates);
  pruneCandidates.forEach((candidate) => {
    let candidatePath = `${sourceRoot}${path.sep}${candidate}`;
    if (fs.statSync(candidatePath).isDirectory()) {
      fs.readdirSync(candidatePath, { recursive: true }).forEach((cndFile) => {
        // console.log("THE CND FILE", cndFile);
        let cndFilePath = `${candidatePath}${path.sep}${cndFile}`;
        if (/.js$/.test(cndFile)) {
          console.log("THE FILE IS JAVASCRIPT", cndFile);
          // console.log("FULL PATH");
          let jsFile = readFileSync(cndFilePath);
          let ast = parser.parse(jsFile, {
            sourceType: "module",
          });
          let updateResults = self.updateJSXImportDeclarations(ast, state);
          if (updateResults) {
            const { code: genCode } = generate(ast);
            // const modifiedCode = genCode;

            console.log("New AST genCode", genCode);
            // console.log("Modiefied code", modifiedCode);
            saveToFile(cndFilePath, `${genCode}`);
          }
        }
      });
    } else {
      const jsFile = readFileSync(candidatePath);
      let ast = parser.parse(jsFile, {
        sourceType: "module",
      });
      self.updateJSXImportDeclarations(ast, state);

      console.log("THE FILE'S AST", ast);
    }
  });

  // const filePath = `${cwd}/build.js`;
  // // const altPath = `${cwd}/build_test.js`;
  // const jsFile = readFileSync(filePath);
  // let ast = parser.parse(jsFile, { sourceType: "module", plugins: ["jsx"] });
};

methods.updateJSXImportDeclarations = function (ast, state) {
  const self = this;
  const traverse = self.traverse;
  console.log("THE APP STATE", state);
  const appManifest = state?.appManifest;
  // let removedImportsIds = [];

  let isUpdated = false;
  traverse(ast, {
    ImportDeclaration(path) {
      console.log("AST NODE AFTER Import Node", path.node.source.value);
      console.log("AST NODE SPECIFIER", path.node.specifiers[0]?.local.name);
      let importSpecifier = path.node.source.value;
      if (/.jsx$/.test(path.node.source.value)) {
        console.log(
          "IT IS JSX",
          path.node.source.value,
          /^(\.+)/.test(path.node.source.value)
        );
        path.node.source.value = path.node.source.value.replace(/.jsx$/, ".js");
        isUpdated = true;
        return;
      }
      if (
        /.json$/.test(importSpecifier) ||
        /.xml$/.test(importSpecifier) ||
        /.csv$/.test(importSpecifier)
      ) {
        let source = "";
        let absoluteFilePath = resolve(
          `${state.destination}`,
          importSpecifier.substr(importSpecifier.indexOf("/") + 1).trim()
        );
        console.log("THE ABSOLUTE PATH", absoluteFilePath);
        let contents = fs.readFileSync(absoluteFilePath, {
          encoding: "utf-8",
        });
        // source = `export default ${JSON.stringify(contents)}`;
        if (/.json$/.test(importSpecifier)) {
          fs.writeFileSync(
            absoluteFilePath.replace(".json", ".js"),
            `export default ${contents}`
          );
          path.node.source.value = importSpecifier.replace(".json", ".js");
        }

        if (/.xml$/.test(importSpecifier)) {
          // let parsedXml = xmlLoader(source);
          parseString(contents, function (err, result) {
            // self.callback(err, !err && "module.exports = " + JSON.stringify(result));
            fs.writeFileSync(
              absoluteFilePath.replace(".xml", ".js"),
              `export default ${JSON.stringify(result)}`
            );
            path.node.source.value = importSpecifier.replace(".xml", ".js");
          });
        }

        if (/.csv$/.test(importSpecifier)) {
          let parsedCsv = Papa.parse(contents);
          fs.writeFileSync(
            absoluteFilePath.replace(".csv", ".js"),
            `export default ${JSON.stringify(parsedCsv)}`
          );
          path.node.source.value = importSpecifier.replace(".csv", ".js");
        }

        console.log(
          "THE ABSOLUTE PATH",
          state.destination,
          resolve(
            `${state.destination}`,
            importSpecifier.substr(importSpecifier.indexOf("/") + 1).trim()
          )
        );
        // let contents = fs.readFileSync(new URL(url).pathname, {
        //   encoding: "utf-8",
        // });
        // source = `export default ${JSON.stringify(contents)}`;
      }
      console.log("NOT JSX", /^(\.+)/.test(path.node.source.value));
      if (
        !/^(\.+)/.test(path.node.source.value) &&
        !isBuiltin(path.node.source.value) &&
        appManifest.aliases[path.node.source.value]
      ) {
        console.log("SOURCE NOT RELATIVE", path.node.source.value);
        path.node.source.value = `${
          appManifest.aliases[path.node.source.value]
        }.js`;
        isUpdated = true;
      }

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
methods.doKotiiLandPagesFile = function (destination, options) {
  const self = this;
  const pao = self.pao;
  console.log("THE KOTII LAND PAGE FILE DESTINATION", destination);

  const generate = self.generate;
  const parser = self.parser;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  // const cwd = getWorkingFolder();
  const cwd = self.kotiiScriptsPath;

  const jsFile = readFileSync(`${cwd}${path.sep}kotii-land/dev/pages.js`);
  console.log(
    "THE SOURCE FILE PATH",
    `${cwd}${path.sep}kotii-land/dev/pages.js`
  );
  let ast = parser.parse(jsFile, {
    sourceType: "module",
  });
  console.log("THE JS FILE", jsFile);
  console.log("THE AST", ast);

  let updateResults = self.updateJSXImportDeclarations(ast);
  if (updateResults) {
    const { code: genCode } = generate(ast);
    // const modifiedCode = genCode;

    console.log("New AST genCode", genCode);
    // console.log("Modiefied code", modifiedCode);
    let madeFolder = self.createDistFolder(
      `${destination}${path.sep}.kotii-land`
    );
    saveToFile(`${madeFolder}${path.sep}pages.js`, `${genCode}`);
    fs.copyFileSync(
      `${cwd}${path.sep}app_routes.js`,
      `${madeFolder}${path.sep}routes.js`
    );
    saveToFile(
      `${destination}${path.sep}.config.js`,
      self.getKotiiConfigTemplate({
        public: options.contextApp.appManifest.static,
      })
    );
    saveToFile(
      `${madeFolder}${path.sep}app.manifest.json`,
      JSON.stringify({
        ...options.contextApp.appManifest,
        buildPath: options.contextApp.appBuildFolder,
      })
    );
  }
};
methods.syncDirectories = function (
  sourceDirectoryPath,
  destination,
  ignores = []
) {
  let allDirectories = [];
  fs.readdirSync(sourceDirectoryPath).forEach((sourceFile) => {
    console.log("THE READDIR SOURCE FILE", sourceFile);
    let sourceFileFullPath = `${sourceDirectoryPath}${path.sep}${sourceFile}`;
    if (fs.statSync(sourceFileFullPath).isDirectory()) {
      console.log("BUILD SYNC DIRECTORIES", sourceFile, sourceFileFullPath);
      allDirectories.push(sourceFile);
    }
  });

  allDirectories.forEach((dir) => {
    let onDestinationPath = `${destination}${path.sep}${dir}`;
    if (!fs.existsSync(onDestinationPath)) {
      fs.mkdirSync(onDestinationPath);
      fs.cpSync(`${sourceDirectoryPath}${path.sep}${dir}`, onDestinationPath, {
        recursive: true,
        filter: (fi) => {
          // console.log("THE FILE BEING PROCESSED", fi, ignores.includes(fi));
          // if (ignores.includes(fi)) return true;
          // let thisToReturn = fi !== ignore;
          console.log("SYNC DIRECTORIES FILE BEING COPIED", fi);
          let thisToReturn = !ignores.includes(fi);
          // console.log("THIS TO RETURN", thisToReturn);
          return thisToReturn;
        },
      });
    }
  });

  console.log("THE ALL DIRECTORIES", allDirectories);
};

methods.saveRoutesInUserLand = function (routes) {
  const self = this;
  const pao = self.pao;
  const traverse = self.traverse;
  const generate = self.generate;
  const parser = self.parser;
  const t = self.t;
  const execSync = self.execSync;
  const loadFileSync = pao.pa_loadFileSync;
  const loadFile = pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  // const cwd = getWorkingFolder();
  const cwd = self.kotiiScriptsPath;

  return new Promise((resolve, reject) => {
    let requiresRoutes = routes.filter((rou) => {
      if (rou.requiresData) {
        return rou;
      }
    });
    let routesToPath = `${cwd}${path.sep}app_routes.js`;
    console.log("THE ROUTES PATHS BUILD", routesToPath);
    fs.writeFile(
      routesToPath,
      `const routes = ${JSON.stringify(routes)}; export default routes`,
      (err, succes) => {
        if (err) {
          console.log("SAVING ROUTES FAILED WITH ERR", err);
        }
        let fileContent = fs.readFileSync(routesToPath, {
          encoding: "utf8",
        });
        console.log("THE ROUTES PATHS BUILD AST BEFORE", routesToPath);
        let ast = parser.parse(fileContent, {
          sourceType: "module",
        });
        console.log("THE ROUTES PATHS BUILD AST", ast);
        self.addObjectExpressionProperty(ast, requiresRoutes);
        const { code: genCode } = generate(ast);
        // const modifiedCode = genCode;

        saveToFile(routesToPath, `${genCode}`);
        resolve(true);
      }
    );
  });
};
// methods.saveAppManifestInUserLand = function (appManifest, resources) {
//   const self = this;
//   const pao = self.pao;
//   const traverse = self.traverse;
//   const generate = self.generate;
//   const parser = self.parser;
//   const t = self.t;
//   const execSync = self.execSync;
//   const loadFileSync = pao.pa_loadFileSync;
//   const loadFile = pao.pa_loadFile;
//   const readFileSync = pao.pa_readFileSync;
//   const saveToFile = pao.pa_saveToFile;
//   const getWorkingFolder = pao.pa_getWorkingFolder;
//   const cwd = getWorkingFolder();

//   return new Promise((resolve, reject) => {
//     let requiresRoutes = routes.filter((rou) => {
//       if (rou.requiresData) {
//         return rou;
//       }
//     });
//     let routesToPath = `${cwd}${path.sep}app_routes.js`;
//     console.log("THE ROUTES PATHS BUILD", routesToPath);
//     fs.writeFile(
//       routesToPath,
//       `const routes = ${JSON.stringify(routes)}; export {routes}`,
//       (err, succes) => {
//         if (err) {
//           console.log("SAVING ROUTES FAILED WITH ERR", err);
//         }
//         let fileContent = fs.readFileSync(routesToPath, {
//           encoding: "utf8",
//         });
//         console.log("THE ROUTES PATHS BUILD AST BEFORE", routesToPath);
//         let ast = parser.parse(fileContent, {
//           sourceType: "module",
//         });
//         console.log("THE ROUTES PATHS BUILD AST", ast);
//         self.addObjectExpressionProperty(ast, requiresRoutes);
//         const { code: genCode } = generate(ast);
//         // const modifiedCode = genCode;

//         saveToFile(routesToPath, `${genCode}`);
//         resolve(true);
//       }
//     );
//   });
// };
methods.addObjectExpressionProperty = function (ast, state) {
  const self = this;
  const pao = self.pao;
  const traverse = self.traverse;
  const generate = self.generate;
  const parser = self.parser;
  const t = self.t;
  const execSync = self.execSync;
  const loadFileSync = pao.pa_loadFileSync;
  const loadFile = pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const cwd = getWorkingFolder();
  // let removedImportsIds = [];

  let isUpdated = false;
  traverse(ast, {
    ObjectExpression(path) {
      console.log("AST NODE AFTER OBJECT EXPRESSION Node", state);
      state.forEach((currentRout) => {
        console.log("THE CURRENT ROUTE", currentRout);
        path.node.properties.forEach((objectProper) => {
          if (objectProper.key.value === "name") {
            if (
              objectProper.value.value.toLowerCase() ===
              currentRout.name.toLowerCase()
            ) {
              console.log("THE CURRENT ROUT NAME", currentRout.name);
              let functionAST = parser.parse(`${currentRout.requiresData}`);
              let fExpression = functionAST.program.body[0].expression;
              // console.log(
              //   "THE FUNCTION AST",
              //   functionAST.program.body[0].expression.params
              // );
              path.node.properties.push(
                t.objectProperty(
                  t.identifier("requiresData"),
                  t.functionExpression(
                    null,
                    fExpression.params,
                    fExpression.body,
                    false,
                    true
                  )
                )
              );
              console.log("THE PATH PROPERTY", objectProper.value.value);
            }
          }
        });
      });

      // console.log("AST NODE SPECIFIER", path.node.specifiers[0]?.local.name);
      // let importSpecifier = path.node.source.value;
    },
  });
  return isUpdated;
};
methods.getKotiiConfigTemplate = function (dynamic) {
  const self = this;
  return `import routes  from '/.kotii-land/routes.js'
  
  export default {
  
      domain: [{ name: "static", set: ${JSON.stringify(dynamic.public)}}],
      router: routes,
      register: '',
      // logger: {level: 'info'},
      cluster:{workers: 1,spawn: false,} ,
      server: 'server'
     
  
  
  
  }`;
};
export default methods;
