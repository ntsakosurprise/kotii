import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isESM = process.env.NODE_MODE === "esm" ? true : false;

const kotiiStyled = {
  entry: "./index.ts",
  mode: "development",

  experiments: {
    outputModule: isESM ? true : false,
  },

  output: {
    path: path.resolve("dist"),
    filename: isESM ? "index.mjs" : "index.cjs",
    libraryTarget: isESM ? "module" : "commonjs2",
    chunkFormat: isESM ? "module" : "commonjs",
    module: isESM ? true : false,
  },

  // 1. CRITICAL ADDITION: Exclude them from the bundle entirely
  externals: isESM
    ? {
        // For ESM output, map dependencies to their pure string names
        react: "react",
        "react-dom": "react-dom",
        "styled-components": "styled-components",
      }
    : {
        // For CommonJS output, force a standard require lookup
        react: "commonjs react",
        "react-dom": "commonjs react-dom",
        "styled-components": "commonjs styled-components",
      },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [path.resolve(__dirname, "node_modules")], // Keeps Babel fast
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
              [
                "@babel/preset-typescript",
                {
                  ignoreExtensions: true,
                },
              ],
            ],
          },
        },
      },
    ],
    exprContextCritical: false,
  },
};

export default kotiiStyled;
