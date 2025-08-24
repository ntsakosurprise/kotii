const methods = {};
import path from "node:path";
import { kotiiKotiiLandPath } from "../../kotii_paths.js";
methods.init = function () {
  this.listens({
    "create-file-routes": this.handleFileRoutes.bind(this),
    "remove-pages-import": this.handleRemovePagesImport.bind(this),
  });
};
methods.handleFileRoutes = async function (data) {
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const isExistingDir = pao.pa_isExistingDir;
  const saveToFile = pao.pa_saveToFile;
  const loadFileSync = pao.pa_loadFileSync;
  // self.debug("HANDLE FILE ROUTES DATA", data);
  const { payload } = data;
  self.callback = data.callback;

  const { path: filePaths } = payload;
  self.debug("FILE PATHS", filePaths);
  const pagesSource = filePaths.appSrc;
  const isProductionRequest = filePaths?.isProductionRequest || false;
  // const appManifest = filePaths?.appManifest;
  let manifestData = null;
  const cwd = getWorkingFolder();
  // !self.kotiiUtils ? await self.emit({ type: "get-kotii-utils" }) : "";
  //self.debug("EXECSYNC", execSync);
  //self.enableBabelRegister(cwd);

  const pagesPaths = self.getPages(
    `${filePaths.appSrc}/pages/**/*.{js,jsx,ts,tsx}`
  );
  // appManifest ? manifestData = loadFileSync(appManifest)) : null;
  if (isProductionRequest) {
    return self
      .getRoutesHelper(pagesPaths, pagesSource)
      .then((routesObject) => {
        let routes = self.buildServerRoutes(routesObject);
        self.callback({ routes, message: "Routes configured" });
      });
  } else {
    const filePath = `/kotii-land/dev/manifest.js`;
    self
      .doImport(filePath, false, false)
      .then(async (imported) => {
        // self.debug("Impored", imported.module);

        let manifestJS = imported;
        let meta = manifestJS.meta;
        self.debug("META ", meta);

        let routesObject = await self.getRoutesHelper(pagesPaths, pagesSource);

        let sendToRequestor = {
          message: "Routes Configured",
          resources: payload.path,
          routes: self.buildServerRoutes(routesObject),
          isDomainCreated: meta?.isDomainCreated || false,
        };

        const { lastCompsCount = 0, compsSource, compsPaths } = meta;
        const pagesPathsLen = pagesPaths.length;

        self.debug("THE SEND TO:", sendToRequestor);

        if (
          lastCompsCount === 0 ||
          !compsSource ||
          compsPaths.length === 0 ||
          compsSource !== pagesSource
        ) {
          self.addToAST({
            objectToAdd: routesObject,
            pagesPaths,
            source: pagesSource,
            isNewSource: compsSource !== pagesSource,
          });
          return self.callback(sendToRequestor);
        } else {
          self.addOrRemoveByAST({
            pagesPaths,
            compsPaths,
            pagesSource,
            routesObject,
            compsPagesEqual: lastCompsCount === pagesPathsLen,
          });
          return self.callback(sendToRequestor);
        }
      })
      .catch((err) => {
        self.debug("MANIFEST.JS: ERROR IMPORTING MANIFEST-JS", err);
      });
  }
};
methods.handleRemovePagesImport = async function (data) {
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const isExistingDir = pao.pa_isExistingDir;
  const saveToFile = pao.pa_saveToFile;
  const loadFileSync = pao.pa_loadFileSync;
  const parser = self.parser;
  // self.debug("HANDLE FILE ROUTES DATA", data);
  const readFileSync = pao.pa_readFileSync;
  const cwd = getWorkingFolder();

  const buildPath = `${kotiiKotiiLandPath}/dev/build.js`;

  const buildPathFile = readFileSync(buildPath);
  const buildAst = parser.parse(buildPathFile, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  self.removeImportDeclarations(buildAst, ["./pages.js"]);

  const generateBuildAst = generate(buildAst).code;

  let newFileContent = `${generateBuildAst}`;
  saveToFile(buildPath, newFileContent);
  data.callback();
};

methods.addOrRemoveByAST = function ({
  routesObject,
  pagesPaths,
  compsPaths,
  pagesSource,
  compsPagesEqual = false,
} = props) {
  const self = this;

  let toRemove = [];
  let toAdd = [];

  pagesPaths.forEach((pPath) => {
    if (compsPaths.indexOf(pPath) < 0) toAdd.push(pPath);
  });
  compsPaths.forEach((pPath) => {
    if (pagesPaths.indexOf(pPath) < 0) toRemove.push(pPath);
  });
  self.debug("RENAMES: PAGES LESS.TO REMOVE", toRemove);
  if (compsPagesEqual && toRemove.length === 0 && toAdd.length === 0) {
    self.addImportLineToBuildJs();
  } else if (toRemove.length > 0 && toAdd.length > 0) {
    self.addToAST({
      objectToAdd: self.getAstRoutes(routesObject, toAdd),
      pagesPaths,
      toRemove: toRemove,
      source: pagesSource,
    });
  } else if (toRemove.length > 0) {
    self.debug("ABOUT TO PROCESS WITH REMOVE");
    self.addToAST({
      // objectToAdd: routesObject,
      pagesPaths,
      toRemove: toRemove,
      source: pagesSource,
    });
  } else {
    self.debug("ABOUT TO PROCESS WITHOUT REMOVE");
    // routesObject = self.getRoutesHelper(toAdd, pagesSource);
    self.addToAST({
      objectToAdd: self.getAstRoutes(routesObject, toAdd),
      pagesPaths,
      source: pagesSource,
    });
  }
};

methods.getPages = function (filesToGet) {
  const self = this;
  self.debug("FILETS TO GET", filesToGet);
  self.debug("GLOBSYNC", self.globSync);
  const files = self.globSync(filesToGet);
  return files;
};
methods.getSourceCodes = function (codesSource) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
  // let appFileSavePath = `${resources.appSrc}/about_.js`;
  // let appFilePath = `${resources.appSrc}/about.jsx`;
  // let jsxCode = readFileSync(appFilePath);
  let sourcesCodesList = [];

  sourcesCodesList = codesSource.map((source, i) => {
    return { path: source, originalCode: readFileSync(source) };
  });

  return sourcesCodesList;

  //self.debug("SOURCES AND THEIR CODES", sourcesCodesList);
};
methods.getRoutesHelper = function (paths, source) {
  const self = this;
  return new Promise(async (resolve, reject) => {
    const madeRs = await self.createRouterComponents(paths, source);
    resolve(madeRs);
  });
};
methods.createRouterComponents = function (maps, pathy) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const saveToFile = pao.pa_saveToFile;
  const makeFolderSync = pao.pa_makeFolderSync;
  const isExistingDir = pao.pa_isExistingDir;
  self.debug("pages paths", maps);
  // const dirPath = `${pathy}/components/system`;
  //const dirPath = `${pathy}/components/system`;
  //if (!isExistingDir(dirPath)) makeFolderSync(dirPath);
  return new Promise((resolve, reject) => {
    let compsMaps = maps.map(async (contextModule) => {
      // const readFile = loadFile(contextModule);
      // self.debug("COntext Module", contextModule);
      // self.debug("our path", contextModule.replace(/pages/g, "_pages"));
      // saveToFile(contextModule.replace(/pages/g, "_pages"), readFile);
      // self.buildFile(contextModule);

      return await self.getItemPathAndFile(contextModule);
    });
    Promise.all(compsMaps).then((completed) => {
      resolve(completed);
    });
  });
};
methods.getItemPathAndFile = function (item) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const loadFileSync = pao.pa_loadFileSync;
  const readFileSync = pao.pa_readFileSync;
  const capitalizeFirstLetter = pao.pa_capitalizeFirstLetter;
  const camelCase = pao.pa_camelCase;
  const extMatchPattern = /\.jsx|\.tsx|\.ts|\.js$/g;
  let fileAsComp = null;

  let gotEndpoint =
    item.indexOf("pages") > 0
      ? item.slice(item.indexOf("pages"), item.length)
      : "";
  self.debug("Got endpoint", gotEndpoint);
  self.debug("GOT ENDPOINT PAGES REMOVED", gotEndpoint.replace("pages", ""));
  let patternMatch = gotEndpoint
    .replace("pages", "")
    .replace(extMatchPattern, "")
    .replace(/index/g, "")
    .replace(/\[(.+)\]/g, ":$1")
    .replace(/\[\.{3}.+\]/, "*");
  // .replace(/\/$/, "");
  if (!/^\/$/.test(patternMatch)) {
    self.debug("Removes leading forwarslash");
    patternMatch = patternMatch.replace(/\/$/, "");
  }

  return new Promise((res, rej) => {
    let splitPatternMatch = patternMatch.split("/");
    let splitLen = splitPatternMatch.length;
    let workDir = process.cwd();
    let pathSplit = workDir.split(path.sep);
    let userFolder = pathSplit[pathSplit.length - 1];
    let cwdPos = item.indexOf(userFolder);
    let absolutePath = item.substring(cwdPos, item.length);
    let sourcePos = absolutePath.indexOf("src");
    let requiredPath = absolutePath.substring(sourcePos, absolutePath.length);
    console.log(
      "THE PAGE WORK DIR",
      workDir,
      cwdPos,
      absolutePath,
      requiredPath
    );
    let absolutePathPre =
      process.env.NODE_ENV === "development" ? "kotii-dev" : "kotii-prod";
    let absSrc = `${path.sep}${absolutePathPre}${path.sep}${requiredPath}`;

    self.debug("THE PAGES matched", patternMatch);
    self.debug("THE ITEM", item);
    //self.debug("THE LOADED FILE", loadFileSync(item));

    self.doImport(item, true).then((imported) => {
      self.debug("THE PAGE FILE IN CONTEXT EXPORTS", imported);
      const { getServerState = null, universalEffects = null } = imported;
      // if (imported.getServerState) {
      //   self.debug(
      //     "THE GETSERVERSTATE METHOD",
      //     imported.getServerState(createReduxStore())
      //   );
      // }
      res({
        path: patternMatch,
        //component: fileAsComp?.default ? fileAsComp.default : fileAsComp,
        componentName:
          patternMatch === "/"
            ? "Home"
            : capitalizeFirstLetter(
                camelCase(splitPatternMatch[splitLen - 1].replace(/:/g, ""))
              ),
        component: item,
        componentAbsolutePath: absSrc,
        componentPath: item,
        componentRaw: imported.default,
        getServerState,
        universalEffects,
      });
    });
  });

  // fileAsComp = loadFileSync(item);
  // self.debug("THE FILE CODE", fileAsComp.default.toString());
  // await loadFile(item);
};
methods.dynamicImport = async function (module) {
  const self = this;
  self.debug("THE DYNAMIC GOT A CALL", module);
  const open = await import(module);
  return open;
};

