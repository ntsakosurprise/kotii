/* eslint-disable no-unused-vars */
const methods = {};
import fs from "fs";
import { isBuiltin } from "node:module";
import os from "node:os";
import path, { resolve } from "path";
import {
  getNodejsForeignData,
  getNodejsForeignDataSync,
} from "../../globals.js";
import { kotiiKotiiLandPath, kotiiRootPath } from "../../kotii_paths.js";
import runNpmScript from "./runNpmScript.js";
import {
  USER_LAND_ALIASES,
  USER_LAND_ALIAS_ASSETS_MANIFEST,
  USER_LAND_ALIAS_PAGES,
  USER_LAND_ALIAS_STYLES_JSON,
  USER_LAND_ALIAS_STYLES_MODULES,
} from "kotii-internal/user";

const dataExtensions = [".csv", ".json", ".xml"];
const cssExtensions = [".scss", ".styl", ".less", ".css", "sass"];
const imageExtensions = [".gif", ".png", ".svg", ".jpg", ".jpeg"];
const ESCAPE_CHARACTER = "dot_";
const nativePath = path;
methods.init = function () {
  this.listens({
    "generate-server-build": this.handleServerBuild.bind(this),
  });
};
methods.handleServerBuild = function (data) {
  const self = this;
  const pao = self.pao;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;
  self.debug("handling server build", data);
  const { payload } = data;
  const { targetMain, destination, targetSource, contextApp } = payload;
  self.callback = data.callback;

  // const cwd = getWorkingFolder();
  // const cwd = self.kotiiScriptsPath;
  self.debug("KOTII SCRIPTS PATH", contextApp);
  // if (fs.existsSync(`${kotiiKotiiLandPath}/dev/styles.json`)) {
  //   fs.rmSync(`${kotiiKotiiLandPath}/dev/styles.json`);
  // }
  // if (fs.existsSync(destination)) fs.rmSync(destination, { recursive: true });

  const localPackageJson = JSON.parse(
    readFileSync(`${kotiiRootPath}/package.json`)
  );
  const babelJson = JSON.parse(
    readFileSync(`${kotiiRootPath}/babel.server.build.json`)
  );

  babelJson.plugins = babelJson.plugins.filter((plugin) => {
    console.log(
      "THE CURRENT PLUGIN",
      plugin,
      plugin[0],
      plugin[0].indexOf("scoped-styles-plugin")
    );
    if (plugin[0].indexOf("scoped-styles-plugin") < 0) return true;
  });

  // let updatedBabelJsonPlugins = babelJson.plugins;
  // updatedBabelJsonPlugins.unshift([
  //   `${path.join(
  //     kotiiRootPath,
  //     "./babel-plugins/scoped-styles-plugin/index.js"
  //   )}`,
  // {
  //   appFolder: targetMain,
  //   appSrc: targetSource,
  //   cwd: kotiiRootPath,
  //   appBuildFolder: destination,
  // },
  // ]);
  // babelJson.plugins = [...updatedBabelJsonPlugins];
  self.debug("BABEL JSON PLUGINS", babelJson.plugins);
  saveToFile(
    path.join(kotiiRootPath, "babel.server.build.json"),
    JSON.stringify(babelJson, null, 2)
  );

  self.debug("THE LOCAL PACKAGE.JSON", localPackageJson);
  localPackageJson["scripts"] = {
    ...localPackageJson.scripts,
    "build-ssr": `babel --config-file ${kotiiRootPath}/babel.server.build.json  --out-dir ${destination}${path.sep}src ${targetSource} --copy-files`,
    // "babel-ssr": `babel ${data.payload.targetSource} --out-dir ${data.payload.destination}`,
  };

  saveToFile(
    path.join(kotiiRootPath, "package.json"),
    JSON.stringify(localPackageJson, null, 2)
  );

  runNpmScript({
    npmCommand: "run",
    scriptToRun: "build-ssr",
    cwd: kotiiRootPath,
  })
    .then((built) => {
      let usrHomeDir = os.homedir();
      let fullTempPath = self.createDistFolder(
        `${usrHomeDir}${path.sep}kotii-tmp`
      );

      // self.debug("NPM SCRIPT RAN SUCCESSFULLY", madeTempDir, os.homedir());
      self.debug("NPM FULL TEMP PATH", fullTempPath);

      // let dirs = fs.readdirSync(usrHomeDir);
      // saveToFile(`${cwd}${path.sep}tempDirFiles.json`, JSON.stringify(dirs));
      // self.debug("TEMP DIRS", dirs);
      // fs.rmdirSync(fullTempPath);
      // let cutOut = true;
      // if (cutOut) return resolve(true);
      self.debug("TARGET SOURCES", targetSource, "destination", destination);
      self.debug("TARGET MAIN", targetMain, "full temp", fullTempPath);
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

      //  babelJson.plugins = [...babelJson.plugins.filter((plugin)=>{
      //     if(plugin[0].indexOf("scoped-styles-plugin") >= 0) return false
      //   })]

      // saveToFile(
      //   path.join(kotiiRootPath, "babel.server.build.json"),
      //   JSON.stringify(babelJson, null, 2)
      // );
      // self
      //   .saveRoutesInUserLand(routes)
      //   .then(() => {
      //     self.doKotiiLandPagesFile(destination, {
      //       contextApp,
      //       targetMain,
      //     });
      //     self.aggregateProductionResources({
      //       appFolder: targetMain,
      //       appSrc: targetSource,
      //       cwd: kotiiRootPath,
      //       appBuildFolder: destination,
      //     });
      //   })
      //   .catch((saveErr) => {
      //     self.error(
      //       chalk.whiteBright.bold("Building project has failed with error:"),
      //       chalk.bgRedBright(saveErr)
      //     );
      //   });
      let assetsFolder = contextApp?.appManifest?.assets || "assets";
      if (process.env.NODE_ENV === "production")
        assetsFolder = `public/${assetsFolder}`;
      self
        .doKotiiLandPagesFile(destination, {
          contextApp,
          targetMain,
        })
        .then((pagesSourceCode) => {
          self.aggregateProductionResources({
            appFolder: targetMain,
            appSrc: targetSource,
            cwd: kotiiRootPath,
            appBuildFolder: destination,
            pagesSourceCode,
            staticPath: `${destination}/${assetsFolder}`,
          });
          self.callback({ message: "Build done successfully" });
        });
    })
    .catch((error) => {
      self.debug("BUILD FAILED WITH FAIURE", error);
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
    ".git",
    "git",
  ];
  let absoluteIgnores = ignores.map((ig) => {
    return `${root}${path.sep}${ig}`;
  });
  // jsonConfig["ignore"] = [...absoluteIgnores];
  self.debug("THE IGNORE STRING", absoluteIgnores);
  return absoluteIgnores;
};
methods.copyPublicToDist = function (from, to, ignores = []) {
  const self = this;
  let ignoresMerged = [...ignores, ...self.handleIgnores(from)];
  self.debug("copying from", from, to, "with merged ignores", ignoresMerged);
  fs.cpSync(from, to, {
    recursive: true,
    filter: (fi) => {
      self.debug("THE FILE BEING PROCESSED", fi, ignores.includes(fi));
      // if (ignores.includes(fi)) return true;
      // let thisToReturn = fi !== ignore;
      let thisToReturn = !ignoresMerged.includes(fi);
      // self.debug("THIS TO RETURN", thisToReturn);
      return thisToReturn;
    },
  });
};

methods.removeJsxReferences = function (sourceRoot, state) {
  const self = this;

  const pao = self.pao;

  const generate = self.generate;
  const parser = self.parser;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;

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
  self.debug("FOLDER:", sourceRoot, "With files");
  self.debug(files);
  self.debug(rootFiles);
  self.debug("CANDIATES", pruneCandidates);
  pruneCandidates.forEach((candidate) => {
    self.debug("THE CANDIDATE", candidate);
    let candidatePath = `${sourceRoot}${path.sep}${candidate}`;
    self.debug("Candidate main path", candidatePath);
    if (fs.statSync(candidatePath).isDirectory()) {
      fs.readdirSync(candidatePath, { recursive: true }).forEach((cndFile) => {
        self.debug("THE CND FILE", cndFile);

        self.debug("CANDIDATE FILE PATH", cndFile);
        if (/.js$/.test(cndFile)) {
          let cndFilePath = `${candidatePath}${path.sep}${cndFile}`;
          self.debug("THE FILE IS JAVASCRIPT", cndFile);
          // self.debug("FULL PATH");
          let jsFile = readFileSync(cndFilePath);
          let ast = parser.parse(jsFile, {
            sourceType: "module",
          });
          state["currentFilePath"] = cndFilePath;
          let updateResults = self.updateJSXImportDeclarations(ast, state);
          self.debug("update results", updateResults);
          if (updateResults) {
            self.debug("Saving results for file", cndFilePath);
            const { code: genCode } = generate(ast);
            // const modifiedCode = genCode;

            self.debug("New AST genCode", genCode);
            // self.debug("Modiefied code", modifiedCode);
            saveToFile(cndFilePath, `${genCode}`);
          }
        }
      });
    } else {
      self.debug("ROOT FILE IN PRUNE", candidatePath);

      const jsFile = readFileSync(candidatePath);
      let ast = parser.parse(jsFile, {
        sourceType: "module",
      });
      state["currentFilePath"] = candidatePath;
      self.updateJSXImportDeclarations(ast, state);
      self.debug("THE FILE'S AST", ast);
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
  self.debug("THE APP STATE", state);
  const { isLazy = false } = state;

  const nativePath = path;
  // let removedImportsIds = [];

  let isUpdated = false;
  traverse(ast, {
    ImportDeclaration(path) {
      self.debug("AST NODE AFTER Import Node", path.node.source.value);
      self.debug("AST NODE SPECIFIER", path.node.specifiers[0]?.local.name);
      isUpdated = self.replaceNoneNativeImportsExtensions(path, state);
      return;

      // if (toRemove.indexOf(path.node.source.value) >= 0) {
      //   let local = path.node.specifiers[0]?.local.name;
      //   removedImportsIds.push(local);
      //   self.astDeleteNode(routesNode, compsNode, local);
      //   path.remove();
      // }
    },
    CallExpression(path) {
      const { node } = path;

      // lazyLoad(() => import())
      if (
        node.callee.type === "Identifier" &&
        node.callee.name === "lazyLoad"
      ) {
        const fn = node.arguments[0];
        if (fn?.type === "ArrowFunctionExpression") {
          const body = fn.body;

          if (body.type === "CallExpression" && body.callee.type === "Import") {
            const importPath = body.arguments[0]?.value;
            console.log("DYNAMIC:", importPath);
            isUpdated = self.replaceNoneNativeImportsExtensionsDynamic(
              body.arguments[0],
              state
            );
            return;

            // your dynamic import logic...
          }
        }
      }
    },
  });
  return isUpdated;
};
methods.doKotiiLandPagesFile = function (destination, options) {
  const self = this;
  const pao = self.pao;
  let pathSplit = options.targetMain.split(path.sep);
  let userFolder = pathSplit[pathSplit.length - 1];
  self.debug("THE KOTII LAND PAGE FILE DESTINATION", destination);

  return new Promise((resolve, rejct) => {
    const generate = self.generate;
    const parser = self.parser;
    const readFileSync = pao.pa_readFileSync;
    const saveToFile = pao.pa_saveToFile;
    const getWorkingFolder = pao.pa_getWorkingFolder;
    // const cwd = getWorkingFolder();
    const cwd = self.kotiiScriptsPath;
    const jsFile = readFileSync(`${USER_LAND_ALIASES[USER_LAND_ALIAS_PAGES]}`);
    self.debug(
      "THE SOURCE FILE PATH",
      jsFile,
      USER_LAND_ALIASES,
      `${USER_LAND_ALIASES[USER_LAND_ALIAS_PAGES]}`
    );
    let ast = parser.parse(jsFile, {
      sourceType: "module",
    });
    self.debug("THE JS FILE", jsFile);
    self.debug("THE AST", ast);

    let updateResults = self.updateJSXImportDeclarations(ast, {
      isPages: true,
      isLazy:
        options?.contextApp?.staticOrLazy &&
        options?.contextApp?.staticOrLazy == "lazy"
          ? true
          : false,
      pagesPathsDestination: destination,
      replacePath: options.targetMain,
      userFolder,
      staticPath: options.contextApp.appManifest.static,
    });
    if (updateResults) {
      const { code: genCode } = generate(ast);
      // const modifiedCode = genCode;

      self.debug("New AST genCode", genCode);
      // self.debug("Modiefied code", modifiedCode);
      let madeFolder = self.createDistFolder(
        `${destination}${path.sep}.kotii-land`
      );
      // saveToFile(`${madeFolder}${path.sep}pages.js`, `${genCode}`);
      // fs.copyFileSync(
      //   `${kotiiKotiiLandPath}${path.sep}app_routes.js`,
      //   `${madeFolder}${path.sep}routes.js`
      // );
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
      resolve(genCode);
    }
  });
};
methods.syncDirectories = function (
  sourceDirectoryPath,
  destination,
  ignores = []
) {
  const self = this;
  let allDirectories = [];
  fs.readdirSync(sourceDirectoryPath).forEach((sourceFile) => {
    self.debug("THE READDIR SOURCE FILE", sourceFile);
    let sourceFileFullPath = `${sourceDirectoryPath}${path.sep}${sourceFile}`;
    if (fs.statSync(sourceFileFullPath).isDirectory()) {
      self.debug("BUILD SYNC DIRECTORIES", sourceFile, sourceFileFullPath);
      allDirectories.push(sourceFile);
    }
  });

  allDirectories.forEach((dir) => {
    console.log("THE DIRECTORY", dir);
    let onDestinationPath = `${destination}${path.sep}${dir}`;
    console.log("on destination", onDestinationPath);
    console.log("EXIST ON DESTINATION", !fs.existsSync(onDestinationPath));
    if (!fs.existsSync(onDestinationPath)) {
      fs.mkdirSync(onDestinationPath);
      fs.cpSync(`${sourceDirectoryPath}${path.sep}${dir}`, onDestinationPath, {
        recursive: true,
        filter: (fi) => {
          // self.debug("THE FILE BEING PROCESSED", fi, ignores.includes(fi));
          // if (ignores.includes(fi)) return true;
          // let thisToReturn = fi !== ignore;
          console.log("COPYING FILS FILTER", fi);
          self.debug("SYNC DIRECTORIES FILE BEING COPIED", fi);
          let thisToReturn = !ignores.includes(fi);
          // self.debug("THIS TO RETURN", thisToReturn);
          return thisToReturn;
        },
      });
    }
  });

  self.debug("THE ALL DIRECTORIES", allDirectories);
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

  return new Promise((resolve, reject) => {
    // let requiresRoutes = routes.filter((rou) => {
    //   if (rou.requiresData) {
    //     return rou;
    //   }
    // });
    let routesToPath = `${kotiiKotiiLandPath}${path.sep}app_routes.js`;
    self.debug("THE ROUTES PATHS BUILD", routesToPath);
    fs.writeFileSync(
      routesToPath,
      `const routes = ${JSON.stringify(routes, null, 2)}; export default routes`
    );
    resolve(true);
  });
};

// methods.saveRoutesInUserLand = function (routes) {
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
//   // const cwd = getWorkingFolder();

//   return new Promise((resolve, reject) => {
//     let requiresRoutes = routes.filter((rou) => {
//       if (rou.requiresData) {
//         return rou;
//       }
//     });
//     let routesToPath = `${kotiiKotiiLandPath}${path.sep}app_routes.js`;
//     self.debug("THE ROUTES PATHS BUILD", routesToPath);
//     fs.writeFile(
//       routesToPath,
//       `const routes = ${JSON.stringify(routes)}; export default routes`,
//       (err, succes) => {
//         if (err) {
//           self.debug("SAVING ROUTES FAILED WITH ERR", err);
//         }
//         let fileContent = fs.readFileSync(routesToPath, {
//           encoding: "utf8",
//         });
//         self.debug("THE ROUTES PATHS BUILD AST BEFORE", routesToPath);
//         let ast = parser.parse(fileContent, {
//           sourceType: "module",
//         });
//         self.debug("THE ROUTES PATHS BUILD AST", ast);
//         self.addObjectExpressionProperty(ast, requiresRoutes);
//         const { code: genCode } = generate(ast);
//         // const modifiedCode = genCode;

//         saveToFile(routesToPath, `${genCode}`);
//         resolve(true);
//       }
//     );
//   });
// };
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
//     self.debug("THE ROUTES PATHS BUILD", routesToPath);
//     fs.writeFile(
//       routesToPath,
//       `const routes = ${JSON.stringify(routes)}; export {routes}`,
//       (err, succes) => {
//         if (err) {
//           self.debug("SAVING ROUTES FAILED WITH ERR", err);
//         }
//         let fileContent = fs.readFileSync(routesToPath, {
//           encoding: "utf8",
//         });
//         self.debug("THE ROUTES PATHS BUILD AST BEFORE", routesToPath);
//         let ast = parser.parse(fileContent, {
//           sourceType: "module",
//         });
//         self.debug("THE ROUTES PATHS BUILD AST", ast);
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
      self.debug("AST NODE AFTER OBJECT EXPRESSION Node", state);
      state.forEach((currentRout) => {
        self.debug("THE CURRENT ROUTE", currentRout);
        path.node.properties.forEach((objectProper) => {
          if (objectProper.key.value === "name") {
            if (
              objectProper.value.value.toLowerCase() ===
              currentRout.name.toLowerCase()
            ) {
              self.debug("THE CURRENT ROUT NAME", currentRout.name);
              let functionAST = parser.parse(`${currentRout.requiresData}`);
              let fExpression = functionAST.program.body[0].expression;
              // self.debug(
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
              self.debug("THE PATH PROPERTY", objectProper.value.value);
            }
          }
        });
      });

      // self.debug("AST NODE SPECIFIER", path.node.specifiers[0]?.local.name);
      // let importSpecifier = path.node.source.value;
    },
  });
  return isUpdated;
};
methods.getKotiiConfigTemplate = function (dynamic) {
  const self = this;
  return ` 
  export default {
  
      domain: [{ name: "static", set: ${JSON.stringify(dynamic.public)}}],
      register: '',
      // logger: {level: 'info'},
      cluster:{workers: 1,spawn: false,} ,
      server: 'server'
  
  }`;
};
methods.processDataNodes = function (nodePath, state) {
  const self = this;
  let thingPath = nodePath;
  let importSpecifier = thingPath.node.source.value;
  self.debug("PROCESS DATA NODES:", importSpecifier, state.destination);
  self.debug(
    "PROCESS DATA NODES:",
    importSpecifier,
    resolve("src", importSpecifier)
  );

  let absoluteFilePath = `${resolve(
    path.dirname(state.currentFilePath),
    importSpecifier
  )}`;
  self.debug("THE ABSOLUTE PATH", absoluteFilePath);
  // let contents = fs.readFileSync(absoluteFilePath, {
  //   encoding: "utf-8",
  // });
  // source = `export default ${JSON.stringify(contents)}`;
  if (/.json$/.test(importSpecifier)) {
    let data = getNodejsForeignDataSync("json", absoluteFilePath);

    self.info("THE FOREING JSON", data);
    fs.writeFileSync(absoluteFilePath.replace(".json", ".js"), data);
    // if(fs.existsSync(absoluteFilePath)) fs.rmSync(absoluteFilePath);
    thingPath.node.source.value = importSpecifier.replace(".json", ".js");
    self.debug("CURRENT SPECIFIER", thingPath.node.source.value);

    self.debug("The new path node", thingPath.node.source.value);

    return;
  }

  if (/.xml$/.test(importSpecifier)) {
    thingPath.node.source.value = importSpecifier.replace(".xml", ".js");
    getNodejsForeignData("xml", absoluteFilePath).then((data) => {
      fs.writeFileSync(absoluteFilePath.replace(".xml", ".js"), data);
      // if(fs.existsSync(absoluteFilePath)) fs.rmSync(absoluteFilePath);
    });

    return;
  }

  if (/.csv$/.test(importSpecifier)) {
    let data = getNodejsForeignDataSync("csv", absoluteFilePath);
    fs.writeFileSync(absoluteFilePath.replace(".csv", ".js"), data);
    // if(fs.existsSync(absoluteFilePath)) fs.rmSync(absoluteFilePath);
    thingPath.node.source.value = importSpecifier.replace(".csv", ".js");

    return;
  }
};
methods.processStylesNodes = function (nodePath, state) {
  const self = this;

  let path = nodePath;

  if (!self.assetsManifestData) self.getStylesMap(state.cwd);
  let assetsManifestData = self.assetsManifestData;
  let importSpecifier = path.node.source.value;

  if (path.node.specifiers.length <= 0) {
    return path.remove();
  } else {
    console.log("SCOOPED THE SPECIFIER", importSpecifier);
    let fullPath = assetsManifestData[importSpecifier].pathContext.fileFullPath;
    console.log("THE FULL PATH", fullPath);
    let absoluteFilePath = fullPath.replace(
      state.appSrc,
      `${state.appBuildFolder}`
    );

    console.log("THE STATE", state.appSrc);
    console.log("Scoped absolute path", absoluteFilePath);

    console.log("New URL SCOOPED PLUGING", absoluteFilePath);
    let extension = nativePath.extname(importSpecifier);

    console.log(
      "cssModulesData export",

      absoluteFilePath,
      extension
    );
    let fileIsInPages =
      absoluteFilePath.toLowerCase().indexOf("/pages") >= 0 ? true : false;
    let saveExtension = fileIsInPages ? ".ktc" : ".js";
    let cssModuleDataExport = fileIsInPages
      ? JSON.stringify(assetsManifestData[importSpecifier].modules)
      : `export default ${JSON.stringify(
          assetsManifestData[importSpecifier].modules
        )}`;
    let cssJsFilePath = absoluteFilePath.replace(extension, saveExtension);
    console.log("THE CSS JS FILE PATH", cssJsFilePath);
    fs.writeFileSync(cssJsFilePath, cssModuleDataExport);
    path.node.source.value = importSpecifier.replace(extension, saveExtension);
    return;
  }
};
methods.processImageNodes = function (nodePath, state) {
  const self = this;

  let path = nodePath;

  let importSpecifier = path.node.source.value;
  path.node.source.value = importSpecifier.replace(/\./, ESCAPE_CHARACTER);
  return;
};
methods.getStylesMap = function (kotiiAppPath) {
  const self = this;
  let assetsPath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_MODULES]}`;

  if (fs.existsSync(assetsPath)) {
    self.assetsManifestData = JSON.parse(
      fs.readFileSync(assetsPath, {
        encoding: "utf8",
      })
    );
  }
};
methods.aggregateProductionResources = function (context) {
  const self = this;
  self.debug("THE CONTEXT AGGREGATE PRODUCTION", context);
  let cssSavePath = `${context.staticPath}/css/index.css`;
  let kotiiBundleSavePath = `${context.appBuildFolder}/.kotii-land/bundle.js`;
  let kotiiBundleSaveImportsPath = `${context.appBuildFolder}/.kotii-land/bundle-imports.js`;
  let cssModulesMap = self.aggregateAppKotiiMeta(context);
  let css = self.aggregateAppCss(context);
  let images = self.aggregateAppImages(context);
  console.log("THE IMAGES", images, cssSavePath);
  console.log("THE CSS MODULES", cssModulesMap);
  let kotiiBundleSaveContent = `
  const appModules = ${JSON.stringify(cssModulesMap)};
  const appImagesMap = ${JSON.stringify(images)};
  export {appModules, appImagesMap};
  `;

  fs.writeFileSync(cssSavePath, css);
  fs.writeFileSync(kotiiBundleSavePath, kotiiBundleSaveContent);
  fs.writeFileSync(kotiiBundleSaveImportsPath, `${context.pagesSourceCode}`);
};
methods.aggregateAppCss = function (context) {
  const self = this;
  let isProduction = process?.env?.NODE_ENV === "production" ? true : false;
  let assetsPath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_JSON]}`;
  let pathTailwind = !isProduction
    ? `${context.staticPath}/tailwind.css`
    : `${context.staticPath}/css/tailwind.css`;
  let pathRegularCss = !isProduction
    ? `${context.staticPath}/kotii-styles.css`
    : `${context.staticPath}/css/kotii-styles.css`;
  // let savePath = `${context.appBuildFolder}/index.css`;
  // console.log("THE SAVE PATH", savePath);
  let cssContent = "";
  if (fs.existsSync(pathRegularCss)) {
    cssContent = fs.readFileSync(pathRegularCss, { encoding: "utf-8" });
    fs.unlinkSync(pathRegularCss);
  }

  if (fs.existsSync(pathTailwind)) {
    cssContent += fs.readFileSync(pathTailwind, { encoding: "utf-8" });
    fs.unlinkSync(pathTailwind);
  }

  // cssContent = JSON.parse(
  //   fs.readFileSync(assetsPath, { encoding: "utf-8" })
  // );
  // let cssParsedContent = cssContent.toString().replaceAll(",", " ");
  return cssContent;
  // fs.writeFileSync(savePath, cssParsedContent);
};
methods.aggregateAppKotiiMeta = function (context) {
  const self = this;
  console.log("THE CONTEXT", context);
  let assetsModulesPath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_MODULES]}`;
  let cssModules = JSON.parse(
    fs.readFileSync(assetsModulesPath, { encoding: "utf-8" })
  );
  // let savePath = `${context.appBuildFolder}/.kotii-land/bundle.js`;
  // console.log("THE SAVE PATH", savePath);
  // let content = `const modules = ${JSON.stringify(
  //   cssModules
  // )}; export default modules;`;
  // return content
  // fs.writeFileSync(savePath, content, null, 2);
  return cssModules;
};
methods.aggregateAppImages = function (context) {
  const self = this;
  let assetsPath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_ASSETS_MANIFEST]}`;
  self.debug("THE ASSETS PATH", assetsPath);
  // let savePath = `${context.appBuildFolder}/index.css`;
  // console.log("THE SAVE PATH", savePath);
  let imagesMeta = JSON.parse(
    fs.readFileSync(assetsPath, { encoding: "utf-8" })
  );
  self.debug("IMAGES META BUILD", imagesMeta);

  let simplifiedImagesMap = {};
  Object.keys(imagesMeta).forEach((imageMap) => {
    simplifiedImagesMap[imageMap] = imagesMeta[imageMap].content;
  });
  self.debug("SIMPLIFIED IMAGES", simplifiedImagesMap);
  return simplifiedImagesMap;
};

methods.getPageImportAbsolutePath = function (userFolder, item) {
  const self = this;

  console.log("THE USER FOLDER", userFolder, item);
  let cwdPos = item.indexOf(userFolder);
  let absolutePath = item.substring(cwdPos, item.length);
  let sourcePos = absolutePath.indexOf("src");
  let requiredPath = absolutePath.substring(sourcePos, absolutePath.length);
  self.debug(
    "THE PAGE WORK DIR",
    cwdPos,
    absolutePath,
    sourcePos,
    requiredPath
  );
  let absolutePathPre = "kotii-prod";
  let absSrc = `${path.sep}${absolutePathPre}${path.sep}${requiredPath}`;
  self.debug("THE ABS SRC", absSrc);
  return absSrc;
};

methods.replaceNoneNativeImportsExtensions = function (astPath, state) {
  const self = this;
  const { appManifest = null, isPages = false } = state;

  let importSpecifier = astPath.node.source.value;
  let fileExtension = path.extname(importSpecifier);
  let isUpdated = false;

  if (/.jsx$/.test(astPath.node.source.value)) {
    self.debug(
      "IT IS JSX",
      astPath.node.source.value,
      /^(\.+)/.test(astPath.node.source.value)
    );
    astPath.node.source.value = astPath.node.source.value.replace(
      /.jsx$/,
      ".js"
    );
    isPages
      ? (astPath.node.source.value = self.getPageImportAbsolutePath(
          state.userFolder,
          astPath.node.source.value
        ))
      : null;
    isUpdated = true;
    return isUpdated;
  }
  if (dataExtensions.includes(fileExtension)) {
    self.processDataNodes(astPath, state);
    isUpdated = true;
    return isUpdated;
  }
  if (cssExtensions.includes(fileExtension)) {
    self.processStylesNodes(astPath, {
      appFolder: state.targetMain,
      appSrc: state.targetSource,
      cwd: kotiiRootPath,
      appBuildFolder: state.destination,
    });
    isUpdated = true;
    return isUpdated;
  }
  if (imageExtensions.includes(fileExtension)) {
    self.processImageNodes(astPath, {
      appFolder: state.targetMain,
      appSrc: state.targetSource,
      cwd: kotiiRootPath,
      appBuildFolder: state.destination,
    });
    isUpdated = true;
    return isUpdated;
  }
  self.debug("NOT JSX", /^(\.+)/.test(astPath.node.source.value));
  if (
    !/^(\.+)/.test(astPath.node.source.value) &&
    !isBuiltin(astPath.node.source.value) &&
    appManifest &&
    appManifest.aliases[astPath.node.source.value]
  ) {
    self.debug("SOURCE NOT RELATIVE", astPath.node.source.value);
    astPath.node.source.value = `${
      appManifest.aliases[astPath.node.source.value]
    }.js`;
    isUpdated = true;
    return isUpdated;
  }
  return isUpdated;
};
methods.replaceNoneNativeImportsExtensionsDynamic = function (astPath, state) {
  const self = this;
  const { isPages = false } = state;

  if (/.jsx$/.test(astPath.value)) {
    self.debug("REPLACE DYNAMIC", astPath.value, /^(\.+)/.test(astPath.value));
    astPath.value = astPath.value.replace(/.jsx$/, ".js");
    isPages
      ? (astPath.value = self.getPageImportAbsolutePath(
          state.userFolder,
          astPath.value
        ))
      : null;

    return true;
  }
  return false;
};
export default methods;
