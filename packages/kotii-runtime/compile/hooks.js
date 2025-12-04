/* eslint-disable no-unused-vars */
import fs from "fs";
import { isBuiltin } from "node:module";
import { pathToFileURL } from "node:url";
import path from "path";

let meta = null;
let kotiiLandServerBundle = null;
let workdir = `${process.cwd()}`;
let loadUserIsRunning = false;
let sep = path.sep;
const IMAGE_FILES_SPECIFIERS = {};

let extensions = [".js", ".jsx", ".tsx", ".ts"];
let fileSpecifiers = [".gif", ".png", ".svg", ".jpg", ".jpeg"];

export async function resolve(specifier, context, nextResolve) {
  const { parentURL = workdir } = context;

  if (fileSpecifiers.includes(path.extname(specifier))) {
    let url = new URL(specifier, parentURL);
    storeModuleSpecifier(url.pathname, specifier);
  }
  if (!kotiiLandServerBundle && !loadUserIsRunning) {
    loadUserKotiiLandBundle();
  }

  let shouldTerminate = false;

  shouldTerminate = resolveAliasedImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolveKotiiLandImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolvePagesImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolveDevProdPages(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolveKotiiUserApiPlugins(specifier);
  if (shouldTerminate) return shouldTerminate;

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
  if (fileSpecifiers.includes(path.extname(urlInstance))) {
    let thisFileID = getThisFileID(urlInstance);
    let fileJsContent = kotiiLandServerBundle.appImagesMap;

    let source = `export default ${JSON.stringify(fileJsContent[thisFileID])}`;
    return {
      format: "module",
      shortCircuit: true,
      source: source,
    };
  }
  return nextLoad(url);
}

const resolveAliasedImports = (specifier) => {
  if (!isBuiltin(specifier) && doMeta(specifier)) {
    let specifierAlias = meta.aliases[specifier];

    let fileUrl = pathToFileURL(`${workdir}${specifierAlias}`);

    let fileUrlExt = path.extname(specifierAlias);

    if (!fileUrlExt.trim()) {
      let pathUrl = `${workdir}${specifierAlias}`;
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
  // let nodeModulesPath = `${path.join(workdir, "../node_modules")}`;
  // let kotiiPath = `${path.join(workdir, "..")}`;
  // console.log("KOTII NODE MODULES PATH", nodeModulesPath);
  // console.log("KOTII PATH", kotiiPath);
  // let inKotiiLand = fs.existsSync(`${kotiiPath}`);
  // let inUserLand = fs.existsSync(`${nodeModulesPath}`);
  // console.log("IS KOTII LAND", inKotiiLand, kotiiPath);
  // console.log("IS USER LAND", inUserLand, nodeModulesPath);
  // let resolvePath = inUserLand
  //   ? `${path.join(nodeModulesPath, "kotii-templates/javascript/ssr/build")}`
  //   : `${path.join(kotiiPath, "kotii-templates/javascript/ssr/build")}`;
  let resolvePath = `${path.join(workdir, "./build")}`;

  return resolvePath;
};

const doMeta = (specifier) => {
  if (!meta) {
    let metaPath = path.resolve(workdir, "app.manifest.json");

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

  loadUserIsRunning = true;
  import(`${metaPath}`).then((imports) => {
    kotiiLandServerBundle = imports;
    loadUserIsRunning = false;
  });

  // if (fs.existsSync(metaPath)) {
  //   kotiiLandServerBundle = fs.readFileSync(metaPath, {
  //     encoding: "utf8",
  //   });
  // }
};
const storeModuleSpecifier = (fileUrl, specifier) => {
  IMAGE_FILES_SPECIFIERS[fileUrl] = {
    shortName: specifier,
  };
};
const getThisFileID = (fileUrl) => {
  return IMAGE_FILES_SPECIFIERS[fileUrl].shortName;
};
