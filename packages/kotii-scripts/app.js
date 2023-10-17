#!/usr/bin/env node
process.argv.push("cli");
process.env.ANZII_CLI_WITH_SERVER = "true";
const plugins = require("./plugins/index");
const an = require("../../../Development/frameworks/anzii/lib/index");
an(plugins);
// require("anzii")(plugins);
// console.log(anzii)