methods.buildFile = function (filename, destination, babelOptions = {}) {
  const self = this;
  const path = self.path;
  const fs = self.fs;
  const babel = self.babel;
  const options = Object.assign({}, babelOptions);
  const content = fs.readFileSync(filename, { encoding: "utf8" });
  const ext = path.extname(filename);

  // self.debug("babel", babel);

  // Ignore non-JS files and test scripts
  if (filename) {
    if (filename) {
      options.filename = filename;
      options.presets = ["@babel/preset-react", "@babel/preset-env"];

      self.debug("THE FILE NAME", options);
      const result = babel.transform(content, options);
      self.debug("BABEL TRANSFORMED", result);

      // return outputFileSync(outputPath, result.code, { encoding: "utf8" });
    }
    // process with postcss if it's a css file
    // if (ext === ".css") {
    //   return execSync(`postcss ${filename} -o ${outputPath}`);
    // }

    // Copy if it's any other type of file
    // return outputFileSync(outputPath, content);
  }

  return false;
};

methods.buildStringCode = function (code, destination, babelOptions = {}) {
  const self = this;
  const path = self.path;
  const fs = self.fs;
  const babel = self.babel;
  const options = Object.assign({}, babelOptions);

  // const outputPath = path.join(destination, path.basename(filename));
  // self.debug("babel", babel);

  // Ignore non-JS files and test scripts

  options.presets = ["@babel/preset-env", "@babel/preset-react"];
  // options.output = destination

  self.debug("THE FILE NAME", options);
  const result = babel.transformSync(code, options);
  self.debug("BABEL TRANSFORMED", result);

  // const outputPath = path.join(destination, path.basename(filename));

  return result;
};

