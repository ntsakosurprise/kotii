# Webpack.server.config

## What it is?

    This is a webpack configuration function. It takes a passed options argument which has a collection of resources that are needed to create a config that will later be passed to webpack for processing. This config is processed by the wbpconfig plugin.

# **What it does**

- It imports a list of resources needed to create an intended config object. KotiiJS webpack plugins are part of the import list
- It creates filename and folder name using esm modules [`__filename`, `__foldername`]
- It then creates and exports a config function that will later be run to produce a config object

# **What The Config Function Does**

- It retrieves the options object that is passed to it at execution time
- It retrieves the `APP_CONTEXT` objects from the environment.
  > **NOTE:** The APP_CONTEXT is a large stringified object that contains some information about the app. Saving such information using an environment variable is not ideal, and as result, we will move this object out of the environment in future.
- It then creates a `scriptsPath` variable.

  > **Why?** <br> The scriptsPath variable is created to store an absolute path that properly points to kotiiJS' project root. Doing this is important because it allows us to access some of resources we require from the project its self, so storing this path here gives us a level of assurance that we will almost always know where to find resources.<br><br> Please note that currently, this approach is not as solid because file locations may change. We just are now relying on the location of this file for our need, but that location may be different in future. Please also note that this may change in future when we have a better way of handling.<br><br>

- It then creates a `scriptsWebpackResolve` variable.
  > **Why?** <br> The scriptsWebpackResolve variable is created to store an absolute path to kotiiJS' `app_.js`, this file is the main exporter of certain kotiiJS resources in user land, e.g the `App` function that users import to use to initiate a kotiiJS app.<br><br> KotiiJS uses two of these type of files, one for dev [app\_.js](./app_.md) and another one for production [app_b.js](./app_b.md)<br><br> The reason they were separated was due to a context conflict that occured between wepback's resolution approach vs nodejs' resolution approach. When compiling the project, webpack will properly execute the file, but then nodejs would complain about not finding the file's imports and vise versa.<br><br> As a result of the issue, we decided to make these separate files(and this has affected dependecies of thes respective files) as a solution, one for webpack, and one for nodejs. The production file `app_b.js` is the file that package.json uses as the main exporter of resources.<br><br> Because the file `app_.js` is used for webpack, the creation of the absolute path for it is to let webpack know that it needs to use the file for any imports that users may need from kotiiJS
- It then returns an object

# **The Returned Object Properties Explained**

- `entry` The entry property is used to store the entry point to the project, which is a file that webpack will use to begin its transpilation process.<br><br>
  > **NOTE** <br> The entry property's value is based on a condition that checks if we are running a build script of the other ones(dev,start), if we are running a build script, it simply just uses an index file as an entry point, otherwise, it uses a combination of the project's index file and a `webpack-hot-middleware`'s client file as the entry point. In other words, it will package our source along webpack-hot-middleware's<br><br> `webpack-hot-middleware` is used to perform hot-module reload during app development.
- `context` The context property is used to set source folder where webpack is to search for the entry point files
- `mode` The mode property is used to set an environment that webpack transpiles on.
  > **NOTE** <br> The environments are `development` and `production`, webpack's transpilation process depends on which environment is currently set. It performs some optimizations when in production environment
- `output` The output property is used to config where and how webpack is to store the output and the way it should do it
