const methods = {};
import fs from "fs";
import path from "path";
import { kotiiKotiiLandPath } from "../../kotii_paths.js";
methods.init = function () {
  console.log("Webpackconfig has been initialised");

  this.listens({
    "webpack-config": this.handleWebpackConfig.bind(this),
  });
};
methods.handleWebpackConfig = function (data) {
  console.log("THE DATA OF WebPack config SCRIPTS", data);
  const self = this;
  // console.log("SELF BEFORE", self);
  self["callback"] = data.callback;
  const loadFile = self.pao.pa_loadFile;
  const { contextApp } = data.payload;
  const { appEnv = "" } = contextApp;
  const { useCustomDomain = false, useHttps = false } = contextApp.appManifest;
  console.log("WEBPACK DATA PAYLOAD", data.payload.build);
  // console.log("SELF. AFTER SETTING CALLBACK", self);
  // console.log("THE NODE ENV", process.env.NODE_ENV);
  if (!fs.existsSync(contextApp.appSsl) && useHttps) {
    // if (
    //   !self.checkIfIsFile(
    //     path.resolve(contextApp.appFolder, "certsConfig.json")
    //   )
    // ) {
    //   throw new Error(
    //     "App is set to use https, but certs.json file is not yet defined"
    //   );
    // } else {

    // }
    fs.mkdirSync(contextApp.appSsl);
    if (useHttps) process.env["ANZII_APP_USE_HTTPS"] = true;
    loadFile(path.resolve(kotiiKotiiLandPath, ".certsConfig.json"))
      .then((sslConfig) => {
        let config = JSON.parse(sslConfig);
        self
          .createSSLCertificate(config, `${kotiiKotiiLandPath}/openssl.conf`)
          .then((certs) => {
            console.log("THE APP CERTS", certs);
            self
              .addDomainToHost(`${contextApp.appName}.com`)
              .then((addedHost) => {
                console.log("THE ADDED HOST", addedHost);
                let certDomainConfig = {
                  certs: certs.filesOutputPaths,
                  host: addedHost.domainName,
                  useCustomDomain,
                  useHttps,
                };
                self.getEnvVariables(appEnv).then((envs) => {
                  console.log("THE ENVS", config);
                  self.configureWebPack(data.payload, envs, certDomainConfig);
                });
              });
          });
      })
      .catch((err) => {
        console.log("An error occured loading file", err);
      });
  } else {
    self.getEnvVariables(appEnv).then((envs) => {
      console.log("THE ENVS", envs);
      self.configureWebPack(data.payload, envs);
    });
  }

  return;
};
methods.configureWebPack = function (
  payload,
  envs = null,
  certDomainConfig = null
) {
  const self = this;
  const pao = self.pao;
  // const getWorkingDir = pao.p_getWorkingFolder;
  const cwd = pao.pa_getWorkingFolder();
  const { webpack, setContextEnv } = self;
  const { routes = null, contextApp, build = false } = payload;

  const webPackConfig =
    (process.env?.ANZII_CLI_WITH_SERVER &&
      process.env.ANZII_CLI_WITH_SERVER === "true") ||
    build
      ? self.webPackServerConfig
      : self.webPackConfig;

  // console.log("THE APP CONTEXT CONFIG", payload);

  envs.stringified["KOTII_APP_META"] = JSON.stringify(
    contextApp.appManifest.app
  );
  console.log("THE APP ENVS", envs);

  setContextEnv(contextApp, envs);
  const webpackConfigObject = webPackConfig({
    cwd,
    appManifest: contextApp.appManifest,
    build: build,
    buildFolder: `${path.resolve(
      contextApp.appFolder,
      contextApp.appManifest.build
    )}`,
    staticFolder: `${path.resolve(
      contextApp.appFolder,
      contextApp.appManifest.static
    )}`,
    pagesFolder: contextApp.appPagesFolder,
    runOnComplete: self.testRunFromWebpack.bind(self),
    closeWatcher: self.closeWatcher.bind(self),
    notifyClient: self.notifyClient.bind(self),
    isProjectPNPM: contextApp.appPnpmPkgr,
  });

  console.log("PROCESS.ENV", process.env);
  console.log("THE WEBPACK CONFIG", webpackConfigObject);
  let wbpCompiler = null;
  try {
    wbpCompiler = webpack(webpackConfigObject);
  } catch (err) {
    console.log("Webpack config error", err);
    process.exit(1);
  }

  if (!build)
    return self.hookIntoWebpackCompilation(wbpCompiler).then((hooked) => {
      console.log("THE CONFIG HOOK STATUS", hooked);
      self.configureDevServer(
        {
          compiler: wbpCompiler,
          webpackConfig: webpackConfigObject,
        },
        { routes, api: contextApp.appApi },
        certDomainConfig

        // domain: [{ name: 'static', set: 'public' }]
      );
    });

  self.hookIntoWebpackCompilation(wbpCompiler).then((hooked) => {
    console.log("ABOUT TO TRIGGER MANUAL webpack compilation");
    wbpCompiler.run((err, stats) => {
      console.log("COMPILER ERR", err);
      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }
      console.log("COMPILER INFO", info.assets);
      self.callback({
        webpackCompileStats: {
          assets: info.assets,
        },
      });
    });
  });

  // console.log("THE WEBPACK COMPILER", wbpCompiler);
  return;
};
methods.setContextEnv = function (mdconfig, envs = null) {
  process.env["APPCONTEXT"] = JSON.stringify(mdconfig);
  if (envs) {
    // console.log("STRINGIFIED ENVS", envs);
    if (envs?.stringified) {
      process.env["APP_ENVS"] = JSON.stringify({
        ...envs.stringified,
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      });
    } else {
      process.env["APP_ENVS"] = JSON.stringify({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      });
    }
  }
};
methods.configureDevServer = function (
  webpacks,
  anziiManualConfigs = null,
  domainHostConfig = null
) {
  const self = this;
  const pao = self.pao;
  const callback = self.callback;
  const loadFile = pao.pa_loadFile;
  const serverEventsConnectionRoute = {
    path: "/subscribe-to-events",
    method: "GET",
    alias: "serversentevents",
    type: "public",
  };
  const reinitateSocket = {
    path: "/re-initiate-socket/:reinitiate",
    method: "GET",
    alias: "serversentevents",
    type: "public",
  };

  let wepackMiddlewares = null;
  const serverType =
    process.env?.ANZII_CLI_WITH_SERVER &&
    process.env.ANZII_CLI_WITH_SERVER === "true"
      ? "config-manual"
      : "dev-server";
  serverType === "config-manual"
    ? (wepackMiddlewares = {
        webpackDevMiddleware: self.webpackDevMiddleware,
        webpackHotMiddleware: self.webpackHotMiddleware,
      })
    : "";
  // console.log("SELF IN CONFIGURE", self);
  console.log("THE APP WITH APP CLI", process.env?.ANZII_CLI_WITH_SERVER);
  console.log("THE SERVER TYPE", serverType);
  self.emit({
    type: "take-ssr-routes",
    data: { payload: { routes: [...anziiManualConfigs.routes] } },
  });
  if (anziiManualConfigs.api && fs.existsSync(anziiManualConfigs.api)) {
    loadFile(`${anziiManualConfigs.api}${path.sep}.config.js`).then(
      (config) => {
        console.log("API PLUGIN THE CONFIG FILE", config);
        let appConfig = {
          ...anziiManualConfigs,
          router: [...config.router, ...anziiManualConfigs.routes],
        };
        self.emit({
          type: serverType,
          data: {
            payload: {
              ...webpacks,
              wepackMiddlewares,
              configs: {
                ...appConfig,
                // router: anziiManualConfigs.routes,
                domain: [{ name: "static", set: "build" }],
                server: {
                  useHttps: domainHostConfig.useHttps,
                  useCustomDomain: domainHostConfig.useCustomDomain,
                  domainName: domainHostConfig.host,
                  appOpts: {
                    key: fs.readFileSync(domainHostConfig.certs.key),
                    cert: fs.readFileSync(domainHostConfig.certs.certificate),
                  },
                },
              },
            },
            callback: (data) => {
              callback(data.message);
            },
          },
        });
        // resolve(config);
      }
    );
  } else {
    self.emit({
      type: serverType,
      data: {
        payload: {
          ...webpacks,
          wepackMiddlewares,

          configs: {
            router: [...anziiManualConfigs.routes],
            domain: [{ name: "static", set: "build" }],
            server: {
              useHttps: domainHostConfig?.useHttps,
              useCustomDomain: domainHostConfig?.useCustomDomain,
              domainName: domainHostConfig?.host,
              appOpts: {
                key: fs.readFileSync(domainHostConfig.key),
                cert: fs.readFileSync(domainHostConfig.certificate),
              },
            },
          },
        },
        callback: (data) => {
          callback(data.message);
        },
      },
    });
  }
};
methods.getEnvVariables = function (envPath) {
  const self = this;
  return new Promise((resolve, reject) => {
    self.emit({
      type: "get-env-variables",
      data: {
        envPath: envPath,
        meta: "",
        callback: (envVariables) => {
          resolve(envVariables);
        },
      },
    });
  });
};
methods.hookIntoWebpackCompilation = async function (compiler, configWp) {
  const self = this;
  if (compiler) return {};
  compiler.hooks.invalid.tap("invalid", () => {
    console.log("wEBPACK is compiling our code....");
  });
  compiler.hooks.invalid.tap("done", (stats) => {
    console.log("Compiler is done compiling our code");
    console.log(stats);
  });
  return true;
};

