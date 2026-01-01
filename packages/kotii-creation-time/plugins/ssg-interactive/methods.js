/* eslint-disable no-unused-vars */
const methods = {};
import fs from "fs";
import path from "path";
methods.init = function () {
  this.listens({
    "generate-ssg-interactivity": this.handleStaticInteractivity.bind(this),
  });
};
methods.handleStaticInteractivity = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { type = "react", Page } = payload;

  self
    .extractPageInteractiveParts(Page)
    .then((extracedInteractivePats) => {
      self.generatePageJs(extracedInteractivePats).then((pageJs) => {
        data.callback(null, {
          pageJs,
        });
      });
    })
    .catch((err) => {
      self.debug("RENDERAPP REJECTED", err);
    });
};
methods.generatePageJs = function (views) {
  const self = this;

  return new Promise((resolve) => {
    self.emit({
      type: "handle-react-static",
      data: {
        views: views,
        staticRender: true,
        callback: (data) => {
          resolve(data);
        },
      },
    });
  });

  // {
  //   view: {
  //     match: '/',
  //     vHandler: 'react',
  //     title: 'REACT SERVE-SIDE RENDERING COMPONENT'
  //   },
  //   payload: {
  //     parsed: { url: '/', handler: '' },
  //     handler: '/home',
  //     request: {
  //       req: [IncomingMessage],
  //       res: [ServerResponse],
  //       next: [Function: next]
  //     }
  //   },
  //   callback: [Function: bound viewHandler]
  // }
};

methods.extractPageInteractiveParts = function (filepath, content) {
  const self = this;
  const pao = self.pao;
  const saveToFile = pao.pa_saveToFile;
  saveToFile(filepath, content);
};

export default methods;
