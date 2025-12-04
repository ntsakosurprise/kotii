const { register } = require("node:module");
const { pathToFileURL } = require("node:url");
const { getAndSetEnvironmentVariables } = require("./preloads.cjs");

const parentURL = pathToFileURL(__filename);
export default () => {
  register("./compile/hooks.js", parentURL);
  getAndSetEnvironmentVariables(
    process.env.NODE_ENV
      ? process.env.NODE_ENV != "development"
        ? "development"
        : process.env.NODE_ENV
      : "development"
  );
  import("./kotii-land/dev/app.js");
};
