import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const isESM = process.env.NODE_MODE === "esm" ? true : false;

const kotiiRouter = {
  entry: "./src/index.js",
  target: "web",
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
  externalsPresets: { node: true },

  externals: [
    nodeExternals({
      importType: isESM ? "module" : "commonjs",
    }),
    isESM
      ? {
          react: "react",
          "react-dom": "react-dom",
          "react-dom/server": "react-dom/server",
          "styled-components": "styled-components",
          "@emotion/is-prop-valid": "@emotion/is-prop-valid",
          "@emotion/memoize": "@emotion/memoize",
          "@emotion/unitless": "@emotion/unitless",
        }
      : {
          react: "commonjs react",
          "react-dom": "commonjs react-dom",
          "react-dom/server": "commonjs react-dom/server",
          "styled-components": "commonjs styled-components",
          "@emotion/is-prop-valid": "commonjs @emotion/is-prop-valid",
          "@emotion/memoize": "commonjs @emotion/memoize",
          "@emotion/unitless": "commonjs @emotion/unitless",
        },
    // FIXED: Strict ESM/CJS runtime object mapper for deep subpath bundles
    function ({ request }, callback) {
      if (/^react-icons/.test(request)) {
        if (isESM) {
          // Explicitly instructs Webpack to leave deep subpaths as native module imports
          return callback(null, { [request]: request, type: "module" });
        } else {
          return callback(null, { [request]: request, type: "commonjs" });
        }
      }
      callback();
    },
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Config: "/src/config/",

      Context: "/src/context/",
    },
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

export default kotiiRouter;
