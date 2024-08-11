import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (options) => {
  //   console.log("THE PROCESS", process.env.APPCONTEXT);
  console.log("THE STUFF THAT IS", options);
  let env = JSON.parse(process.env.APPCONTEXT); // GET the set APPCONTEXT environment variable
  let appEnvironmentVariables = JSON.parse(process.env.APP_ENVS); // Get context app kotii environment variables
  console.log("THE APP BUILD FOLDER", env.appBuildFolder);
  console.log("WEBPACK APP ENVS", appEnvironmentVariables);
  console.log("THE SERVER CONFIG");
  console.log("THE APP BUILD FOLDER", env.appBuildFolder);
  console.log("THE DIR_NAME", __dirname, path.resolve(__dirname, "../.."));
  let scriptsPath = path.resolve(__dirname, "../..");
  let scriptsWebpackResolve = path.resolve(
    scriptsPath,
    "kotii-land/dev/app_.js"
  );

  return {
    entry:
      options?.build && options.build
        ? env.appIndexFile
        : ["webpack-hot-middleware/client?path=/__kotii", env.appIndexFile],
    context: env.appFolder,
    mode: process.env.NODE_ENV,
    infrastructureLogging: { level: "info" },
    stats: true,

    output: {
      filename: "[main].server.bundle.js",
      path:
        options?.build && options.build
          ? options.staticFolder
          : `${env.appBuildFolder}`, // save emitted bundle to this path or folder
      clean: true, // Clean build folder before emitting new bundle
      publicPath: "/",
      assetModuleFilename: (pathData, assetInfo) => {
        // console.log("THE PATH DATA", pathData.filename);
        // console.log("THE PATH INFO", assetInfo);
        return `${path.basename(pathData.filename)}`;
      },
    },
    //externals: {
    // react: {
    //   root: "React",
    //   commonjs2: "react",
    //   commonjs: "react",
    //   amd: "react",
    //   umd: "react",
    // },
    //   React: "react",
    // },

    // externals: [
    //   webpackNodeExternals({
    //     allowlist: ["kotii-scripts"],
    //   }),
    // ],
    resolve: {
      extensions: [".js", ".jsx", ".png", ".jpg"], // tell webpack to use these extenstions to resolve imported files[for importing without specifying the extension name]
      alias: {
        ...options.appManifest.aliases,
        "react-router-dom": path.resolve(
          `${env.appFolder}/node_modules/react-router-dom`
        ),
        react: path.resolve(`${env.appFolder}/node_modules/react`),
        "react-router": path.resolve(
          `${env.appFolder}/node_modules/react-router`
        ),
        "kotii-scripts": path.resolve(`${scriptsWebpackResolve}`),
      }, // Alias references to files and folders inorder to use absolute paths in your file imports
      fallback: {
        fs: false,
        path: false,
        url: false,
        tls: false,
        net: false,
        zlib: false,
        http: false,
        https: false,
        stream: false,

        // "crypto": false,
      }, // Add these as polyfills for use in the browser, webpack no longer auto-polyfills them
    },
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs|jsx)$/,
          include: [path.resolve(scriptsPath, "/")],
          // exclude: /node_modules\/(?!(kotii-scripts)\/).*/,
          // include: [scriptsWebpackResolve],
          exclude: /node_modules\/(?!kotii-scripts).+/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env"],
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
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
          test: /\.less$/i,
          use: [
            // compiles Less to CSS
            "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.styl$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "stylus-loader",
              options: {
                webpackImporter: false,
              },
            },
          ],
        },
        {
          test: /\.(csv|tsv)$/i,
          use: ["csv-loader"],
        },
        {
          test: /\.xml$/i,
          use: ["xml-loader"],
        },

        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.m?js?x$/,
          resolve: {
            fullySpecified: false, // disable the behaviour
          },
        },
        // {
        //   test: /\.scss$/,
        //   use: ["style-loader", "css-loader", "sass-loader"],
        // },
      ],
    },
    // devServer: {
    //   allowedHosts: "auto",
    //   client: {
    //     overlay: { warnings: false, errors: false, runtimeErrors: false },
    //   },
    //   port: 9000,
    //   devMiddleware: {
    //     writeToDisk: true /*serve in-memory[devserver] as you did before but save to disk as well (changes to file[s] respected) */,
    //   },
    //   static: {
    //     directory: env.appAssetsPublic, // config devserv to server public assets from here
    //   },
    // },
    plugins: [
      // new HTMLWebpackPlugin({
      //   // template: env.appIndexHtml,
      //   filename: "index.html",
      // }),
      new webpack.DefinePlugin({
        "process.env": {
          ...appEnvironmentVariables,
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
