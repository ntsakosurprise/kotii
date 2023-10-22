var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const root = path.resolve(__dirname);

var anziiCli = {
  entry: ["@babel/polyfill", "./app.js"],
  target: "node",
  stats: "none",
  externals: [
    { express: "commonjs express" },
    nodeExternals({
      modulesDir: path.resolve(__dirname, "./node_modules"),
      allowlist: ["webpack/hot/poll?1000"],
    }),
    nodeExternals({
      modulesDir: path.resolve(__dirname, "./node_modules"),
      allowlist: ["webpack/hot/poll?1000"],
    }),
  ],
  output: {
    path: path.join(__dirname),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
  resolve: {
    roots: [root],
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         keep_classnames: false,
  //         keep_fnames: false,
  //         mangle: true,
  //       },
  //     }),
  //   ],
  // },
  // devtool: "source-map"
};

module.exports = [anziiCli];
