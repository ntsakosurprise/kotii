import { register } from "node:module";
// import path from "path";
import { pathToFileURL, fileURLToPath } from "node:url";
import { getAndSetEnvironmentVariables } from "./preloads.js";
const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const parentURL = pathToFileURL(__filename);
export default (mode) => {
  process.env.KOTII_MODE = mode;
  let environment = "";
  // if(!environment){
  //   console.log("RUN ENV SET", environment)
  //   environment = "development"
  // }else{
  //   mode !== "dev" ? environment = "production" : environment = "development"
  // }
  mode !== "dev" ? (environment = "production") : (environment = "development");
  process.env.NODE_ENV = environment;
  console.log(
    "RUN ENVIRONMENT",
    environment,
    process.env.NODE_ENV,
    "THE MODE",
    process.env.KOTII_MODE
  );
  register("./compile/hooks.js", parentURL);

  getAndSetEnvironmentVariables(environment);
  import("./kotii-land/app.js");
};
