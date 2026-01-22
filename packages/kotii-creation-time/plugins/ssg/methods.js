/* eslint-disable no-unused-vars */
const methods = {};
import fs from "fs";
import path from "path";
import { Builder } from "xml2js";
const ASSETS_FOLDERS = {
  css: "css",
  fonts: "fonts",
  images: "images",
  js: "js",
  docs: "docs",
  data: "data",
  videos: "videos",
};
const URL_ATTRS = ["href", "src", "poster"];

const SRCSET_ATTRS = ["srcset"];

methods.init = function () {
  this.listens({
    "generate-static-content": this.handleStaticGeneration.bind(this),
  });
};

methods.handleStaticGeneration = function (data) {
  const self = this;
  const pao = self.pao;
  const makeFolderSync = pao.pa_makeFolderSync;
  const { payload } = data;
  const { dataToConfig } = payload;
  const { routes, routesObject, resources } = dataToConfig;
  const { appManifest } = resources;
  const { ssg = {} } = appManifest;
  const { useLocalRelativeUrls = false } = ssg;
  const getWorkingFolder = pao.pa_getWorkingFolder;

  self.debug("THE DATA OF SSG PLUGIN", dataToConfig);

  const setCall = data.callback;
  const cwd = getWorkingFolder();

  const BUILD = `${resources.appBuildFolder}`;

  const pathsTables = {};
  routes.forEach((route) => {
    pathsTables[route.path] = route.htmlPath;
  });

  self
    .renderApp(routes)
    // eslint-disable-next-line no-undef
    .then(({ htmlViews, styles } = rendered) => {
      self.debug("THE HTML on render app", htmlViews);

      const DIST = self.createDistFolder(
        `${resources.appFolder}${path.sep}dist`
      );
      self.debug("THE DIST FOLDER", DIST);
      self.copyPublicToDist(resources.appAssetsPublic, DIST, "index.html");
      self.copyPublicToDist(BUILD, DIST, ["index.html"]);
      fs.existsSync(`${DIST}${path.sep}index.html`)
        ? fs.rmSync(`${DIST}${path.sep}index.html`)
        : null;
      self.postBuildStaticResources({
        buildFolder: BUILD,
        distFolder: DIST,
        styles,
      });
      htmlViews.forEach((html) => {
        // let pagesFolder =  `${DIST}${path.sep}pages`
        // if(!fs.existsSync(pagesFolder)) makeFolderSync(pagesFolder)
        let pagePath = !html.staticPath.trim()
          ? []
          : html.staticPath.trim().split("/").filter(Boolean);

        if (useLocalRelativeUrls) {
          html.content = self.rewriteHtmlString(
            html.content,
            html,
            pathsTables
          );
        }

        if (pagePath.length > 1) {
          let fileName = pagePath.pop();
          console.log("THE PAGE PAGE", fileName, pagePath);
          let possibleFolderPath = "";
          pagePath.forEach((folder, i) => {
            console.log("THE FOLDER INDEX", i, folder);
            console.log("THE PREVIOUS FOLDER", pagePath[pagePath.length - i]);
            let currentFolderPath = `${DIST}${path.sep}${folder}`;
            if (!fs.existsSync(`${currentFolderPath}`)) {
              if (possibleFolderPath.trim()) {
                let pathToMake = `${possibleFolderPath}${path.sep}${folder}`;
                if (!fs.existsSync(pathToMake)) makeFolderSync(pathToMake);
                possibleFolderPath = pathToMake;
              } else {
                makeFolderSync(currentFolderPath);
                possibleFolderPath = currentFolderPath;
              }
            } else {
              possibleFolderPath = currentFolderPath;
            }
          });
          console.log("THE POSSIBLE FOLDER PATH", possibleFolderPath);

          self.savePageToFile(
            `${possibleFolderPath}/${html.name.toLowerCase()}.html`,
            html.content
          );
        } else {
          self.savePageToFile(
            `${DIST}${path.sep}${html.name.toLowerCase()}.html`,
            html.content
          );
        }

        // self.savePageToFile(
        //   `${DIST}${path.sep}${html.name.toLowerCase()}.html`,
        //   html.content
        // )
      });
      setCall({ message: "Static html has completed" });
    })
    .catch((err) => {
      self.debug("RENDERAPP REJECTED", err);
    });
};
methods.renderApp = function (views) {
  const self = this;
  const staticMetaData = {
    css: "index.css",
    js: "bootstrap.js",
    fonts: "fonts",
  };
  return new Promise((resolve) => {
    self.emit({
      type: "handle-react-static",
      data: {
        views: views,
        info: staticMetaData,
        staticRender: true,
        callback: (data) => {
          resolve(data);
        },
      },
    });
  });

  // {
  //   view: {
  //     match: '/',
  //     vHandler: 'react',
  //     title: 'REACT SERVE-SIDE RENDERING COMPONENT'
  //   },
  //   payload: {
  //     parsed: { url: '/', handler: '' },
  //     handler: '/home',
  //     request: {
  //       req: [IncomingMessage],
  //       res: [ServerResponse],
  //       next: [Function: next]
  //     }
  //   },
  //   callback: [Function: bound viewHandler]
  // }
};
methods.cleanBuildFolder = function (view, setCall) {
  const self = this;

  self.emit({
    type: "handle-react-view",
    data: {
      view: view,
      staticRender: true,
      callback: (err, data) => {
        setCall({ message: "handleStaticGeneration in action" });
      },
    },
  });

  // {
  //   view: {
  //     match: '/',
  //     vHandler: 'react',
  //     title: 'REACT SERVE-SIDE RENDERING COMPONENT'
  //   },
  //   payload: {
  //     parsed: { url: '/', handler: '' },
  //     handler: '/home',
  //     request: {
  //       req: [IncomingMessage],
  //       res: [ServerResponse],
  //       next: [Function: next]
  //     }
  //   },
  //   callback: [Function: bound viewHandler]
  // }
};
methods.copyPublicToDist = function (from, to, ignores = []) {
  const self = this;
  let ignoresMerged = [...ignores, ...self.handleIgnores(from)];
  self.debug("copying from", from, to, "with merged ignores", ignoresMerged);
  fs.cpSync(from, to, {
    recursive: true,
    filter: (fi) => {
      self.debug("THE FILE BEING PROCESSED", fi, ignores.includes(fi));
      // if (ignores.includes(fi)) return true;
      // let thisToReturn = fi !== ignore;
      let thisToReturn = !ignoresMerged.includes(fi);
      // self.debug("THIS TO RETURN", thisToReturn);
      return thisToReturn;
    },
  });
};
methods.createDistFolder = function (filepath) {
  const self = this;
  const pao = self.pao;
  const makeFolderSync = pao.pa_makeFolderSync;
  const isExistingDir = pao.pa_isExistingDir;
  if (isExistingDir(filepath)) fs.rmSync(filepath, { recursive: true });
  makeFolderSync(filepath);
  return filepath;
};
methods.savePageToFile = function (filepath, content) {
  const self = this;
  const pao = self.pao;
  const saveToFile = pao.pa_saveToFile;

  saveToFile(filepath, content);
};
methods.postBuildStaticResources = async function (context) {
  const self = this;
  self.debug("THE CONTEXT AGGREGATE PRODUCTION", context);
  let cssSavePath = `${context.distFolder}/css/index.css`;
  let files = await self.readFiles(`${context.buildFolder}/app/css`);
  let cssJoined = files.join(" ");
  cssJoined += context.styles;
  // let kotiiBundleSavePath = `${context.appBuildFolder}/.kotii-land/bundle.js`;
  // let kotiiBundleSaveImportsPath = `${context.appBuildFolder}/.kotii-land/bundle-imports.js`;
  // let cssModulesMap = self.aggregateAppKotiiMeta(context);
  // let css = self.aggregateAppCss(context);
  // let images = self.aggregateAppImages(context);
  // console.log("THE IMAGES", images, cssSavePath);
  // console.log("THE CSS MODULES", cssModulesMap);
  // let kotiiBundleSaveContent = `
  // const ƒ = ${JSON.stringify(cssModulesMap)};
  // const appImagesMap = ${JSON.stringify(images)};
  // export {appModules, appImagesMap};
  // `;
  self.createDistFolder(`${context.distFolder}${path.sep}css`);
  // self.createDistFolder(
  //       `${context.distFolder}${path.sep}img`
  //     );
  // self.copyImageFilesSync(context.buildFolder,`${context.distFolder}/img`,['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'])
  fs.writeFileSync(cssSavePath, cssJoined);
  // fs.writeFileSync(kotiiBundleSavePath, kotiiBundleSaveContent);
  // fs.writeFileSync(kotiiBundleSaveImportsPath, `${context.pagesSourceCode}`);
};

