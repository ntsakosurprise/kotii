const webpack = require("webpack");

module.exports = () => {
  //   console.log("THE PROCESS", process.env.APPCONTEXT);
  let env = JSON.parse(process.env.APPCONTEXT);
  //   console.log("THE APP PARSED", env);
  return {
    entry: env.appIndexFile,
    mode: "development",
    output: {
      filename: "[main].bundle.js",
      path: env.appBuildFolder,
    },
    module: {
      rules: [
        {
          test: "/.js$/",
          use: "babel-loader",
        },
      ],
    },
    devServer: {
      allowedHosts: "auto",
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        // Options...
      }),
    ],
  };
};
