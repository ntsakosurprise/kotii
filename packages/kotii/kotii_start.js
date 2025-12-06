import { beginCreations } from "./kotii_create_time.js";
import { run } from "./kotii_runtime.js";

process.on("message", (msg) => {
  switch (msg.event) {
    case "take-commands":
      console.log("COMMANDS RECEIVED", msg.event);
      const { commandToRun, commands } = msg.data;

      process.env["COMMANDS"] = JSON.stringify(commands);
      if (commandToRun === "start") {
        run(commandToRun);
      } else {
        beginCreations(commandToRun);
      }
      break;

    default:
      process.send({ event: "unknown", data: msg });
      break;
  }
});
