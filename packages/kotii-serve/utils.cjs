/* eslint-disable no-unused-vars */
const parseContextArguments = function () {
  //console.log("THE PROCESS", process.argv);
  let args = process.argv.length <= 2 ? [] : process.argv.slice(2);
  return args;
};

const path = require("path");
const fs = require("fs");

const getAndSetEnvironmentVariables = (environment = "development") => {
  setEnvironmentForFramework(environment);
  // setEnvironmentForUser(environment);
};
const setEnvironmentForFramework = () => {
  process.argv.push("cli");
  process.env.ANZII_CLI_WITH_SERVER = "true";
  process.env.ANZII_SHOW_CLI_LOGS = "true";
};
const setEnvironmentForUser = (environment) => {
  let workdir = process.cwd();
  let envFilePath = path.resolve(workdir, `.env.${environment}`);
  if (fs.existsSync(envFilePath)) {
    // dotenv.config({ path: envFilePath });
  }
};
module.exports = {
  getAndSetEnvironmentVariables,
  parseContextArguments,
};
