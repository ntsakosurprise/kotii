const methods = {};
import fs from "fs";
import { isBuiltin } from "node:module";
import os from "node:os";
import path, { resolve } from "path";
import {
  getNodejsForeignData,
  getNodejsForeignDataSync,
} from "../../globals.cjs";
import { kotiiKotiiLandPath, kotiiRootPath } from "../../kotii_paths.js";
import runNpmScript from "./runNpmScript.js";

const dataExtensions = [".csv", ".json", ".xml"];
const cssExtensions = [".scss", ".styl", ".less", ".css", "sass"];
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
  const { targetMain, destination, targetSource, routes, contextApp } = payload;
  data.callback({ gotValue: "Ran" });
  // const cwd = getWorkingFolder();
  // const cwd = self.kotiiScriptsPath;
  self.debug("KOTII SCRIPTS PATH", kotiiRootPath);
  // if (fs.existsSync(`${kotiiKotiiLandPath}/dev/styles.json`)) {
  //   fs.rmSync(`${kotiiKotiiLandPath}/dev/styles.json`);
  // }

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
    "build-ssr": `babel --config-file ${kotiiRootPath}/babel.server.build.json  --out-dir ${destination}${path.sep}src ${targetSource}`,
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
      self
        .saveRoutesInUserLand(routes)
        .then(() => {
          self.doKotiiLandPagesFile(destination, {
            contextApp,
            targetMain,
          });
        })
        .catch((saveErr) => {
          self.error(
            chalk.whiteBright.bold("Building project has failed with error:"),
            chalk.bgRedBright(saveErr)
          );
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
    let candidatePath = `${sourceRoot}${path.sep}${candidate}`;
    self.debug("Candidate main path", candidatePath);
    if (fs.statSync(candidatePath).isDirectory()) {
      fs.readdirSync(candidatePath, { recursive: true }).forEach((cndFile) => {
        // self.debug("THE CND FILE", cndFile);
        let cndFilePath = `${candidatePath}${path.sep}${cndFile}`;
        self.debug("CANDIDATE FILE PATH", cndFile);
        if (/.js$/.test(cndFile)) {
          self.debug("THE FILE IS JAVASCRIPT", cndFile);
          // self.debug("FULL PATH");
          let jsFile = readFileSync(cndFilePath);
          let ast = parser.parse(jsFile, {
            sourceType: "module",
          });
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
      const jsFile = readFileSync(candidatePath);
      let ast = parser.parse(jsFile, {
        sourceType: "module",
      });
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
  const appManifest = state?.appManifest;
  const isPages = state?.isPages ? true : false;
  const nativePath = path;
  // let removedImportsIds = [];

  let isUpdated = false;
  traverse(ast, {
    ImportDeclaration(path) {
      self.debug("AST NODE AFTER Import Node", path.node.source.value);
      self.debug("AST NODE SPECIFIER", path.node.specifiers[0]?.local.name);
      let importSpecifier = path.node.source.value;
      let fileExtension = nativePath.extname(importSpecifier);
      if (/.jsx$/.test(path.node.source.value)) {
        self.debug(
          "IT IS JSX",
          path.node.source.value,
          /^(\.+)/.test(path.node.source.value)
        );
        path.node.source.value = path.node.source.value.replace(/.jsx$/, ".js");
        isPages
          ? (path.node.source.value = path.node.source.value.replace(
              state.replacePath,
              state.pagesPathsDestination
            ))
          : null;
        isUpdated = true;
        return;
      }
      if (dataExtensions.includes(fileExtension)) {
        self.processDataNodes(path, state);
        isUpdated = true;
        return;
      }
      if (cssExtensions.includes(fileExtension)) {
        self.processStylesNodes(path, {
          appFolder: state.targetMain,
          appSrc: state.targetSource,
          cwd: kotiiRootPath,
          appBuildFolder: state.destination,
        });
        isUpdated = true;
        return;
      }
      self.debug("NOT JSX", /^(\.+)/.test(path.node.source.value));
      if (
        !/^(\.+)/.test(path.node.source.value) &&
        !isBuiltin(path.node.source.value) &&
        appManifest.aliases[path.node.source.value]
      ) {
        self.debug("SOURCE NOT RELATIVE", path.node.source.value);
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
  self.debug("THE KOTII LAND PAGE FILE DESTINATION", destination);

  const generate = self.generate;
  const parser = self.parser;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  // const cwd = getWorkingFolder();
  const cwd = self.kotiiScriptsPath;

  const jsFile = readFileSync(`${kotiiKotiiLandPath}${path.sep}dev/pages.js`);
  self.debug(
    "THE SOURCE FILE PATH",
    `${kotiiKotiiLandPath}${path.sep}dev/pages.js`
  );
  let ast = parser.parse(jsFile, {
    sourceType: "module",
  });
  self.debug("THE JS FILE", jsFile);
  self.debug("THE AST", ast);

  let updateResults = self.updateJSXImportDeclarations(ast, {
    isPages: true,
    pagesPathsDestination: destination,
    replacePath: options.targetMain,
  });
  if (updateResults) {
    const { code: genCode } = generate(ast);
    // const modifiedCode = genCode;

    self.debug("New AST genCode", genCode);
    // self.debug("Modiefied code", modifiedCode);
    let madeFolder = self.createDistFolder(
      `${destination}${path.sep}.kotii-land`
    );
    saveToFile(`${madeFolder}${path.sep}pages.js`, `${genCode}`);
    fs.copyFileSync(
      `${kotiiKotiiLandPath}${path.sep}app_routes.js`,
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
    let onDestinationPath = `${destination}${path.sep}${dir}`;
    if (!fs.existsSync(onDestinationPath)) {
      fs.mkdirSync(onDestinationPath);
      fs.cpSync(`${sourceDirectoryPath}${path.sep}${dir}`, onDestinationPath, {
        recursive: true,
        filter: (fi) => {
          // self.debug("THE FILE BEING PROCESSED", fi, ignores.includes(fi));
          // if (ignores.includes(fi)) return true;
          // let thisToReturn = fi !== ignore;
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
methods.processDataNodes = function (nodePath, state) {
  const self = this;
  let path = nodePath;
  let importSpecifier = path.node.source.value;

  let absoluteFilePath = resolve(
    `${state.destination}`,
    importSpecifier.substr(importSpecifier.indexOf("/") + 1).trim()
  );
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
    path.node.source.value = importSpecifier.replace(".json", ".js");
    self.debug("CURRENT SPECIFIER", path.node.source.value);

    self.debug("The new path node", path.node.source.value);

    return;
  }

  if (/.xml$/.test(importSpecifier)) {
    path.node.source.value = importSpecifier.replace(".xml", ".js");
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
    path.node.source.value = importSpecifier.replace(".csv", ".js");

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
    let fullPath = assetsManifestData[importSpecifier].fullPath;
    console.log("THE FULL PATH", fullPath);
    let absoluteFilePath = fullPath.replace(
      state.appSrc,
      `${state.appBuildFolder}`
    );

    console.log("THE STATE", state.appSrc);
    console.log("Scoped absolute path", absoluteFilePath);

    console.log("New URL SCOOPED PLUGING", absoluteFilePath);
    let extension = nativePath.extname(importSpecifier);
    let cssModuleDataExport = `export default ${JSON.stringify(
      assetsManifestData[importSpecifier].modules
    )}`;
    console.log(
      "cssModulesData export",
      cssModuleDataExport,
      absoluteFilePath,
      extension
    );
    let cssJsFilePath = absoluteFilePath.replace(extension, ".js");
    console.log("THE CSS JS FILE PATH", cssJsFilePath);
    fs.writeFileSync(cssJsFilePath, cssModuleDataExport);
    path.node.source.value = importSpecifier.replace(extension, ".js");
    return;
  }
};
methods.getStylesMap = function (kotiiAppPath) {
  const self = this;
  let assetsPath = `${kotiiAppPath}/kotii-land/dev/styles-css-modules.json`;

  if (fs.existsSync(assetsPath)) {
    self.assetsManifestData = JSON.parse(
      fs.readFileSync(assetsPath, {
        encoding: "utf8",
      })
    );
  }
};
export default methods;
