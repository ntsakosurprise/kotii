const Interpreter = require("./interpreter/index");
const Scaffold = require("./scaffold/index");
const Gitauth = require("./gitauth/index");
// const Bitauth = require('./bitauth/index')
const Github = require("./github/index");
const Bitbucket = require("./bitbucket/index");
const Configstorer = require("./configstore/index");
// const Config = require("./config");
const Init = require("./init");

module.exports = {
  Interpreter,
  Scaffold,
  Gitauth,
  Github,
  Bitbucket,
  Configstorer,
  Init,
};
