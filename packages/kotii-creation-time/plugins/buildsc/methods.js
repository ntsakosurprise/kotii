const methods = {};
import path from "path";
methods.init = function () {
  this.listens({
    build: this.handleBuildScript.bind(this),
  });
};
methods.handleBuildScript = function (data) {
  let setCall = data.callback;
  //   data.callback({ message: "Build plugin successfully called" });

  const self = this;
  // self.doStaticSiteGeneration({ callback: data.callback });

  self.emit({
    type: "context-app",
    data: {
      build: true,
      env: "production",
      callback: (data) => {
        self.debug("BUILD CONTEXT APP RESPONSE", data);

        self.getWebPackConfig(
          { ...data, build: true },
          { buildFor: "ssr" },
          setCall
        );
      },
    },
  });
  return;
};
methods.getWebPackConfig = function (dataToConfig, options = {}, setCall) {
  const self = this;
  self.emit({
    type: "webpack-config",
    data: {
      payload: dataToConfig,
      callback: (data) => {
        self.doServerBuildGeneration({
          callback: setCall,
          targetSource: dataToConfig.contextApp.appSrc,
          targetMain: dataToConfig.contextApp.appFolder,
          destination: `${path.resolve(
            dataToConfig.contextApp.appFolder,
            dataToConfig.contextApp.appManifest.build
          )}`,
          targetNodeModules: `${dataToConfig.contextApp.appNodeModules}`,
          routes: dataToConfig.routes,
          contextApp: dataToConfig.contextApp,
        });
      },
    },
  });
};

methods.doServerBuildGeneration = function (data) {
  const self = this;

  self.emit({
    type: "generate-server-build",
    data: {
      payload: { build: "server-build", ...data },
      callback: (gotValue) => {
        self.debug("STATIC GENERATION IS COMPLETED", gotValue);
        data.callback({ message: "Server Build plugin successfully called" });
      },
    },
  });
};

export default methods;
