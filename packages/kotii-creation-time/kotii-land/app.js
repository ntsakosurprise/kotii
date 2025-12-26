import { anzii } from "anzii";
import plugins from "kotii-creation-time/plugins";
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
