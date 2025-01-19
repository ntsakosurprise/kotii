import babel from "@babel/core";
import fs from "fs";
import { loggas, logger } from "kotii-logger";
import { isBuiltin } from "node:module";
import { pathToFileURL } from "node:url";
import path from "path";
import babelJson from "../babel.server.json" assert { type: "json" };
import { getNodejsForeignData } from "../globals.mjs";
import { kotiiKotiiLandPath, kotiiRootPath } from "../kotii_paths.js";

let meta = null;
let kotiiAssetsMeta = {};
let timerActive = false;
let metaChecked = false;
let workdir = `${process.cwd()}`;

logger.setNameSpaces([
  { namespace: "nodejs:compilation:load", id: "load" },
  { namespace: "nodejs:compilation:resolve", id: "resolve" },
]);

/**
 *
 * sets node hook to intercept requests to styled-components by manually
 * reading the file content from disk and returning it to avoid styled
 * component function being undefiend
 */

let extJsx = ".jsx";
let extJS = ".js";
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
  ".json",
];
let extensions = [".js", ".jsx", ".tsx", ".ts"];
let nodeModulesRegex = /node_modules/;

export async function load(url, context, nextLoad) {
  const { format, parentURL = "" } = context;

  const fileExtension = path.extname(url);
  const fileName = path.basename(url);

  loggas.load.debug(
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
    loggas.load.debug("EXTENSIONS EXECUTION", fileExtension);
    let source = null;
    let options = null;

    if (fileExtension === extJsx || fileExtension === extJS) {
      loggas.load.debug("JSX SECTION");
      options = {
        presets: ["@babel/preset-react"],
        plugins: ["@babel/plugin-syntax-import-assertions"],
      };
      loggas.load.debug("READING FILE", fileExtension, url);
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
      } else if (fileExtension === extJsx) {
        loggas.load.debug("JSX READ FILE", fileExtension);
        source = fs.readFileSync(urlInstance, {
          encoding: "utf-8",
        });
      } else if (fileExtension === extJS) {
        if (
          nodeModulesRegex.test(url) &&
          url.split("/").includes("kotii-scripts") &&
          url.indexOf("/kotii-scripts/node_modules") < 0
        ) {
          loggas.load.debug(
            "IS NODE MODULES AND KOTII",
            fileName,
            fileExtension,
            url,
            urlInstance
          );

          source = fs.readFileSync(urlInstance, {
            encoding: "utf-8",
          });
        } else {
          return nextLoad(url);
        }
      }
    } else if (fileLoaderExts.includes(fileExtension)) {
      loggas.load.debug("The PNG", fileExtension, meta && meta.useInlinedPngs);
      let pathName = new URL(url).pathname;
      let fileName = `/${path.basename(pathName)}`;
      switch (fileExtension) {
        case ".json":
          source = await getNodejsForeignData("json", pathName);
          break;
        case ".csv":
          source = await getNodejsForeignData("csv", pathName);
          break;
        case ".xml":
          source = await getNodejsForeignData("xml", pathName);
          break;
        case ".png":
          source = doInlinedPngs(pathName, fileName);
          break;
        default:
          source = `export default ${JSON.stringify(fileName)}`;
      }

      loggas.load.debug("filename.pathname", fileName, pathName);

      loggas.load.debug("FileName source", source);
      return {
        format: "module",
        shortCircuit: true,
        source: source,
      };
    } else {
      source = await nextLoad(url, { ...context, format });
    }
    let rawSource = typeof source === "string" ? source : source.source;
    let result = fileLoaderExts.includes(fileExtension)
      ? babel.transformFileSync(source, options)
      : babel.transform(rawSource, options || babelJson);
    if (fileLoaderExts.includes(fileExtension)) {
      loggas.load.debug("TRANSFORM RESULT", result);
    }

    return {
      format: format ? (format === "commonjs" ? "module" : format) : "module",
      shortCircuit: true,
      source: result.code,
    };
  }

  return nextLoad(url);
}

