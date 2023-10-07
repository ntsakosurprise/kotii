const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')
  console.log("THE VALUE OF THIS", this);
  this.listens({
    start: this.handleStartScript.bind(this),
  });
};

methods.handleStartScript = function (data) {
  console.log("THE DAT OF START SCRIPTS", data);
  const self = this;
  const setCall = data.callback;
  self.emit({
    type: "context-app",
    data: {
      myName: "ntsako",
      callback: (data) => {
        console.log("THIS DATA");
        console.log(self.pao);
        console.log("WALAH", data);
        self.getWebPackConfig(data.data, setCall);
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
        console.log("THE DATA FROM WEBPACK CONFIG", data);
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

module.exports = methods;
