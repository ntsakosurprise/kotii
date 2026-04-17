/* eslint-disable no-unused-vars */
const methods = {};
import fs from "fs";
import path from "path";
methods.init = function () {
  this.listens({
    handleStaticCommand: this.handleStaticCommad.bind(this),
  });
};
methods.handleStaticCommand = function (data) {
  const self = this;
  const setCall = data.callback;
  const { folder = "build" } = data;

  self.emit({
    type: "config-manual",
    data: {
      payload: {
        configs: {
          router: [],
          domain: [{ name: "static", set: folder }],
          cluster: { workers: 1, spawn: false },
          // server: serverConfig,
        },
      },
      callback: (data) => {
        // self.debug("SENDING A RESTART SIGNAL",process.env?.CUSTOM_RESTART)
        //     if(process.env?.CUSTOM_RESTART){
        //       self.debug("SENDING A RESTART SIGNAL")
        //       process.env.CUSTOM_RESTART = "false"
        //       self.notifyClient({
        //         name: "kotii-client-reload",
        //         vendor: "kotii",
        //       });
        //     }
        // callback(data.message);
      },
    },
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

    self.getEnvVariables().then((envs) => {
      self.debug("THE ENVS", envs);

      self
        .doProdRoutes({
          path: {
            appSrc: `${rootFiles[0].buildRoot}/src`,
            isProductionRequest: true,
          },
        })
        .then((routes) => {
          self.debug("The Retrieved Routes", routes);

          if (rootFiles.length > 0) {
            loadFile(`${rootStats.buildRoot}${path.sep}.config.js`).then(
              (config) => {
                let domain = config.domain;
                console.log("FOUND CONFIG SETTINGS", config);
                console.log("THE ROOT FILES", rootFiles);

                domain.forEach((doma) => {
                  if (doma.name === "static") {
                    doma.set = doma?.set
                      ? `${rootFiles[0].buildRoot}/${doma.set}`
                      : `${rootFiles[0].buildRoot}/public`;
                    doma.absolute = true;
                  }
                });
                let pathApiRoot = path.resolve(rootStats.buildRoot, "api");
                let pathApiConfig = path.resolve(
                  rootStats.buildRoot,
                  "api/.config.js"
                );
                if (
                  fs.existsSync(pathApiRoot) &&
                  fs.existsSync(pathApiConfig)
                ) {
                  loadFile(
                    `${rootStats.buildRoot}${path.sep}api/.config.js`
                  ).then((apiConfig) => {
                    self.debug("API CONFIG", apiConfig);
                    let appConfig = {
                      ...config,
                      ...apiConfig,
                      router: [...apiConfig.router, ...routes],
                    };
                    resolve(appConfig);
                  });
                } else {
                  resolve(config);
                }
              }
            );
          }
        });
    });
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

methods.doProdRoutes = function (resources) {
  const self = this;
  return new Promise((resolve, reject) => {
    self.emit({
      type: "create-file-routes",
      data: {
        payload: resources,
        callback: (data) => {
          self.debug("FILE ROUTES PROCESSED", data);
          // pResolve({ routes: data.routes, ...resources, ...data });
          resolve(data.routes);
        },
      },
    });
  });
};

methods.getEnvVariables = function (envPath) {
  const self = this;
  self.debug("GET ENV");
  return new Promise((resolve, reject) => {
    self.emit({
      type: "get-env-variables",
      data: {
        envPath: "",
        meta: "",
        callback: (envVariables) => {
          let app_url = `http://localhost:${process.env.PORT}`;
          process.env["APP_URL"] = app_url;
          process.env["KOTII_APP_URL"] = app_url;
          envVariables.stringified["KOTII_APP_URL"] = app_url;
          // envs.stringified["KOTII_APP_META"] = JSON.stringify(
          //   contextApp.appManifest.app
          // );
          envVariables.stringified["KOTII_SHOW_DEBUG_LOGS"] = true;
          envVariables.stringified["KOTII_STATIC_OR_LAZY"] = JSON.stringify(
            process.env?.useLazyLoad
          );

          let kotiiEnvs = envVariables?.stringified
            ? {
                ...envVariables.stringified,
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
              }
            : {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
              };

          self.emit({
            type: "receive-kotii-env-variables",
            data: {
              payload: { kotiiEnvs },
            },
          });

          resolve(envVariables);
        },
      },
    });
  });
};

export default methods;
