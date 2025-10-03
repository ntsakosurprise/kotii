export const init = function () {
  this.listens({
    "run-view-authentication": this.handleViewAuthentication.bind(this),
  });
};

export const handleViewAuthentication = function (data) {
  const self = this;
};
