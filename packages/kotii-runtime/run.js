import { register } from "node:module";
// import path from "path";
import { pathToFileURL, fileURLToPath } from "node:url";
import { getAndSetEnvironmentVariables } from "./preloads.js";
const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const parentURL = pathToFileURL(__filename);
export default () => {
  process.env.ANZII_KICK_OFF_MANUALLY = "true";
  process.env.NODE_ENV = "production";
  register("./compile/hooks.js", parentURL);
  getAndSetEnvironmentVariables(process.env.NODE_ENV);
  import("./kotii-land/prod.js");
};
