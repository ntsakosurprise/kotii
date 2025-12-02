export const init = function () {
  this.adLog("Jwt has been initialised");
  this.listens({
    "save-jwt-key": this.handleSaveJwtKey.bind(this),
    "create-jwt-token": this.handleCreateToken.bind(this),
    "verify-jwt-token": this.handleVerifyToken.bind(this),
  });
};

export const handleSaveJwtKey = function (data) {
  const self = this;
  self.adLog("Saving Jwt Key");
  self.key = data.key;
};

export const handleCreateToken = function (data) {
  const self = this;
  self.adLog("Jwt Token create request");
  self.pao.pa_wiLog(data);
  if (data.hasOwnProperty("payload")) {
    self.jwtSign(data);
  }
};

export const handleVerifyToken = function (data) {
  const self = this;
  self.adLog("Jwt Token verify request");

  if (data.hasOwnProperty("token")) {
    self.jwtVerify(data);
  }
};

export const jwtSign = async function (jw) {
  const self = this;

  try {
    let token = await self.jwt.sign(jw.payload, self.key);
    let tk = {
      token: token,
      user: { name: jw.payload.username, accessToken: token },
    };
    self.pao.pa_wiLog("TOKEN SUCCESSFULLY CREATED");
    self.pao.pa_wiLog(token);
    return jw.callback(null, tk);
  } catch (e) {
    return jw.callback(e, null);
  }
};

export const jwtVerify = async function (token) {
  const self = this;
  self.adLog("Verifying Tokens");

  try {
    let verified = await self.jwt.verify(token.token, self.key);

    if (verified) {
      token.callback(null, verified);
    }
  } catch (e) {
    token.callback(e, null);
  }
};
