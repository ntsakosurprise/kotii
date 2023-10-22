const methods = {};
const pathMatchPattern = /^\.|index|\.[t|j][sx|s]$/g;
methods.init = function () {
  // console.log('Bitbucket has been initialised')
  console.log("THE VALUE OF THIS devser");

  this.listens({
    "create-file-routes": this.handleFileRoutes.bind(this),
  });
};

methods.handleFileRoutes = async function (data) {
  const self = this;
  // console.log("HANDLE FILE ROUTES DATA", data);
  const { payload } = data;
  const { path: filePaths } = payload;
  console.log("FILE PATHS", filePaths);
  const pagesPaths = self.getPages(`${filePaths.appPagesFolder}/*.mjs`);
  console.log("PAGES PATHS", pagesPaths);
  console.log(
    "PROCESSED",
    self.createRouterComponents(pagesPaths, data.payload.path.appSrc)
  );
};

methods.getPages = function (filesToGet) {
  const self = this;
  console.log("FILETS TO GET", filesToGet);
  const files = self.globSync(filesToGet, { ignore: "node_modules/**" });
  return files;
};

methods.createRouterComponents = function (maps, pathy) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const saveToFile = pao.pa_saveToFile;
  const makeFolderSync = pao.pa_makeFolderSync;

  console.log("pages paths", maps);
  // makeFolderSync(`${pathy}/components/_pages`);

  let compsMaps = maps.map((contextModule) => {
    // const readFile = loadFile(contextModule);
    // console.log("COntext Module", contextModule);
    // console.log("our path", contextModule.replace(/pages/g, "_pages"));
    // saveToFile(contextModule.replace(/pages/g, "_pages"), readFile);
    return self.getItemPathAndFile(contextModule);
  });

  return compsMaps;
};

methods.getItemPathAndFile = function (item) {
  console.log("THE PAGES MAPS ITEM", item);
  const self = this;
  let patternMatch = item
    .replace(pathMatchPattern, "")
    .replace(/\[(.+)\]/g, ":$1")
    .replace(/\[\.{3}.+\]/, "*");
  // .replace(/\/$/, "");
  if (!/^\/$/.test(patternMatch)) {
    console.log("THE PAGES slash only");
    patternMatch = patternMatch.replace(/\/$/, "");
  }

  console.log("THE PAGES matched", patternMatch);
  console.log("THE ITEM", item);

  return {
    path: patternMatch,
    component: self.dynamicImport(item),
  };
};

methods.dynamicImport = async function (module) {
  const self = this;
  console.log("THE DYNAMI GOT A CALL");
  const open = await import(module);
  return open;
};

module.exports = methods;
