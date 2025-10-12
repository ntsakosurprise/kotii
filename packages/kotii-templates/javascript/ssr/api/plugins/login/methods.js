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
  self.debug("THE LOGIN TASK DATA",data)
  const { payload } = data;
  const { user } = payload;
  // let user = data.payload.user
  self.debug("LOGIN TASK USER", data);
  self.callback = data.callback;
  self.tmpd = data;
  self.debug("THE REQUEST HEADERS",data.payload.request.req?.headers)

  if (!isOBject(user))
    return self.callback({ message: "User has not been specified" }, null);
  if (!user.action) return self.callback({ message: "Invalid request" }, null);
  if (!contains(user, ["payload"]))
    return self.callback({actionStatus: false, message: "missing required payload" }, null);

  switch (user.action) {
    case "loginUser":
      {
        self
          .loginUser(user.payload,data.payload.request)
          .then((user) => {
            return self.callback(null, {
              actionStatus: true,
              actor: user,
            });
          })
          .catch((e) =>{
            self.debug("login catch",e)
            self.callback({
              actionStatus: false,
              error: true,
              message: "An error occured trying to login user",
            })}
          );
      }
      break;
    default:
      return self.callback(new Error("Unknown data request"), null);
  }
};

export const loginUser = function (user,request) {
  const self = this;
  const pao = self.pao;
 

  return new Promise((resolve, reject) => {
  
    self.emit({
      type: "create-user-session",
      data: {
        payload: {
          sessionType: user.sessionType,
          user, request
        },
        callback: (results) => {
          self.debug("THE USER RESULTS",results)
          if(!results?.user) return reject("Erro occured creating session")
          resolve(results.user);
        },
      },
    });
  });
};
