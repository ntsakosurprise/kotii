const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')
  this.listens({
    "start-script": this.handleStartScript.bind(this),
  });
};

methods.handleStartScript = function (data) {
  console.log("THE DATA OF START SCRIPTS", data);
  return;
  const self = this;
  const { bit } = data;
  self.callback = data.callback;
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
