const createTarball = require("./createTarball");
module.exports = function (packagesPath, tarballs) {
  let madeTarballs = [];
  let madeTarball = null;
  console.log("MADE TARBALLS", packagesPath, tarballs);
  tarballs.forEach((package) => {
    madeTarball = createTarball(packagesPath, package);
    madeTarballs.push(madeTarball);
  });
  return madeTarballs;
};