export async function resolve(specifier, context, nextResolve) {
  // const { parentURL = workdir } = context;
  loggas.resolve.debug("RESOLVE specifier", specifier);

  let shouldTerminate = false;
  if (!meta && !metaChecked) {
    loadMeta();
  }
  if (specifier.indexOf("../kotii-land/dev") >= 0) {
    loggas.resolve.debug("ALSO HANDLED BY LOADERS", meta);
  }
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
  shouldTerminate = resolveKotiiScriptsInternalImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  return nextResolve(specifier);
}

/**
 *
 * @param {*} specifier
 * @returns true/false
 * resolveAliasedImports resolves modules/paths that are aliased as defined by the
   user in an app_manifest.json. Aliased modules help make the user's navigation of the project
   a lot easier.

   N.B Sample app.manifest.json structure: 

   "aliases": {
    "AppGlobals": "/src/globals/index",
    "Layouts": "/src/components/layout/index",
    "Pages": "/src/components/pages/index",
    "Docs": "/src/components/docs/index",
  }

  import { GlobalStyle } from "AppGlobals"; // Find GlobalStyle variable using an absolute path
  named "AppGlobals" that should resolve to the exact location of the file/module
 
 */
const resolveAliasedImports = (specifier) => {
  if (!isBuiltin(specifier) && doMeta(specifier)) {
    let specifierAlias = meta.aliases[specifier];
    loggas.resolve.debug("SPECIAL ALIAS", specifier, specifierAlias);
    let fileUrl = pathToFileURL(`${workdir}${specifierAlias}`);

    let fileUrlExt = path.extname(specifierAlias);
    loggas.resolve.debug("THE FILE EXTENSION", fileUrlExt);

    if (!fileUrlExt.trim()) {
      loggas.resolve.debug("FILE EXTENSION NOT SPECIFIED", fileUrlExt);
      let pathUrl = `${workdir}${specifierAlias}`;
      let pathUrlFileExtension = extensions.filter((ext) => {
        if (fs.existsSync(`${pathUrl}${ext}`)) return true;
      });
      if (pathUrlFileExtension.length === 0) {
        throw new Error(
          "The specified path aliases does not have related file"
        );
      }
      loggas.resolve.debug("PATH URL EXTENSION", pathUrlFileExtension);
      fileUrl = `${fileUrl}${pathUrlFileExtension[0]}`;
      loggas.resolve.debug("THE PATH URL", pathUrl);
    }
    loggas.resolve.debug("THE META SPECIFIER", specifierAlias, fileUrlExt);
    loggas.resolve.debug("PATH TO FILE", `${fileUrl}`);
    // console.log("Processing PNG OR CSS", specifier);
    // let url = new URL(specifier, parentURL);
    // console.log("PNG URL", url.href);
    return { url: fileUrl, shortCircuit: true };
  } else {
    return false;
  }
};

/**
 *
 * @param {*} specifier
 * @returns true/false
 * resolveKotiiLandImports resolves modules that are found inside a kotii generated folder named ".kotii-land".
 * .kotii-land is a special folder in kotii that is generated when a 'build' command is executed.
 * kotii uses this folder to store some content needed in a production execution of a kotii-made app.
 *
 * To resolve modules in this folder, we check if an import specifier contains a path with .kotii-land folder.
 *
 * We currently look for routes and pages in this folder:
 * routes: an app's routes
 * pages: Contains paths of user's app pages that have been transpiled for nodejs environment.
 *        The files that the paths contained in this file point to will be better loaded by nodejs
 *        runtime.
 *
 * These files are requested/imported by kotii internally at production runtime. The pages are basically
 * derived from a file in: /kotii-land/dev/pages.js, which its self is generated and updated automatically during
 * development
 *
 */
