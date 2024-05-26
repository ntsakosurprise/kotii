const path = require("path");
const webpack = require("webpack");
// const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname),
    filename: "index.js",
    chunkFilename: "[id].js",
    publicPath: "",
    library: "kotii-ui",
    libraryTarget: "umd",
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
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      Config: "src/config/",
      Components: "src/components/",
      HOC: "src/hoc/",
      Hooks: "src/hooks/index",
      Context: "src/context/",
      Utilities: "src/utils/index",
      Constants: path.resolve(__dirname, "./src/constants/index"),
      Assets: "src/assets/",
      AppGlobals: "src/globals/index",
      Types: "src/types",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "source-map-loader", "ts-loader"],
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],

  // plugins: [
  //   new HTMLWebpackPlugin({
  //     template: __dirname + "/public/index.html",
  //     filename: "index.html",
  //     inject: "body",
  //   }),
  // ],
};
