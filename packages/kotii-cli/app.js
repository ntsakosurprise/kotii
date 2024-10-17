#!/usr/bin/env node --no-warnings
process.argv.push("cli");
// const process= require('process');
// process.removeAllListeners("warning");
// process.addListener("warning");
process.env.SUPPRESS_NO_CONFIG_WARNING = "false";
const plugins = require("./plugins/index");
// const { anzii } = require("anzii");
const { anzii } = require("anzii");

const { Template } = require("kotii-templates");
// console.log("THE AN", plugins);
// console.log(Template);
anzii({ ...plugins, Template });
//require("anzii")(plugins);
// console.log(anzii)
