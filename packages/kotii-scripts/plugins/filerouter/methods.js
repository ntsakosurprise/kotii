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
  self.debug("THE PROCESS", process);
  const pagesSource = filePaths.appSrc;
  const isProductionRequest = filePaths?.isProductionRequest || false;
  // const appManifest = filePaths?.appManifest;
  let manifestData = null;
  const cwd = getWorkingFolder();
  // !self.kotiiUtils ? await self.emit({ type: "get-kotii-utils" }) : "";
  //self.debug("EXECSYNC", execSync);
  //self.enableBabelRegister(cwd);
  const pagesPaths = self.getPages(
    `${filePaths.appSrc}/pages/**/*.{js,jsx,ts,tsx}`,
    { ignore: `${filePaths.appSrc}/pages/**/_*/**` }
  );

  const markdownPages = self.getPages(
    `${filePaths.appSrc}/pages/**/*.{md,mdx}`
  );
  let astFlowOptions = {
    isProductionRequest,
    pagesPaths,
    pagesSource,
    payload,
  };
  console.log("THE MARKDOWN THINGS", markdownPages, astFlowOptions);

  if (markdownPages?.length && markdownPages.length > 0) {
    self.processMarkdown(
      markdownPages,
      astFlowOptions,
      self.startAstFlow.bind(self),
      self.getItemPath.bind(self)
    );
  } else {
    self.startAstFlow(astFlowOptions);
  }

  // appManifest ? manifestData = loadFileSync(appManifest)) : null;
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
  isMarkdown,
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
    self.addImportLineToBuildJs(isMarkdown);
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

