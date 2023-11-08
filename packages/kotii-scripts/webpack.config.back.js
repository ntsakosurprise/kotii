import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("Webpack dir name", __dirname);
console.log("webpack path", path.resolve(__dirname, "node_modules"));
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const rootPath = path.resolve(__dirname);
var anziiCli = {
  entry: "./app.js",
  target: "node",
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, "node_modules"),
    }),
    nodeExternals({
      modulesDir:
        "/Users/surprisemashele/Documents/Development/frameworks/anzii/node_modules",
    }),
    nodeExternals({
      modulesDir: "/Users/surprisemashele/Documents/kotii/node_modules",
    }),
  ],
  externalsPresets: {
    node: true, // in order to ignore built-in modules like path, fs, etc.
  },
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
    chunkFormat: "module",
  },
  experiments: {
    outputModule: true,
  },

  module: {
    // https://webpack.js.org/loaders/babel-loader/#root
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          "/Users/surprisemashele/Documents/Development/frameworks/anzii/node_modules",
          "/Users/surprisemashele/Documents/Development/frameworks/anzii/lib/pillar/pillar.js",
          "/Users/surprisemashele/Documents/kotii/node_modules",

          // exception: include these node_modules
          // not: [
          //   // add any node_modules that should be run through babel here
          //   path.resolve(
          //     rootPath,
          //     "node_modules/@MY_ORG/MY_PACKAGE1"
          //   ),
          //   path.resolve(
          //       rootPath,
          //       "node_modules/@MY_ORG/MY_PACKAGE2"
          //   ),
          // ]
        ],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/env", "@babel/preset-react"] },
          },
        ],
      },
    ],
  },

  // plugins: [
  //   new webpack.DefinePlugin({
  //     __isBrowser__: "false",
  //   }),
  // ],
  // resolve: {
  //   roots: [root],
  // },
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
export default [anziiCli];
