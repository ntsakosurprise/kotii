#!/usr/bin/env node
process.argv.push("cli");
const plugins = require("./plugins/index");
const an = require("anzii");
console.log("THE AN", an.default);
an.default(plugins);
//require("anzii")(plugins);
// console.log(anzii)
