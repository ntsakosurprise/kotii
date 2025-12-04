const methods = {};
methods.init = function () {
  this.listens({
    static: this.handleStaticScript.bind(this),
  });
};
methods.handleStaticScript = function (data) {
  const self = this;
  const setCall = data.callback;
  self.emit({
    type: "context-app",
    data: {
      callback: (data) => {
        self.getWebPackConfig({ ...data, build: true }, setCall);
      },
      build: true,
      env: "production",
    },
  });
};
methods.getWebPackConfig = function (dataToConfig, setCall) {
  const self = this;
  self.emit({
    type: "webpack-config",
    data: {
      payload: dataToConfig,
      callback: (data) => {
        self.doStaticSiteGeneration({
          callback: setCall,
          dataToConfig,
          ...data,
        });
      },
    },
  });
};
methods.doStaticSiteGeneration = function (data) {
  const self = this;
  self.emit({
    type: "generate-static-content",
    data: {
      payload: { ...data },
      callback: (gotValue) => {
        self.debug("STATIC GENERATION IS COMPLETED", gotValue);
        data.callback({ message: "Build plugin successfully called" });
      },
    },
  });
};
export default methods;
