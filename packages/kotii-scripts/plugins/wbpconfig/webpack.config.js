import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
export default () => {
  //   console.log("THE PROCESS", process.env.APPCONTEXT);
  let env = JSON.parse(process.env.APPCONTEXT); // GET the set APPCONTEXT environment variable
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
        Assets: "/src/assets/",
        AppGlobals: "/src/globals/index",
      }, // Alias references to files and folders inorder to use absolute paths in your file imports
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
      client: {
        overlay: { warnings: false, errors: false, runtimeErrors: false },
      },
      port: 8000,
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
