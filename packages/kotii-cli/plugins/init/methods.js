const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')
  // console.log("THE VALUE OF THIS", this);
  this.listens({
    init: this.handleInitScript.bind(this),
  });
};

methods.handleInitScript = function (data) {
  console.log("THE DATA OF Init SCRIPTS", data);
  data.callback({ message: "Init plugin successfully called" });
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
