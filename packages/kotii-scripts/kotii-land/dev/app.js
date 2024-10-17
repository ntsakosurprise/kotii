import { anzii } from "anzii";
import { spawn } from "child_process";
import plugins from "../../plugins/index.js";
console.log("PROCESS BEFORE", process.env);
process.argv.push("cli");

process.env.ANZII_CLI_WITH_SERVER = "true";
process.env.ANZII_SHOW_CLI_LOGS = "true";
process.env.ANZII_OPEN_BROWSER = process.env?.CUSTOM_RESTART ? "false" : "true";
process.env.DEBUG = "anzii:*";
process.env.ANZII_SHOW_DEBUG_LOGS = "true";
process.env.ANZII_SHOW_WILD_LOGS = "true";
console.log("CUSTOM RESTART", process.env?.CUSTOM_RESTART);
console.log(
  "CUSTOM RESTART WITH",
  process.env?.CUSTOM_RESTART ? "false" : "true"
);
console.log(
  "CUSTOM RESTART EQUAL",
  process.env?.CUSTOM_RESTART === "true" ? "false" : "true"
);
console.log("ANZII APP ESM", process.env);
process.on("beforeExit", () => {
  console.log("THE PROCESS IS ABOUT TO EXIST");
});
// process.on("exit", () => {
//   console.log("THE PROCESS HAS EXITED", anzii);

// });
process.on("exit", function () {
  console.log("PROCESS.ARGV", process.argv);
  console.log(
    "PROCESS ENV",
    process.env.ANZII_OPEN_BROWSER,
    process.env.CUSTOM_RESTART
  );
  if (process.env.CUSTOM_RESTART && process.env.CUSTOM_RESTART === "true") {
    console.log("CUSTOM RESTART");
    process.env.ANZII_OPEN_BROWSER = "false";
    spawn(process.argv.shift(), process.argv, {
      cwd: process.cwd(),
      detached: true,
      stdio: "inherit",
    });
  }
});
import("/kotii-user-api/plugins").then((imported) => {
  console.log("THE IMPORTED USER PLUGINS", imported);
  let userPlugins = imported.default;
  console.log("USER PLUGINS", userPlugins);
  if (userPlugins?.noApi && Object.keys(userPlugins).length === 1) {
    console.log("API PLUGINS NO API");
    anzii(plugins);
  } else {
    let pluginsCombined = { ...userPlugins, ...plugins };
    console.log("API PLUGINS COMBINED", pluginsCombined);
    anzii(pluginsCombined);
  }
});