methods.parseJsxToReact = function (sourceCodes) {
  const self = this;
  const pao = self.pao;
  const saveToFile = pao.pa_saveToFile;
  const loadFile = pao.pa_loadFile;
  const getRootDir = pao.pa_getRootDir;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const loadFileSync = pao.pa_loadFileSync;
  const readFileSync = pao.pa_readFileSync;
  self.emit({
    type: "convert-jsx-to-react",
    data: {
      payload: { code: sourceCodes },
      callback: (data) => {
        self.debug("CODE CONVERTED TO REACT", data.message);
        const { convertedCode } = data;
        // const codeToSave = code.code;
        const updatedSource = convertedCode.map((cCode, i) => {
          const altPath = cCode.path.replace(".jsx", ".js");
          saveToFile(altPath, cCode.modifiedCode);
          return { ...cCode, altPath, loadedFile: loadFileSync(altPath) };
        });

        let readFileContent = readFileSync(
          `${getWorkingFolder()}/kotii-land/dev/build.js`
        );
        readFileContent =
          readFileContent + `const mapsOfComps = ${updatedSource}`;
        const bundleCode = self.babel.transformSync(readFileContent, {});
        self.debug("BUNDLE CODE", bundleCode);
        // saveToFile(
        //   `${getWorkingFolder()}/bundle.js`,
        //   `const toSave = ${updatedSource}`
        // );

        // self.debug("UPDATED source", updatedSource);
        // self.debug("THE ROOT DIR", getWorkingFolder());
        // loadFile(fileToSaveTo)
        //   .then((loadedFile) => {
        //     self.debug("THE LOADED FILE", loadedFile);
        //     self.debug("THE CODE TO SAVE", userCode);
        //     saveToFile(fileToSaveTo, userCode);

        //     // const { code: lebabTransformed, warnings } = self.lebabTransform(
        //     //   code.code, // code to transform
        //     //   [
        //     //     "let",
        //     //     "arrow",
        //     //     "arrow-return",
        //     //     "includes",
        //     //     "destruct-param",
        //     //     "arg-spread",
        //     //     "template",
        //     //     "obj-shorthand",
        //     //     "class",
        //     //     "commonjs",
        //     //     "obj-method",
        //     //     "default-param",
        //     //   ] // transforms to apply
        //     // );

        //     //self.debug("LEBAB ES6", lebabTransformed);
        //   })
        //   .catch((err) => {
        //     self.debug("THERE WAS AN ERROR LOADING REACT FILE", err);
        //   });
      },
    },
  });
};
methods.enableBabelRegister = function (babelCWD) {
  const self = this;
  const pao = self.pao;
  const loadFileSync = pao.pa_loadFileSync;

  loadFileSync("@babel/register").default({
    cwd: babelCWD,
    presets: ["@babel/preset-env", "@babel/preset-react"],
    // plugins: [
    //   "babel-plugin-macros",
    //   "babel-plugin-styled-components",
    //   ["@babel/plugin-transform-react-jsx"],
    // ],
  });
};
methods.addToAST = function ({
  objectToAdd = null,
  pagesPaths,
  toRemove = null,
  source,
  isNewSource = false,
} = args) {
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

  const filePath = `${kotiiKotiiLandPath}/dev/pages.js`;

  self.debug("THE BUILD PATH CWD", cwd, filePath);

  self.debug("KOTTILAND FILE PATH", filePath);
  self.debug(
    "KOTII AST ITEMS",
    objectToAdd,
    "\npages paths:",
    pagesPaths,
    "\ntoRemove",
    toRemove,
    "\nsource",
    source
  );
  // const altPath = `${cwd}/build_test.js`;
  const jsFile = readFileSync(filePath);
  let ast = parser.parse(jsFile, { sourceType: "module", plugins: ["jsx"] });
  let isCompsDefined = false;
  let importStrings = "";

  traverse(ast, {
    VariableDeclaration(path) {
      // self.debug("TRAVERSE ENTERS", path.container);
      // if (!t.isIdentifier(path.node)) return;
      //self.debug("PATH AFTER CHECK", path.node.type);
      // if (t.isIdentifier(path.node, { name: "surname" })) {
      // self.debug("THE NODE TYPE", path.node.type);
      // self.debug(
      //   "THE NODE TYPE IS IMPORT",
      //   path.node.type === "ImportDeclaration"
      // );
      if (path.node.type === "ImportDeclaration") return;
      let isRoutesDefined = false;
      let routesNode = null;
      let compsNode = null;
      path.container.forEach((nd, i) => {
        if (nd.type !== "VariableDeclaration") return false;
        let declarations = nd.declarations;
        declarations.forEach((dec, i) => {
          if (dec.id.name === "routes") {
            isRoutesDefined = true;
            routesNode = dec;
          }
          if (dec.id.name === "comps") {
            isCompsDefined = true;
            compsNode = dec;
          }
        });
        // let nodeIDName = nd.declarations[0].id.name;
        // if (nodeIDName === "mapsOfFiles" || nodeIDName === "surname") return nd;
      });
      // self.debug("AST NODE ROUTES", routesNode, isRoutesDefined);
      // if (compsNode) {
      //   self.debug("AST NODE COMPS", compsNode);
      //   return;
      // }

      if (isRoutesDefined) {
        if (objectToAdd && toRemove) {
          self.removeImportDeclarations(ast, toRemove, routesNode, compsNode);
          importStrings = self.insertImportDeclarations(
            objectToAdd,
            false,
            routesNode,
            compsNode
          );
          path.stop();
        } else if (objectToAdd) {
          importStrings = self.insertImportDeclarations(
            objectToAdd,
            false,
            routesNode,
            compsNode
          );

          path.stop();
        } else if (toRemove) {
          self.removeImportDeclarations(ast, toRemove, routesNode, compsNode);
          path.stop();
        } else if (isNewSource) {
          self.variableCreation(path, t, objectToAdd, parser, true);
        }
      } else {
        self.variableCreation(path, t, objectToAdd, parser);
      }

      //}

      // if (t.isImportDeclaration(path.node)) {
      //   path.node.name = "x";
      // }
    },
  });

  self.debug("New AST", ast);
  importStrings = !isCompsDefined
    ? self.insertImportDeclarations(objectToAdd, true)
    : importStrings
    ? importStrings
    : "";
  const { code: genCode } = generate(ast);
  const modifiedCode = genCode;

  self.debug("New AST genCode", genCode);
  self.debug("Modiefied code", modifiedCode);
  saveToFile(
    filePath,
    !importStrings ? modifiedCode : `${importStrings} ${modifiedCode}`
  );

  // if (!isCompsDefined || Object.keys(isCompsDefined).length <= 0)
  self.addImportLineToBuildJs();
  self.createMetaAst({
    comps: [],
    compsSource: source,
    lastCompsCount: pagesPaths.length,
    compsPaths: [...pagesPaths],
    isDomainCreated: true,
  });
  //self.cacheData(self.keys.CACHE_ROUTES_PATHS_KEY, pagesPaths);
  // self.cacheData(self.keys.SAVE_FILES_KEY, { added: [], deleted: [] });
  // self.watchFile(pagesPaths, {
  //   add: self.watchFileAddEvent,
  //   delete: self.watchFileDeleteEvent,
  // });
  // let commandToRun = "build:dev";
  // let bat = execSync("yarn", ["run", `${commandToRun}`], { cwd: cwd });
  // //self.debug("BUILD SPAWN", buildSpawn);
  // bat.stdout.on("data", (data) => {
  //   self.debug(data.toString());
  // });

  // bat.stderr.on("data", (data) => {
  //   console.error(data.toString());
  // });

  // bat.on("exit", (code) => {
  //   self.debug(`Child exited with code ${code}`);
  // });
  // buildSpawn.on("data", (data) => {
  //   self.debug("SPAWN DATA", data);
  // });
  //execSync("yarn build:dev");

  //self.debug("file source code", fileCode);

  //   .then((file) => {
  //     self.debug("I got the file", file);
  //     let fileCode = parser.parse(file)
  //   })
  //   .catch((err) => {
  //     self.debug("THE ERR", err);
  //   });
  // self.debug("THE FILE PATH", jsFile);
};

