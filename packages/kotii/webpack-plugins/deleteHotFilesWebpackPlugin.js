import fs from "fs";
import { globSync } from "glob";

class deleteFilesWebpackPlugin {
  deleteFolder = null;
  logger = null;

  constructor(options = null, loggas) {
    this.loggas = loggas;
    loggas.deleteFilesWebpackPlugin.debug("DELETE HOT FILES OPTIONS", options);
    this.deleteFolder = options.deleteFolder;
  }

  apply(compiler) {
    compiler.hooks.beforeCompile.tap("DeleteFilesWebpackPlugin", () => {
      this.loggas.deleteFilesWebpackPlugin.debug(
        "deleteFilesWebpackPlugin:: FILES TO WATCH"
      );

      const filesToGet = globSync(
        `${this.deleteFolder}/**/*.{js,jsx,ts,tsx,json}`
      );
      this.loggas.deleteFilesWebpackPlugin.debug(
        "PLUGIN:: DELETE PLUGIN",
        filesToGet
      );
      let deleteList = filesToGet.filter((filePath) => {
        if (filePath.indexOf(".hot-update") >= 0) return true;
      });
      deleteList.forEach((pathToDelete) => {
        this.loggas.deleteFilesWebpackPlugin.debug(
          "CURRENTLY DELETING FILE",
          pathToDelete
        );
        fs.unlinkSync(pathToDelete);
      });
      this.loggas.deleteFilesWebpackPlugin.debug("THE DELETE LIST", deleteList);
    });
  }
}

export default deleteFilesWebpackPlugin;
