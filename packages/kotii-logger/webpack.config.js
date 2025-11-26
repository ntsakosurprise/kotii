import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const isESM = process.env.NODE_MODE === "esm" ? true : false;

const kotiiLogger = {
  entry: "./index.js",
  target: "node18",
  mode: "development",

  experiments: {
    outputModule: false,
  },

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
  ],
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ["babel-loader"],
      },
    ],
    exprContextCritical: false, // Temporary workaround
  },
};
export default kotiiLogger;
