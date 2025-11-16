import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("Webpack dir name", __dirname);
console.log("webpack path", path.resolve(__dirname, "node_modules"));
const isESM = process.env.NODE_MODE === "esm" ? true : false;

const kotiiMarkdown = {
  entry: "./index.js",
  target: "node",
  mode: "development",

  experiments: {
    outputModule: isESM ? true : false,
  },
  //devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isESM ? "index.mjs" : "index.cjs",
    libraryTarget: isESM ? "module" : "commonjs2",
    chunkFormat: isESM ? "module" : "commonjs",

    module: isESM ? true : false,
  },

  resolve: {
    extensions: [".js"],
    fallback: {
      fs: false,
      path: false,
      url: false,
      tls: false,
      net: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,

      // "crypto": false,
    }, // Add these as polyfills for use in the browser, webpack no longer auto-polyfills them
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          //   "/Users/surprisemashele/Documents/Development/frameworks/anzii/node_modules",
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: isESM ? false : "auto",
                },
              ],
              "@babel/preset-react",
            ], // Use presets for ES features and React JSX
          },
        },
      },
    ],
    exprContextCritical: false, // Temporary workaround
  },
};

export default kotiiMarkdown;
