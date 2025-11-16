const methods = {};
methods.init = function () {
  this.listens({
    start: this.handleStartScript.bind(this),
  });
};
methods.handleStartScript = function (data) {
  const self = this;
  const setCall = data.callback;
  self.emit({
    type: "context-app",
    data: {
      myName: "ntsako",
      callback: (data) => {
        // self.debug("THIS DATA");
        // self.debug(self.pao);
        self.debug("WALAH", data);
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
        self.debug("THE DATA FROM WEBPACK CONFIG", data);
        setCall("Webpack config has been called successfully");
      },
    },
  });
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
export default methods;
