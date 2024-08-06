import plugins from "../../plugins/index.js";
import { anzii } from "/Users/surprisemashele/Documents/Development/frameworks/anzii/packages/anzii/lib/start.js";
process.argv.push("cli");
process.env.ANZII_CLI_WITH_SERVER = "true";
process.env.ANZII_SHOW_CLI_LOGS = "true";
process.env.ANZII_OPEN_BROWSER = "true";
process.env.DEBUG = "anzii:*";
process.env.ANZII_SHOW_DEBUG_LOGS = "true";
process.env.ANZII_SHOW_WILD_LOGS = "true";
console.log("ANZII APP ESM", process.env);
process.on("beforeExit", () => {
  console.log("THE PROCESS IS ABOUT TO EXIST");
});
process.on("exit", () => {
  console.log("THE PROCESS HAS EXITED", anzii);
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
