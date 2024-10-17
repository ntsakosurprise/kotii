const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')

  this.listens({
    "watch-target": this.handleWatch.bind(this),
    "watch-stop-target": this.handleStopWatching.bind(this),
  });
};
methods.handleWatch = function (data) {
  const self = this;
  self.watchFiles(data);
};
methods.handleStopWatching = function (data) {
  const self = this;
  self.watcher.close().then(() => {
    data.callback({ status: true, message: "The watcher has been clossed" });
  });
};
methods.watchFiles = function (data) {
  console.log("WATCHR::", data);
  const self = this;
  const { callback, payload } = data;
  let watcher = self.watcher;
  const { watched, persistent = true, ignored = null, events = null } = payload;
  self.watched = watched;
  console.log("PLUGIN:: THE WATCHR", watcher);

  if (!watcher) {
    console.log("PLUGIN:: NO WATCHER FOUND");
    watcher = self.chokidar.watch(watched, {
      persistent,
      ignored,
      ignoreInitial: true,
      // awaitWriteFinish: true,
      alwaysStat: true,
      // ignored: /(^|[\/\\])\../, // ignore dotfiles
      // persistent: true
    });
    self.watcher = watcher;
  }

  console.log("THE EVENTS", events);

  if (!events)
    return callback({
      status: true,
      eventsAttached: false,
      message: "Files are successfully watched",
      closeWatcher: self.closeFileWatch.bind(self),
    });
  const {
    add = () => {
      console.log("THE ADD EVENT RUNS");
    },
    change = () => {
      console.log("THE CHANGE EVENT RUNS");
    },
    delete: deleteEvent = () => {
      console.log("THE DELETE EVENT RUNS");
    },
  } = events;
  watcher.on("add", add);
  watcher.on("change", change);
  watcher.on("unlink", deleteEvent);

  callback({
    status: true,
    eventsAttached: true,
    message: "Files are successfully watched and events have been attached",
    closeWatcher: self.closeFileWatch.bind(self),
  });
};
methods.closeFileWatch = function (onWatcherClose = () => {}) {
  const self = this;
  console.log("CLOSING FILE WATCH", onWatcherClose);
  console.log("THE WATCHER", self.watcher);
  if (self.watcher) {
    console.log("WATCHR: About to close");
    self.watcher.unwatch(self.watched);
    self.watcher.close().then(() => {
      onWatcherClose();
    });
  }
};

export default methods;
