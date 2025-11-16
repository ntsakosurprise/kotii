class BroadcastCompilationWebpackPlugin {
  runOnceDone = null;
  shouldRunOnceDone = true;
  constructor(runOnceDone, sendReloadSignaOnRestart, loggas) {
    this.loggas = loggas;
    this.runOnceDone = runOnceDone;
    this.loggas.broadcastCompilationWebpackPlugin.debug("");
    this.sendReloadSignaOnRestart = sendReloadSignaOnRestart;
  }
  apply(compiler) {
    compiler.hooks.done.tap("BroadcastCompilationWebpackPlugin", () => {
      this.loggas.broadcastCompilationWebpackPlugin.debug(
        "Compilation has succeded"
      );
      if (process?.env?.NODE_ENV === "development") {
        try {
          if (this.shouldRunOnceDone) {
            this.shouldRunOnceDone = false;
            this.runOnceDone();
          } else {
            this.loggas.broadcastCompilationWebpackPlugin.debug(
              "RESTART SIGNAL"
            );
            this.sendReloadSignaOnRestart();
          }
        } catch (error) {
          console.log("RUN ONCE DONE ERRORED", error);
        }
      }
    });
  }
}

export default BroadcastCompilationWebpackPlugin;
