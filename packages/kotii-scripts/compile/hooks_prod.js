import fs from "fs";
import { isBuiltin } from "node:module";
import { pathToFileURL } from "node:url";
import path from "path";
import { meta } from "../kotii-land/prod/manifest.js";
let workdir = `${process.cwd()}`;
let NODE_ENV = process.env.NODE_ENV;
let sep = path.sep;

let whiteListedUrls = [
  `${pathToFileURL(`${workdir}${sep}plugins${sep}react${sep}methods.js`)}`,
  `${pathToFileURL(`${workdir}${sep}build.js`)}`,
  `${pathToFileURL(`${workdir}${sep}public.js`)}`,
  `${pathToFileURL(`${workdir}${sep}app_.js`)}`,
];
let customExtensionsRegex = /\.(png|css|jpg|jpeg|gif)$/;

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

export async function resolve(specifier, context, nextResolve) {
  const { parentURL = workdir } = context;
  console.log(
    "RESOLVE specifier",
    specifier,
    "IS BUILT IN",
    isBuiltin(specifier),
    workdir
  );
  console.log("RESOLVE context", context, meta.compsSource);
  let shouldTerminate = false;

  shouldTerminate = resolveAliasedImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolveKotiiLandImports(specifier);
  if (shouldTerminate) return shouldTerminate;
  shouldTerminate = resolvePagesImports(specifier);
  if (shouldTerminate) return shouldTerminate;

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
    ? `${path.join(nodeModulesPath, "kotii-templates/javascript/ssr/build")}`
    : `${path.join(kotiiPath, "kotii-templates/javascript/ssr/build")}`;

  return resolvePath;
};
