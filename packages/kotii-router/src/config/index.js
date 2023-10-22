const { glob, globSync, globStream, globStreamSync, Glob } = require("glob");

const filesMap = {};
const pathMatchPattern = /^\.|index|\.[t|j][sx|s]$/g;
const importAllPages = (r) => {
  r.keys().forEach((key) => (filesMap[key] = r(key)));
};

const getPages = (filesToGet) => {
  const workDir = __dirname;
  console.log("THE WORK DIR", workDir);
  const files = globSync(filesToGet, { ignore: "node_modules/**" });
  // importAllPages(files);
  // console.log("THE PAGES OBJECT", files);
  return files;
  //   console.log("Context object", files);
  //   console.log("Context keys", files.keys);
  //   console.log("Context keys");
  //   files.keys().forEach((key) => {
  //     console.log("Context-FILE", key);
  //     console.log("Context resolve", files.resolve(key));
  //   });
};

const createRouterComponents = (maps) => {
  let compsMaps = maps.map((contextModule) => {
    return getItemPathAndFile(contextModule);
  });

  return compsMaps;
};

const getItemPathAndFile = (item) => {
  console.log("THE PAGES MAPS ITEM", item);
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
    component: dynamicImport(item),
  };
};

const dynamicImport = async function (module) {
  const self = this;
  console.log("THE DYNAMI GOT A CALL");
  const open = await import(module);
  console.log("THE OPEN", open);
  return open;
};

module.exports = { getPages, createRouterComponents };
