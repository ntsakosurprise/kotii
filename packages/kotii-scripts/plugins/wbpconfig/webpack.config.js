// const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  //   console.log("THE PROCESS", process.env.APPCONTEXT);
  let env = JSON.parse(process.env.APPCONTEXT);
  //   console.log("THE APP PARSED", env);
  console.log("ENV APP FOLDER");
  return {
    entry: env.appIndexFile, // Entry should be from the provided app's index file from src
    context: env.appFolder, // set webpack context to be the app in context's folder
    mode: "development",
    output: {
      filename: "[main].bundle.js",
      path: `${env.appBuildFolder}`,
    },
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"], ["@babel/preset-react"]],
            },
          },
        },
        {
          test: /\.html$/,
          use: "html-loader",
        },
        /*Choose only one of the following two: if you're using 
          plain CSS, use the first one, and if you're using a
          preprocessor, in this case SASS, use the second one*/
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          type: "asset/resource",
        },
        // {
        //   test: /\.scss$/,
        //   use: ["style-loader", "css-loader", "sass-loader"],
        // },
      ],
    },
    devServer: {
      allowedHosts: "auto",
      devMiddleware: {
        writeToDisk: true /*serve in-memory[devserver] as you did before but save to disk as well (changes to file[s] respected) */,
      },
      // static: {
      //   directory: env.appAssetsPublic,
      // },
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: env.appIndexHtml,
        filename: "index.html",
      }),
    ],
  };
};
