const Interpreter = require("./interpreter/index");
const Scaffold = require("./scaffold/index");
const Gitauth = require("./gitauth/index");
// const Bitauth = require('./bitauth/index')
const Github = require("./github/index");
const Bitbucket = require("./bitbucket/index");
const Configstorer = require("./configstore/index");
const Start = require("./start/index");
const Config = require("./config");
const Build = require("./buildsc");
const Init = require("./init");
const WebpackConfig = require("./wbpconfig");
const DevServer = require("./devserver");

module.exports = {
  Interpreter,
  Scaffold,
  Gitauth,
  Github,
  Bitbucket,
  Configstorer,
  Start,
  Config,
  Build,
  Init,
  WebpackConfig,
  DevServer,
};
