class WatchOwnFilesWebpackPlugin {
  filesToWatch = "";
  isWatchingFiles = false;
  runOnComplete = null;

  constructor(options) {
    console.log("REMOVE IMPORT OPTIONS", options);
    this.filesToWatch = options.filesToWatch;
    this.runOnComplete = options.runOnComplete;
    this.notifyClient = options.notifyClient;
  }
  apply(compiler) {
    compiler.hooks.initialize.tap("WatchOwnFilesWebpackPlugin", (stats) => {
      console.log("PLUGIN:: WATCHFILES");
      // this.runOnComplete()

      if (this.isWatchingFiles) return;
      this.isWatchingFiles = true;

      console.log("PLUGIN:: FILES TO WATCH", this.filesToWatch, compiler.close);
      this.runOnComplete(this.filesToWatch, this.isWatchingFiles);
    });
  }
}

export default WatchOwnFilesWebpackPlugin;
