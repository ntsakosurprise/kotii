// import { anzii } from "anzii";
// import plugins from "@kotii/_internal/land";

// import("/kotii-user-api/plugins").then((imported) => {
//   console.log("THE IMPORTED USER PLUGINS", imported);
//   let userPlugins = imported.default;
//   console.log("USER PLUGINS", userPlugins);
//   if (userPlugins?.noApi && Object.keys(userPlugins).length === 1) {
//     console.log("API PLUGINS NO API");
//     anzii(plugins);
//   } else {
//     let pluginsCombined = { ...userPlugins, ...plugins };
//     console.log("API PLUGINS COMBINED", pluginsCombined);
//     anzii(pluginsCombined);
//   }
// });

import { anzii } from "anzii";
import plugins from "kotii-runtime/plugins";
import { USER_LAND_ALIAS_PLUGINS } from "kotii-internal/user";

import(`${USER_LAND_ALIAS_PLUGINS}`).then((imported) => {
  let userPlugins = imported.default;

  if (userPlugins?.noApi && Object.keys(userPlugins).length === 1) {
    anzii(plugins);
  } else {
    let pluginsCombined = { ...userPlugins, ...plugins };
    anzii(pluginsCombined);
  }
});
