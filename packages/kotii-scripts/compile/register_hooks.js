const { register } = require("node:module");
const { pathToFileURL } = require("node:url");

register("./hooks.js", pathToFileURL(__filename));
