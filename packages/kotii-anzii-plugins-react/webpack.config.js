/* eslint-disable no-unused-vars */
import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isESM = process.env.NODE_MODE === "esm";

const config = {
  entry: "./src/index.js",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  target: "node", // IMPORTANT: prevent bundling fs, path, etc.

  experiments: {
    outputModule: isESM, // Enables .mjs builds
  },

  output: {
    path: path.resolve("dist"),
    filename: isESM ? "index.mjs" : "index.cjs",
    libraryTarget: isESM ? "module" : "commonjs2",
    module: isESM,
    chunkFormat: isESM ? "module" : "commonjs",
  },

  // EXTERNALS
  externals: [
    nodeExternals({ importType: isESM ? "module" : "commonjs" }),
    {
      react: "react",
      "react-dom": "react-dom",
      "kotii-languages": "kotii-languages",
      "@kotii/_internal/land": "@kotii/_internal/land",
      "@kotii/_internal/root": "@kotii/_internal/root",
      "@kotii/_internal/app": "@kotii/_internal/app",
    },
  ],

  resolve: {
    extensions: [".js", ".jsx"],
    mainFields: ["module", "main"], // better ESM compatibility
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { node: "18" }, // better for SSR modules
                  modules: isESM ? false : "auto",
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },

  // Avoid dozens of Webpack fs warnings
  ignoreWarnings: [
    {
      module: /node:/,
    },
  ],

  stats: "errors-warnings", // cleaner CLI output
};

export default config;
