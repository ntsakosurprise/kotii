#!/usr/bin/env node

const { register } = require("node:module");
const { pathToFileURL } = require("node:url");
const { getAndSetEnvironmentVariables } = require("./preloads.cjs");
const { removeStylesJson } = require("./globals.cjs");

const parentURL = pathToFileURL(__filename);
const cli = require("./cli.cjs");
const { parseScriptArguments } = cli;

const commandToRun = parseScriptArguments()[0];

if (commandToRun === "start") {
  process.env.ANZII_KICK_OFF_MANUALLY = "true";
  process.env.NODE_ENV = "production";
  register("./compile/hooks_prod.js", parentURL);
  getAndSetEnvironmentVariables(process.env.NODE_ENV);

  import("./kotii-land/prod/app_prod.js");
} else {
  // removeStylesJson();
  register("./compile/hooks_.js", parentURL);
  getAndSetEnvironmentVariables(
    process.env.NODE_ENV
      ? process.env.NODE_ENV != "development"
        ? "development"
        : process.env.NODE_ENV
      : "development"
  );
  import("./kotii-land/dev/app.js");
}
