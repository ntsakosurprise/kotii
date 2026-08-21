import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Webpack dir name", __dirname);
console.log("webpack path", path.resolve(__dirname, "node_modules"));

const isESM = process.env.NODE_MODE === "esm" ? true : false;
console.log("iS ESM", isESM);

const kotiiRouter = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  devtool: "inline-source-map",

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
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
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
              ],
            },
          },
          "source-map-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              compilerOptions: {
                module: isESM ? "ESNext" : "CommonJS",
                skipLibCheck: true,
              },
            },
          },
        ],
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};

export default kotiiRouter;
