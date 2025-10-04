/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export const init = function () {
  this.adLog("Login has been initialised");
  this.listens({
    "share-middleware": this.handleShareMiddleware.bind(this),
    "create-user-session": this.handleCreateUserSession.bind(this),
    "get-user-from-session": this.handleGetUserFromSession.bind(this),
    "view-guard": this.handleViewGuard.bind(this),
  });
};

export const handleShareMiddleware = function (data) {
  const self = this;
  self.debug("HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED");
  self.emit({
    type: "add-ext-middleware",
    data: {
      type: "private",
      level: "top",
      middleware: { funk: self.auth.bind(self) },
    },
  });
};
export const handleCreateUserSession = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { sessionType = "express", request } = payload;

  // let user = data.payload.user
  self.callback = data.callback;

  if (sessionType === "express") {
    self
      .expresSession(payload)
      .then(() => {})
      .catch((err) => {});
  } else {
    self
      .customSession(payload)
      .then((token) => {
        self.debug("Custom Session token", token);
        request.res.set(
          "Set-Cookie",
          `auth_token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict; Secure`
        );
      })
      .catch((err) => {
        self.debug("ERROR WITH CUSTOM SESSION", err);
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
    .catch(() => {
      self.callback(null);
    });
};
export const handleViewGuard = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload, request } = data;

  self.callback = data.callback;
};

export const verifyJwtToken = function (token) {
  const self = this;

  return new Promise((resolve, reject) => {
    self.emit({
      type: "verify-jwt-token",
      data: {
        token: token,
        callback: (results) => {
          resolve(results);
        },
      },
    });
  });
};
export const customSession = function (pay) {
  const self = this;
  const pao = self.pao;
  let user = pay;
  let jwtCreateUser = { username: email };
  return new Promise((resolve, reject) => {
    self.emit({
      type: "create-jwt-token",
      data: {
        payload: jwtCreateUser,
        callback: (token = null) => {
          self.debug("THE JWT TOKEN", token);
          resolve(token);
        },
      },
    });
  });
};
export const expressSession = function (pay) {
  const self = this;
  const pao = self.pao;
  let user = pay;

  return new Promise((resolve, reject) => {
    if (!pao.pa_contains(user, "strategy"))
      return reject(new Error("Missing strategy"));
    if (!pao.pa_contains(user, "login"))
      return reject(new Error("Missing login"));
    if (!pao.pa_contains(self.strategies, user.strategy))
      return reject(new Error("Invalid strategy"));

    self[user.strategy](user.login)
      .then((loginStatus) => {
        return resolve(loginStatus);
      })
      .catch((e) => {
        return reject(e);
      });
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
    let cookie = req.headers.cookie;
    let token = self.getCustomSessionCookie({ cookie, cookieID: "auth_token" });
    if (token) {
      self
        .verifyToken(token)
        .then((foundUser) => {
          if (!foundUser) reject();
          resolve(foundUser);
        })
        .catch((err) => {
          reject();
        });
    } else {
      reject();
    }
  });
};

export const auth = function (req, res, next) {
  const self = this;
  self.debug("THE REQUEST HEADERS");
  self.request = { req, res, next };

  self
    .getUserFromSession(req)
    .then((user) => {
      req.authUser = user;
      next();
    })
    .catch(() => {
      self.callback(null);
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
