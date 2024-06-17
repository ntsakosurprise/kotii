#!/usr/bin/env node

import { anzii } from "anzii";
import plugins from "./plugins/index.js";
process.argv.push("cli");
process.env.ANZII_CLI_WITH_SERVER = "false";
// console.log("ANZII APP ESM", process.env);
process.on("beforeExit", () => {
  console.log("THE PROCESS IS ABOUT TO EXIST");
});
process.on("exit", () => {
  console.log("THE PROCESS HAS EXITED", anzii);
});
anzii(plugins);
