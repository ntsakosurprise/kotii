const childProcess = require("child_process");
module.exports = function (tarballContext = null, script) {
  let commandToRun = `pnpm pack`;
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
    .execSync(`${commandToRun}`, {
      cwd: `${currentWorkingDirectory}/packages/${script}`,
    })
    .toString()
    .trim();
  return createdTarPath;
};
