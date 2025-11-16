const { register } = require("node:module");
const { pathToFileURL } = require("node:url");

register("./hooks_.js", pathToFileURL(__filename));

// import { register } from "node:module";
// import { pathToFileURL } from "node:url";

// register("./compile/hooks.js", pathToFileURL("./"));
