const childProcess = require("child_process");
module.exports = function (tarballContext = null, script) {
  let commandToRun = `npm pack`;
  let currentWorkingDirectory = !tarballContext
    ? tarballContext
    : process.cwd();
  console.log(
    "CUDRREN WORK DIR",
    currentWorkingDirectory,
    script,
    commandToRun
  );
  let createdTarPath = childProcess
    .execSync(`${commandToRun} --workspace=${script}`, {
      cwd: `${currentWorkingDirectory}`,
    })
    .toString()
    .trim();
  return createdTarPath;
};
