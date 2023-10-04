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
  self.emit({
    type: "context-app",
    data: {
      myName: "ntsako",
      callback: () => console.log("WALAH"),
    },
  });
  data.callback({ message: "Start plugin successfully called" });
  return;
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
