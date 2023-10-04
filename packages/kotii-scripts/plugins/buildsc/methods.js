const methods = {};
methods.init = function () {
  this.listens({
    build: this.handleBuildScript.bind(this),
  });
};

methods.handleBuildScript = function (data) {
  console.log("THE DATA OF Build SCRIPTS", data);
  data.callback({ message: "Build plugin successfully called" });
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
