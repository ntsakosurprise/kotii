const { register } = require("node:module");
const { pathToFileURL } = require("node:url");
const { getAndSetEnvironmentVariables } = require("./preloads.cjs");
const { removeStylesJson } = require("./globals.cjs");
const { beginCreation } = require("./kotii_create_time.cjs");
const { run } = require("./kotii_runtime.cjs");

const parentURL = pathToFileURL(__filename);

process.on("message", (msg) => {
  console.log("Child received:", msg);

  switch (msg.event) {
    case "take-commands":
      console.log("COMMANDS RECEIVED", msg.event);
      const { commandToRun, commands } = msg.data;
      console.log("THE COMMAND TO RUN", commandToRun);
      process.env["COMMANDS"] = JSON.stringify(commands);
      if (commandToRun === "start") {
        process.env.ANZII_KICK_OFF_MANUALLY = "true";
        process.env.NODE_ENV = "production";
        register("./compile/hooks_prod.js", parentURL);
        getAndSetEnvironmentVariables(process.env.NODE_ENV);

        import("./kotii-land/prod/app_prod.js");
        run();
      } else {
        beginCreation(commandToRun);
      }
      break;

    default:
      process.send({ event: "unknown", data: msg });
      break;
  }
});
