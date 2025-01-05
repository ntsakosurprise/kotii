const methods = {};
methods.init = function () {
  // self.debug('Bitbucket has been initialised')

  this.listens({
    "convert-jsx-to-react": this.handleConvertionToJsx.bind(this),
  });
};
methods.handleConvertionToJsx = function (data) {
  const self = this;
  const convertedCode = self.buildStringCode(data.payload.code);
  data.callback({
    message: "JSX transpiled to classic react",
    convertedCode,
  });
  return;
};
methods.buildStringCode = function (code, babelOptions = {}) {
  const self = this;
  // const path = self.path;
  // const fs = self.fs;
  const babel = self.babel;
  const options = Object.assign({}, babelOptions);

  // const outputPath = path.join(destination, path.basename(filename));
  // self.debug("babel", babel);

  // Ignore non-JS files and test scripts

  //options.presets = ["@babel/preset-react", "@babel/preset-env"];
  //options.plugins = ["@babel/plugin-transform-react-jsx"];
  options.presets = ["@babel/preset-react", "@babel/preset-env"];

  // options.output = destination

  self.debug("THE FILE NAME", options);

  const result = code.map((rawCode, i) => {
    return {
      ...rawCode,
      modifiedCode: babel.transformSync(rawCode.originalCode, options).code,
    };
  });
  // self.debug("BABEL TRANSFORMED", result);

  // const outputPath = path.join(destination, path.basename(filename));

  return result;
};
export default methods;
