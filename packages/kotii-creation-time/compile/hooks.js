/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import babel from "@babel/core";
import fs from "fs";
import { loggas, logger } from "kotii-logger";
import { isBuiltin } from "node:module";
import { pathToFileURL } from "node:url";
import path from "path";
import chalk from "chalk";
import boxen from "boxen";
import {
  lessToCssConverter,
  renderCssModules,
  sassToCssConverter,
  stylusToCssConverter,
} from "../css/index.js";
import { loadFile } from "../file-loader/index.js";
import { createImportPathContext, getNodejsForeignData } from "../globals.js";
import { kotiiKotiiLandPath, kotiiRootPath } from "kotii-creation-time/root";
import {
  USER_LAND_ALIASES,
  USER_LAND_ALIAS_STYLES_JSON,
  USER_LAND_ALIAS_STYLES_MODULES,
  USER_LAND_ALIAS_ASSETS_MANIFEST,
  USER_LAND_ALIAS_STYLES_FONTS,
} from "kotii-internal/user";
// import { kotiiInternal } from "kotii-internal";

let meta = null;
let kotiiAssetsMeta = {};
let kotiiModulesMeta = {};
let timerActive = false;
let metaChecked = false;
let workdir = `${process.cwd()}`;
let GLOBAL_STYLES_REGEX = /global\.+/;
let CSS_MODULES_REGEX = /\.module\./;
let KOTII_STYLED_REGEX = /import\s+styled\s+from\s+['"]package-styled['"]/;
let JSON_STYLES_PATH = `${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_JSON]}`;
let JSON_STYLES_MAP_PATH = `${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_MODULES]}`;
let JSON_STYLES_FONTS_PATH = `${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_FONTS]}`;
let JSON_STYLES_PATH_FIRSTTIME_USE = false;
let JSON_STYLES_PATH_MAP_FIRSTTIME_USE = false;
let JSON_STYLES_FONTS_PATH_FIRSTTIME_USE = false;
let MODULES_SPECIFIERS = {};
let MODULES_FILE_SPECIFIER = {};
let FILE_LOADER_DEFAULT = {
  name: "name.ext",
  output: "public/imgs",
  // inlinePngs: true,
};
const ESCAPE_CHARACTER = "dot_";

const FONT_FACE_BLOCK_REGEX = /@font-face\s*{[^}]*}/gi;
const URL_REGEX = /url\(\s*(["']?)([^"')]+)\1\s*\)/g;
const RELATIVE_URLS_PATH_LEVELS_REGEX = /^(\.\.\/)+/;
let FONTS_META = [];
let STATIC_GLOBALS_CREATED = false;

let cssSpecifiers = [".css", ".scss", ".sass", ".less", ".styl"];
let fileSpecifiers = [".gif", ".png", ".svg", ".jpg", ".jpeg"];

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
let extTsx = ".tsx";
let extTs = ".ts";
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
  ".svg",
];
let extensions = [".js", ".jsx", ".tsx", ".ts"];
let nodeModulesRegex = /node_modules/;

global.MODULE_GRAPH_FOR_STATIC_GENERATION = new Map();
global.TEST_GLOBAL_USE = "THE GLOBAL USE";

const RESOLVE_SPECIFIER_TO_URL = {};
const PACKAGE_FILES = new Map();
let isStaticMode = false;

// global.REGISTER_MODULE = function (file, meta) {
//   MODULE_GRAPH_FOR_STATIC_GENERATION.set(file, {
//     externals: new Set(meta.externals || []),
//     deps: new Set(meta.deps || []),
//     imports: meta.imports || {},
//   });
// };

let madeDir = null;
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

  if (url.startsWith("virtual:static-module-graph")) {
    return loadVirtualModule();
  }

  addDependencyFromLoad(url);

  try {
    if (
      (fileExtension === extJsx ||
        fileExtension === extJS ||
        fileExtension === extTs ||
        fileExtension === extTsx ||
        fileLoaderExts.includes(fileExtension)) &&
      !isBuiltin(fileName)
    ) {
      loggas.load.debug("EXTENSIONS EXECUTION", fileExtension);
      let source = null;
      let options = null;
      const isThirdPartyNodeModule =
        nodeModulesRegex.test(url) && !url.includes("kotii-");

      if (
        fileExtension === extJsx ||
        fileExtension === extJS ||
        fileExtension === extTs ||
        fileExtension === extTsx
      ) {
        loggas.load.debug("JSX SECTION");
        options = {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
          plugins: [
            // "@babel/plugin-syntax-import-assertions",
            // "@babel/plugin-transform-typescript",
            // [
            //   "babel-plugin-styled-components",
            //   { ssr: true, displayName: true },
            // ],
          ],
        };
        if (
          process.env?.KOTII_MODE &&
          process.env?.KOTII_MODE?.toLowerCase() === "ssg"
        )
          options.plugins.push([
            `${path.join(
              kotiiRootPath,
              "./babel-plugins/transform-react-state-plugin/index.cjs"
            )}`,
            {
              aliases: meta.aliases,
              fileName: url,
              staticDepsResolver: staticDepsResolver,
            },
          ]);
        loggas.load.debug("READING FILE", fileExtension, url, options.plugins);
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
            url.split("/").includes("kotii-creation-time") &&
            url.indexOf("/kotii-creation-time/node_modules") < 0
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
        } else if (fileExtension === extTs) {
          source = fs.readFileSync(urlInstance, {
            encoding: "utf-8",
          });
        } else if (fileExtension === extTsx) {
          source = fs.readFileSync(urlInstance, {
            encoding: "utf-8",
          });
        }
      } else if (fileLoaderExts.includes(fileExtension)) {
        loggas.load.debug(
          "The PNG",
          fileExtension,
          meta && meta.useInlinedPngs
        );
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
          case ".jpg":
          case ".svg":
          case ".png":
          case ".gif":
          case ".mp3":
          case ".mp4":
            source = processImageFiles(pathName, fileName, fileExtension);
            break;
          case ".scss":
          case ".sass":
            source = await getCssFromSass(pathName, fileName);
            break;
          case ".less":
            source = await getCssFromLess(pathName, fileName);
            break;
          case ".styl":
            source = await getCssFromStylus(pathName, fileName);
            break;
          case ".css":
            source = await getCss(pathName, fileName);
            break;
          default:
            source = `export default ${JSON.stringify(fileName)}`;
        }

        loggas.load.debug("filename.pathname", fileName, pathName);

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
        : fileExtension === extJsx
        ? babel.transform(rawSource, {
            filename: url,
            presets: options.presets,
            plugins: options.plugins,
          })
        : { code: rawSource };

      if (result?.metadata?.__STATIC_META__) {
        console.log("RESULT.METADATA", result.metadata.__STATIC_META__);
        MODULE_GRAPH_FOR_STATIC_GENERATION.set(url, {
          externals: result.metadata.__STATIC_META__.externals,
          deps: new Set(result.metadata.__STATIC_META__.deps),
          imports: result.metadata.__STATIC_META__.imports,
          reactOptHooks: result.metadata.__STATIC_META__.reactOptHooks,
        });
        console.log(
          "MODULE GRAPH EXTERNALS",
          MODULE_GRAPH_FOR_STATIC_GENERATION,
          "Specifiers Resolves",
          RESOLVE_SPECIFIER_TO_URL
        );
      }

      if (!isThirdPartyNodeModule) findStyledComponentsPatterns(rawSource, url);

      return {
        format: format ? (format === "commonjs" ? "module" : format) : "module",
        shortCircuit: true,
        source: result.code,
      };
    }

    return nextLoad(url);
  } catch (error) {
    console.log("LOAD IS FAILING", error);
    const parsed = parseLoaderError(error);
    const { file } = parsed;
    const matchPartialPagesPathPattern = `/kotii-land/dev/pages.js`;
    const matchPartialBuildPathPattern = `/kotii-land/dev/build.js`;
    let source = ``;
    let code = 0;

    prettyPrintError(parsed);

    if (
      file &&
      (file.indexOf(matchPartialPagesPathPattern) >= 0 ||
        file.indexOf(matchPartialBuildPathPattern) >= 0)
    ) {
      source = `export default null`;
      code = 50;
    } else {
      source = `export default null;`;
    }

    await new Promise((r) => setTimeout(r, 10));
    process.exit(code);
  }
}

