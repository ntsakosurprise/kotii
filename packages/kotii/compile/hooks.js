import babel from "@babel/core";
import fs from "fs";
import { pathToFileURL } from "node:url";
import path from "path";

let fileScheme = "file://";
let workdir = `${process.cwd()}`;
let sep = path.sep;

let whiteListedUrls = [
  `${pathToFileURL(`${workdir}${sep}plugins${sep}react${sep}methods.js`)}`,
  `${pathToFileURL(`${workdir}${sep}build.js`)}`,
  `${pathToFileURL(`${workdir}${sep}public.js`)}`,
  `${pathToFileURL(`${workdir}${sep}app_.js`)}`,
];
let customExtensionsRegex = /\.(png|css|jpg|jpeg|gif)$/;

/**
 *
 * sets node hook to intercept requests to styled-components by manually
 * reading the file content from disk and returning it to avoid styled
 * component function being undefiend
 */
// const styledComponentsUrl =
//   "file:///Users/surprisemashele/Documents/kotii/node_modules/styled-components/dist/styled-components.cjs.js";
// const styledComponentsUrlFromClient =
//   "file:///Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/node_modules/styled-components/dist/styled-components.cjs.js";
// // const styledComponentESMUrm =
// //   "file:///Users/surprisemashele/Documents/kotii/node_modules/styled-components/dist/styled-components.esm.js";
// const styledComponentESMUrm =
//   "file:///Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/node_modules/styled-components/dist/styled-components.esm.js";
// // let pagesURL =
// //   "file:///Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/";
// let styledUrl =
//   "file:///Users/surprisemashele/Documents/kotii/packages/kotii-scriptsnk/import_test.js";
let anziiPath =
  "file:///Users/surprisemashele/Documents/kotii/node_modules/anzii/lib/start.js";
let extJsx = ".jsx";
let extSvg = ".svg";
let imageExtensions = [".png", ".jpg", ".jpeg"];
export async function load(url, context, nextLoad) {
  // Take a resolved URL and return the source code to be evaluated.
  const { format, parentURL = "" } = context;
  // console.log(
  //   "FORMAT.parentURL.URL",
  //   format,
  //   parentURL,
  //   url,
  //   customExtensionsRegex.test(url)
  // );
  const fileExtension = path.extname(url);
  const fileName = path.basename(url);
  // const workdir = process.cwd();
  // console.log("THE URL", pathToFileURL(url));
  // console.log("THE WORKING DIR", workdir);
  // console.log("THE WHITELISTED", whiteListedUrls, whiteListedUrls.indexOf(url));

  // console.log("LOAD HOOK FORMAT", format);
  // console.log("LOAD HOOK FORMAT URL", url);
  // console.log("LOAD EXTENSION NAME", fileExtension);
  // if (
  //   format === "commonjs" &&
  //   (url === styledComponentsUrlFromClient || url === styledComponentsUrl)
  // ) {
  //   console.log("THE FORMAT IS COMMONJS", format, url);
  //   let cutCode = fs.readFileSync(new URL(styledUrl).pathname, {
  //     encoding: "utf-8",
  //   });
  //   console.log("THE CUTCODE", cutCode);
  //   return {
  //     format: "module",
  //     shortCircuit: true,
  //     source: cutCode,
  //   };
  // }

  // if (
  //   parentURL ===
  //   "file:///Users/surprisemashele/Documents/kotii/packages/kotii-scripts/app.js"
  // ) {
  //   console.log("MODULE MATCH");
  // }
  if (
    whiteListedUrls.indexOf(url) >= 0 ||
    // imageExtensions.includes(fileExtension) ||
    fileExtension === extJsx ||
    fileExtension === extSvg ||
    customExtensionsRegex.test(url)
  ) {
    // console.log("JSX METHODS FILE", url);
    // console.log("THE CONTEXT", context);
    let options = {};
    let source = null;
    if (fileExtension === extJsx) {
      // console.log("PROCESSING FOR JSX EXTENSION");
      options.presets = ["@babel/preset-react"];
      source = fs.readFileSync(new URL(url).pathname, { encoding: "utf-8" });
      // console.log("The Resulting Source", source);
    } else if (fileExtension === extSvg) {
      // console.log("PROCESSING THE SVG EXTENSION", extSvg, fileName);
      options.presets = ["@babel/preset-react"];
      options.plugins = [["inline-react-svg", { filename: fileName }]];
      source = fs.readFileSync(new URL(url).pathname, { encoding: "utf-8" });
    } else if (customExtensionsRegex.test(url)) {
      // console.log("IMAGES WITH FORMAT", format, fileExtension);
      // options.presets = ["@babel/preset-react"];
      // options.plugins = [["babel-plugin-file-loader", { name: fileName }]];
      let newUrl = new URL(url).pathname;
      // console.log("THE NEW URL", newUrl);

      let dataURI = null;
      if (url.indexOf(".png") >= 0 || url.indexOf(".jpg") >= 0) {
        source = fs.readFileSync(newUrl, { encoding: "base64" });
        // const b64 = source.toString("base64");
        // const type = url.indexOf(".png") >= 0 ? "image/png" : "image/jpg";
        // dataURI = `data:${type};base64,${b64}`;
        dataURI = `/image/.png`;
        console.log("PNG FILE AS A PATH AS URL", url, dataURI);
        let dirname = fs.mkdirSync("");
      } else {
        source = fs.readFileSync(newUrl, { encoding: "utf8" });
      }
      // console.log("THE ROAD IMAGE SOURCE", source) ;
      return {
        format: "module",
        shortCircuit: true,
        source: !dataURI
          ? `export default ${JSON.stringify(source.toString())}`
          : `export default ${JSON.stringify(dataURI)}`,
      };
      // return {
      //   format: "module",
      //   shortCircuit: true,
      //   source: `export default ${JSON.stringify(source.toString())}`,
      // };
    } else {
      // console.log("PROCESSING JSX WITHOUT EXTENSION");
      options.presets = ["@babel/preset-react"];
      source = await nextLoad(url, { ...context, format });
    }

    // console.log("THE RAW SOURCE", source);
    let rawSource = typeof source === "string" ? source : source.source;

    // options.presets = ["@babel/preset-react"];
    // options.plugins = ["@svgr/babel-plugin-transform-svg-component"];

    // console.log("THE FILE NAME", options);
    const result = babel.transform(rawSource, options);
    // console.log("THE RESULT", result);
    // console.log("THE RAW SOURCE", rawSource);
    // console.log("THE RESULT BABEL TRANSFORM", result.code);

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
// export async function resolve(specifier, context, nextResolve) {
//   const { parentURL = workdir } = context;
//   // console.log("RESOLVE specifier", specifier);
//   // console.log("RESOLVE context", context);
//   // console.log("RESOLVE nextResolve", nextResolve);

//   // if (customExtensionsRegex.test(specifier)) {
//   //   console.log("Processing PNG OR CSS", specifier);
//   //   let url = new URL(specifier, parentURL);
//   //   console.log("PNG URL", url.href);
//   //   return { url: url.href, shortCircuit: true };
//   // }
//   return nextResolve(specifier);
//   // Take an `import` or `require` specifier and resolve it to a URL.
// }
