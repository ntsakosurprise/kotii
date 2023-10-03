#!/usr/bin/env node
process.argv.push("cli");
const plugins = require("./plugins/index");
require("anzii")(plugins);
// console.log(anzii)
