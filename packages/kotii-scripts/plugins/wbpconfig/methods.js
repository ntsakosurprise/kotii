const methods = {};
import fs from "fs";
import path from "path";
import WebSocket, { WebSocketServer } from "ws";
import { compareCss, createCssAst, mergeCssFiles } from "../../css/index.js";
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
  const {
    useCustomDomain = false,
    useHttps = false,
    useAsDefaultPage = "/",
  } = contextApp.appManifest;
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
                  shouldWaitForSignal: true,
                  appOpts: {
                    key: certs.filesOutputPaths.key,
                    cert: certs.filesOutputPaths.key,
                  },
                  useSockets: {
                    hookSocketToServer: self.hookSocketToServer.bind(self),
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
      pageToOpen: useAsDefaultPage,
      domainName: useCustomDomain ? `${contextApp.appName}.com` : "localhost",
      shouldWaitForSignal: true,
      useSockets: {
        hookSocketToServer: self.hookSocketToServer.bind(self),
      },
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
  // self.addImportLineTCSSModulesJs()
  // self.addImportLineTAppJs()
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
    appSrc: contextApp.appSrc,
    runOnComplete: self.testRunFromWebpack.bind(self),
    closeWatcher: self.closeWatcher.bind(self),
    notifyClient: self.notifyClient.bind(self),
    isProjectPNPM: contextApp.appPnpmPkgr,
    inline:
      contextApp.appManifest?.fileLoader &&
      contextApp.appManifest?.fileLoader?.inline
        ? contextApp.appManifest.fileLoader.inline
        : false,
    runOnceDone: self.runOnceDone.bind(self),
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
        {
          routes:
            contextApp.appManifest.app.type !== "spa"
              ? routes
              : [
                  ...routes.filter((r) => r?.alias && r.alias === "home"),
                  {
                    catchAll: true,
                  },
                ],
          api: contextApp.appApi,
        },
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
  const serverType = "config-manual";
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
  const stylExtensions = [".css", ".scss", ".styl", ".less", ".sass"];
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
    change: async (addPath, stats) => {
      console.log("A FILE HAS CHANGED", addPath);
      self.debug("CHANGE EVENT OCCURED ON", addPath, stats);
      if (stylExtensions.includes(path.extname(addPath))) {
        self.debug("CHANGED FILE IS CSS");
        //  const stylesModulesPath = `${kotiiKotiiLandPath}/dev/styles-css-modules.json`
        //  const stylesMeta = JSON.parse(
        //   fs.readFileSync(stylesModulesPath, {
        //     encoding: "utf8",
        //   })
        // );
        if (!self?.stylesMeta) self.loadCssModuleDataFile();

        let stylesMeta = self.stylesMeta;
        let moduleInfo = null;
        let pathContext = null;
        let possilbeImports = null;
        let possibleMatch = null;
        let currentMetaKey = null;
        for (let fileAsModule in stylesMeta) {
          console.log("The current fileAsModule", fileAsModule);
          moduleInfo = stylesMeta[fileAsModule];
          pathContext = moduleInfo.pathContext;
          possilbeImports = moduleInfo?.imports || null;
          //  let fileID = self.getFileID(pathContext,possilbeImports)
          possibleMatch = self.checkMatchType(
            pathContext,
            possilbeImports,
            addPath
          );
          console.log("THE POSSIBLE MATCH", possibleMatch);
          if (possibleMatch.pathMatched) {
            currentMetaKey = fileAsModule;
            break;
          }
        }

        if (possibleMatch && possibleMatch?.pathMatched) {
          let extension = path.extname(addPath);
          let changeFilename = addPath.substring(
            addPath.lastIndexOf("/"),
            addPath.length
          );
          console.log("THE EXTENSION TO TEST", extension);
          let updatedContent = await self.getCssUpdateContent({
            addPath,
            extension,
            changeFilename,
          });

          const matchedInfo = possibleMatch.importsMatch
            ? possilbeImports[addPath]
            : moduleInfo;

          self.debug("THE MATCHED INFO", matchedInfo);
          const updatedContentAst = createCssAst([updatedContent]);
          const currentOriginalAst = possibleMatch.importsMatch
            ? matchedInfo.inputBeforeAst
            : matchedInfo?.currentOriginalAst
            ? matchedInfo.currentOriginalAst
            : matchedInfo.cssAst;

          compareCss(currentOriginalAst, updatedContentAst).then(
            async (compareResults) => {
              const content = {};
              let updatedImports = null;
              console.log("THE COMPARE RESULTS", compareResults);
              if (compareResults.update?.importsUpdates) {
                updatedImports = await self.doImportsCssUpdates(
                  compareResults,
                  content,
                  matchedInfo,
                  possilbeImports,
                  updatedContent,
                  updatedContentAst
                );
              }
              if (compareResults.update?.updateContent) {
                self.doNoneImportsCssUpdates(
                  compareResults,
                  content,
                  moduleInfo
                );
              }
              //  matchedInfo.inputBeforeAst = updatedContentAst

              self.notifyClient({
                name: "kotii-client-css-update",
                updateType: "immediate",
                content,
              });

              console.log(
                "POSSIBLE IMPORTS BEFORE UPDATE",
                JSON.stringify(possilbeImports)
              );
              console.log(
                "IMPORTS AFTER UPDATES",
                JSON.stringify(updatedImports)
              );

              if (
                possibleMatch?.importsMatch ||
                (!possibleMatch?.importsMatch && updatedImports)
              ) {
                if (updatedImports) {
                  if (!updatedImports?.isNull) {
                    stylesMeta[currentMetaKey].imports = { ...updatedImports };
                  } else {
                    stylesMeta[currentMetaKey]["imports"] = null;
                  }
                } else {
                  stylesMeta[currentMetaKey].imports[addPath] = {
                    ...matchedInfo,
                    inputBeforeAst: updatedContentAst,
                    inputBefore: updatedContent,
                  };
                }
              } else {
                stylesMeta[currentMetaKey].currentOriginalAst =
                  updatedContentAst;
              }
              console.log("THE STYLES META KEY", stylesMeta[currentMetaKey]);

              // possibleMatch?.importsMatch
              // ? updatedImports ? stylesMeta[currentMetaKey].imports = {...updatedImports} :  stylesMeta[currentMetaKey].imports[addPath].inputBeforeAst = updatedContentAst
              // : stylesMeta[currentMetaKey].currentOriginalAst = updatedContentAst

              // console.log("styles meta after update", JSON.stringify(stylesMeta[currentMetaKey]))

              // !possibleMatch?.importsMatch ? stylesMeta[fileAsModule] = moduleInfo : null
              // console.log("Update content AST AFTER SAVE", stylesMeta[fileAsModule])
              // fs.writeFile(stylesModulesPath,JSON.stringify(stylesMeta,null,2),(err)=>{
              //   console.log("file save update",err)
              // })
            }
          );

          //  diffLines(currentOriginalAst, updatedContent,(results)=>{
          //    console.log("Diff results",results)
          //  })
        }
        //  console.log("THE STYLES MODULELS PATH",stylesMeta, Object.keys(stylesMeta))
        //  const updatedContent = fs.readFileSync(addPath,{encoding: "utf-8"})
        //  self.debug("The updated content",updatedContent)
        //  self.notifyClient()
      } else {
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
      }
    },
  });
};
methods.notifyClient = function (updateInfo) {
  const self = this;

  // axios.get("http://localhost:8004/re-initiate-socket/renitiate").then(response => {
  // 	self.pao.pa_wiLog('THE REQUEST HAS SUCCEEDED TO CAREERJET')
  // 	self.pao.pa_wiLog(response.data)

  //   }).catch(err => {reject(err);});

  self.wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      console.log("send data to client with socket", updateInfo);
      client.send(JSON.stringify(updateInfo));
    }
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

