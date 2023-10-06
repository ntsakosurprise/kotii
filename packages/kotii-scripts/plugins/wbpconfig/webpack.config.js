const webpack = require("webpack");

module.exports = function (context) {
  console.log("THE CONTEXT", context);
  return {
    entry: context.appIndexFile,
    output: {
      filename: "[main].bundle.js",
      path: context.appBuildFolder,
    },
    module: {
      rule: [
        {
          test: "/.js$/",
          use: "babel-loader",
        },
      ],
    },
  };
};
