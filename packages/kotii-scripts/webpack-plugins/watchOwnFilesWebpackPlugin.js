class WatchOwnFilesWebpackPlugin {
  filesToWatch = "";
  isWatchingFiles = false;
  runOnComplete = null;

  constructor(options, loggas) {
    this.loggas = loggas;
    this.loggas.watchOwnFilesWebpackPlugin.debug(
      "REMOVE IMPORT OPTIONS",
      options
    );
    this.filesToWatch = options.filesToWatch;
    this.runOnComplete = options.runOnComplete;
    this.notifyClient = options.notifyClient;
  }
  apply(compiler) {
    compiler.hooks.initialize.tap("WatchOwnFilesWebpackPlugin", (stats) => {
      this.loggas.watchOwnFilesWebpackPlugin.debug("PLUGIN:: WATCHFILES");
      // this.runOnComplete()

      if (this.isWatchingFiles) return;
      this.isWatchingFiles = true;

      this.loggas.watchOwnFilesWebpackPlugin.debug(
        "PLUGIN:: FILES TO WATCH",
        this.filesToWatch,
        compiler.close
      );
      this.runOnComplete(this.filesToWatch, this.isWatchingFiles);
    });
  }
}

export default WatchOwnFilesWebpackPlugin;
