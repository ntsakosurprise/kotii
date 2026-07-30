/* eslint-disable no-unused-vars */
const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  target: "web",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname),
    filename: "index.js",
    chunkFilename: "[id].js",
    publicPath: "",
  },
  resolveLoader: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "../../node_modules"),
      path.resolve(__dirname, "../../node_modules/.pnpm/node_modules"),
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Layouts: path.resolve(__dirname, "src/components/layout/index"),
      Pages: path.resolve(__dirname, "src/components/pages/index"),
      Docs: path.resolve(__dirname, "src/components/docs/index"),
      Markdowns: path.resolve(__dirname, "src/mds/"),
      Modules: path.resolve(__dirname, "src/modules/"),
      Startup: path.resolve(__dirname, "src/components/startup/index"),
      UI: path.resolve(__dirname, "src/components/ui/index"),
      Config: path.resolve(__dirname, "src/config/"),
      HOC: path.resolve(__dirname, "src/hoc/"),
      Hooks: path.resolve(__dirname, "src/hooks/index"),
      Context: path.resolve(__dirname, "src/context/"),
      Language: path.resolve(__dirname, "src/language/index"),
      AppRoutes: path.resolve(__dirname, "src/routes/"),
      AppModules: path.resolve(__dirname, "src/modules/"),
      Store: path.resolve(__dirname, "src/store/"),
      Utilities: path.resolve(__dirname, "src/utils/index"),
      Services: path.resolve(__dirname, "src/services/"),
      Constants: path.resolve(__dirname, "src/constants/"),
      Assets: path.resolve(__dirname, "src/assets/"),
      AppGlobals: path.resolve(__dirname, "src/globals/index"),
      MarkdownComps: path.resolve(__dirname, "src/components/"),
      "kotii-react-modules": path.resolve(
        __dirname,
        "node_modules/kotii-react-modules"
      ),
      "kotii-markdown-loader": path.resolve(
        __dirname,
        "node_modules/kotii-markdown-loader"
      ),
    },
    // CRITICAL: Set to false so Webpack reads packages out of your app's local node_modules structure
    // instead of tracking them inside pnpm's hidden .pnpm directories.
    symlinks: false,

    modules: [
      "node_modules",
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "../../node_modules"),
      path.resolve(__dirname, "../../node_modules/.pnpm/node_modules"),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // We include your local src and any local 'kotii-' modules inside the local node_modules directory
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/kotii-react-modules"),
          path.resolve(__dirname, "../../packages"), // Fallback if links resolve globally
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.md$/,
        use: ["kotii-markdown-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new webpack.ProvidePlugin({
      process: "process",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
