/* eslint-disable no-unused-vars */
import fs from "fs";
import { isBuiltin } from "node:module";
import { pathToFileURL } from "node:url";
import path from "path";
import { loggas, logger } from "kotii-logger";
let meta = null;
let kotiiLandServerBundle = null;
let workdir = `${process.cwd()}`;
let loadUserIsRunning = false;
let sep = path.sep;
const IMAGE_FILES_SPECIFIERS = {};
import { USER_LAND_ALIASES } from "kotii-internal/user";

let extensions = [".js", ".jsx", ".tsx", ".ts"];
let fileSpecifiers = [".gif", ".png", ".svg", ".jpg", ".jpeg"];

logger.setNameSpaces([
  { namespace: "nodejs:compilation:load", id: "load" },
  { namespace: "nodejs:compilation:resolve", id: "resolve" },
]);

export async function resolve(specifier, context, nextResolve) {
  const { parentURL = workdir } = context;
  console.log("RESOLVE SPECIFIER", specifier);
  if (specifier.startsWith("dot_")) {
    console.log("LOAD USER.KOTII", specifier);
    let url = new URL(specifier, parentURL);
    storeModuleSpecifier(`virtual:${specifier}`, specifier);
    return {
      url: `virtual:${specifier}`,
      shortCircuit: true,
    };
  }
  if (!kotiiLandServerBundle && !loadUserIsRunning) {
    loadUserKotiiLandBundle();
  }

  let shouldTerminate = false;
  shouldTerminate = resolveUserAliase(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolveAliasedImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  // shouldTerminate = resolveKotiiLandImports(specifier);
  // if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolvePagesImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolveDevProdPages(specifier);
  if (shouldTerminate) return shouldTerminate;
  // shouldTerminate = resolveKotiiUserApiPlugins(specifier);
  // if (shouldTerminate) return shouldTerminate;

  return nextResolve(specifier);
  // Take an `import` or `require` specifier and resolve it to a URL.
}
export async function load(url, context, nextLoad) {
  let urlInstance = new URL(url).pathname;
  if (url.indexOf("/api/") >= 0) {
    if (!fs.existsSync(urlInstance)) {
      let source = `export default ${JSON.stringify({ noApi: true })}`;
      return {
        format: "module",
        shortCircuit: true,
        source: source,
      };
    }
  }
  if (path.extname(urlInstance) === ".ktc") {
    let fileJsContent = fs.readFileSync(urlInstance, { encoding: "utf-8" });

    let source = `export default ${JSON.stringify(fileJsContent)}`;
    return {
      format: "module",
      shortCircuit: true,
      source: source,
    };
  }
  // console.log("THE URL INSTANCE", urlInstance)
  if (url.startsWith("virtual:dot_/")) {
    console.log("LOAD USER.KOTII load", IMAGE_FILES_SPECIFIERS, url);
    let thisFileID = getThisFileID(url);
    console.log("LOAD USER.KOTII thisFile", thisFileID);
    let fileJsContent = kotiiLandServerBundle.appImagesMap;
    console.log("LOAD USER.KOTII fileJsContent", fileJsContent);

    let source = `export default ${JSON.stringify(fileJsContent[thisFileID])}`;
    return {
      format: "module",
      shortCircuit: true,
      source: source,
    };
  }
  return nextLoad(url);
}

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
const resolveAliasedImports = (specifier) => {
  if (!isBuiltin(specifier) && doMeta(specifier)) {
    let specifierAlias = meta.aliases[specifier];
    let workdirAsBuild = getPagesBasePath();
    let fileUrl = pathToFileURL(`${workdirAsBuild}${specifierAlias}`);

    let fileUrlExt = path.extname(specifierAlias);

    if (!fileUrlExt.trim()) {
      let pathUrl = `${workdirAsBuild}${specifierAlias}`;
      let pathUrlFileExtension = extensions.filter((ext) => {
        if (fs.existsSync(`${pathUrl}${ext}`)) return true;
      });
      if (pathUrlFileExtension.length === 0) {
        throw new Error(
          "The specified path aliases does not have related file"
        );
      }

      fileUrl = `${fileUrl}${pathUrlFileExtension[0]}`;
    }

    return { url: fileUrl, shortCircuit: true };
  } else {
    return false;
  }
};
const resolveKotiiLandImports = (specifier) => {
  if (
    !isBuiltin(specifier) &&
    /\.kotii-land\/(pages|routes|bundle-imports)/.test(specifier)
  ) {
    let basePath = getPagesBasePath(specifier);

    let fullPath =
      specifier.indexOf("pages") >= 0
        ? path.resolve(basePath, ".kotii-land/bundle-imports.js")
        : path.resolve(basePath, ".kotii-land/bundle-imports.js");

    return {
      url: pathToFileURL(fullPath).href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};
const resolvePagesImports = (specifier) => {
  if (!isBuiltin(specifier) && /^\/src\//.test(specifier)) {
    let basePath = getPagesBasePath(specifier);

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
 * resolvePagesImports resolves a user's pages imports by checking if a specifier starts
 * with a forward slash and followed by a 'src' text. The paths are generated and requested by
 * kotii in both production and development runtime.
 *
 * This approach is not 100% reliable for our intended goal, but it works fine now because we filter
 * all the other absolute paths that begin with /src/ as aliased imports. Nonetheless, we will have
 * to re-look this approach and resolve the pages imports better.
 *
 */
const resolveDevProdPages = (specifier) => {
  if (!isBuiltin(specifier) && /^\/kotii-prod\//.test(specifier)) {
    let basePath = getPagesBasePath(specifier);
    // let specifierDuplicate = specifier
    // let specifierShortened = specifier.replace(/\/kotii-prod/);

    return {
      url: pathToFileURL(`${basePath}${specifier.replace(/\/kotii-prod/, "")}`)
        .href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};
const resolveKotiiUserApiPlugins = (specifier) => {
  if (!isBuiltin(specifier) && /^\/kotii-user-api/.test(specifier)) {
    let basePath = getPagesBasePath();

    let fullPath = path.resolve(basePath, "api/index.js");

    return {
      url: pathToFileURL(fullPath).href,
      shortCircuit: true,
    };
  } else {
    return false;
  }
};

const getPagesBasePath = () => {
  let resolvePath = `${path.join(workdir, "./build")}`;

  return resolvePath;
};

const doMeta = (specifier) => {
  if (!meta) {
    let metaPath = path.resolve(workdir, "build/.kotii-land/app.manifest.json");

    if (fs.existsSync(metaPath)) {
      meta = JSON.parse(
        fs.readFileSync(metaPath, {
          encoding: "utf8",
        })
      );

      if (meta?.aliases && meta.aliases[specifier]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    if (meta?.aliases) {
      return meta.aliases[specifier];
    } else {
      return false;
    }
  }
};
const loadUserKotiiLandBundle = () => {
  let metaPath = path.resolve(workdir, "./build/.kotii-land/bundle.js");
  console.log("THE META PATH ", metaPath);

  loadUserIsRunning = true;
  import(`${metaPath}`).then((imports) => {
    console.log("KOTII LAND RESOURCES", imports);
    kotiiLandServerBundle = imports;
    loadUserIsRunning = false;
  });
};
const storeModuleSpecifier = (fileUrl, specifier) => {
  console.log("THE FILE SPECIFIER", fileUrl, specifier);
  IMAGE_FILES_SPECIFIERS[fileUrl] = {
    shortName: specifier,
  };
};
const getThisFileID = (fileUrl) => {
  console.log("getThisFileID", fileUrl, IMAGE_FILES_SPECIFIERS);
  return IMAGE_FILES_SPECIFIERS[fileUrl].shortName;
};
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
