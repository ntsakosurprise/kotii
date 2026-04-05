/* eslint-disable no-unused-vars */
import fs from "fs";
import { loggas, logger } from "kotii-logger";
// import syncStylesLoader from "kotii-sync-styles-loader"
// import stylesHmr from "kotii-styles-hmr"
import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import { kotiiKotiiLandPath, kotiiRootPath } from "kotii-creation-time/root";

import {
  USER_LAND_PATH_CSS,
  USER_LAND_ALIASES,
  USER_LAND_ALIAS_BUILD,
  USER_LAND_PATH_ASSET,
  USER_LAND_ALIAS_REDUX,
  USER_LAND_ALIAS_START_UP,
} from "kotii-internal/user";
import {
  BroadcastCompilationWebpackPlugin,
  CopyAssetsWebpackPlugin,
  DeleteFilesWebpackPlugin,
  FinishCompilationOnErrorWebpackPlugin,
  HookToLoaderResolutionWebpackPlugin,
  RemoveImportsWebpackPlugin,
  StatsPrintWebpackPlugin,
  WatchOwnFilesWebpackPlugin,
} from "../../webpack-plugins/index.js";
import { kotiiInternal } from "kotii-internal/root";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const guessExtensions = [".js", ".jsx", ".ts", ".tsx"];

