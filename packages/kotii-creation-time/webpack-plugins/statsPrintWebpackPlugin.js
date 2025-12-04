class StatsPrintWebpackPlugin {
  constructor(loggas, options) {
    this.loggas = loggas;
    this.options = options;
    this.loggas.statsPrintWebpackPlugin.debug("");
  }
  apply(compiler) {
    compiler.hooks.done.tap("StatsPrintWebpackPlugin", (stats) => {
      this.loggas.statsPrintWebpackPlugin.debug("Stats", stats);

      if (process?.runTailwindCss) {
        this.options.runForTailwindCss();
      }

      if (!process.env.KOTII_WEBPACK_COMPILATION_SET) {
        process.env.KOTII_WEBPACK_COMPILATION_SET = "true";
        this.loggas.statsPrintWebpackPlugin.info(
          "App has been Successfully compiled."
        );
      } else {
        this.loggas.statsPrintWebpackPlugin.info(
          "has successfully re-compiled."
        );

        // this.runOnComplete(this.filesToWatch, this.isWatchingFiles);
      }
    });
  }
}

export default StatsPrintWebpackPlugin;
