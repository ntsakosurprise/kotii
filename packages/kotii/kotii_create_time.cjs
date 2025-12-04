const beginCreations = (commandToRun) => {
  const { dev, build, ssg } = require("kotii-create-time");

  switch (commandToRun) {
    case "dev":
      return dev();
    case "build":
      return build();
    case "static":
      return ssg();
    default:
      throw new Error("KotiiJS was started with an unrecognised command");
  }

  //   return new Promise((resolve) => {
  //     switch (dataType.toLowerCase()) {
  //       case "json":
  //         return resolve(getJSON(path));
  //       case "xml":
  //         return getXML(path).then((data) => {
  //           resolve(data);
  //         });
  //       case "csv":
  //         return resolve(getCSV(path));
  //       default:
  //         "";
  //     }
  //   });
};

module.exports = { beginCreations };
