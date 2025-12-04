class FinishCompilationOnErrorWebpackPlugin {
  pluginName = `finishCompilationOnErrorWebpackPlugin`;
  closeWatcher = null;
  isResolvingError = false;
  constructor(options = null, loggas) {
    this.loggas = loggas;
    this.closeWatcher = options.closeWatcher;
    this.cleanUpCentralFiles = options.cleanUpCentralFiles;
  }
  apply(compiler) {
    const LOGID = this.pluginName;
    console.log("THE LOGID", LOGID);
    compiler.hooks.done.tap(
      "FinishCompilationOnErrorWebpackPlugin",
      (stats) => {
        this.loggas[LOGID].debug("PLUGIN:: FINISHCOMPILATION ON ERROR");
        if (stats.compilation.errors.length > 0) {
          this.loggas[LOGID].debug(
            "PLUGIN:: FINISHCOMPILATION WE ARE EXITING CODE",
            stats.compilation.errors
          );
          console.log("FINISH WEBPACK DONE ERROR", stats.compilation.errors);
          // console.log("PLUGIN ERRORS", stats.compilation.errors);

          // Usage:
          this.loggas[LOGID].debug(
            "THE ERRORS.LEGNTH",
            stats.compilation.errors.length
          );
          const matchPartialPagesPathPattern = `/kotii-land/dev/pages.js`;
          const matchPartialBuildPathPattern = `/kotii-land/dev/build.js`;
          for (const err of stats.compilation.errors) {
            const filteredErrorInfo = this.parseWebpackError(err);
            const { file = null } = filteredErrorInfo;
            if (
              file &&
              (file.indexOf(matchPartialPagesPathPattern) >= 0 ||
                file.indexOf(matchPartialBuildPathPattern) >= 0)
            ) {
              this.isResolvingError = true;
              this.cleanUpCentralFiles().then(() => {
                console.log("Central files");
                // this.closeWatcher(()=>{
                this.loggas[LOGID].debug("WATCHER CLOSED ABOUT TO DESTROY");
                console.log("WATCHER CLOSED ABOUT TO DESTROY");
                this.isResolvingError = false;
                process.send({
                  event: "destroy-child",
                  data: { title: "child destroying" },
                });

                // });
              });
              console.log("THE END OF FILE CHECK IFS");
              break;
            }
          }

          // throw new Error("PLUGIN:: FINISH PLUGIN ERROR");
        }
      }
    );
  }

  parseWebpackError(error) {
    let file = error.module?.resource || null;
    let line = null;
    let column = null;

    if (error.loc) {
      if (typeof error.loc === "string") {
        // old style: "line:column"
        const parts = error.loc.split(":");
        line = parseInt(parts[0], 10);
        column = parseInt(parts[1], 10);
      } else if (typeof error.loc === "object") {
        // Webpack 5: { start: { line, column }, end: {...} }
        line = error.loc.start?.line ?? null;
        column = error.loc.start?.column ?? null;
      }
    }

    return { file, line, column, message: error.message };
  }
}

export default FinishCompilationOnErrorWebpackPlugin;
