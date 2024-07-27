const methods = {};
import fs from "fs";
import path from "path";
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
  const { contextApp } = data.payload;
  const { appEnv = "" } = contextApp;
  console.log("WEBPACK DATA PAYLOAD", data.payload);
  // console.log("SELF. AFTER SETTING CALLBACK", self);
  // console.log("THE NODE ENV", process.env.NODE_ENV);
  self.getEnvVariables(appEnv).then((envs) => {
    // console.log("THE ENVS", envs);
    self.configureWebPack(data.payload, envs);
  });

  // data.callback({ message: "Webpack plugin successfully called" });
  return;
};
methods.configureWebPack = function (payload, envs = null) {
  const self = this;
  const pao = self.pao;
  // const getWorkingDir = pao.p_getWorkingFolder;
  const cwd = pao.pa_getWorkingFolder();
  const { webpack, setContextEnv } = self;
  const webPackConfig =
    process.env?.ANZII_CLI_WITH_SERVER &&
    process.env.ANZII_CLI_WITH_SERVER === "true"
      ? self.webPackServerConfig
      : self.webPackConfig;
  const {
    routes = null,
    contextApp,
    build = false,
    appManifest = null,
  } = payload;
  // console.log("THE APP CONTEXT CONFIG", payload);
  setContextEnv(contextApp, envs);
  const webpackConfigObject = webPackConfig({
    cwd,
    appManifest: contextApp.appManifest,
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
        { routes, api: contextApp.appApi }
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
methods.configureDevServer = function (webpacks, anziiManualConfigs = null) {
  const self = this;
  const pao = self.pao;
  const callback = self.callback;
  const loadFile = pao.pa_loadFile;

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
            router: anziiManualConfigs.routes,
            domain: [{ name: "static", set: "build" }],
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
export default methods;
