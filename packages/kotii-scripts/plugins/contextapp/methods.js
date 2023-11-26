/* eslint-disable no-unused-vars */
const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')
  // console.log("THE VALUE OF THIS", this);
  this.setContexts();
  this.listens({
    "context-app": this.handleContextApp.bind(this),
  });
};
methods.handleContextApp = function (data) {
  // console.log("THE DATA OF START SCRIPTS", data);
  const self = this;
  self.getContextAppInfo().then((appInfo) => {
    console.log("CONTEXT APP:", appInfo);
    data.callback({
      message: "Context app plugin successfully called",
      data: appInfo,
    });
  });

  // return;
};
methods.setContexts = function (data) {
  // console.log("THE DATA OF START SCRIPTS", data);
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const createFolderContent = pao.pa_createFolderContent;
  const makeFolderSync = pao.pa_makeFolderSync;
  const getRootDir = pao.pa_getRootDir;
  self.appFolder = getWorkingFolder();
  self.appRoot = getRootDir();
};
methods.getAppInContextResources = function () {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
  const loadFileSync = pao.pa_loadFileSync;
  const fs = self.fs;
  const { appFolder: folder, getFilePath, checkIfIsFile } = self;
  console.log("AAPP FOLDER", folder);
  console.log("AAAP ROOT", self.appRoot);
  //console.log(pao);

  return new Promise((resolve, reject) => {
    const templateFolder = folder.slice(0, folder.indexOf("/kotii-scripts"));
    const appPackageJson = JSON.parse(readFileSync(`${folder}/package.json`));

    const isPackageNameKotii =
      appPackageJson.name === "kotii-scripts" ? true : false;
    const appFolder = isPackageNameKotii
      ? `${templateFolder}/kotii-templates/javascript/ssr`
      : folder;
    console.log("THE APP PACKAGE JSON", appPackageJson);
    console.log("THE APP CONFIG", isPackageNameKotii);
    console.log("THE TEMPLATE FOLDER", templateFolder);
    console.log("THE TEMPLATE app FOLDER", appFolder);
    const resources = {
      appEnv: self.getFilePath(appFolder, ".env"),
      appFolder: self.getFilePath(appFolder, "."),
      appIndexFile: self.getFilePath(appFolder, "src/index.js"),
      appPagesFolder: self.getFilePath(appFolder, "src/components/pages"),
      appSrc: self.getFilePath(appFolder, "src"),
      appTsConfig: self.getFilePath(appFolder, "tsconfig.ts"),
      appJsConfig: self.getFilePath(appFolder, "tsconfig.js"),
      appIndexHtml: self.getFilePath(appFolder, "public/index.html"),
      appAssetsPublic: self.getFilePath(appFolder, "public"),
      appBuildFolder: self.getFilePath(appFolder, "build"),
      appPublicPath: self.checkIfIsFile(
        self.getFilePath(appFolder, "package.json")
      )
        ? loadFile(self.getFilePath(appFolder, "package.json"))?.homePage || "/"
        : "/",
      appNodeModules: self.getFilePath(appFolder, "node_modules"),
      appCustomWbpConfig: self.checkIfIsFile(
        self.getFilePath(appFolder, "webpack.custom.js")
      )
        ? loadFile(self.getFilePath(appFolder, "webpack.custom.js"))
        : null,
      appKotiiJson: self.checkIfIsFile(self.getFilePath(appFolder, "kotii.js"))
        ? loadFile(self.getFilePath(appFolder, "kotii.json"))
        : null,
    };
    console.log("THE RESOURCES", resources);
    // let appFileSavePath = `${resources.appSrc}/about_.js`;
    // let appFilePath = `${resources.appSrc}/about.jsx`;
    // loadFileSync("@babel/register").default({
    //   cwd: resources.appSrc,
    //   presets: ["@babel/preset-env"],
    // });
    // console.log("BABEL-REGISTER", babelRegister);
    // let anonyMouse = babelRegister().default;
    // console.log("ANONYMOUSE", anonyMouse);
    // console.log("THE BABEL", babelRegister);
    // let jsx = loadFileSync(appFilePath);
    // let jsx = loadFileSync(appFilePath);
    // console.log("LOADED JSX", jsx);
    // jsx.default();
    // let jsxCode = readFileSync(appFilePath);
    // self.parseJsxToReact(jsxCode, appFileSavePath);
    self.doRoutes(resources, resolve, reject);
    // return resources;
  });
};
methods.getContextAppInfo = function () {
  const self = this;
  const pao = self.pao;
  const createFolderContent = pao.pa_createFolderContent;
  const makeFolderSync = pao.pa_makeFolderSync;
  // self.callback = data.callback;
  return self.getAppInContextResources();
  // console.log("THE WORKING DIR INFORMATION", self.appFolder, self.appRoot);
};
methods.getFilePath = function (fromDir, to) {
  const self = this;

  const { path } = self;
  console.log("THE PATH RESOLVE", path.resolve(fromDir, to));

  return path.resolve(fromDir, to);
};
methods.checkIfIsFile = function (filePath) {
  const self = this;
  const { fs } = self;
  let stats;
  try {
    stats = fs.statSync(filePath);
    // console.log("FILE STATISTICS", stats);
    const isFile = stats.isFile();
    // console.log("IS FILE", isFile);
    return isFile;
  } catch (error) {
    // console.log("THE STATS THROWN", error);
    return false;
  }
};
methods.doRoutes = function (path, pResolve, pReject) {
  const self = this;
  self.emit({
    type: "create-file-routes",
    data: {
      payload: { path: path },
      callback: (data) => {
        console.log("FILE ROUTES PROCESSED", data.message);
        pResolve(path);
      },
    },
  });
};

methods.parseJsxToReact = function (userCode, fileToSaveTo) {
  const self = this;
  const pao = self.pao;
  const saveToFile = pao.pa_saveToFile;
  const loadFile = pao.pa_loadFile;
  self.emit({
    type: "convert-jsx-to-react",
    data: {
      payload: { code: userCode },
      callback: (data) => {
        console.log("CODE CONVERTED TO REACT", data);
        const { code } = data;
        const codeToSave = code.code;
        saveToFile(fileToSaveTo, codeToSave);
        loadFile(fileToSaveTo)
          .then((loadedFile) => {
            console.log("THE LOADED FILE", loadedFile);
            console.log("THE CODE TO SAVE", userCode);
            saveToFile(fileToSaveTo, userCode);

            // const { code: lebabTransformed, warnings } = self.lebabTransform(
            //   code.code, // code to transform
            //   [
            //     "let",
            //     "arrow",
            //     "arrow-return",
            //     "includes",
            //     "destruct-param",
            //     "arg-spread",
            //     "template",
            //     "obj-shorthand",
            //     "class",
            //     "commonjs",
            //     "obj-method",
            //     "default-param",
            //   ] // transforms to apply
            // );

            //console.log("LEBAB ES6", lebabTransformed);
          })
          .catch((err) => {
            console.log("THERE WAS AN ERROR LOADING REACT FILE", err);
          });
      },
    },
  });
};
export default methods;
