const methods = {};
methods.init = function () {
  // self.debug('Bitbucket has been initialised')

  this.listens({
    "process-markdown-pages": this.handleMardownPages.bind(this),
  });
};
methods.handleMardownPages = function (data) {
  const self = this;
  const { callback, payload } = data;

  self.doCache(payload, callback);
  // self.debug("THE DATA OF Init SCRIPTS", data);
  // data.callback({ message: "Init plugin successfully called" });
  // return;
};

export default methods;