methods.removePagesImport = function () {
  console.log("REMOVE GETS A CALL");
  const self = this;

  self.emit({
    type: "remove-pages-import",
    data: {
      callback: () => {
        console.log("KOTII HAS REMOVED PAGES IMPORT");
      },
    },
  });
};

methods.testRunFromWebpack = function (watchPath, runStatus) {
  const self = this;
  console.log("TEST RUN FROM WEBPACK", self.removePagesImport, watchPath);
  self.watchFile(watchPath, {
    add: (addPath, stats) => {
      // let stats = null
      // stats = fs.statSync(addPath);
      console.log("WATCHR:: ADD FILE STATS", addPath, stats);
      // if(stats.size > 0){
      //   self.restartSever(addPath,"add", runStatus )
      // }else{

      // }

      // if(!self.fileIsAddOrDelProcessed){
      //   self.fileIsAddOrDelProcessed = true
      //   self.restartSever(addPath, runStatus)
      // }else{
      //   self.fileIsAddOrDelProcessed = false
      // }

      if (stats.size > 0) {
        console.log("FILE SIZE IS BIGGER THAN ZERO, NO RESTART");
        self.restartSever(addPath, runStatus);
      } else {
        console.log("FILE SIZE IS ZERO, NO RESTART");
        if (!self.addedEmptyFiles) {
          self.addedEmptyFiles = [addPath];
        } else {
          self.addedEmptyFiles.push(addPath);
        }
      }

      // self.notifyClient()
    },
    delete: (addPath, stats) => {
      console.log("WATCHR:: DELETE FILE STATS", addPath, stats);
      self.restartSever(addPath, "delete", runStatus);
      // if(!self.fileIsAddOrDelProcessed){
      //   self.fileIsAddOrDelProcessed = true
      //   self.restartSever(addPath, runStatus)
      // }else{
      //   self.fileIsAddOrDelProcessed = false
      // }
    },
    change: (addPath, stats) => {
      if (self.addedEmptyFiles && self.addedEmptyFiles.includes(addPath)) {
        if (self.addedEmptyFiles.length === 1) {
          self.addedEmptyFiles = null;
          self.restartSever(addPath, "changeEmpyFile");
        } else {
          console.log(
            "WATCHR:: ONCHANGE MANY FILES",
            self.addedEmptyFiles,
            self.addedEmptyFiles.indexOf(addPath)
          );
          self.splice(self.addedEmptyFiles.indexOf(addPath), 1);
        }
      }
    },
  });
};
methods.notifyClient = function () {
  const self = this;

  // axios.get("http://localhost:8004/re-initiate-socket/renitiate").then(response => {
  // 	self.pao.pa_wiLog('THE REQUEST HAS SUCCEEDED TO CAREERJET')
  // 	self.pao.pa_wiLog(response.data)

  //   }).catch(err => {reject(err);});
  self.emit({
    type: "send-event-to-client",
    data: {
      payload: {
        event: { name: "kotii-client-reload", content: { user: "Ntsako" } },
      },
      callback: (data = null) => {
        console.log("SERVER SENT EVENT SENT");
        console.log("Event has been successfully sent to client", data);
        // process.exit(1)
      },
    },
  });
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
        self.closeWatcher = data.closeWatcher;
      },
    },
  });
};

