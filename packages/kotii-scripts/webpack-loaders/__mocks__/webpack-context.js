import fs from "fs";
import { kotiiRootPath } from "../../kotii_paths.js";
export default {
  getOptions: function () {
    return this.options;
  },
  async: function () {
    return (err, content) => {
      return new Promise((resolve, reject) => {
        resolve(content);
      });
    };
  },
  emitFile: function (fileName, content) {
    fs.writeFileSync(`${kotiiRootPath}/${fileName}`, content);
  },
  _module: {
    resourceResolveData: {
      relativePath: "./sync-styles-test.css",
    },
  },
};