methods.astAddNode = function (routesNode, compsNode, toAdd) {
  const self = this;
  const t = self.t;

  // const nodeElements = init.elements;
  self.debug("AST NODE BEFORE LEN", toAdd);
  if (routesNode) {
    const init = routesNode.init;
    toAdd.forEach((adding, i) => {
      init.elements.push(
        t.objectExpression([
          t.objectProperty(t.identifier("path"), t.stringLiteral(adding.path)),
          t.objectProperty(
            t.identifier("component"),
            // t.functionExpression(t.identifier(funcName), [], funcBody)
            t.stringLiteral(adding.componentName)
          ),
        ])
      );
    });
  }

  if (compsNode) {
    const initProps = compsNode.init;
    toAdd.forEach((adding, i) => {
      initProps.properties.push(t.identifier(`${adding.componentName}`));
    });
  }

  // self.debug("AST NODE AFTER", node.init[nodeUpdateType].length);
  // self.debug("AST NODE AFTER CHANGE", node);

  // traverse(node, {
  //   objectExpression(path) {
  //     if (path.node.type === "ImportDeclaration") return;
  //     let isRoutesDefined = false;
  //     let routesNode = null;
  //     let compsNode = null;
  //     path.container.forEach((nd, i) => {
  //       if (nd.type !== "VariableDeclaration") return false;
  //       let declarations = nd.declarations;
  //       declarations.forEach((dec, i) => {
  //         if (dec.id.name === "routes") {
  //           isRoutesDefined = true;
  //           routesNode = dec;
  //         }
  //         if (dec.id.name === "comps") {
  //           isCompsDefined = true;
  //           compsNode = dec;
  //         }
  //       });
  //       // let nodeIDName = nd.declarations[0].id.name;
  //       // if (nodeIDName === "mapsOfFiles" || nodeIDName === "surname") return nd;
  //     });

  //     if (isRoutesDefined) {
  //       self.variableCreation(path, t, objectToAdd, parser, true, routesNode);
  //     } else {
  //       self.variableCreation(path, t, objectToAdd, parser, false, routesNode);
  //     }

  //     //}

  //     // if (t.isImportDeclaration(path.node)) {
  //     //   path.node.name = "x";
  //     // }
  //   },
  // });
};

