/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export const init = function () {
  this.adLog("Login has been initialised");
  this.listens({
    "handle-logout-task": this.handleLogoutTask.bind(this),
  });
};

export const handleLogoutTask = function (data) {
  const self = this;
  const pao = self.pao;
  const isOBject = pao.pa_isObject;
  self.debug("THE LOGIN TASK DATA",data)
  const { payload } = data;
  const { user } = payload;

  self.debug("LOGIN TASK USER", data);
  self.callback = data.callback;

  self.debug("THE REQUEST HEADERS",data.payload.request.req?.headers)

  if (!isOBject(user))
    return self.callback({ actionStatus:false,error: true,message: "User has not been specified" }, null);
  if (!user?.action) return self.callback({ actionStatus: false,error: true,message: "Invalid request" }, null);
  

  switch (user.action) {
    case "logoutUser":
      {
        self
          .logoutUser(user,payload.request)
          .then((logoutStatus) => {
            if(logoutStatus?.isLoggedOut){
              return self.callback(null, {
                            actionStatus: true,
                            isLoggedOut:true,
                            code: 200
                          });
            }else{
               return self.callback({
                            actionStatus: true,
                            isLoggedOut: false,
                            code: 500
                          });
            }
            
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

export const logoutUser = function (user,request) {
  const self = this;
  const pao = self.pao;
  const {payload} = user 
  const {sessionType} = payload
  self.debug("THE LOGOUT USER",user)
 

  return new Promise((resolve, reject) => {
  
    self.emit({
      type: "destroy-user-session",
      data: {
        payload: {
          sessionType,
          request
        },
        callback: (logoutStatus) => {
          self.debug("THE USER RESULTS",logoutStatus) 
          resolve(logoutStatus);
        },
      },
    });
  });
};
