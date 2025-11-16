import less from "less";
import fs from "node:fs";

export default (lessFile, lessFileName) => {
  return new Promise((resolve) => {
    less
      .render(fs.readFileSync(lessFile, { encoding: "utf8" }), {
        filename: lessFileName,
        compress: false,
      })
      .then((output) => {
        resolve(output.css);
      });
  });
};
