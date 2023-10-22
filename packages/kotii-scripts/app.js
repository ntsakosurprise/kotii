#!/usr/bin/env node
process.argv.push("cli");

const plugins = require("./plugins/index");
import an from "../../../Development/frameworks/anzii/lib/index";
an(plugins);
// require("anzii")(plugins);
// console.log(anzii)
