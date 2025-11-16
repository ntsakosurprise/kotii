# How ebpack source works

## At Nodejs Build Time

- It caches the main function that powers the engine
- It then merges the main function to various features of webpack using
  getters

## At Runtime

### Webpack function(webpack.js)

- The `webpack function` is called and passed arguments,
  namely; options and a callback. <br> **NOTE** The options is our webpack config object,
  while a callback is any function that we want webpack to run once compilation is completed.
- Webpack function creates a `create` function that is called immediately after creation
- Some checks are run before procedding to compile
- Then webpack calls createCompiler
- Webpack then normalizes options and sets defaults
- It then creates a compilation object from [Compiler](./compiler) class
- It then hooks [`NodeEnvironmentPlugin`](./plugins/node-environment-plugin) to future
  compilation
- It then hooks any user-defined plugins to a possible future compilation
- It then fires `compiler.hooks.environment` event for potential handlers to handle
- It then fires `compiler.hooks.afterEnvironment` event for potential handlers to handle
- It then initiates `WebpakckApplyPlugin` and calls its `process` method. <br> **NOTE** `new WebpakckApplyPlugin.process()` serves to initiate the rest of the native webpack plugins, essentially hooking them up to the compilation process. All plugins are hooked when webpack calls their `.apply` method. Every webpack plugin is required to have this method.

### Compiler.run

**NOTE** Webpack compilation begins once we call `Compiler.run` method, this can be done by webpack from the cli or it can be done by us directly through webpack's nodejs api.
Refer to [Compiler](./compiler.md) for compiler functinality