methods.restartSever = function (addPath, eventType = "", runStatus = null) {
  const self = this;

  console.log(`PLUGIN:: WATCHR:: FILE ${eventType} event`, addPath, runStatus);
  process.env.CUSTOM_RESTART = true;
  process.env.ANZII_OPEN_BROWSER = "false";
  console.log(
    "PLUGIN:: THE PROCESS.ENV.PORT",
    JSON.stringify(process.env.PORT)
  );
  console.log("PLUGIN:: THE WATCHER ADD", process.env.PORT);

  self.closeWatcher(() => {
    console.log(
      "ADD EVENT CLOSING WATCHER BEFORE RESTART",
      JSON.stringify(process.env.PORT)
    );
    // await killPortProcess(process.env.PORT)
    process.exit(1);
  });
};
methods.configureDomainOnceOff = function (data, events, options = null) {
  const self = this;
  // const { watched, persistent = true, ignored = null, events = null } = payload;
  self.emit({
    type: "watch-target",
    data: {
      payload: { watched: data, events },
      callback: (data) => {
        console.log("File watch set", data);
        self.closeWatcher = data.closeWatcher;
      },
    },
  });
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
methods.createSSLCertificate = function (config, sslConfigPath) {
  const self = this;

  return new Promise((resolve, reject) => {
    // add-host-domain
    self.emit({
      type: "create-ssl-certificate",
      data: {
        payload: {
          config,
          sslConfigPath,
        },
        callback: (data) => {
          resolve(data);
        },
      },
    });
  });
};
methods.addDomainToHost = function (domain) {
  const self = this;

  return new Promise((resolve, reject) => {
    // add-host-domain
    self.emit({
      type: "add-host-domain",
      data: {
        payload: {
          domainName: domain,
        },
        callback: (data) => {
          resolve(data);
        },
      },
    });
  });
};
export default methods;
