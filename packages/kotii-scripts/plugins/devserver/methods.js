const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')
  console.log("THE VALUE OF THIS devser");
  this.listens({
    "dev-server": this.handleDevServer.bind(this),
  });
};
methods.handleDevServer = async function (data) {
  console.log("THE DATA OF START SCRIPTS", data);
  const self = this;
  const { webpackDevServer } = self;
  const { compiler, webpackConfig } = data.payload;
  const devServerOptions = {
    ...webpackConfig.devServer,
    open: false,
  };
  const hookStatus = self.hookIntoWebpackCompilation(compiler);
  const server = new webpackDevServer(devServerOptions, compiler);
  const runServer = async () => {
    console.log("Starting DevServer");
    data.callback({ message: "Webpack dev-server has started running" });
    await server.start();
  };
  runServer();
  // const open = (await import("open")).default;
  // console.log("THE OPEN", open);
  // await open("http://localhost:8000");
};
methods.dynamicImport = async function () {
  const self = this;
  console.log("THE DYNAMI GOT A CALL");
  const open = await import("open");
  console.log("THE OPEN", open);
  return open;
};
methods.hookIntoWebpackCompilation = async function (compiler, configWp) {
  const self = this;
  compiler.hooks.invalid.tap("invalid", () => {
    console.log("wEBPACK is compiling....");
  });
  compiler.hooks.invalid.tap("done", (stats) => {
    self.infoSync("WEBPACK IS DONE COMPILING");
    self.infoSync(stats);
  });
  return true;
};
export default methods;