methods.astDeleteNode = function (routesNode, compsNode, toRemove) {
  const self = this;
  const t = self.t;
  self.debug("AST NODE DELETE", toRemove);
  // const init = node.init;
  // const nodeUpdateType = node.id.type === "routes" ? "elements" : "properties";
  // const nodeElements = init.elements;

  if (routesNode) {
    let init = routesNode.init;
    self.debug("AST NODE ROUTES NODE", routesNode);
    self.debug("AST NODE INIT ELEMENT", init.elements[0]);
    init.elements.forEach((elNode, i) => {
      let objecProps = elNode.properties;
      objecProps.forEach((prop, ii) => {
        if (prop.key.name === "component") {
          if (toRemove === prop.value.value) {
            self.debug("AST ROUTE ELEMENT OBJECT VALUE TO BE REMOVED");
            init.elements.splice(i, 1);
          }
        }
      });

      // if (toRemove.indexOf(elNode..compnent) >= 0) {
      //   init.elements.unshift(i);
      // }
    });
  }
  if (compsNode) {
    let initProps = compsNode.init;
    self.debug("AST NODE COMPS NODE", compsNode);
    self.debug("AST NODE INIT Properties", initProps.properties[0]);
    initProps.properties.forEach((propNode, i) => {
      if (toRemove === propNode.key.name) {
        self.debug("AST NODE Object Proper to Be removed");
        initProps.properties.splice(i, 1);
      }
      // init.properties.unshift(i);
    });
  }

  // self.debug("AST NODE AFTER", );
  // self.debug("AST NODE AFTER CHANGE", node);
};

methods.variableCreation = function (
  path,
  t,
  files,
  parser,
  replace = false,
  node = null
) {
  const self = this;
  let creationMethod = replace
    ? path.replaceWith.bind(path)
    : path.container.unshift.bind(path.container);
  //const files = [{ path: "mypath", component: "myComponent" }];
  // self.debug("THE CREATING METHOD", creationMethod);
  // if(replace)
  creationMethod(
    t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier("routes"),
        t.arrayExpression([
          ...files.map((en, i) => {
            // let functionAsString = en.component
            //   .toString()
            //   .replace(/\/\*#__PURE__\*\/_react.default/g, "React");
            // .replace(/;/g, "");
            // self.debug("FUNCTION AS A STRING", functionAsString);
            // let funcAst = parser.parse(functionAsString, {
            //   sourceType: "module",
            // });
            //self.debug("FUNCTION STRING", functionAsString);
            // let funcAst = parser.parse(en.component, {
            //   sourceType: "module",
            //   plugins: ["jsx"],
            // });
            // self.debug("FUNC AST", funcAst);
            // self.debug("FUNCK FIRST NODE");
            // self.funcToJsx(funcAst, en.path);
            // let functionInContext = funcAst.program.body[0];
            // self.debug("FUNCK FIRST NODE", functionInContext);
            // let funcName = functionInContext.id.name;
            // let funcBody = functionInContext.body;
            // self.debug("AST for func", funcAst.program.body);
            // self.debug("AST FUNCTION PARTS", funcName, funcBody);
            // self.debug("THE FUNCTION NAME", funcName);

            return t.objectExpression([
              t.objectProperty(t.identifier("path"), t.stringLiteral(en.path)),
              t.objectProperty(
                t.identifier("component"),
                // t.functionExpression(t.identifier(funcName), [], funcBody)
                t.stringLiteral(en.componentName)
              ),
            ]);
          }),
        ])
      ),
    ])
  );
  path.stop();
};