configureKotiiLogger();
export default (options) => {
  //   loggas.webpack.debug("THE PROCESS", process.env.APPCONTEXT);
  loggas.webpack.debug("THE STUFF THAT IS", options);
  let env = JSON.parse(process.env.APPCONTEXT); // GET the set APPCONTEXT environment variable
  let appEnvironmentVariables = JSON.parse(process.env.APP_ENVS); // Get context app kotii environment variables
  loggas.webpack.debug("THE APP BUILD FOLDER", env.appBuildFolder);
  loggas.webpack.debug("WEBPACK APP ENVS", appEnvironmentVariables);
  loggas.webpack.debug("THE SERVER CONFIG");
  loggas.webpack.debug("THE APP BUILD FOLDER", env.appBuildFolder);
  loggas.webpack.debug("PNPM STATUS", options.isProjectPNPM);
  loggas.webpack.debug(
    "THE DIR_NAME",
    __dirname,
    path.resolve(__dirname, "../..")
  );
  let scriptsPath = path.resolve(__dirname, "../..");
  // let scriptsWebpackResolve = path.resolve(
  //   scriptsPath,
  //   "kotii-land/dev/app_.js"
  // );
  let scriptsWebpackResolve = path.resolve(
    env.appFolder,
    "node_modules/kotii-internal/dist/app.js"
  );
  loggas.webpack.debug(
    "WEBPACK KOTII RESOLVE",
    scriptsPath,
    scriptsWebpackResolve,
    fs.existsSync(scriptsWebpackResolve)
  );
  loggas.webpack.debug(
    "WEBPACK KOTII RESOLVE path.join",
    path.resolve(`${scriptsWebpackResolve}`)
  );
  const { isProjectPNPM = false } = options;

  return {
    // entry:{
    //   server: options?.build && options.build
    //   ? env.appIndexFile
    //   : ["webpack-hot-middleware/client?path=/__kotii", env.appIndexFile],
    //   "kotii-client": `${scriptsPath}/client-tools/index.js`
    // },
    entry:
      options?.build && options.build
        ? env.appIndexFile
        : ["webpack-hot-middleware/client?path=/__kotii", env.appIndexFile],
    // watchOptions: {
    //   ignored: ["**/*.{css,scss,sass,less,styl}", "**/node_modules/**", "**/src/pages/**"]
    // },
    // watch: false,

    context: env.appFolder,
    mode: process.env.NODE_ENV,
    // infrastructureLogging: { level: "none" },
    stats: "errors-only",
    devtool: "eval",
    output: {
      filename:
        process?.env?.NODE_ENV !== "production"
          ? "app/server.js"
          : "public/assets/js/bundle.js",
      path: options.buildFolder,
      chunkFilename: "lazy/[name].lazy.js",

      // options?.build && options.build
      //   ? options.staticFolder
      //   : `${env.appBuildFolder}`, // save emitted bundle to this path or folder
      clean: true, // Clean build folder before emitting new bundle
      publicPath: "/",
      assetModuleFilename: (pathData, assetInfo) => {
        loggas.webpack.debug("THE PATH DATA", pathData.filename);
        //loggas.webpack.debug("THE PATH INFO", assetInfo);
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
    //     allowlist: ["kotii"],
    //   }),
    // ],
    resolve: {
      symlinks: false,
      extensions: [".js", ".jsx", ".ts", ".tsx", ".png", ".jpg"], // tell webpack to use these extenstions to resolve imported files[for importing without specifying the extension name]
      alias: {
        ...options.appManifest.aliases,
        // ...getKotiiAliasPaths(env.appFolder),
        "react-router-dom": path.resolve(
          `${env.appFolder}/node_modules/react-router-dom`
        ),
        react: path.resolve(`${env.appFolder}/node_modules/react`),
        "react-router": path.resolve(
          `${env.appFolder}/node_modules/react-router`
        ),
        // kotii: scriptsWebpackResolve,
        [USER_LAND_ALIAS_REDUX]: guessPathExtension(
          `${env.appSrc}/store/index`
        ),
        [USER_LAND_ALIAS_START_UP]: guessPathExtension(
          `${env.appSrc}/components/startup/index`
        ),
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
        util: false,

        // "crypto": false,
      }, // Add these as polyfills for use in the browser, webpack no longer auto-polyfills them
      // modules: !isProjectPNPM
      //   ? ["node_modules"]
      //   : [
      //       process.cwd(),
      //       path.join(process.cwd(), "node_modules"),
      //       path.join(process.cwd(), "node_modules/.pnpm/node_modules"),
      //     ],
      modules: ["node_modules"],
    },
    resolveLoader: {
      alias: {
        "sync-assets-loader": path.resolve(
          `${kotiiRootPath}`,
          "webpack-loaders/sync-assets-loader/index.cjs"
        ),
        "sync-css-modules-loader": path.resolve(
          `${kotiiRootPath}`,
          "webpack-loaders/sync-css-modules-loader/index.cjs"
        ),
        // "kotii-eslint-loader": path.resolve(
        //   `${kotiiRootPath}`,
        //   "webpack-loaders/eslint-loader/index.cjs"
        // ),
        // "kotii-prettier-loader": path.resolve(
        //   `${kotiiRootPath}`,
        //   "webpack-loaders/prettier-loader/index.cjs"
        // ),
        "kotii-postcss-loader": path.resolve(
          `${kotiiRootPath}`,
          "webpack-loaders/postcss-loader/index.cjs"
        ),
        "kotii-add-hot-loader": path.resolve(
          `${kotiiRootPath}`,
          "webpack-loaders/add-hot-loader/index.cjs"
        ),

        // "test-styles-loader": path.resolve(
        //   `${kotiiRootPath}`,
        //   "webpack-loaders/testStyles.cjs"
        // ),
      },
    },
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs|jsx)$/,
          // include: !isProjectPNPM
          //   ? [path.resolve(scriptsPath, "/")]
          //   : [
          //       process.cwd(),
          //       path.join(process.cwd(), "node_modules"),
          //       path.join(process.cwd(), "node_modules/.pnpm/node_modules"),
          //     ],
          // // exclude: /node_modules\/(?!(kotii)\/).*/,
          // // include: [scriptsWebpackResolve],
          // exclude: !isProjectPNPM
          //   ? /node_modules\/(?!kotii).+/
          //   : /node_modules\/\.pnpm\/node_modules\/(?!kotii)/,
          exclude: /node_modules/,
          use: [
            {
              loader: "kotii-add-hot-loader",
              options: {
                entryFile: env.appIndexFile,
              },
            },
            {
              loader: "babel-loader",
              options: {
                presets: [
                  ["@babel/preset-env"],
                  ["@babel/preset-react", { runtime: "automatic" }],
                ],
                plugins: [
                  [
                    "babel-plugin-styled-components",
                    { ssr: true, displayName: true },
                  ],
                ],
              },
            },
            // {
            //   loader: "kotii-eslint-loader",
            //   options: {
            //     lintDirectory: env.appSrc,
            //     configPath: `${kotiiRootPath}/webpack-loaders/eslint-loader/eslint.config.cjs`,
            //   },
            // },
            // {
            //   loader: "kotii-prettier-loader",
            //   options: {
            //     prettifyDirectory: env.appSrc,
            //     configPath: `${kotiiRootPath}/webpack-loaders/prettier-loader/prettier.config.cjs`,
            //   },
            // },
          ],
        },
        {
          test: /\.(?:ts|mts|cts|tsx)$/,
          // include: !isProjectPNPM
          //   ? [path.resolve(scriptsPath, "/")]
          //   : [
          //       process.cwd(),
          //       path.join(process.cwd(), "node_modules"),
          //       path.join(process.cwd(), "node_modules/.pnpm/node_modules"),
          //     ],
          // exclude: /node_modules\/(?!(kotii)\/).*/,
          // include: [scriptsWebpackResolve],
          exclude: /node_modules/,
          use: [
            // {
            //   loader:"babel-loader",
            //   options: {
            //     presets: [
            //       ["@babel/preset-env"],
            //       ["@babel/preset-react", { runtime: "automatic" }],
            //     ],
            //   },
            // },
            {
              loader: "kotii-add-hot-loader",
              options: {
                entryFile: env.appIndexFile,
              },
            },
            {
              loader: "ts-loader",
              options: {
                configFile: `${kotiiRootPath}/plugins/wbpconfig/tsconfig.json`,
              },
            },

            // {
            //   loader: "kotii-prettier-loader",
            //   options: {
            //     prettifyDirectory: env.appSrc,
            //     configPath: `${kotiiRootPath}/webpack-loaders/prettier-loader/prettier.config.cjs`,
            //   },
            // },
          ],
        },
        {
          test: /\.html$/,
          use: "html-loader",
        },
        {
          test: /\.(css|sass|scss|less|styl)$/i,
          use: [
            {
              loader: "sync-css-modules-loader",
              options: {
                referenceAssetsPath: `${USER_LAND_ALIASES[USER_LAND_PATH_CSS]}`,
                assetsFile: "styles-css-modules.json",
                fileFormat: "json",
              },
            },
            // {
            //   loader: "kotii-sync-styles-loader",
            //   options: {
            //     referenceAssetsPath: `${kotiiKotiiLandPath}/dev`,
            //     assetsFile: "styles-css-modules.json",
            //     fileFormat: "json",
            //   },
            // },
            {
              loader: "kotii-postcss-loader",
              options: {
                tailwindConfig:
                  options?.tailwindConfig ||
                  `${kotiiRootPath}/webpack-loaders/postcss-loader/tailwind.config.cjs`,
                contentPath: env.appSrc,
                // tsConfigReaders: options.tsConfigReaders,
                // fileReader: options.fileReader,
                buildFolder: options.buildFolder,
                // options?.build && options.build
                //   ? options.staticFolder
                //   : `${env.appBuildFolder}`,
                saveTailwindResources: options.saveTailwindResources,
                mainCssFilename: "global.css",
                appSrc: options.appSrc,
                isProduction: options?.build ? true : false,
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
          use: [
            {
              loader: "sync-assets-loader",
              options: {
                referenceAssetsPath: USER_LAND_ALIASES[USER_LAND_PATH_ASSET],
                assetsFile: "assets.manifest.json",
                fileFormat: "json",
              },
            },
          ],
        },

        {
          test: /\.m?js?x$/,
          resolve: {
            fullySpecified: false, // disable the behaviour
          },
        },
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
      new DeleteFilesWebpackPlugin(
        {
          deleteFolder: options.buildFolder,
        },
        loggas
      ),
      new HookToLoaderResolutionWebpackPlugin(loggas),

      new FinishCompilationOnErrorWebpackPlugin(
        {
          closeWatcher: options.closeWatcher,
          cleanUpCentralFiles: options.cleanUpCentralFiles,
        },
        loggas
      ),
      // new WatchOwnFilesWebpackPlugin(
      //   {
      //     // filesToWatch: `${options.pagesFolder}`,
      //     filesToWatch: [
      //       `${options.appSrc}`,
      //       `${options.appSrc}/**/*.{css,scss,sass,less,styl}`,
      //       `${options.pagesFolder}`,
      //       `${options.appConfigPath}`
      //     ],
      //     appPathsIDS: {
      //      pages: options.pagesFolder,
      //      src: options.appSrc,
      //      styles: `${options.appSrc}/**/*.{css,scss,sass,less,styl}`
      //     },
      //     kotiiKotiiLandPath: kotiiKotiiLandPath,
      //     runOnComplete: options.runOnComplete,
      //     notifyClient: options.notifyClient,
      //     appManifest: options.appConfigPath
      //   },
      //   loggas
      // ),
      // new GetStatsWebpackPlugin({ writeFilePath: env.appBuildFolder }),
      new webpack.DefinePlugin({
        "process.env": {
          ...appEnvironmentVariables,
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
      new RemoveImportsWebpackPlugin(
        {
          removeFilePath: `${USER_LAND_ALIASES[USER_LAND_ALIAS_BUILD]}`,
          removeFileSpecifiers: ["./pages.js"],
        },
        loggas
      ),
      new CopyAssetsWebpackPlugin(
        {
          files: getCopyFiles(options, env),
          assetsPath: options.assetsFolder,
          assetsFolderName: options.appManifest.assets,
          appAssetsPublic: options.appAssetsPublic,
          buildFolder: options.buildFolder,
          kotiiRootPath,

          // runForTailwindCss: options.runForTailwindCss,
        },
        loggas
      ),
      // new CopyAssetsWebpackPlugin(
      //   {
      //     referenceAssetsPath: kotiiKotiiLandPath,
      //     assetsFile: "assets.manifest.json",
      //     fileFormat: "json",
      //     extra: {
      //       inline: options.inline,
      //       emitFile: true,
      //       emitPath:
      //         options?.build && options.build
      //           ? options.staticFolder
      //           : `${env.appBuildFolder}`,
      //     },
      //   },
      //   loggas
      // ),
      new StatsPrintWebpackPlugin(loggas, {
        runForTailwindCss: options.runForTailwindCss,
      }),
      new BroadcastCompilationWebpackPlugin(
        options.runOnceDone,
        options.sendReloadSignaOnRestart,
        loggas
      ),
    ],
  };
};

const getCopyFiles = (options, env) => {
  console.log("GET COPY FILES OPTIONS", options);
  let files = [
    {
      referenceAssetsPath: USER_LAND_ALIASES[USER_LAND_PATH_ASSET],
      kotiiRootPath: kotiiRootPath,
      assetsFile: "assets.manifest.json",
      fileFormat: "json",
      extra: {
        inline: options.inline,
        emitFile: true,
        emitPath: options.buildFolder,
        assetsFolder: options.assetsFolder,
        // emitPath:
        //   options?.build && options.build
        //     ? options.staticFolder
        //     : `${env.appBuildFolder}`,
      },
    },
  ];

  if (options.appManifest?.appStyles) {
    files.push({
      fileEmitter: options.finalizeBuildAssets,
      extra: {
        build: options.buildFolder,
        assetsFolder: options.assetsFolder,
        // options?.build && options.build
        //   ? options.staticFolder
        //   : `${env.appBuildFolder}`,
        appStyles: options?.appManifest?.appStyles || null,
      },
    });
  }

  return files;
};

function configureKotiiLogger() {
  logger.setNameSpaces([
    { namespace: "webpack:compilation", id: "webpack" },
    {
      namespace: "webpack:compilation:deleteFilesWebpackPlugin",
      id: "deleteFilesWebpackPlugin",
    },
    {
      namespace: "webpack:compilation:finishCompilationOnErrorWebpackPlugin",
      id: "finishCompilationOnErrorWebpackPlugin",
    },
    {
      namespace: "webpack:compilation:hookToLoaderResolutionWebpackPlugin",
      id: "hookToLoaderResolutionWebpackPlugin",
    },
    {
      namespace: "webpack:compilation:watchOwnFilesWebpackPlugin",
      id: "watchOwnFilesWebpackPlugin",
    },
    {
      namespace: "webpack:compilation:removeImportsWebpackPlugin",
      id: "removeImportsWebpackPlugin",
    },
    {
      namespace: "webpack:compilation:copyAssetsWebpackPlugin",
      id: "copyAssetsWebpackPlugin",
    },
    {
      namespace: "webpack:compilation:statsPrintWebpackPlugin",
      id: "statsPrintWebpackPlugin",
    },
    {
      namespace: "webpack:compilation:broadcastCompilationWebpackPlugin",
      id: "broadcastCompilationWebpackPlugin",
    },
  ]);
}

function guessPathExtension(guessPath) {
  console.log("THE GUESS PATH WEBPACK", guessPath);

  let livingExtension = guessPath;
  for (let ext = 0; ext < guessExtensions.length; ext++) {
    console.log("THE LOOP", ext);
    let guessPathWithExtension = `${guessPath}${guessExtensions[ext]}`;
    if (fs.existsSync(guessPathWithExtension)) {
      livingExtension = guessPathWithExtension;
      break;
    }
  }
  if (livingExtension === guessPath)
    throw new Error(
      `Node-Kotiijs-Resolve: requested file does not exist:${livingExtension}`
    );
  console.log("THE LIVING EXTENSION", livingExtension);
  return livingExtension;
}

const getKotiiAliasPaths = (workdir) => {
  const KOTII_INTERNAL_ALIASES = {
    "@kotii/_internal/land": `${workdir}/node_modules/kotii-internal/dist/index`,
    "@kotii/_internal/plugins": `${workdir}/node_modules/kotii-creation-time/plugins/index`,
    "@kotii/_internal/root": `${workdir}/node_modules/kotii-creation-time/kotii_paths`,
  };
  return KOTII_INTERNAL_ALIASES;
};
