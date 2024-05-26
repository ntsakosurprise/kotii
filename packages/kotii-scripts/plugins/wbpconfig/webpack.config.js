import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export default () => {
  //   console.log("THE PROCESS", process.env.APPCONTEXT);
  let env = JSON.parse(process.env.APPCONTEXT); // GET the set APPCONTEXT environment variable
  console.log("THE APP BUILD FOLDER", env.appBuildFolder);
  return {
    entry: ["webpack-hot-middleware/client", env.appIndexFile],
    context: env.appFolder,
    mode: "development",
    infrastructureLogging: { level: "none" },
    stats: "none",

    output: {
      filename: "[main].bundle.js",
      path: `${env.appBuildFolder}`, // save emitted bundle to this path or folder
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
    resolve: {
      extensions: [".js", ".jsx", ".png", ".jpg"], // tell webpack to use these extenstions to resolve imported files[for importing without specifying the extension name]
      alias: {
        Layouts: "/src/components/layout/index",
        Pages: "/src/components/pages/index",
        Docs: "/src/components/docs/index",
        Markdowns: "/src/mds/",
        Modules: "/src/modules/",
        Startup: "/src/components/startup/index",
        UI: "/src/components/ui/index",
        Config: "/src/config/",
        HOC: "/src/hoc/",
        Hooks: "/src/hooks/index",
        Context: "/src/context/",
        Language: "/src/language/index",
        AppRoutes: "/src/routes/",
        AppModules: "/src/modules/",
        Store: "/src/store/",
        Utilities: "/src/utils/index",
        Services: "/src/services/",
        Constants: "/src/constants/",
        Assets: "/src/assets/index",
        AppGlobals: "/src/globals/index",
        "react-router-dom": path.resolve("../../node_modules/react-router-dom"),
        "react-router": path.resolve("../../node_modules/react-router"),
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
          exclude: /node_modules/,
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
          test: /\.(png|jpg|gif|svg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.m?js$/,
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
    devServer: {
      allowedHosts: "auto",
      client: {
        overlay: { warnings: false, errors: false, runtimeErrors: false },
      },
      port: 9000,
      devMiddleware: {
        writeToDisk: true /*serve in-memory[devserver] as you did before but save to disk as well (changes to file[s] respected) */,
      },
      static: {
        directory: env.appAssetsPublic, // config devserv to server public assets from here
      },
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: env.appIndexHtml,
        filename: "index.html",
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
