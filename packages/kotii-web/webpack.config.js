import { join } from "path";
// const webpack = require("webpack");
import HTMLWebpackPlugin from "html-webpack-plugin";

export const entry = "./src/index.js";
export const target = "web";
export const output = {
    path: join("dist"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "",
};
export const resolve = {
    extensions: [".js", ".jsx"],
    alias: {
        Layouts: "/src/components/layout/index",
        Pages: "/src/components/pages/index",
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
    },
};
export const module = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader",
        },
        {
            test: /\.html$/,
            use: "html-loader",
        },
        /* Choose only one of the following two: if you're using
plain CSS, use the first one, and if you're using a
preprocessor, in this case SASS, use the second one */
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
        // {
        //   test: /\.scss$/,
        //   use: ["style-loader", "css-loader", "sass-loader"],
        // },
    ],
};
export const plugins = [
    new HTMLWebpackPlugin({
        template: `${__dirname}/public/index.html`,
        filename: "index.html",
        inject: "body",
    }),
];
