const fs = require("fs");
const path = require("path");
const createTarball = require("./createTarball");
module.exports = function (packagesPath, tarballs) {
  let madeTarballs = [];
  let madeTarball = null;
  console.log("MADE TARBALLS", packagesPath, tarballs);
  tarballs.forEach((package) => {
    // let currentPackagePath = path.join(
    //   packagesPath,
    //   `./${package}${path.sep}package.json`
    // );
    // let pkgPackageJson = JSON.parse(fs.readFileSync(currentPackagePath));
    // let pkgPackageJsonWorkSpaces = pkgPackageJson.workspaces || null;
    // pkgPackageJsonWorkSpaces ? delete pkgPackageJson.workspaces : "";
    // fs.writeFileSync(
    //   currentPackagePath,
    //   JSON.stringify(pkgPackageJson, null, 2),
    //   { encoding: "utf8" }
    // );
    madeTarball = createTarball(packagesPath, package);
    madeTarballs.push(madeTarball);
    // if (pkgPackageJsonWorkSpaces) {
    //   pkgPackageJson["workspaces"] = pkgPackageJsonWorkSpaces;
    //   fs.writeFileSync(
    //     currentPackagePath,
    //     JSON.stringify(pkgPackageJson, null, 2),
    //     {
    //       encoding: "utf8",
    //     }
    //   );
    // }
  });
  return madeTarballs;
};
