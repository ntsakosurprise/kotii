const childProcess = require("child_process");
module.exports = function (tarballContext = null, tarballName) {
  let commandToRun = `npm pack ${tarballName}`;
  let currentWorkingDirectory = tarballContext ? tarballContext : process.cwd();
  childProcess.execSync(`${commandToRun}`, {
    cwd: `${currentWorkingDirectory}`,
    stdio: "inherit",
  });
};
