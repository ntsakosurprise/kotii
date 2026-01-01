/* eslint-disable no-unused-vars */
import React from "react";
const methods = {};
import fs from "fs";
import path from "path";
import { elementAt } from "rxjs-compat/operator/elementAt";
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
    .extractPageInteractiveParts(Page, type)
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

methods.extractPageInteractiveParts = function (Page, vendorType) {
  const self = this;
  if (vendorType === "react") {
    self.extractForReactPage(<Page />);
  }
};

methods.extractForReactPage = function (element) {
  const self = this;

  if (!React.isValidElement(element)) return null;
};

export default methods;
