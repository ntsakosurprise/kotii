import Env from "@kotii/anzii-plugins-env";
import ReactView from "@kotii/anzii-plugins-react";
import Build from "./buildsc/index.js";
import Cachr from "./cachr/index.js";
import KotiiCatchAll from "./catch-all/catch-all.js";
import Config from "./config/index.js";
import ContextApp from "./contextapp/index.js";
import Dev from "./dev/index.js";
import FileRouter from "./filerouter/index.js";
import Hello from "./hello/hello.js";
import Init from "./init/index.js";
import Interpreter from "./interpreter/index.js";
import Markdownr from "./markdownr/index.js";
// import ReactView from "./react/reactview.js";

import ScriptsUtils from "./scripts-util/scripts-util.js";
import ServerBuild from "./server-build/index.js";
import ServerSentEvents from "./server-sent-events/index.js";
import Ssg from "./ssg/index.js";
import Start from "./start/index.js";
import Static from "./static/index.js";
import Watchr from "./watchr/index.js";
import WebpackConfig from "./wbpconfig/index.js";
import ViewGuard from "./view-guard/index.js";

export {
  Build,
  Config,
  ContextApp,
  Dev,
  Env,
  FileRouter,
  Init,
  Interpreter,
  KotiiCatchAll,
  Markdownr,
  // Scaffold,
  ScriptsUtils,
  ServerBuild,
  ServerSentEvents,
  Start,
  Static,
  WebpackConfig,
  ViewGuard,
};
export default {
  Interpreter,
  Start,
  Config,
  Build,
  Init,
  ScriptsUtils,
  WebpackConfig,
  ContextApp,
  FileRouter,
  Cachr,
  Watchr,
  Hello,
  ReactView,
  Ssg,
  Env,
  ServerBuild,
  Static,
  Dev,
  ServerSentEvents,
  KotiiCatchAll,
  Markdownr,
  ViewGuard,
};
