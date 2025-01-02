const methods = {};
methods.init = function () {
  this.listens({
    dev: this.handleDevScript.bind(this),
  });
};
methods.handleDevScript = function (data) {
  const self = this;
  self.logSync("THE DAT OF START SCRIPTS", data);

  const setCall = data.callback;
  self.emit({
    type: "context-app",
    data: {
      callback: (data) => {
        self.getWebPackConfig(data, setCall);
      },
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
        setCall("Webpack config has been called successfully");
      },
    },
  });
};

export default methods;
