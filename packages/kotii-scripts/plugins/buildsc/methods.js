const methods = {};
import path from "path";
methods.init = function () {
  this.listens({
    build: this.handleBuildScript.bind(this),
  });
};
methods.handleBuildScript = function (data) {
  console.log("THE DATA OF Build SCRIPTS", data);
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
        console.log("BUILD CONTEXT APP RESPONSE", data);

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
        console.log("BUILD: WEBPACK RUN RESULT");
        if (options?.buildFor && options.buildFor === "ssr") {
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
        } else {
          self.doStaticSiteGeneration({
            callback: setCall,
            dataToConfig,
            ...data,
          });
        }

        // setCall("Webpack config has been called successfully");
      },
    },
  });
};
methods.doStaticSiteGeneration = function (data) {
  console.log("DO STATIC DATA", data);
  const self = this;
  self.emit({
    type: "generate-static-content",
    data: {
      payload: { ...data },
      callback: (gotValue) => {
        console.log("STATIC GENERATION IS COMPLETED", gotValue);
        data.callback({ message: "Build plugin successfully called" });
      },
    },
  });
};

methods.doServerBuildGeneration = function (data) {
  console.log("DO SERVER SIDE RENDERING", data);
  const self = this;

  self.emit({
    type: "generate-server-build",
    data: {
      payload: { build: "server-build", ...data },
      callback: (gotValue) => {
        console.log("STATIC GENERATION IS COMPLETED", gotValue);
        data.callback({ message: "Server Build plugin successfully called" });
      },
    },
  });
};

export default methods;
