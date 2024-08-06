import babel from "@babel/core";
import fs from "fs";
import { isBuiltin } from "node:module";
import { pathToFileURL } from "node:url";
import path from "path";
import babelJson from "../babel.server.json" assert { type: "json" };
import { meta } from "../kotii-land/dev/manifest.js";
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
let extJS = ".js";
let extSvg = ".svg";
let extJson = ".json";
let fileLoaderExts = [
  ".png",
  ".jpg",
  ".jpeg",
  ".css",
  ".less",
  ".scss",
  ".sass",
  ".styl",
  ".csv",
  ".tsv",
  ".xml",
];
let extensions = [".js", ".jsx", ".tsx", ".ts"];
let nodeModulesRegex = /node_modules/;

export async function load(url, context, nextLoad) {
  const { format, parentURL = "" } = context;

  const fileExtension = path.extname(url);
  const fileName = path.basename(url);
  // console.log("THE PATH RESOLVE", path.join(workdir, "../kotii-templates"));
  console.log(
    "LOAD THE FILE NAME",
    fileName,
    url,
    `is node modules:${nodeModulesRegex.test(url)}, is BuiltIn: ${isBuiltin(
      fileName
    )}`,
    fileExtension
  );

  if (
    (fileExtension === extJsx ||
      fileExtension === extJS ||
      fileLoaderExts.includes(fileExtension)) &&
    !isBuiltin(fileName)
  ) {
    console.log("EXTENSIONS EXECUTION", fileExtension);
    let source = null;
    let options = null;

    if (fileExtension === extJsx || fileExtension === extJS) {
      console.log("JSX SECTION");
      options = {
        presets: ["@babel/preset-react"],
        plugins: ["@babel/plugin-syntax-import-assertions"],
      };
      console.log("READING FILE", fileExtension, url);
      let urlInstance = new URL(url).pathname;
      if (url.indexOf("/api/") >= 0) {
        if (!fs.existsSync(urlInstance)) {
          source = `export default ${JSON.stringify({ noApi: true })}`;
          return {
            format: "module",
            shortCircuit: true,
            source: source,
          };
        } else {
          source = fs.readFileSync(urlInstance, {
            encoding: "utf-8",
          });
        }
      } else {
        console.log("JSX READ FILE", fileExtension);
        source = fs.readFileSync(urlInstance, {
          encoding: "utf-8",
        });
      }
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
    // console.log("THE OPTIONS", options, babelJson);
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
  } else if (fileExtension === extJson) {
    let contents = fs.readFileSync(new URL(url).pathname, {
      encoding: "utf-8",
    });
    let source = `export default ${JSON.stringify(contents)}`;
    return {
      format: "module",
      shortCircuit: true,
      source: source,
    };
  }

  return nextLoad(url);
}

export async function resolve(specifier, context, nextResolve) {
  // const { parentURL = workdir } = context;
  console.log(
    "RESOLVE specifier",
    workdir
    // specifier,
    // "IS BUILT IN",
    // isBuiltin(specifier)
  );
  console.log("RESOLVE context", context, meta.compsSource);
  // console.log("NEW URL", parentURL ? new URL(specifier, parentURL) : "");
  // console.log("RESOLVE nextResolve", nextResolve);

  let shouldTerminate = false;

  shouldTerminate = resolveAliasedImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolveKotiiLandImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolvePagesImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolveKotiiScriptsImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolveKotiiUserApiPlugins(specifier);
  if (shouldTerminate) return shouldTerminate;
  console.log("HAS NOT TERMINATED", specifier);
  return nextResolve(specifier);
  // Take an `import` or `require` specifier and resolve it to a URL.
}

const resolveAliasedImports = (specifier) => {
  if (!isBuiltin(specifier) && meta.alias[specifier]) {
    let specifierAlias = meta.alias[specifier];
    let fileUrl = pathToFileURL(`${meta.appMain}${specifierAlias}`);

    let fileUrlExt = path.extname(specifierAlias);
    console.log("THE FILE EXTENSION", fileUrlExt);

    if (!fileUrlExt.trim()) {
      console.log("FILE EXTENSION NOT SPECIFIED", fileUrlExt);
      let pathUrl = `${meta.appMain}${specifierAlias}`;
      let pathUrlFileExtension = extensions.filter((ext) => {
        if (fs.existsSync(`${pathUrl}${ext}`)) return true;
      });
      if (pathUrlFileExtension.length === 0) {
        throw new Error("The specified path alias does not have related file");
      }
      fileUrl = `${fileUrl}${pathUrlFileExtension[0]}`;
      console.log("THE PATH URL", pathUrl);
    }
    console.log("THE META SPECIFIER", specifierAlias, fileUrlExt);
    console.log("PATH TO FILE", `${fileUrl}`);
    // console.log("Processing PNG OR CSS", specifier);
    // let url = new URL(specifier, parentURL);
    // console.log("PNG URL", url.href);
    return { url: fileUrl, shortCircuit: true };
  } else {
    return false;
  }
};
const resolveKotiiLandImports = (specifier) => {
  if (!isBuiltin(specifier) && /\.kotii-land\/(pages|routes)/.test(specifier)) {
    console.log("THE PAGES PATH KOTII LAND PATH");
    let basePath = getPagesBasePath(specifier);
    console.log("THE PATH BASE", basePath);

    let fullPath =
      specifier.indexOf("pages") >= 0
        ? path.resolve(basePath, ".kotii-land/pages.js")
        : path.resolve(basePath, ".kotii-land/routes.js");
    console.log("THE FULL PATH", fullPath);
    // console.log("THE BASE PATH", workdir);
    return {
      url: pathToFileURL(fullPath).href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};
const resolvePagesImports = (specifier) => {
  console.log("THE PAGES IMPORT", specifier);
  if (!isBuiltin(specifier) && /^\/src\//.test(specifier)) {
    console.log("THE SPECIFIER FOR PAGES PATH", specifier);
    let basePath = getPagesBasePath(specifier);
    console.log("THE SPECIFIRE BASE PATH", basePath);
    console.log("THE FULL PATH", `${basePath}${specifier}`);
    console.log(
      "THE PATH AS URL",
      pathToFileURL(`${basePath}${specifier}`).href
    );

    return {
      url: pathToFileURL(`${basePath}${specifier}`).href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};
const resolveKotiiScriptsImports = (specifier) => {
  console.log(
    "KOTII SCRIPTS IMPORTS",
    specifier,
    /^kotii-scripts/.test(specifier)
  );
  if (!isBuiltin(specifier) && /^kotii-scripts/.test(specifier)) {
    console.log("THE SPECIFIER FOR KOTII-SCRIPTS PATH", specifier);
    let kotiiExportsPath = `${workdir}${sep}kotii-land/dev/app_.js`;
    console.log("THE PATH AS URL", pathToFileURL(kotiiExportsPath).href);
    return {
      url: pathToFileURL(kotiiExportsPath).href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};
const resolveKotiiUserApiPlugins = (specifier) => {
  if (!isBuiltin(specifier) && /^\/kotii-user-api/.test(specifier)) {
    let basePath = getPagesBasePath();
    console.log("API PLUGINS PATH", basePath);

    let fullPath = path.resolve(basePath, "api/index.js");
    console.log("THE FULL PATH", fullPath);
    // console.log("THE BASE PATH", workdir);
    return {
      url: pathToFileURL(fullPath).href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};
const getPagesBasePath = () => {
  let nodeModulesPath = `${path.join(workdir, "../node_modules")}`;
  let kotiiPath = `${path.join(workdir, "..")}`;
  console.log("KOTII NODE MODULES PATH", nodeModulesPath);
  console.log("KOTII PATH", kotiiPath);
  let inKotiiLand = fs.existsSync(`${kotiiPath}`);
  let inUserLand = fs.existsSync(`${nodeModulesPath}`);
  console.log("IS KOTII LAND", inKotiiLand, kotiiPath);
  console.log("IS USER LAND", inUserLand, nodeModulesPath);
  let resolvePath = inUserLand
    ? `${path.join(nodeModulesPath, "kotii-templates/javascript/ssr")}`
    : `${path.join(kotiiPath, "kotii-templates/javascript/ssr")}`;

  return resolvePath;
};