methods.funcToJsx = function (ast, pathID) {
  const self = this;

  const traverse = self.traverse;
  const t = self.t;
  self.debug("PROCESSING PATHID", pathID);
  traverse(ast, {
    CallExpression(path) {
      self.debug("JSX PATH", path.node);
      self.debug(
        "JSX PATH.NODE.callee",
        t.isMemberExpression(path.node.callee)
      );
      self.debug(
        "JSX PATH.NODE.callee.object",
        t.isIdentifier(path.node.callee.object, { name: "React" })
      );
      self.debug(
        "JSX PATH.NODE.callee.property",
        t.isIdentifier(path.node.callee.property, { name: "createElement" })
      );
      if (
        t.isMemberExpression(path.node.callee) &&
        t.isIdentifier(path.node.callee.object, { name: "React" }) &&
        t.isIdentifier(path.node.callee.property, { name: "createElement" })
      ) {
        self.debug("JSX PATH ARGUMENTS", path.node.arguments);
        const [type, props, ...children] = path.node.arguments;

        self.debug("JSX PATH CHILDREN", children);
        self.debug("JSX PATH TYPE", type);
        self.debug("JSX PATH PROPS", props);
        self.debug(
          "JSX PATH PROPS.ISOBJECTEXPRESSION",
          t.isObjectExpression(props)
        );
        let attributes = [];
        if (t.isObjectExpression(props)) {
          props.properties.forEach((prop) => {
            attributes.push(
              t.jsxAttributes(t.jsxIdentifier(prop.key.name), prop.value)
            );
          });
        }

        let jsxChildren = [];
        children.forEach((child, i) => {
          if (t.isStringLiteral(child)) {
            jsxChildren.push(t.jsxText(child.value));
          } else if (t.isCallExpression(child)) {
            self.debug("NODE CHILD TYPE IS EXPRESSION");
            jsxChildren.push(t.jsxExpressionContainer(child));
          }
        });

        self.debug("JSX CONTRUCTED CHILDREN", jsxChildren);

        const idAsValueOrName = type?.value ? type.value : type.name;
        self.debug("JSX TYPE.VALUE", idAsValueOrName);

        const openingElement = t.jsxOpeningElement(
          t.jsxIdentifier(idAsValueOrName),
          attributes,
          false
        );

        const closingElement = t.jsxClosingElement(
          t.jsxIdentifier(idAsValueOrName)
        );
        self.debug("BEFORE PLACEMENT DONE");
        const jsxElement = t.jsxElement(
          openingElement,
          closingElement,
          jsxChildren,
          false
        );

        path.replaceWith(jsxElement);
        self.debug("REPLACEMENT IS DONE");
      }
    },
  });
};
methods.doImports = function (toImport) {
  const self = this;
  self.debug("TO IMPORT", toImport);
  return new Promise((res, rej) => {
    Promise.all(
      toImport.map((to, i) => {
        return new Promise((resolve, reject) => {
          self
            .dynamicImport(to.component)
            .then((imported) => {
              self.debug(
                "Module has successfully been imported:",
                to.component
              );
              self.debug("THE IMPORTED", imported);
              resolve({ path: to.path, module: imported });
            })
            .catch((err) => {
              self.debug(
                `importing module:${to}, has failed with an error:${err}`
              );
              reject(err);
            });
        });
      })
    ).then((completed) => {
      res(completed);
    });
  });
};
methods.doImport = function (toImport, all = false, check = true) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const loadFileSync = pao.pa_loadFileSync;
  // self.debug("TIIMPORT", toImport);
  return new Promise((resolve, reject) => {
    // const manifestFile = loadFileSync(toImport);
    // resolve({ module: imported.meta });
    loadFile(toImport, all, check)
      .then((imported) => {
        self.debug("Module has successfully been imported:", imported);
        resolve(imported);
      })
      .catch((err) => {
        self.debug(
          `importing module:${toImport}, has failed with an error:${err}`
        );
        reject(err);
      });
  });
};
methods.insertImportDeclarations = function (
  imports,
  shouldBuildComps = false,
  routesNode = null,
  compsNode = null
) {
  const self = this;
  const pao = self.pao;
  const template = self.template;
  const generate = self.generate;
  const t = self.t;
  const parser = self.parser;
  const saveToFile = pao.pa_saveToFile;

  //   self.debug("THE IMPORTS", imports);
  //   const buildImport = template(`
  //   let IMPORT_NAME = require(SOURCE);
  // `);

  //   let asty = "";

  //   asty = buildImport({
  //     IMPORT_NAME: t.identifier(`${imports[0].componentName}`),
  //     SOURCE: t.stringLiteral(`${imports[0].component}`),
  //   });
  return self.createDynamicLazyComponentsImports(imports, {
    shouldBuildComps,
    routesNode,
    compsNode,
  });
  // saveToFile(filePath, modifiedCode);
  // saveToFile(filePath, modifiedCode);
  // const ast = buildImport({
  //   IMPORT_NAME: t.identifier("myModule"),
  //   SOURCE: t.stringLiteral("my-module")
  // });

  // return {
  //   visitor: {
  //     Program(path, state) {
  //       const lastImport = path
  //         .get("body")
  //         .filter((p) => p.isImportDeclaration())
  //         .pop();

  //       if (lastImport) {
  //         imports.forEach((im, i) => {
  //           lastImport.insertAfter(myImport());
  //         });
  //       }
  //     },
  //   },
  // };
};
methods.insertIdentifierImportDeclarations = function (imports) {
  const self = this;

  const generate = self.generate;

  const parser = self.parser;

  let importString = imports.map((im, i) => {
    return `import {${im.ids.join(",")}} from "${im.source}";`;
  });

  let joinedString = `${importString.join("")}`;
  self.debug("ASTY JOINED ID STRING", joinedString);
  let ast = parser.parse(joinedString, { sourceType: "module" });
  let modifiedCode = generate(ast).code;
  self.debug("ASTY CODE ID THE IMPOT STRINGS", importString);
  self.debug("ASTY CODE ID", modifiedCode);
  self.debug();
  return modifiedCode;
};
methods.removeImportDeclarations = function (
  ast,
  toRemove,
  routesNode = null,
  compsNode = null
) {
  const self = this;
  const pao = self.pao;
  const template = self.template;
  const generate = self.generate;
  const t = self.t;
  const parser = self.parser;
  const traverse = self.traverse;
  let removedImportsIds = [];

  traverse(ast, {
    ImportDeclaration(path) {
      self.debug("AST NODE AFTER Import Node", path.node.source.value);
      self.debug("AST NODE SPECIFIER", path.node.specifiers[0]?.local.name);
      self.debug(
        "AST NODE AFTER Import Test",
        toRemove.indexOf(path.node.source.value) >= 0
      );
      if (toRemove.indexOf(path.node.source.value) >= 0) {
        let local = path.node.specifiers[0]?.local.name;
        removedImportsIds.push(local);
        if (routesNode) self.astDeleteNode(routesNode, compsNode, local);
        path.remove();
      }
    },
  });
  self.debug("AST NODE TO BE REMOVED IS", removedImportsIds);
};

