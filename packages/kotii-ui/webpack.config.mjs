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
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    // rules: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     exclude: [
    //       path.resolve(__dirname, "node_modules"),
    //       //   "/Users/surprisemashele/Documents/Development/frameworks/anzii/node_modules",
    //     ],
    //     use: {
    //       loader: "babel-loader",
    //       options: {
    //         presets: [
    //           [
    //             "@babel/preset-env",
    //             {
    //               modules: isESM ? false : "auto",
    //             },
    //           ],
    //           "@babel/preset-react",
    //         ], // Use presets for ES features and React JSX
    //       },
    //     },
    //   },
    // ],
    // exprContextCritical: false, // Temporary workaround
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        // use: ["babel-loader", "source-map-loader", "ts-loader"],
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
              compilerOptions: {
                // Dynamically forces ts-loader to output modern ESM instead of CommonJS
                module: isESM ? "ESNext" : "CommonJS",
              },
            },
          },
        ],
        resolve: {
          fullySpecified: false,
        },
      },
      // {
      //   test: /\.html$/,
      //   use: "html-loader",
      // },
      /*Choose only one of the following two: if you're using 
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/i,
      //   type: "asset/resource",
      // },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      // {
      //   test: /\.scss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
    ],
  },
};

export default kotiiRouter;
