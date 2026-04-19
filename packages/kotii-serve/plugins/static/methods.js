/* eslint-disable no-unused-vars */
const methods = {};
import fs from "fs";
import path from "path";
methods.init = function () {
  this.listens({
    handleStaticCommand: this.handleStaticCommand.bind(this),
  });
};
methods.handleStaticCommand = function (data) {
  const self = this;
  const setCall = data.callback;
  const { folder = "build" } = data;

  self.emit({
    type: "config-manual",
    data: {
      payload: {
        configs: {
          router: [],
          domain: [{ name: "static", set: folder }],
          cluster: { workers: 1, spawn: false },
          // server: serverConfig,
        },
      },
      callback: (data) => {
        // self.debug("SENDING A RESTART SIGNAL",process.env?.CUSTOM_RESTART)
        //     if(process.env?.CUSTOM_RESTART){
        //       self.debug("SENDING A RESTART SIGNAL")
        //       process.env.CUSTOM_RESTART = "false"
        //       self.notifyClient({
        //         name: "kotii-client-reload",
        //         vendor: "kotii",
        //       });
        //     }
        // callback(data.message);
      },
    },
  });
};

export default methods;
