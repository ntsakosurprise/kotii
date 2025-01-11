const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

const getAndSetEnvironmentVariables = () => {
  setEnvironmentForFramework();
  setEnvironmentForUser();
};
const setEnvironmentForFramework = () => {
  process.argv.push("cli");
  process.env.ANZII_CLI_WITH_SERVER = "true";
  process.env.ANZII_SHOW_CLI_LOGS = "true";
  process.env.ANZII_OPEN_BROWSER = process.env?.CUSTOM_RESTART
    ? "false"
    : "true";
  // if (!process.env?.DEBUG) process.env.DEBUG = "anzii:*";
  // process.env.ANZII_SHOW_DEBUG_LOGS = "true";
};
const setEnvironmentForUser = () => {
  let workdir = process.cwd();
  let envFilePath = path.resolve(workdir, ".env.development");
  if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath });
  }
};
module.exports = {
  getAndSetEnvironmentVariables,
};
