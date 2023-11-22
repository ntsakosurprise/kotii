const methods = {};

methods.init = function () {
  console.log("Filerouter has been initialised");

  this.listens({
    "create-file-routes": this.handleFileRoutes.bind(this),
  });
};
methods.handleFileRoutes = async function (data) {
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const isExistingDir = pao.pa_isExistingDir;
  // console.log("HANDLE FILE ROUTES DATA", data);
  const { payload } = data;
  const { path: filePaths } = payload;
  console.log("FILE PATHS", filePaths);
  const pagesSource = filePaths.appSrc;
  const cwd = getWorkingFolder();
  //console.log("EXECSYNC", execSync);
  //self.enableBabelRegister(cwd);
  const pagesPaths = self.getPages(
    `${filePaths.appSrc}/pages/**/*.{js,jsx,ts,tsx}`
  );

  const filePath = `${cwd}/manifest.js`;
  if (!isExistingDir(filePath)) {
    const routesObject = self.getRoutesHelper(pagesPaths, pagesSource);
    self.addToAST(routesObject, pagesPaths);
  } else {
    self
      .doImport(filePath)
      .then((imported) => {
        console.log("Impored", imported.module.comps);
        let meta = imported.module;
        const { lastCompsCount = 0, compsSource, compsPaths } = meta;
        const pagesPathsLen = pagesPaths.length;
        let renamesToAdd = [];
        let renamesToRemove = [];

        if (compsSource !== pagesSource) {
          const routesObject = self.getRoutesHelper(pagesPaths, pagesSource);
          return self.addToAST(routesObject, pagesPaths, pagesSource);
        }
        if (lastCompsCount === pagesPathsLen) {
          pagesPaths.forEach((pPath) => {
            if (compsPaths.indexOf(pPath) < 0) renamesToAdd.push(pPath);
          });
          compsPaths.forEach((pPath) => {
            if (pagesPaths.indexOf(pPath) < 0) renamesToRemove.push(pPath);
          });
          if (renamesToAdd.length === 0 && renamesToRemove === 0) return;
          if (renamesToAdd.length > 0 && renamesToRemove > 0) {
            const routesObject = self.getRoutesHelper(
              renamesToAdd,
              pagesSource
            );
            self.addToAST(routesObject, compsPaths, renamesToRemove);
          } else if (renamesToAdd.length > 0) {
            const routesObject = self.getRoutesHelper(
              renamesToAdd,
              pagesSource
            );
            self.addToAST(routesObject, compsPaths);
          } else if (renamesToRemove.length > 0) {
            self.addToAST(null, compsPaths, toRemove);
          }
        } else if (lastCompsCount < pagesPathsLen) {
          let toAdd = [];
          pagesPaths.forEach((pPath) => {
            if (compsPaths.indexOf(pPath) < 0) toAdd.push(pPath);
          });
          const routesObject = self.getRoutesHelper(toAdd, pagesSource);
          self.addToAST(routesObject, compsPaths);
        } else {
          let toRemove = [];
          compsPaths.forEach((pPath) => {
            if (pagesPaths.indexOf(pPath) < 0) toRemove.push(pPath);
          });
          // const routesObject = self.getRoutesHelper(toAdd, pagesSource);
          self.addToAST(null, compsPaths, toRemove);
        }
      })
      .catch((err) => {
        console.log("ERR WITH IMPORT", err);
      });
  }

  // const jsFile = readFileSync(filePath).replace(/;/g, "");

  //self.enableBabelRegister(filePaths.appSrc);
  // const hasCreatedFile = await self.checkForSavedFiles();
  // if (!hasCreatedFile) return;
  // self.cacheData({ key: "TEST_CACHE_SAVE" }, ["TEST_CACHE_SAVING"]);
  // self.checkForSavedFiles({ key: "TEST_CACHE_SAVE" }).then((checked) => {
  //   console.log("SAVED CACHE", checked);
  // });
  // self.watchFile(
  //   { added: false, filePath: "" },
  //   { add: self.watchFileAddEvent, delete: self.watchFileDeleteEvent }
  // );
  ///console.log(maniac);

  // console.log("HASCREATEDFILE", hasCreatedFile);
  // console.log("");
  // const pagesPaths = self.getPages(
  //   `${filePaths.appSrc}/pages/**/*.{js,jsx,ts,tsx}`
  // );
  // const routesObject = self.createRouterComponents(
  //   pagesPaths,
  //   filePaths.appSrc
  // );
  // self
  //   .doImports(routesObject)
  //   .then((completed) => {
  //     console.log("MODULE IMPORTES SUCCESSFUL", completed);
  //   })
  //   .catch((err) => {
  //     consoole.log("THERE WAS AN ERROR IMPORTING", err);
  //   });

  // const sourceCodes = self.getSourceCodes(pagesPaths);
  // self.parseJsxToReact(sourceCodes);
  // console.log("PAGES PATHS", pagesPaths);
  //console.log("Routes OBject", routesObject);

  // console.log(
  //   "PROCESSED",
  //   self.createRouterComponents(pagesPaths, data.payload.path.appSrc)
  // );
};
methods.getPages = function (filesToGet) {
  const self = this;
  console.log("FILETS TO GET", filesToGet);
  console.log("GLOBSYNC", self.globSync);
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

  //console.log("SOURCES AND THEIR CODES", sourcesCodesList);
};
methods.getRoutesHelper = function (paths, source) {
  const self = this;
  return self.createRouterComponents(paths, source);
};
methods.createRouterComponents = function (maps, pathy) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const saveToFile = pao.pa_saveToFile;
  const makeFolderSync = pao.pa_makeFolderSync;
  const isExistingDir = pao.pa_isExistingDir;
  console.log("pages paths", maps);
  // const dirPath = `${pathy}/components/system`;
  //const dirPath = `${pathy}/components/system`;
  //if (!isExistingDir(dirPath)) makeFolderSync(dirPath);
  let compsMaps = maps.map((contextModule) => {
    // const readFile = loadFile(contextModule);
    // console.log("COntext Module", contextModule);
    // console.log("our path", contextModule.replace(/pages/g, "_pages"));
    // saveToFile(contextModule.replace(/pages/g, "_pages"), readFile);
    // self.buildFile(contextModule);
    return self.getItemPathAndFile(contextModule);
  });

  // if (!isExistingDir(`${dirPath}/maps.js`))
  console.log("MAPS OF FILES", compsMaps);
  console.log("Maps of files stringified", JSON.stringify(compsMaps));
  console.log("THE UTIL");
  // compsMaps.map((co, i) => {
  //   console.log("COMPONENTS INSPECTED", util.inspect(co.component));
  // });
  // console.log("COMPONENTS INSPECTED");
  // console.log("THE COMPS", `${compsMaps}`);
  // let builtCode = self.buildStringCode(compsMaps);
  // console.log("ABOUT TO SAVE THE FILE", builtCode.code);

  // saveToFile(`${dirPath}/maps.js`, builtCode.code);

  return compsMaps;
};
methods.getItemPathAndFile = function (item) {
  console.log("THE PAGES MAPS ITEM", item);
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const loadFileSync = pao.pa_loadFileSync;
  const readFileSync = pao.pa_readFileSync;
  const capitalizeFirstLetter = pao.pa_capitalizeFirstLetter;
  const camelCase = pao.pa_camelCase;
  const extMatchPattern = /\.js|ts|tsx|jsx$/g;
  let fileAsComp = null;

  let gotEndpoint =
    item.indexOf("pages") > 0
      ? item.slice(item.indexOf("pages"), item.length)
      : "";
  console.log("Got endpoint", gotEndpoint);
  console.log("GOT ENDPOINT PAGES REMOVED", gotEndpoint.replace("pages", ""));
  let patternMatch = gotEndpoint
    .replace("pages", "")
    .replace(extMatchPattern, "")
    .replace(/index/g, "")
    .replace(/\[(.+)\]/g, ":$1")
    .replace(/\[\.{3}.+\]/, "*");
  // .replace(/\/$/, "");
  if (!/^\/$/.test(patternMatch)) {
    console.log("Removes leading forwarslash");
    patternMatch = patternMatch.replace(/\/$/, "");
  }
  console.log("THE PAGES matched", patternMatch);
  console.log("THE ITEM", item);

  // fileAsComp = loadFileSync(item);
  // console.log("THE FILE CODE", fileAsComp.default.toString());
  // await loadFile(item);
  let splitPatternMatch = patternMatch.split("/");
  let splitLen = splitPatternMatch.length;

  return {
    path: patternMatch,
    //component: fileAsComp?.default ? fileAsComp.default : fileAsComp,
    componentName:
      patternMatch === "/"
        ? "Home"
        : capitalizeFirstLetter(
            camelCase(splitPatternMatch[splitLen - 1].replace(/:/g, ""))
          ),
    component: item,
  };
};
methods.dynamicImport = async function (module) {
  const self = this;
  console.log("THE DYNAMI GOT A CALL");
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

  // console.log("babel", babel);

  // Ignore non-JS files and test scripts
  if (filename) {
    if (filename) {
      options.filename = filename;
      options.presets = ["@babel/preset-react", "@babel/preset-env"];

      console.log("THE FILE NAME", options);
      const result = babel.transform(content, options);
      console.log("BABEL TRANSFORMED", result);

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
  // console.log("babel", babel);

  // Ignore non-JS files and test scripts

  options.presets = ["@babel/preset-env", "@babel/preset-react"];
  // options.output = destination

  console.log("THE FILE NAME", options);
  const result = babel.transformSync(code, options);
  console.log("BABEL TRANSFORMED", result);

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
        console.log("CODE CONVERTED TO REACT", data.message);
        const { convertedCode } = data;
        // const codeToSave = code.code;
        const updatedSource = convertedCode.map((cCode, i) => {
          const altPath = cCode.path.replace(".jsx", ".js");
          saveToFile(altPath, cCode.modifiedCode);
          return { ...cCode, altPath, loadedFile: loadFileSync(altPath) };
        });

        let readFileContent = readFileSync(`${getWorkingFolder()}/build.js`);
        readFileContent =
          readFileContent + `const mapsOfComps = ${updatedSource}`;
        const bundleCode = self.babel.transformSync(readFileContent, {});
        console.log("BUNDLE CODE", bundleCode);
        // saveToFile(
        //   `${getWorkingFolder()}/bundle.js`,
        //   `const toSave = ${updatedSource}`
        // );

        // console.log("UPDATED source", updatedSource);
        // console.log("THE ROOT DIR", getWorkingFolder());
        // loadFile(fileToSaveTo)
        //   .then((loadedFile) => {
        //     console.log("THE LOADED FILE", loadedFile);
        //     console.log("THE CODE TO SAVE", userCode);
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

        //     //console.log("LEBAB ES6", lebabTransformed);
        //   })
        //   .catch((err) => {
        //     console.log("THERE WAS AN ERROR LOADING REACT FILE", err);
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
methods.addToAST = function (objectToAdd, pagesPaths) {
  console.log("addTOast gets a call");
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
  //console.log("EXECSYNC", execSync);
  //self.enableBabelRegister(cwd);

  const filePath = `${cwd}/build.js`;
  const jsFile = readFileSync(filePath).replace(/;/g, "");
  let ast = parser.parse(jsFile, { sourceType: "module", plugins: ["jsx"] });
  let isCompsDefined = false;
  // console.log("jsFile replaced", jsFile);
  console.log("THE VALUE OF TRAVERSE", traverse);
  traverse(ast, {
    VariableDeclaration(path) {
      console.log("TRAVERSE ENTERS", path.container);
      // if (!t.isIdentifier(path.node)) return;
      //console.log("PATH AFTER CHECK", path.node.type);
      // if (t.isIdentifier(path.node, { name: "surname" })) {
      console.log("THE NODE TYPE", path.node.type);
      console.log(
        "THE NODE TYPE IS IMPORT",
        path.node.type === "ImportDeclaration"
      );
      if (path.node.type === "ImportDeclaration") return;
      let isRoutesDefined = false;

      path.container.forEach((nd, i) => {
        if (nd.type !== "VariableDeclaration") return false;

        let declarations = nd.declarations;
        declarations.forEach((dec, i) => {
          if (dec.id.name === "routes") {
            isRoutesDefined = true;
          }
          if (dec.id.name === "comps") isCompsDefined = true;
        });
        // let nodeIDName = nd.declarations[0].id.name;
        // if (nodeIDName === "mapsOfFiles" || nodeIDName === "surname") return nd;
      });

      if (isRoutesDefined) {
        self.variableCreation(path, t, objectToAdd, parser, true);
      } else {
        self.variableCreation(path, t, objectToAdd, parser);
      }

      //}

      // if (t.isImportDeclaration(path.node)) {
      //   path.node.name = "x";
      // }
    },
  });
  console.log("New AST", ast);
  let stringCode = !isCompsDefined
    ? self.insertImportDeclarations(objectToAdd)
    : "";
  const { code: genCode } = generate(ast);
  const modifiedCode = genCode;

  console.log("New AST genCode", genCode);
  console.log("Modiefied code", modifiedCode);
  saveToFile(
    filePath,
    isCompsDefined ? modifiedCode : `${stringCode} ${modifiedCode}`
  );
  //self.cacheData(self.keys.CACHE_ROUTES_PATHS_KEY, pagesPaths);
  self.cacheData(self.keys.SAVE_FILES_KEY, { added: [], deleted: [] });
  self.watchFile(pagesPaths, {
    add: self.watchFileAddEvent,
    delete: self.watchFileDeleteEvent,
  });
  // let commandToRun = "build:dev";
  // let bat = execSync("yarn", ["run", `${commandToRun}`], { cwd: cwd });
  // //console.log("BUILD SPAWN", buildSpawn);
  // bat.stdout.on("data", (data) => {
  //   console.log(data.toString());
  // });

  // bat.stderr.on("data", (data) => {
  //   console.error(data.toString());
  // });

  // bat.on("exit", (code) => {
  //   console.log(`Child exited with code ${code}`);
  // });
  // buildSpawn.on("data", (data) => {
  //   console.log("SPAWN DATA", data);
  // });
  //execSync("yarn build:dev");

  //console.log("file source code", fileCode);

  //   .then((file) => {
  //     console.log("I got the file", file);
  //     let fileCode = parser.parse(file)
  //   })
  //   .catch((err) => {
  //     console.log("THE ERR", err);
  //   });
  // console.log("THE FILE PATH", jsFile);
};

methods.variableCreation = function (path, t, files, parser, replace = false) {
  const self = this;
  let creationMethod = replace
    ? path.replaceWith.bind(path)
    : path.container.unshift.bind(path.container);
  //const files = [{ path: "mypath", component: "myComponent" }];
  // console.log("THE CREATING METHOD", creationMethod);
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
            // console.log("FUNCTION AS A STRING", functionAsString);
            // let funcAst = parser.parse(functionAsString, {
            //   sourceType: "module",
            // });
            //console.log("FUNCTION STRING", functionAsString);
            // let funcAst = parser.parse(en.component, {
            //   sourceType: "module",
            //   plugins: ["jsx"],
            // });
            // console.log("FUNC AST", funcAst);
            // console.log("FUNCK FIRST NODE");
            // self.funcToJsx(funcAst, en.path);
            // let functionInContext = funcAst.program.body[0];
            // console.log("FUNCK FIRST NODE", functionInContext);
            // let funcName = functionInContext.id.name;
            // let funcBody = functionInContext.body;
            // console.log("AST for func", funcAst.program.body);
            // console.log("AST FUNCTION PARTS", funcName, funcBody);
            // console.log("THE FUNCTION NAME", funcName);

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
  console.log("PROCESSING PATHID", pathID);
  traverse(ast, {
    CallExpression(path) {
      console.log("JSX PATH", path.node);
      console.log(
        "JSX PATH.NODE.callee",
        t.isMemberExpression(path.node.callee)
      );
      console.log(
        "JSX PATH.NODE.callee.object",
        t.isIdentifier(path.node.callee.object, { name: "React" })
      );
      console.log(
        "JSX PATH.NODE.callee.property",
        t.isIdentifier(path.node.callee.property, { name: "createElement" })
      );
      if (
        t.isMemberExpression(path.node.callee) &&
        t.isIdentifier(path.node.callee.object, { name: "React" }) &&
        t.isIdentifier(path.node.callee.property, { name: "createElement" })
      ) {
        console.log("JSX PATH ARGUMENTS", path.node.arguments);
        const [type, props, ...children] = path.node.arguments;

        console.log("JSX PATH CHILDREN", children);
        console.log("JSX PATH TYPE", type);
        console.log("JSX PATH PROPS", props);
        console.log(
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
            console.log("NODE CHILD TYPE IS EXPRESSION");
            jsxChildren.push(t.jsxExpressionContainer(child));
          }
        });

        console.log("JSX CONTRUCTED CHILDREN", jsxChildren);

        const idAsValueOrName = type?.value ? type.value : type.name;
        console.log("JSX TYPE.VALUE", idAsValueOrName);

        const openingElement = t.jsxOpeningElement(
          t.jsxIdentifier(idAsValueOrName),
          attributes,
          false
        );

        const closingElement = t.jsxClosingElement(
          t.jsxIdentifier(idAsValueOrName)
        );
        console.log("BEFORE PLACEMENT DONE");
        const jsxElement = t.jsxElement(
          openingElement,
          closingElement,
          jsxChildren,
          false
        );

        path.replaceWith(jsxElement);
        console.log("REPLACEMENT IS DONE");
      }
    },
  });
};
methods.doImports = function (toImport) {
  const self = this;
  return new Promise((res, rej) => {
    Promise.all(
      toImport.map((to, i) => {
        return new Promise((resolve, reject) => {
          self
            .dynamicImport(to.component)
            .then((imported) => {
              console.log(
                "Module has successfully been imported:",
                to.component
              );
              resolve({ path: to.path, module: imported });
            })
            .catch((err) => {
              console.log(
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
methods.doImport = function (toImport) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  return new Promise((resolve, reject) => {
    loadFile(toImport)
      .then((imported) => {
        console.log("Module has successfully been imported:", imported.comps);
        resolve({ module: imported });
      })
      .catch((err) => {
        console.log(
          `importing module:${toImport}, has failed with an error:${err}`
        );
        reject(err);
      });
  });
};
methods.insertImportDeclarations = function (imports, filePath) {
  const self = this;
  const pao = self.pao;
  const template = self.template;
  const generate = self.generate;
  const t = self.t;
  const parser = self.parser;
  const saveToFile = pao.pa_saveToFile;

  //   console.log("THE IMPORTS", imports);
  //   const buildImport = template(`
  //   let IMPORT_NAME = require(SOURCE);
  // `);

  //   let asty = "";

  //   asty = buildImport({
  //     IMPORT_NAME: t.identifier(`${imports[0].componentName}`),
  //     SOURCE: t.stringLiteral(`${imports[0].component}`),
  //   });
  let constString = `const comps = {`;
  let importString = imports.map((im, i) => {
    constString += `${im.componentName},`;
    return `import ${im.componentName} from "${im.component}";`;
  });
  // const myImport = template(`${importString.join(";")}`, {
  //   sourceType: "module",
  // });
  constString += "}";
  let joinedString = `${importString.join("")} ${constString};`;
  console.log("ASTY JOINED STRING", joinedString);
  let ast = parser.parse(joinedString, { sourceType: "module" });
  let modifiedCode = generate(ast).code;
  console.log("ASTY CODE THE IMPOT STRINGS", importString);
  console.log("ASTY CODE", modifiedCode);
  console.log();
  return modifiedCode;
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

methods.watchFile = function (data, events, options = null) {
  const self = this;
  // const { watched, persistent = true, ignored = null, events = null } = payload;
  self.emit({
    type: "watch-target",
    data: {
      payload: { watched: data, events },
      callback: (data) => {
        console.log("File watch set", data);
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
        console.log("File ROUTER CACHE SAVING", data);
        self.checkForSavedFiles({ key: "TEST_CACHE_SAVE" }).then((checked) => {
          console.log("SAVED CACHE", checked);
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
        console.log("Update callback", data.message);
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
          console.log(`${check.key} RESULT`, keyGetResult);
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

  console.log("fILES HAVE BEEN CHANGED", changed);
};

export default methods;