methods.readFiles = async function (directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);

    // Filter for only .css files
    const cssFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".css"
    );
    const contents = [];

    for (const file of cssFiles) {
      const filePath = path.join(directoryPath, file);
      const content = fs.readFileSync(filePath, "utf8");
      // console.log(`--- Content of ${file} ---`);
      // console.log(content);
      contents.push(content);
    }
    return contents;
  } catch (err) {
    console.error("Error reading directory:", err);
  }
};

methods.copyImageFilesSync = function (sourceDir, destDir, imageExtensions) {
  try {
    // 1. Ensure the destination directory exists
    fs.mkdirSync(destDir, { recursive: true });

    // 2. Read all files in the source directory
    const files = fs.readdirSync(sourceDir);

    console.log(`Found ${files.length} files in source directory.`);

    let copiedCount = 0;
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);
      const fileExt = path.extname(file).toLowerCase();

      // 3. Check if the file is an image based on its extension
      if (imageExtensions.includes(fileExt)) {
        // 4. Copy the image file to the destination directory
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied: ${file}`);
        copiedCount++;
      }
    }
    console.log(`\nOperation complete. Total images copied: ${copiedCount}`);
  } catch (err) {
    console.error("An error occurred during file operations:", err);
  }
};

methods.handleIgnores = function (root) {
  const self = this;
  let ignores = ["lazy", "app", "index.js"];
  let absoluteIgnores = ignores.map((ig) => {
    return `${root}${path.sep}${ig}`;
  });
  // jsonConfig["ignore"] = [...absoluteIgnores];
  self.debug("THE IGNORE STRING", absoluteIgnores);
  return absoluteIgnores;
};
methods.getDepthFromHtmlPath = function (htmlPath) {
  return htmlPath.replace(/^\//, "").split("/").slice(0, -1).length;
};

methods.shouldUrlLocalized = function (url) {
  if (!url || !url.trim()) return false;
  if (url.startsWith("#")) return false;
  if (url.startsWith("//")) return false;
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url)) return false;
  return true;
};

methods.localizeUrl = function (url, depth) {
  const self = this;

  console.log("DEPTH-SIZED", url, depth);
  const prefix = depth === 0 ? "" : "../".repeat(depth);
  let localized = "";

  if (url.startsWith("/")) {
    localized = prefix + url.slice(1);
    console.log("THE LOCALIZED URL ROOT URL", localized);
    return localized;
  }

  localized = prefix + url;
  console.log("THE LOCALIZED URL", localized);
  return localized;
};

methods.localizeHrefUrl = function (url, htmlPath, urlPath = null) {
  const self = this;

  const normalized = self.normalizeLinkHref(url);

  if (!urlPath) {
    return self.localizeUrl(normalized, self.getDepthFromHtmlPath(htmlPath));
  } else {
    let urlPathDepth = self.getDepthFromHtmlPath(urlPath);
    let pageDepth = self.getDepthFromHtmlPath(htmlPath);
    console.log(
      "PAGE START",
      htmlPath,
      "ENDPOINT",
      urlPath,
      "PAGE D",
      pageDepth,
      "URL D",
      urlPathDepth
    );
    if (pageDepth === urlPathDepth) {
      console.log("EQUAL DEPTH");
      if (htmlPath === urlPath) {
        return `.${normalized}`;
      }
      if (pageDepth > 0) {
        return self.localizeUrl(urlPath, urlPathDepth);
      }
      return self.localizeUrl(normalized, urlPathDepth);
    } else if (pageDepth > urlPathDepth) {
      console.log("PAGE HIGHER");
      return self.localizeUrl(normalized, pageDepth);
    } else {
      console.log("PAGE LOWER", normalized);
      let normal = urlPath.startsWith("/") ? urlPath.slice(1) : urlPath;
      return self.normalizeLinkHref(normal);
    }
  }
};

methods.attrRegex = function (attr) {
  return new RegExp(`${attr}\\s*=\\s*("([^"]*)"|'([^']*)')`, "gi");
};

