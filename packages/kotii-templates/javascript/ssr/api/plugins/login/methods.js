/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export const init = function () {
  this.adLog("Login has been initialised");
  this.listens({
    "handle-login-task": this.handleLoginTask.bind(this),
  });
};

export const handleLoginTask = function (data) {
  const self = this;
  const pao = self.pao;
  const contains = pao.pa_contains;
  const isOBject = pao.pa_isObject;
  const forOf = pao.pa_forOf;
  const { payload } = data;
  const { user } = payload;
  // let user = data.payload.user
  self.callback = data.callback;
  self.tmpd = data;

  if (!isOBject(user))
    return self.callback({ message: "User has not been specified" }, null);
  if (!user.action) return self.callback({ message: "Invalid request" }, null);
  if (!contains(user, ["payload"]))
    return self.callback({ message: "missing required payload" }, null);

  switch (user.action) {
    case "loginUser":
      {
        self
          .loginUser(data)
          .then((userStatus) => {
            return self.callback(null, {
              actionStatus: true,
              actor: { auth: compareStatus.user, profile: gotBulk },
            });
          })
          .catch((e) =>
            self.callback({
              actionStatus: false,
              error: true,
              message: "An error occured trying to login user",
            })
          );
      }
      break;
    default:
      return self.callback(new Error("Unknown data request"), null);
  }
};

export const loginUser = function (pay) {
  const self = this;
  const pao = self.pao;
  let user = pay;

  return new Promise((resolve, reject) => {
    if (!pao.pa_contains(user, "login"))
      return reject(new Error("Missing login"));
    self.emit({
      type: "create-user-session",
      data: {
        payload: {
          sessionType: "custom",
        },
        request: user.request,
        callback: (results) => {
          resolve(results);
        },
      },
    });
  });
};
