import { anzii } from "anzii";
import plugins from "../../plugins/index_pruned.js";
process.env.DEBUG = "anzii:*";
process.env.ANZII_SHOW_DEBUG_LOGS = "true";

anzii(plugins);
