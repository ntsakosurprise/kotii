#!/usr/bin/env node
// import babelRigister from "babel-register";
// console.log("THE BABEL REGISTER", babelRigister);
// babelRigister({
//   presets: ["es2015", "react"],
// });

import an from "../../../Development/frameworks/anzii/lib/start.js";
import plugins from "./plugins/index.js";
// import Test from "./test.js";
// console.log("Test", Test);
process.argv.push("cli");
process.env.ANZII_CLI_WITH_SERVER = "true";
process.on("beforeExit", () => {
  console.log("THE PROCESS IS ABOUT TO EXIST");
});
process.on("exit", () => {
  console.log("THE PROCESS HAS EXITED");
});
an(plugins);
