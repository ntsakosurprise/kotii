const methods = {};
import fs from "fs";
import path from "path";
methods.init = function () {
  this.listens({
    "config-is-ready": this.handleConfigIsReady.bind(this),
  });
};
methods.handleConfigIsReady = function (data) {
  const self = this;
  const setCall = data.callback;
  self
    .doStartUp()
    .then((config) => {
      self.emit({
        type: "config-manual",
        data: {
          payload: {
            customKickOff: true,
            config: config,
          },
          callback: (data) => {
            self.debug("Application run has started");
          },
        },
      });
    })
    .catch((err) => {
      self.debug("FAILED TO STARTUP THE APP", err);
    });
};

methods.doStartUp = function (data) {
  const self = this;
  const pao = self.pao;
  const getWorkingDir = pao.pa_getWorkingFolder;
  const loadFile = pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
  return new Promise((resolve, reject) => {
    let nodeModulesOrUserLand = path.resolve(getWorkingDir(), "..");
    let configFolder = getWorkingDir();
    self.debug("CONFIG FOLDER", configFolder);
    // if (nodeModulesOrUserLand.indexOf("/packages") >= 0) {
    //   configFolder = `${nodeModulesOrUserLand}/kotii-templates/javascript/ssr`;
    // }

    let rootFiles = [];
    const files = fs.readdirSync(configFolder, { recursive: true });

    for (let fofi = 0; fofi <= files.length; fofi++) {
      self.debug("FILES");
      let filePath = `${configFolder}${path.sep}${files[fofi]}`;
      self.debug("THE FILE PATH", filePath);
      if (
        fs.statSync(filePath).isDirectory() &&
        filePath.indexOf(".kotii-land") >= 0
      ) {
        rootFiles.push({
          folder: files[fofi],
          fullPath: filePath,
          buildRoot: path.resolve(filePath, ".."),
        });
        break;
      }
    }

    let rootStats = rootFiles[0];
    self.debug("GETTING THE WORKING DIR", configFolder);
    self.debug("THE FILES", files);
    self.debug("THE ROOT FILES", rootFiles);
    if (rootFiles.length > 0) {
      loadFile(`${rootStats.buildRoot}${path.sep}.config.js`).then((config) => {
        let domain = config.domain;
        // let buildPath = "";
        // let toFolder = "";
        // domain.forEach((doma) => {
        //   if (doma.name === "static") {
        //     toFolder = path.resolve(getWorkingDir(), `${doma.set}`);
        //     buildPath = `${rootStats.buildRoot}/${doma.set}`;
        //     // doma.set = `${rootFiles[0].buildRoot}/${doma.set}`;
        //   }
        // });
        // delete config.domain;
        // let configMod = {
        //   ...config,
        //   domain: domain,
        // };
        // self.debug("THE CONFIG FILE", configMod);
        // self.debug("THE TO FOLDER", toFolder);
        // let madeFolder = self.createFolder(toFolder);
        // self.copyFromToFolder(buildPath, madeFolder);

        domain.forEach((doma) => {
          if (doma.name === "static") {
            doma.set = `${rootFiles[0].buildRoot}/${doma.set}`;
            doma.absolute = true;
          }
        });
        let pathApiRoot = path.resolve(rootStats.buildRoot, "api");
        let pathApiConfig = path.resolve(rootStats.buildRoot, "api/.config.js");
        if (fs.existsSync(pathApiRoot) && fs.existsSync(pathApiConfig)) {
          loadFile(`${rootStats.buildRoot}${path.sep}api/.config.js`).then(
            (apiConfig) => {
              self.debug("API CONFIG", apiConfig);
              let appConfig = {
                ...config,
                ...apiConfig,
                router: [...apiConfig.router, ...config.router],
              };
              resolve(appConfig);
            }
          );
        } else {
          resolve(config);
        }
      });
    }
  });
};

methods.createFolder = function (filepath) {
  const self = this;
  const pao = self.pao;
  const makeFolderSync = pao.pa_makeFolderSync;
  const isExistingDir = pao.pa_isExistingDir;
  if (isExistingDir(filepath)) fs.rmSync(filepath, { recursive: true });
  makeFolderSync(filepath);
  return filepath;
};

methods.copyFromToFolder = function (from, to, ignores = []) {
  const self = this;

  self.debug("copying from", from, to);
  fs.cpSync(from, to, {
    recursive: true,
    filter: (fi) => {
      // self.debug("THE FILE BEING PROCESSED", fi, ignores.includes(fi));
      // if (ignores.includes(fi)) return true;
      // let thisToReturn = fi !== ignore;
      let thisToReturn = !ignores.includes(fi);
      // self.debug("THIS TO RETURN", thisToReturn);
      return thisToReturn;
    },
  });
};

export default methods;
