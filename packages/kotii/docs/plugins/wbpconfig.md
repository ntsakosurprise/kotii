# Wbpconfig

<h2><strong>What it is?</strong></h2>

<p>This is a plugin that is tasked with running webpack operations. It creates configurations, initiates webpack instances, hook plugins to webpack, and many other webpack goodies.</p>

<h2><strong>Events It Listens To?</Strong></h2>

- webpack-config

<h2><strong>Event Handlers for each event</Strong></h2>

- webpack-config

# **What it does**

- It registers a listener to listen to webpack-config events

## **What each of the event-handlers does**

### **_handleWebpackConfig_**

- It retrieves data from the event object
- It extracts project resource from the data object
- It then processes environment variables by calling `getEnvVariables()`
- `getEnvVariables()` function emits an event to [env](./env.md) plugin to get environment variables
- It then calls `configureWebPack()` function to begin webpack configurations

### **_configureWebPack_**

- It retrieves config data
- It retrieves a webpackConfig config function based on weather we are running server side rendering or otherwise
- It then adds a special kotiiJS environment variable name `KOTII_APP_META` to `env` object
- It then attaches environment variables to the current process by calling `setContextEnv()`
- It then calls `webpackConfig()` function to create a webpack config. It passes all the needed data to this function
- It then creates webpack compiler from the created config object above
- It then calls a function to hook into webpack
- It then calls `configDevServer()` function if the command is not for _build_
- It then just runs webpack compiler if command is _build_
- It finally notifies the emitting source that requested task has been completed

### **_configDevServer_**

- It checks the server type, **_NOTE_** server types can be ssr or spa
- It retrieves webpack middlewares if server type is ssr
- It then emits a `take-ssr-routes` event to share routes with interested parties
- It then checks if there's an api folder in user's project
- It then loads `.config.js` file from the api folder
- It then merges api routes and views routes
- It then emits a `config-manual` event to anziiJS and passing to it routes information and webpack configurations

### **_ANZIIJS_**

- It will extract the event data from the emitter of `config-manual`
- It will then set up the webpack midddlewares, both webpack-hot-middleware and webpack-dev-middlewares
- It will then set up everything else including routes, static folders, request handlers, etc
- It will then start-up a server and begin listening for requests
- It will then handle request for both api and views(react components)
