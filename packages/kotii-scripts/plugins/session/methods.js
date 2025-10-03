export const init = function () {
  this.adLog("Login has been initialised");
  this.listens({
    "create-user-session": this.handleCreateUserSession.bind(this),
    "get-user-from-session": this.handleGetUserFromSession.bind(this),
  });
};

export const handleCreateUserSession = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload, request } = data;
  const { sessionType = "express" } = payload;
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
  const { payload, request } = data;

  self.callback = data.callback;

  let cookie = request.req.headers.cookie;
  let token = self.getCustomSessionCookie({ cookie, cookieID: "auth_token" });
  if (token) {
    self
      .verifyToken(token)
      .then((foundUser) => {
        if (!foundUser) self.callback(null);
        self.callback(foundUser);
      })
      .catch((err) => {
        self.callback(null);
      });
  } else {
    self.callback(null);
  }
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
