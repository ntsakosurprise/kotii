const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')

  this.listens({
    "convert-jsx-to-react": this.handleConvertionToJsx.bind(this),
  });
};
methods.handleConvertionToJsx = function (data) {
  console.log("THE code to transpile", data);
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
  // console.log("babel", babel);

  // Ignore non-JS files and test scripts

  //options.presets = ["@babel/preset-react", "@babel/preset-env"];
  //options.plugins = ["@babel/plugin-transform-react-jsx"];
  options.presets = ["@babel/preset-react", "@babel/preset-env"];

  // options.output = destination

  console.log("THE FILE NAME", options);

  const result = code.map((rawCode, i) => {
    return {
      ...rawCode,
      modifiedCode: babel.transformSync(rawCode.originalCode, options).code,
    };
  });
  // console.log("BABEL TRANSFORMED", result);

  // const outputPath = path.join(destination, path.basename(filename));

  return result;
};
export default methods;
