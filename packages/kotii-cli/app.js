#!/usr/bin/env node
process.argv.push("cli");
const plugins = require("./plugins/index");
const { anzii } = require("anzii");
console.log("THE AN", anzii);
anzii(plugins);
//require("anzii")(plugins);
// console.log(anzii)
