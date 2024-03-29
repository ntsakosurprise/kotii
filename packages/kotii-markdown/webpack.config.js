const path = require("path");
//const webpack = require("webpack");
// const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./lib/loader.js",
  target: "node",
  output: {
    path: path.join(__dirname),
    filename: "index.js",
    chunkFilename: "[id].js",
    publicPath: "",
    library: "kotii-markdown",
    libraryTarget: "umd",
    globalObject: "this",
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom",
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Config: "/src/config/",
      Components: "/src/components/",
      HOC: "/src/hoc/",
      Hooks: "/src/hooks/index",
      Context: "/src/context/",
      Utilities: "/src/utils/index",
      Constants: "/src/constants/",
      Assets: "/src/assets/",
      AppGlobals: "/src/globals/index",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // {
      //   test: /\.html$/,
      //   use: "html-loader",
      // },
      /*Choose only one of the following two: if you're using 
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.scss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
    ],
  },

  // plugins: [
  //   new HTMLWebpackPlugin({
  //     template: __dirname + "/public/index.html",
  //     filename: "index.html",
  //     inject: "body",
  //   }),
  // ],
};
