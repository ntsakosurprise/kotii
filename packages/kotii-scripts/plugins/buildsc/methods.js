const methods = {};
methods.init = function () {
  this.listens({
    build: this.handleBuildScript.bind(this),
  });
};
methods.handleBuildScript = function (data) {
  console.log("THE DATA OF Build SCRIPTS", data);

  //   data.callback({ message: "Build plugin successfully called" });
  const self = this;
  self.doStaticSiteGeneration({ callback: data.callback });
  return;
};
methods.doStaticSiteGeneration = function (data) {
  const self = this;
  self.emit({
    type: "generate-static-content",
    data: {
      callback: (gotValue) => {
        console.log("STATIC GENERATION IS COMPLETED", gotValue);
        data.callback({ message: "Build plugin successfully called" });
      },
    },
  });
};
methods.api = function (data) {
  const self = this;
  const clientOptions = { auth: data.token };
  const bitbucket = new Bitbucket(clientOptions);
  return bitbucket;
};
export default methods;
