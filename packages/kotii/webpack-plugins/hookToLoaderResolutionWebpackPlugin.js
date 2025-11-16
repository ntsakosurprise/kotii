class HookToLoaderResolutionWebpackPlugin {
  dir = null;

  constructor(loggas, options = null) {
    this.loggas = loggas;
    this.loggas.hookToLoaderResolutionWebpackPlugin.debug(
      "DELETE HOT FILES OPTIONS",
      options
    );

    // this.deleteFolder = options.deleteFolder;
  }

  apply(compiler) {
    compiler.resolverFactory.hooks.resolver
      .for("normal")
      .tap("name", (resolver) => {
        // you can tap into resolver.hooks now

        // this.loggas.hookToLoaderResolutionWebpackPlugin.debug("RESOLVE HOOK RESULT RESOLVER", resolver);
        resolver.hooks.result.tap(
          "HookToLoaderResolutionWebpackPlugin",
          (result) => {
            // this.loggas.hookToLoaderResolutionWebpackPlugin.debug("RESOLVE HOOK RESULT", result);
            return result;
          }
        );
      });
    // resolver
    //   .getHook("resolve")
    //   .tapAsync(
    //     "HookToLoaderResolutionWebpackPlugin",
    //     (request, resolveContext, callback) => {
    //       // 1. check if the request is point to our component folder
    //       // resolver.join is same as path.join, but memoized
    //       this.loggas.hookToLoaderResolutionWebpackPlugin.debug("THE REQUEST", request, resolveContext, callback);
    //       const { dir } = path.parse(
    //         resolver.join(request.path, request.request)
    //       );
    //       this.loggas.hookToLoaderResolutionWebpackPlugin.debug("THE DIR", dir);
    //       const match = dir === this.dir;

    //       // if (match) {

    //       //   // 2. get the name of the file being requested & check if it exists.
    //       //   // in import zip from `./src/components/zip`, 'zip' is the name.
    //       //   const { name } = path.parse(request.request);
    //       //   const pathExist = fs.existsSync(path.join(this.dir, `${name}`));
    //       //   if (!pathExist) {

    //       //     // create a new request object.
    //       //     // we'll swap the request to something like 'lodash/zip'
    //       //     const _request = {
    //       //       ...request,
    //       //       request: `${this.moduleName}/${name}`
    //       //     }
    //       //     // swap the target hook to 'module' to resolve it as a module.
    //       //     const _target = resolver.ensureHook('module');
    //       //     return resolver.doResolve(_target, _request, null, resolveContext, callback);
    //       //   }
    //       // }

    //       // 3. otherwise continue to the next hook
    //       const target = resolver.ensureHook("parsedResolve");
    //       return resolver.doResolve(
    //         target,
    //         request,
    //         null,
    //         resolveContext,
    //         callback
    //       );
    //     }
    //   );
  }

  // compiler.hooks.beforeCompile.tap("DeleteFilesWebpackPlugin", () => {
  //   this.loggas.hookToLoaderResolutionWebpackPlugin.debug("deleteFilesWebpackPlugin:: FILES TO WATCH");

  //   const filesToGet = globSync(
  //     `${this.deleteFolder}/**/*.{js,jsx,ts,tsx,json}`
  //   );
  //   this.loggas.hookToLoaderResolutionWebpackPlugin.debug("PLUGIN:: DELETE PLUGIN", filesToGet);
  //   let deleteList = filesToGet.filter((filePath) => {
  //     if (filePath.indexOf(".hot-update") >= 0) return true;
  //   });
  //   deleteList.forEach((pathToDelete) => {
  //     this.loggas.hookToLoaderResolutionWebpackPlugin.debug("CURRENTLY DELETING FILE", pathToDelete);
  //     fs.unlinkSync(pathToDelete);
  //   });
  //   this.loggas.hookToLoaderResolutionWebpackPlugin.debug("THE DELETE LIST", deleteList);
  // });
}

export default HookToLoaderResolutionWebpackPlugin;
