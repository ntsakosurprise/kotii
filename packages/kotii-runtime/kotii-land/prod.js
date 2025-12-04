import { anzii } from "anzii";
import plugins from "../plugins/index.js";
// process.env.DEBUG = "anzii:*";
// process.env.ANZII_SHOW_DEBUG_LOGS = "true";

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

// anzii(plugins);
