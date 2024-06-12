const methods = {};
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
      callback: (data) => {
        console.log("BUILD CONTEXT APP RESPONSE", data?.routesObject[0]);
        self.getWebPackConfig({ ...data, build: true }, setCall);
      },
      build: true,
      env: "production",
    },
  });
  return;
};
methods.getWebPackConfig = function (dataToConfig, setCall) {
  const self = this;
  self.emit({
    type: "webpack-config",
    data: {
      payload: dataToConfig,
      callback: (data) => {
        // console.log("THE DATA FROM WEBPACK CONFIG", data);
        self.doStaticSiteGeneration({
          callback: setCall,
          dataToConfig,
          ...data,
        });
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

export default methods;
