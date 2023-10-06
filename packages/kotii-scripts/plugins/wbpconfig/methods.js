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
  self.configureWebPack(data.payload);
  data.callback({ message: "Webpack plugin successfully called" });
  return;
};

methods.configureWebPack = function (data) {
  const self = this;
  const { webPackConfig } = self;

  const madeConfig = webPackConfig(data);
  console.log("madeConfig", madeConfig);
  return;
};

methods.api = function (data) {
  const self = this;
  const clientOptions = { auth: data.token };
  const bitbucket = new Bitbucket(clientOptions);
  return bitbucket;
};

module.exports = methods;
