const path = require("path");
//const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  target: "web",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "",
  },
  devServer: {
    allowedHosts: "auto",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Layouts: "/src/components/layout/index",
      Pages: "/src/components/pages/index",
      Docs: "/src/components/docs/index",
      Markdowns: "/src/mds/",
      Modules: "/src/modules/",
      Startup: "/src/components/startup/index",
      UI: "/src/components/ui/index",
      Config: "/src/config/",
      HOC: "/src/hoc/",
      Hooks: "/src/hooks/index",
      Context: "/src/context/",
      Language: "/src/language/index",
      AppRoutes: "/src/routes/",
      AppModules: "/src/modules/",
      Store: "/src/store/",
      Utilities: "/src/utils/index",
      Services: "/src/services/",
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
      {
        test: /\.html$/,
        use: "html-loader",
      },
      /*Choose only one of the following two: if you're using 
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.scss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html",
    }),
  ],
};
