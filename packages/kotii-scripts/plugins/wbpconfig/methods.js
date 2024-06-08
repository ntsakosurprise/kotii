const methods = {};
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
  // console.log("SELF. AFTER SETTING CALLBACK", self);
  self.configureWebPack(data.payload, data.callback);
  // data.callback({ message: "Webpack plugin successfully called" });
  return;
};
methods.configureWebPack = function (payload) {
  const self = this;
  const { webpack, setContextEnv } = self;
  const webPackConfig = process.env?.ANZII_CLI_WITH_SERVER
    ? self.webPackServerConfig
    : self.webPackConfig;
  const { routes = null, contextApp, build = false } = payload;
  console.log("THE APP CONTEXT CONFIG", payload);
  setContextEnv(contextApp);
  const webpackConfigObject = webPackConfig();

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
        routes
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
methods.setContextEnv = function (mdconfig) {
  process.env["APPCONTEXT"] = JSON.stringify(mdconfig);
};
methods.configureDevServer = function (webpacks, anziiManualConfigs = null) {
  const self = this;
  const callback = self.callback;
  let wepackMiddlewares = null;
  const serverType = process.env?.ANZII_CLI_WITH_SERVER
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
    data: { payload: { routes: [...anziiManualConfigs] } },
  });
  self.emit({
    type: serverType,
    data: {
      payload: {
        ...webpacks,
        wepackMiddlewares,
        configs: {
          router: anziiManualConfigs,
          domain: [{ name: "static", set: "build" }],
        },
      },
      callback: (data) => {
        callback(data.message);
      },
    },
  });
};
methods.hookIntoWebpackCompilation = async function (compiler, configWp) {
  const self = this;
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
