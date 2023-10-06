const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')
  console.log("THE VALUE OF THIS", this);
  this.listens({
    "dev-server": this.handleDevServer.bind(this),
  });
};

methods.handleDevServer = function (data) {
  console.log("THE DATA OF START SCRIPTS", data);
  const self = this;
  const { webpackDevServer } = self;
  const { compiler, webpackConfig } = data.payload;

  const devServerOptions = { ...webpackConfig.devServer, open: false };
  const server = new webpackDevServer(devServerOptions, compiler);

  const runServer = async () => {
    console.log("Starting DevServer");
    data.callback({ message: "Webpack dev-server has started running" });
    await server.start();
  };

  runServer();
};

methods.namespace = function (data) {
  const self = this;

  const clientOptions = { auth: data.creds };
  const bitbucket = new Bitbucket(clientOptions);
  return bitbucket;
};

methods.api = function (data) {
  const self = this;
  const clientOptions = { auth: data.token };
  const bitbucket = new Bitbucket(clientOptions);
  return bitbucket;
};

module.exports = methods;
