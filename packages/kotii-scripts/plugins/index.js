//import { createRequire } from "node:module";
import Bitbucket from "./bitbucket/index.js";
import Build from "./buildsc/index.js";
import Cachr from "./cachr/index.js";
import Config from "./config/index.js";
import Configstorer from "./configstore/index.js";
import ContextApp from "./contextapp/index.js";
import Dev from "./dev/index.js";
import DevServer from "./devserver/index.js";
import Env from "./env/env.js";
import FileRouter from "./filerouter/index.js";
import Gitauth from "./gitauth/index.js";
import Github from "./github/index.js";
import Hello from "./hello/hello.js";
import Init from "./init/index.js";
import Interpreter from "./interpreter/index.js";
import JsxToReact from "./jsxtoreact/index.js";
// import ReactVeiwPruned from "./react-pruned/index.js";
import ReactView from "./react/reactview.js";
import ReactToJsx from "./reacttojsx/index.js";
import Scaffold from "./scaffold/index.js";
import ServerBuild from "./server-build/index.js";
import Ssg from "./ssg/index.js";
import Start from "./start/index.js";
import Static from "./static/index.js";
import Watchr from "./watchr/index.js";
import WebpackConfig from "./wbpconfig/index.js";

// const require = createRequire(import.meta.url);
// const ReactView = require("./react/index.cjs");
export { Interpreter };
export { Scaffold };
export { Gitauth };
export { Github };
export { Bitbucket };
export { Configstorer };
export { Start };
export { Config };
export { Build };
export { Init };
export { WebpackConfig };
export { DevServer };
export { ContextApp };
export { FileRouter };
export { ServerBuild };
export { Static };
export { Env };
export { Dev };
export default {
  Interpreter,
  Scaffold,
  Gitauth,
  Github,
  Bitbucket,
  Configstorer,
  Start,
  Config,
  Build,
  Init,
  WebpackConfig,
  DevServer,
  ContextApp,
  FileRouter,
  ReactToJsx,
  JsxToReact,
  Cachr,
  Watchr,
  Hello,
  ReactView,
  Ssg,
  Env,
  ServerBuild,
  Static,
  Dev,
};
