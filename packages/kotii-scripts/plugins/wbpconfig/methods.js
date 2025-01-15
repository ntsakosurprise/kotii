const methods = {};
import fs from "fs";
import path from "path";
import { kotiiKotiiLandPath } from "../../kotii_paths.js";

methods.init = function () {
  this.listens({
    "webpack-config": this.handleWebpackConfig.bind(this),
  });
};
methods.handleWebpackConfig = function (data) {
  const self = this;
  // self.debug("SELF BEFORE", self);
  self["callback"] = data.callback;
  const loadFile = self.pao.pa_loadFile;
  const { contextApp } = data.payload;
  const { appEnv = "" } = contextApp;
  const { useCustomDomain = false, useHttps = false } = contextApp.appManifest;
  self.debug("WEBPACK DATA PAYLOAD", data.payload.build);
  // self.debug("SELF. AFTER SETTING CALLBACK", self);
  // self.debug("THE NODE ENV", process.env.NODE_ENV);
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
    process.env["ANZII_APP_USE_HTTPS"] = true;
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    loadFile(path.resolve(kotiiKotiiLandPath, ".certsConfig.json"))
      .then((sslConfig) => {
        let config = JSON.parse(sslConfig);
        self
          .createSSLCertificate(config, `${kotiiKotiiLandPath}/openssl.conf`)
          .then((certs) => {
            self.debug("THE APP CERTS", certs);
            self
              .addDomainToHost(`${contextApp.appName}.com`)
              .then((addedHost) => {
                let server = {
                  useHttps,
                  useCustomDomain,
                  useAvailablePort: false,
                  domainName: addedHost.domainName,
                  appOpts: {
                    key: certs.filesOutputPaths.key,
                    cert: certs.filesOutputPaths.key,
                  },
                };
                server["APP_URL"] = `${useHttps ? "https" : "http"}://${
                  server.domainName
                }:${process.env.PORT}`;

                self.getEnvVariables(appEnv).then((envs) => {
                  self.debug("THE ENVS", config);
                  self.configureWebPack(data.payload, envs, server);
                });
              });
          });
      })
      .catch((err) => {
        self.debug("An error occured loading file", err);
      });
  } else {
    let server = {
      useHttps,
      useCustomDomain,
      useAvailablePort: false,
      domainName: useCustomDomain ? `${contextApp.appName}.com` : "localhost",
    };
    useCustomDomain
      ? (server["appOpts"] = {
          key: fs.readFileSync(
            path.resolve(process.cwd(), "ssl/generated-key.pem")
          ),
          cert: fs.readFileSync(
            path.resolve(process.cwd(), "ssl/generated-certificate.pem")
          ),
        })
      : null;
    server["APP_URL"] = `${useHttps ? "https" : "http"}://${
      server.domainName
    }:${process.env.PORT}`;
    if (useHttps) {
      process.env["ANZII_APP_USE_HTTPS"] = true;
      process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    }

    self.getEnvVariables(appEnv).then((envs) => {
      self.debug("THE ENVS", envs);
      self.configureWebPack(data.payload, envs, server);
    });
  }

  return;
};
methods.handleSystemAppUrl = function (data) {
  self.debug("HandleSystemAppurl", data);
  const self = this;
  // self.debug("SELF BEFORE", self);
  self["callback"] = data.callback;
  process.env["KOTII_APP_URL"] = JSON.stringify(data.App_URL);
  // self.debug("THE NODE ENV", process.env.NODE_ENV);
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

  // self.debug("THE APP CONTEXT CONFIG", payload);
  process.env["KOTII_APP_URL"] = JSON.stringify(certDomainConfig.APP_URL);
  envs.stringified["KOTII_APP_META"] = JSON.stringify(
    contextApp.appManifest.app
  );
  envs.stringified["KOTII_SHOW_DEBUG_LOGS"] = true;

  self.debug("THE APP ENVS", envs);

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

  self.debug("PROCESS.ENV", process.env);
  self.debug("THE WEBPACK CONFIG", webpackConfigObject);
  let wbpCompiler = null;
  try {
    wbpCompiler = webpack(webpackConfigObject);
  } catch (err) {
    self.debug("Webpack config error", err);
    process.exit(1);
  }

  if (!build)
    return self.hookIntoWebpackCompilation(wbpCompiler).then((hooked) => {
      self.debug("THE CONFIG HOOK STATUS", hooked);
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
    self.debug("ABOUT TO TRIGGER MANUAL webpack compilation");
    wbpCompiler.run((err, stats) => {
      self.debug("COMPILER ERR", err);
      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }
      self.debug("COMPILER INFO", info.assets);
      self.callback({
        webpackCompileStats: {
          assets: info.assets,
        },
      });
    });
  });

  // self.debug("THE WEBPACK COMPILER", wbpCompiler);
  return;
};
methods.setContextEnv = function (mdconfig, envs = null) {
  process.env["APPCONTEXT"] = JSON.stringify(mdconfig);
  if (envs) {
    // self.debug("STRINGIFIED ENVS", envs);
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
  serverConfig = null
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
  // self.debug("SELF IN CONFIGURE", self);
  self.debug("THE APP WITH APP CLI", process.env?.ANZII_CLI_WITH_SERVER);
  self.debug("THE SERVER TYPE", serverType);
  self.emit({
    type: "take-ssr-routes",
    data: { payload: { routes: [...anziiManualConfigs.routes] } },
  });
  if (anziiManualConfigs.api && fs.existsSync(anziiManualConfigs.api)) {
    loadFile(`${anziiManualConfigs.api}${path.sep}.config.js`).then(
      (config) => {
        self.debug("API PLUGIN THE CONFIG FILE", config);
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
                cluster: { workers: 1, spawn: false },
                server: serverConfig,
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
            cluster: { workers: 1, spawn: false },
            server: serverConfig,
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
    self.debug("wEBPACK is compiling our code....");
  });
  compiler.hooks.invalid.tap("done", (stats) => {
    self.debug("Compiler is done compiling our code");
    self.debug(stats);
  });
  return true;
};

methods.removePagesImport = function () {
  self.debug("REMOVE GETS A CALL");
  const self = this;

  self.emit({
    type: "remove-pages-import",
    data: {
      callback: () => {
        self.debug("KOTII HAS REMOVED PAGES IMPORT");
      },
    },
  });
};

methods.testRunFromWebpack = function (watchPath, runStatus) {
  const self = this;
  self.debug("TEST RUN FROM WEBPACK", self.removePagesImport, watchPath);
  self.watchFile(watchPath, {
    add: (addPath, stats) => {
      // let stats = null
      // stats = fs.statSync(addPath);
      self.debug("WATCHR:: ADD FILE STATS", addPath, stats);
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
        self.debug("FILE SIZE IS BIGGER THAN ZERO, NO RESTART");
        self.restartSever(addPath, runStatus);
      } else {
        self.debug("FILE SIZE IS ZERO, NO RESTART");
        if (!self.addedEmptyFiles) {
          self.addedEmptyFiles = [addPath];
        } else {
          self.addedEmptyFiles.push(addPath);
        }
      }

      // self.notifyClient()
    },
    delete: (addPath, stats) => {
      self.debug("WATCHR:: DELETE FILE STATS", addPath, stats);
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
          self.debug(
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
        self.debug("SERVER SENT EVENT SENT");
        self.debug("Event has been successfully sent to client", data);
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
        self.debug("File watch set", data);
        self.closeWatcher = data.closeWatcher;
      },
    },
  });
};

methods.restartSever = function (addPath, eventType = "", runStatus = null) {
  const self = this;

  self.debug(`PLUGIN:: WATCHR:: FILE ${eventType} event`, addPath, runStatus);
  process.env.CUSTOM_RESTART = true;

  process.env.ANZII_OPEN_BROWSER = "false";
  self.debug("PLUGIN:: THE PROCESS.ENV.PORT", JSON.stringify(process.env.PORT));
  self.debug("PLUGIN:: THE WATCHER ADD", process.env.PORT);

  self.closeWatcher(() => {
    self.debug(
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
        self.debug("File watch set", data);
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
    // self.debug("FILE STATISTICS", stats);
    const isFile = stats.isFile();
    // self.debug("IS FILE", isFile);
    return isFile;
  } catch (error) {
    // self.debug("THE STATS THROWN", error);
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
