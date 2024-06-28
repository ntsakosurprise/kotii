import babel from "@babel/core";
import fs from "fs";
import { pathToFileURL } from "node:url";
import path from "path";
import babelJson from "../babel.server.json" assert { type: "json" };

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
// let anziiPath =
//   "file:///Users/surprisemashele/Documents/kotii/node_modules/anzii/lib/start.js";
let extJsx = ".jsx";
let extSvg = ".svg";
let fileLoaderExts = [".png", ".jpg", ".jpeg", ".css"];

export async function load(url, context, nextLoad) {
  const { format, parentURL = "" } = context;

  const fileExtension = path.extname(url);
  const fileName = path.basename(url);

  if (
    fileExtension === extJsx ||
    whiteListedUrls.indexOf(url) >= 0 ||
    fileLoaderExts.includes(fileExtension)
  ) {
    let source = null;
    let options = null;

    if (fileExtension === extJsx || whiteListedUrls.indexOf(url) >= 0) {
      options = { presets: ["@babel/preset-react"] };
      source = fs.readFileSync(new URL(url).pathname, {
        encoding: "utf-8",
      });
    } else if (fileLoaderExts.includes(fileExtension)) {
      console.log("The PNG", fileExtension);
      let pathName = new URL(url).pathname;
      let fileName = `/${path.basename(pathName)}`;
      // console.log("THE PATHNAME", path.basename(pathName));
      // let contents = fs.readFileSync(new URL(url).pathname, {
      //   encoding: "utf-8",
      // });
      source = `export default ${JSON.stringify(fileName)}`;
      return {
        format: "module",
        shortCircuit: true,
        source: source,
      };
      // return {
      //   format: "module",
      //   shortCircuit: true,
      //   source: !dataURI
      //     ? `export default ${JSON.stringify(source.toString())}`
      //     : `export default ${JSON.stringify(dataURI)}`,
      // };
    } else {
      source = await nextLoad(url, { ...context, format });
    }
    let rawSource = typeof source === "string" ? source : source.source;
    console.log("THE OPTIONS", options, babelJson);
    let result = fileLoaderExts.includes(fileExtension)
      ? babel.transformFileSync(source, options)
      : babel.transform(rawSource, options || babelJson);
    if (fileLoaderExts.includes(fileExtension)) {
      console.log("TRANSFORM RESULT", result);
    }

    return {
      format: format ? (format === "commonjs" ? "module" : format) : "module",
      shortCircuit: true,
      source: result.code,
    };
  }

  // if (
  //   whiteListedUrls.indexOf(url) >= 0 ||
  //   fileExtension === extJsx ||
  //   fileExtension === extSvg ||
  //   customExtensionsRegex.test(url)
  // ) {
  //   let options = {};
  //   let source = null;
  //   if (fileExtension === extJsx) {
  //     // console.log("PROCESSING FOR JSX EXTENSION");
  //     options.presets = ["@babel/preset-react"];
  //     source = fs.readFileSync(new URL(url).pathname, { encoding: "utf-8" });
  //     // console.log("The Resulting Source", source);
  //   } else if (fileExtension === extSvg) {
  //     options.presets = ["@babel/preset-react"];
  //     options.plugins = [["inline-react-svg", { filename: fileName }]];
  //     source = fs.readFileSync(new URL(url).pathname, { encoding: "utf-8" });
  //   } else if (customExtensionsRegex.test(url)) {
  //     let newUrl = new URL(url).pathname;

  //     let dataURI = null;
  //     if (url.indexOf(".png") >= 0 || url.indexOf(".jpg") >= 0) {
  //       source = fs.readFileSync(newUrl, { encoding: "base64" });
  //       // const b64 = source.toString("base64");
  //       // const type = url.indexOf(".png") >= 0 ? "image/png" : "image/jpg";
  //       // dataURI = `data:${type};base64,${b64}`;
  //       dataURI = `/image/.png`;
  //       console.log("PNG FILE AS A PATH AS URL", url, dataURI);
  //       let dirname = fs.mkdirSync("");
  //     } else {
  //       source = fs.readFileSync(newUrl, { encoding: "utf8" });
  //     }
  //     // console.log("THE ROAD IMAGE SOURCE", source) ;
  //     return {
  //       format: "module",
  //       shortCircuit: true,
  //       source: !dataURI
  //         ? `export default ${JSON.stringify(source.toString())}`
  //         : `export default ${JSON.stringify(dataURI)}`,
  //     };
  //   } else {
  //     // console.log("PROCESSING JSX WITHOUT EXTENSION");
  //     options.presets = ["@babel/preset-react"];
  //     source = await nextLoad(url, { ...context, format });
  //   }

  //   let rawSource = typeof source === "string" ? source : source.source;

  //   const result = babel.transform(rawSource, options);

  //   return {
  //     format: format
  //       ? format === "commonjs" && fileName !== extSvg
  //         ? "module"
  //         : format
  //       : "module",
  //     shortCircuit: true,
  //     source: result.code,
  //   };
  // }

  return nextLoad(url);
}
