// const { execSync } = require("child_process");
import { execSync } from "child_process";
import path from "path";

export default function (
  scriptPath,
  fileToRun,
  fromContext,
  options,
  scriptsPath
) {
  let optionsValue = options[0] ? options[0] : "";
  console.log("options value", optionsValue);
  console.log("THE SCRIPTS PATH", scriptsPath);

  let commandToRun = `NODE_OPTIONS=--import=./compile/register_hooks.cjs node ${path.join(
    scriptPath,
    fileToRun
  )} ${optionsValue.toString().replace(/,/g, " ")}`;
  console.log("COMMAND TO RUN", commandToRun);
  execSync(`${commandToRun}`, { cwd: fromContext, stdio: "inherit" });
}
