const methods = {};
methods.init = function () {
  // self.debug('Configstore has been initialised')
  this.listens({
    "store-in-config": this.handleStoreInConfig.bind(this),
    "get-from-config": this.handleGetFromConfig.bind(this),
  });
};
methods.handleStoreInConfig = function (data) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const { key, value } = data;
  // self.callback = data.callback
  // self.debug('THE KEY VALUE PAIRS')
  // self.debug(data)
  // self.debug(key)
  // self.debug(value)
  const config = new self.Configstore(loadFile("./package.json").name);
  config.set(key, value);
  // self.callback()
};
methods.handleGetFromConfig = function (data) {
  // self.debug('THE HANDgetfromconfig data')
  // self.debug(data)
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const { key } = data;
  self.callback = data.callback;
  const config = new self.Configstore(loadFile("./package.json").name);
  let set = config.get(key);
  if (set) {
    return self.callback({ isFound: true, found: set });
  } else {
    return self.callback({ isFound: false });
  }
};
methods.storeUserConfigs = function (data) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const { key, value } = data;
  const config = new self.Configstore(loadFile("./package.json").name);
  config.set(key, value);
};
methods.getStoredUserToken = function () {
  return new Promise((resolve, reject) => {
    const self = this;
    const pao = self.pao;
    const loadFile = pao.pa_loadFile;
    const config = new self.Configstore(loadFile("./package.json").name);
    // self.debug(config)
    // self.debug(loadFile('./package.json').name)
    // self.debug(config.get)
    // self.debug(config.all)
    // self.debug(config.get('iiprodakts'))
    let allStoredKeys = config.all;
    if (allStoredKeys) {
      let storedKeys = Object.keys(allStoredKeys);
      // self.debug('THE STORED KEYS')
      // self.debug(storedKeys)
      self.questions.account[0].choices = [...storedKeys];
      self.questions.account[0].choices.push("Another account");
      // self.debug(self.questions.account[0].choices)
      self
        .startQuestionnaire({ account: ["account"] })
        .then((confirmAnswer) => {
          //  self.debug('THE CONFIRM ANSWER')
          //  self.debug(confirmAnswer.account.toLowerCase().trim()  === 'another account' )
          if (
            confirmAnswer.account.toLowerCase().trim() === "another account"
          ) {
            self
              .startQuestionnaire({ remote: ["username", "password"] })
              .then((answers) => {
                self.debug("Answers in getStoredConfig");
                self.debug(answers);
                return resolve({ creds: answers });
              })
              .catch((e) => {
                return reject(e);
              });
          } else {
            return resolve(allStoredKeys[confirmAnswer.account]);
          }
        })
        .catch((e) => {
          return reject(e);
        });
      // resolve(allStoredKeys)
    } else {
      return resolve(false);
    }
    //  if(!key) return reject(new Error('No token has been provided'))
    //  return resolve(config.get(key))
  });
};
export default methods;
