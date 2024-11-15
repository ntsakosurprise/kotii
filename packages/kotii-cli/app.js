#!/usr/bin/env node --no-warnings
process.argv.push("cli");
// const process= require('process');
// process.removeAllListeners("warning");
// process.addListener("warning");
process.env.SUPPRESS_NO_CONFIG_WARNING = "false";
process.env.ANZII_CLI_WITH_SERVER = "true";
process.env.ANZII_SHOW_CLI_LOGS = "true";
process.env.ANZII_OPEN_BROWSER = process.env?.CUSTOM_RESTART ? "false" : "true";
process.env.DEBUG = "anzii:*";
process.env.ANZII_SHOW_DEBUG_LOGS = "true";
process.env.ANZII_SHOW_WILD_LOGS = "true";
const plugins = require("./plugins/index");
// const { anzii } = require("anzii");
const { anzii } = require("anzii");

const { Template } = require("kotii-templates");
// console.log("THE AN", plugins);
// console.log(Template);
anzii({ ...plugins, Template });
//require("anzii")(plugins);
// console.log(anzii)
