const methods = {};

methods.init = function () {
  console.log("Filerouter has been initialised");

  this.listens({
    "create-file-routes": this.handleFileRoutes.bind(this),
  });
};
methods.handleFileRoutes = async function (data) {
  const self = this;
  // console.log("HANDLE FILE ROUTES DATA", data);
  const { payload } = data;
  const { path: filePaths } = payload;
  console.log("FILE PATHS", filePaths);
  self.enableBabelRegister(filePaths.appSrc);
  const pagesPaths = self.getPages(`${filePaths.appPagesFolder}/**/*.jsx`);
  const routesObject = self.createRouterComponents(
    pagesPaths,
    filePaths.appSrc
  );
  //self.addToAST(routesObject);
  // const sourceCodes = self.getSourceCodes(pagesPaths);
  // self.parseJsxToReact(sourceCodes);
  console.log("PAGES PATHS", pagesPaths);
  console.log("Routes OBject", routesObject);

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
  const extMatchPattern = /\.jsx|tsx$/g;
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
  fileAsComp = loadFileSync(item);
  // await loadFile(item);

  return {
    path: patternMatch,
    component: fileAsComp?.default ? fileAsComp.default : fileAsComp,
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

  options.presets = ["@babel/preset-react", "@babel/preset-env"];
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
    presets: ["@babel/preset-env"],
  });
};
methods.addToAST = function (objectToAdd) {
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
      console.log(
        "Identifier matched::",
        path.container[2].declarations[0].id.name
      );
      let firstVariableName = path.container[2].declarations[0].id.name;

      if (firstVariableName === "mapsOfFiles") {
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
  const { code: genCode } = generate(ast);
  const modifiedCode = genCode;

  console.log("New AST genCode", genCode);
  console.log("Modiefied code", modifiedCode);
  saveToFile(filePath, modifiedCode);
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
        t.identifier("mapsOfFiles"),
        t.arrayExpression([
          ...files.map((en, i) => {
            let funcAst = parser.parse(en.component.toString(), {
              sourceType: "module",
            });
            let functionInContext = funcAst.program.body[0];
            let funcName = functionInContext.id.name;
            let funcBody = functionInContext.body;
            console.log("AST for func", funcAst.program.body);
            console.log("AST FUNCTION PARTS", funcName, funcBody);

            return t.objectExpression([
              t.objectProperty(t.identifier("path"), t.stringLiteral(en.path)),
              t.objectProperty(
                t.identifier("component"),
                t.functionExpression(t.identifier(funcName), [], funcBody)
              ),
            ]);
          }),
        ])
      ),
    ])
  );
  path.stop();
};

export default methods;
