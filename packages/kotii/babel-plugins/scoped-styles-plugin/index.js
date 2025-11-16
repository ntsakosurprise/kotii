import fs from "fs";
import nativePath from "path";
let assetsManifestData = null;
// let cwd = process.cwd();
const scopedStylesBabelPlugin = (babel, state) => {
  if (!assetsManifestData) getStylesMap(state.cwd);
  console.log("THE SCOOPE STATE", state, Object.keys(assetsManifestData));

  return {
    visitor: {
      ImportDeclaration(path) {
        let importSpecifier = path.node.source.value;
        if (
          importSpecifier.indexOf(".scss") > 0 ||
          importSpecifier.indexOf(".sass") > 0 ||
          importSpecifier.indexOf(".css") > 0 ||
          importSpecifier.indexOf(".less") > 0 ||
          importSpecifier.indexOf(".styl") > 0
        ) {
          if (path.node.specifiers.length <= 0) {
            return path.remove();
          } else {
            console.log("SCOOPED THE SPECIFIER", importSpecifier);
            let fullPath = assetsManifestData[importSpecifier].fullPath;
            let absoluteFilePath = fullPath.replace(
              state.appSrc,
              `${state.appBuildFolder}/src`
            );

            console.log("THE STATE", state.appSrc);
            console.log("Scoped absolute path", absoluteFilePath);

            console.log("New URL SCOOPED PLUGING", absoluteFilePath);
            let extension = nativePath.extname(importSpecifier);
            let cssModuleDataExport = `export default ${JSON.stringify(
              assetsManifestData[importSpecifier].modules
            )}`;
            console.log(
              "cssModulesData export",
              cssModuleDataExport,
              absoluteFilePath,
              extension
            );
            fs.writeFileSync(
              absoluteFilePath.replace(extension, ".js"),
              cssModuleDataExport
            );
            path.node.source.value = importSpecifier.replace(extension, ".js");
          }
        }
        // console.log("SCOPED-STYLES-PLUGIN", path.node.source.value);
        // console.log("SCOPED-STYLES-PLUGIN SPECIFIER", path.node.specifiers);
        // if (path.node.specifiers.length === 0) {
        //   console.log("SCOPED-STYLES-PLUGIN SPECIFIER", path);
        //   path.node.source.specifiers = ["Less"];
        //   return;
        // }

        // if (
        //   path.node.source.value.indexOf(".less") > 0 &&
        //   path.node.specifiers.length === 0
        // ) {
        //   let sourceValue = path.node.source.value;

        //   // manipulateStyles({
        //   //   pathToStyles: resolve(`${state.appSrc}/styles`, sourceValue),
        //   //   cwd: state.cwd,
        //   // });
        //   return path.remove();
        // }

        // let sourceValue = path.node.source.value;

        // if (path.node.source.value.indexOf(".styl") > 0) {
        //   manipulateStyles({
        //     pathToStyles: resolve(`${state.appSrc}/src/styles`, sourceValue),
        //     cwd: state.cwd,
        //   });
        // } else {
        //   manipulateStyles({
        //     pathToStyles: resolve(`${state.appSrc}/styles`, sourceValue),
        //     cwd: state.cwd,
        //   });
        // }
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

const getStylesMap = (kotiiAppPath) => {
  let assetsPath = `${kotiiAppPath}/kotii-land/dev/styles-css-modules.json`;

  if (fs.existsSync(assetsPath)) {
    assetsManifestData = JSON.parse(
      fs.readFileSync(assetsPath, {
        encoding: "utf8",
      })
    );
  }
};

export default scopedStylesBabelPlugin;
