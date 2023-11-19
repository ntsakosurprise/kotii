const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')

  this.listens({
    "watch-target": this.handleWatch.bind(this),
  });
};
methods.handleWatch = function (data) {
  // console.log("THE DATA OF Init SCRIPTS", data);
  // data.callback({ message: "Init plugin successfully called" });
  // return;
};
methods.watchFiles = function (data) {
  const self = this;
  const { callback, payload } = data;
  const {
    watched,
    persistent = false,
    ignored = null,
    events = null,
  } = payload;

  const watcher = self.chokidar.watch(watched, {
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
  const { add = () => {}, change = () => {} } = events;
  watcher.on("add", add);
  watcher.on("change", change);
  callback({
    status: true,
    eventsAttached: true,
    message: "Files are successfully watched and events have been attached",
  });
};

export default methods;
