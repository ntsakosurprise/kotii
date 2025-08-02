/* eslint-disable no-unused-vars */
import detectPort from "detect-port";
import portFinder from "portfinder";
const methods = {};
methods.init = function () {
  // self.debug('Bitbucket has been initialised')
  // self.debug("THE VALUE OF THIS", this);
  this.setContexts();
  this.listens({
    "context-app": this.handleContextApp.bind(this),
  });
};
methods.handleContextApp = function (data) {
  const self = this;
  const { build = false } = data;
  self.debug("THE DATA OF HANDLE CONTEXT", data);

  self.getAppInContextResources(build).then(async (appInfo) => {
    self.debug("CONTEXT APP:", appInfo);

    if (!build) {
      if (appInfo.path.appManifest?.useSetPort) {
        if (!process.env.PORT) {
          throw new Error(
            "appManifest config's useSetPort property indicates that the app should strictly set Port, but the PORT environment variable is not set. Please set the port."
          );
        } else {
          await self.getAvailablePort(process.env?.PORT, true);
        }
      } else {
        await self.getAvailablePort(process.env?.PORT || 8000);
      }
    }

    data.callback({
      message: "Context app plugin successfully called",
      contextApp: appInfo.path,
      routes: appInfo.routes,
      ...appInfo,
    });
  });

  // return;
};
methods.setContexts = function (data) {
  // self.debug("THE DATA OF START SCRIPTS", data);
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const createFolderContent = pao.pa_createFolderContent;
  const makeFolderSync = pao.pa_makeFolderSync;
  const getRootDir = pao.pa_getRootDir;
  self.appFolder = getWorkingFolder();
  self.appRoot = getRootDir();
};
methods.getAppInContextResources = function (environment = false) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
  const loadFileSync = pao.pa_loadFileSync;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const fs = self.fs;
  const { appFolder: folder, getFilePath, checkIfIsFile } = self;
  const cwd = getWorkingFolder();

  self.setNodeEnv(environment);
  return new Promise((resolve, reject) => {
    const templateFolder = folder.slice(0, folder.indexOf("/kotii-scripts"));
    const appPackageJson = JSON.parse(readFileSync(`${folder}/package.json`));

    const isPackageNameKotii =
      appPackageJson.name === "kotii-scripts" ? true : false;
    const appFolder = isPackageNameKotii
      ? `${templateFolder}/kotii-templates/javascript/ssr`
      : folder;
    self.debug("THE APP PACKAGE JSON", appPackageJson);
    self.debug("THE APP CONFIG", isPackageNameKotii);
    self.debug("THE TEMPLATE FOLDER", templateFolder);
    self.debug("THE TEMPLATE app FOLDER", appFolder);
    let appFolderSplit = appFolder.split("/");
    self.debug("THE");
    let indexPath = self.getFilePath(appFolder, "src/index.js");
    const appIndexFile = !fs.existsSync(indexPath)
      ? indexPath.replace(".js", ".ts")
      : indexPath;
    const tailwindPath = self.getFilePath(appFolder, "tailwind.config.js");
    const tsConfigPath = self.getFilePath(appFolder, "tsconfig.ts");
    const jsConfigPath = self.getFilePath(appFolder, "tsconfig.js");
    const resources = {
      appEnv: self.getEnvFilePath(appFolder),
      appFolder: self.getFilePath(appFolder, "."),
      appName: appFolderSplit[appFolderSplit.length - 1],
      appSsl: self.getFilePath(appFolder, "ssl"),
      appIndexFile: appIndexFile,
      appPagesFolder: self.getFilePath(appFolder, "src/pages"),
      appSrc: self.getFilePath(appFolder, "src"),
      appIndexHtml: self.getFilePath(appFolder, "public/index.html"),
      appAssetsPublic: self.getFilePath(appFolder, "public"),
      appBuildFolder: self.getFilePath(cwd, "build"),
      appReduxFolder: self.getFilePath(appFolder, "/src/store"),
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
      appManifest: self.checkIfIsFile(
        self.getFilePath(appFolder, "app.manifest.json")
      )
        ? loadFileSync(self.getFilePath(appFolder, "app.manifest.json"))
        : null,
      appApi: self.checkIfIsDirectory(self.getFilePath(appFolder, "api"))
        ? self.getFilePath(appFolder, "api")
        : null,
      appPnpmPkgr: self.checkIfIsFile(
        self.getFilePath(appFolder, "pnpm-lock.yaml")
      )
        ? true
        : null,
      appTailwindConfig: self.checkIfIsFile(tailwindPath) ? tailwindPath : null,
      appTsConfig: self.checkIfIsFile(tsConfigPath) ? tsConfigPath : null,
      appJsConfig: self.checkIfIsFile(jsConfigPath) ? jsConfigPath : null,
    };
    self.debug("THE RESOURCES", resources);
    // let appFileSavePath = `${resources.appSrc}/about_.js`;
    // let appFilePath = `${resources.appSrc}/about.jsx`;
    // loadFileSync("@babel/register").default({
    //   cwd: resources.appSrc,
    //   presets: ["@babel/preset-env"],
    // });
    // self.debug("BABEL-REGISTER", babelRegister);
    // let anonyMouse = babelRegister().default;
    // self.debug("ANONYMOUSE", anonyMouse);
    // self.debug("THE BABEL", babelRegister);
    // let jsx = loadFileSync(appFilePath);
    // let jsx = loadFileSync(appFilePath);
    // self.debug("LOADED JSX", jsx);
    // jsx.default();
    // let jsxCode = readFileSync(appFilePath);
    // self.parseJsxToReact(jsxCode, appFileSavePath);
    self.doRoutes({ path: resources }, resolve, reject);
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
  // self.debug("THE WORKING DIR INFORMATION", self.appFolder, self.appRoot);
};
methods.getFilePath = function (fromDir, to) {
  const self = this;

  const { path } = self;
  self.debug("THE PATH RESOLVE", path.resolve(fromDir, to));

  return path.resolve(fromDir, to);
};
methods.checkIfIsFile = function (filePath) {
  const self = this;
  const { fs } = self;
  let stats;
  try {
    stats = fs.statSync(filePath);
    // self.debug("FILE STATISTICS", stats);
    const isFile = stats.isFile();
    // self.debug("IS FILE", isFile);
    return isFile;
  } catch (error) {
    // self.debug("THE STATS THROWN", error);
    return false;
  }
};
methods.checkIfIsDirectory = function (filePath) {
  const self = this;
  const { fs } = self;
  let stats;
  self.debug("DIRECTORY PATH", filePath);
  try {
    stats = fs.statSync(filePath);

    self.debug("FILE STATISTICS", stats);
    const isDir = stats.isDirectory();

    self.debug("IS FILE", isDir);
    return isDir;
  } catch (error) {
    self.debug("THE STATS THROWN", error);
    return false;
  }
};
methods.doRoutes = function (resources, pResolve, pReject) {
  const self = this;
  self.emit({
    type: "create-file-routes",
    data: {
      payload: resources,
      callback: (data) => {
        self.debug("FILE ROUTES PROCESSED", data.message);
        pResolve({ routes: data.routes, ...resources, ...data });
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
        self.debug("CODE CONVERTED TO REACT", data);
        const { code } = data;
        const codeToSave = code.code;
        saveToFile(fileToSaveTo, codeToSave);
        loadFile(fileToSaveTo)
          .then((loadedFile) => {
            self.debug("THE LOADED FILE", loadedFile);
            self.debug("THE CODE TO SAVE", userCode);
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

            //self.debug("LEBAB ES6", lebabTransformed);
          })
          .catch((err) => {
            self.debug("THERE WAS AN ERROR LOADING REACT FILE", err);
          });
      },
    },
  });
};
methods.setNodeEnv = function (environment = false) {
  !process.env?.NODE_ENV
    ? !environment
      ? (process.env["NODE_ENV"] = "development")
      : (process.env["NODE_ENV"] = "production")
    : null;
};
methods.getEnvFilePath = function (basePath) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
  const loadFileSync = pao.pa_loadFileSync;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const environment = process.env.NODE_ENV;
  let envFilePath = self.getFilePath(
    basePath,
    `.env.${environment.toLowerCase()}`
  );

  if (self.checkIfIsFile(envFilePath)) {
    self.debug("THE ENV FILE PATH", envFilePath);
    return envFilePath;
  } else {
    return null;
  }
};

methods.getAvailablePort = function (port = 3000, useStrictPort = false) {
  const self = this;

  return new Promise((resolve, reject) => {
    detectPort(port)
      .then((gotPort) => {
        if (gotPort.toString() === port) {
          process.env["PORT"] = gotPort;
          resolve(gotPort);
        } else {
          portFinder
            .getPortPromise()
            .then((openPort) => {
              if (useStrictPort) {
                throw new Error(
                  "Specified port is in use, please try to set another port"
                );
              }

              process.env["PORT"] = openPort;
              resolve(openPort);
            })
            .catch((err) => {
              reject(err);
            });
        }
      })
      .catch((err) => {
        self.error("There was an error trying to get a port", err);
        reject(err);
      });
  });
};
export default methods;
