const methods = {};
methods.init = function () {
  this.listens({
    config: this.handleDevConfig.bind(this),
  });
};
methods.handleDevConfig = function (data) {
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
