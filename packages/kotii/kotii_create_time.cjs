const beginCreations = (dataType, path) => {
  console.log("GET FOREING", dataType, path);
  return new Promise((resolve) => {
    switch (dataType.toLowerCase()) {
      case "json":
        return resolve(getJSON(path));
      case "xml":
        return getXML(path).then((data) => {
          resolve(data);
        });
      case "csv":
        return resolve(getCSV(path));
      default:
        "";
    }
  });
};

module.exports = { beginCreations };
