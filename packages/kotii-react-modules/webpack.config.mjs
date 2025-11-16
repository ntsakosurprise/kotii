import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("Webpack dir name", __dirname);
console.log("webpack path", path.resolve(__dirname, "node_modules"));
const isESM = process.env.NODE_MODE === "esm" ? true : false;

const kotiiRouter = {
  entry: "./index.js",
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

    module: isESM ? true : false,
  },
  externals: [
    {
      react: "react",
      "react-dom": "react-dom",
    },

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
console.log(
  "KOTII ROUTER CONFIG",
  kotiiRouter,
  kotiiRouter.module.rules[0].use.options.presets
);
export default kotiiRouter;
