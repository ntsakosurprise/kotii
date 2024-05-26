const { exec } = require("child_process");

const path = require("path");
module.exports = function (
  scriptPath,
  fileToRun,
  fromContext,
  options
  // scriptsPath
) {
  // console.log(
  //   "JEST EXECUTES RUNNODESCRIPT",
  //   scriptPath,
  //   fileToRun,
  //   fromContext,
  //   options
  // );
  return new Promise((resolve, reject) => {
    let commandToRun = `node ${path.join(scriptPath, fileToRun)} ${options
      .toString()
      .replace(/,/g, " ")}`;

    exec(`${commandToRun}`, { cwd: fromContext, stdio: "inherit" }, (err) => {
      if (err) reject(false);
      resolve(true);
    });
  });
};
