export const init = function () {
  this.listens({
    "run-view-authentication": this.handleViewAuthentication.bind(this),
  });
};

export const handleViewAuthentication = function (data) {
  const self = this;
  const { payload } = data;
  const { request } = payload;
  const { req } = request;

  if (req?.authUser) return data.callback(req.authUser);

  self.emit({
    type: "view-guard",
    data: {
      payload: { request: request.req },
      callback: (authResults) => {
        self.debug("THE AUTH RESULTS", authResults);
        if (authResults) {
          data.callback(authResults);
        } else {
          data.callback(authResults);
        }
      },
    },
  });
};
