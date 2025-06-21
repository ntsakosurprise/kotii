import less from "less";
import fs from "node:fs";

export default (lessFile, lessFileName) => {
  console.log("LESS FILE.NAME",lessFile,lessFileName)
  return new Promise((resolve) => {
    less
      .render(fs.readFileSync(lessFile, { encoding: "utf8" }), {
        filename: lessFileName,
        compress: false,
      })
      .then((output) => {
        console.log("LESS OUTPU RESULT", output);
        resolve(output.css);
      });
  });
};
