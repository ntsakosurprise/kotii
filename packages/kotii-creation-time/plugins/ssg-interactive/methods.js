/* eslint-disable no-unused-vars */
import React from "react";
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
    .extractPageInteractiveParts(Page, type)
    .then(function (extracedInteractivePats) {
      self.generatePageJs(extracedInteractivePats).then((pageJs) => {
        data.callback(null, {
          pageJs,
        });
      });
    })
    .catch((err) => {
      self.debug("RENDERAPP REJECTED", err);
      data.callback(err);
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

  return new Promise((resolve, rejects) => {
    if (vendorType === "react") {
      let props = self.extractForReactPage(React.createElement(Page));
      resolve(props);
    }
  });
};

methods.extractForReactPage = function (element) {
  const self = this;

  if (!React.isValidElement(element)) return null;

  const elementProps = { ...element.props };
  self.debug("THE ELEMENT PROPS", elementProps);
};

export default methods;
