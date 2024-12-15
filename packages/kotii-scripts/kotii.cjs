#!/usr/bin/env node

// import runNodeScript from "./compile/runNodeScript.js";
// console.log("conditon.js:", process.env.NODE_ENV);

// if (process.env.NODE_ENV === "production") {
//   //   runNpmScript(
//   //     "run",
//   //     `--prefix /Users/surprisemashele/Documents/kotii start:prod`
//   //   )
//   //     .then((ran) => {
//   //       console.log("THE SCRIPT RAN", ran);
//   //     })
//   //     .catch((err) => {
//   //       console.log("THE SCRIPTS FAILED TO RUN", err);
//   //     });
//   runNodeScript(
//     "/Users/surprisemashele/Documents/kotii/packages/kotii-scripts",
//     "app.js",
//     "/Users/surprisemashele/Documents/kotii/packages/kotii-scripts",
//     ["start"]
//   );
// } else {
//   //   runNpmScript(
//   //     "run",
//   //     `--prefix /Users/surprisemashele/Documents/kotii start:dev`
//   //   )
//   //     .then((ran) => {
//   //       console.log("THE SCRIPT RAN", ran);
//   //     })
//   //     .catch((err) => {
//   //       console.log("THE SCRIPTS FAILED TO RUN", err);
//   //     });
//   runNodeScript(
//     "/Users/surprisemashele/Documents/kotii/packages/kotii-scripts",
//     "app.js",
//     "/Users/surprisemashele/Documents/kotii/packages/kotii-scripts",
//     ["start"]
//   );
// }
// process.on("exit", () => {
//   console.log("THE PROCESS HAS EXITED CONDITION");
// });

// entrypoint.cjs

const { register } = require("node:module");
const { pathToFileURL } = require("node:url");
const { getAndSetEnvironmentVariables } = require("./preloads.cjs");
process.env.NODE_ENV = "development";
const parentURL = pathToFileURL(__filename);
const cli = require("./cli.cjs");
const { parseScriptArguments } = cli;

const commandToRun = parseScriptArguments()[0];

if (commandToRun === "start") {
  console.log("RUNNING SCRIPT:", commandToRun);
  process.env.ANZII_KICK_OFF_MANUALLY = "true";
  register("./compile/hooks_prod.js", parentURL);
  import("./kotii-land/prod/app_prod.js");
} else {
  console.log("THE REGISTER HOOK Dev");
  register("./compile/hooks_.js", parentURL);
  getAndSetEnvironmentVariables();
  import("./kotii-land/dev/app.js");
}
