#!/usr/bin/env node
// import babelRigister from "babel-register";
// console.log("THE BABEL REGISTER", babelRigister);
// babelRigister({
//   presets: ["es2015", "react"],
// });

import an from "../../../Development/frameworks/anzii/lib/start.js";
import plugins from "./plugins/index.js";
process.argv.push("cli");
an(plugins);
