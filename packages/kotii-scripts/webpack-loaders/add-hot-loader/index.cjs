const fs = require("fs");
module.exports = function (content) {
  try {
    let options = this.getOptions();
    if (options.entryFile === this.resource) {
      const jsFile = fs.readFileSync(this.resource);
      const newSource = `${jsFile}
      if (import.meta.webpackHot) {
        console.log("THE LOCAL INDEX HOT")
        import.meta.webpackHot.accept((er) => {
        console.log("THE HOT ERRORrrrr", er);
          App(Root, Layout);
        });
      }`;
      return newSource;
    } else {
      return `${content}`;
    }
  } catch (error) {
    console.log("TEST STYLES ERROR", error);
  }
};