methods.addImportLineToBuildJs = function () {
  const self = this;
  const pao = self.pao;
  const generate = self.generate;
  const parser = self.parser;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const cwd = getWorkingFolder();

  const buildPath = `${kotiiKotiiLandPath}/dev/build.js`;
  const buildPathFile = readFileSync(buildPath);
  let buildAst = parser.parse(buildPathFile, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  self.debug("AST FOR BUILD.JS");
  self.removeImportDeclarations(buildAst, ["./pages.js"]);
  const generateBuildAst = generate(buildAst).code;
  const buildImportString = self.insertIdentifierImportDeclarations([
    {
      source: "./pages.js",
      ids: ["routes", "comps"],
    },
  ]);
  let newFileContent = `${buildImportString} ${generateBuildAst}`;
  saveToFile(buildPath, newFileContent);
};

methods.createMetaAst = function (metaData) {
  const self = this;
  const pao = self.pao;
  const template = self.template;
  const generate = self.generate;
  const t = self.t;
  const parser = self.parser;
  const traverse = self.traverse;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const contains = pao.pa_contains;
  const cwd = getWorkingFolder();

  const filePath = `${kotiiKotiiLandPath}/dev/manifest.js`;
  const jsFile = readFileSync(filePath);
  let ast = parser.parse(jsFile, { sourceType: "module" });

  traverse(ast, {
    VariableDeclaration(path) {
      self.debug("AST NODE META ", path.node.declarations);
      self.debug("AST NODE META DECLARATION", path.node.declarations[0]);
      self.debug("AST NODE META ID", path.node.declarations[0].id);
      self.debug("AST NODE META INIT", path.node.declarations[0].init);
      const declarations = path.node.declarations;
      let targetDeclaration = null;
      declarations.forEach((declaration) => {
        if (declaration.id.name === "meta") targetDeclaration = declaration;
      });
      const declarationInit = targetDeclaration.init;
      declarationInit.properties.forEach((declarationInitProp) => {
        if (declarationInitProp.key.name === "comps") {
          let elements = [];
          // let merged = self.merge(elements, metaData.comps);
          // self.debug("AST NODE THE MERGED COMPS", merged);
          if (declarationInitProp.value.elements.length > 0) {
            declarationInitProp.value.elements.forEach((el) => {
              elements.push(el.value);
            });
            declarationInitProp.value.elements = [];
            elements = elements.filter((ele) => {
              if (metaData.comps.indexOf(ele) >= 0) return ele;
            });
          }

          metaData.comps.forEach((compName) => {
            if (!contains(elements, compName)) elements.push(compName);
          });
          self.debug("AST NODE ELEMENTS UPDATED AFTER", elements);
          elements.forEach((element) => {
            declarationInitProp.value.elements.push(t.stringLiteral(element));
          });
        }
        if (declarationInitProp.key.name === "compsPaths") {
          let elements = [];
          // let merged = self.merge(elements, metaData.comps);
          // self.debug("AST NODE THE MERGED COMPS", merged);
          if (declarationInitProp.value.elements.length > 0) {
            declarationInitProp.value.elements.forEach((el) => {
              elements.push(el.value);
            });
            declarationInitProp.value.elements = [];
            elements = elements.filter((ele) => {
              if (metaData.compsPaths.indexOf(ele) >= 0) return ele;
            });
          }

          metaData.compsPaths.forEach((compName) => {
            if (!contains(elements, compName)) elements.push(compName);
          });
          self.debug("AST NODE ELEMENTS UPDATED AFTER", elements);
          elements.forEach((element) => {
            declarationInitProp.value.elements.push(t.stringLiteral(element));
          });
        }
        if (declarationInitProp.key.name === "lastCompsCount") {
          declarationInitProp.value = t.NumericLiteral(metaData.lastCompsCount);
        }

        if (declarationInitProp.key.name === "compsSource") {
          declarationInitProp.value = t.stringLiteral(metaData.compsSource);
        }
      });
    },
  });

  saveToFile(filePath, generate(ast).code);
};

methods.watchFile = function (data, events, options = null) {
  const self = this;
  // const { watched, persistent = true, ignored = null, events = null } = payload;
  self.emit({
    type: "watch-target",
    data: {
      payload: { watched: data, events },
      callback: (data) => {
        self.debug("File watch set", data);
      },
    },
  });
};

methods.cacheData = function (dataToCache, cacheData) {
  const self = this;
  // const { watched, persistent = true, ignored = null, events = null } = payload;
  self.emit({
    type: "store-data-in-cache",
    data: {
      payload: { toCache: { key: dataToCache.key, data: cacheData } },
      callback: (data) => {
        self.debug("File ROUTER CACHE SAVING", data);
        self.checkForSavedFiles({ key: "TEST_CACHE_SAVE" }).then((checked) => {
          self.debug("SAVED CACHE", checked);
        });
      },
    },
  });
};

methods.updateCacheData = function (dataToCache) {
  const self = this;

  self.emit({
    type: "update-data-in-cache",
    data: {
      payload: {
        key: dataToCache.key,
        updateData: { action: dataToCache.action, update: dataToCache.update },
      },
      callback: (data) => {
        self.debug("Update callback", data.message);
      },
    },
  });
};

methods.checkForSavedFiles = function (check) {
  const self = this;
  const keys = self.keys;
  // const { SAVE_FILES_KEY } = keys;
  return new Promise((resolve, reject) => {
    self.emit({
      type: "get-data-from-cache",
      data: {
        payload: { key: check.key },
        callback: (keyGetResult) => {
          self.debug(`${check.key} RESULT`, keyGetResult);
          if (!keyGetResult) return resolve(false);
          if (!keyGetResult?.status) return resolve(false);
          resolve(true);
        },
      },
    });
  });
};
methods.watchFileAddEvent = function (changed) {
  const self = this;

  self.updateCacheData({
    key: self.keys.SAVE_FILES_KEY,
    update: changed,
    action: "add",
  });
};

methods.watchFileDeleteEvent = function (changed) {
  const self = this;

  self.updateCacheData({
    key: self.keys.SAVE_FILES_KEY,
    update: changed,
    action: "delete",
  });

  self.debug("fILES HAVE BEEN CHANGED", changed);
};

methods.merge = function (a, b, predicate = (a, b) => a === b) {
  const c = [...a]; // copy to avoid side effects
  // add all items from B to copy C if they're not already present
  b.forEach((bItem) =>
    c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)
  );
  return c;
};
methods.buildServerRoutes = function (routesSource, routesObject) {
  const self = this;

  self.debug("THe routes source", routesSource);
  // self.debug("THE ROUTESOBJECT", routesObject);

  let builtRoutes = routesSource.map((route) => {
    return {
      path: route.path,
      alias: route.path === "/" ? "/home" : null,
      view: true,
      viewty: "modular",
      viewso: "react",
      title: "REACT SERVE-SIDE RENDERING COMPONENT",
      method: "GET",
      type: "public",
      name: route.componentName,
      requiresData: route.getServerState,
      hasEffectsToRun: route.universalEffects ? true : false,
      effectsToRun: route.universalEffects,
    };
  });
  // self.debug("ROUTES BUILT", builtRoutes);
  return builtRoutes;
};

