import { anzii } from "anzii";
import plugins from "../../plugins/index.js";

import("/kotii-user-api/plugins").then((imported) => {
  let userPlugins = imported.default;

  if (userPlugins?.noApi && Object.keys(userPlugins).length === 1) {
    anzii(plugins);
  } else {
    let pluginsCombined = { ...userPlugins, ...plugins };
    anzii(pluginsCombined);
  }
});
