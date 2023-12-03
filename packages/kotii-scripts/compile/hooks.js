import babel from "@babel/core";
import fs from "fs";
let whiteListedUrls = [
  "file:///Users/surprisemashele/Documents/kotii/packages/kotii-scripts/plugins/react/methods.js",
  "file:///Users/surprisemashele/Documents/kotii/packages/kotii-scripts/build.js",
  "file:///Users/surprisemashele/Documents/kotii/packages/kotii-scripts/public.js",
];
let pagesURL =
  "file:///Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/";
let extJsx = ".jsx";
export async function load(url, context, nextLoad) {
  // Take a resolved URL and return the source code to be evaluated.
  const { format } = context;
  console.log("LOAD HOOK FORMAT", format);
  console.log("LOAD HOOK FORMAT URL", url);

  if (
    whiteListedUrls.indexOf(url) >= 0 ||
    url.indexOf(extJsx) >= 0 ||
    url.indexOf(pagesURL) >= 0
  ) {
    console.log("JSX METHODS FILE", url);
    console.log("THE CONTEXT", context);

    const source =
      url.indexOf(extJsx) < 0
        ? await nextLoad(url, { ...context, format })
        : fs.readFileSync(new URL(url).pathname, { encoding: "utf-8" });
    console.log("THE RAW SOURCE", source);
    let rawSource = typeof source === "string" ? source : source.source;
    let options = {};
    options.presets = ["@babel/preset-react"];

    console.log("THE FILE NAME", options);
    const result = babel.transform(rawSource, options);
    console.log("THE RAW SOURCE", rawSource);
    console.log("THE RESULT BABEL TRANSFORM", result.code);

    return {
      format: format ? (format === "commonjs" ? "module" : format) : "module",
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
//   const { parentURL = null } = context;
//   // console.log("RESOLVE specifier", specifier);
//   // console.log("RESOLVE context", context);
//   // console.log("RESOLVE nextResolve", nextResolve);
//   // const { parentUrl } = context;
//   if (
//     specifier === "./react/reactview.js" ||
//     specifier.indexOf("react/methods.js" >= 0)
//   ) {
//     console.log("THE SPECIFIER", specifier);
//     // context["fileName"] = specifier;
//     // context["parentFile"] = pare;
//     return {
//       format: "module",
//       url: parentURL
//         ? new URL(specifier, parentURL).href
//         : new URL(specifier).href,
//       custom: { specifier: specifier, custom: "cust" },
//       context: { ...context },
//       shortCircuit: true,
//     };
//   }
//   return nextResolve(specifier);
//   // Take an `import` or `require` specifier and resolve it to a URL.
// }
