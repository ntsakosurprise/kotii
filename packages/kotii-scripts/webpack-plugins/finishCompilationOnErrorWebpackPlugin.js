class FinishCompilationOnErrorWebpackPlugin {
  closeWatcher = null;
  constructor(options = null, loggas) {
    this.loggas = loggas;
    this.closeWatcher = options.closeWatcher;
  }
  apply(compiler) {
    compiler.hooks.done.tap(
      "FinishCompilationOnErrorWebpackPlugin",
      (stats) => {
        this.loggas.finishCompilationOnErrorWebpackPlugin.debug(
          "PLUGIN:: FINISHCOMPILATION ON ERROR"
        );
        if (stats.compilation.errors.length > 0) {
          this.loggas.finishCompilationOnErrorWebpackPlugin.debug(
            "PLUGIN:: FINISHCOMPILATION WE ARE EXITING CODE",
            stats.compilation.errors
          );
          throw new Error("PLUGIN:: FINISH PLUGIN ERROR");
        }
      }
    );
  }
}

export default FinishCompilationOnErrorWebpackPlugin;
