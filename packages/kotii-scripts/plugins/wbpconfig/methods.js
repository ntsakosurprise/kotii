const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')
  console.log("THE VALUE OF THIS", this);
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

methods.configureWebPack = function (data) {
  const self = this;
  const { webPackConfig, webpack, setContextEnv } = self;
  setContextEnv(data);
  const webpackConfigObject = webPackConfig();
  console.log("THE WEBPACK CONFIG", webpackConfigObject);

  const wbpCompiler = webpack(webpackConfigObject);
  self.configureDevServer({
    compiler: wbpCompiler,
    webpackConfig: webpackConfigObject,
  });

  // console.log("THE WEBPACK COMPILER", wbpCompiler);
  return;
};

methods.setContextEnv = function (mdconfig) {
  process.env["APPCONTEXT"] = JSON.stringify(mdconfig);
};
methods.configureDevServer = function (webpacks) {
  const self = this;
  const callback = self.callback;
  // console.log("SELF IN CONFIGURE", self);

  self.emit({
    type: "dev-server",
    data: {
      payload: webpacks,
      callback: (data) => {
        callback(data.message);
      },
    },
  });
};

methods.api = function (data) {
  const self = this;
  const clientOptions = { auth: data.token };
  const bitbucket = new Bitbucket(clientOptions);
  return bitbucket;
};

module.exports = methods;
