import { anzii } from "anzii";
import { spawn } from "child_process";
import { loggas } from "kotii-logger";
import plugins from "../../plugins/index.js";

process.on("beforeExit", () => {
  loggas.startUp.log("THE PROCESS IS ABOUT TO EXIST");
});

process.on("exit", function () {
  if (process.env.CUSTOM_RESTART && process.env.CUSTOM_RESTART === "true") {
    process.env.ANZII_OPEN_BROWSER = "false";
    spawn(process.argv.shift(), process.argv, {
      cwd: process.cwd(),
      detached: true,
      stdio: "inherit",
    });
  }
});
import("/kotii-user-api/plugins").then((imported) => {
  let userPlugins = imported.default;

  if (userPlugins?.noApi && Object.keys(userPlugins).length === 1) {
    anzii(plugins);
  } else {
    let pluginsCombined = { ...userPlugins, ...plugins };
    anzii(pluginsCombined);
  }
});
