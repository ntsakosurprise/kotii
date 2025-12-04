import { beginCreations } from "./kotii_create_time.js";
import { run } from "./kotii_runtime.js";

process.on("message", (msg) => {
  console.log("Child received:", msg);

  switch (msg.event) {
    case "take-commands":
      console.log("COMMANDS RECEIVED", msg.event);
      const { commandToRun, commands } = msg.data;
      console.log("THE COMMAND TO RUN", commandToRun);
      process.env["COMMANDS"] = JSON.stringify(commands);
      if (commandToRun === "start") {
        // process.env.ANZII_KICK_OFF_MANUALLY = "true";
        // process.env.NODE_ENV = "production";
        // register("./compile/hooks_prod.js", parentURL);
        // getAndSetEnvironmentVariables(process.env.NODE_ENV);
        // import("./kotii-land/prod/app_prod.js");
        // run();
      } else {
        console.log("THE COMMAND NAME IS", commandToRun);
        beginCreations(commandToRun);
      }
      break;

    default:
      process.send({ event: "unknown", data: msg });
      break;
  }
});
