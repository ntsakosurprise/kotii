/* eslint-disable no-unused-vars */
import React from "react";
const methods = {};
import fs from "fs";
import path, { resolve } from "path";
import { rejects } from "assert";
import { renderToStaticMarkup } from "react-dom/server";

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
  console.log("HANDLE STATIC INTERACTIVE", data);

  self
    .extractPageInteractiveParts(Page, type)
    .then(function (extracedInteractivePats) {
      let pageJs = self.generatePageJs(extracedInteractivePats);
      data.callback(null, {
        extracedInteractivePats,
      });
    })
    .catch((err) => {
      self.debug("RENDERAPP REJECTED", err);
      data.callback(err);
    });
};
methods.generatePageJs = function (views) {
  const self = this;
  return "THE PAGE JS";

  // return new Promise((resolve) => {
  //  resolve("THE PAGE JS")
  // });

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

  console.log("THE EXTRACT TREE PAGE", Page, typeof Page);
  return new Promise((resolve, rejects) => {
    if (vendorType === "react") {
      // let jsxTree = React.createElement(Page)
      // let treeFromPage = jsxTree()
      // console.log("THE EXTRACT TREE JSX", treeFromPage)
      let ReactRenderTimeInterceptor =
        self.reactRenderTimeInterceptor.bind(self);

      let pageElement;
      try {
        pageElement = self.normalizeToReactElement(Page);
      } catch (err) {
        console.log("THE PAGE ELEMENT CHECK ERROR", err);
      }
      // let tree = self.extractForReactPage();
      console.log("THE EXTRACT TREE", ReactRenderTimeInterceptor);
      let html = renderToStaticMarkup(
        <ReactRenderTimeInterceptor>{pageElement}</ReactRenderTimeInterceptor>
      );
      console.log("THE EXTRACT HTMLE", html);
      resolve(html);
    }
  });
};
methods.reactRenderTimeInterceptor = function ({ children }) {
  const self = this;

  return self.interactionsExtractor(children);
};
methods.interactionsExtractor = function (element) {
  const self = this;

  // Handle arrays (React.Children.map may produce them)
  if (Array.isArray(element)) {
    return element.map((el) => self.interactionsExtractor(el));
  }

  // Not a React element → return as-is (string, number, null)
  if (!React.isValidElement(element)) return element;

  const elementProps = { ...element.props };

  if (elementProps.children) {
    elementProps.children = React.Children.map(elementProps.children, (child) =>
      self.interactionsExtractor(child)
    );
  }

  return React.cloneElement(element, elementProps);
};

methods.extractForReactPage = function (element) {
  const self = this;
};
methods.normalizeToReactElement = function (input) {
  // Already a React element → use as-is
  if (React.isValidElement(input)) {
    return input;
  }

  // Component function → create element
  if (typeof input === "function") {
    return React.createElement(input);
  }

  throw new Error(
    "extractPageInteractiveParts expected a React element or component function"
  );
};

export default methods;
