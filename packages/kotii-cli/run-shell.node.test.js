import path from "path";
import runNodeScript from "./shell/runNodeScript";
const scriptPath = __dirname;
const contextScriptRoot = path.join(scriptPath, "..");
// const packagesPath = path.join(contextScriptRoot, "packages");
//const kotiiScriptsPath = path.join(packagesPath, "kotii");
const nodeScriptPath = scriptPath;

describe("Test shell scripting semulation", () => {
  test("Should start up kotii-cli", async () => {
    expect(
      await runNodeScript(nodeScriptPath, "app.js", contextScriptRoot, "start")
    ).toBeTruthy();
  });
});
