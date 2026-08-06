// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const rootPath = new URL(".", import.meta.url).pathname;
console.log("THE ROOT PATH INTERNAL", rootPath);
// const rootPath = path.join(__dirname);
// const kotiiInternal = path.join(rootPath, "dist");
// const kotiiInternalCss = path.join(rootPath, "css");
// const kotiiInternalAssets = path.join(rootPath, "assets");
//let STYLED_COMPONENTS_MANIFEST_PATH = path.join(process.cwd(), '.kotii-cache', 'styled-components-manifest.json');
const kotiiInternal = `${rootPath}dist`;
const kotiiInternalCss = `${rootPath}css`;
const kotiiInternalAssets = `${rootPath}assets`;
const kotiiInternalStyled = `${rootPath}cache`;
console.log(
  "THE ROOT PATH INTERNAL:",
  kotiiInternal,
  kotiiInternalCss,
  kotiiInternalAssets,
  kotiiInternalStyled
);
export {
  kotiiInternal,
  rootPath,
  kotiiInternalCss,
  kotiiInternalAssets,
  kotiiInternalStyled,
};
