const methods = {};
import fs from "fs";
import path from "path";
methods.init = function () {
  this.listens({
    "config-is-ready": this.handleConfigIsReady.bind(this),
  });
};
methods.handleConfigIsReady = function (data) {
  console.log("THE CONFIG IS READY: STARTING PRODUCTION");
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
            console.log("Application run has started");
          },
        },
      });
    })
    .catch((err) => {
      console.log("FAILED TO STARTUP THE APP", err);
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
    let configFolder = "";
    if (nodeModulesOrUserLand.indexOf("/packages") >= 0) {
      configFolder = `${nodeModulesOrUserLand}/kotii-templates/javascript/ssr`;
    }

    let rootFiles = [];
    const files = fs.readdirSync(configFolder, { recursive: true });

    for (let fofi = 0; fofi <= files.length; fofi++) {
      console.log("FILES");
      let filePath = `${configFolder}${path.sep}${files[fofi]}`;
      console.log("THE FILE PATH", filePath);
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

    console.log("GETTING THE WORKING DIR", configFolder);
    console.log("THE FILES", files);
    console.log("THE ROOT FILES", rootFiles);
    if (rootFiles.length > 0) {
      loadFile(`${rootFiles[0].buildRoot}${path.sep}.config.js`).then(
        (config) => {
          let domain = config.domain;
          domain.forEach((doma) => {
            if (doma.name === "static") {
              doma.set = `${rootFiles[0].buildRoot}/${doma.set}`;
            }
          });
          let configMod = {
            ...config,
            domain: domain,
          };
          console.log("THE CONFIG FILE", configMod);
          resolve(config);
        }
      );
    }
  });
};

export default methods;
