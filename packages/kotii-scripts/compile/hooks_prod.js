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
  console.log(
    "RESOLVE specifier",
    specifier
    // specifier,
    // "IS BUILT IN",
    // isBuiltin(specifier)
  );
  // console.log("RESOLVE context", context, meta.compsSource);
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
      source = `export default ${JSON.stringify({ noApi: true })}`;
      return {
        format: "module",
        shortCircuit: true,
        source: source,
      };
    }
  }
  if (path.extname(urlInstance) === ".ktc") {
    let fileJsContent = fs.readFileSync(urlInstance, { encoding: "utf-8" });
    console.log("THE KTC FILE CONTENT", fileJsContent);
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
    console.log("THE IMAGE FILE CONTENT", fileJsContent[thisFileID]);
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
    console.log("SPECIAL ALIAS", specifier, specifierAlias);
    let fileUrl = pathToFileURL(`${workdir}${specifierAlias}`);

    let fileUrlExt = path.extname(specifierAlias);
    console.log("THE FILE EXTENSION", fileUrlExt);

    if (!fileUrlExt.trim()) {
      console.log("FILE EXTENSION NOT SPECIFIED", fileUrlExt);
      let pathUrl = `${workdir}${specifierAlias}`;
      let pathUrlFileExtension = extensions.filter((ext) => {
        if (fs.existsSync(`${pathUrl}${ext}`)) return true;
      });
      if (pathUrlFileExtension.length === 0) {
        throw new Error(
          "The specified path aliases does not have related file"
        );
      }
      console.log("PATH URL EXTENSION", pathUrlFileExtension);
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
  if (
    !isBuiltin(specifier) &&
    /\.kotii-land\/(pages|routes|bundle-imports)/.test(specifier)
  ) {
    console.log("THE PAGES PATH KOTII LAND PATH");
    let basePath = getPagesBasePath(specifier);
    console.log("THE PATH BASE", basePath);

    let fullPath =
      specifier.indexOf("pages") >= 0
        ? path.resolve(basePath, ".kotii-land/bundle-imports.js")
        : path.resolve(basePath, ".kotii-land/bundle-imports.js");
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
  console.log("THE PAGES RESOLVE-DEV-PROD IMPORT", specifier);
  if (!isBuiltin(specifier) && /^\/kotii-prod\//.test(specifier)) {
    console.log("THE SPECIFIER FOR PAGES PATH,  RESOLVE-DEV-PROD", specifier);
    let basePath = getPagesBasePath(specifier);
    // let specifierDuplicate = specifier
    // let specifierShortened = specifier.replace(/\/kotii-prod/);
    console.log("THE SPECIFIRE BASE PATH,  RESOLVE-DEV-PROD", basePath);

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
  console.log("KOTII RESOLVE PATH", resolvePath, fs.existsSync(resolvePath));

  return resolvePath;
};

const doMeta = (specifier) => {
  if (!meta) {
    let metaPath = path.resolve(workdir, "app.manifest.json");
    console.log("META:: MADE PATH", metaPath);
    if (fs.existsSync(metaPath)) {
      console.log("META:: EXISTS", metaPath);
      meta = JSON.parse(
        fs.readFileSync(metaPath, {
          encoding: "utf8",
        })
      );
      console.log("META:: CONTENT", meta);

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
  console.log("THE META PATH", metaPath);
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
  // console.log("THE KOTIILANDUSER BUNDLE", kotiiLandServerBundle);
};
const storeModuleSpecifier = (fileUrl, specifier) => {
  IMAGE_FILES_SPECIFIERS[fileUrl] = {
    shortName: specifier,
  };
};
const getThisFileID = (fileUrl) => {
  return IMAGE_FILES_SPECIFIERS[fileUrl].shortName;
};
