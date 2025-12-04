import { register } from "node:module";
// import path from "path";
import { pathToFileURL, fileURLToPath } from "node:url";
import { getAndSetEnvironmentVariables } from "./preloads.js";
const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

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
