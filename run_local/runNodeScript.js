const { execSync } = require("child_process");

const path = require("path");
module.exports = function (scriptPath, fileToRun, fromContext, options) {
  let optionsValue = options[0][0] ? options[0] : "";
  console.log("options value", optionsValue);

  let commandToRun = `node ${path.join(scriptPath, fileToRun)} ${optionsValue
    .toString()
    .replace(/,/g, " ")}`;
  console.log("COMMAND TO RUN", commandToRun);
  execSync(`${commandToRun}`, { cwd: fromContext, stdio: "inherit" });
};
