#!/usr/bin/env node
// import babelRigister from "babel-register";
// console.log("THE BABEL REGISTER", babelRigister);
// babelRigister({
//   presets: ["es2015", "react"],
// });

import { anzii } from "anzii";
import plugins from "./plugins/index.js";
// import Test from "./test.js";
// console.log("Test", Test);
process.argv.push("cli");
process.env.ANZII_CLI_WITH_SERVER = "true";
console.log("ANZII APP ESM", anzii);
process.on("beforeExit", () => {
  console.log("THE PROCESS IS ABOUT TO EXIST");
});
process.on("exit", () => {
  console.log("THE PROCESS HAS EXITED", anzii);
});
anzii(plugins);
