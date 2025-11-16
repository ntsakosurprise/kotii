import fs from "node:fs";
import stylus from "stylus";

export default (stylusFile, stylusFileName) => {
  return new Promise((resolve) => {
    stylus.render(
      fs.readFileSync(stylusFile, { encoding: "utf8" }),
      {
        filename: stylusFileName,
      },
      (err, output) => {
        if (err) {
          throw new Error(err);
        }
        resolve(output);
      }
    );
  });
};