const resolveKotiiLandImports = (specifier) => {
  if (!isBuiltin(specifier) && /\.kotii-land\/(pages|routes)/.test(specifier)) {
    loggas.resolve.debug("THE PAGES PATH KOTII LAND PATH");
    let basePath = getPagesBasePath(specifier);
    loggas.resolve.debug("THE PATH BASE", basePath);

    let fullPath =
      specifier.indexOf("pages") >= 0
        ? path.resolve(basePath, ".kotii-land/pages.js")
        : path.resolve(basePath, ".kotii-land/routes.js");
    loggas.resolve.debug("THE FULL PATH", fullPath);
    // console.log("THE BASE PATH", workdir);
    return {
      url: pathToFileURL(fullPath).href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};

/**
 *
 * @param {*} specifier
 * @returns true/false
 * resolvePagesImports resolves a user's pages imports by checking if a specifier starts
 * with a forward slash and followed by a 'src' text. The paths are generated and requested by
 * kotii in both production and development runtime.
 *
 * This approach is not 100% reliable for our intended goal, but it works fine now because we filter
 * all the other absolute paths that begin with /src/ as aliased imports. Nonetheless, we will have
 * to re-look this approach and resolve the pages imports better.
 *
 */
const resolvePagesImports = (specifier) => {
  loggas.resolve.debug("THE PAGES IMPORT", specifier);
  if (!isBuiltin(specifier) && /^\/src\//.test(specifier)) {
    loggas.resolve.debug("THE SPECIFIER FOR PAGES PATH", specifier);
    let basePath = getPagesBasePath(specifier);
    loggas.resolve.debug("THE SPECIFIRE BASE PATH", basePath);
    loggas.resolve.debug("THE FULL PATH", `${basePath}${specifier}`);
    loggas.resolve.debug(
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
/**
 *
 * @param {*} specifier
 * @returns true/false
 * resolveKotiiScriptsImports resolves imports from kotii-scripts' exports during development.
 * kotii uses two separate files for app start up in /kotii-land/. The files are in /kotii-land/dev/ and
 * /kotii-land/prod/ respectively.
 *
 * Because these files are loaded differently by nodejs, only one can be used per environment.
 * To prevent errors that users would potentially face in both development and production environments,
 * we decided to resolve the imports manually from dev during development
 *
 * In Production, kotii-scripts will expectedly export appropriate files where they are needed. It will
 * use nodejs' default resolve hook.
 *
 */
const resolveKotiiScriptsImports = (specifier) => {
  loggas.resolve.debug(
    "KOTII SCRIPTS IMPORTS",
    specifier,
    /^kotii-scripts/.test(specifier)
  );
  if (!isBuiltin(specifier) && /^kotii-scripts/.test(specifier)) {
    // let kotiiExportsPath = fs.existsSync(path.join(workdir, "node_modules"))
    //   ? path.join(workdir, "node_modules/kotii-scripts/kotii-land/dev/app_.js")
    //   : `${workdir}${sep}kotii-land/dev/app_.js/`;

    // console.log("THE PATH AS URL", pathToFileURL(kotiiExportsPath).href);
    let kotiiExportsPath = `${kotiiKotiiLandPath}/dev/app_.js`;
    let urlLized = pathToFileURL(kotiiExportsPath).href;
    loggas.resolve.debug(
      "THE SPECIFIER FOR KOTII-SCRIPTS PATH",
      "KOTII-SCRIPTS IMPORTS",
      specifier,
      "EXPORTS PATH",
      kotiiExportsPath,
      "URLIZED",
      urlLized
    );
    return {
      url: urlLized,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};

/**
 *
 * @param {*} specifier
 * @returns true/false
 * resolveKotiiScriptsInternalImports resolves imports from kotii-scripts' internals during
 * development time. This is mainly done for modules in /kotii-land
 *
 */
const resolveKotiiScriptsInternalImports = (specifier) => {
  if (!isBuiltin(specifier) && /^\/kotii-land/.test(specifier)) {
    // console.log("THE SPECIFIER FOR KOTII-SCRIPTS PATH", specifier);
    // let kotiiExportsPath = fs.existsSync(path.join(workdir, "node_modules"))
    //   ? path.join(workdir, `node_modules/kotii-scripts/${specifier}`)
    //   : `${workdir}${sep}kotii-land/dev/app_.js/`;
    // console.log("THE PATH AS URL", pathToFileURL(kotiiExportsPath).href);

    let kotiiExportsPath = `${kotiiRootPath}${specifier}`;
    let urlLized = pathToFileURL(kotiiExportsPath).href;
    loggas.resolve.debug(
      "THE SPECIFIER FOR KOTII-SCRIPTS PATH",
      "KOTII-LAND IMPORTS",
      specifier,
      "EXPORTS PATH",
      kotiiExportsPath,
      "URLIZED",
      urlLized
    );
    return {
      url: urlLized,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};

/**
 *
 *
 *
 * @param {*} specifier
 * @returns true/false
 * resolveKotiiUserApiPlugins resolves imports for user api resources. Kotii requires that users
 * create an `api` folder, this folder is used to define the plugins used as backend for the app(for apps tht require backend)
 * This enables the user's app to handle both requests for views and data under one source.
 * The imports are made internally by kotii to the user's `api` folder. Kotii uses dynamic import to try
 * to find a possible existence of the `api` folder.
 *
 * Pre-fixing the path with /kotii-user-api/ ensures that during import, kotii-js's custom resolver
 * can detect that the folder being loaded is meant to load files from a user's /api/** folder if
 * it exists. It replaces the string /kotii-user-api/plugins with /api/index.js that is relevant to
 * the current user's enviroment.
 *
 */
const resolveKotiiUserApiPlugins = (specifier) => {
  if (!isBuiltin(specifier) && /^\/kotii-user-api/.test(specifier)) {
    let basePath = getPagesBasePath();
    loggas.resolve.debug("API PLUGINS PATH", basePath);

    let fullPath = path.resolve(basePath, "api/index.js");
    loggas.resolve.debug("THE FULL PATH", fullPath);
    // console.log("THE BASE PATH", workdir);
    return {
      url: pathToFileURL(fullPath).href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};

/**
 *
 * @returns
 * getPagesBasePath this function simply checks to see if we are in node_modules path or kotii path.
 * node_modules path will imply that we are using the base of our paths as user's project, while
 * the kotii path imply that we are using kotii-scripts's folder root as our base.
 *
 */

const getPagesBasePath = () => {
  let nodeModulesPath = `${path.join(workdir, "node_modules")}`;
  let kotiiPath = `${path.join(workdir, "..")}`;

  // let inKotiiLand = fs.existsSync(`${kotiiPath}`);
  let inUserLand = fs.existsSync(`${nodeModulesPath}`);

  let resolvePath = inUserLand
    ? `${workdir}`
    : `${path.join(kotiiPath, "kotii-templates/javascript/ssr")}`;

  return resolvePath;
};

/**
 *
 * @param {*} specifier
 * @returns
 * doMeta checks for the existance of meta key from an app.manifest.json. The meta key is an object that
 * contains information about the user's project configurations. This configuration may include `aliases`
 * key that maps a name and an absolute path that should be resolved to some file(s)
 */
const doMeta = (specifier) => {
  if (meta && meta?.aliases) {
    return meta.aliases[specifier];
  } else {
    return false;
  }
};

const loadMeta = () => {
  loggas.resolve.debug("LOAD META CALLED");
  let metaPath = path.resolve(workdir, "app.manifest.json");

  if (fs.existsSync(metaPath)) {
    meta = JSON.parse(
      fs.readFileSync(metaPath, {
        encoding: "utf8",
      })
    );
    loggas.resolve.debug("LOADED META", meta);
    metaChecked = true;
  }
};

const saveKotiiAssetsMeta = () => {
  let metaPath = path.resolve(kotiiKotiiLandPath, "assets.manifest.json");

  fs.writeFileSync(metaPath, JSON.stringify(kotiiAssetsMeta, null, 2));

  // metaChecked = true;
};

const doInlinedPngs = (fileUrl, fName) => {
  loggas.load.debug("DO PNG GETS A CALL", fileUrl);
  if (meta && meta.useInlinedPngs) {
    let pngContent = fs.readFileSync(fileUrl, { encoding: "base64" });
    const b64 = pngContent.toString("base64");
    let dataURI = `data:image/png;base64,${b64}`;
    kotiiAssetsMeta[fileUrl] = dataURI;
    if (!timerActive) {
      timerActive = true;
      setTimeout(() => {
        timerActive = false;
        saveKotiiAssetsMeta();
      }, 1000);
    }
    return `export default ${JSON.stringify(dataURI)}`;
  } else {
    return `export default ${JSON.stringify(fName)}`;
  }
};
