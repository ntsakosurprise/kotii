import fs from "fs";
import { resolve } from "path";
// let cwd = process.cwd();
const scopedStylesBabelPlugin = (babel, state) => {
  return {
    visitor: {
      ImportDeclaration(path) {
        // console.log("SCOPED-STYLES-PLUGIN", path.node.source.value);
        // console.log("SCOPED-STYLES-PLUGIN SPECIFIER", path.node.specifiers);
        // if (path.node.specifiers.length === 0) {
        //   console.log("SCOPED-STYLES-PLUGIN SPECIFIER", path);
        //   path.node.source.specifiers = ["Less"];
        //   return;
        // }

        if (
          path.node.source.value.indexOf(".less") > 0 &&
          path.node.specifiers.length === 0
        ) {
          let sourceValue = path.node.source.value;

          manipulateStyles({
            pathToStyles: resolve(`${state.appSrc}/styles`, sourceValue),
            cwd: state.cwd,
          });
          return path.remove();
        }

        if (
          path.node.source.value.indexOf(".scss") > 0 ||
          path.node.source.value.indexOf(".sass") > 0 ||
          path.node.source.value.indexOf(".css") > 0 ||
          (path.node.source.value.indexOf(".styl") > 0 &&
            path.node.specifiers.length === 0)
        ) {
          let sourceValue = path.node.source.value;

          if (path.node.source.value.indexOf(".styl") > 0) {
            manipulateStyles({
              pathToStyles: resolve(`${state.appSrc}/src/styles`, sourceValue),
              cwd: state.cwd,
            });
          } else {
            manipulateStyles({
              pathToStyles: resolve(`${state.appSrc}/styles`, sourceValue),
              cwd: state.cwd,
            });
          }

          return path.remove();
        }
      },
    },
  };
};

const manipulateStyles = ({ pathToStyles, cwd } = args) => {
  console.log("MANIPULATE STYLES, PATH TO STYLES", pathToStyles);
  let styles = getStyles(pathToStyles);
  let json = null;
  if (fs.existsSync(`${cwd}/kotii-land/dev/styles.json`)) {
    json = fs.readFileSync(`${cwd}/kotii-land/dev/styles.json`, {
      encoding: "utf8",
    });
  }

  let newJson = !json ? json : JSON.parse(json);
  if (!newJson || newJson.length === 0) {
    newJson = [
      `<style data-custom-style='mystyle'>${styles.replace(
        /(\r\n|\n|\r)/gm,
        ""
      )}</style>`,
    ];
  } else {
    newJson.push(
      `<style data-custom-style='mystyle'>${styles.replace(
        /(\r\n|\n|\r)/gm,
        ""
      )}</style>`
    );
  }
  fs.writeFileSync(
    `${process.cwd()}/kotii-land/dev/styles.json`,
    JSON.stringify(newJson),
    {
      encoding: "utf8",
    }
  );
};

const getStyles = (pathToStyles) => {
  console.log("THE PATH TO STYLES", pathToStyles);
  let styles = fs.readFileSync(pathToStyles, {
    encoding: "utf8",
  });
  return styles;
};

export default scopedStylesBabelPlugin;
