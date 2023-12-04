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
  const self = this;
  const { callback, payload } = data;
  const watcher = self.watcher;
  const { watched, persistent = true, ignored = null, events = null } = payload;
  if (!wathcer)
    watcher = self.chokidar.watch(watched, {
      persistent,
      ignored,
      // ignored: /(^|[\/\\])\../, // ignore dotfiles
      // persistent: true
    });

  if (!events)
    return callback({
      status: true,
      eventsAttached: false,
      message: "Files are successfully watched",
    });
  const {
    add = () => {},
    change = () => {},
    delete: deleteEvent = () => {},
  } = events;
  watcher.on("add", add);
  watcher.on("change", change);
  watcher.on("unlink", deleteEvent);
  callback({
    status: true,
    eventsAttached: true,
    message: "Files are successfully watched and events have been attached",
  });
};

export default methods;
