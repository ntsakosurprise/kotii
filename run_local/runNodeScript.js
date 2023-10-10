const { execSync } = require("child_process");

const path = require("path");
module.exports = function (scriptPath, fileToRun, fromContext, options) {
  let commandToRun = `node ${path.join(scriptPath, fileToRun)} ${
    options[0][0]
  }`;
  execSync(`${commandToRun}`, { cwd: fromContext, stdio: "inherit" });
};
