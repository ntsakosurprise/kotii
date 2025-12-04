const methods = {};
methods.init = function () {
  // self.debug('Bitbucket has been initialised')

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
  const self = this;
  const { callback, payload } = data;
  let watcher = self.watcher;
  const { watched, persistent = true, ignored = null, events = null } = payload;
  self.watched = watched;
  self.debug("PLUGIN:: THE WATCHR", watcher);

  if (!watcher) {
    self.debug("PLUGIN:: NO WATCHER FOUND");
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

  self.debug("THE EVENTS", events);

  if (!events)
    return callback({
      status: true,
      eventsAttached: false,
      message: "Files are successfully watched",
      closeWatcher: self.closeFileWatch.bind(self),
    });
  const {
    add = () => {
      self.debug("THE ADD EVENT RUNS");
    },
    change = () => {
      self.debug("THE CHANGE EVENT RUNS");
    },
    delete: deleteEvent = () => {
      self.debug("THE DELETE EVENT RUNS");
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
  self.debug("CLOSING FILE WATCH", onWatcherClose);
  self.debug("THE WATCHER", self.watcher);
  if (self.watcher) {
    self.debug("WATCHR: About to close");
    self.watcher.unwatch(self.watched);
    self.watcher.close().then(() => {
      onWatcherClose();
    });
  }
};

export default methods;
