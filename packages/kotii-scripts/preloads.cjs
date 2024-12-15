
const dotenv =  require("dotenv")
const path = require("path")
const fs = require("fs")
// const KOTTI_ENV_REGEX = /^KOTII_APP_/i;

const getAndSetEnvironmentVariables = () => {
    let workdir = process.cwd()
    let envFilePath = path.resolve(workdir, ".env.development");
    if (fs.existsSync(envFilePath)) {
      dotenv.config({ path: envFilePath });
    }
  };
  module.exports = {
    getAndSetEnvironmentVariables
  }