/* eslint-disable no-unused-vars */
const methods = {};
import fs from "fs";
import path from "path";
methods.init = function () {
  this.listens({
    "run-spa": this.handleSpaCommand.bind(this),
    "catch-all": this.handleCatchAll.bind(this),
  });
};
methods.handleSpaCommand = function (data) {
  const self = this;
  self["callback"] = data.callback;
  const { folder = "build" } = data;
  self.folderName = folder;

  self.emit({
    type: "config-manual",
    data: {
      payload: {
        customKickOff: true,
        config: {
          router: [
            {
              catchAll: true,
            },
          ],
          domain: [{ name: "static", set: folder }],
          cluster: { workers: 1, spawn: false },
          server: "server",
        },
      },
      callback: (data) => {},
    },
  });
};
methods.handleCatchAll = function (data) {
  const self = this;

  let html = path.resolve(process.cwd(), self.folderName);
  self.debug("HTML PATH", html);
  self.callback({
    html: html,
  });

  // self.emit({
  //   type: "handle-react-spa",
  //   data: {
  //     payload: { build: "server-build" },
  //     callback: (gotValue) => {
  //       self.debug("SPA GENERATION IS COMPLETED", gotValue, self.callback);
  //       self.callback({
  //         html: gotValue,
  //       });
  //     },
  //   },
  // });
};

export default methods;
