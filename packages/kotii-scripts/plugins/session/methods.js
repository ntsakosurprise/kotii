export const init = function () {
  this.adLog("Login has been initialised");
  this.listens({
    "handle-login-task": this.handleLoginTask.bind(this),
    "create-user-session": this.handleCreateUserSession.bind(this),
  });
};

export const handleLoginTask = function (data) {
  // const self = this
  // self.log("Handling Login task")
  // self.log(data)
  // self.loginStrategy(data)

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

  // let uid = user.ID
  self.pao.pa_wiLog(data);
  self.infoSync("THE DATA:::");
  self.infoSync(data);
  self.infoSync(user);

  // self.pao.pa_wiLog('THE PARSED DATA TEST')
  // self.pao.pa_wiLog(data)
  // self.pao.pa_wiLog(user)

  if (!isOBject(user))
    return self.callback({ message: "User has not been specified" }, null);
  if (!user.action) return self.callback({ message: "Invalid request" }, null);
  if (!contains(user, ["payload"]))
    return self.callback({ message: "missing required payload" }, null);

  switch (user.action) {
    case "loginUser":
      {
        self
          .loginUser(user.payload)
          .then((userStatus) => {
            self.infoSync("THE USER EXISTENCE Status");
            self.infoSync(userStatus);

            if (!userStatus)
              return self.callback(null, {
                actionStatus: false,
                message: "Invalid login, please try again",
              });
            if (
              (userStatus instanceof Array && userStatus.length <= 0) ||
              Object.keys(userStatus).length === 0
            )
              return self.callback(null, {
                actionStatus: false,
                message: "Invalid login, please try again",
              });

            if (userStatus["0"]) userStatus = userStatus["0"];
            self.infoSync(userStatus);

            const reducedUserData = { ...userStatus };
            delete reducedUserData.password;
            let { id } = reducedUserData;
            // let {id,first_name,profile_url,is_pending,is_active,is_deleted,email,u_type} = reducedUserData
            // let splitUrl = profile_url.split('/')
            // let version = splitUrl[splitUrl.length - 1]
            // splitUrl.splice(splitUrl.length - 1,1)
            // profile_url = splitUrl.join('/')

            self
              .compareUser(userStatus, user.payload)
              .then((compareStatus) => {
                //actor:{auth:jwt.user,profile: {id:id,userType: u_type,firstName: first_name,profileUrl: profile_url,isPending:is_pending,isActive: is_active,isDeleted: is_deleted,email:email}}})
                if (!compareStatus)
                  return self.callback(null, {
                    actionStatus: false,
                    message: "Invalid login credentials, please try again",
                  });

                self
                  .getUserProfile({ ID: id })
                  .then((gotProfile) => {
                    const { gotBulk } = gotProfile;

                    if (gotBulk.personal && gotBulk.personal instanceof Array) {
                      gotBulk.personal = { ...gotBulk.personal[0] };
                      // let preset = self.preSetImage(resume.personal.profile_url)
                      gotBulk.personal = {
                        ...gotBulk.personal,
                        ...self.preSetImage(gotBulk.personal.profile_url),
                      };
                    }

                    const {
                      alertsCount = [],
                      savedCount = [],
                      searchCount = [],
                      alertSubscriberID = [],
                    } = gotBulk;

                    gotBulk.alertsCount =
                      alertsCount.length > 0 ? alertsCount[0].alertsCount : 0;
                    gotBulk.savedCount =
                      savedCount.length > 0 ? savedCount[0].savedCount : 0;
                    gotBulk.searchCount =
                      searchCount.length > 0 ? searchCount[0].historyCount : 0;
                    gotBulk.alertSubscriberID =
                      alertSubscriberID.length > 0
                        ? alertSubscriberID[0].alertSubscriber
                        : 0;

                    return self.callback(null, {
                      actionStatus: true,
                      actor: { auth: compareStatus.user, profile: gotBulk },
                    });
                  })
                  .catch((e) => {
                    return self.callback({
                      actionStatus: false,
                      message:
                        "An error occured trying to log you in, please try again",
                    });
                  });

                // return self.callback(null,{actionStatus: true,actor: {auth: compareStatus.user,
                // 				profile: {id:id,userType: u_type,firstName: first_name,version: version,profileUrl: profile_url,isPending:is_pending,isActive: is_active,isDeleted: is_deleted,email:email}}
                // 			})
              })
              .catch((e) =>
                self.callback({
                  actionStatus: false,
                  error: true,
                  message: "An error occured authenticating user",
                })
              );
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
        request.res.setHeader(
          "Set-Cookie",
          `auth_token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict; Secure`
        );
      })
      .catch((err) => {
        self.debug("ERROR WITH CUSTOM SESSION", err);
      });
  }
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
export const expresSession = function (pay) {
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
export const loginUser = function (pay) {
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

export const anzii = function (user) {
  const self = this;
  const pao = self.pao;
  self.log("Executing Anzii login strategy");

  return new Promise((resolve, reject) => {
    if (!pao.pa_contains(user, ["email", "password"]))
      return reject(new Error("Missing required user data"));
    if (
      !pao.pa_isValidEmail(user.email) &&
      !pao.pa_isValidPassword(user.password)
    )
      return reject(new Error("Invalid register input"));

    self
      .isUserExist(user)
      .then((existUser) => {
        self.infoSync("THE FOUND USER");
        self.infoSync(existUser);
        self.infoSync(existUser instanceof Array);
        // self.infoSync(existUser.email)

        // if((pao.pa_isArray(existUser) && existUser.length === 0)) return resolve(false)
        if (!existUser) return resolve(false);
        return resolve({ ...existUser });
      })
      .catch((e) => {
        return reject(e);
      });
  });
};

export const getUserProfile = function (pay) {
  const self = this;
  const pao = self.pao;

  return new Promise((resolve, reject) => {
    const { ID } = pay;

    self.emit({
      type: "handle-bulk-task",
      data: {
        payload: {
          user: {
            action: "getBulk",
            payload: {
              operations: null,
              operationType: "",
              ID: ID,
            },
          },
        },
        callback: self.hookFunkToThingy(
          self,
          (reso, reje, e = null, res = null) => {
            self.infoSync("getBulk response::USERPROFILE");
            self.infoSync(e);
            self.infoSync(res);
            if (e) return reje(e);
            return reso(res);
          },
          [resolve, reject]
        ),
      },
    });
  });
};

export const social = function (data) {
  const self = this;
  self.log("Executing Social registration strategy");
};

export const isUserExist = function (user) {
  const self = this;
  self.infoSync("THE USEREXIST TEST USER");
  self.infoSync(user);

  return new Promise((resolve, reject) => {
    let join = {
      //returnFields: ['email,first_name,last_name,password'],
      returnFields: [
        "jo_user.id",
        "email",
        "first_name",
        "profile_url",
        "u_type",
        "is_pending",
        "is_active",
        "is_deleted",
        "password",
      ],
      // opiks: ['field.is_pending.as[isPending]'],
      tables: ["jo_user", "jo_login"],
      joins: 2,
      joinPoints: ["jo_user.id EQUALS jo_login.u_id"],
      conditions: [`email EQUALS ${user.email}`],
      //opiks: ['field.profile_url.as[profileUrl]','field.first_name.as[firstName]','field.last_name.as[lastName]'],
      type: "inner",
    };

    self.query(
      "mysql.SEARCH",
      join,
      self.dataRequestHandler.bind(this, resolve, reject)
    );
  });
};

// export const isUserExist  = function(data){

// 	  const self = this
// 	  let user =  data.user.parsed.user
// 	//   self.log('Checking if user is taken')
// 	  self.callback = data.callback

// 	 let join = {

// 		returnFields: ['email,first_name,last_name,password'],
// 		tables:['jo_user','jo_login'],
// 		joins: 2,
// 		joinPoints: ['jo_user.id EQUALS jo_login.u_id'],
// 		conditions: [`email EQUALS ${user.email}`],
// 		type: 'inner'
// 	}

// 	//   self.query(
// 	// 	'mysql.jo_user.findOne',
// 	// 	  {user: { email: user.email}},
// 	// 	  self.findHandler.bind(this)
// 	// 	  )

// 	self.query(
// 		'mysql.JOIN',
// 		 join,
// 		 self.findHandler.bind(this)
// 	)

// }

// export const setTokenHeader = function(e=null,token=null){

// 	const self = this
// 	const pao = self.pao

// 	if(e){

// 		self.pao.pa_wiLog('TOKEN CREATION FAILED')
// 		self.pao.pa_wiLog(e)
// 		self.callback(e)

// 	}else{

// 		self.pao.pa_wiLog('TOKEN CREATION SUCCESSFULL')
// 		self.pao.pa_wiLog('SETTING TOKEN HEADER')
// 		self.pao.pa_wiLog(self.tmpd)
// 		self.tmpd.user.request.res.set('X-AUTH-TOKEN',token.token)
// 		self.callback(null,{user: token.user})

// 	}

// }

// export const findHandler = async function(e =null,r = null){

// 	const self = this
// 	const pao = self.pao

// 	if(e){

// 		self.callback({message: 'An error occured attempting to find user'},null)

// 	}else{

// 		if((pao.pa_isArray(r) && r.length === 0)){

// 			self.callback({message: 'User does not exist'},null)

// 		}else{

// 			self.log('Login User exist')
// 			self.log(r)
// 			self.log(self.tmpd)
// 			// let user = {email: self.tmpd.user.parsed.user.email,username: 'sample'}
// 			// self.emit({type:'create-jwt-token',data:{payload: user,callback: self.setTokenHeader.bind(self)}})
//             let password = self.tmpd.user.parsed.user.password
// 			self.emit({type: 'compare-payload',data:{payload: {plainpass: password,hash: r.password },callback: self.compare.bind(this)}})

// 		}
// 	}
// 	// token.res.set('X-AUTH-TOKEN',token.tk)
// }

export const compareUser = function (existUser, user) {
  const self = this;

  return new Promise((resolve, reject) => {
    // let password = self.tmpd.user.parsed.user.password
    self.infoSync("compareUSER");
    self.infoSync(existUser);
    self.infoSync(user);
    const { login } = user;
    const { password } = login;
    //let password = user.login.password

    self.emit({
      type: "compare-payload",
      data: {
        payload: { plainpass: password, hash: existUser.password },
        callback: self.hookFunkToThingy(
          self,
          (reso, reje, e = null, res = null) => {
            self.infoSync("pass compare outcome");
            self.infoSync(res);
            if (e) return reje(e);

            if (res) {
              let jwtCreateUser = { username: login.email };

              self.emit({
                type: "create-jwt-token",
                data: {
                  payload: jwtCreateUser,
                  callback: self.hookFunkToThingy(
                    self,
                    (reso, reje, e = null, token = null) => {
                      if (e) {
                        self.pao.pa_wiLog("TOKEN CREATION FAILED");
                        self.pao.pa_wiLog(e);
                        return reje(e);
                      } else {
                        self.pao.pa_wiLog("TOKEN CREATION SUCCESSFULL");
                        self.pao.pa_wiLog("SETTING TOKEN HEADER");
                        self.pao.pa_wiLog(self.tmpd);
                        self.tmpd.payload.request.res.set(
                          "X-AUTH-TOKEN",
                          token.token
                        );

                        return reso({ user: token.user });
                      }
                    },
                    [resolve, reject]
                  ),
                },
              });
              // self.emit({type:'create-jwt-token',
              // 			data:{
              // 				payload: user,
              // 				callback: self.hookFunkToThingy(self,(reso,reje,e=null,res=null)=>{

              // 					if(e) return reje(e)
              // 					self.infoSync('TOKEN CREATION SUCCESSFULL')
              // 					self.infoSync(res)
              // 					self.tmpd.payload.request.res.set('X-AUTH-TOKEN',token.token)
              // 					return reso(null,{user: token.user})
              // 				},[reso,reje])
              // 			}
              // })
            } else {
              return reso(res);
            }
          },
          [resolve, reject]
        ),
      },
    });
  });

  // if(e){

  // 	self.pao.pa_wiLog(e)
  // 	self.callback({message: 'Login failed due to server error:hash'})

  // }else{

  // 	if(c){

  // 		self.log('Login User is valid')
  // 	    self.log(c)
  // 		let user = {username: self.tmpd.user.parsed.user.email}
  // 		self.emit({type:'create-jwt-token',data:{payload: user,callback: self.setTokenHeader.bind(self)}})

  // 	}else{

  // 		self.callback({message: 'Invalid login'},null)
  // 	}

  // }
};

export const preSetImage = function (profile_url) {
  const self = this;
  self.infoSync("presetItem");
  self.infoSync(profile_url);

  let splitUrl = profile_url.split("/");
  let version = splitUrl[splitUrl.length - 1];
  splitUrl.splice(splitUrl.length - 1, 1);
  profile_url = splitUrl.join("/");

  return { version: version, profile_url: profile_url };
};

export const hookFunkToThingy = function (hooky, hook, args = null) {
  if (args) return hook.bind(hooky, ...args);
  return hook.bind(hooky);
};

export const dataRequestHandler = function (
  resolve,
  reject,
  e = null,
  result = null
) {
  const self = this;
  let pao = self.pao;

  if (e) return reject(e);
  return resolve(result);
};
