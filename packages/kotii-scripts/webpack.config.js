
var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals') 
const FileManagerPlugin = require('filemanager-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



// const NodemonPlugin = require('nodemon-webpack-plugin') 
const root = path.resolve(__dirname)

// console.log('THE ROOT IN WEBPACK')
// console.log(root)




var anziiCli = {

  
  entry: ["@babel/polyfill",'./plugins/index'],
  target: 'node',
  externals: [
    { express: 'commonjs express' },
  nodeExternals({
    modulesDir: path.resolve(__dirname, './node_modules'),
    allowlist: ['webpack/hot/poll?1000']
}),
nodeExternals({
    modulesDir: path.resolve(__dirname, './node_modules'),
    allowlist: ['webpack/hot/poll?1000']
})],
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        use: 'babel-loader',
       
      }
    ],
    
  },

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
    
  ],
  resolve: {
    roots: [root]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions:{
        keep_classnames: false,
        keep_fnames: false,
        mangle: true
      }
    })],
  },
  // devtool: "source-map"

 
}


// var le = {

//   mode: 'development',
//   entry: ["@babel/polyfill",'./list/index'],
//   target: 'node',
//   externals: [
//     { express: 'commonjs express' },
//   nodeExternals({
//     modulesDir: path.resolve(__dirname, './node_modules'),
//     whitelist: ['webpack/hot/poll?1000']
// }),
// nodeExternals({
//     modulesDir: path.resolve(__dirname, './node_modules'),
//     whitelist: ['webpack/hot/poll?1000']
// })],
//   output: {
//     path: path.resolve('list'),
//     filename: 'le.js',
//     libraryTarget: 'commonjs2'
//   },
//   module: {
//     rules: [
//       { 
//         test: /\.(js)$/, 
//         use: 'babel-loader',
       
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       __isBrowser__: "false"
//     })
//   ]
// }


// var le2 = {

//   mode: 'development',
//   entry: ["@babel/polyfill",'./list2/index'],
//   target: 'node',
//   externals: [
//     { express: 'commonjs express' },
//   nodeExternals({
//     modulesDir: path.resolve(__dirname, './node_modules'),
//     whitelist: ['webpack/hot/poll?1000']
// }),
// nodeExternals({
//     modulesDir: path.resolve(__dirname, './node_modules'),
//     whitelist: ['webpack/hot/poll?1000']
// })],
//   output: {
//     path: path.resolve('list2'),
//     filename: 'le.js',
//     libraryTarget: 'commonjs2'
//   },
//   module: {
//     rules: [
//       { 
//         test: /\.(js)$/, 
//         use: 'babel-loader',
       
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       __isBrowser__: "false"
//     })
//   ]
// }







module.exports = [anziiCli]