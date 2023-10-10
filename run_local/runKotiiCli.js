const createTarball = require("./createTarball");
//const parseScriptArguments = require("./parseScriptArguments");
const path = require("path");

const scriptPath = __dirname;
const contextScriptRoot = path.join(scriptPath, "..");
//const workingDir = process.cwd();
const packagesPath = path.join(contextScriptRoot, "packages");
const kotiiScriptsPath = path.join(packagesPath, "kotii-scripts");
console.log("Packages PATH", kotiiScriptsPath);
const madeTarball = createTarball(kotiiScriptsPath, "kotii-scripts");
console.log("Made TARBALL", madeTarball);
// console.log("WORKING DIR", process.cwd());
// console.log("path_dirname", __dirname);
// console.log("path.join", path.join(__dirname, ".."));
// console.log("THE REAL PATH ", path.join(process.cwd()));
//createTarball();