methods.insertIdentifierImportDeclarations = function (imports) {
  const self = this;

  const generate = self.generate;

  const parser = self.parser;

  let importString = imports.map((im, i) => {
    return `import ${
      !im?.defaultImport ? `{${im.ids.join(",")}}` : im.ids.join(",")
    } from "${im.source}";`;
  });

  let joinedString = `${importString.join("")}`;
  self.debug("ASTY JOINED ID STRING", joinedString);
  let ast = parser.parse(joinedString, { sourceType: "module" });
  let modifiedCode = generate(ast).code;
  self.debug("ASTY CODE ID THE IMPOT STRINGS", importString);
  self.debug("ASTY CODE ID", modifiedCode);
  self.debug();
  return modifiedCode;
};

methods.addImportLineTCSSModulesJs = function () {
  const self = this;
  const pao = self.pao;
  const generate = self.generate;
  const parser = self.parser;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;

  const buildPath = `${kotiiKotiiLandPath}/dev/hot-load-css-modules.js`;
  const buildPathFile = readFileSync(buildPath);
  let buildAst = parser.parse(buildPathFile, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  self.debug("AST FOR BUILD.JS");
  // self.removeImportDeclarations(buildAst, ["./pages.js"]);
  const generateBuildAst = generate(buildAst).code;
  const buildImportString = self.insertIdentifierImportDeclarations([
    {
      source: "./styles-css-modules.json",
      defaultImport: true,
      ids: ["dependecies"],
    },
  ]);
  let newFileContent = `${buildImportString} ${generateBuildAst}`;
  saveToFile(buildPath, newFileContent);
};

methods.addImportLineTAppJs = function () {
  const self = this;
  const pao = self.pao;
  const generate = self.generate;
  const parser = self.parser;
  const readFileSync = pao.pa_readFileSync;
  const saveToFile = pao.pa_saveToFile;

  const buildPath = `${kotiiKotiiLandPath}/dev/app_.js`;
  const buildPathFile = readFileSync(buildPath);
  let buildAst = parser.parse(buildPathFile, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  self.debug("AST FOR BUILD.JS");
  // self.removeImportDeclarations(buildAst, ["./pages.js"]);
  const generateBuildAst = generate(buildAst).code;
  const buildImportString = self.insertIdentifierImportDeclarations([
    {
      source: "./hot-load-css-modules.js",
      ids: ["test"],
    },
  ]);
  let newFileContent = `${buildImportString} ${generateBuildAst}`;
  saveToFile(buildPath, newFileContent);
};
methods.runOnceDone = function () {
  const self = this;
  // const { watched, persistent = true, ignored = null, events = null } = payload;
  self.emit({
    type: "open-browser-signal",
    data: {},
  });
};

methods.hookSocketToServer = function (server) {
  const self = this;
  self.debug("HOOKING SOCKET TO SERVER");
  self.wss = new WebSocketServer({ server });

  self.wss.on("connection", (ws) => {
    console.log("Client connected");
    self.webSocketConnection = ws;

    // ws.on('message', message => {
    //   console.log('Received message:', message);
    //   wss.clients.forEach(client => { // Broadcast to all clients
    //     if (client !== ws && client.readyState === WebSocket.OPEN) {
    //       client.send(message);
    //     }
    //   });
    // });

    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });
};

methods.doOldSelectorUpdate = function (
  oldSelectorsUpdate,
  moduleInfo,
  content
) {
  const self = this;

  let modulesClassMaps = moduleInfo.modules;
  let oldSelectorsKeys = Object.keys(oldSelectorsUpdate);
  let referenceOfSelectorInTheBrowser = "";

  oldSelectorsKeys.forEach((oldSelectorKey) => {
    if (oldSelectorKey.indexOf(".") === 0) {
      if (modulesClassMaps?.modules) {
        let originalClassName = oldSelectorKey.substring(
          1,
          oldSelectorKey.length
        );
        referenceOfSelectorInTheBrowser = `.${modulesClassMaps[originalClassName]}`;
      } else {
        referenceOfSelectorInTheBrowser = oldSelectorKey;
      }
    } else {
      referenceOfSelectorInTheBrowser = oldSelectorKey;
    }
    if (!content["oldSelectorsUpdate"]) {
      content["oldSelectorsUpdate"] = [
        {
          selector: referenceOfSelectorInTheBrowser,
          selectorCss: oldSelectorsUpdate[oldSelectorKey],
        },
      ];
    } else {
      content.oldSelectorsUpdate.push({
        selector: referenceOfSelectorInTheBrowser,
        selectorCss: oldSelectorsUpdate[oldSelectorKey],
      });
    }
  });
};
methods.doNewSelectorUpdate = function (selectorsUpdate, moduleInfo, content) {
  const self = this;

  let modulesClassMaps = moduleInfo.modules;
  let selectorsKeys = Object.keys(selectorsUpdate);

  selectorsKeys.forEach((selectorKey) => {
    if (!content["newSelectorsUpdate"]) {
      content["newSelectorsUpdate"] = [
        {
          selector: selectorKey,
          selectorCss: selectorsUpdate[selectorKey],
        },
      ];
    } else {
      content.newSelectorsUpdate.push({
        selector: selectorKey,
        selectorCss: selectorsUpdate[selectorKey],
      });
    }
  });
};
methods.doRemoveSelectorUpdate = function (
  removeSelectorsUpdate,
  moduleInfo,
  content
) {
  const self = this;

  content["removeSelectorsUpdate"] = removeSelectorsUpdate;
};
methods.getCssUpdateContent = async function (options) {
  const self = this;
  const { addPath, changeFilename, extension } = options;
  console.log("CHnage extension", addPath, changeFilename, extension);

  switch (extension) {
    case ".css":
      return fs.readFileSync(addPath, {
        encoding: "utf8",
      });

    // case '.less': return lessToCssConverter(addPath,changeFilename)
    // case '.sass':
    // break;
    // case ".scss":
    // break;
    // case '.stylus':
    // break;
    default:
      throw new Error("The CSS UPTAR");
  }
};

methods.doImportsCssUpdates = async function (
  cssUpdateResults,
  content,
  matchedInfo,
  imports,
  currentFileInput,
  updateAst
) {
  const self = this;
  console.log("THE CSS UPDATE RESULTS", cssUpdateResults);
  let preRegexLeftPattern = `\\/\\*\\s*(INCLUDED_CSS)_HEAD:\\s*(`;
  let preRegexRightPattern = `)\\s*\\*\\/([\\S\\s]*?)\\/\\*\\s*\\1_FOOTER:\\s*\\2\\s(\\*\\/)$`;
  let regexPatterns = { preRegexLeftPattern, preRegexRightPattern };
  // let IMPORT_FILE_TEXT_REGEX = new RegExp(`\/\*\s*(INCLUDED_CSS)_HEAD:\s*(${escapedFileName})\s*\*\/([\S\s]*?)\/\*\s*\1_FOOTER:\s*\2\s(\*\/)$`,"gim")

  const { update } = cssUpdateResults;
  const { importsUpdates } = update;
  const { importRemovals = null, newImports = null } = importsUpdates;
  console.log("THE IMPORT REMOVALS", importRemovals);
  console.log("THE NEW IMPORTS", newImports);

  if (importRemovals) {
    console.log("Import removals");
    console.log("THE IMPORTS", imports);
    if (!content?.removeImportsUpdate) content["removeImportsUpdate"] = [];

    imports[matchedInfo.selfReferencePath] = {
      ...matchedInfo,
      inputBefore: currentFileInput,
      inputBeforeAst: updateAst,
    };
    importRemovals.forEach((toRemoveKey) => {
      let escapedFileName = toRemoveKey.replace(/[^a-zA-Z0-9]/g, "\\$&");
      let regexString = `${preRegexLeftPattern}${escapedFileName}${preRegexRightPattern}`;
      content.removeImportsUpdate.push(regexString);
      // let IMPORT_FILE_TEXT_REGEX = new RegExp(regexString,"gim")
      // console.log("THE IMPORT REGEX", IMPORT_FILE_TEXT_REGEX)
      // console.log("THE MATCHED INFO", matchedInfo)
      let removePath = matchedInfo.children[toRemoveKey].path;
      let toRemoveObject = imports[removePath];
      // console.log("THE PATH", removePath)
      // console.log("JSON.STRINGIFYIED", JSON.stringify(imports))
      // console.log("IMPORTS",imports,removePath)
      // let testSTring = matchedInfo.inputAfter
      // console.log("THE TEST STRING", testSTring)
      // console.log("Results of checking string",IMPORT_FILE_TEXT_REGEX.test(testSTring))
      // console.log("Results of checking string.replaced",testSTring.replace(IMPORT_FILE_TEXT_REGEX,""))
      console.log("THE OBJECT TO REMOVE", toRemoveObject);

      self.removeOutdatedCssFile(
        imports[matchedInfo.selfReferencePath],
        toRemoveObject,
        "",
        toRemoveObject.pathAsShortID,
        imports,
        regexPatterns
      );
      delete matchedInfo.children[toRemoveKey];
      delete imports[removePath];
    });
    if (!matchedInfo?.parent && Object.keys(matchedInfo.children).length <= 0) {
      return { isNull: true };
    }
  }
  // console.log("THE CONTENT AFTER ALL", content)

  if (newImports) {
    // for(let newImport in newImports){
    if (!content?.addImportsUpdate) content["addImportsUpdate"] = [];
    console.log("THE CURRENT FILE INPUT", currentFileInput);
    console.log("ELEMENT BEFORE", JSON.stringify(matchedInfo));

    let mergeResults = await mergeCssFiles(
      currentFileInput,
      !imports
        ? matchedInfo
        : {
            parent: matchedInfo?.parent || null,
            pathAsShortID: matchedInfo.pathAsShortID,
            shouldWrapFile: matchedInfo?.pathAsShortID ? true : null,
            // selfReferencePath: matchedInfo.selfReferencePath,
            pathContext: {
              fileFullPath: matchedInfo.selfReferencePath,
            },
          }
    );

    if (!imports) {
      console.log("NO IMPORTS MERGE RESULTS", mergeResults);
      imports = { ...mergeResults.imports };
      content.addImportsUpdate.push({
        addString: mergeResults.input,
        addCssToParentStart: true,
      });

      return imports;
    }
    imports = { ...imports, ...mergeResults.imports };
    console.log("THE MATCHED IMPORTS", matchedInfo);
    console.log("THE MERGE RESULTS", mergeResults.imports);

    let updateImportsParent = matchedInfo?.parent
      ? imports[matchedInfo.parent.path]
      : null;
    if (updateImportsParent) {
      self.syncContentToParents(
        updateImportsParent,
        imports[matchedInfo.selfReferencePath].inputAfter,
        matchedInfo.pathAsShortID,
        imports,
        regexPatterns
      );
      let updatesImportsParentID = null;
      let addCssToParentStart = false;
      console.log("THE IMPORTS AS", imports[matchedInfo.parent.path]);
      console.log("THE MERGE RESULTS", mergeResults);
      // let sendKeys = Object.keys(mergeResults.imports)
      console.log("THE PARENT UPDATE IMPORT", updateImportsParent);
      console.log("THE IMPORTS WITH POTENTIAL UPDATES", imports);

      if (updateImportsParent?.pathAsShortID) {
        updatesImportsParentID = updateImportsParent.pathAsShortID.replace(
          /[^a-zA-Z0-9]/g,
          "\\$&"
        );
      } else {
        if (
          updateImportsParent.inputAfter.indexOf(matchedInfo.pathAsShortID) >= 0
        ) {
          updatesImportsParentID = matchedInfo.pathAsShortID.replace(
            /[^a-zA-Z0-9]/g,
            "\\$&"
          );
        } else {
          addCssToParentStart = true;
        }
      }
      let regexString = !addCssToParentStart
        ? `${preRegexLeftPattern}${updatesImportsParentID}${preRegexRightPattern}`
        : null;
      content.addImportsUpdate.push({
        addString: updateImportsParent.inputAfter,
        addPattern: regexString,
        addCssToParentStart,
      });
    } else {
      console.log("ADD TO PARENT FRONT");
      let oldChildren = Object.keys(matchedInfo.children);
      let newChildren = Object.keys(
        imports[matchedInfo.selfReferencePath].children
      );
      console.log("OLD KIDS", oldChildren);
      console.log("NEW KIDS", newChildren);

      let newChildrenKeys = newChildren.filter(
        (item) => !oldChildren.includes(item)
      );
      console.log("NEW CHILDREN KEYS", newChildrenKeys);
      newChildrenKeys.forEach((childKey) => {
        let keyPathInParent =
          imports[matchedInfo.selfReferencePath].children[childKey].path;
        content.addImportsUpdate.push({
          addString: imports[keyPathInParent].inputAfter,
          addCssToParentStart: true,
        });
      });
    }

    //}
  }
  return imports;
};
methods.doNoneImportsCssUpdates = function (
  noneCssUpdates,
  content,
  moduleInfo
) {
  const self = this;

  const { update } = noneCssUpdates;

  console.log("COMPARE RESULTS.UPDATE", update);
  console.log("COMPARE RESULTS.UPDATE.UPDATECONTENT", update.updateContent);
  console.log(
    "COMPARE RESULTS.UPDATE.UPDATECONTENT",
    update.updateContent.oldSelectors
  );
  let updateContent = update.updateContent;
  let oldSelectorsUpdate = updateContent?.oldSelectors;

  let domUpdateTypesKeys = Object.keys(updateContent);

  domUpdateTypesKeys.forEach((updateTypeKey) => {
    let currentUpdateType = updateContent[updateTypeKey];
    switch (updateTypeKey) {
      case "oldSelectors":
        self.doOldSelectorUpdate(currentUpdateType, moduleInfo, content);

        break;
      case "newSelectors":
        self.doNewSelectorUpdate(currentUpdateType, moduleInfo, content);
        break;
      case "removeSelectors":
        content["removeSelectorsUpdate"] = currentUpdateType;
        break;
      case "removeSelectorsProps":
        content["removeSelectorsPropsUpdate"] = currentUpdateType;
        break;
      default:
        throw new Error("Update type unknown");
    }
  });

  // self.notifyClient({
  //   name: "kotii-client-css-update",
  //   updateType: "immediate",
  //   content
  // })

  // possilbeImports && possilbeImports[addPath]
  // ? possilbeImports[addPath].inputBeforeAst = updatedContentAst
  // : moduleInfo.currentOriginalAst = updatedContentAst

  // possilbeImports && possilbeImports[addPath] ? null : stylesMeta[fileAsModule] = moduleInfo
  // // console.log("Update content AST AFTER SAVE", stylesMeta[fileAsModule])
  // fs.writeFile(stylesModulesPath,JSON.stringify(stylesMeta,null,2),(err)=>{
  //   console.log("file save update",err)
  // })
};
methods.checkMatchType = function (pathContext, imports, addPath) {
  const self = this;
  let matchType = {};

  if (imports && imports[addPath]) {
    matchType["pathMatched"] = true;
    matchType["importsMatch"] = true;
  } else if (pathContext.fileFullPath === addPath) {
    matchType["pathMatched"] = true;
    matchType["importsMatch"] = false;
  } else {
    matchType["pathMatched"] = false;
  }
  return matchType;
  // pathContext.fileFullPath === addPath ? matchType["importsMatch"] = false:
};
methods.syncContentToParents = function (
  syncFile,
  replaceString,
  replaceName,
  imports,
  patterns
) {
  const self = this;
  console.log("REPLACE NAME", replaceName);
  console.log("THE SYNC FILE", syncFile);
  console.log("THE REPLACE STRING", replaceString);
  console.log("FILE NAME IS", syncFile?.pathAsShortID);

  const { preRegexLeftPattern, preRegexRightPattern } = patterns;

  let escapedFileName = replaceName.replace(/[^a-zA-Z0-9]/g, "\\$&");
  let regexString = `${preRegexLeftPattern}${escapedFileName}${preRegexRightPattern}`;
  let IMPORT_FILE_TEXT_REGEX = new RegExp(regexString, "gim");
  // let syncFileParent = imports[syncFile.parent?.path]
  // console.log()
  console.log("THE REGEX STRING", regexString);
  console.log("THE REGEX", IMPORT_FILE_TEXT_REGEX);

  syncFile.inputAfter = syncFile.inputAfter.replace(
    IMPORT_FILE_TEXT_REGEX,
    replaceString
  );
  console.log(
    "INPUT MATCHED",
    IMPORT_FILE_TEXT_REGEX.test(syncFile.inputAfter)
  );
  imports[syncFile.selfReferencePath].inputAfter = syncFile.inputAfter;

  if (syncFile?.parent) {
    self.syncContentToParents(
      imports[syncFile.parent.path],
      syncFile.inputAfter,
      syncFile.pathAsShortID,
      imports,
      patterns
    );
  }
};
methods.removeOutdatedCssFile = function (
  syncFile,
  toRemove,
  replaceString,
  replaceName,
  imports,
  patterns
) {
  const self = this;
  console.log("REPLACE NAME", replaceName);
  console.log("THE SYNC FILE", syncFile);
  console.log("THE REPLACE STRING", replaceString);
  console.log("FILE NAME IS", syncFile?.pathAsShortID);
  console.log("THE PATTERns", patterns);
  console.log("TO REMOVE OBJECT", toRemove);

  const { preRegexLeftPattern, preRegexRightPattern } = patterns;

  let escapedFileName = replaceName.replace(/[^a-zA-Z0-9]/g, "\\$&");
  let regexString = `${preRegexLeftPattern}${escapedFileName}${preRegexRightPattern}`;
  console.log("THE REGEX STRING", regexString);
  let IMPORT_FILE_TEXT_REGEX = new RegExp(regexString, "gim");
  console.log("THE REGEX", IMPORT_FILE_TEXT_REGEX);
  console.log(
    "INPUT MATCHED",
    IMPORT_FILE_TEXT_REGEX.test(syncFile.inputAfter)
  );
  syncFile.inputAfter = syncFile.inputAfter.replace(
    IMPORT_FILE_TEXT_REGEX,
    replaceString
  );

  imports[syncFile.selfReferencePath].inputAfter = syncFile.inputAfter;

  if (toRemove.children) {
    self.recursivelyRemoveChildren(toRemove, imports);
  }

  if (syncFile?.parent) {
    self.removeOutdatedCssFile(
      imports[syncFile.parent.path],
      toRemove,
      "",
      replaceName,
      imports,
      patterns
    );
  }
};

methods.loadCssModuleDataFile = function () {
  const self = this;
  const stylesModulesPath = `${kotiiKotiiLandPath}/dev/styles-css-modules.json`;
  self["stylesMeta"] = JSON.parse(
    fs.readFileSync(stylesModulesPath, {
      encoding: "utf8",
    })
  );

  //  fs.readFile(stylesModulesPath,{encoding:"utf-8"},(rawData)=>{

  //    self["stylesMeta"] = JSON.parse(rawData)
  //    console.log("THE CSS FILE IS LOADED",self.stylesMeta)
  //  })
};

methods.recursivelyRemoveChildren = function (childrenParent, imports) {
  const self = this;
  let children = childrenParent.children;
  let childrenKeys = Object.keys(children);
  console.log("CHILDREN PARENT", childrenParent);
  childrenKeys.forEach((childKey) => {
    console.log("CHILDREN.KEY.FOREACH", childKey);
    if (imports[children[childKey].path]?.children) {
      self.recursivelyRemoveChildren(imports[children[childKey].path], imports);
    }
    //  console.log("DELETE CHILD KEY", childKey)
    //  let childPathAsID = imports[children[childKey].path].pathAsShortID
    //  console.log("CHILD PATH AS ID", childPathAsID)

    delete imports[children[childKey].path];
    //  delete imports[childrenParent.selfReferencePath].children[childPathAsID]
  });
};

export default methods;
