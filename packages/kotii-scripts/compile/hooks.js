import babel from "@babel/core";
import fs from "fs";
import path from "path";
let whiteListedUrls = [
  "file:///Users/surprisemashele/Documents/kotii/packages/kotii-scripts/plugins/react/methods.js",
  "file:///Users/surprisemashele/Documents/kotii/packages/kotii-scripts/build.js",
  "file:///Users/surprisemashele/Documents/kotii/packages/kotii-scripts/public.js",
  "file:///Users/surprisemashele/Documents/kotii/packages/kotii-scripts/app_.js",
];
const styledComponentsUrl =
  "file:///Users/surprisemashele/Documents/kotii/node_modules/styled-components/dist/styled-components.cjs.js";
const styledComponentsUrlFromClient =
  "file:///Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/node_modules/styled-components/dist/styled-components.cjs.js";
const styledComponentESMUrm =
  "file:///Users/surprisemashele/Documents/kotii/node_modules/styled-components/dist/styled-components.esm.js";
// let pagesURL =
//   "file:///Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/";
let extJsx = ".jsx";
let extSvg = ".svg";
export async function load(url, context, nextLoad) {
  // Take a resolved URL and return the source code to be evaluated.
  const { format } = context;
  const fileExtension = path.extname(url);
  const fileName = path.basename(url);
  console.log("LOAD HOOK FORMAT", format);
  console.log("LOAD HOOK FORMAT URL", url);
  console.log("LOAD EXTENSION NAME", fileExtension);
  if (
    format === "commonjs" &&
    (url === styledComponentsUrl || url === styledComponentsUrlFromClient)
  ) {
    let cutCode = fs.readFileSync(new URL(styledComponentESMUrm).pathname, {
      encoding: "utf-8",
    });
    console.log("THE CUTCODE", cutCode);
    return {
      format: "module",
      shortCircuit: true,
      source: cutCode,
    };
  }

  if (
    whiteListedUrls.indexOf(url) >= 0 ||
    fileExtension === extJsx ||
    fileExtension === extSvg
  ) {
    console.log("JSX METHODS FILE", url);
    console.log("THE CONTEXT", context);
    let options = {};
    let source = null;
    if (fileExtension === extJsx) {
      console.log("PROCESSING FOR JSX EXTENSION");
      options.presets = ["@babel/preset-react"];
      source = fs.readFileSync(new URL(url).pathname, { encoding: "utf-8" });
      console.log("The Resulting Source", source);
    } else if (fileExtension === extSvg) {
      console.log("PROCESSING THE SVG EXTENSION", extSvg, fileName);
      options.presets = ["@babel/preset-react"];
      options.plugins = [["inline-react-svg", { filename: fileName }]];
      source = fs.readFileSync(new URL(url).pathname, { encoding: "utf-8" });
    } else {
      console.log("PROCESSING JSX WITHOUT EXTENSION");
      options.presets = ["@babel/preset-react"];
      source = await nextLoad(url, { ...context, format });
    }

    console.log("THE RAW SOURCE", source);
    let rawSource = typeof source === "string" ? source : source.source;

    // options.presets = ["@babel/preset-react"];
    // options.plugins = ["@svgr/babel-plugin-transform-svg-component"];

    console.log("THE FILE NAME", options);
    const result = babel.transform(rawSource, options);
    console.log("THE RAW SOURCE", rawSource);
    console.log("THE RESULT BABEL TRANSFORM", result.code);

    return {
      format: format
        ? format === "commonjs" && fileName !== extSvg
          ? "module"
          : format
        : "module",
      shortCircuit: true,
      source: result.code,
    };
  }
  //   console.log("LOAD", url);
  // console.log("LOAD url", url);
  // console.log("LOAD context", context);
  //console.log("LOAD nextResolve", nextLoad);
  return nextLoad(url);
}

// let imports = {};
export async function resolve(specifier, context, nextResolve) {
  const { parentURL = null } = context;
  console.log("RESOLVE specifier", specifier);
  console.log("RESOLVE context", context);
  console.log("RESOLVE nextResolve", nextResolve);
  const { parentUrl } = context;
  return nextResolve(specifier);
  // Take an `import` or `require` specifier and resolve it to a URL.
}
