import dotenv from "dotenv";
import path from "path";
import fs from "fs";

export const getAndSetEnvironmentVariables = (environment = "development") => {
  setEnvironmentForFramework(environment);
  setEnvironmentForUser(environment);
};

const setEnvironmentForFramework = (environment) => {
  process.argv.push("cli");
  process.env.ANZII_CLI_WITH_SERVER = "true";
  process.env.ANZII_SHOW_CLI_LOGS = "true";

  if (environment === "development") {
    process.env.ANZII_OPEN_BROWSER = process.env?.CUSTOM_RESTART
      ? "false"
      : "true";
  }
};

const setEnvironmentForUser = (environment) => {
  const workdir = process.cwd();
  const envFilePath = path.resolve(workdir, `.env.${environment}`);

  if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath });
  }
};

export default getAndSetEnvironmentVariables;
