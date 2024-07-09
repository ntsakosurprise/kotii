const methods = {};
import fs from "fs";
import os from "node:os";
import path from "path";
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
  const { targetMain, destination, targetSource } = payload;
  data.callback({ gotValue: "Ran" });
  const cwd = getWorkingFolder();
  const localPackageJson = JSON.parse(readFileSync(`${cwd}/package.json`));
  // const kottiBabelRc = JSON.parse(readFileSync(`${cwd}/babel.server.json`));
  // const ignores = self.handleIgnores(data.payload.targetSource, kottiBabelRc);
  // console.log("MADE IGNORES", ignores);
  console.log("THE CWD", cwd);
  console.log("THE LOCAL PACKAGE.JSON", localPackageJson);
  localPackageJson["scripts"] = {
    ...localPackageJson.scripts,
    "build-ssr": `babel --config-file ${cwd}/babel.server.json  --out-dir ${destination}${path.sep}src ${targetSource}`,
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

  runNpmScript("run", "build-ssr")
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
      self.copyPublicToDist(`${targetMain}`, `${fullTempPath}`);
      self.copyPublicToDist(`${fullTempPath}`, `${destination}`);
      fs.rmSync(fullTempPath, { recursive: true });
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
  ];
  let absoluteIgnores = ignores.map((ig) => {
    return `${root}${path.sep}${ig}`;
  });
  // jsonConfig["ignore"] = [...absoluteIgnores];
  console.log("THE IGNORE STRING", absoluteIgnores);
  return absoluteIgnores;
};
methods.copyPublicToDist = function (from, to, ignore) {
  const self = this;
  let ignores = self.handleIgnores(from);
  console.log("copying from", from, to);
  fs.cpSync(from, to, {
    recursive: true,
    filter: (fi) => {
      // console.log("THE FILE BEING PROCESSED", fi, ignores.includes(fi));
      // if (ignores.includes(fi)) return true;
      // let thisToReturn = fi !== ignore;
      let thisToReturn = !ignores.includes(fi);
      // console.log("THIS TO RETURN", thisToReturn);
      return thisToReturn;
    },
  });
};

export default methods;
