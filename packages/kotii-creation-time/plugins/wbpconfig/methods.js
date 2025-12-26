/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
const methods = {};
const MATCH_REMOTE_RESOURCE_REGEX = /(https|http):+\/\//i;
let tailwindConfig = null;
let tailwindRootFile = "";

let firstBuild = true;
let rebuilding = false;
let queued = false;

import {
  USER_LAND_ALIASES,
  USER_LAND_ALIAS_BUILD,
  USER_LAND_ALIAS_PAGES,
  USER_LAND_ALIAS_MANIFEST,
  USER_LAND_ALIAS_STYLES_JSON,
  USER_LAND_ALIAS_STYLES_MODULES,
  ENV_DEVELOPMENT,
} from "kotii-internal/user";

import autoprefixer from "autoprefixer";
import fs from "fs";
import path, { resolve } from "path";
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
import mime from "mime-types";

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
  const { contextApp, build = false, activeRoute = null } = data.payload;
  const { appEnv = "" } = contextApp;
  const {
    useCustomDomain = false,
    useHttps = false,
    useAsDefaultPage = "/",
    appStyles = null,
  } = contextApp.appManifest;
  if (process.env.NODE_ENV === ENV_DEVELOPMENT) {
    if (contextApp?.appManifest?.pages)
      self.defaultSettings.pages = contextApp.appManifest.pages;
    self.debug("WEBPACK DATA PAYLOAD", data.payload.build, activeRoute);
    if (activeRoute) self["newPageRoute"] = activeRoute;
  }

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
        throw new Error("An error occured loading a certs config json file");
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

  const webPackConfig = self.webPackServerConfig;

  // self.debug("THE APP CONTEXT CONFIG", payload);
  process.env["KOTII_APP_URL"] = JSON.stringify(certDomainConfig.APP_URL);
  envs.stringified["KOTII_APP_META"] = JSON.stringify(
    contextApp.appManifest.app
  );
  envs.stringified["KOTII_SHOW_DEBUG_LOGS"] = true;
  envs.stringified["KOTII_APP_URL"] = JSON.stringify(certDomainConfig.APP_URL);
  envs.stringified["KOTII_STATIC_OR_LAZY"] = JSON.stringify(
    process.env.useLazyLoad
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
    runOnComplete: self.startWatchingAppFiles.bind(self),
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
    appConfigPath: contextApp.appConfigPath,
    cleanUpCentralFiles: self.replaceKotiiJsFilesContent.bind(self),
    sendReloadSignaOnRestart: self.sendReloadSignaOnRestart.bind(self),

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
    let filesToWatch = [
      `${contextApp.appSrc}`,
      `${contextApp.appSrc}/**/*.{css,scss,sass,less,styl}`,
      `${contextApp.appPagesFolder}`,
      `${contextApp.appConfigPath}`,
    ];
    let appPathsIDS = {
      pages: contextApp.appPagesFolder,
      src: contextApp.appSrc,
      styles: `${contextApp.appSrc}/**/*.{css,scss,sass,less,styl}`,
      appConfigPath: `${contextApp.appConfigPath}`,
    };
    // this.runOnComplete(filesToWatch,appPathsIDS);
    process.env?.NODE_ENV === ENV_DEVELOPMENT
      ? self.startWatchingAppFiles(filesToWatch, appPathsIDS)
      : null;
    wbpCompiler = webpack(webpackConfigObject);
    self.compiler = wbpCompiler;
    // wbpCompiler.watch = ()=>{}
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
      self.compilerWatcher = self.runWebpackCompiler(
        "initiate-run",
        contextApp.appConfigPath
      );
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
  self.readyDevMiddleware = self.kotiiMiddleware(webpacks.compiler);
  // self.readyDevMiddleware = (req,res,next)=>{
  //   self.debug("CURRENTLY SERVING STATIC FILES")
  //   next()
  // }
  self.readyHotMiddleware = self.webpackHotMiddleware(webpacks.compiler, {
    log: console.log,
    path: "/__kotii",
    heartbeat: 2000,
  });
  webpacks.compiler.hooks.compile.tap("Debug", () =>
    console.log("🧩 compile start")
  );
  webpacks.compiler.hooks.emit.tap("Debug", () =>
    console.log("🧩 emitting assets")
  );
  webpacks.compiler.hooks.done.tap("Debug", () => console.log("🧩 build done"));
  //   webpacks.compiler.hooks.watchRun.tapAsync("MyPlugin", (compiler) => {
  //   console.log("Modified files:", compiler.modifiedFiles);
  //   console.log("Removed files:", compiler.removedFiles);
  //   // callback();
  // });
  const serverType = "config-manual";
  serverType === "config-manual"
    ? (wepackMiddlewares = {
        webpackDevMiddleware: self.readyDevMiddleware,
        webpackHotMiddleware: self.readyHotMiddleware,
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
    loadFile(`${anziiManualConfigs.api}${path.sep}.config.js`)
      .then((config) => {
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
              // self.debug("SENDING A RESTART SIGNAL",process.env?.CUSTOM_RESTART)
              self.debug(
                "Running CONFIG CALLBACK",
                self.SOCKET_CLIENT_CONNECTION_ESTABLISHED
              );
              //  if(self.SOCKET_CLIENT_CONNECTION_ESTABLISHED){
              //   self.debug("SENDING RECONNECT SIGNAL",self.SOCKET_CLIENT_CONNECTION_ESTABLISHED)
              //    self.SOCKET_CLIENT_CONNECTION_ESTABLISHED = false
              //    self.notifyClient({
              //     name: "kotii-client-reload",
              //     vendor: "kotii",

              //   });
              //  }

              // callback(data.message);
            },
          },
        });
        // resolve(config);
      })
      .catch((err) => {
        throw new Error(
          `.config.js file is missing, kotii requires this file when api is enabled\n ${err?.message}`
        );
      });
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

