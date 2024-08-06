import path from "path";
class Template {
  constructor(pao) {
    this.pao = pao;
    this.templatesTypes = ["typescript", "javascript"];
    this.templateNames = ["spa", "ssr"];
  }

  init() {
    this.listens({
      "get-template": this.handleGetTemplate.bind(this),
    });
  }

  handleGetTemplate(data) {
    const self = this;
    const pao = self.pao;
    const getWorkingFolder = pao.pa_getWorkingFolder;
    const getRootDir = pao.pa_getRootDir;
    self.callback = data.callback;
    const { name, type } = data;
    // console.log("THE PAO", pao);
    // console.log("THE ROOT DIR", getRootDir(module.filename));
    // console.log("THE MODULE", __dirname);
    // console.log("THE ROOT DIR", self._getCallerFile());

    if (!type || !this.templatesTypes.includes(type.toLowerCase())) {
      throw new Error("The requested template type is not supported");
    }
    if (!name || !this.templateNames.includes(name.toLowerCase())) {
      throw new Error("The requested template name does not exist");
    }
    // console.log("THE WORKING FOLDER", getWorkingFolder());
    // let workDir = getWorkingFolder();
    let thisFileDir = getRootDir(module.filename);
    let templateTypeFolder =
      thisFileDir.indexOf("/dist") > 0
        ? path.resolve(thisFileDir, `../${type}`)
        : path.resolve(thisFileDir, `../${type}`);

    let templatePath = path.resolve(templateTypeFolder, name);
    let templatesPathRoot = path.resolve(thisFileDir, "..");
    let kotiiPackages = path.resolve(templatesPathRoot, "..");
    let kotiiMain = path.resolve(kotiiPackages, "..");
    console.log("THE THIS FILE DIR", thisFileDir);

    console.log("THE DIR OUT", templatesPathRoot);
    console.log("PACKAGES", kotiiPackages);
    console.log("KOTII MONO", kotiiMain);
    self.callback({
      templateTypeFolder,
      templatePath,
      templatesPathRoot,
      kotiiPackages,
      kotiiMain,
    });
  }

  // _getCallerFile() {
  //   var filename;

  //   var _pst = Error.prepareStackTrace;
  //   Error.prepareStackTrace = function (err, stack) {
  //     return stack;
  //   };
  //   try {
  //     var err = new Error();
  //     var callerfile;
  //     var currentfile;

  //     console.log("THE ERROR OBJECT", err);
  //     console.log("THE ERROR STACK", err.stack);

  //     currentfile = err.stack.shift().getFileName();

  //     while (err.stack.length) {
  //       callerfile = err.stack.shift().getFileName();

  //       if (currentfile !== callerfile) {
  //         filename = callerfile;
  //         break;
  //       }
  //     }
  //   } catch (err) {}
  //   Error.prepareStackTrace = _pst;

  //   return filename;
  // }

  getPackageJson() {}
  savePackageJson() {}
}
export default Template;
