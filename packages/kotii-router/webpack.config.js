import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("Webpack dir name", __dirname);
console.log("webpack path", path.resolve(__dirname, "node_modules"));
const isESM = process.env.NODE_MODE === "esm" ? true : false;

const kotiiRouter = {
  entry: "./index.js",
  target: "node18",
  mode: "development",

  experiments: {
    outputModule: isESM ? true : false,
  },
  //devtool: "inline-source-map",
  output: {
    path: path.resolve("dist"),
    filename: isESM ? "index.mjs" : "index.cjs",
    libraryTarget: isESM ? "module" : "commonjs2",
    chunkFormat: isESM ? "module" : "commonjs",
  },
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, "node_modules"),
    }),
    // nodeExternals({
    //   modulesDir:
    //     "/Users/surprisemashele/Documents/Development/frameworks/anzii/node_modules",
    // }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
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
            presets: ["@babel/preset-env", "@babel/preset-react"], // Use presets for ES features and React JSX
          },
        },
      },
    ],
    exprContextCritical: false, // Temporary workaround
  },
};
export default kotiiRouter;
