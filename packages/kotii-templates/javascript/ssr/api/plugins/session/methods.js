/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import session from "express-session";
export const init = function () {
  this.adLog("Login has been initialised");
  this.listens({
    "share-middleware": this.handleShareMiddleware.bind(this),
    "create-user-session": this.handleCreateUserSession.bind(this),
    "destroy-user-session": this.handleDestroyUserSession.bind(this),
    "get-user-from-session": this.handleGetUserFromSession.bind(this),
    "view-guard": this.handleViewGuard.bind(this),
  });
};

export const handleShareMiddleware = function (data) {
  const self = this;
  const sessionOptions = {
  name: "sid",
  secret: process?.env?.SESSION_SECRET || "super-secret-key", // should be in env
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // Set to true in production (HTTPS)
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  }
}
  self.debug("HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED");
  self.emit({
    type: "add-ext-middleware",
    data:{
      payload: [
        {
        type: "private",
        level: "top",
        middleware: { funk: self.auth.bind(self) },
      },
      {
        type: "all",
        level: "top",
        middleware: { funk: session, options: sessionOptions },
      }
  ],
    } 
  });
};
export const handleCreateUserSession = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { sessionType = "express", request ,user} = payload;
  self.sessionType = sessionType

 
  self.callback = data.callback;

  if (sessionType === "express") {
    self
      .expressSession(user,request)
      .then((syncToken) => {
         data.callback({user:syncToken.user})
      })
      .catch((err) => {});
  } else {
    self
      .customSession(user)
      .then((token) => {
        self.debug("Custom Session token", token);
        request.res.set(
          "Set-Cookie",
          `auth_token=${token.token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict; Secure`
        );
        data.callback({user:token.user})
      })
      .catch((err) => {
        self.debug("ERROR WITH CUSTOM SESSION", err);
        data.callback({actionStatus: false})
      });
  }
};

export const handleGetUserFromSession = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { sessionType = "express", request } = payload;

  self.callback = data.callback;
  self
    .getUserFromSession(request.req)
    .then((user) => {
      self.callback(user);
    })
    .catch((e) => {
      self.callback(null);
    });
};
export const handleViewGuard = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  

  self.callback = data.callback;

  self
    .getUserFromSession(payload.request)
    .then((user) => {
     self.debug("The ViewGuard User", user)
     self.callback(user)
    })
    .catch((e) => {
     self.debug("ViewGuard user Error", e)
     self.callback(null)
    });
};
export const handleDestroyUserSession = function (data) {
   const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { sessionType = "express", request } = payload;
  self.debug("DESTROYING SESSION", payload)

  self.callback = data.callback;
  if(sessionType !== "express"){
    self.log("SESSION TYPE NOT EXPRESS", sessionType)
    request.res.set(
            "Set-Cookie",
            `auth_token=; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict; Secure`
          );
    data.callback({actionStatus:true, isLoggedOut: true})
  }else{
      request.req.session.destroy((err) => {
         self.debug("DESTROYING SESSION",err)
          if (err) {
            self.debug("ERROR LOGING OUT OF EXPRESSION",err)
            return self.endRequestSession({
                payload: errorData,
                    res:request.res,
                    code: 401,
              })
          }
          self.debug("THE REQ USER AFTER DESTROY",request.req?.authUser)
          if(request.req?.authUser) delete request.req.authUser
          request.res.clearCookie("sid");
          self.debug("USER AFTE REMVOE", request.req.authUser)
           self.debug("THE REQ USER AFTER DESTROY",request.req.session)

          data.callback({actionStatus:true, isLoggedOut: true})
        });
    
  }

};
export const verifyJwtToken = function (token) {
  const self = this;
  self.debug("THE JWT SESSION TOKEN VERIFYING", token)
  return new Promise((resolve, reject) => {
    self.emit({
      type: "verify-jwt-token",
      data: {
        payload:{token},
        callback: (error,verified) => {
          self.debug("IS VERIFY ERROR", error)
          self.debug("THE TOKEN RESULTS", verified)
          resolve(verified);
        },
      },
    });
  });
};
export const customSession = function (user) {
  const self = this;
  const pao = self.pao;
 
  // let jwtCreateUser = { username: user.email };
  return new Promise((resolve, reject) => {
    self.emit({
      type: "create-jwt-token",
      data: {
        payload: user,
        callback: (err,token = null) => {
          self.debug("THE JWT TOKEN", token);
          resolve(token);
        },
      },
    });
  });
};
export const expressSession = function (user,request) {
  const self = this;
  const pao = self.pao;
  self.debug("THE EXPRESSION SESSION OBJECT", request)
  self.debug("AFTER SESSION", request?.req?.session)

  return new Promise((resolve, reject) => {
    request.req.session.user = user
    resolve({user:request.req.session.user})
  
  });
};

export const getCustomSessionCookie = function (cookieData) {
  const self = this;

  const { cookie, cookieID } = cookieData;

  const token = cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${cookieID}=`))
    ?.split("=")[1];
  return token;
};

export const getUserFromSession = function (req) {
  const self = this;
 
  
  return new Promise((resolve, reject) => {

    if(self.sessionType === "express"){
      if(req.session.user){
        return resolve(req.session.user)
      }else{
        return reject()
      }
      
    }
    let cookie = req.headers.cookie;
    self.debug("COOKIE FROM HEADER", cookie)
    let token = self.getCustomSessionCookie({ cookie, cookieID: "auth_token" });
    self.debug("TOKEN FROM COOKIE",token)
    if (token) {
      self
        .verifyJwtToken(token)
        .then((foundUser) => {
          if (!foundUser) reject();
          resolve(foundUser);
        })
        .catch((err) => {
          reject("There was error verifying token");
        });
    } else {
      reject();
    }
  });
};

export const auth = function (req, res, next) {
  const self = this;
  self.debug("RUNNING AUTH MIDDLEWARE");
  self.request = { req, res, next };
  const errorData = { actionStatus: false,
              error: true,
              message: "An error occured trying to login user"}

  self
    .getUserFromSession(req)
    .then((user) => {
      if(!user) return self.endRequestSession({
          payload: errorData,
          res,
          code: 401,
        },)
      
      req.authUser = user;
      next();
    })
    .catch((e) => {
     self.debug("AUTHENTICATION ERROR",e)
     self.endRequestSession({
          payload: errorData,
          res,
          code: 401,
        })
      
    });
};

export const token = function (e = null, r = null) {
  const self = this;
  self.log("Authentication Middleware executed");

  if (e) {
    self.pao.pa_wiLog(e);
    let data = {
      error: true,
      message: "Invalid token",
    };
    self.emit({
      type: "write-server-request-response",
      data: {
        data: data,
        res: self.request.res,
      },
    });
  } else {
    // re.req.user = r
    self.pao.pa_wiLog("THE SUCCESSFULLY VERIFIED TOKEN");
    self.pao.pa_wiLog(r);
    self.request.next();
  }
};
export const endRequestSession = function (data){
  const self = this 

   self.emit({
        type: "write-server-request-response",
        data
      });
}
