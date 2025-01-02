const methods = {};
methods.init = function () {
  this.listens({
    "dev-server": this.handleDevServer.bind(this),
  });
};
methods.handleDevServer = async function (data) {
  const self = this;
  const { webpackDevServer } = self;
  const { compiler, webpackConfig } = data.payload;
  const devServerOptions = {
    ...webpackConfig.devServer,
    open: false,
  };
  // const hookStatus = self.hookIntoWebpackCompilation(compiler);
  const server = new webpackDevServer(devServerOptions, compiler);
  const runServer = async () => {
    self.debug("Starting DevServer");
    data.callback({ message: "Webpack dev-server has started running" });
    await server.start();
  };
  runServer();
  const open = (await import("open")).default;
  self.debug("THE OPEN", open);
  await open("http://localhost:9000");
};
methods.dynamicImport = async function () {
  const self = this;
  self.debug("THE DYNAMI GOT A CALL");
  const open = await import("open");
  self.debug("THE OPEN", open);
  return open;
};
methods.hookIntoWebpackCompilation = async function (compiler, configWp) {
  const self = this;
  compiler.hooks.invalid.tap("invalid", () => {
    self.debug("wEBPACK is compiling....");
  });
  compiler.hooks.invalid.tap("done", (stats) => {
    self.debug("Compiler is done compiling");
    self.debug(stats);
  });
  return true;
};
export default methods;
