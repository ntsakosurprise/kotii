import dotenv from "dotenv";
class Env {
  constructor(pao) {
    this.pao = pao;
    this.KOTTI_ENV_REGEX = /^KOTII_APP_/i;
  }
  init() {
    this.listens({
      "get-env-variables": this.handleEnvironmentVariables.bind(this),
    });
  }
  handleEnvironmentVariables(data) {
    const self = this;
    self.logSync("Getting Environment Variables");
    self.logSync(data);
    self.callback = data.callback;
    let message = "Environement variables check done";
    const { envPath = "" } = data;
    self
      .getEnvFiles(envPath)
      .then(() => {
        // self.debug("the saved;;;");
        let kotiiEnvs = {};
        let kotiiEnvsStringified = {};

        let filteredKotiiVariables = Object.keys(process.env).filter(
          (envID) => {
            if (self.KOTTI_ENV_REGEX.test(envID)) return true;
          }
        );
        if (filteredKotiiVariables.length > 0) {
          filteredKotiiVariables.forEach((variable) => {
            kotiiEnvs[variable] = process.env[variable];
            kotiiEnvsStringified[variable] = JSON.stringify(
              process.env[variable]
            );
          });
        }

        return self.callback({
          message: message,
          raw: Object.keys(kotiiEnvs).length > 0 ? kotiiEnvs : null,
          stringified:
            Object.keys(kotiiEnvs).length > 0 ? kotiiEnvsStringified : null,
          // "process.env": kotiiEnvs,
        });
      })
      .catch((err) => {
        self.debug("savedError;;;", err);
        return self.callback({ message: message, saved: err });
      });
    //return self.callback(null,{message: message})
  }
  getEnvFiles(envFilesPath) {
    const self = this;
    return new Promise((resolve, reject) => {
      if (envFilesPath) {
        resolve(true);
        dotenv.config({ path: envFilesPath });
      } else {
        resolve(true);
      }

      // self
      //   .doImport(envFilesPath, true)
      //   .then((envFileContent) => {
      //     resolve(envFileContent);
      //   })
      //   .catch((e) => {
      //     self.debug("there was an error get env file", e);
      //     reject(e);
      //   });
    });
  }
  loadEnvVariables(evnFile) {
    const self = this;
    let pao = self.pao;
    self.debug("THE TYPE OF E IN DATAREQUEST HANDLER", e);

    if (e) reject(new Error("An error has occured Inside MYSQL"));
    resolve(result);
  }
  doImport(toImport, all = false) {
    const self = this;
    const pao = self.pao;
    const loadFile = pao.pa_loadFile;
    const loadFileSync = pao.pa_loadFileSync;
    // self.debug("TIIMPORT", toImport);
    return new Promise((resolve, reject) => {
      // const manifestFile = loadFileSync(toImport);
      // resolve({ module: imported.meta });
      loadFile(toImport, all)
        .then((imported) => {
          self.debug("Module has successfully been imported:", imported);
          resolve(imported);
        })
        .catch((err) => {
          self.debug(
            `importing module:${toImport}, has failed with an error:${err}`
          );
          reject(err);
        });
    });
  }
}
export default Env;