methods.getComponentServerState = function (path, routesObject) {
  const self = this;

  self.debug("THE ROUTESOBJECT", routesObject, path);

  let gotServerState = routesObject.filter((route) => {
    self.debug("THE ROUTE", route);
    if (
      route?.getServerState &&
      route.path.toLowerCase() === path.toLowerCase()
    ) {
      self.debug("THE ACTUAL DATA THE THING MATCHED");
      self.debug("THE CURRENT ROUTE", route);
      return route;
    }
  });

  self.debug("THE ACTUAL DATA GOT SERVER STATE", gotServerState);
  // self.debug("ROUTES BUILT", builtRoutes);
  return gotServerState.length > 0 ? gotServerState[0].getServerState : null;
};

methods.getAstRoutes = function (routesObject, renamesToAdd) {
  const self = this;
  let astRoutes = routesObject.filter((ro) => {
    let itemArray = renamesToAdd.filter((routePath) => {
      if (ro.componentPath === routePath) return true;
    });
    return itemArray.length > 0 ? itemArray[0] : false;
  });
  self.debug("THE AST ROUTES", astRoutes);
  return astRoutes;
};

methods.createStaticComponentsImports = function (imports) {
  const self = this;
  const pao = self.pao;
  const template = self.template;
  const generate = self.generate;
  const t = self.t;
  const parser = self.parser;
  const saveToFile = pao.pa_saveToFile;

  let constString = shouldBuildComps ? `const comps = {` : "";
  let importString = imports.map((im, i) => {
    if (shouldBuildComps) constString += `${im.componentName},`;
    return `import ${im.componentName} from "${im.component}";`;
  });
  // const myImport = template(`${importString.join(";")}`, {
  //   sourceType: "module",
  // });
  constString += shouldBuildComps ? "}" : "";
  let joinedString = shouldBuildComps
    ? `${importString.join("")} ${constString};`
    : `${importString.join("")}`;
  self.debug("ASTY JOINED STRING", joinedString);
  let ast = parser.parse(joinedString, { sourceType: "module" });
  !shouldBuildComps ? self.astAddNode(routesNode, compsNode, imports) : "";
  let modifiedCode = generate(ast).code;
  self.debug("ASTY CODE THE IMPOT STRINGS", importString);
  self.debug("ASTY CODE", modifiedCode);
  self.debug();
  return modifiedCode;
};

methods.createDynamicLazyComponentsImports = function (imports, options) {
  const self = this;
  const pao = self.pao;
  const template = self.template;
  const generate = self.generate;
  const t = self.t;
  const parser = self.parser;
  const saveToFile = pao.pa_saveToFile;
  const { shouldBuildComps, routesNode, compsNode } = options;

  const lazyLoadImport = t.importDeclaration(
    [
      t.importSpecifier(
        t.identifier("lazyLoad"), // local name
        t.identifier("lazyLoad") // imported name
      ),
    ],
    t.stringLiteral("kotii-lazy") // source module
  );

  let constString = shouldBuildComps ? `const comps = {` : "";
  const importDeclarations = imports.map((im) => {
    if (shouldBuildComps) constString += `${im.componentName},`;
    return t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier(im.componentName),
        t.callExpression(t.identifier("lazyLoad"), [
          t.arrowFunctionExpression(
            [],
            t.callExpression(t.import(), [t.stringLiteral(im.component)])
          ),
        ])
      ),
    ]);
  });

  let importsAst = t.file(t.program([lazyLoadImport, ...importDeclarations]));

  constString += shouldBuildComps ? "}" : "";
  let joinedString = shouldBuildComps ? `${constString};` : ``;
  self.debug("ASTY JOINED STRING", joinedString);
  let ast = parser.parse(joinedString, { sourceType: "module" });
  !shouldBuildComps ? self.astAddNode(routesNode, compsNode, imports) : "";
  let modifiedCode = generate(importsAst).code;
  self.debug("ASTY CODE THE IMPORT REACT LAZY");
  self.debug("ASTY CODE", modifiedCode);
  self.debug();
  return modifiedCode;
};

export default methods;
