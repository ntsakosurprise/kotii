const methods = {};
const pathMatchPattern = /^\.|index|\.[t|j][sx|s]$/g;
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
  // const sourceCodes = self.getSourceCodes(pagesPaths);
  // self.parseJsxToReact(sourceCodes);
  console.log("PAGES PATHS", pagesPaths);

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
  const dirPath = `${pathy}/components/system`;
  if (!isExistingDir(dirPath)) makeFolderSync(dirPath);
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
methods.getItemPathAndFile = async function (item) {
  console.log("THE PAGES MAPS ITEM", item);
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;

  let gotEndpoint =
    item.indexOf("pages") > 0
      ? item.slice(item.indexOf("pages"), item.length)
      : "";
  console.log("Got endpoint", gotEndpoint);
  let patternMatch = gotEndpoint
    .replace("pages", "")
    .replace(pathMatchPattern, "")
    .replace(/\[(.+)\]/g, ":$1")
    .replace(/\[\.{3}.+\]/, "*");
  // .replace(/\/$/, "");
  if (!/^\/$/.test(patternMatch)) {
    console.log("THE PAGES slash only");
    patternMatch = patternMatch.replace(/\/$/, "");
  }
  console.log("THE PAGES matched", patternMatch);
  console.log("THE ITEM", item);
  // fileAsComp = null;
  // await loadFile(item);

  return {
    path: patternMatch,
    component: await import(module),
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
export default methods;
