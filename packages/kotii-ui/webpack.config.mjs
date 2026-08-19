import path from "path";
import { fileURLToPath } from "url";

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
  externals: [
    {
      react: "react",
      "react-dom": "react-dom",
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
              // FORCES Webpack to skip deep, broken node_modules typechecks
              transpileOnly: true,
              compilerOptions: {
                module: isESM ? "ESNext" : "CommonJS",
                // Forces TypeScript compiler instance to ignore third-party library errors
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