export async function resolve(specifier, context, nextResolve) {
  const { parentURL = "" } = context;
  loggas.resolve.debug("RESOLVE specifier", specifier, parentURL);
  loggas.resolve.debug("PACKAGES FILES LIST", PACKAGE_FILES);

  // if(
  //   process.env?.KOTII_MODE &&
  //   process.env?.KOTII_MODE?.toLowerCase() === "ssg" && !STATIC_GLOBALS_CREATED
  // ){
  //   createStaticGenerationGlobals()
  // }
  if (!isStaticMode && process?.env?.KOTII_MODE) {
    initiateStaticStatus();
  }

  try {
    let shouldTerminate = false;
    if (cssSpecifiers.includes(path.extname(specifier))) {
      let url = new URL(specifier, parentURL);
      loggas.resolve.debug("THE CWD");
      storeCssModuleSpecifier(
        createImportPathContext(url.pathname, specifier, "src")
      );
      // storeCssModuleSpecifier(specifier, url.pathname);
    }
    if (fileSpecifiers.includes(path.extname(specifier))) {
      let url = new URL(specifier, parentURL);
      storeFileModuleSpecifier(
        createImportPathContext(url.pathname, specifier, "src")
      );
    }
    if (!meta && !metaChecked) {
      loadMeta();
    }

    if (specifier.indexOf("../kotii-land/dev") >= 0) {
      loggas.resolve.debug("ALSO HANDLED BY LOADERS", meta);
    }

    if (isStaticMode) {
      shouldTerminate = resolveVirtualModule(specifier);
      if (shouldTerminate) return shouldTerminate;
    }

    shouldTerminate = resolveUserAliase(specifier);
    if (shouldTerminate) {
      saveTargetSpecifier(specifier, shouldTerminate, parentURL);
      return shouldTerminate;
    }

    // shouldTerminate = resolveKotiiInternalImports(specifier);
    // if (shouldTerminate) return shouldTerminate;
    // shouldTerminate = resolveUserlandImports(specifier);
    // if (shouldTerminate) return shouldTerminate;
    shouldTerminate = resolveAliasedImports(specifier);
    if (shouldTerminate) {
      saveTargetSpecifier(specifier, shouldTerminate, parentURL);
      return shouldTerminate;
    }
    // shouldTerminate = resolveKotiiLandImports(specifier);
    // if (shouldTerminate) return shouldTerminate;
    shouldTerminate = resolvePagesImports(specifier);
    if (shouldTerminate) {
      saveTargetSpecifier(specifier, shouldTerminate, parentURL);

      return shouldTerminate;
    }
    // shouldTerminate = resolveKotiiScriptsImports(specifier);
    // if (shouldTerminate) return shouldTerminate;
    // shouldTerminate = resolveKotiiUserApiPlugins(specifier);
    // if (shouldTerminate) return shouldTerminate;
    // shouldTerminate = resolveKotiiScriptsInternalImports(specifier);
    // if (shouldTerminate) return shouldTerminate;

    let resolveResult = await nextResolve(specifier);
    saveTargetSpecifier(specifier, resolveResult, parentURL);

    return resolveResult;
  } catch (error) {
    const parsed = parseLoaderError(error);

    prettyPrintError(parsed);

    await new Promise((r) => setTimeout(r, 10));
    process.exit();
  }
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
export const resolveUserAliase = (specifier) => {
  if (!isBuiltin(specifier) && /^@kotii\/_user/.test(specifier)) {
    try {
      let livingPath;
      console.log("USER LAND ALIASES", USER_LAND_ALIASES, specifier);
      if (USER_LAND_ALIASES[specifier]?.value) {
        let basePath = getPagesBasePath(USER_LAND_ALIASES[specifier].value);
        console.log("THE BASE PATH", basePath);
        livingPath = guessPathExtension(
          path.resolve(
            basePath,
            USER_LAND_ALIASES[specifier].value.replace(/^\/+/, "")
          )
        );
        console.log("USER LAND", livingPath);
      } else {
        livingPath = guessPathExtension(USER_LAND_ALIASES[specifier]);
      }

      return {
        url: pathToFileURL(`${livingPath}`).href,
        shortCircuit: true,
      };
    } catch (error) {
      console.log("THE APP HAS ERRORED", error, "THE ERRORED PATH");
    }
  } else {
    return false;
  }
};

export const resolveUserAliaseCss = (specifier) => {
  if (!isBuiltin(specifier) && /^@kotii\/_css$/.test(specifier)) {
    loggas.resolve.debug("THE @USER SPECIFIER CSS", specifier);
    // let basePath = getPagesBasePath(specifier);

    // let aliaseTruePath = Object.keys(KOTII_USER_LAND_ALIASES).filter(
    //   (aliase) => KOTII_USER_LAND_ALIASES[aliase].alias === specifier
    // );
    let aliaseTruePathValue = USER_LAND_ALIASES[specifier];
    // let aliasePossiblePath = `${basePath}${aliaseTruePathValue}`;
    console.log("THE @USER IMPORTS CSS", aliaseTruePathValue);

    try {
      let livingPath = aliaseTruePathValue;
      return {
        url: pathToFileURL(`${livingPath}`).href,
        shortCircuit: true,
      };
    } catch (error) {
      console.log("THE APP HAS ERRORED", error, "THE ERRORED PATH");
    }
  } else {
    return false;
  }
};

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
export const resolveAliasedImports = (specifier) => {
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
export const resolveKotiiLandImports = (specifier) => {
  if (!isBuiltin(specifier) && /\.kotii-land\/(pages|routes)/.test(specifier)) {
    loggas.resolve.debug("THE PAGES PATH KOTII LAND PATH");
    let basePath = getPagesBasePath(specifier);
    loggas.resolve.debug("THE PATH BASE", basePath);

    let fullPath =
      specifier.indexOf("pages") >= 0
        ? path.resolve(basePath, ".kotii-land/pages.js")
        : path.resolve(basePath, ".kotii-land/routes.js");
    loggas.resolve.debug("THE FULL PATH", fullPath);

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
export const resolvePagesImports = (specifier) => {
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
 * resolveKotiiScriptsImports resolves imports from kotii' exports during development.
 * kotii uses two separate files for app start up in /kotii-land/. The files are in /kotii-land/dev/ and
 * /kotii-land/prod/ respectively.
 *
 * Because these files are loaded differently by nodejs, only one can be used per environment.
 * To prevent errors that users would potentially face in both development and production environments,
 * we decided to resolve the imports manually from dev during development
 *
 * In Production, kotii will expectedly export appropriate files where they are needed. It will
 * use nodejs' default resolve hook.
 *
 */
export const resolveKotiiScriptsImports = (specifier) => {
  loggas.resolve.debug(
    "KOTII SCRIPTS IMPORTS",
    specifier,
    /^kotii$/.test(specifier)
  );
  if (!isBuiltin(specifier) && /^kotii$/.test(specifier)) {
    let kotiiExportsPath = `${workdir}/node_modules/kotii-internal/dist/app_.js`;
    let urlLized = pathToFileURL(kotiiExportsPath).href;
    loggas.resolve.debug(
      "THE SPECIFIER FOR kotii PATH",
      "kotii IMPORTS",
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
 * resolveKotiiScriptsInternalImports resolves imports from kotii' internals during
 * development time. This is mainly done for modules in /kotii-land
 *
 */
export const resolveKotiiScriptsInternalImports = (specifier) => {
  if (!isBuiltin(specifier) && /^\/kotii-land/.test(specifier)) {
    let kotiiExportsPath = `${kotiiRootPath}${specifier}`;
    let urlLized = pathToFileURL(kotiiExportsPath).href;
    loggas.resolve.debug(
      "THE SPECIFIER FOR kotii PATH",
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
export const resolveKotiiUserApiPlugins = (specifier) => {
  if (!isBuiltin(specifier) && /^\/kotii-user-api/.test(specifier)) {
    let basePath = getPagesBasePath();
    loggas.resolve.debug("API PLUGINS PATH", basePath);

    let fullPath = path.resolve(basePath, "api/index.js");
    loggas.resolve.debug("THE FULL PATH", fullPath);

    return {
      url: pathToFileURL(fullPath).href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};

// export const resolveUserlandImports = (specifier) => {
//   loggas.resolve.debug("KOTII LAND USER LAND", specifier);
//   if (!isBuiltin(specifier) && /^\/kotii-user-land-aliase\//.test(specifier)) {
//     loggas.resolve.debug("THE SPECIFIER FOR PAGES PATH", specifier);
//     let basePath = getPagesBasePath(specifier);

//     let aliaseTruePath = Object.keys(KOTII_USER_LAND_ALIASES).filter(
//       (aliase) => KOTII_USER_LAND_ALIASES[aliase].alias === specifier
//     );
//     let aliaseTruePathValue = KOTII_USER_LAND_ALIASES[aliaseTruePath[0]].value;
//     let aliasePossiblePath = `${basePath}${aliaseTruePathValue}`;

//     try {
//       let livingPath = guessPathExtension(aliasePossiblePath);
//       return {
//         url: pathToFileURL(`${livingPath}`).href,
//         shortCircuit: true,
//       };
//     } catch (error) {
//       console.log(
//         "THE APP HAS ERRORED",
//         error,
//         "THE ERRORED PATH",
//         aliasePossiblePath
//       );
//     }
//   } else {
//     return false;
//   }
// };
// export const resolveKotiiInternalImports = (specifier) => {
//   loggas.resolve.debug("KOTII LAND USER LAND", specifier);
//   if (!isBuiltin(specifier) && /^@kotii\/_il(\/.*)?$/.test(specifier)) {
//     loggas.resolve.debug("THE SPECIFIER FOR INTERNAL IMPORTS", specifier);
//     // let basePath = getPagesBasePath(specifier);

//     // let aliaseTruePath = Object.keys(KOTII_USER_LAND_ALIASES).filter(
//     //   (aliase) => KOTII_USER_LAND_ALIASES[aliase].alias === specifier
//     // );
//     // let aliaseTruePathValue = KOTII_USER_LAND_ALIASES[aliaseTruePath[0]].value;

//     let aliasePossiblePath = `${KOTII_INTERNAL_ALIASES[specifier]}`;
//     loggas.resolve.debug(
//       "THE SPECIFIER FOR INTERNAL IMPORTS: FULL PATH",
//       aliasePossiblePath
//     );
//     console.log("THE POSSIBLE PATH", aliasePossiblePath);

//     try {
//       let livingPath = guessPathExtension(aliasePossiblePath);
//       return {
//         url: pathToFileURL(`${livingPath}`).href,
//         shortCircuit: true,
//       };
//     } catch (error) {
//       console.log(
//         "THE APP HAS ERRORED",
//         error,
//         "WITH PATH",
//         aliasePossiblePath
//       );
//     }
//   } else {
//     return false;
//   }
// };

export const guessPathExtension = (guessPath) => {
  console.log("THE GUESSS", guessPath);
  if (fs.existsSync(guessPath)) return guessPath;
  let livingExtension = guessPath;
  for (let ext = 0; ext < extensions.length; ext++) {
    let guessPathWithExtension = `${guessPath}${extensions[ext]}`;
    if (fs.existsSync(guessPathWithExtension)) {
      livingExtension = guessPathWithExtension;
      break;
    }
  }

  if (livingExtension === guessPath)
    throw new Error(
      `Node-Kotiijs-Resolve: requested file does not exist:${livingExtension}`
    );

  return livingExtension;
};

export const resolveVirtualModule = (specifier) => {
  if (specifier.startsWith("virtual:static-module-graph")) {
    return {
      url: specifier,
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
 * the kotii path imply that we are using kotii's folder root as our base.
 *
 */

export const getPagesBasePath = () => {
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
export const doMeta = (specifier) => {
  if (meta && meta?.aliases) {
    return meta.aliases[specifier];
  } else {
    return false;
  }
};

export const loadMeta = () => {
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

export const saveKotiiAssetsMeta = () => {
  let metaPath = USER_LAND_ALIASES[USER_LAND_ALIAS_ASSETS_MANIFEST];
  console.log("SAVE ASSETS MANIFEST PATH", metaPath);
  fs.writeFileSync(metaPath, JSON.stringify(kotiiAssetsMeta, null, 2));

  // metaChecked = true;
};

export const doInlinedPngs = (fileUrl, fName) => {
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

const getCssFromSass = async (fileUrl, fName) => {
  loggas.load.debug("SASS TO CSSS", fileUrl);

  let cssFromSass = sassToCssConverter(fileUrl);
  let modulesResult = "";
  if (!GLOBAL_STYLES_REGEX.test(fileUrl)) {
    if (!CSS_MODULES_REGEX.test(fileUrl)) {
      // saveStyles(cssFromSass);
      runFontsCheck(cssFromSass, fileUrl);
      modulesResult = await renderCssModules(
        cssFromSass,
        kotiiModulesMeta,
        MODULES_SPECIFIERS[fileUrl]
      );

      saveCssModulesMap(MODULES_SPECIFIERS[fileUrl].shortName, {
        currentOriginalAst: modulesResult.cssAst,
        pathContext: modulesResult.pathContext,
      });
      return `export default ${JSON.stringify(fName)}`;
    }
    loggas.load.debug("SASS TO CSSS. IS MODULES", fileUrl);
    modulesResult = await renderCssModules(
      cssFromSass,
      kotiiModulesMeta,
      MODULES_SPECIFIERS[fileUrl]
    );
    // saveStyles(modulesResult.css);
    runFontsCheck(modulesResult.css, fileUrl);
    saveCssModulesMap(
      MODULES_SPECIFIERS[fileUrl].shortName,
      modulesResult.cssModules
    );
  } else {
    runFontsCheck(cssFromSass, fileUrl);
    return `export default ${JSON.stringify(fName)}`;
  }

  return `export default ${JSON.stringify(modulesResult.cssModules.modules)}`;
};

const getCssFromLess = async (fileUrl, fName) => {
  loggas.load.debug("LESS TO CSSS", fileUrl);

  let cssFromLess = await lessToCssConverter(fileUrl, fName);
  let modulesResult = "";

  if (!GLOBAL_STYLES_REGEX.test(fileUrl)) {
    if (!CSS_MODULES_REGEX.test(fileUrl)) {
      // saveStyles(cssFromLess);
      runFontsCheck(cssFromLess, fileUrl);
      modulesResult = await renderCssModules(
        cssFromLess,
        kotiiModulesMeta,
        MODULES_SPECIFIERS[fileUrl]
      );
      saveCssModulesMap(MODULES_SPECIFIERS[fileUrl].shortName, {
        currentOriginalAst: modulesResult.cssAst,
        pathContext: modulesResult.pathContext,
      });
      return `export default ${JSON.stringify(fName)}`;
    }
    modulesResult = await renderCssModules(
      cssFromLess,
      kotiiModulesMeta,
      MODULES_SPECIFIERS[fileUrl],
      true
    );
    // saveStyles(modulesResult.css);
    runFontsCheck(modulesResult.css, fileUrl);
    saveCssModulesMap(MODULES_SPECIFIERS[fileUrl].shortName, {
      ...modulesResult.cssModules,
      currentOriginalAst: modulesResult.cssAst,
    });
  } else {
    runFontsCheck(cssFromLess, fileUrl);
    return `export default ${JSON.stringify(fName)}`;
  }

  return `export default ${JSON.stringify(modulesResult.cssModules.modules)}`;
};

const getCssFromStylus = async (fileUrl, fName) => {
  loggas.load.debug("Stylus TO CSSS", fileUrl);

  let cssFromStylus = await stylusToCssConverter(fileUrl, fName);
  let modulesResult = "";
  if (!GLOBAL_STYLES_REGEX.test(fileUrl)) {
    if (!CSS_MODULES_REGEX.test(fileUrl)) {
      saveStyles(cssFromStylus);
      modulesResult = await renderCssModules(
        cssFromStylus,
        kotiiModulesMeta,
        MODULES_SPECIFIERS[fileUrl]
      );
      saveCssModulesMap(MODULES_SPECIFIERS[fileUrl].shortName, {
        currentOriginalAst: modulesResult.cssAst,
        pathContext: modulesResult.pathContext,
      });
      return `export default ${JSON.stringify(fName)}`;
    }
    modulesResult = await renderCssModules(
      cssFromStylus,
      kotiiModulesMeta,
      MODULES_SPECIFIERS[fileUrl]
    );

    saveStyles(modulesResult.css);
    saveCssModulesMap(
      MODULES_SPECIFIERS[fileUrl].shortName,
      modulesResult.cssModules
    );
  } else {
    saveStyles(cssFromStylus);
    return `export default ${JSON.stringify(fName)}`;
  }

  return `export default ${JSON.stringify(modulesResult.cssModules.modules)}`;
};

const getCss = async (fileUrl, fName) => {
  loggas.load.debug("CSS RENDER", fileUrl);

  let cssContent = fs.readFileSync(fileUrl, { encoding: "utf8" });
  let modulesResult = "";

  if (!GLOBAL_STYLES_REGEX.test(fileUrl)) {
    if (!CSS_MODULES_REGEX.test(fileUrl)) {
      modulesResult = await renderCssModules(
        cssContent,
        kotiiModulesMeta,
        MODULES_SPECIFIERS[fileUrl]
      );
      saveStyles(modulesResult.css, modulesResult?.allImports || null);
      saveCssModulesMap(MODULES_SPECIFIERS[fileUrl].shortName, {
        // currentOriginalAst:modulesResult.cssAst,
        // pathContext: modulesResult.pathContext
        ...modulesResult,
        css: null,
      });
      return `export default ${JSON.stringify(fName)}`;
    }
    modulesResult = await renderCssModules(
      cssContent,
      kotiiModulesMeta,
      MODULES_SPECIFIERS[fileUrl]
    );

    saveStyles(modulesResult.css);
    saveCssModulesMap(
      MODULES_SPECIFIERS[fileUrl].shortName,
      modulesResult.cssModules
    );
  } else {
    saveStyles(cssContent);
    return `export default ${JSON.stringify(fName)}`;
  }

  return `export default ${JSON.stringify(modulesResult.cssModules.modules)}`;
};

export const saveStyles = (styles, remoteImports = null) => {
  let json = null;
  if (!JSON_STYLES_PATH_FIRSTTIME_USE && fs.existsSync(JSON_STYLES_PATH)) {
    JSON_STYLES_PATH_FIRSTTIME_USE = true;
    json = json;
  } else if (fs.existsSync(JSON_STYLES_PATH)) {
    json = fs.readFileSync(JSON_STYLES_PATH, {
      encoding: "utf8",
    });
  }
  if (!JSON_STYLES_PATH_FIRSTTIME_USE) {
    JSON_STYLES_PATH_FIRSTTIME_USE = true;
  }
  let newJson = !json ? json : JSON.parse(json);
  if (!newJson || newJson.length === 0) {
    newJson = remoteImports
      ? [`${remoteImports.toString()} ${styles}`]
      : [styles];
  } else {
    if (remoteImports) {
      newJson.unshift(remoteImports.toString());
      newJson.push(styles);
    } else {
      newJson.push(styles);
    }
  }
  fs.writeFileSync(JSON_STYLES_PATH, JSON.stringify(newJson), {
    encoding: "utf8",
  });
};

export const saveCssModulesMap = (id, idModules) => {
  let json = null;
  if (
    !JSON_STYLES_PATH_MAP_FIRSTTIME_USE &&
    fs.existsSync(JSON_STYLES_MAP_PATH)
  ) {
    JSON_STYLES_PATH_MAP_FIRSTTIME_USE = true;
    json = json;
  } else if (fs.existsSync(JSON_STYLES_MAP_PATH)) {
    json = fs.readFileSync(JSON_STYLES_MAP_PATH, {
      encoding: "utf8",
    });
  }

  if (!JSON_STYLES_PATH_MAP_FIRSTTIME_USE) {
    JSON_STYLES_PATH_MAP_FIRSTTIME_USE = true;
  }

  let newJson = !json ? json : JSON.parse(json);
  if (!newJson || newJson.length === 0) {
    newJson = {
      [id]: idModules,
    };
  } else {
    newJson[id] = idModules;
  }

  fs.writeFileSync(JSON_STYLES_MAP_PATH, JSON.stringify(newJson, null, 2));
};

export const storeCssModuleSpecifier = (pathContext) => {
  MODULES_SPECIFIERS[pathContext.fileFullPath] = {
    shortName: pathContext.fileUserRequest,
    pathContext,
  };
  loggas.resolve.debug("THE MODULES SPECIFIER", MODULES_SPECIFIERS);
};

export const storeFileModuleSpecifier = (pathContext) => {
  MODULES_FILE_SPECIFIER[pathContext.fileFullPath] = {
    shortName: pathContext.fileUserRequest,
    pathContext,
  };
};

export const processImageFiles = (fullUrl, filename, fileExtension) => {
  let fileLoaderConfig =
    meta && meta.fileLoader ? meta.fileLoader : FILE_LOADER_DEFAULT;
  let fileConfig = {
    extension: fileExtension,
    fullUrl,
    filename,
    processor: "nodejs",
  };

  let loadedFileResult = loadFile(fileLoaderConfig, fileConfig);
  loggas.load.debug("The LoadedFileResult", loadedFileResult);

  kotiiAssetsMeta[
    escapePeriodsOnPaths(MODULES_FILE_SPECIFIER[fullUrl].shortName)
  ] = {
    content: loadedFileResult.content,
    inlined: loadedFileResult.inlined,
    pathContext: MODULES_FILE_SPECIFIER[fullUrl].pathContext,
  };

  if (!timerActive) {
    timerActive = true;
    setTimeout(() => {
      timerActive = false;
      saveKotiiAssetsMeta();
    }, 1000);
  }
  return `export default ${JSON.stringify(loadedFileResult.content)}`;
};

export const escapePeriodsOnPaths = (escapeString) => {
  //  console.log("THE ESCAPED STRING",escapeString.replace())
  let regexPattern = /^(\.{1,2})(?=\/)/;
  const match = escapeString.match(regexPattern);
  // console.log("THE REGEX MATCH FOR", escapeString, match);
  if (!match) return escapeString;
  // let dotsNum = match[1].length;
  let matchCopy = match[1];
  let matchCopyReplaced = matchCopy.replace(/\./g, ESCAPE_CHARACTER);
  // console.log("DOTS SPLIT", match[1].split(""), matchCopyReplaced);
  // console.log("Total number of dots for:", escapeString, dotsNum);
  // console.log(
  //   "STRING ESCAPED",
  //   escapeString.replace(matchCopy, matchCopyReplaced)
  // );
  return escapeString.replace(matchCopy, matchCopyReplaced);
};

const extractFile = (str) => {
  const match = str.match(/\/[^\s:]+?\.(?:[jt]sx?)/);
  return match ? match[0] : null;
};

const extractStackFrames = (stack) =>
  Array.from(stack.matchAll(/at\s+([^(]+)\s+\(([^:]+):(\d+):(\d+)\)/g)).map(
    ([_, fn, file, line, col]) => ({
      fn: fn.trim(),
      file,
      line: +line,
      col: +col,
    })
  );

export function parseLoaderError(err) {
  // console.log("PARSE ERROR",err)
  return {
    type: err.name || "Error",
    file: extractFile(err.message || ""),
    message: (err.message || "").replace(/^.*?:\s*/, ""),
    line: err.loc?.line ?? null,
    column: err.loc?.column ?? null,
    reasonCode: err.reasonCode ?? null,
    code: err.code ?? null,
    stackFrames: extractStackFrames(err.stack || ""),
  };
}

export function prettyPrintError(parsed) {
  // console.log("PRETTY PRINTING",parsed)
  const header = chalk.bgRed.white.bold(` ${parsed.type} `);
  const filePath = parsed.file
    ? chalk.cyan(parsed.file)
    : chalk.gray("(unknown file)");
  const loc = parsed.line
    ? chalk.yellow(`:${parsed.line}:${parsed.column || 0}`)
    : "";

  const message = chalk.redBright(parsed.message);
  const reason = parsed.reasonCode
    ? chalk.gray(`Reason: ${parsed.reasonCode}`)
    : "";

  const body = [
    `${chalk.bold("File:")} ${filePath}${loc}`,
    `${chalk.bold("Message:")} ${message}`,
    reason && `${chalk.bold(reason)}`,
  ]
    .filter(Boolean)
    .join("\n");

  const box = boxen(body, {
    padding: 1,
    borderColor: "red",
    borderStyle: "round",
  });

  console.error(`${header}\n${box}`);
}

export function showCodeSnippet(file, line, context = 2) {
  if (!file || !fs.existsSync(file)) return "";
  const lines = fs.readFileSync(file, "utf8").split("\n");
  const start = Math.max(0, line - context - 1);
  const end = Math.min(lines.length, line + context);
  return lines
    .slice(start, end)
    .map((l, i) => {
      const num = start + i + 1;
      const marker = num === line ? chalk.red(">") : " ";
      return `${marker} ${chalk.gray(String(num).padStart(3))} | ${l}`;
    })
    .join("\n");
}

const runFontsCheck = (css, fileUrl) => {
  if (FONT_FACE_BLOCK_REGEX.test(css, fileUrl)) {
    console.log("THE MATCHES.font font-face");
    css = replaceRelativeFontFaceUrlsToAbsolute(css, fileUrl);
    if (FONTS_META.length > 0) storeFontMeta();
    saveStyles(css);
  } else {
    saveStyles(css);
  }
};

const replaceRelativeFontFaceUrlsToAbsolute = (css, basePath) => {
  console.log("THE MATCHES.font base", basePath);
  return css.replace(FONT_FACE_BLOCK_REGEX, (block) => {
    console.log("THE MATCHES.font @replace block", block);
    return block.replace(URL_REGEX, (match, quote, url) => {
      console.log("THE MATCHES.CSS @replace block.replace", match, quote, url);
      let foldersUp = pathLevelsUp(url);
      let absoluteFromRelativePath = `/${replaceRelativeUrlsLevels(url)}`;
      let fontFileParentUrlPieces = basePath.trim().split("/").filter(Boolean);
      const { absoluteUrl } = createFontsMeta({
        foldersUp,
        absoluteFromRelativePath,
        fontFileParentUrlPieces,
        relativePath: match,
        parenPath: basePath,
      });

      // Ignore already-absolute URLs (http, https, data, blob, protocol-relative)
      if (/^(?:[a-z]+:|\/\/)/i.test(url)) {
        return match;
      }

      // const absoluteUrl = path.resolve(basePath,url)
      console.log("THE ABSOLUTE PATH", absoluteUrl);
      return `url(${quote}${absoluteUrl}${quote})`;
    });
  });
};

const pathLevelsUp = (relativeUrl) =>
  relativeUrl.split("/").filter((segment) => segment === "..").length;
const replaceRelativeUrlsLevels = (relativeUrl) => {
  return relativeUrl.replace(RELATIVE_URLS_PATH_LEVELS_REGEX, "");
};

const createFontsMeta = ({
  foldersUp,
  absoluteFromRelativePath,
  fontFileParentUrlPieces,
  relativePath,
  parenPath,
}) => {
  console.log(
    "THE MATCHES.font foldersUp",
    foldersUp,
    absoluteFromRelativePath,
    fontFileParentUrlPieces
  );
  let absRelPathPieces = absoluteFromRelativePath.split("/");
  let fontFileName = absRelPathPieces[absRelPathPieces.length - 1];

  let absoluteUrl,
    fontFullPath,
    errorMessage = `The @Font-face url contained in file: ${parenPath} as: ${relativePath} Does not exist`;

  if (!foldersUp) {
    fontFileParentUrlPieces.pop();
    fontFileParentUrlPieces.push(fontFileName);
    fontFullPath = fontFileParentUrlPieces.join("/");
    if (!fs.existsSync(fontFullPath)) {
      console.log("THE ERROR MESSAGE", errorMessage);
      throw new Error(errorMessage);
    }
    absoluteUrl = `/assets/fonts/${fontFileName}`;
  } else {
    let topLevelPosition = fontFileParentUrlPieces.length - (foldersUp + 2);
    let relativePathTopLevelFolder = fontFileParentUrlPieces[topLevelPosition];
    fontFullPath = `/${fontFileParentUrlPieces
      .splice(0, topLevelPosition + 1)
      .join("/")}${absoluteFromRelativePath}`;
    console.log(
      "THE RELATIVE TOP LEVEL",
      relativePathTopLevelFolder,
      topLevelPosition,
      fontFullPath
    );
    if (!fs.existsSync(fontFullPath)) throw new Error(errorMessage);
    absoluteUrl = `/assets/fonts/${fontFileName}`;
  }

  FONTS_META.push({
    fontPath: fontFullPath,
    relativePath: relativePath,
    folderTo: "fonts",
    fileName: fontFileName,
  });
  return {
    absoluteUrl: absoluteUrl,
  };
};
const storeFontMeta = () => {
  let json = null;
  if (
    !JSON_STYLES_FONTS_PATH_FIRSTTIME_USE &&
    fs.existsSync(JSON_STYLES_FONTS_PATH)
  ) {
    JSON_STYLES_FONTS_PATH_FIRSTTIME_USE = true;
    json = json;
  } else if (fs.existsSync(JSON_STYLES_FONTS_PATH)) {
    json = fs.readFileSync(JSON_STYLES_FONTS_PATH, {
      encoding: "utf8",
    });
  }
  if (!JSON_STYLES_FONTS_PATH_FIRSTTIME_USE) {
    JSON_STYLES_FONTS_PATH_FIRSTTIME_USE = true;
  }
  let newJson = !json ? json : JSON.parse(json);
  if (!newJson || newJson.length === 0) {
    newJson = FONTS_META;
  } else {
    newJson = [...newJson, ...FONTS_META];
  }
  fs.writeFileSync(JSON_STYLES_FONTS_PATH, JSON.stringify(newJson), {
    encoding: "utf8",
  });
  FONTS_META = [];
};

const createStaticGenerationGlobals = () => {
  loggas.resolve.debug("CREATE STATIC GLOBALS");
  global.MODULE_GRAPH_FOR_STATIC_GENERATION__ = new Map();
  global.REGISTER_MODULE = function (file, fileMetaData) {
    MODULE_GRAPH_FOR_STATIC_GENERATION.set(file, {
      externals: new Set(fileMetaData.externals || []),
      deps: new Set(fileMetaData.deps || []),
      imports: fileMetaData.imports || {},
    });
  };
};

const loadVirtualModule = () => {
  const serialized = JSON.stringify(
    [...MODULE_GRAPH_FOR_STATIC_GENERATION.entries()].map(([url, data]) => [
      url,
      {
        externals: data.externals,
        deps: [...data.deps],
        imports: data.imports,
        reactOptHooks: data.reactOptHooks,
      },
    ])
  );
  const resolvesSerialized = JSON.stringify(RESOLVE_SPECIFIER_TO_URL);
  let packagesFilesSerialized = {};
  JSON.stringify(
    [...PACKAGE_FILES.entries()].map((packageAsDep) => {
      packagesFilesSerialized[packageAsDep[0]] = { ...packageAsDep[1] };
    })
  );
  console.log("THE PACKAGES FILES", packagesFilesSerialized);

  return {
    format: "module",
    shortCircuit: true,
    source: `
        const  MODULE_GRAPH_FOR_STATIC_GENERATION = new Map(${serialized});
        const  RESOLVED_JSX_MODULES = new Object(${resolvesSerialized})
        const PACKAGES_FILES = ${JSON.stringify(packagesFilesSerialized)}
        export {RESOLVED_JSX_MODULES,MODULE_GRAPH_FOR_STATIC_GENERATION, PACKAGES_FILES}       
      `,
  };
};

const staticDepsResolver = (specifier) => {
  if (specifier.startsWith(".")) {
    let checkResults = resolvePagesImports(specifier);
    console.log("THE STATIC RESOLVER", checkResults);
    return specifier;
  } else {
    let checkResults = resolveAliasedImports(specifier);
    console.log("THE STATIC RESOLVER absolute", checkResults);
    return specifier;
  }
};

const initiateStaticStatus = () => {
  if (
    process?.env?.KOTII_MODE &&
    process.env.KOTII_MODE.toLowerCase() === "ssg"
  )
    isStaticMode = true;
};
const isJsxFile = (url) => {
  if (path.extname(url) === extJsx) return true;
  return false;
};
const isNotInResolveList = (specifier) => {
  if (RESOLVE_SPECIFIER_TO_URL[specifier]) return true;
  return false;
};

const saveTargetSpecifier = (specifier, shouldTerminate, parentURL) => {
  if (!isStaticMode) return;
  console.log("SPECIFIER.PARENT URL", specifier, "parent", parentURL);
  addFileAsPackageDep(specifier, shouldTerminate.url, parentURL);
  if (isJsxFile(shouldTerminate.url)) {
    if (!isNotInResolveList(specifier)) {
      RESOLVE_SPECIFIER_TO_URL[specifier] = {
        url: shouldTerminate.url,
        parentURL,
      };
    }
  }
};

const addFileAsPackageDep = (specifier, url, parentURL) => {
  if (isBuiltin(specifier)) return;
  console.log("SPECIFIER", specifier, "url", url, "parent url", parentURL);
  const owner = findOwningPackage(specifier, url);
  const files = ensurePackage(owner);

  files[specifier] = url;
  console.log("THE PARENT OWNER", owner);
  // if (owner) {
  //   PACKAGE_FILES.get(owner)[specifier] = url;
  // }

  // if (!specifier.startsWith(".") && !specifier.startsWith("/")) {
  //     if (!PACKAGE_FILES.has(specifier)) {
  //       PACKAGE_FILES.set(specifier, {});
  //     }

  //     PACKAGE_FILES.get(specifier)[specifier] = url;
  // }
};

const addDependencyFromLoad = (url) => {
  console.log("ADD DEP FROM LOAD", url);
  if (!isStaticMode) return;
  for (const files of PACKAGE_FILES.values()) {
    console.log("PACKAGES LIST FILE...", files);
    if (files[url]) {
      // this file belongs to that package
      files[url] = url;
    }
  }
};

const findOwningPackage = (specifier, url) => {
  const filePath = path.normalize(new URL(url).pathname);

  const nmIndex = filePath.lastIndexOf("node_modules");

  // External dependency
  if (nmIndex !== -1) {
    const afterNodeModules = filePath.slice(
      nmIndex + "node_modules".length + 1
    );

    const parts = afterNodeModules.split(path.sep);

    if (parts[0].startsWith("@")) {
      return `${parts[0]}/${parts[1]}`;
    }

    return parts[0];
  }

  // Local package (derived from specifier)
  if (specifier.startsWith(".")) {
    const dir = path.dirname(specifier);

    if (dir === ".") {
      return specifier;
    }

    return dir;
  }

  // fallback for unusual imports
  return specifier;
};

const ensurePackage = (pkg) => {
  if (!PACKAGE_FILES.has(pkg)) {
    PACKAGE_FILES.set(pkg, {});
  }

  return PACKAGE_FILES.get(pkg);
};

const findStyledComponentsPatterns = (sourceString, url) => {
  const filePath = path.normalize(new URL(url).pathname);
};