methods.getPages = function (filesToGet, ignore = false) {
  const self = this;
  self.debug("FILETS TO GET", filesToGet);
  self.debug("GLOBSYNC", self.globSync);
  const files = ignore
    ? self.globSync(filesToGet, ignore)
    : self.globSync(filesToGet);
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

  const {
    patternMatch,
    isBracketParams,
    componentName,
    componentPath,
    component,
  } = self.getItemPath(item);

  return new Promise((res, rej) => {
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
        // componentName:
        //   patternMatch === "/"
        //     ? "Home"
        //     : capitalizeFirstLetter(
        //         camelCase(splitPatternMatch[splitLen - 1].replace(/:/g, ""))
        //       ),
        // component: item,
        componentName,
        component,
        componentAbsolutePath: absSrc,
        componentPath,
        componentRaw: imported.default,
        getServerState,
        universalEffects,
        isBracketParams,
      });
    });
  });

  // fileAsComp = loadFileSync(item);
  // self.debug("THE FILE CODE", fileAsComp.default.toString());
  // await loadFile(item);
};
methods.getItemPath = function (item) {
  const self = this;
  const pao = self.pao;
  const capitalizeFirstLetter = pao.pa_capitalizeFirstLetter;
  const camelCase = pao.pa_camelCase;
  const extMatchPattern = /\.jsx|\.tsx|\.ts|\.js|\.md|\.mdx$/g;
  const bracketedPattern = /\/\[\[?\.{0,3}[^\[\]\/]+\]?\](?=\/|$)/; // Check if path has bracket-ed folders
  const replaceBracketed = /\[\[?\.{0,3}([^\[\]\/]+)\]?\]/g; // Replace brackets pattern
  let isBracketParams = false;

  let gotEndpoint =
    item.indexOf("pages") > 0
      ? item.slice(item.indexOf("pages"), item.length)
      : ""; // remove pages from path
  self.debug("Got endpoint", gotEndpoint);
  self.debug("GOT ENDPOINT PAGES REMOVED", gotEndpoint.replace("pages", ""));
  let patternMatch = gotEndpoint
    .replace("pages", "") // Replace pages with empty string
    .replace(extMatchPattern, "") // Replace extensions from path file name
    .replace(/index/g, ""); // Replace index file name with empty string

  if (bracketedPattern.test(patternMatch)) {
    console.log("THE BRACKETED PATH", patternMatch);
    patternMatch = patternMatch.replace(replaceBracketed, ":$1");
    isBracketParams = true;
    console.log("THE REPLACED", patternMatch);
  } else {
    patternMatch = patternMatch
      .replace(/\[(.*?)\]/g, ":$1") // Extract dynamic params and replace with colon and param name
      .replace(/\[\.{3}.+\]/, "*");
  }

  // .replace(/\/$/, "");
  if (!/^\/$/.test(patternMatch)) {
    self.debug("Removes leading forwarslash");
    patternMatch = patternMatch.replace(/\/$/, "");
  }
  let splitPatternMatch = patternMatch.split("/");
  let splitLen = splitPatternMatch.length;

  return {
    patternMatch,
    isBracketParams,
    componentName:
      patternMatch === "/"
        ? "Home"
        : capitalizeFirstLetter(
            camelCase(splitPatternMatch[splitLen - 1].replace(/:/g, ""))
          ),
    component: item,
    componentPath: item,
  };

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
  markdownRoutes,
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
  const isMarkdown = markdownRoutes ? true : false;
  self.debug("THE MARKDOWN ROUTES", markdownRoutes, isMarkdown);

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
  let isMarkdownDefined = false;

  traverse(ast, {
    VariableDeclaration(path) {
      if (path.node.type === "ImportDeclaration") return;
      let isRoutesDefined = false;
      let routesNode = null;
      let compsNode = null;
      let markdownNode = null;
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
          if (markdownRoutes) {
            if (dec.id.name === "markdownRoutes") {
              isMarkdownDefined = true;
              markdownNode = dec;
            }
          }
        });
        // let nodeIDName = nd.declarations[0].id.name;
        // if (nodeIDName === "mapsOfFiles" || nodeIDName === "surname") return nd;
      });

      if (isRoutesDefined) {
        const astActionsOptions = {
          ast,
          isMarkdown,
          routesNode,
          compsNode,
          markdownNode,
          objectToAdd,
          toRemove,
          shouldBuildComps: false,
        };
        if (objectToAdd && toRemove) {
          self.removeImportDeclarations(astActionsOptions);
          importStrings = self.insertImportDeclarations(astActionsOptions);
          path.stop();
        } else if (objectToAdd) {
          importStrings = self.insertImportDeclarations(astActionsOptions);

          path.stop();
        } else if (toRemove) {
          self.removeImportDeclarations(astActionsOptions);
          path.stop();
        } else if (isNewSource) {
          self.variableCreation({
            path,
            files: objectToAdd,
            replace: true,
          });
        }
      } else {
        self.variableCreation({
          path,
          files: objectToAdd,
        });
      }

      self.debug("THE MARKDOWN ROUTES.");
      if (markdownRoutes) {
        self.debug("THE MARKDOWN ROUTES.not ye");
        if (!isMarkdownDefined) {
          self.debug("THE MARKDOWN ROUTES.creating");
          self.createMarkdownVariable({ path, files: markdownRoutes });
        } else {
          self.astAddNodeMarkdown(markdownNode, markdownRoutes);
        }
      }
    },
  });

  self.debug("New AST", ast);
  importStrings = !isCompsDefined
    ? self.insertImportDeclarations(objectToAdd, true)
    : importStrings
    ? importStrings
    : "";
  self.addItemsToExportList(ast, ["markdownRoutes", "MarkdownRender"]);
  const { code: genCode } = generate(ast);
  const modifiedCode = genCode;

  self.debug("New AST genCode", genCode);
  self.debug("Modiefied code", modifiedCode);
  saveToFile(
    filePath,
    !importStrings ? modifiedCode : `${importStrings} ${modifiedCode}`
  );

  // if (!isCompsDefined || Object.keys(isCompsDefined).length <= 0)
  self.addImportLineToBuildJs(isMarkdown);
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
            t.identifier("isBracketParams"),
            t.booleanLiteral(adding?.isBracketParams || false)
          ),
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
methods.astAddNodeMarkdown = function (markdownNode, toAdd) {
  const self = this;
  const t = self.t;

  self.debug("AST NODE BEFORE LEN", toAdd);

  const initProps = markdownNode.init;

  initProps.elements.push(...toAdd);
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

methods.variableCreation = function (creationOptions) {
  const self = this;
  const t = self.t;
  const { path, files, replace = false } = creationOptions;
  let creationMethod = replace
    ? path.replaceWith.bind(path)
    : path.container.unshift.bind(path.container);

  creationMethod(
    t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier("routes"),
        t.arrayExpression([
          ...files.map((en, i) => {
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
methods.insertImportDeclarations = function (options) {
  const self = this;

  // const { toRemove, routesNode = null, compsNode = null } = options;

  //   self.debug("THE IMPORTS", imports);
  //   const buildImport = template(`
  //   let IMPORT_NAME = require(SOURCE);
  // `);

  //   let asty = "";

  //   asty = buildImport({
  //     IMPORT_NAME: t.identifier(`${imports[0].componentName}`),
  //     SOURCE: t.stringLiteral(`${imports[0].component}`),
  //   });

  if (!process.env?.useLazyLoad)
    return self.createStaticComponentsImports(options);
  return self.createDynamicLazyComponentsImports(options);
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
methods.removeImportDeclarations = function (options) {
  const self = this;
  const pao = self.pao;
  const template = self.template;
  const generate = self.generate;
  const t = self.t;
  const parser = self.parser;
  const traverse = self.traverse;
  let removedImportsIds = [];
  const { ast, toRemove, routesNode = null, compsNode = null } = options;

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

methods.addImportLineToBuildJs = function (isMarkdown = false) {
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
      ids: isMarkdown
        ? ["routes", "comps", "markdownRoutes", "MarkdownRender"]
        : ["routes", "comps"],
    },
  ]);
  self.debug("BUILD IMPORT STRING", buildImportString, isMarkdown);
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

methods.createStaticComponentsImports = function (imports, options) {
  const self = this;
  const pao = self.pao;
  const template = self.template;
  const generate = self.generate;
  const t = self.t;
  const parser = self.parser;
  const saveToFile = pao.pa_saveToFile;
  const {
    shouldBuildComps = false,
    routesNode,
    compsNode,
    isMarkdown = false,
  } = options;

  // const markdownRenderImport = isMarkdown
  //   ? t.importDeclaration(
  //       [
  //         t.importSpecifier(
  //           t.identifier("MarkdownRender"), // local name
  //           t.identifier("MarkdownRender") // imported name
  //         ),
  //       ],
  //       t.stringLiteral("kotii-react-modules") // source module
  //     )
  //   : null;

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

methods.createDynamicLazyComponentsImports = function (options) {
  const self = this;
  const pao = self.pao;
  const template = self.template;
  const generate = self.generate;
  const t = self.t;
  const parser = self.parser;
  const saveToFile = pao.pa_saveToFile;
  const {
    shouldBuildComps = false,
    routesNode,
    compsNode,
    isMarkdown = false,
    objectToAdd: imports,
  } = options;

  const lazyLoadImport = t.importDeclaration(
    [
      t.importSpecifier(
        t.identifier("lazyLoad"), // local name
        t.identifier("lazyLoad") // imported name
      ),
    ],
    t.stringLiteral("kotii-lazy") // source module
  );

  const markdownRenderImport = isMarkdown
    ? t.importDeclaration(
        [
          t.importSpecifier(
            t.identifier("MarkdownRender"), // local name
            t.identifier("MarkdownRender") // imported name
          ),
        ],
        t.stringLiteral("../../react-components/index.jsx") // source module
      )
    : null;

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

  let importsAst = t.file(
    t.program(
      !isMarkdown
        ? [lazyLoadImport, ...importDeclarations]
        : [markdownRenderImport, lazyLoadImport, ...importDeclarations]
    )
  );

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
methods.startAstFlow = function (options) {
  const self = this;
  const {
    isProductionRequest,
    pagesPaths,
    pagesSource,
    payload,
    markdown = null,
  } = options;
  console.log("START AST PROCESS OPTIONS", options);
  if (isProductionRequest) {
    return self
      .getRoutesHelper(pagesPaths, pagesSource)
      .then((routesObject) => {
        let routes = self.buildServerRoutes(
          !markdown ? routesObject : [...routesObject, ...markdown]
        );
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
        let aggrigatedRoutes = !markdown
          ? routesObject
          : [...routesObject, ...markdown];

        let sendToRequestor = {
          message: "Routes Configured",
          resources: payload.path,
          routes: self.buildServerRoutes(aggrigatedRoutes),
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
            markdownRoutes: markdown || null,
          });
          return self.callback(sendToRequestor);
        } else {
          self.addOrRemoveByAST({
            pagesPaths,
            compsPaths,
            pagesSource,
            routesObject,
            compsPagesEqual: lastCompsCount === pagesPathsLen,
            isMarkdown: markdown ? true : false,
            markdownRoutes: markdown || null,
          });
          return self.callback(sendToRequestor);
        }
      })
      .catch((err) => {
        self.debug("MANIFEST.JS: ERROR IMPORTING MANIFEST-JS", err);
      });
  }
};

methods.processMarkdown = function (markdownPages, options, doAfter, doDuring) {
  const self = this;
  self.emit({
    type: "process-markdown",
    data: {
      payload: { markdownPages },
      doDuring,
      callback: (data) => {
        self.debug("THE MARK-DOWN", data.message);
        doAfter({ ...options, markdown: data });
      },
    },
  });
};

methods.createMarkdownVariable = function (options) {
  const self = this;
  const t = self.t;
  const { path, files, replace = false } = options;
  let creationMethod = replace
    ? path.replaceWith.bind(path)
    : path.container.unshift.bind(path.container);
  //const files = [{ path: "mypath", component: "myComponent" }];
  // self.debug("THE CREATING METHOD", creationMethod);
  // if(replace)
  console.log("CREATE MARKDOWN VARIALBLE", files);
  const astedMarkdownRoutes = self.createMarkdownRoutesAst({ files });
  creationMethod(
    t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier("markdownRoutes"),
        t.arrayExpression([...astedMarkdownRoutes])
      ),
    ])
  );
  path.stop();
};

methods.createMarkdownRoutesAst = function (options) {
  const self = this;
  const t = self.t;
  const { files } = options;
  const astUtils = self.astMarkdownUtils();

  const routeNodes = files.map((route) => {
    console.log("THE ROUTE", route);
    console.log("THE PARSED MARKDOWN", route.markdownData[0].parsedMarkdown);
    console.log(
      "THE PARSED MARKDOWN.special",
      route.markdownData[0].parsedMarkdown?.specialContent?.special
    );
    console.log(
      "THE PARSED MARKDOWN",
      route.markdownData[0].parsedMarkdown?.specialContent?.file
    );
    try {
      return t.objectExpression(
        [
          ...astUtils.parseForRoutes(t, route),
          ...astUtils.parseMarkdownData(t, route.markdownData, astUtils),
          astUtils.parseMarkdownComponents(t, route?.markdownComponents),
          // Create for mardown data
        ].filter((n) => n !== undefined && n !== null)
      );
    } catch (error) {
      console.log("THE BUILD CATCH ERROR", error);
    }
  });

  return routeNodes;
};
methods.doMarkdownData = function (t, md) {
  const self = this;

  t.objectProperty(
    t.identifier("parsedMarkdown"),
    t.objectExpression([
      // metaDataKeys
      // t.objectProperty(
      //   t.identifier("metaDataKeys"),
      //   t.objectExpression([
      //     t.objectProperty(
      //       t.identifier("title"),
      //       t.stringLiteral(md.parsedMarkdown?.metaDataKeys?.title || "")
      //     ),
      //     t.objectProperty(
      //       t.identifier("header"),
      //       t.stringLiteral(md.parsedMarkdown?.metaDataKeys.header)
      //     ),
      //     t.objectProperty(
      //       t.stringLiteral("---,title"),
      //       t.stringLiteral("A Markdown test for Kotii-markdown")
      //     ),
      //   ])
      // ),
      //
      // md.parsedMarkdown?.description
      //   ? t.objectProperty(
      //       t.identifier("description"),
      //       t.stringLiteral(md.parsedMarkdown?.description || "")
      //     )
      //   : null,
      // specialContent (just the first element for example; replicate for all)
      (md?.parsedMarkdown?.specialContent && md.specialContent?.length > 0) ??
        t.objectProperty(
          t.identifier("specialContent"),
          t.arrayExpression(
            md.parsedMarkdown.specialContent.map((spec) => {
              console.log("The special", spec);
              return t.objectExpression(
                t.objectProperty(
                  t.identifier("special"),
                  t.objectExpression([
                    t.objectProperty(
                      t.identifier("component"),
                      t.stringLiteral(spec.special?.component || "")
                    ),
                  ])
                ),
                t.objectProperty(
                  t.identifier("file"),
                  t.objectExpression([
                    t.objectProperty(
                      t.identifier("name"),
                      t.stringLiteral(
                        md.parsedMarkdown.specialContent?.file?.name || ""
                      )
                    ),
                    t.objectProperty(
                      t.identifier("contents"),
                      t.stringLiteral(
                        md.parsedMarkdown.specialContent?.file?.contents || ""
                      )
                    ),
                    t.objectProperty(
                      t.identifier("imports"),
                      t.stringLiteral(
                        md.parsedMarkdown.specialContent?.file?.imports || ""
                      )
                    ),
                    t.objectProperty(
                      t.identifier("componentName"),
                      t.stringLiteral(
                        md.parsedMarkdown.specialContent?.file?.componentName ||
                          ""
                      )
                    ),
                  ])
                )
              );
            })
          )
        ),
      // markDownSplit
      t.objectProperty(
        t.identifier("markDownSplit"),
        t.arrayExpression(
          md.parsedMarkdown.markDownSplit.map((sti) =>
            t.stringLiteral(sti || "")
          )
        )
      ),
      //html
      t.objectProperty(
        t.identifier("html"),
        t.arrayExpression(
          md.parsedMarkdown.html.map((sti) => t.stringLiteral(sti || ""))
        )
      ),
      //toc
      md?.toc && md.toc.length > 0
        ? t.objectProperty(
            t.identifier("toc"),
            t.arrayExpression(
              md.parsedMarkdown.toc.map((tocItem) => {
                return t.objectExpression([
                  t.objectProperty(
                    t.identifier("id"),
                    t.stringLiteral(tocItem?.id || "")
                  ),
                  t.objectProperty(
                    t.identifier("children"),
                    t.arrayExpression([
                      ...toc.children.map((chi) => {
                        t.objectExpression([
                          t.objectProperty(
                            t.identifier("id"),
                            t.stringLiteral(chi?.id || "")
                          ),
                        ]);
                      }),
                    ])
                  ),
                ]);
              })
            )
          )
        : null,
    ])

    // You can then insert `astObject` wherever a Babel `ObjectExpression` node is needed
    // For example:
    // path.replaceWith(astObject);
    // or use it as an initializer to a variable:
    // t.variableDeclaration("const", [
    //   t.variableDeclarator(t.identifier("myData"), astObject)
    // ]);
  );
};

methods.astMarkdownUtils = function () {
  const self = this;
  const t = self.t;
  return {
    parseForRoutes: (t, route) => {
      return [
        t.objectProperty(t.identifier("path"), t.stringLiteral(route.path)),
        t.objectProperty(
          t.identifier("componentName"),
          t.stringLiteral(route.componentName)
        ),
        t.objectProperty(
          t.identifier("component"),
          t.stringLiteral(route.component)
        ),
        t.objectProperty(
          t.identifier("componentPath"),
          t.stringLiteral(route.componentPath || "")
        ),
        t.objectProperty(
          t.identifier("patternMatch"),
          t.stringLiteral(route.patternMatch || "")
        ),
        t.objectProperty(
          t.identifier("isBracketParams"),
          t.booleanLiteral(route.isBracketParams)
        ),
      ];
    },
    parseMarkdownData: (t, markdownData, utils) => {
      return [
        t.objectProperty(
          t.identifier("markdownData"),
          t.arrayExpression(
            markdownData.map((md) => {
              console.log("Mardwon is running", md?.parsedMarkdown);
              let parseMarkdownDataResults = utils.parseMarkdownDataMeta(t, md);
              let parseMarkdownDataParseResults = utils.parseMarkdownDataParsed(
                t,
                md.parsedMarkdown,
                utils
              );
              console.log("THE PARSE DATA RESULTS", parseMarkdownDataResults);
              console.log(
                "THE PARSE PARSE PARSE RESULTS",
                parseMarkdownDataParseResults
              );
              return t.objectExpression([
                ...parseMarkdownDataResults,
                t.objectProperty(
                  t.identifier("parsedMarkdown"),
                  t.objectExpression([...parseMarkdownDataParseResults])
                ),
              ]);
              // self.doMarkdownData(),
            })
          )
        ),
      ];
    },
    parseMarkdownDataMeta: (t, md) => {
      return [
        t.objectProperty(
          t.identifier("fileName"),
          t.stringLiteral(md.fileName || "")
        ),
        t.objectProperty(
          t.identifier("locale"),
          t.stringLiteral(md.locale || "")
        ),
        t.objectProperty(
          t.identifier("rawMdText"),
          t.stringLiteral(md.rawMdText || "")
        ),
      ];
    },
    parseMarkdownComponents: (t, markdownComponents) => {
      return markdownComponents && Object.keys(markdownComponents).length > 0
        ? t.objectProperty(
            t.identifier("markdownComponents"),
            t.objectExpression(
              Object.entries(markdownComponents).map(([key, value]) =>
                t.objectProperty(t.identifier(key), t.stringLiteral(value))
              )
            )
          )
        : null;
    },
    parseMarkdownDataParsed: (t, md, utils) => {
      console.log("PARSED MARKDOWN DATA", md);
      const metaNode = utils.parsedMetakKeys(t, md.metaDataKeys, utils);
      const htmlNode =
        md?.html && md.html.length > 0 ? utils.parsedHtml(t, md.html) : null;
      const specialNode =
        md?.specialContent && md.specialContent !== "null"
          ? utils.parsedSpecial(t, md.specialContent)
          : null;
      const markdownSplit = utils.parsedMarkdownSplit(t, md.markDownSplit);
      const tocNode =
        md?.toc && md.toc.length > 0 ? utils.parsedToc(t, md.toc) : null;

      let nodes = [
        metaNode,
        htmlNode,
        specialNode,
        markdownSplit,
        tocNode,
      ].filter((n) => n !== undefined && n !== null);

      return nodes;
    },
    parsedMetakKeys: (t, metaDataKeys) => {
      //metaDataKeys
      let metaKey = t.objectProperty(
        t.identifier("metaDataKeys"),
        t.objectExpression([
          t.objectProperty(
            t.identifier("title"),
            t.stringLiteral(metaDataKeys?.title || "")
          ),
          t.objectProperty(
            t.identifier("header"),
            t.stringLiteral(metaDataKeys.header || "")
          ),
          // t.objectProperty(
          //   t.stringLiteral("---,title"),
          //   t.stringLiteral("A Markdown test for Kotii-markdown")
          // ),
        ])
      );
      console.log("THE META KEY", metaKey);
      return metaKey;
    },
    parsedSpecial: (t, specialContent) => {
      console.log("THE SPECIAL CONTENT", specialContent);
      return t.objectProperty(
        t.identifier("specialContent"),
        t.arrayExpression(
          specialContent.map((spec) => {
            console.log("The special", spec);
            let specialItem = t.objectExpression([
              t.objectProperty(
                t.identifier("special"),
                t.objectExpression([
                  t.objectProperty(
                    t.identifier("component"),
                    t.stringLiteral(spec.special?.component || "")
                  ),
                ])
              ),
              t.objectProperty(
                t.identifier("file"),
                t.objectExpression([
                  t.objectProperty(
                    t.identifier("name"),
                    t.stringLiteral(spec.file?.name || "")
                  ),
                  t.objectProperty(
                    t.identifier("contents"),
                    t.stringLiteral(spec?.file?.contents || "")
                  ),
                  t.objectProperty(
                    t.identifier("imports"),
                    t.stringLiteral(spec?.file?.imports || "")
                  ),
                  t.objectProperty(
                    t.identifier("componentName"),
                    t.stringLiteral(spec?.file?.componentName || "")
                  ),
                ])
              ),
            ]);
            console.log("THE SPECIAL ITEM", specialItem);
            return specialItem;
          })
        )
      );
    },
    parsedToc: (t, toc) => {
      //metaDataKeys
      return t.objectProperty(
        t.identifier("toc"),
        t.arrayExpression(
          toc.map((tocItem) => {
            return t.objectExpression([
              t.objectProperty(
                t.identifier("id"),
                t.stringLiteral(tocItem?.id || "")
              ),
              t.objectProperty(
                t.identifier("children"),
                t.arrayExpression(
                  ...tocItem.children.map((chi) => {
                    t.objectExpression([
                      t.objectProperty(
                        t.identifier("id"),
                        t.stringLiteral(chi?.id || "")
                      ),
                    ]);
                  })
                )
              ),
            ]);
          })
        )
      );
    },
    parsedHtml: (t, html) => {
      console.log("HTML RUNS", html);
      return t.objectProperty(
        t.identifier("html"),
        t.arrayExpression(
          html
            .map((sti) => {
              let astHmtlObject = null;
              if (typeof sti === "string") {
                if (sti.trim()) astHmtlObject = t.stringLiteral(sti || "");
              } else {
                let identifier = Object.keys(sti)[0];
                astHmtlObject = t.objectExpression([
                  t.objectProperty(
                    t.identifier(identifier),
                    t.stringLiteral(sti[identifier])
                  ),
                ]);
              }
              console.log("HTML AST OBJECT", astHmtlObject);
              return astHmtlObject;
            })
            .filter(Boolean)
        )
      );
    },
    parsedMarkdownSplit: (t, markDownSplit) => {
      //metaDataKeys
      return t.objectProperty(
        t.identifier("markDownSplit"),
        t.arrayExpression(
          markDownSplit.map((sti) => {
            return t.stringLiteral(sti || "");
          })
        )
      );
    },
  };
};

methods.addItemsToExportList = function (ast, exportList) {
  const self = this;
  const t = self.t;
  const traverse = self.traverse;

  traverse(ast, {
    ExportNamedDeclaration(path) {
      if (!path.node.source) {
        const names = path.node.specifiers.map((s) => s.exported.name);
        exportList.forEach((item) => {
          if (!names.includes(item)) {
            path.node.specifiers.push(
              t.exportSpecifier(t.identifier(item), t.identifier(item))
            );
          }
        });
      }
    },
  });
};

export default methods;
