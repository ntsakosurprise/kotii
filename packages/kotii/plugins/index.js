//import { createRequire } from "node:module";
// import Bitbucket from "./bitbucket/index.js";
import Build from "./buildsc/index.js";
import Cachr from "./cachr/index.js";
import KotiiCatchAll from "./catch-all/catch-all.js";
import Config from "./config/index.js";
// import Configstorer from "./configstore/index.js";
import ContextApp from "./contextapp/index.js";
import Dev from "./dev/index.js";
// import DevServer from "./devserver/index.js";
import Env from "./env/env.js";
import FileRouter from "./filerouter/index.js";
// import Gitauth from "./gitauth/index.js";
// import Github from "./github/index.js";
import Hello from "./hello/hello.js";
import Init from "./init/index.js";
import Interpreter from "./interpreter/index.js";
// import JsxToReact from "./jsxtoreact/index.js";
// import ReactVeiwPruned from "./react-pruned/index.js";
import Markdownr from "./markdownr/index.js";
import ReactView from "./react/reactview.js";
// import ReactToJsx from "./reacttojsx/index.js";
import Scaffold from "./scaffold/index.js";
import ScriptsUtils from "./scripts-util/scripts-util.js";
import ServerBuild from "./server-build/index.js";
import ServerSentEvents from "./server-sent-events/index.js";
import Ssg from "./ssg/index.js";
import Start from "./start/index.js";
import Static from "./static/index.js";
import Watchr from "./watchr/index.js";
import WebpackConfig from "./wbpconfig/index.js";
import ViewGuard from "./view-guard/index.js";

// const require = createRequire(import.meta.url);
// const ReactView = require("./react/index.cjs");
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
  Scaffold,
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
  Scaffold,

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
