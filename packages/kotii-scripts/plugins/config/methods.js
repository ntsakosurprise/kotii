const methods = {};
methods.init = function () {
  console.log("config has been initialised");

  this.listens({
    config: this.handleDevConfig.bind(this),
  });
};
methods.handleDevConfig = function (data) {
  console.log("THE DATA OF DevConfig", data);
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
export default methods;
