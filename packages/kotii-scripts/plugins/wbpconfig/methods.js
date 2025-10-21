const methods = {};
const MATCH_REMOTE_RESOURCE_REGEX = /(https|http):+\/\//i;
let tailwindConfig = null;
let tailwindRootFile = "";
import autoprefixer from "autoprefixer";
import fs from "fs";
import path from "path";
import postcss from "postcss";
import postcssNested from "postcss-nested";
import tailwindcss from "tailwindcss";
import WebSocket, { WebSocketServer } from "ws";
import {
  compareCss,
  createCssAst,
  lessToCssConverter,
  mergeCssFiles,
  sassToCssConverter,
  stylusToCssConverter,
} from "../../css/index.js";
import { kotiiKotiiLandPath } from "../../kotii_paths.js";
import createRandomeName from "./createRandomName.js";

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
  const { contextApp, build = false } = data.payload;
  const { appEnv = "" } = contextApp;
  const {
    useCustomDomain = false,
    useHttps = false,
    useAsDefaultPage = "/",
    appStyles = null,
  } = contextApp.appManifest;
  self.debug("WEBPACK DATA PAYLOAD", data.payload.build);
  // self.debug("SELF. AFTER SETTING CALLBACK", self);
  // self.debug("THE NODE ENV", process.env.NODE_ENV);

  if (contextApp?.appManifest?.htmlSettings) {
    self.emit({
      type: "set-html-page-settings",
      data: {
        payload: { htmlPageSettings: contextApp.appManifest.htmlSettings },
      },
    });
  }

  if (!fs.existsSync(contextApp.appSsl) && useHttps && !build) {
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
  const loadFile = self.pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
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
  envs.stringified["KOTII_APP_URL"] = JSON.stringify(certDomainConfig.APP_URL);
  envs.stringified["KOTII_USE_LAZY"] = JSON.stringify(
    process?.useLazyLoad ? true : false
  );

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
    createCssStyles: contextApp.appManifest?.appStyles
      ? self.createCssStyles.bind(self)
      : null,
    tailwindConfig: contextApp?.appTailwindConfig || null,
    runForTailwindCss: self.runForTailwindCss.bind(self),
    saveTailwindResources: self.saveTailwindResources.bind(self),
    // tsConfigReaders: {
    //   commonJs: loadFile,
    //   esmJs: self.dynamicImport.bind(self),
    // },
    // fileReader: readFileSync,
  });

  self.debug("PROCESS.ENV", process.env);
  self.debug("THE WEBPACK CONFIG", webpackConfigObject);
  let wbpCompiler = null;
  try {
    wbpCompiler = webpack(webpackConfigObject);
    self.compiler = wbpCompiler;
    wbpCompiler.watch = () => {};
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
      self.runWebpackCompiler();
    });

  self.hookIntoWebpackCompilation(wbpCompiler).then((hooked) => {
    self.debug("ABOUT TO TRIGGER MANUAL webpack compilation");
    self.runWebpackCompiler();
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
      self.debug("CHANGE EVENT OCCURED ON", addPath, stats);
      if (stylExtensions.includes(path.extname(addPath))) {
        /**
         * The line below calls loadCssModulesDataFile if css styles meta data has not been loaded
         * The styles meta data is read only once and stored in stylesMeta.
         */
        if (!self?.stylesMeta) self.loadCssModuleDataFile();

        let stylesMeta = self.stylesMeta;
        let moduleInfo = null;
        let pathContext = null;
        let possilbeImports = null;
        let possibleMatch = null;
        let currentMetaKey = null;

        /** Loop through data items and find one that matches a changed css file */
        for (let fileAsModule in stylesMeta) {
          moduleInfo = stylesMeta[fileAsModule];
          pathContext = moduleInfo.pathContext;
          possilbeImports = moduleInfo?.imports || null;
          //  let fileID = self.getFileID(pathContext,possilbeImports)

          // Check if path is matched in imports or pathContext objects
          possibleMatch = self.checkMatchType(
            pathContext,
            possilbeImports,
            addPath
          );

          if (possibleMatch.pathMatched) {
            currentMetaKey = fileAsModule; // store key of the matched object for this path
            break;
          }
        }

        if (possibleMatch && possibleMatch?.pathMatched) {
          let extension = path.extname(addPath);
          let changeFilename = addPath.substring(
            addPath.lastIndexOf("/"),
            addPath.length
          );

          /** Read content of the currently changed file */
          let updatedContent = await self.getCssUpdateContent({
            addPath,
            extension,
            changeFilename,
          });

          const matchedInfo = possibleMatch.importsMatch
            ? possilbeImports[addPath]
            : moduleInfo;

          const updatedContentAst = createCssAst([updatedContent]); // create ast of the current file
          const currentOriginalAst = possibleMatch.importsMatch
            ? matchedInfo.inputBeforeAst
            : matchedInfo?.currentOriginalAst
            ? matchedInfo.currentOriginalAst
            : matchedInfo.cssAst;

          /** Compare content of the file before and after change by passing new and outdated asts.
           * Comparing these two ast trees enables us the ability to detect new content and handle it
           * accordingly.
           */
          compareCss(currentOriginalAst, updatedContentAst).then(
            async (compareResults) => {
              const content = {};
              let updatedImports = null;

              /** Run imports updates if they exist from the comparison results. imports updates are
               * updates that involve addition and removal of actual files from within other css files.
               * These files are included in other css files using @imports statements, and hence the name
               */
              if (compareResults.update?.importsUpdates) {
                updatedImports = await self.doImportsCssUpdates(
                  compareResults,
                  content,
                  matchedInfo,
                  possilbeImports,
                  updatedContent,
                  updatedContentAst,
                  moduleInfo
                );
              }
              // Run for none-imports updates
              if (compareResults.update?.updateContent) {
                self.doNoneImportsCssUpdates(
                  compareResults,
                  content,
                  moduleInfo
                );
              }

              // Check if styles are served through a css link file
              // If they are set keys to let the client know that this
              // is for a file

              if (process?.useLinkStyleTag) {
                if (content?.newSelectorsUpdate) {
                  content["addImportCssFile"] = content.newSelectorsUpdate.map(
                    (selectCssRule) => {
                      return selectCssRule.selectorCss;
                    }
                  );
                  delete content.newSelectorsUpdate;
                }

                if (content?.oldSelectorsUpdate) {
                  content["removeAddImportCssFile"] =
                    content.oldSelectorsUpdate.map((selectCssRule) => {
                      let storedSelectorCss =
                        self.stylesObject[selectCssRule.selector];

                      Object.keys(selectCssRule.selectorCss.propsValue).forEach(
                        (key) => {
                          storedSelectorCss[key] =
                            selectCssRule.selectorCss.propsValue[key];
                        }
                      );
                      self.stylesObject[selectCssRule.selector] =
                        storedSelectorCss;
                      let cssBuilt = ``;
                      Object.keys(storedSelectorCss).forEach((keyy) => {
                        cssBuilt = `${cssBuilt} ${keyy}: ${storedSelectorCss[keyy]};`;
                      });
                      return `${selectCssRule.selector} {${cssBuilt}}`;
                    });

                  delete content.oldSelectorsUpdate;
                }

                if (content?.removeSelectorsUpdate) {
                  content["removeImportCssFile"] =
                    content.removeSelectorsUpdate;
                  delete content.removeSelectorsUpdate;
                  content.removeImportCssFile.forEach((removeSelector) => {
                    if (self.stylesObject[removeSelector])
                      delete self.stylesObject[removeSelector];
                  });
                }

                // Send update results to client using websockets
                self.notifyClient({
                  name: "kotii-client-css-update",
                  updateType: "immediate",
                  vendor: "kotii",
                  content,
                });
              } else {
                // Send update results to client using websockets
                self.notifyClient({
                  name: "kotii-client-css-update",
                  updateType: "immediate",
                  content,
                });
              }

              /**
               * Update css meta data object with latest changes
               */

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
            }
          );
        }
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
  if (
    process.env?.ANZII_OPEN_BROWSER &&
    process.env.ANZII_OPEN_BROWSER == "true"
  ) {
    self.emit({
      type: "open-browser-signal",
      data: {},
    });
  }
};

methods.hookSocketToServer = function (server) {
  const self = this;
  self.debug("HOOKING SOCKET TO SERVER");
  self.wss = new WebSocketServer({ server });

  self.wss.on("connection", (ws) => {
    self.webSocketConnection = ws;

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

  let modulesClassMaps = moduleInfo.modules || null;
  let oldSelectorsKeys = Object.keys(oldSelectorsUpdate);
  let referenceOfSelectorInTheBrowser = "";

  oldSelectorsKeys.forEach((oldSelectorKey) => {
    if (oldSelectorKey.indexOf(".") === 0) {
      if (modulesClassMaps) {
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

  switch (extension) {
    case ".css":
      return fs.readFileSync(addPath, {
        encoding: "utf8",
      });

    case ".less":
      return lessToCssConverter(addPath, changeFilename);
    case ".sass":
    case ".scss":
      return sassToCssConverter(addPath);
    case ".stylus":
      return stylusToCssConverter(addPath, changeFilename);
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
  updateAst,
  moduleInfo
) {
  const self = this;

  let preRegexLeftPattern = `\\/\\*\\s*(INCLUDED_CSS)_HEAD:\\s*(`;
  let preRegexRightPattern = `)\\s*\\*\\/([\\S\\s]*?)\\/\\*\\s*\\1_FOOTER:\\s*\\2\\s(\\*\\/)$`;
  let regexPatterns = { preRegexLeftPattern, preRegexRightPattern };
  // let IMPORT_FILE_TEXT_REGEX = new RegExp(`\/\*\s*(INCLUDED_CSS)_HEAD:\s*(${escapedFileName})\s*\*\/([\S\s]*?)\/\*\s*\1_FOOTER:\s*\2\s(\*\/)$`,"gim")

  const { update } = cssUpdateResults;
  const { importsUpdates } = update;
  const { importRemovals = null, newImports = null } = importsUpdates;

  if (importRemovals) {
    let buildForCssFile = [];
    if (!content?.removeImportsUpdate && !process?.useLinkStyleTag)
      content["removeImportsUpdate"] = [];

    // update the object that represents the current file new content and ast object.
    imports[matchedInfo.selfReferencePath] = {
      ...matchedInfo,
      inputBefore: currentFileInput,
      inputBeforeAst: updateAst,
    };
    /* Loop through each removal item. Note: removal items are children of the changed
      file that invoked the file change event on the system. The [matchedInfo] object is
      an object that represents that file.
     */
    importRemovals.forEach((toRemoveKey) => {
      if (!MATCH_REMOTE_RESOURCE_REGEX.test(toRemoveKey)) {
        /**
         * Create a regex string that will match the removal file's content as a string
         * on the client.The client takes the regex string and constructs a regex from it.
         * On successful match of the pattern on the client, the removal file's content is removed
         */
        if (!process?.useLinkStyleTag) {
          let escapedFileName = toRemoveKey.replace(/[^a-zA-Z0-9]/g, "\\$&");
          let regexString = `${preRegexLeftPattern}${escapedFileName}${preRegexRightPattern}`;
          content.removeImportsUpdate.push(regexString);
        }

        let removePath = matchedInfo.children[toRemoveKey].path; // file path to remove
        let toRemoveObject = imports[removePath]; // object to remove representing some file

        if (process?.useLinkStyleTag) {
          self.buildListToRemoveOnClient(
            toRemoveObject,
            buildForCssFile,
            imports
          );
        }

        // Remove outdated css file from the file representer object
        self.removeOutdatedCssFile(
          imports[matchedInfo.selfReferencePath],
          toRemoveObject,
          "",
          toRemoveObject.pathAsShortID,
          imports,
          regexPatterns
        );
        delete matchedInfo.children[toRemoveKey]; // remove css file from parent[currently matched css file]
        delete imports[removePath]; // remove the css file from imports-file object
      } else {
        /**
         * If a removal item is an import with a remote resource path as a url,
         * only create a regex string that will match the import line string on the client
         * the client takes this string and constructs a regex from it.
         */
        if (!process?.useLinkStyleTag) {
          let urlEscaped = toRemoveKey.replace(/[^a-zA-Z0-9]/g, "\\$&");
          let regexString = `(\\s\\n\\r)*@import\\s*url\\(.*(${urlEscaped})["']\\)[;\\s]`;
          content.removeImportsUpdate.push(regexString);
        } else {
          let importString = `@import url(${toRemoveKey})`;
          if (!content?.removeImportCssFile) {
            content["removeImportCssFile"] = [importString];
          } else {
            content.removeImportCssFile.push(importString);
          }
        }
        return imports;
      }
    });

    if (buildForCssFile.length > 0) {
      content["removeImportCssFile"] = buildForCssFile;
    }
    /** If the file being changed is the head file, and it does not have children after
     * the removal process, resets the [imports] key inside of the stylesMeta object
     * by only returning an object with [isNull] key.
     */
    if (!matchedInfo?.parent && Object.keys(matchedInfo.children).length <= 0) {
      moduleInfo.cssAst = updateAst;
      return { isNull: true };
    }
  }

  if (newImports) {
    let buildForCssFileAdd = [];
    if (!content?.addImportsUpdate && !process?.useLinkStyleTag)
      content["addImportsUpdate"] = [];
    let newImportsKeys = Object.keys(newImports);
    /* Loop through import keys to check if they represent remote css files.
       Remote imports are handled differently on kotii js
    */
    let remoteImports = newImportsKeys.filter((key) => {
      if (MATCH_REMOTE_RESOURCE_REGEX.test(key)) return true;
    });

    // Handle remote imports if they exist
    if (remoteImports && remoteImports.length > 0) {
      imports[matchedInfo.selfReferencePath].inputBefore = currentFileInput;
      imports[matchedInfo.selfReferencePath].inputBeforeAst = updateAst;
      let remoteImportsSting = ""; // use this to store all remote imports
      remoteImports.forEach((remoteImport) => {
        // Build import string that will contain remote imports on a new line each
        remoteImportsSting = `${remoteImportsSting} @import ${remoteImport}\n`;
      });

      if (!process?.useLinkStyleTag) {
        // set string in an object to send to the client
        content.addImportsUpdate.push({
          addString: remoteImportsSting,
          addCssToParentStart: true,
        });
      } else {
        // set string in an object to send to the client
        if (!content?.addAtImportCssFile) {
          content["addAtImportCssFile"] = remoteImportsSting.split("\n");
        }
        // content.addImportsUpdate.push({
        //   addString: remoteImportsSting,
        //   addCssToParentStart: true,
        // });
      }

      // Return here if [newImportsKeys] only contains remote imports
      if (newImportsKeys.length === remoteImports.length) {
        return imports;
      }
    }

    /* Merge the new imports to be a single file of content where a child content is
       marked by a special css comment that distinguishes it as a new file.
     */
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

    /*
      If [imports] key does not currently exist in this file, then no further
      processing will be required, so just set the key, add the update content and 
      return. The [imports] key being null means that this file didn't have imported
      files before and these are its imports currently.
    */
    if (!imports) {
      if (buildForCssFileAdd.length > 0) {
        content["addImportCssFile"] = buildForCssFileAdd;
      }

      imports = { ...mergeResults.imports };
      if (process?.useLinkStyleTag) {
        self.buildListToAddOnClient(
          imports[matchedInfo.pathContext.fileFullPath].children,
          buildForCssFileAdd,
          imports
        );
      }
      if (!process?.useLinkStyleTag) {
        content.addImportsUpdate.push({
          addString: mergeResults.input,
          addCssToParentStart: true,
        });
      } else if (buildForCssFileAdd.length > 0) {
        content["addImportCssFile"] = buildForCssFileAdd;
      }

      return imports;
    }
    imports = { ...imports, ...mergeResults.imports };

    if (process?.useLinkStyleTag) {
      self.buildListToAddOnClient(
        imports[matchedInfo.selfReferencePath].children,
        buildForCssFileAdd,
        imports
      );
    }

    /*
     Check if the current file has a parent. If a current file has a parent,
     we'll have to sync this file's content to its parent. 

     If it does not have a parent, it's considered to be the HeadFile. The HeadFile is
     the css file that kotiijs loads at nodejs's build time.
    */

    let updateImportsParent = matchedInfo?.parent
      ? imports[matchedInfo.parent.path]
      : null;
    if (updateImportsParent) {
      // Sync this file's content to its parent by calling syncContentToParents()
      self.syncContentToParents(
        updateImportsParent,
        imports[matchedInfo.selfReferencePath].inputAfter,
        matchedInfo.pathAsShortID,
        imports,
        regexPatterns
      );
      let updatesImportsParentID = null;
      let addCssToParentStart = false;

      /**
       * Remove special characters from parent's pathAsShortID if it exists.
       * The resulting string of the replacement action will be used as part of
       * the regex that's gonna be used to match this parent's string on the client
       * to insert the child's content
       */
      if (updateImportsParent?.pathAsShortID) {
        updatesImportsParentID = updateImportsParent.pathAsShortID.replace(
          /[^a-zA-Z0-9]/g,
          "\\$&"
        );
      } else {
        /**
         * Check if the child file existed in parent by any chance, if it did,
         * Use this this child's [pathAsShortID] key for matching the child's file
         * content to be replaced on the client.
         *
         * If the child indeed does not already exist in parent, set [addCssToParentStart] key,
         * setting this key will tell the client to append the file's content on top of the css
         * string on the browser.
         */
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
      /*
        Set regex string to null if the current file's parent is the HeadFile, 
        the HeadFile is the explicit css file that kotiijs first loads on the system
        during resolving and loading process. When it's the HeadFile, we only add child
        content at the beginning of the file on the client.
      */

      if (!process.useLinkStyleTag) {
        let regexString = !addCssToParentStart
          ? `${preRegexLeftPattern}${updatesImportsParentID}${preRegexRightPattern}`
          : null;

        content.addImportsUpdate.push({
          addString: updateImportsParent.inputAfter,
          addPattern: regexString,
          addCssToParentStart,
        });
      }
    } else {
      let oldChildren = Object.keys(matchedInfo.children);
      let newChildren = Object.keys(
        imports[matchedInfo.selfReferencePath].children
      );

      let newChildrenKeys = newChildren.filter(
        (item) => !oldChildren.includes(item)
      );

      // Only loop and add set new imports to send to the client
      newChildrenKeys.forEach((childKey) => {
        let keyPathInParent =
          imports[matchedInfo.selfReferencePath].children[childKey].path;
        if (!process?.useLinkStyleTag) {
          content.addImportsUpdate.push({
            addString: imports[keyPathInParent].inputAfter,
            addCssToParentStart: true,
          });
        }
      });
    }

    if (buildForCssFileAdd.length > 0) {
      content["addImportCssFile"] = buildForCssFileAdd;
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

/**
 *
 * @param {*} syncFile
 * @param {*} replaceString
 * @param {*} replaceName
 * @param {*} imports
 * @param {*} patterns
 *
 * This method syncs the current file's content to its parent recursively,
 * it matches the current file's markers in the parent and replace the file's
 * outdated content with the current content
 */
methods.syncContentToParents = function (
  syncFile,
  replaceString,
  replaceName,
  imports,
  patterns
) {
  const self = this;

  const { preRegexLeftPattern, preRegexRightPattern } = patterns;

  let escapedFileName = replaceName.replace(/[^a-zA-Z0-9]/g, "\\$&");
  let regexString = `${preRegexLeftPattern}${escapedFileName}${preRegexRightPattern}`;
  let IMPORT_FILE_TEXT_REGEX = new RegExp(regexString, "gim");

  syncFile.inputAfter = syncFile.inputAfter.replace(
    IMPORT_FILE_TEXT_REGEX,
    replaceString
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

/**
 *
 * @param {
 * } syncFile
 * @param {*} toRemove
 * @param {*} replaceString
 * @param {*} replaceName
 * @param {*} imports
 * @param {*} patterns
 * This method is used to recursively remove a child file from its parent.
 * The removal happens in two parts, the first part is removal by replacing the
 * child with nothing from the parent string. Note: The parent string represents
 * a file from which the content of the file being removed is @import-ed
 *
 */

methods.removeOutdatedCssFile = function (
  syncFile,
  toRemove,
  replaceString,
  replaceName,
  imports,
  patterns
) {
  const self = this;

  const { preRegexLeftPattern, preRegexRightPattern } = patterns;

  let escapedFileName = replaceName.replace(/[^a-zA-Z0-9]/g, "\\$&");
  // Create regex string to match this content of this child from parent
  let regexString = `${preRegexLeftPattern}${escapedFileName}${preRegexRightPattern}`;
  let IMPORT_FILE_TEXT_REGEX = new RegExp(regexString, "gim"); // create regex

  // Replace child content from parent using regex pattern
  syncFile.inputAfter = syncFile.inputAfter.replace(
    IMPORT_FILE_TEXT_REGEX,
    replaceString
  );

  // Update parent file content with new conntent with child content removed
  imports[syncFile.selfReferencePath].inputAfter = syncFile.inputAfter;

  /**
   * Check if a child file being removed has children of its own, if it does,
   * remove them using the method: recursivelyRemoveChildren()
   */
  if (toRemove.children) {
    self.recursivelyRemoveChildren(toRemove, imports);
  }

  /**
   * If the parent file (change event invoker) has a parent of its own, make sure to update
   * its content by replacing any file that pertains to any child of the invoke-file being removed.
   */
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

/**
 * Load a css data file and stores it in memory. The data file is created during nodejs's
 * resolve-load time process when all the different files are resolved and loaded.
 */
methods.loadCssModuleDataFile = function () {
  const self = this;
  const stylesModulesPath = `${kotiiKotiiLandPath}/dev/styles-css-modules.json`;
  self["stylesMeta"] = JSON.parse(
    fs.readFileSync(stylesModulesPath, {
      encoding: "utf8",
    })
  );
};

/**
 *
 * @param {*} childrenParent
 * @param {*} imports
 * This method takes a parent argument that represent children that are all outdated.
 * It retrieves the children, loops through them, and removing each from the
 * [imports] object. The [imports] object is passed as the second object of this method.
 * The function also checks if a current loop item has children, and then recursively
 * call this function to remove their children from the [imports] object
 *
 */
methods.recursivelyRemoveChildren = function (childrenParent, imports) {
  const self = this;
  let children = childrenParent.children; // retrieve children
  let childrenKeys = Object.keys(children);

  childrenKeys.forEach((childKey) => {
    if (imports[children[childKey].path]?.children) {
      self.recursivelyRemoveChildren(imports[children[childKey].path], imports);
    }

    delete imports[children[childKey].path];
    //  delete imports[childrenParent.selfReferencePath].children[childPathAsID]
  });
};
/**
 *
 * @param {*} appStyles
 * @param {*} appBuildFolder
 *
 * This method writes css content to a css file that will be sent to the
 * browser. The file is only created and written if a user has opted for it.
 * A user has an option to set the file name as well.
 */
methods.createCssStyles = async function (appStyles, appBuildFolder) {
  const self = this;
  self.debug("App Styles", appStyles, appBuildFolder);
  let useTagKeys = ["style", "link"];
  if (!appStyles?.useTag)
    throw new Error("app.manifest.appStyles expects useTag key");
  if (typeof appStyles.useTag !== "string")
    throw new Error("app.manifest.appStyles should be a string");
  if (typeof appStyles.useTag !== "string")
    throw new Error("app.manifest.appStyles should be a string");
  if (!useTagKeys.includes(appStyles.useTag.toLowerCase()))
    throw new Error(
      "app.manifest.appStyles.useTag should be either a link or style value"
    );
  if (appStyles.useTag.toLowerCase() == "link") {
    let stylesPath = `${kotiiKotiiLandPath}/dev/styles.json`;
    let fileName = appStyles?.fileName ? appStyles.fileName : "style.css";
    process["useLinkStyleTag"] = true;
    process["styleSheetName"] = fileName;

    let stylesString = JSON.parse(
      fs.readFileSync(stylesPath, { encoding: "utf-8" })
    )
      .toString()
      .replaceAll(",", " ");
    let styleAst = createCssAst([stylesString]);

    self.stylesObject = {};
    styleAst.nodes.forEach((rule) => {
      if (rule.type.toLowerCase() !== "comment") {
        if (rule.nodes) {
          self.stylesObject[rule.selector] = {};
          rule.nodes.forEach((ruleProps) => {
            self.stylesObject[rule.selector][ruleProps.prop] =
              ruleProps?.important
                ? `${ruleProps.value} !important`
                : ruleProps.value;
          });
        }
      }
    });

    fs.writeFileSync(`${appBuildFolder}/${fileName}`, stylesString);
  }
};

methods.buildListToRemoveOnClient = function (toBuildFor, built, imports) {
  const self = this;

  toBuildFor.inputBeforeAst.nodes.forEach((node) => {
    if (node.type === "rule") {
      built.push(node.selector);
    }
  });

  if (toBuildFor.children) {
    let childrenKeys = Object.keys(toBuildFor.children);

    childrenKeys.forEach((toBuildForChildKey) => {
      let childObject = imports[toBuildFor.children[toBuildForChildKey].path];
      self.buildListToRemoveOnClient(childObject, built, imports);
    });
  }
};

methods.buildListToAddOnClient = function (toBuildFor, built, imports) {
  const self = this;

  let toBuildForKeys = Object.keys(toBuildFor);
  toBuildForKeys.forEach((fileKey) => {
    let file = imports[toBuildFor[fileKey].path];
    file.inputBeforeAst.nodes.forEach((node) => {
      if (node.type === "rule") {
        let cssRule = `${node.selector} {`;
        node.nodes.forEach((nestNode) => {
          cssRule += `${nestNode.prop}: ${nestNode.value} `;
        });
        cssRule += "}";
        built.push(cssRule);
      }
    });
    if (file?.children) {
      self.buildListToAddOnClient(file.children, built, imports);
    }
  });
};

methods.dynamicImport = async function (fil) {
  const self = this;
  self.debug("TAILWIND CONFIG OPTIONS: CALL", fil);
  const open = await import(fil);
  return open;
};

methods.runForTailwindCss = async function (options) {
  const self = this;

  const {
    tailwindConfig,
    buildFolder,
    tailwindMainContent,
    sourceFile,
    toSource,
  } = self.tailwindCssInfo;

  return new Promise(async (resolve) => {
    postcss([
      autoprefixer,
      postcssNested,
      tailwindcss({
        config:
          typeof tailwindConfig == "function"
            ? tailwindConfig()
            : tailwindConfig.default,
      }),
    ])
      .process(tailwindMainContent, {
        from: sourceFile,
        to: toSource,
      })
      .then((result) => {
        try {
          let tailwindStyleSheetName = !process?.tailwindStyleSheetName
            ? `tailwind-${createRandomeName(5).toLowerCase()}.css`
            : process.tailwindStyleSheetName;
          process["tailwindGenerated"] = "true";
          process["tailwindStyleSheetName"] = tailwindStyleSheetName;
          let tailwindFilePath = `${buildFolder}/${tailwindStyleSheetName}`;

          if (!fs.existsSync(tailwindFilePath)) {
            fs.writeFileSync(tailwindFilePath, result.css);
            self.tailwindCssInfo["tailwindProcessedCss"] = result.css;

            return;
          }

          let oldCss = self.tailwindCssInfo.tailwindProcessedCss;
          let newCss = result.css;
          // self.debug("NEW CSS", newCss);
          // self.debug("OLD CSS", oldCss);

          self.diffTailwindCss(newCss, oldCss);
          // if(!diffResults) return
        } catch (error) {
          console.log("CSS SAVING ERROR", error);
        }
      });
  });
};

methods.saveTailwindResources = async function (options) {
  const self = this;
  const pao = self.pao;
  // const getWorkingDir = pao.p_getWorkingFolder;
  const loadFile = self.pao.pa_loadFile;
  const readFileSync = pao.pa_readFileSync;
  const {
    tailwindConfigPath = null,
    rootFile = null,
    tailwindFrom = null,
    tailwindTo = null,
    tailwindMainContent = null,
    buildFolder,
  } = options;

  if (!tailwindConfig) {
    const fileExt = path.extname(tailwindConfigPath);

    if (
      fileExt === ".js" &&
      readFileSync(tailwindConfigPath).indexOf("module.exports") >= 0
    ) {
      throw new Error(
        `File: ${path.basename(
          tailwindConfigPath
        )} should use commonjs with a .cjs extension`
      );
    } else if (fileExt === ".cjs") {
      tailwindConfig = await loadFile(tailwindConfigPath);
    } else {
      tailwindConfig = await self.dynamicImport(tailwindConfigPath);
    }
  }

  self.tailwindCssInfo = {
    tailwindMainContent: tailwindMainContent,
    sourceFile: tailwindFrom,
    toSource: tailwindTo,
    buildFolder,
    tailwindConfig,
  };
};

methods.diffTailwindCss = function (newCss, oldCss) {
  const self = this;

  const oldClasses = new Set(self.extractTailwindClasses(oldCss));
  const newClasses = new Set(self.extractTailwindClasses(newCss));

  const addedClasses = [...newClasses].filter((c) => !oldClasses.has(c));
  const removedClasses = [...oldClasses].filter((c) => !newClasses.has(c));

  if (addedClasses?.length > 0) {
    self.findAddedTailwindClassContent(newCss, addedClasses);
  }
};

methods.extractTailwindClasses = function (css) {
  const self = this;
  return [...css.matchAll(/\.(.*?)\s*{/g)]
    .map((m) => m[1])
    .filter((c) => !c.includes(":"));
};

methods.findAddedTailwindClassContent = function (css, classNames) {
  const self = this;

  let content = { addImportCssFile: [] };
  postcss.parse(css, { from: undefined }).walkRules((rule) => {
    if (classNames.includes(rule.selector.substring(1))) {
      content.addImportCssFile.push(rule.toString());
    }
  });

  self.tailwindCssInfo.tailwindProcessedCss = `${
    self.tailwindCssInfo.tailwindProcessedCss
  } ${content.addImportCssFile.join("")}`;
  self.notifyClient({
    name: "kotii-client-css-update",
    updateType: "immediate",
    vendor: "tailwind",
    content: content,
  });
  // return content;
};

methods.registerForShutdown = function () {
  const self = this;
  self.emit({
    type: "register-shutdown-candidate",
    data: {
      payload: {
        candidate: self.closeWatchersOnShutdown.bind(self),
        name: "kotii-js",
      },
      callback: (data) => {
        self.debug(
          "ANZII JS: Successfully registered for shutdowns",
          data.message
        );
      },
    },
  });
};

methods.closeWatchersOnShutdown = function () {
  const self = this;

  self.debug("ANZII JS: Closing Watchers", process.env.IS_WATCHING_FILE);
  self.closeWatcher();
  if (process.env.IS_WATCHING_FILE) {
    process.env["IS_WATCHING_FILE"] = false;
    self.closeWatcher();
  }
};

methods.runWebpackCompiler = function () {
  const self = this;
  self.debug("WEBPACK: COMPILER TRIGGER");
  self.compiler.run((err, stats) => {
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
};

export default methods;