methods.startWatchingAppFiles = function (watchPath, pathsIDS, runStatus) {
  const self = this;
  const stylExtensions = [".css", ".scss", ".styl", ".less", ".sass"];
  self.debug("Kotii-JS Is Watching Files", self.removePagesImport, watchPath);
  self.watchFile(watchPath, {
    add: (addPath, stats) => {
      // let stats = null
      // stats = fs.statSync(addPath);
      self.debug(
        "WATCHR:: ADD FILE STATS",
        addPath,
        addPath.indexOf(pathsIDS.pages) >= 0
      );

      if (addPath.indexOf(pathsIDS.pages) >= 0) {
        if (self?.recentlyDeleted && self.recentlyDeleted[addPath]) {
          self.debug("HANDLING A POSSIBLE RENAME");
          self.notifyClient({
            name: "kotii-client-prepare-reload",
            vendor: "kotii",
          });
          self.restartSever(addPath, runStatus);
        } else if (stats.size > 0) {
          self.debug("FILE SIZE IS BIGGER THAN ZERO,RESTART");
          self.notifyClient({
            name: "kotii-client-prepare-reload",
            vendor: "kotii",
          });
          self.restartSever(addPath, runStatus);
        } else {
          self.debug("FILE SIZE IS ZERO, NO RESTART");
          if (!self.addedEmptyFiles) {
            self.addedEmptyFiles = [addPath];
          } else {
            self.addedEmptyFiles.push(addPath);
          }
        }
      }

      // self.notifyClient()
    },
    delete: (addPath, stats) => {
      self.debug(
        "WATCHR:: DELETE FILE STATS",
        addPath,
        addPath.indexOf(pathsIDS.pages) >= 0
      );

      if (addPath.indexOf(pathsIDS.pages) >= 0) {
        const fileInfo = {
          path: addPath,
          time: Date.now(),
          size: stats ? stats.size : null,
        };
        if (!self?.recentlyDeleted) {
          self.recentlyDeleted = {
            [addPath]: fileInfo,
          };
        } else {
          self.recentlyDeleted[addPath] = fileInfo;
        }

        setTimeout(() => {
          // If it’s still in the map after 2 seconds, it was a real delete
          self.debug("THIS IS A TRUE DELETE, FILE IS STILL SET");
          if (self.recentlyDeleted[addPath]) {
            console.log(`File truly deleted: ${addPath}`);
            delete self.recentlyDeleted[addPath];
            self.notifyClient({
              name: "kotii-client-prepare-reload",
              vendor: "kotii",
            });
            self.restartSever(addPath, "delete", runStatus);
          }
        }, 2000);
      }
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
        self.debug("CHANGE FOR OTHER FILES", self.addedEmptyFiles);
        if (self.addedEmptyFiles && self.addedEmptyFiles.includes(addPath)) {
          self.debug("ADDED EMPTY FILE");
          if (self.addedEmptyFiles.length === 1) {
            self.debug("RESTART FOR EMPTY FILE WITH DATA");
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
        } else if (addPath.indexOf(pathsIDS.appConfigPath) >= 0) {
          self.debug("RESTART FOR CONFIG CHANGE", self.addedEmptyFiles);
          self.notifyClient({
            name: "kotii-client-prepare-reload",
            vendor: "kotii",
          });
          self.closeWatcherAndRestart();
        } else {
          self.debug("RE-BUILD WEBPACK", addPath);
          //  self.runWebpackCompiler("invalidate")
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
  self.debug("THE APP IS IN ACTION", updateInfo);
  self.debug("THE CLIENT", self.wss.clients);

  self.wss.clients.forEach((client) => {
    self.debug("CLIENT IS READY");
    if (client.readyState === WebSocket.OPEN) {
      self.debug("CLIENT IS IN READY STATE", updateInfo);
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
        self.registerForShutdown();
      },
    },
  });

  // self.registerForShutdown()
};

methods.restartSever = function (addPath, eventType = "", runStatus = null) {
  const self = this;

  self.debug(`PLUGIN:: WATCHR:: FILE ${eventType} event`, addPath, runStatus);
  // process.env.CUSTOM_RESTART = "true";

  process.env.ANZII_OPEN_BROWSER = "false";
  self.debug("PLUGIN:: THE PROCESS.ENV.PORT", JSON.stringify(process.env.PORT));
  self.debug("PLUGIN:: THE WATCHER", eventType, process.env.PORT);

  self.debug("PLUGIN:: WATCHER", self.closeWatcher);
  self.closeWatcherAndRestart();
};
methods.configureDomainOnceOff = function (data, events, options = null) {
  const self = this;
  // const { watched, persistent = true, ignored = null, events = null } = payload;
  // self.emit({
  //   type: "watch-target",
  //   data: {
  //     payload: { watched: data, events },
  //     callback: (data) => {
  //       self.debug("File watch set", data);
  //       self.closeWatcher = data.closeWatcher;
  //     },
  //   },
  // });
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

  const buildPath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_BUILD]}`;
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

  const buildPath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_BUILD]}`;

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
    // if(process.env?.CUSTOM_RESTART && process.env.CUSTOM_RESTART === "true"){
    //             self.debug("SENDING A RESTART SIGNAL")
    //             process.env.CUSTOM_RESTART = "false"
    //             self.SOCKET_CLIENT_CONNECTION_ESTABLISHED = true

    // }else{
    //   console.log("THE PROCESS IS NOT RESTART")
    // }

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
  const stylesModulesPath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_MODULES]}`;
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
    let stylesPath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_JSON]}`;
    self.debug("THE STYLES PATH", stylesPath);
    let fileName = appStyles?.fileName ? appStyles.fileName : "style.css";
    process["useLinkStyleTag"] = true;
    process["styleSheetName"] = fileName;
    self.debug(
      "THE APP MANIFEST.name",
      process.styleSheetName,
      process.useLinkStyleTag
    );

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
    defaultConfigContentPath,
    isProduction,
  } = self.tailwindCssInfo;

  self.debug("RUNNING FOR TAILWIND", self.tailwindCssInfo);
  return new Promise(async (resolve) => {
    postcss([
      autoprefixer,
      postcssNested,
      tailwindcss({
        config:
          typeof tailwindConfig == "function"
            ? tailwindConfig(defaultConfigContentPath)
            : tailwindConfig.default,
      }),
    ])
      .process(tailwindMainContent, {
        from: sourceFile,
        to: toSource,
      })
      .then((result) => {
        self.debug("RUNNING FOR TAILWIND .result", result);
        if (!isProduction) {
          try {
            let tailwindStyleSheetName = !process?.tailwindStyleSheetName
              ? `tailwind-${createRandomeName(5).toLowerCase()}.css`
              : process.tailwindStyleSheetName;
            process["tailwindGenerated"] = "true";
            process["tailwindStyleSheetName"] = tailwindStyleSheetName;
            let tailwindFilePath = `${buildFolder}/${tailwindStyleSheetName}`;
            self.debug("THE BUILD FOLDER TAILWIND", tailwindFilePath);

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
        } else {
          let tailwindFilePath = `${buildFolder}/tailwind.css`;
          fs.writeFileSync(tailwindFilePath, result.css);
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
    appSrc,
    isProduction,
  } = options;
  self.debug("TAILWIND RESOURCES", options);

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
    defaultConfigContentPath: appSrc,
    isProduction,
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

methods.closeWatchersOnShutdown = function () {
  const self = this;

  self.debug("ANZII JS: Closing Watchers", process.env.IS_WATCHING_FILE);
  self.debug("SELF.COMPILER WATCHER ", self.compilerWatcher?.close);
  // self.closeWatcher()
  // if(process.env.IS_WATCHING_FILE){
  //   process.env["IS_WATCHING_FILE"] = false
  //   self.closeWatcher()
  // }

  return new Promise((resolve, reject) => {
    self.closeWatcher(() => {
      if (self.compilerWatcher && self.compilerWatcher?.close) {
        self.debug("WATHCER IS CLOSING", self.compilerWatcher?.watcher);

        self.compilerWatcher.close((err) => {
          self.debug("COMPILER CLOSE ERRO", err);
          self.debug("CLOSED COMPILER WATCHER");
          self.compilerWatcher = null;
          self.debug("THE SELF.COMPILER AFTER", self.compilerWatcher);
          resolve(true);
        });
      } else {
        self.debug(
          "SELF.COMPILER WATCHER DOES NOT EXIST",
          self.compilerWatcher?.close
        );
        resolve(true);
      }
    });
  });
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

methods.runWebpackCompiler = function (action = null, extraPath = "") {
  const self = this;
  self.debug("WEBPACK: COMPILER TRIGGER", action, extraPath);
  if (action && action === "invalidate") {
    self.safeInvalidate();
  } else if (action && action === "initiate-run") {
    self.debug("WEPPACK START BY WATCH", self.compiler.watch);
    return self.compiler.watch(
      { ignored: ["**/*.{css,scss,sass,less,styl}", "/node_modules/"] },
      (err, stats) => {
        self.debug("COMPILER ERR", err);
        const info = stats.toJson();

        if (stats.hasErrors()) {
          return console.error(info.errors);
        }

        if (stats.hasWarnings()) {
          console.warn(info.warnings);
        }

        //   const infoy = stats.toJson({ all: false, assets: true, errors: true, warnings: true });
        // if (firstBuild) {
        //     console.log('✅ Initial build complete');
        //     firstBuild = false;
        //     return;
        //   }

        //   self.readyHotMiddleware.publish({
        //       action: 'built',
        //       stats: infoy,
        //     });

        //  rebuilding = false;
        // if (queued) {
        //   queued = false;
        //   self.safeInvalidate();
        // }
      }
    );
  } else {
    self.debug("About to run webpack compiler");
    self.compiler.run((err, stats) => {
      self.debug("COMPILER ERR", err);
      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }
      self.callback({
        webpackCompileStats: {
          assets: info.assets,
        },
      });
    });
  }
};

methods.kotiiMiddleware = function (compiler) {
  const self = this; // assuming this is inside a class/method
  const memoryFs = compiler.outputFileSystem;
  const outputPath = compiler.options.output.path;

  return async function middleware(req, res, next) {
    self.debug("KOTII-MIDDLEWARE: Incoming request", req.path);

    if (!req.path.includes(".hot-update.")) return next();

    const filePath = req.path.replace(/^\//, ""); // make relative
    const fullPath = path.join(outputPath, filePath);

    let content = null;
    let source = "memory";

    try {
      // Try memory FS
      content = memoryFs.readFileSync(fullPath);
    } catch (err) {
      self.debug("KOTII-MIDDLEWARE: Not found in memory:", fullPath);

      try {
        // Try disk fallback
        content = fs.readFileSync(fullPath);
        source = "disk";
      } catch (diskErr) {
        self.debug("KOTII-MIDDLEWARE: Not found on disk either:", fullPath);
        return next(); // not found at all, let next middleware handle it
      }
    }

    // Serve the content
    self.debug(`KOTII-MIDDLEWARE: Serving [${source}] →`, filePath);
    res.setHeader(
      "Content-Type",
      mime.contentType(path.extname(filePath)) || "application/octet-stream"
    );
    res.send(content);
  };
};

methods.safeInvalidate = function safeInvalidate() {
  const self = this;

  if (firstBuild) return; // wait for initial build
  if (rebuilding) {
    queued = true;
    return;
  }
  rebuilding = true;
  self.compilerWatcher.invalidate();

  // if (rebuildInProgress) {
  //   queuedRebuild = true;
  //   return;
  // }
  // rebuildInProgress = true;

  // self.compilerWatcher.invalidate(() => {
  //   rebuildInProgress = false;
  //   if (queuedRebuild) {
  //     queuedRebuild = false;
  //     self.safeInvalidate();
  //   }
  // });
};

methods.replaceKotiiJsFilesContent = function () {
  const self = this;
  const pao = self.pao;
  const pagesFilePath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_PAGES]}`;
  const manifestFilePath = `${USER_LAND_ALIASES[USER_LAND_ALIAS_MANIFEST]}`;
  const filesContent = self.getCentralFilesContent();
  const saveToFile = pao.pa_saveToFile;

  self.debug("REPLACE.NEVER RESOLVES");

  return new Promise((resolve) => {
    saveToFile(pagesFilePath, filesContent.pages);
    saveToFile(manifestFilePath, filesContent.manifest);
    resolve(true);
  });
};

methods.getCentralFilesContent = function (file) {
  const pages = `
const comps = {};
const routes = [];

export { comps, routes };
`;
  const manifest = `const meta = {
  comps: [],
  compsSource: "",
  appMain: "",
  lastCompsCount: 0,
  compsPaths: [],
  app: {
    type: "ssr",
    stateVendor: "redux",
  },
  isDomainCreated: false,
  staticOrLazy: "${process.env.useLazyLoad}",
};
export { meta };
`;
  return {
    pages,
    manifest,
  };
};

methods.closeWatcherAndRestart = function () {
  const self = this;

  // return new Promise((resolve, reject)=>{
  //     self.closeWatcher(() => {
  //       self.debug(
  //         "ADD EVENT CLOSING WATCHER BEFORE RESTART",
  //         JSON.stringify(process.env.PORT)
  //       );
  //       if(self.compilerWatcher){

  //         self.compilerWatcher.close(()=>{
  //           self.debug("WEBPACK WATCHER HAS BEEN CLOSED")
  //           self.compilerWatcher = null
  //           process.send({event:"destroy-child", data:{title: "child destroying"}})
  //           resolve()

  //         })

  //       }else{
  //         process.send({event:"destroy-child", data:{title: "child destroying"}})
  //         resolve(true)
  //       }

  //     });
  // })
  if (self.compilerWatcher) {
    self.compilerWatcher.close(() => {
      self.debug("WEBPACK WATCHER HAS BEEN CLOSED");
      self.compilerWatcher = null;
      process.send({
        event: "destroy-child",
        data: { title: "child destroying" },
      });
    });
  } else {
    process.send({
      event: "destroy-child",
      data: { title: "child destroying" },
    });
  }
};
methods.sendReloadSignaOnRestart = function () {
  const self = this;

  self.debug("RELOAD RESTART", process?.env?.CUSTOM_RESTART);
  self.debug("RELOAD RESTART APP", self.newPageRoute);

  if (process.env?.CUSTOM_RESTART && process.env.CUSTOM_RESTART === "true") {
    self.debug("SENDING RECONNECT SIGNAL", self.notifyClient);
    process.env.CUSTOM_RESTART === "false";
    let clientData = {
      name: "kotii-client-reload",
      vendor: "kotii",
    };
    if (
      self?.defaultSettings?.pages?.onNewPage?.openPage &&
      self?.newPageRoute?.path
    )
      clientData["page"] = { pageUrl: self.newPageRoute?.path };
    self.notifyClient(clientData);
  }
};

export default methods;
