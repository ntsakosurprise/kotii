import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isESM = process.env.NODE_MODE === "esm";

console.log("Webpack __dirname:", __dirname);

const kotiiRouter = {
  entry: "./index.js",
  mode: "development",

  experiments: {
    outputModule: isESM,
  },

  output: {
    path: path.resolve("dist"),
    filename: isESM ? "index.mjs" : "index.cjs",
    libraryTarget: isESM ? "module" : "commonjs2",
    chunkFormat: isESM ? "module" : "commonjs",
    module: isESM,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // ✅ recommended way
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: isESM ? false : "auto" }],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
    exprContextCritical: false,
  },
};

console.log(
  "KOTII ROUTER CONFIG:",
  kotiiRouter,
  kotiiRouter.module.rules[0].use.options.presets
);

export default kotiiRouter;
