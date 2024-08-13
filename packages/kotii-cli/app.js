#!/usr/bin/env node --no-warnings
process.argv.push("cli");
// const process= require('process');
// process.removeAllListeners("warning");
// process.addListener("warning");
process.env.SUPPRESS_NO_CONFIG_WARNING = "false";
const plugins = require("./plugins/index");
// const { anzii } = require("anzii");
const {
  anzii,
} = require("/Users/surprisemashele/Documents/Development/frameworks/anzii/packages/anzii/dist/index.cjs");

const {
  Template,
} = require("/Users/surprisemashele/Documents/kotii/packages/kotii-templates/dist/index.cjs");
// console.log("THE AN", plugins);
// console.log(Template);
anzii({ ...plugins, Template });
//require("anzii")(plugins);
// console.log(anzii)