methods.normalizeRootPath = function (path) {
  const parts = [];

  for (const p of path.split("/")) {
    if (!p || p === ".") continue;
    if (p === "..") parts.pop();
    else parts.push(p);
  }

  return "/" + parts.join("/");
};

methods.normalizeLinkHref = function (url) {
  const self = this;
  if (!self.shouldAppendHtml(url)) return url;

  const [path, rest] = url.split(/(?=[?#])/);
  return `${path}.html${rest ?? ""}`;
};

methods.hasExtension = function (path) {
  return /\.[a-zA-Z0-9]+$/.test(path);
};
methods.shouldAppendHtml = function (url) {
  const self = this;
  // strip query + fragment first
  const clean = url.split(/[?#]/)[0];

  if (clean.endsWith("/")) return false;
  if (clean.endsWith(".html")) return false;
  if (self.hasExtension(clean)) return false;

  return true;
};
methods.toRootPath = function (url, htmlPath) {
  const self = this;
  if (!self.shouldUrlLocalized(url)) return null;

  if (url.startsWith("/")) return self.normalizeRootPath(url);

  const baseDir = htmlPath.replace(/\/[^/]+$/, "");
  return self.normalizeRootPath(`${baseDir}/${url}`);
};

methods.validateAsset = function (url, htmlPath, assetIndex) {
  const self = this;
  const rootPath = self.toRootPath(url, htmlPath);
  if (!rootPath) return true;
  return assetIndex.has(rootPath);
};

methods.rewriteHtmlString = function (html, page, routesTable) {
  const self = this;
  let out = html;

  console.log("THE ROUTE TABLE", routesTable);
  for (const attr of URL_ATTRS) {
    out = out.replace(self.attrRegex(attr), (match, quoted, v1, v2, origin) => {
      console.log(
        "THE MATCH",
        match,
        "QUOTED",
        quoted,
        "V1",
        v1,
        "V2",
        v2,
        origin
      );
      const url = v1 ?? v2;

      // if (!self.validateAsset(url, page.htmlPath, assetIndex)) {
      //   console.warn(
      //     `⚠ Missing asset: ${url} (from ${page.htmlPath})`
      //   )
      // }
      let rewritten = "";
      if (!this.shouldUrlLocalized(url)) {
        rewritten = url;
        return `${attr}=${quoted[0]}${rewritten}${quoted[0]}`;
      } else {
        if (attr === "href") {
          rewritten = self.localizeHrefUrl(
            url,
            page.htmlPath,
            routesTable[url] || null
          );
          return `${attr}=${quoted[0]}${rewritten}${quoted[0]}`;
        } else {
          rewritten = self.localizeUrl(
            url,
            self.getDepthFromHtmlPath(page.htmlPath)
          );
          return `${attr}=${quoted[0]}${rewritten}${quoted[0]}`;
        }
      }

      // const rewritten = attr === "href" ? self.localizeHrefUrl(url,page.htmlPath) : self.localizeUrl(url, page.htmlPath)
      // return `${attr}=${quoted[0]}${rewritten}${quoted[0]}`
    });
  }

  // out = out.replace(self.attrRegex('srcset'), (match, quoted, v1, v2) => {
  //   const value = v1 ?? v2
  //   const rewritten = self.rewriteSrcset(value, page.htmlPath, assetIndex)
  //   return `srcset=${quoted[0]}${rewritten}${quoted[0]}`
  // })

  return out;
};

export default methods;
